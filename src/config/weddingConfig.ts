export const weddingConfig = {
  // -------------------------------------------------------------
  // NAMES
  // -------------------------------------------------------------
  // Used in the Hero section and meta tags
  brideNameSi: "හිරාශා",
  groomNameSi: "සහස්ර",
  brideNameEn: "Hirasha",
  groomNameEn: "Sahasra",

  // -------------------------------------------------------------
  // DATE & TIME
  // -------------------------------------------------------------
  // WEDDING_DATE: The actual date and time for the countdown.
  // Format: "YYYY-MM-DDTHH:mm:00+05:30" (Sri Lanka Standard Time)
  WEDDING_DATE: "2027-07-18T09:30:00+05:30",
  
  dateTextSi: "වර්ෂ දෙදහස් විසි හතක් වන ඇසල මස දහඅට වන දින",
  dateTextEn: "18th of July, 2027",
  
  timeRangeSi: "පූර්වභාග 9.00 සිට අපරභාග 4.30 දක්වා",
  timeRangeEn: "9:00 AM to 4:30 PM", 
  
  auspiciousTimeSi: "පෝරුව ශුභ මුහුර්තය 9.30 ට",
  auspiciousTimeEn: "Poruwa ceremony at 9:30 AM",

  // -------------------------------------------------------------
  // VENUE & LOCATION
  // -------------------------------------------------------------
  venueNameSi: "මාතර, Willow හෝටලයේ",
  venueNameEn: "Willow Hotel, Matara",
  
  // Google Maps embed URL (used in iframe)
  mapEmbedUrl: "https://maps.google.com/maps?q=Mantara+Villa,Matara&t=&z=15&ie=UTF8&iwloc=&output=embed",
  
  // Direct link for "Open in Google Maps" button
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Mantara+Villa,+Matara",

  // Direct link for Apple Maps
  appleMapsUrl: "http://maps.apple.com/?q=Mantara+Villa,+Matara",
  
  // Direct link for "Waze"
  wazeUrl: "https://waze.com/ul?q=matara",
  
  coordinates: {
    lat: 5.9463945,
    lng: 80.5369656,
  },

  // -------------------------------------------------------------
  // CONTACT & SOCIAL
  // -------------------------------------------------------------
  // Number used for the WhatsApp RSVP and Footer
  whatsappNumber: "+94741647998",
  
  // Footer credit text
  footerCredit: "Designed by: Milee ARTS | 072 323 2909",
  designerPhone: "tel:+94741647998",

  // -------------------------------------------------------------
  // RSVP & INTEGRATIONS
  // -------------------------------------------------------------
  // Google Apps Script Web App URL for form submission
  rsvpEndpoint: "https://script.google.com/macros/s/AKfycbz7D1BIz7W6T2jEUKXvBTcb54trrkQtNYBxHFSX78ybVUFZwZM9KKLlZR_JYoQTrNnIsw/exec",

  // -------------------------------------------------------------
  // ASSETS & FEATURE FLAGS
  // -------------------------------------------------------------
  // Background music path (relative to public folder)
  musicPath: "/music.mp3",
  
  // The deployed URL of this site (used for QR code and meta tags)
  siteUrl: "https://hirasha-sahassara-wedding.web.app",
  
  // Enable/Disable sections
  features: {
    wishesWall: true,
    qrSection: true,
    gallery: true,
  }
};
