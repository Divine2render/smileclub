import type {
  Answer,
  Dentist,
  FAQPage,
  Offer,
  Person,
  PostalAddress,
  Question,
  Service,
  WithContext,
} from "schema-dts";

const siteUrl = "https://smileclubdentistry.com";

const services = [
  "Check-ups and cleanings",
  "Children's dentistry",
  "Fillings",
  "Root canal therapy",
  "Dentures",
  "Invisalign",
  "Traditional braces",
  "Teeth whitening",
  "Veneers",
  "Gum contouring",
  "Dental implants",
  "Sedation (nitrous oxide and oral)",
  "Emergency visits",
  "Oral cancer screening",
  "Extractions",
  "Fluoride treatment",
  "Sealants",
];

const doctor: Person = {
  "@type": "Person",
  name: "Dr. Philip Onyirimba, DDS",
  jobTitle: "General Dentist",
};

const address: PostalAddress = {
  "@type": "PostalAddress",
  streetAddress: "11210 Steeplecrest Dr, Ste 130",
  addressLocality: "Houston",
  addressRegion: "TX",
  postalCode: "77065",
  addressCountry: "US",
};

const serviceOffers: Offer[] = services.map((name) => ({
  "@type": "Offer",
  itemOffered: {
    "@type": "Service",
    name,
  } satisfies Service,
}));

export const dentistSchema: WithContext<Dentist> = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "The Smile Club Dentistry & Orthodontics",
  url: siteUrl,
  image: `${siteUrl}/images/og.png`,
  telephone: "+1-832-941-4010",
  address,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "16:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:30",
    },
  ],
  employee: doctor,
  medicalSpecialty: "Dentistry",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Dental services",
    itemListElement: serviceOffers,
  },
  paymentAccepted:
    "Most major insurance (Delta Dental, Aetna, Cigna, MetLife, Guardian, Humana), CareCredit, Sunbit",
  // TODO: Add the verified Google Business Profile and social profile URLs.
  sameAs: [],
};

export function faqSchema(
  items: Array<{ question: string; answer: string }>,
): WithContext<FAQPage> {
  const mainEntity: Question[] = items.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    } satisfies Answer,
  }));

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  };
}
