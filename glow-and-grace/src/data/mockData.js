// Mock Data for Glow & Grace Beauty Studio Concept

export const businessDetails = {
  name: "Glow & Grace",
  subtitle: "Beauty Studio",
  tagline: "Feel Beautiful. Feel Confident.",
  demoNotice: "Fictional Demo Website Concept",
  phone: "+1 (555) 389-4021",
  whatsapp: "+15553894021",
  email: "hello@glowandgrace-demo.com",
  address: "742 Evergreen Terrace, Suite 100, Beverly Hills, CA 90210",
  hours: {
    weekdays: "Mon - Fri: 9:00 AM - 8:00 PM",
    weekend: "Sat - Sun: 10:00 AM - 6:00 PM"
  },
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    pinterest: "https://pinterest.com",
    youtube: "https://youtube.com"
  }
};

export const servicesData = [
  {
    id: "hair-styling",
    name: "Hair Styling & Design",
    category: "Hair",
    iconName: "Scissors",
    price: "$45",
    description: "Couture precision cuts, blowouts, custom coloring, highlights, and tailored styling for any occasion.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800",
    features: ["Custom consultation", "Wash & scalp massage", "Blowdry & finish"]
  },
  {
    id: "hair-spa",
    name: "Hair Spa & Nourishment",
    category: "Hair Care",
    iconName: "Sparkles",
    price: "$65",
    description: "Deep conditioning Keratin repair treatment, scalp detox therapy, and hydrating mask treatments.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800",
    features: ["Argan oil infusion", "Scalp acupressure", "Steam lock treatment"]
  },
  {
    id: "facial-skincare",
    name: "Facial & Skin Care",
    category: "Skincare",
    iconName: "Flower2",
    price: "$80",
    description: "Rejuvenating botanical facials, microdermabrasion, hyaluronic anti-aging peels, and radiant glow serums.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800",
    features: ["Skin analysis", "Deep pore extraction", "LED light therapy"]
  },
  {
    id: "manicure-pedicure",
    name: "Manicure & Pedicure",
    category: "Nails",
    iconName: "Hand",
    price: "$35",
    description: "Deluxe gel nail art, soothing paraffin wax foot baths, cuticle repair, and long-lasting glossy polish.",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800",
    features: ["Exfoliating scrub", "Massage & hydration", "Non-toxic gel polish"]
  },
  {
    id: "bridal-makeup",
    name: "Bridal Makeup Artistry",
    category: "Makeup",
    iconName: "Crown",
    price: "$250",
    description: "Exquisite HD airbrush bridal transformations, trial sessions, waterproof luxury cosmetics, and veil setting.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800",
    features: ["Pre-wedding trial", "Premium mink lashes", "Touch-up kit included"]
  },
  {
    id: "party-makeup",
    name: "Party & Glam Makeup",
    category: "Makeup",
    iconName: "Heart",
    price: "$95",
    description: "Red-carpet glam, subtle camera-ready evening looks, smokey eyes, and long-wear contouring.",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800",
    features: ["Contour & highlight", "Custom eye styling", "Setting spray finish"]
  },
  {
    id: "spa-relaxation",
    name: "Spa & Aromatherapy",
    category: "Wellness",
    iconName: "Smile",
    price: "$110",
    description: "Swedish full-body tension release, hot stone aromatherapy, herbal body wraps, and scalp relaxation.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
    features: ["Essential oils", "Hot towel therapy", "Private serene suite"]
  },
  {
    id: "waxing-beauty",
    name: "Waxing & Beauty Care",
    category: "Body Care",
    iconName: "Sun",
    price: "$30",
    description: "Gentle organic honey wax hair removal, precision eyebrow threading, lash lifts, and brow tinting.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
    features: ["Soothing aloe post-care", "Ultra-hygienic tools", "Sensitive skin safe"]
  }
];

export const packagesData = [
  {
    id: "glow-package",
    name: "Glow & Radiant Package",
    tagline: "Essential Pampering",
    price: "$149",
    originalPrice: "$190",
    badge: "Popular Choice",
    popular: true,
    services: [
      "Botanical Hydrating Facial",
      "Deluxe Gel Manicure & Pedicure",
      "Hair Spa Conditioning & Blowdry",
      "Complimentary Herbal Tea & Refreshment"
    ],
    duration: "2.5 Hours",
    description: "The ultimate single-day refresh to rejuvenate your skin, nourish your hair, and pamper your hands and feet."
  },
  {
    id: "bridal-package",
    name: "Royal Bridal Experience",
    tagline: "Full Wedding Luxury",
    price: "$499",
    originalPrice: "$650",
    badge: "Ultimate Luxury",
    popular: false,
    services: [
      "HD Airbrush Bridal Makeup & Lash Art",
      "Pre-Wedding Makeup & Hair Trial Session",
      "Full Body Aromatherapy Spa & Scrub",
      "Couture Hair Styling & Veil Placement",
      "Luxury Hand & Foot Paraffin Treatment"
    ],
    duration: "5.0 Hours",
    description: "Complete royal bridal treatment tailored to make you glow effortlessly on your special day."
  },
  {
    id: "relax-rejuvenate",
    name: "Relax & Rejuvenate Package",
    tagline: "Total Mind & Body Bliss",
    price: "$219",
    originalPrice: "$280",
    badge: "Best Spa Value",
    popular: false,
    services: [
      "90-Min Swedish Hot Stone Massage",
      "Deep Pore Collagen Facial Treatment",
      "Scalp Acupressure & Hair Mask Treatment",
      "Detox Foot Soak & Reflexology Massage"
    ],
    duration: "3.5 Hours",
    description: "Escape the stress of modern life with our deeply soothing full-body wellness and beauty ritual."
  }
];

export const whyChooseUsData = [
  {
    id: "exp-pro",
    title: "Experienced Professionals",
    description: "Our certified master stylists and aesthetic beauty therapists bring over 12+ years of refined international expertise.",
    icon: "Award"
  },
  {
    id: "prem-prod",
    title: "Premium Organic Products",
    description: "We strictly use dermatologist-tested, cruelty-free luxury skincare and organic botanical hair elixirs.",
    icon: "ShieldCheck"
  },
  {
    id: "hyg-env",
    title: "Hygienic Sanitized Environment",
    description: "Hospital-grade UV sterilization of all tools, disposable single-use kits, and pristine private treatment suites.",
    icon: "Sparkles"
  },
  {
    id: "pers-serv",
    title: "Personalized Service",
    description: "Every treatment starts with an in-depth consultation to customize skin types, hair textures, and personal styles.",
    icon: "HeartHandshake"
  }
];

export const galleryData = [
  {
    id: 1,
    title: "Modern Minimalist Interior",
    category: "Salon Interior",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=800",
    span: "col-span-1 md:col-span-2 row-span-2"
  },
  {
    id: 2,
    title: "Precision Hair Styling",
    category: "Hair Styling",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800",
    span: "col-span-1 row-span-1"
  },
  {
    id: 3,
    title: "HD Bridal Makeup Artistry",
    category: "Makeup",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800",
    span: "col-span-1 row-span-1"
  },
  {
    id: 4,
    title: "Aromatherapy Facial Spa",
    category: "Facial/Spa",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800",
    span: "col-span-1 row-span-2"
  },
  {
    id: 5,
    title: "Deluxe Gel Nail Styling",
    category: "Nail Care",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800",
    span: "col-span-1 row-span-1"
  },
  {
    id: 6,
    title: "Luxury Cosmetic & Beauty Suite",
    category: "Beauty Setup",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800",
    span: "col-span-1 row-span-1"
  }
];

export const testimonialsData = [
  {
    id: 1,
    name: "Sophia Reynolds",
    role: "Demo Client (Bridal)",
    rating: 5,
    text: "Glow & Grace made my wedding day preparation completely stress-free! The HD bridal makeup was flawless and lasted throughout the entire evening event.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 2,
    name: "Elena Rostova",
    role: "Demo Client (Regular Spa)",
    rating: 5,
    text: "The facial and hot stone aromatherapy spa is pure heaven. The staff is exceptionally warm, professional, and the atmosphere feels like a luxury resort.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 3,
    name: "Marcus Vance",
    role: "Demo Client (Hair Care)",
    rating: 5,
    text: "Outstanding hair spa treatment and precise styling! Their attention to hygiene and customized scalp treatment is unmatched in town.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  }
];
