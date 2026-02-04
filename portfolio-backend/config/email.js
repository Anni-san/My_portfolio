const nodemailer = require("nodemailer");

const createEmailTransporter = () => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error("EMAIL_USER and EMAIL_PASS environment variables are required");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // This should be an App Password, not regular password
    },
    // Enable debug mode in development
    debug: process.env.NODE_ENV === "development",
    logger: process.env.NODE_ENV === "development",
  });

  return transporter;
};

const sendContactEmail = async (name, email, subject, message) => {
  const transporter = createEmailTransporter();

  // Verify transporter configuration
  await transporter.verify();
  console.log("✅ Email transporter verified");

  const mailOptions = {
    from: `"${process.env.EMAIL_USER}" <${process.env.EMAIL_USER}>`, // Use authenticated Gmail
    to: process.env.EMAIL_USER, // Send to yourself
    replyTo: email, // User's email for replying
    subject: `[Portfolio] ${subject} - from ${name}`,
    text: `You received a new message from your portfolio contact form.

Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}

---
Sent at: ${new Date().toLocaleString()}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
          New Contact Message
        </h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> 
            <a href="mailto:${email}" style="color: #007bff;">${email}</a>
          </p>
          <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>
        </div>
        
        <div style="margin: 20px 0;">
          <h3 style="color: #333;">Message:</h3>
          <div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #007bff; border-radius: 0 5px 5px 0;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
        
        <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
        <p style="color: #666; font-size: 0.9em;">
          <em>Sent at: ${new Date().toLocaleString()}</em>
        </p>
        
        <div style="background-color: #e7f3ff; padding: 15px; border-radius: 5px; margin-top: 20px;">
          <p style="margin: 0; color: #0066cc;">
            <strong>This message was sent from your portfolio contact form.</strong>
          </p>
        </div>
      </div>
    `,
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully:", {
      messageId: result.messageId,
      response: result.response,
      to: mailOptions.to,
      replyTo: mailOptions.replyTo,
    });

    return {
      success: true,
      messageId: result.messageId,
      response: result.response,
    };
  } catch (error) {
    console.error("❌ Email sending failed:", {
      error: error.message,
      code: error.code,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
    });
    throw error;
  }
};

module.exports = {
  createEmailTransporter,
  sendContactEmail,
};