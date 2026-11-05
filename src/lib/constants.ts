export interface ServiceItem {
  id: string
  title: string
  category: "Hair" | "Skin" | "Lashes" | "Nails" | "Makeup"
  price: string
  priceNumber: number
  description: string
  image: string
  duration?: string
  popular?: boolean
  whatsappMessage: string
}

export interface GalleryItem {
  id: string
  src: string
  alt: string
  category: "Hair" | "Nails" | "Lashes & Brows" | "Salon Space"
  title: string
  subtitle: string
}

export const salonDetails = {
  name: "INSTYLE Hair & Beauty Salon",
  shortName: "INSTYLE",
  instagramHandle: "instylebeautybar",
  instagramUrl: "https://www.instagram.com/instylebeautybar/",
  phoneDisplay: "089746 20709",
  phoneNumber: "+918974620709",
  whatsappNumber: "918974620709",
  address: "DC Ct Rd, near petrol pump, Hill View Colony, Dimapur, Nagaland 797112",
  shortAddress: "DC Court Junction, Dimapur – 797112",
  landmark: "Near petrol pump, Hill View Colony / DC Court Junction",
  googleMapsUrl: "https://maps.app.goo.gl/WdH3h6fyibaDQ8UcA",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.428585481747!2d93.7196016!3d25.8973678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37460773663b9f67%3A0x42f01f038d17ee3f!2sInstyle%20hair%20and%20beauty%20salon!5e0!3m2!1sen!2sin!4v1741160000000!5m2!1sen!2sin",
  hours: "10:00 AM – 7:00 PM",
  closedDays: "Closed on Monday",
  tagline: "Professional hair, skin, nail and beauty services with a personal touch.",
  bio: "Hair Dresser & Styling • Internationally Certified • Permanent Makeup-6D • Microblading • Eyelash Extensions • EyeLash Lift",
}

export const serviceCategories = ["All", "Hair", "Skin", "Lashes", "Nails", "Makeup"] as const

export const services: ServiceItem[] = [
  {
    id: "hair-smoothing-botox",
    title: "Hair Smoothing & Botox",
    category: "Hair",
    price: "From ₹3,500",
    priceNumber: 3500,
    description: "Frizz-free, shiny and manageable hair with deep protein nourishment and long-lasting glass-like finish.",
    image: "/images/instyle/service-hair-smoothing.jpg",
    duration: "2.5 - 3.5 hrs",
    popular: true,
    whatsappMessage: "Hi INSTYLE, I would like to book an appointment for Hair Smoothing & Botox",
  },
  {
    id: "eyelash-extensions",
    title: "Eyelash Extensions",
    category: "Lashes",
    price: "From ₹1,500",
    priceNumber: 1500,
    description: "Natural to dramatic custom lash looks, hybrid sets, Russian volume fans, and seamless semi-permanent weightless sets.",
    image: "/images/instyle/service-eyelash-extensions.jpg",
    duration: "60 - 90 mins",
    popular: true,
    whatsappMessage: "Hi INSTYLE, I would like to book an appointment for Eyelash Extensions",
  },
  {
    id: "nail-art-extensions",
    title: "Nail Art & Extensions",
    category: "Nails",
    price: "From ₹800",
    priceNumber: 800,
    description: "Gel extensions, acrylic overlays, French tips with gold chrome lining, encapsulated glitter, and bespoke artistry.",
    image: "/images/instyle/service-nail-art.jpg",
    duration: "60 - 120 mins",
    popular: true,
    whatsappMessage: "Hi INSTYLE, I would like to book an appointment for Nail Art & Extensions",
  },
  {
    id: "microblading-6d",
    title: "Permanent Makeup 6D Microblading",
    category: "Skin",
    price: "From ₹4,500",
    priceNumber: 4500,
    description: "Internationally certified 6D microblading, ombre shading, and feather-touch semi-permanent eyebrow enhancement.",
    image: "/images/instyle/microblading-6d-brows.jpg",
    duration: "2 - 2.5 hrs",
    popular: true,
    whatsappMessage: "Hi INSTYLE, I would like to book an appointment for 6D Microblading & Shading",
  },
  {
    id: "ash-balayage-color",
    title: "Ash Tone Balayage & Global Color",
    category: "Hair",
    price: "From ₹2,800",
    priceNumber: 2800,
    description: "Custom hand-painted balayage, smoky ash blonde, caramel gloss, root melt, and bond-protecting vibrant tones.",
    image: "/images/instyle/ash-hair-smoothing.jpg",
    duration: "2 - 4 hrs",
    popular: true,
    whatsappMessage: "Hi INSTYLE, I would like to book an appointment for Ash Tone Balayage & Color",
  },
  {
    id: "keratin-treatment",
    title: "Keratin & Deep Moisture Therapy",
    category: "Hair",
    price: "From ₹2,500",
    priceNumber: 2500,
    description: "Intense moisture infusion that repairs heat & chemical damage, sealing split ends with mirror-like shine.",
    image: "/images/instyle/hair-smoothing-before-after.jpg",
    duration: "90 - 120 mins",
    whatsappMessage: "Hi INSTYLE, I would like to book an appointment for Keratin & Hair Therapy",
  },
  {
    id: "eyelash-lift",
    title: "Natural EyeLash Lift & Tint",
    category: "Lashes",
    price: "From ₹1,200",
    priceNumber: 1200,
    description: "Gentle keratin curl and deep black lash tint that enhances your natural lashes for up to 6–8 weeks.",
    image: "/images/instyle/eyelash-lift-glow.jpg",
    duration: "45 mins",
    whatsappMessage: "Hi INSTYLE, I would like to book an appointment for Natural EyeLash Lift",
  },
  {
    id: "precision-haircut",
    title: "Precision Haircut & Styling",
    category: "Hair",
    price: "From ₹600",
    priceNumber: 600,
    description: "Tailored textured bobs, face-framing layers, butterfly cut, and professional blow-dry finishing.",
    image: "/images/instyle/sleek-chocolate-bob.jpg",
    duration: "45 - 60 mins",
    whatsappMessage: "Hi INSTYLE, I would like to book an appointment for Precision Haircut & Styling",
  },
  {
    id: "bridal-makeup",
    title: "Bridal & Event Glam Makeup",
    category: "Makeup",
    price: "From ₹3,000",
    priceNumber: 3000,
    description: "Flawless HD airbrush or luxury dewy base, custom lash styling, water-resistant elegance for weddings & events.",
    image: "/images/instyle/hero-luxury-model.jpg",
    duration: "90 - 120 mins",
    popular: true,
    whatsappMessage: "Hi INSTYLE, I would like to book an appointment for Bridal & Event Makeup",
  },
  {
    id: "hydra-glow-facial",
    title: "Hydra Glow & Skin Therapy",
    category: "Skin",
    price: "From ₹1,500",
    priceNumber: 1500,
    description: "Deep pore suction, ultrasound serum infusion, dead-cell exfoliation, and radiant collagen booster facial.",
    image: "/images/instyle/eyelash-lift-glow.jpg",
    duration: "60 - 75 mins",
    whatsappMessage: "Hi INSTYLE, I would like to book an appointment for Hydra Glow & Skin Therapy",
  },
]

export const galleryImages: GalleryItem[] = [
  {
    id: "g1",
    src: "/images/instyle/salon-space-interior.jpg",
    alt: "INSTYLE Salon Space Interior with Arched Vanity Mirrors",
    category: "Salon Space",
    title: "Aesthetic Salon Sanctuary",
    subtitle: "Modern sage green walls, arched mirrors & ambient lighting",
  },
  {
    id: "g2",
    src: "/images/instyle/ash-hair-smoothing.jpg",
    alt: "Ash Tone Silky Straight Hair Smoothing Transformation",
    category: "Hair",
    title: "Ash Tone Hair Smoothing",
    subtitle: "Silky, mirror-shine ash balayage & treatment",
  },
  {
    id: "g3",
    src: "/images/instyle/french-gold-manicure.jpg",
    alt: "Nude Almond Nails with Gold Foil Tips",
    category: "Nails",
    title: "Gold Chrome French Manicure",
    subtitle: "Almond shaped extensions with custom luxury tips",
  },
  {
    id: "g4",
    src: "/images/instyle/eyelash-lift-glow.jpg",
    alt: "EyeLash Lift & Radiant Skin Therapy",
    category: "Lashes & Brows",
    title: "Lash Lift & Glow",
    subtitle: "Naturally curled lashes with glowing skin care",
  },
  {
    id: "g5",
    src: "/images/instyle/sleek-chocolate-bob.jpg",
    alt: "Sleek Dark Chocolate Bob Haircut",
    category: "Hair",
    title: "Precision Bob Cut",
    subtitle: "Geometric precision cut with silky smooth finish",
  },
  {
    id: "g6",
    src: "/images/instyle/microblading-6d-brows.jpg",
    alt: "6D Microblading & Ombre Shading Eyebrows",
    category: "Lashes & Brows",
    title: "6D Microblading & Shading",
    subtitle: "Permanent makeup with natural hyper-realistic hair strokes",
  },
  {
    id: "g7",
    src: "/images/instyle/glitter-gold-nails.jpg",
    alt: "Brown Marble Gel Nail Art with Gold Glitter",
    category: "Nails",
    title: "Marble & Glitter Nail Art",
    subtitle: "Hand-painted tortoiseshell and gold accent gel set",
  },
  {
    id: "g8",
    src: "/images/instyle/caramel-balayage-waves.jpg",
    alt: "Warm Caramel Balayage Waves",
    category: "Hair",
    title: "Caramel Dimension Balayage",
    subtitle: "Multi-dimensional warm tones with soft bouncy waves",
  },
]

export const whyChooseFeatures = [
  {
    id: "certified",
    icon: "gem",
    title: "Certified Professionals",
    description: "Internationally certified hair stylist & 6D permanent makeup specialist ensuring precision in every service.",
  },
  {
    id: "products",
    icon: "leaf",
    title: "Premium Products",
    description: "We use only tested, world-renowned hair, lash and cosmetic brands that nourish and protect.",
  },
  {
    id: "hygiene",
    icon: "sparkles",
    title: "Hygienic & Comfortable",
    description: "A calming boutique atmosphere with sterilized equipment, arched LED vanity mirrors and relaxed seating.",
  },
  {
    id: "personalized",
    icon: "heart",
    title: "Personalized Care",
    description: "Bespoke consultations tailored to your facial structure, hair texture, skin tone, and personal aesthetic.",
  },
]

export const testimonials = [
  {
    id: 1,
    text: "Got my hair smoothing and eyelash extensions done here at DC Court. Absolutely loved the result! My hair feels so soft and the lashes look so natural.",
    author: "Sentila A.",
    role: "Dimapur Regular Client",
    rating: 5,
    service: "Hair Smoothing & Lashes",
  },
  {
    id: 2,
    text: "The 6D microblading gave me the exact eyebrow shape I always wanted. She is internationally certified and it really shows in the precision and hygiene.",
    author: "Vivino K.",
    role: "Permanent Makeup Client",
    rating: 5,
    service: "6D Microblading",
  },
  {
    id: 3,
    text: "Best nail salon in Dimapur! The gold French tip gel extensions lasted over a month without chipping. The salon interior is so aesthetic and cozy.",
    author: "Imlikala J.",
    role: "Nail Art Client",
    rating: 5,
    service: "Nail Art & Gel Extensions",
  },
]

export const stats = [
  { id: 1, value: "1,000+", label: "Happy Clients in Dimapur" },
  { id: 2, value: "785+", label: "Instagram Transformations" },
  { id: 3, value: "6D PMU", label: "Internationally Certified" },
  { id: 4, value: "4.9 ★", label: "Client Satisfaction" },
]
