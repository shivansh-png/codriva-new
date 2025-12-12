# i18next Localization Plan for Codriva Website

## Project Analysis
- **Framework**: Next.js 14 with TypeScript
- **Current Language**: English
- **Target Languages**: Hindi (primary), French, German (flexible for future)
- **Excluded Pages**: Careers page (as requested)
- **Components to Localize**: All navigation, content, and UI text

## Implementation Strategy

### 1. Dependencies & Setup
- Install i18next and related packages
- Configure i18next for Next.js with proper file structure
- Set up language detection and routing

### 2. File Structure
```
locales/
├── en/
│   ├── common.json (navigation, footer, buttons)
│   ├── home.json (hero, services, about sections)
│   ├── pages/
│   │   ├── about.json
│   │   ├── services.json
│   │   ├── industries.json
│   │   ├── contact.json
│   │   └── privacy.json
│   └── components/
│       ├── navigation.json
│       ├── footer.json
│       └── ...
├── hi/
│   └── [same structure as en]
├── fr/
│   └── [same structure as en] (placeholder)
└── de/
    └── [same structure as en] (placeholder)
```

### 3. Translation Key Organization
- **Common**: Navigation, footer, buttons, generic terms
- **Home**: Hero section, services overview, about section
- **Pages**: Individual page content
- **Components**: Reusable component text

### 4. Components to Update
1. Navigation.tsx - All nav items and buttons
2. Hero.tsx - Hero content, CTAs
3. Services.tsx - Service titles, descriptions, features
4. AboutUs.tsx - About content
5. Footer.tsx - Footer links and content
6. All other components with text content

### 5. Implementation Steps
1. Install i18next dependencies
2. Create i18n configuration
3. Set up locale file structure
4. Extract and create translation keys
5. Implement language context and provider
6. Add language switcher component
7. Update all components to use translations
8. Test with Hindi translations

### 6. Hindi Translation Strategy
- Maintain professional business tone
- Ensure technical terms are appropriately translated
- Keep brand voice consistent
- Handle UI space constraints (Hindi text is typically longer)

### 7. Future Language Flexibility
- Structured JSON files for easy addition of new languages
- Consistent key naming across all languages
- Fallback to English for missing translations
