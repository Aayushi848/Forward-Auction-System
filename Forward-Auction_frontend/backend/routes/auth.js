// backend/routes/auth.js
const express = require('express');
const router = express.Router();
const { OAuth2Client } = require('google-auth-library');

const CLIENT_ID = "50820545896-lb4gad6gl68l0psvhgepdbqmabshi6dd.apps.googleusercontent.com"; // from credentials.json
const client = new OAuth2Client(CLIENT_ID);

router.post('/google', async (req, res) => {
  const { token } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,
    });

    const payload = ticket.getPayload(); // Contains user's email, name, picture, etc.

    // You can store or check user in DB here

    res.status(200).json({
      success: true,
      user: {
        email: payload.email,
        name: payload.name,
        picture: payload.picture,
      },
    });
  } catch (err) {
    console.error("Error verifying Google token", err);
    res.status(401).json({ success: false, message: 'Invalid token' });
  }
});

module.exports = router;
