export const ACTIONPACKD_WHATSAPP_DISPLAY = "+91 81900 07072";
export const ACTIONPACKD_WHATSAPP_E164 = "918190007072";
export const ACTIONPACKD_SITE = "https://actionpackd.com";
export const HELLO_AGENT = "https://hello.actionpackd.com";
export const CRESTORA_DEMO = "https://static-deploy-sigma-bay.vercel.app/";

export const REAL_ESTATE_WHATSAPP_TEXT =
  "Hi, I'd like an AI agent for my real estate business.";

export function whatsAppHref(text: string) {
  return `https://wa.me/${ACTIONPACKD_WHATSAPP_E164}?text=${encodeURIComponent(text)}`;
}

export const TRY_IT_YOURSELF = whatsAppHref(REAL_ESTATE_WHATSAPP_TEXT);
export const PDF_HREF = "/actionpackd-realestate-sheet.pdf";

export const PRODUCTS = [
  {
    title: "Agents",
    body: "An AI agent that qualifies the buyer, books the site visit, and hands the hot ones to your team.",
  },
  {
    title: "Bots",
    body: "A tighter reply for the questions that repeat: area, budget, BHK and timeline.",
  },
  {
    title: "Project pages",
    body: "A project page plus the AI agent behind it. Photos, floor plans and visit bookings.",
  },
  {
    title: "Sites",
    body: "A public site that explains the project and sends the buyer to the AI agent or a person.",
  },
] as const;
