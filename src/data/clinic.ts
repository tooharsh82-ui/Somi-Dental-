/**
 * Clinic Data Configuration File
 * All clinic contact details, hours, reviews, services, FAQs, and gallery items
 * are maintained here in one editable place.
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ReviewItem {
  id: string;
  quote: string;
  author: string;
  source: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface TrustItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export const CLINIC_DATA = {
  name: "Somi Dental Clinic",
  hindiName: "सोमी डेंटल क्लिनिक",
  positioning: "Oral Maxillo Periodontist and Invisalign Orthodontist doctors in Arrah",
  doctor: "Dr. Harsh Vardhan Rathore",
  doctorRole: "Dentist",
  doctorImage: "https://i.ibb.co/wrhXvT8B/dr-image.jpg",
  phoneDisplay: "073522 93949",
  phoneTel: "+917352293949",
  WHATSAPP_NUMBER: "917352293949",
  address: "Mahadeva Road, Near Shiv Mandir, Mahajan Toli, Arrah, Bihar 802301",
  landmark: "Near Shiv Mandir, Mahajan Toli",
  locality: "Mahadeva Road, Arrah, Bihar",
  hoursText: "Opens 10:30 AM. Call to confirm closing time and weekly off.",
  hoursBadge: "Opens 10:30 AM",
  googleRating: 5.0,
  reviewCount: 7,
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Somi+Dental+Clinic+Mahadeva+Road+Mahajan+Toli+Arrah+Bihar+802301",
  googleMapsEmbedUrl: "https://www.google.com/maps?q=Somi+Dental+Clinic+Mahadeva+Road+Mahajan+Toli+Arrah+Bihar+802301&output=embed",

  trustStrip: [
    {
      id: "trust-1",
      title: "5.0 ★",
      subtitle: "Google Rating",
      iconName: "Star",
    },
    {
      id: "trust-2",
      title: "Specialist Care",
      subtitle: "Maxillofacial and Gum",
      iconName: "Smile",
    },
    {
      id: "trust-3",
      title: "Invisalign",
      subtitle: "Clear Aligners",
      iconName: "HeartPulse",
    },
    {
      id: "trust-4",
      title: "Mahadeva Road, Arrah",
      subtitle: "Easy Location",
      iconName: "MapPin",
    },
  ] as TrustItem[],

  // CONFIRM which services the clinic offers
  services: [
    {
      id: "srv-1",
      title: "Invisalign Clear Aligners",
      description: "Discreet, removable aligners to straighten teeth without metal braces.",
      iconName: "Sparkles",
    },
    {
      id: "srv-2",
      title: "Braces and Orthodontics",
      description: "Planned treatment for crowded, spaced or misaligned teeth and bite.",
      iconName: "Grid",
    },
    {
      id: "srv-3",
      title: "Gum Treatment",
      description: "Bleeding, swollen or receding gums, loose teeth.",
      iconName: "Activity",
    },
    {
      id: "srv-4",
      title: "Oral and Maxillofacial Surgery",
      description: "Surgical care of the mouth, teeth and jaw, planned around your case.",
      iconName: "ShieldCheck",
    },
    {
      id: "srv-5",
      title: "Wisdom Tooth Removal",
      description: "Careful extraction of impacted or troublesome wisdom teeth.",
      iconName: "Scissors",
    },
    {
      id: "srv-6",
      title: "Dental Implants",
      description: "Permanent replacement options for missing teeth anchored to the jaw.",
      iconName: "Anchor",
    },
    {
      id: "srv-7",
      title: "Root Canal Treatment",
      description: "Treatment to save an infected or deeply decayed tooth.",
      iconName: "SmilePlus",
    },
    {
      id: "srv-8",
      title: "Teeth Cleaning and Scaling",
      description: "Removal of plaque and tartar deposits for healthy gums.",
      iconName: "Baby",
    },
    {
      id: "srv-9",
      title: "Dental Fillings",
      description: "Restoring teeth affected by decay or wear.",
      iconName: "Layers",
    },
    {
      id: "srv-10",
      title: "Crowns and Bridges",
      description: "Protective caps and replacements to restore tooth shape and bite.",
      iconName: "Smile",
    },
    {
      id: "srv-11",
      title: "General Checkup and Consultation",
      description: "Comprehensive oral evaluation and professional dental advice.",
      iconName: "Stethoscope",
    },
    {
      id: "srv-12",
      title: "Teeth Whitening",
      description: "Cosmetic care to lighten tooth stains and refresh your smile.",
      iconName: "Sun",
    },
  ] as ServiceItem[],

  whyChooseUs: [
    {
      id: "why-1",
      title: "Specialist care",
      description: "Oral maxillofacial, periodontal and Invisalign orthodontic treatment.",
      iconName: "UserCheck",
    },
    {
      id: "why-2",
      title: "Experienced and polite doctor",
      description: "As patients say.",
      iconName: "ClipboardList",
    },
    {
      id: "why-3",
      title: "Affordable for everyone",
      description: "As patients say.",
      iconName: "Shield",
    },
    {
      id: "why-4",
      title: "Easy to find",
      description: "Mahadeva Road, near Shiv Mandir, Mahajan Toli.",
      iconName: "Navigation",
    },
  ] as WhyChooseUsItem[],

  howItWorks: [
    {
      number: "01",
      title: "Fill the form",
      description: "Choose your preferred date, time slot, and treatment interest right on this page.",
      iconName: "FileEdit",
    },
    {
      number: "02",
      title: "Confirm on WhatsApp",
      description: "Your details will open in WhatsApp so our clinic desk can immediately confirm your slot.",
      iconName: "MessageCircle",
    },
    {
      number: "03",
      title: "Visit the clinic",
      description: "Arrive at our clinic on Mahadeva Road, near Shiv Mandir, Mahajan Toli for your consultation.",
      iconName: "Building2",
    },
  ] as StepItem[],

  // ONLY real reviews provided in the prompt - strictly no extra reviews
  reviews: [
    {
      id: "rev-1",
      quote: "The Best Dental Clinic in that locality. Dr. Harshwardhan is too much experienced and too polite with their patients. The Clinic is also affordable for everyone. It is located in Mahadeva Road opposite to Rangoli shingar store.",
      author: "Ashish Ranjan",
      source: "Google Review",
      rating: 5,
    },
    {
      id: "rev-2",
      quote: "Best doctor in whole universe",
      author: "Somi Singh",
      source: "Google Review",
      rating: 5,
    },
  ] as ReviewItem[],

  // 6 gallery slots with clinic photos
  galleryUrls: [
    "https://i.ibb.co/fGywMKvv/IMG-20261011-105422.png",
    "https://i.ibb.co/ccRhDyxY/IMG-20261011-105257.png",
    "https://i.ibb.co/rKvyh0gT/dr3.webp",
    "https://i.ibb.co/s9BwrMj8/dr4.webp",
    "https://i.ibb.co/jvPdmd3d/dr5.webp",
    "https://i.ibb.co/TfnX2hX/dr6.webp",
  ],

  // 6 careful, general FAQ answers with zero prices or guarantees
  faqs: [
    {
      id: "faq-1",
      question: "How often should I visit the dentist?",
      answer: "Most dental professionals recommend visiting for a routine checkup and cleaning every six months. Regular visits help detect plaque buildup, cavities, and gum issues early before they cause discomfort.",
    },
    {
      id: "faq-2",
      question: "What is Invisalign and am I suitable?",
      answer: "Invisalign uses clear removable aligners to gradually align teeth without metal braces. Suitability is decided after a comprehensive in-person dental examination.",
    },
    {
      id: "faq-3",
      question: "My gums bleed when I brush; what should I do?",
      answer: "You should get examined by a dentist to check for plaque deposits or gum inflammation. A professional cleaning or targeted gum treatment may be advised.",
    },
    {
      id: "faq-4",
      question: "What should I do in sudden tooth pain?",
      answer: "If you experience sudden tooth pain, please call us directly at 073522 93949 so our clinic team can arrange a prompt consultation and advise you.",
    },
    {
      id: "faq-5",
      question: "Does a wisdom tooth always need removal?",
      answer: "A wisdom tooth does not always need removal. It requires an in-person clinical examination and usually an X-ray to assess its position and health.",
    },
    {
      id: "faq-6",
      question: "How can I book an appointment?",
      answer: "You can use the booking form on this website to select your details. Submitting the form opens WhatsApp to confirm your slot with the clinic.",
    },
  ] as FaqItem[],
};
