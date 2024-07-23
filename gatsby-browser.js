import './src/styles/global.css';
import './src/styles/fonts.css';
import './src/styles/theme.css';

export const onClientEntry = () => {
    if (typeof IntersectionObserver === 'undefined') {
        import('intersection-observer')
            .then(() => {
                console.log('IntersectionObserver polyfilled');
            });
    }
    console.log("Velkommen til DnD 5th Edition Hub!");
};

export const onRouteUpdate = ({ location, prevLocation }) => {
    console.log("Ny rute indlæst:", location.pathname);
};
