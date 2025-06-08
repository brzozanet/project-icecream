# 🍦 Projekt Ice Cream

## HTML+CSS > Projekt grupowy

### GoIT fullstack developer course

Nowoczesna i responsywna strona internetowa dla firmy produkującej lody, zbudowana przy użyciu HTML, SASS i JavaScript. Strona wykonana jako SPA (_single-page-application_). Zawiera trzy główne działy: _About Us_, _How it's made?_ oraz _Our products_ oraz _Contact_. W pełni responsywny projekt powstał w oparciu o strategię _Mobile First_ w celu poprawy doświadczeń użytkownika na urządzeniach mobilnych, poprawę pozycjonowania w wynikach wyszukiwania, szybsze ładowanie stron, elastyczność i skalowalność oraz minimalizację zbędnych elementów. Zastosowanie preprocesora SASS spowodowało większą zwięzłość i czytelność kodu, możliwość wprowadzenia zmiennych oraz obsługi zagnieżdżania oraz modularność. Bundling aplikacji wykonany za pomoca Parcel, służącego do automatyzacji procesu budowania i dostarczania plików
źródłowych (np. JavaScript, CSS, obrazy) do produkcji.

## 🌐 Demo

Zobacz stronę online: [Ice Cream Project](https://brzozanet.github.io/project-icecream/)

## 🛠 Użyte Technologie

- HTML5
- SASS/SCSS
- Flexbox
- JavaScript
- Node.js
- Parcel (bundler)
- Swiper.js (do karuzeli)
- PostHTML (do includów)
- GIT & GitHub

## 📂 Struktura Projektu

```
project-icecream/
├── src/
│   ├── index.html
│   ├── index.js
│   ├── images/
│   └── sass/
│       ├── main.scss
│       └── components/
├── package.json
└── README.md
```

## 📱 Dostępne Strony i Funkcje

- **Strona Główna** - Landing page z sekcją hero
- **O Nas** - Informacje o firmie
- **Jak To Jest Robione** - Opis procesu produkcji
- **Nasze Produkty** - Katalog produktów
- **Kontakt** - Informacje kontaktowe i formularz
- Responsywny design dla wszystkich urządzeń
- Interaktywna galeria
- Karuzela z opiniami klientów
- Formularz kontaktowy z walidacją
- Nawigacja przyjazna urządzeniom mobilnym

## 🚀 Jak Rozpocząć

### Wymagania

- Node.js (wersja 12 lub wyższa)
- npm (Node Package Manager)

### Instalacja

1. Sklonuj repozytorium

   ```bash
   git clone https://github.com/brzozanet/project-icecream.git
   ```

2. Przejdź do katalogu projektu

   ```bash
   cd project-icecream
   ```

3. Zainstaluj zależności
   ```bash
   npm install
   ```

### Wersja Developerska

Aby uruchomić serwer deweloperski:

```bash
npm run dev
```

Strona będzie dostępna pod adresem: `http://localhost:1234`

### Budowanie Wersji Produkcyjnej

Aby zbudować projekt do wersji produkcyjnej:

```bash
npm run build
```

## 🌍 Wdrożenie

Projekt jest skonfigurowany do wdrożenia na GitHub Pages. Po zbudowaniu, strona będzie dostępna pod adresem:
`https://brzozanet.github.io/project-icecream/`

## 📝 Licencja

Projekt jest objęty licencją ISC.

![Screenshot App](https://raw.githubusercontent.com/brzozanet/project-icecream/main/src/images/gh-cover-goit-html-css.png)
