# Jaworowa Ostrzeszów - Projekt Deweloperski

## 🏢 Opis Projektu

Strona internetowa dla projektu deweloperskiego "Jaworowa Ostrzeszów" zbudowana w oparciu o **Next.js 15** z filozofią **"Perfekcja w prostocie"**. Projekt prezentuje nowoczesne osiedle mieszkaniowe z eleganckim, responsywnym interfejsem użytkownika.

## 🚀 Status Projektu
- ✅ **PRODUKCJA** - Wdrożone na Netlify
- ⚠️ **UWAGA**: Nie modyfikować plików projektu - strona jest live!

## 🛠️ Stack Technologiczny

### Frontend Framework
- **Next.js 15.5.3** (z turbopack)
- **React 19.1.0** (najnowsza wersja)
- **TypeScript 5** (pełne typowanie)

### Styling & UI
- **Tailwind CSS 4** (najnowsza wersja)
- **Tailwind Merge** - optymalizacja klas CSS
- **Class Variance Authority** - zarządzanie wariantami komponentów
- **next-themes** - przełączanie motywów jasny/ciemny

### Komponenty UI
- **Radix UI** (headless components):
  - Dialog (modalne okna)
  - Label (etykiety formularzy)
  - Slider (suwaki)
  - Slot (kompozycja komponentów)
  - Tabs (zakładki)
- **Lucide React** (ikony)

### Animacje & Interaktywność
- **Framer Motion 12** (zaawansowane animacje)
- **GSAP 3.13** (animacje timeline)
- **Embla Carousel 8.6** (karuzele)
- **tw-animate-css** (animacje CSS)

### Formularze & Walidacja
- **React Hook Form 7** (zarządzanie formularzami)
- **Hookform Resolvers** (integracja z walidatorami)
- **Zod 4** (schema validation)

### Backend/API
- **Resend 6** (wysyłka emaili)

## 📁 Struktura Projektu

```
jaworowa-ostrzeszow/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Główny layout aplikacji
│   ├── page.tsx          # Strona główna
│   ├── globals.css       # Globalne style
│   └── favicon.ico       # Ikona strony
├── components/
│   ├── common/           # Wspólne komponenty
│   ├── layout/          # Komponenty layoutu
│   ├── sections/        # Sekcje strony
│   ├── ui/             # Komponenty UI (Radix + custom)
│   └── theme-provider.tsx # Provider motywów
├── public/             # Statyczne pliki
├── lib/               # Utilities i helpery
└── styles/           # Dodatkowe style
```

## ⚡ Kluczowe Funkcjonalności

### 🎨 System Motywów
- Przełączanie między trybem jasnym i ciemnym
- Zgodność z preferencjami systemu
- Płynne przejścia między motywami

### 📱 Responsive Design
- Mobile-first approach
- Optymalizacja dla wszystkich urządzeń
- Fluid typography

### 🖼️ Galeria Zdjęć
- Interaktywny viewer zdjęć
- Karuzela z nawigacją
- Lazy loading obrazów

### 📋 Formularze Kontaktowe
- Walidacja w czasie rzeczywistym
- Integracja z systemem wysyłki emaili
- User-friendly komunikaty błędów

### 🧮 Kalkulator Kredytowy
- Interaktywne suwaki
- Kalkulacja w czasie rzeczywistym
- Responsywny interfejs

### 🏠 Prezentacja Mieszkań
- Szczegółowe karty mieszkań
- Filtry i wyszukiwanie
- Interaktywne plany

## 🚀 Uruchomienie Rozwojowe

```bash
# Instalacja zależności
npm install

# Uruchomienie serwera deweloperskiego (z Turbopack)
npm run dev

# Build produkcyjny
npm run build

# Start serwera produkcyjnego
npm start

# Linting
npm run lint
```

## 🔧 Konfiguracja

### Environment Variables
```env
# Resend API (dla formularzy kontaktowych)
RESEND_API_KEY=your_api_key_here

# Next.js
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Tailwind CSS 4
Projekt wykorzystuje najnowszą wersję Tailwind CSS z:
- Custom design tokens
- Zoptymalizowane klasy utility
- CSS-in-JS support

## 📊 Performance & SEO

- **Next.js 15** z App Router
- **Turbopack** dla szybszego bundlowania
- **Static Site Generation** gdzie możliwe
- **Optimized Images** (Next.js Image)
- **Font Optimization** (Geist font family)

## 🛡️ Bezpieczeństwo & Jakość Kodu

- **TypeScript** - pełne typowanie
- **ESLint** - standardy kodowania
- **Zod** - walidacja danych
- **Next.js Security Headers**

## 🎯 Najlepsze Praktyki Zaimplementowane

1. **Component Composition** - używanie Radix Slot
2. **Accessible Design** - zgodność z WCAG
3. **Performance First** - lazy loading, code splitting
4. **SEO Optimized** - meta tags, structured data
5. **Mobile First** - responsywny design
6. **Clean Architecture** - separacja logiki biznesowej

## 🔄 Deployment

- **Platforma**: Netlify
- **Automatyczne deploy**: przy push do main branch
- **SSL**: Automatycznie zarządzany przez Netlify
- **CDN**: Globalna dystrybucja przez Netlify Edge

## 📝 Notatki dla AI Agentów

### Architektura Komponentów
- Użyj `components/ui` dla podstawowych elementów UI
- `components/sections` zawiera sekcje strony
- `components/common` dla wspólnych elementów
- `components/layout` dla struktury strony

### Styling Guidelines
- Używaj Tailwind utility classes
- Komponenty UI bazują na Radix primitives
- Motyw zarządzany przez next-themes
- Animacje przez Framer Motion lub GSAP

### Formularze
- React Hook Form + Zod validation
- Resend do wysyłki emaili
- Komponenty form w `components/ui`

### Stan Aplikacji
- Local state w komponentach
- Theme state przez next-themes
- Form state przez React Hook Form

## ⚠️ Ważne Ostrzeżenia

1. **NIE MODYFIKUJ** plików projektu - strona jest LIVE na Netlify
2. Zmiany tylko w README.md lub dokumentacji
3. Przed jakimikolwiek zmianami skonsultuj z właścicielem
4. Testuj wszystkie zmiany lokalnie przed wdrożeniem

---

**Ostatnia aktualizacja dokumentacji**: Październik 2025  
**Wersja projektu**: 0.1.0  
**Status**: Produkcja (Live na Netlify)