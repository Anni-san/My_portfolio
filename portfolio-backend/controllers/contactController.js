const Contact = require("../models/Contact");
const { sendContactEmail } = require("../config/email");

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateInput = (name, email, subject, message) => {
  const errors = [];

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }

  if (!email || !validateEmail(email)) {
    errors.push('Valid email is required');
  }

  if (!subject || typeof subject !== 'string' || subject.trim().length < 3) {
    errors.push('Subject must be at least 3 characters long');
  }

  if (!message || typeof message !== 'string' || message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  }

  return errors;
};

// exports.sendMessage = async (req, res) => {
//   const { name, email, message } = req.body;

//   if (!name || !email || !message) {
//     return res.status(400).json({ message: "All fields required" });
//   }

//   try {
//     // 1. Save to DB
//     const newContact = new Contact({ name, email, message });
//     await newContact.save();

//     // 2. Setup mail
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS
//       }
//     });

//     // 3. Email content
//     const mailOptions = {
//       from: email,
//       to: process.env.EMAIL_USER,
//       subject: `New Contact Message from ${name}`,
//       text: `
// Name: ${name}
// Email: ${email}
// Message: ${message}
//       `
//     };

//     // 4. Send mail
//     await transporter.sendMail(mailOptions);

//     res.status(200).json({ message: "Message sent successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Something went wrong" });
//   }
// };
exports.sendMessage = async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // 1. Input validation
    const validationErrors = validateInput(name, email, subject, message);
    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: validationErrors
      });
    }

    console.log("📥 Incoming contact request:", { name, email, subject, messageLength: message?.length });

    // 2. Save to MongoDB
    const newContact = await Contact.create({
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim()
    });
    console.log("✅ Saved to MongoDB with ID:", newContact._id);

    // 3. Send email using centralized email service
    const emailResult = await sendContactEmail(name, email, subject, message);
    console.log("✅ Email sent successfully:", emailResult);

    // 6. Return success response
    res.status(200).json({
      success: true,
      message: "Message sent successfully",
      data: {
        contactId: newContact._id,
        emailSent: true
      }
    });

  } catch (error) {
    console.error("❌ CONTACT FORM ERROR:", {
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
      timestamp: new Date().toISOString()
    });

    // Handle specific error types
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: "Database validation failed",
        errors: Object.values(error.errors).map(err => err.message)
      });
    }

    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Duplicate contact submission"
      });
    }

    // Handle email sending errors specifically
    if (error.code === 'EAUTH' || error.code === 'EENVELOPE') {
      return res.status(500).json({
        success: false,
        message: "Email service configuration error",
        error: process.env.NODE_ENV === 'development' ? error.message : "Failed to send email"
      });
    }

    // Generic server error
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: process.env.NODE_ENV === 'development' ? error.message : "Something went wrong"
    });
  }
};
