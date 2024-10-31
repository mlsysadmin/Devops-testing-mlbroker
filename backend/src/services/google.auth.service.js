
require('dotenv').config();
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const GoogleAuth = async () => {

    const clientId = process.env.AUTH_CLIENT_ID;
    const clientSecret = process.env.AUTH_CLIENT_SECRET;
    const redirectUri = process.env.CALLBACK_URL;

    
    // Log environment variables to verify their values
    console.log('AUTH_CLIENT_ID:', clientId);
    console.log('AUTH_CLIENT_SECRET:', clientSecret);
    console.log('CALLBACK_URL:', redirectUri)
    
    const oauth2Client = new OAuth2({
        clientId,
        clientSecret,
        redirectUri,
    })

    return oauth2Client;
}


const GenerateURL = async (state) => {
    const scopes = ['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile']

    const OAuth2Client = await GoogleAuth();

     // Log the OAuth2Client to verify clientId
     console.log('OAuth2Client:', OAuth2Client);

    const authorizationUrl = OAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: scopes,
        include_granted_scopes: true,
        prompt: 'consent',
        state: state
    })

     // Log the generated authorization URL
     console.log('Authorization URL:', authorizationUrl);

    return authorizationUrl;
}

module.exports = {
    GoogleAuth,
    GenerateURL
};