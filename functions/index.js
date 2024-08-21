const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const admin = require("firebase-admin");
admin.initializeApp();

// Initialize Cloud Firestore
const db = admin.firestore();

// Configure the nodemailer transporter
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.sendFormDataEmail = functions.https.onCall(async (data, context) => {
  const mailOptions = {
    from: gmailEmail,
    to: "khalsadastarcenter@gmail.com",
    subject: "New Turban Tying Service Booking",
    html: `
      <h2>New Booking Request</h2>
      <p>You have received a new booking request with the following details:</p>
      <ul>
        <li><strong>Name:</strong> ${data.name}</li>
        <li><strong>Email:</strong> ${data.email}</li>
        <li><strong>Phone:</strong> ${data.phone}</li>
        <li><strong>Date:</strong> ${data.date}</li>
        <li><strong>Time:</strong> ${data.time}</li>
        <li><strong>Number of Turbans:</strong> ${data.numTurbans}</li>
        <li><strong>Preferred Turban Color:</strong> ${data.turbanColor}</li>
        <li><strong>Turban Style:</strong> ${data.turbanStyle}</li>
        <li><strong>Address:</strong> ${data.address}</li>
        <li><strong>Special Requirements:</strong> ${data.specialRequirements}
        </li>
      </ul>
    `,
  };

  try {
    await mailTransport.sendMail(mailOptions);
    console.log("Email sent successfully");

    // Save the form data to Cloud Firestore
    await db.collection("bookings").add({
      name: data.name,
      email: data.email,
      phone: data.phone,
      date: data.date,
      time: data.time,
      numTurbans: data.numTurbans,
      turbanColor: data.turbanColor,
      turbanStyle: data.turbanStyle,
      address: data.address,
      specialRequirements: data.specialRequirements,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return {success: true};
  } catch (error) {
    console.error("Error sending email or saving form data:", error);
    return {success: false, error: error.toString()};
  }
});

