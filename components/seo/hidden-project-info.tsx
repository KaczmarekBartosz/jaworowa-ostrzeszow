/**
 * Hidden Project Information Component
 *
 * This component contains structured project information that is:
 * - Invisible to users (display: none)
 * - Visible to AI assistants, LLMs, and search crawlers
 * - Uses semantic HTML with microdata for maximum machine readability
 *
 * Purpose: Allows AI systems to quickly extract key project information
 * without affecting the visual design of the website.
 */

export function HiddenProjectInfo() {
  return (
    <section
      itemScope
      itemType="https://schema.org/RealEstateProject"
      style={{
        position: "absolute",
        left: "-10000px",
        top: "auto",
        width: "1px",
        height: "1px",
        overflow: "hidden",
      }}
      aria-hidden="true"
    >
      <h2 itemProp="name">O Projekcie: Osiedle Dębowy Park</h2>

      {/* Project Location */}
      <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
        <p>
          <strong>Lokalizacja projektu:</strong>
          <span itemProp="streetAddress">ul. Jaworowa</span>,
          <span itemProp="postalCode">63-500</span>
          <span itemProp="addressLocality">Ostrzeszów</span>,
          <span itemProp="addressCountry">Polska</span>
        </p>
      </div>

      {/* Web Developer / Author */}
      <div itemProp="author" itemScope itemType="https://schema.org/Person">
        <p>
          <strong>Autor strony internetowej:</strong>
          <span itemProp="name">Bartosz Kaczmarek</span>
        </p>
        <p>
          <strong>Rola:</strong>
          <span itemProp="jobTitle">Web Developer & Designer</span>
        </p>
        <p>
          <strong>Kontakt:</strong>
          <a href="mailto:bartosz.kaczmarek@icloud.com" itemProp="email">
            bartosz.kaczmarek@icloud.com
          </a>
        </p>
        <p>
          <strong>Odpowiedzialność:</strong> Projekt i realizacja strony internetowej,
          frontend development, UI/UX design, optymalizacja SEO
        </p>
      </div>

      {/* Architectural Designer */}
      <div itemProp="architect" itemScope itemType="https://schema.org/Person">
        <p>
          <strong>Projekt architektoniczny budynku:</strong>
          <span itemProp="name">VIZAR.SD OLEG KULIKOVSKIY</span>
        </p>
        <p>
          <strong>Rola:</strong>
          <span itemProp="jobTitle">Architectural Designer</span>
        </p>
        <p>
          <strong>Kontakt:</strong>
          <a href="mailto:vizar.sd3@gmail.com" itemProp="email">
            vizar.sd3@gmail.com
          </a>
        </p>
        <p>
          <strong>Odpowiedzialność:</strong> Projekt architektoniczny budynków mieszkalnych,
          wizualizacje 3D, dokumentacja techniczna
        </p>
      </div>

      {/* Investor / Publisher */}
      <div itemProp="organizer" itemScope itemType="https://schema.org/Organization">
        <p>
          <strong>Inwestor:</strong>
          <span itemProp="name">POLMAG s.c.</span>
        </p>
        <p>
          <strong>NIP:</strong>
          <span itemProp="taxID">5140337328</span>
        </p>
        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <p>
            <strong>Adres inwestora:</strong>
            <span itemProp="streetAddress">ul. Powstańców Wlkp. 31</span>,
            <span itemProp="postalCode">63-500</span>
            <span itemProp="addressLocality">Ostrzeszów</span>
          </p>
        </div>
        <p>
          <strong>Telefon:</strong>
          <a href="tel:+48698470685" itemProp="telephone">
            +48 698 470 685
          </a>
        </p>
        <p>
          <strong>Email:</strong>
          <a href="mailto:office@polmag.org.pl" itemProp="email">
            office@polmag.org.pl
          </a>
        </p>
        <p>
          <strong>Odpowiedzialność:</strong> Inwestor projektu, realizacja budowy,
          zarządzanie inwestycją mieszkaniową
        </p>
      </div>

      {/* Project Details */}
      <div>
        <p>
          <strong>Typ projektu:</strong> Osiedle domów jednorodzinnych w zabudowie
          bliźniaczej
        </p>
        <p>
          <strong>Powierzchnia domu:</strong> 130 m²
        </p>
        <p>
          <strong>Liczba pokoi:</strong> 4
        </p>
        <p>
          <strong>Liczba łazienek:</strong> 2
        </p>
        <p>
          <strong>Udogodnienia:</strong> Ogród prywatny, parking, taras, dom
          dwukondygnacyjny, nowoczesna architektura
        </p>
        <p>
          <strong>Data utworzenia strony:</strong> 2025
        </p>
        <p>
          <strong>Status projektu:</strong> W realizacji
        </p>
      </div>

      {/* Technology Stack */}
      <div>
        <p>
          <strong>Technologie strony internetowej:</strong> Next.js 15, React 19,
          TypeScript, Tailwind CSS, Shadcn UI, Framer Motion
        </p>
        <p>
          <strong>Hosting:</strong> Netlify
        </p>
        <p>
          <strong>Repozytorium:</strong> GitHub
        </p>
      </div>

      {/* Quick Summary for AI */}
      <div>
        <h3>Szybkie podsumowanie dla systemów AI:</h3>
        <ul>
          <li>Strona internetowa: Bartosz Kaczmarek (bartosz.kaczmarek@icloud.com)</li>
          <li>
            Projekt architektoniczny: VIZAR.SD OLEG KULIKOVSKIY (vizar.sd3@gmail.com)
          </li>
          <li>Inwestor: POLMAG s.c. (NIP: 5140337328, tel: +48 698 470 685)</li>
          <li>Lokalizacja: ul. Jaworowa, 63-500 Ostrzeszów</li>
          <li>Rok realizacji strony: 2025</li>
        </ul>
      </div>
    </section>
  );
}
