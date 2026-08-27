export const clinic = {
  name: "Smile Care Dental Clinic",
  doctorName: "Dr. Ananya Sharma, BDS, MDS",
  specialty: "Cosmetic & Family Dentistry",
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  email: "hello@smilecaredental.in",
  address: {
    line1: "12, 100 Feet Road, Indiranagar",
    line2: "Bengaluru, Karnataka 560038",
  },
};

export const hours = [
  { day: "Monday – Friday", time: "9:30 AM – 8:00 PM" },
  { day: "Saturday", time: "9:30 AM – 6:00 PM" },
  { day: "Sunday", time: "10:00 AM – 2:00 PM" },
];

export const credentials = [
  {
    year: "2008",
    title: "BDS, Government Dental College & Research Institute, Bengaluru",
    detail: "Bachelor of Dental Surgery — graduated with distinction",
  },
  {
    year: "2011",
    title: "MDS, Manipal College of Dental Sciences",
    detail: "Conservative Dentistry & Endodontics — gold medallist",
  },
  {
    year: "2015",
    title: "Fellowship in Clinical Implantology",
    detail: "International Congress of Oral Implantologists (ICOI)",
  },
  {
    year: "2017",
    title: "Founded Smile Care Dental Clinic",
    detail: "A family-first practice in Indiranagar built around preventive care",
  },
];

export const stats = [
  { label: "Years in Practice", value: "16+" },
  { label: "Happy Patients", value: "12,000+" },
  { label: "Google Rating", value: "4.9 / 5" },
];

export const trustPoints = [
  { label: "Fully sterilised equipment", accent: "teal" as const },
  { label: "Painless treatment focus", accent: "emerald" as const },
  { label: "0% EMI on major work", accent: "clay" as const },
  { label: "All insurance & TPA accepted", accent: "violet" as const },
];

export const services = [
  {
    icon: "tooth" as const,
    accent: "teal" as const,
    title: "Cleaning & Preventive Care",
    description:
      "Scaling, polishing, and digital X-rays to catch problems early and keep your whole family's smile healthy.",
  },
  {
    icon: "sparkles" as const,
    accent: "clay" as const,
    title: "Teeth Whitening",
    description:
      "Safe, professional whitening that lifts years of tea, coffee, and tobacco stains in a single sitting.",
  },
  {
    icon: "shield" as const,
    accent: "violet" as const,
    title: "Dental Implants",
    description:
      "Strong, natural-looking replacements for missing teeth, planned with 3D CBCT imaging precision.",
  },
  {
    icon: "appliance" as const,
    accent: "emerald" as const,
    title: "Braces & Clear Aligners",
    description:
      "Metal braces and invisible aligner therapy tailored to your bite — for teenagers and adults alike.",
  },
  {
    icon: "activity" as const,
    accent: "sky" as const,
    title: "Root Canal Treatment",
    description:
      "Gentle, single-visit RCT with rotary endodontics that relieves pain and saves your natural tooth.",
  },
  {
    icon: "baby" as const,
    accent: "amber" as const,
    title: "Kids' Dentistry",
    description:
      "A calm, friendly first visit that helps children build healthy brushing habits without fear.",
  },
];

export const testimonials = [
  {
    name: "Priya Nair",
    role: "Patient since 2019",
    rating: 5,
    quote:
      "Dr. Ananya explains every step before she starts, which really settles the nerves. My cleanings are quick, thorough, and honestly quite relaxing now.",
  },
  {
    name: "Rahul Menon",
    role: "Patient since 2021",
    rating: 5,
    quote:
      "I put off a root canal for years out of fear. The team walked me through the whole process and it was completely painless. I only wish I'd come sooner.",
  },
  {
    name: "Sneha Reddy",
    role: "Parent of two patients",
    rating: 5,
    quote:
      "Both my kids actually look forward to the dentist now. The staff is patient, warm, and wonderful with anxious first-timers.",
  },
  {
    name: "Arjun Iyer",
    role: "Patient since 2017",
    rating: 5,
    quote:
      "Got my aligners done here as an adult and the result went beyond what I expected. Every appointment ran on time and the front desk is genuinely lovely.",
  },
];

export const services_select = services.map((s) => s.title);
