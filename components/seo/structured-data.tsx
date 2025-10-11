/**
 * JSON-LD Structured Data dla Osiedle Dębowy Park
 *
 * KNOWLEDGE GRAPH ARCHITECTURE:
 * Implementuje pełny graf wiedzy z powiązaniami między bytami:
 *
 * Developer (POLMAG) ←─────┐
 *     ↓ (seller)           │ (parentOrganization)
 * RealEstateListing        │
 *     ↓ (offers)           │
 * Offer ──────────────────→┘
 *
 * Generuje schema.org markup dla:
 * - Organization (deweloper/inwestor) - z @id
 * - RealEstateListing (główna oferta) - z referencją do developer
 * - WebSite (strona jako całość)
 * - CreativeWork (strona jako dzieło twórcze)
 * - RealEstateAgent (lokalny biznes)
 * - BreadcrumbList (nawigacja)
 * - FAQPage (najczęściej zadawane pytania)
 *
 * Google użyje tego do Rich Results (Rich Snippets)
 */

const SITE_URL = "https://debowypark-ostrzeszow.pl";

export function StructuredData() {
  // ===== DEVELOPER/INVESTOR ENTITY (z @id dla Knowledge Graph) =====
  const developer = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#developer`, // ← Unikalny identyfikator dla grafu
    name: "POLMAG s.c.",
    alternateName: "POLMAG",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    taxID: "5140337328", // NIP
    email: "office@polmag.org.pl",
    telephone: "+48698470685",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. Powstańców Wlkp. 31",
      addressLocality: "Ostrzeszów",
      postalCode: "63-500",
      addressCountry: "PL",
    },
    // Dodaj social media gdy będą dostępne
    // sameAs: [
    //   "https://www.facebook.com/polmag",
    //   "https://www.instagram.com/polmag",
    // ],
  };

  // ===== REAL ESTATE LISTING SCHEMA (z referencją do developer) =====
  const realEstateListing = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "@id": `${SITE_URL}/#listing`, // ← Unikalny identyfikator
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
    // ← NOWE: Powiązanie z deweloperem przez referencję
    seller: {
      "@id": `${SITE_URL}/#developer`, // Referencja do Organization
    },
    // Offers (oferta sprzedaży)
    offers: {
      "@type": "Offer",
      priceCurrency: "PLN",
      availability: "https://schema.org/InStock",
      seller: {
        "@id": `${SITE_URL}/#developer`, // Referencja do dewelopera
      },
    },
  };

  // ===== LOCAL BUSINESS SCHEMA (RealEstateAgent z referencją) =====
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${SITE_URL}/#agent`, // ← Unikalny identyfikator
    name: "Osiedle Dębowy Park - Biuro Sprzedaży",
    alternateName: "Dębowy Park Ostrzeszów",
    url: SITE_URL,
    image: `${SITE_URL}/og-image.jpg`,
    telephone: "+48698470685",
    email: "office@polmag.org.pl",
    // ← NOWE: Powiązanie z deweloperem (organizacja macierzysta)
    parentOrganization: {
      "@id": `${SITE_URL}/#developer`, // Referencja do POLMAG
    },
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
      latitude: 51.4301,
      longitude: 17.9284,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    priceRange: "PLN", // Lub konkretny zakres gdy będzie dostępny
    areaServed: {
      "@type": "City",
      name: "Ostrzeszów",
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

  // ===== WEBSITE SCHEMA (z powiązaniami do deweloper i listing) =====
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`, // ← Unikalny identyfikator
    name: "Osiedle Dębowy Park",
    url: SITE_URL,
    description:
      "Oficjalna strona internetowa Osiedla Dębowy Park w Ostrzeszowie. Nowoczesne, kameralne osiedle z domami z ogrodem, blisko natury i miasta.",
    inLanguage: "pl-PL",
    author: {
      "@type": "Person",
      name: "Bartosz Kaczmarek",
      email: "bartosz.kaczmarek@icloud.com",
      jobTitle: "Web Developer & Designer",
    },
    creator: {
      "@type": "Person",
      name: "Bartosz Kaczmarek",
      email: "bartosz.kaczmarek@icloud.com",
    },
    // ← NOWE: Referencja do dewelopera jako publisher
    publisher: {
      "@id": `${SITE_URL}/#developer`, // Referencja do POLMAG
    },
    // ← NOWE: O czym jest ta strona (referencja do listing)
    about: {
      "@id": `${SITE_URL}/#listing`, // Referencja do RealEstateListing
    },
    // Dodatkowe informacje o architekcie projektu
    contributor: {
      "@type": "Person",
      name: "VIZAR.SD OLEG KULIKOVSKIY",
      email: "vizar.sd3@gmail.com",
      jobTitle: "Architectural Designer & 3D Visualization Specialist",
    },
  };

  // ===== CREATIVE WORK SCHEMA (Website as Creative Work z referencjami) =====
  const creativeWork = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${SITE_URL}/#creative-work`, // ← Unikalny identyfikator
    name: "Osiedle Dębowy Park - Oficjalna Strona Internetowa",
    description:
      "Oficjalna strona internetowa dla inwestycji Osiedle Dębowy Park w Ostrzeszowie. Zaprojektowana i wykonana przez Bartosza Kaczmarka, wizualizacje architektoniczne: VIZAR.SD OLEG KULIKOVSKIY.",
    url: SITE_URL,
    inLanguage: "pl-PL",
    dateCreated: "2025",
    datePublished: "2025",
    // Autorzy (web developer + architect)
    author: [
      {
        "@type": "Person",
        name: "Bartosz Kaczmarek",
        email: "bartosz.kaczmarek@icloud.com",
        jobTitle: "Web Developer & Designer",
      },
      {
        "@type": "Person",
        name: "VIZAR.SD OLEG KULIKOVSKIY",
        email: "vizar.sd3@gmail.com",
        jobTitle: "Architectural Designer & Visualization Specialist",
      },
    ],
    creator: [
      {
        "@type": "Person",
        name: "Bartosz Kaczmarek",
        email: "bartosz.kaczmarek@icloud.com",
      },
      {
        "@type": "Person",
        name: "VIZAR.SD OLEG KULIKOVSKIY",
        email: "vizar.sd3@gmail.com",
      },
    ],
    // ← NOWE: Referencja do dewelopera jako publisher
    publisher: {
      "@id": `${SITE_URL}/#developer`, // Referencja do POLMAG
    },
    copyrightHolder: {
      "@id": `${SITE_URL}/#developer`, // Referencja do POLMAG
    },
    copyrightYear: 2025,
    keywords:
      "nieruchomości, domy na sprzedaż, osiedle mieszkaniowe, Ostrzeszów, zabudowa bliźniacza, deweloper, projekt architektoniczny, wizualizacje 3D, strona internetowa, web design, POLMAG, VIZAR.SD, Bartosz Kaczmarek",
  };

  // ===== FAQ PAGE SCHEMA (Najczęściej zadawane pytania) =====
  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`, // ← Unikalny identyfikator
    name: "Często zadawane pytania - Osiedle Dębowy Park",
    about: {
      "@id": `${SITE_URL}/#listing`, // Referencja do RealEstateListing
    },
    mainEntity: [
      {
        "@type": "Question",
        name: "Gdzie znajduje się Osiedle Dębowy Park?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Osiedle Dębowy Park znajduje się przy ulicy Jaworowej w Ostrzeszowie (kod pocztowy: 63-500), w województwie wielkopolskim. To spokojna lokalizacja w otoczeniu zieleni, jednocześnie blisko centrum miasta z pełną infrastrukturą.",
        },
      },
      {
        "@type": "Question",
        name: "Jaka jest powierzchnia domów w Osiedlu Dębowy Park?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Domy w Osiedlu Dębowy Park mają powierzchnię użytkową 130 m². Każdy dom posiada 4 pokoje, 2 łazienki, przestronny taras oraz prywatny ogród. Domy są dwukondygnacyjne (parter + piętro) w nowoczesnej architekturze.",
        },
      },
      {
        "@type": "Question",
        name: "Jakie udogodnienia posiadają domy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Każdy dom w Osiedlu Dębowy Park posiada: prywatny ogród, miejsce parkingowe, przestronny taras, 4 pokoje, 2 łazienki oraz nowoczesną architekturę z wysokiej jakości materiałów. Domy są energooszczędne.",
        },
      },
      {
        "@type": "Question",
        name: "Kto jest deweloperem Osiedla Dębowy Park?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Inwestorem i deweloperem Osiedla Dębowy Park jest firma POLMAG s.c. z siedzibą w Ostrzeszowie (NIP: 5140337328). Firma posiada wieloletnie doświadczenie w realizacji inwestycji mieszkaniowych w regionie.",
        },
      },
      {
        "@type": "Question",
        name: "Kto zaprojektował architekturę domów?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Projekt architektoniczny domów w Osiedlu Dębowy Park wykonał VIZAR.SD OLEG KULIKOVSKIY - doświadczony architekt specjalizujący się w nowoczesnej architekturze mieszkaniowej i wizualizacjach 3D.",
        },
      },
      {
        "@type": "Question",
        name: "Jak mogę umówić się na prezentację domu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Aby umówić się na prezentację domu, prosimy o kontakt telefoniczny pod numerem +48 698 470 685 lub mailowo na adres: office@polmag.org.pl. Chętnie odpowiemy na wszystkie pytania i przedstawimy dostępne opcje.",
        },
      },
      {
        "@type": "Question",
        name: "Czy domy są dostępne od zaraz?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Szczegółowe informacje o dostępności poszczególnych domów i harmonogramie realizacji uzyskasz kontaktując się z nami telefonicznie: +48 698 470 685 lub mailowo: office@polmag.org.pl.",
        },
      },
      {
        "@type": "Question",
        name: "Jaka jest klasa energetyczna domów?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Domy w Osiedlu Dębowy Park charakteryzują się wysoką klasą energetyczną, co przekłada się na niskie koszty eksploatacji. Szczegółowe informacje o klasie energetycznej dostępne są po kontakcie z biurem sprzedaży.",
        },
      },
    ],
  };

  return (
    <>
      {/*
        ═══════════════════════════════════════════════════════════════
        KNOWLEDGE GRAPH - Kolejność ma znaczenie!
        1. Developer (Organization) - bazowy byt z @id
        2. RealEstateListing - referencja do developer
        3. LocalBusiness - referencja do developer
        4. WebSite - referencja do developer i listing
        5. CreativeWork - referencja do developer
        6. FAQPage - referencja do listing (Google Rich Results!)
        7. Breadcrumb - nawigacja
        ═══════════════════════════════════════════════════════════════
      */}

      {/* 1. DEVELOPER/INVESTOR (Organization) - BASE ENTITY */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(developer) }}
      />

      {/* 2. REAL ESTATE LISTING (główna oferta) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateListing) }}
      />

      {/* 3. LOCAL BUSINESS (RealEstateAgent) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />

      {/* 4. WEBSITE (strona jako całość) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />

      {/* 5. CREATIVE WORK (strona jako dzieło twórcze) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWork) }}
      />

      {/* 6. FAQ PAGE (Często zadawane pytania - Google Rich Results) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />

      {/* 7. BREADCRUMB (nawigacja) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
