/**
 * JSON-LD Structured Data dla Osiedle Dębowy Park
 *
 * Generuje schema.org markup dla:
 * - RealEstateListing (główna oferta)
 * - Organization (dane firmy)
 * - BreadcrumbList (nawigacja)
 *
 * Google użyje tego do Rich Results (Rich Snippets)
 */

const SITE_URL = "https://debowypark-ostrzeszow.pl";

export function StructuredData() {
  // ===== REAL ESTATE LISTING SCHEMA =====
  const realEstateListing = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: "Osiedle Dębowy Park",
    description:
      "Nowoczesne, kameralne osiedle w Ostrzeszowie. Domy z ogrodem, blisko natury i miasta. Oferujemy komfortowe domy jednorodzinne 130m² z 4 pokojami, 2 łazienkami, tarasem i prywatnym ogrodem.",
    url: SITE_URL,
    image: [
      `${SITE_URL}/og-image.jpg`,
      `${SITE_URL}/jaworowa-wizualizacja-1.png`,
      `${SITE_URL}/hero_final_desktop.png`,
      `${SITE_URL}/galeria/1.jpg`,
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jaworowa",
      addressLocality: "Ostrzeszów",
      addressRegion: "Wielkopolskie",
      postalCode: "63-500",
      addressCountry: "PL",
    },
    geo: {
      "@type": "GeoCoordinates",
      // ⚠️ TODO: Zweryfikuj dokładne współrzędne dla ulicy Jaworowa
      latitude: 51.4301,
      longitude: 17.9284,
    },
    numberOfRooms: 4,
    floorSize: {
      "@type": "QuantitativeValue",
      value: 130,
      unitCode: "MTK", // Metr kwadratowy (ISO 4217)
    },
    numberOfBathroomsTotal: 2,
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Ogród prywatny",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Parking",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Taras",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Dom dwukondygnacyjny",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Nowoczesna architektura",
        value: true,
      },
    ],
    // Opcjonalnie: dodaj ofertę z ceną gdy będzie dostępna
    // offers: {
    //   "@type": "Offer",
    //   price: "650000",
    //   priceCurrency: "PLN",
    //   availability: "https://schema.org/InStock",
    //   priceValidUntil: "2025-12-31",
    //   seller: {
    //     "@type": "Organization",
    //     name: "Osiedle Dębowy Park",
    //   },
    // },
  };

  // ===== ORGANIZATION SCHEMA =====
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Osiedle Dębowy Park",
    alternateName: "Dębowy Park Ostrzeszów",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+48698470685",
      contactType: "Sales",
      areaServed: "PL",
      availableLanguage: ["Polish", "pl"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jaworowa",
      addressLocality: "Ostrzeszów",
      addressRegion: "Wielkopolskie",
      postalCode: "63-500",
      addressCountry: "PL",
    },
    // Dodaj social media gdy będą dostępne
    // sameAs: [
    //   "https://www.facebook.com/debowypark",
    //   "https://www.instagram.com/debowypark",
    // ],
  };

  // ===== BREADCRUMB SCHEMA =====
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Strona główna",
        item: SITE_URL,
      },
      // Dodaj więcej elementów gdy stworzysz podstrony
      // {
      //   "@type": "ListItem",
      //   position: 2,
      //   name: "Galeria",
      //   item: `${SITE_URL}#galeria`,
      // },
    ],
  };

  // ===== LOCAL BUSINESS SCHEMA (dodatkowy) =====
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Osiedle Dębowy Park",
    image: `${SITE_URL}/og-image.jpg`,
    "@id": SITE_URL,
    url: SITE_URL,
    telephone: "+48698470685",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jaworowa",
      addressLocality: "Ostrzeszów",
      postalCode: "63-500",
      addressCountry: "PL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.4301,
      longitude: 17.9284,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  };

  return (
    <>
      {/* Real Estate Listing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateListing) }}
      />

      {/* Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />

      {/* Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
    </>
  );
}
