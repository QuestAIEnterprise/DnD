// gatsby-browser.js

// Importer globale styles, skrifttyper og tema-specifikke styles
import './src/styles/global.css';
import './src/styles/fonts.css';
import './src/styles/theme.css';

// Eventuel polyfill import og velkomstmeddelelse
export const onClientEntry = () => {
  // Tilføj eventuelle polyfills her
  if (typeof IntersectionObserver === 'undefined') {
    import('intersection-observer')
      .then(() => {
        console.log('IntersectionObserver polyfilled');
      });
  }

  // Velkomstmeddelelse i konsollen
  console.log("Velkommen til DnD 5th Edition Hub!");
};

// Logik der skal køres ved ruteopdatering
export const onRouteUpdate = ({ location, prevLocation }) => {
  console.log("Ny rute indlæst:", location.pathname);
};
