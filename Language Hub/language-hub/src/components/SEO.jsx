import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, canonical, keywords }) => {
    const siteName = "Bluestone Language Hub";
    const fullTitle = `${title} | ${siteName}`;
    const defaultDescription = "Bluestone Language Hub is the premier coaching center for IELTS, PTE, and OET in Coimbatore. We empower global careers with expert training and study abroad consulting.";
    const baseUrl = "https://bluestonehub.com";
    const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{fullTitle}</title>
            <meta name='description' content={description || defaultDescription} />
            {keywords && <meta name='keywords' content={keywords} />}
            <link rel="canonical" href={fullCanonical} />

            {/* Open Graph tags */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:url" content={fullCanonical} />

            {/* Twitter tags */}
            <meta name="twitter:creator" content="@bluestonehub" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
        </Helmet>
    );
};

export default SEO;
