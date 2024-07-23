module.exports = {
    siteMetadata: {
        title: `Mythren: Legends Unfolded`,
        description: `A comprehensive website for managing Mythren, a fantastical realm.`,
        author: `@yourname`,
        siteUrl: `https://username.github.io`, // Opdater med dit domænenavn
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Mythren: Legends Unfolded`,
                short_name: `Mythren`,
                start_url: `/`,
                background_color: `#1A1A1D`,
                theme_color: `#D32F2F`,
                display: `minimal-ui`,
                icon: `src/images/dnd-favicon.png`,
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: `YOUR_GOOGLE_ANALYTICS_TRACKING_ID`,
                head: true,
                anonymize: true,
                respectDNT: true,
                pageTransitionDelay: 0,
                defer: false,
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-robots-txt`,
    ],
}
