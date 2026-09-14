export default function sitemap() {
  const baseUrl = "https://hassansaleem.vercel.app"; // Apni actual domain yahan likhein

  return [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/videoediting`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/videography`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/socialmedia`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/contentcreation`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.5 },
  ];
}