# Digital Wedding Invitation

A beautiful, mobile-first Sri Lankan cultural digital wedding invitation built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run locally:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## 📝 Configuration

All wedding details, text, colors, and coordinates can be found in `src/config/weddingConfig.ts`.
This is the **single source of truth** for your wedding details.

Translation strings are located in `src/i18n/si.json` (Sinhala) and `src/i18n/en.json` (English).

## 💌 Personalised Guest Links

You can generate custom links to greet guests by name when they open the invitation. 
Add the `?guest=Name` parameter to your URL.

**Example:**
`https://your-site.web.app/?guest=අයියා` 
This will show "ආදරණීය අයියා ට," at the top of the invitation.

**Spreadsheet Formula for Bulk Links:**
If you have a Google Sheet with guest names in column A, you can generate the links in column B using this formula:
`="https://your-site.web.app/?guest=" & ENCODEURL(A2)`

## 📋 Google Sheets RSVP Setup

The RSVP form can automatically save responses to a Google Sheet.

1. Go to [Google Sheets](https://sheets.google.com) and create a new sheet.
2. In row 1, add these exact column headers: `Timestamp`, `Name`, `Guests`, `Attending`, `Wishes`.
3. Go to **Extensions > Apps Script**.
4. Replace all code in the script editor with the following:

```javascript
const SHEET_NAME = 'Sheet1'; // Make sure this matches your sheet tab name
const NOTIFICATION_EMAIL = 'dilkimileesha@gmail.com'; // CHANGE THIS to your email address

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    const timestamp = new Date();
    
    // Get parameters from the POST request
    const name = e.parameter.name;
    const guests = e.parameter.guests;
    const attending = e.parameter.attending;
    const wishes = e.parameter.wishes;
    
    // Append row
    sheet.appendRow([timestamp, name, guests, attending, wishes]);
    
    // Send Email Notification
    const subject = `New Wedding RSVP from ${name} (${attending === 'yes' ? 'Attending' : 'Not Attending'})`;
    const message = `
      You have received a new RSVP!
      
      Name: ${name}
      Attending: ${attending === 'yes' ? 'Yes' : 'No'}
      Guests: ${guests}
      Wishes: ${wishes}
    `;
    MailApp.sendEmail(NOTIFICATION_EMAIL, subject, message);

    return ContentService.createTextOutput(JSON.stringify({"result":"success", "data": e.parameter}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({"result":"error", "error": error}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

5. Click **Deploy > New deployment**.
6. Select **Web app** as the type.
7. Execute as: **Me**.
8. Who has access: **Anyone**.
9. Click **Deploy**, authorize the permissions, and copy the **Web app URL**.
10. Paste this URL into `src/config/weddingConfig.ts` under `rsvpEndpoint`.

## 🌐 Deployment (Firebase Hosting)

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
   - Select your project
   - Public directory: `dist`
   - Configure as a single-page app: `Yes`
   - Set up automatic builds: `No` (or Yes for GitHub Actions)
4. Build the app: `npm run build`
5. Deploy: `firebase deploy --only hosting`
