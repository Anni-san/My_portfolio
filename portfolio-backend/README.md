# Portfolio Contact Form Backend

A robust Node.js/Express backend for handling portfolio contact form submissions with MongoDB storage and Gmail notifications.

## Features

- ✅ **Input Validation**: Comprehensive validation for name, email, and message
- ✅ **Error Handling**: Detailed error responses with proper HTTP status codes
- ✅ **Gmail Integration**: Uses Gmail App Passwords for secure email delivery
- ✅ **MongoDB Storage**: Persistent contact submission storage
- ✅ **Development Friendly**: Detailed logging and debugging in development
- ✅ **Production Ready**: Graceful shutdown and error recovery
- ✅ **Security**: Uses replyTo instead of spoofing email addresses

## Prerequisites

1. **Node.js** (v16 or higher)
2. **MongoDB Atlas** account
3. **Gmail account** with 2FA enabled

## Setup Instructions

### 1. Gmail App Password Setup

Since Gmail no longer allows regular passwords for app access:

1. Enable 2-Factor Authentication on your Gmail account
2. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
3. Select "Mail" and "Other (Custom name)"
4. Name it something like "Portfolio Contact Form"
5. Copy the 16-character password (no spaces)

### 2. Environment Configuration

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Update `.env` with your actual values:

```env
# MongoDB Atlas
MONGO_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/your-database

# Gmail (Use App Password here)
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-16-character-app-password

PORT=5000
NODE_ENV=development
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Development Server

```bash
npm run dev
```

The server will start on `http://localhost:5000`

## API Usage

### POST /api/contact

Send a contact form submission:

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello! I would like to get in touch about your portfolio."
}
```

**Successful Response (200):**
```json
{
  "success": true,
  "message": "Message sent successfully",
  "data": {
    "contactId": "507f1f77bcf86cd799439011",
    "emailSent": true
  }
}
```

**Validation Error (400):**
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    "Name must be at least 2 characters long",
    "Valid email is required"
  ]
}
```

## Testing with Thunder Client

1. **Method**: POST
2. **URL**: `http://localhost:5000/api/contact`
3. **Headers**: `Content-Type: application/json`
4. **Body**: Raw JSON with name, email, message

## Troubleshooting

### Common Issues

**"MongoDB Connection Failed"**
- Check your MONGO_URI in `.env`
- Ensure your IP is whitelisted in MongoDB Atlas
- Verify username/password are correct

**"Email service configuration error"**
- Ensure you're using a Gmail App Password (not regular password)
- Check that 2FA is enabled on your Gmail account
- Verify EMAIL_USER and EMAIL_PASS in `.env`

**"Validation failed"**
- Name: Minimum 2 characters
- Email: Must be valid email format
- Message: Minimum 10 characters

### Debug Mode

Set `NODE_ENV=development` to see:
- Detailed error logs
- Email debugging information
- Request/response logging

## Project Structure

```
portfolio-backend/
├── config/
│   ├── db.js           # MongoDB connection
│   └── email.js        # Email configuration
├── controllers/
│   └── contactController.js  # Contact form logic
├── models/
│   └── Contact.js      # MongoDB model
├── routes/
│   └── contactRoutes.js # API routes
├── .env.example        # Environment template
├── .env               # Your actual environment variables
├── server.js          # Main server file
└── package.json
```

## Validation Rules

- **Name**: Required, minimum 2 characters, trimmed
- **Email**: Required, valid email format, trimmed  
- **Message**: Required, minimum 10 characters, trimmed

## Email Features

- Uses authenticated Gmail (no spoofing)
- ReplyTo set to user's email for easy replies
- Professional HTML email template
- Delivery confirmation with message ID
- Error logging for failed sends

## Development vs Production

**Development (`NODE_ENV=development`)**:
- Detailed error stack traces
- Email debugging enabled
- Request logging
- Continues without database connection

**Production (`NODE_ENV=production`)**:
- Secure error messages only
- Minimal logging
- Exits on database connection failure

## Health Check

Test the server status:
```bash
GET http://localhost:5000/health
```