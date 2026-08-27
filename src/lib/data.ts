export const clinic = {
  name: "Whitfield Dental Studio",
  doctorName: "Dr. Maya Whitfield, DDS",
  specialty: "Cosmetic & Family Dentistry",
  phone: "(555) 213-0847",
  phoneHref: "tel:+15552130847",
  email: "hello@whitfielddental.com",
  address: {
    line1: "482 Willow Grove Lane, Suite 210",
    line2: "Ashbrook, CA 94110",
  },
};

export const hours = [
  { day: "Monday – Thursday", time: "8:00 AM – 6:00 PM" },
  { day: "Friday", time: "8:00 AM – 4:00 PM" },
  { day: "Saturday", time: "9:00 AM – 2:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export const credentials = [
  {
    year: "2010",
    title: "DDS, University of Michigan School of Dentistry",
    detail: "Graduated with honors, Doctor of Dental Surgery",
  },
  {
    year: "2012",
    title: "Fellowship, Academy of General Dentistry",
    detail: "FAGD — advanced continuing education in general dentistry",
  },
  {
    year: "2015",
    title: "Advanced Cosmetic Dentistry Certification",
    detail: "Las Vegas Institute for Advanced Dental Studies",
  },
  {
    year: "2018",
    title: "Opened Whitfield Dental Studio",
    detail: "Built a family-centered practice rooted in preventive care",
  },
];

export const stats = [
  { label: "Years in Practice", value: "14+" },
  { label: "Patients Treated", value: "3,000+" },
  { label: "Average Rating", value: "4.9 / 5" },
];

export const services = [
  {
    icon: "tooth" as const,
    title: "Preventive Cleanings",
    description:
      "Routine exams, cleanings, and digital X-rays to catch issues early and keep your smile healthy.",
  },
  {
    icon: "sparkles" as const,
    title: "Teeth Whitening",
    description:
      "Professional-grade whitening treatments for a noticeably brighter, more confident smile.",
  },
  {
    icon: "shield" as const,
    title: "Dental Implants",
    description:
      "Durable, natural-looking replacements for missing teeth, planned with 3D imaging precision.",
  },
  {
    icon: "appliance" as const,
    title: "Orthodontics",
    description:
      "Traditional braces and clear aligner therapy tailored to your bite, at any age.",
  },
  {
    icon: "activity" as const,
    title: "Root Canal Therapy",
    description:
      "Gentle, modern endodontic care that relieves pain and saves your natural tooth.",
  },
  {
    icon: "baby" as const,
    title: "Pediatric Dentistry",
    description:
      "A calm, friendly first-visit experience that helps kids build healthy habits early.",
  },
];

export const testimonials = [
  {
    name: "Priya Anand",
    role: "Patient since 2019",
    rating: 5,
    quote:
      "Dr. Whitfield explains everything before she does it, which makes such a difference. My cleanings are quick, thorough, and honestly kind of relaxing now.",
  },
  {
    name: "Marcus Ibe",
    role: "Patient since 2021",
    rating: 5,
    quote:
      "I put off a root canal for years out of fear. The team walked me through the whole process and it ended up being completely painless. Wish I'd come sooner.",
  },
  {
    name: "Grace Feldman",
    role: "Parent of two patients",
    rating: 5,
    quote:
      "Both of my kids actually look forward to the dentist now. The staff is patient, warm, and great with anxious first-timers.",
  },
  {
    name: "Daniel Okoye",
    role: "Patient since 2017",
    rating: 5,
    quote:
      "Got Invisalign here as an adult and the results exceeded what I expected. Every appointment ran on time and the front desk is genuinely lovely.",
  },
];

export const services_select = services.map((s) => s.title);
