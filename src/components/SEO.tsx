import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  canonical?: string;
}

const SEO = ({
  title = "MicroFast Tech - Professional Technology Solutions",
  description = "Leading provider of CCTV surveillance, PBX systems, structured cabling, and IT infrastructure solutions for gas stations, restaurants, hotels, and offices. Professional installation, training, and maintenance services.",
  keywords = "CCTV surveillance, PBX systems, network cabling, IT infrastructure, security systems, gas station technology, restaurant POS, hotel systems, office technology, Coimbatore, Tamil Nadu, India, professional installation, maintenance warranty, system consultation, storage backup solutions",
  image = "/hero-building.jpg",
  url = "https://microfasttech.com",
  type = "website",
  canonical
}: SEOProps) => {
  const fullTitle = title.includes('MicroFast Tech') ? title : `${title} | MicroFast Tech`;
  const currentUrl = canonical || url;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="MicroFast Tech" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="copyright" content="MicroFast Tech" />
      <meta name="reply-to" content="info@microfasttech.com" />
      <meta name="owner" content="MicroFast Tech" />
      <meta name="url" content={currentUrl} />
      <meta name="identifier-URL" content={currentUrl} />
      <meta name="category" content="Technology Services, Security Systems, IT Infrastructure" />
      <meta name="coverage" content="Worldwide" />
      <meta name="target" content="businesses, gas stations, restaurants, hotels, offices" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Alternate hreflang for international SEO */}
      <link rel="alternate" hrefLang="en" href={currentUrl} />
      <link rel="alternate" hrefLang="en-IN" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}${image}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:site_name" content="MicroFast Tech" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@microfasttech" />
      <meta name="twitter:creator" content="@microfasttech" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}${image}`} />
      <meta name="twitter:image:alt" content="MicroFast Tech - Professional Technology Solutions" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#16a34a" />
      <meta name="msapplication-TileColor" content="#16a34a" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Geo Location */}
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Coimbatore" />
      <meta name="geo.position" content="11.0168;76.9558" />
      <meta name="ICBM" content="11.0168, 76.9558" />

      {/* Business Information */}
      <meta name="business.type" content="Technology Services" />
      <meta name="business.hours" content="Mon-Sat 9:00-18:00" />
      <meta name="business.phone" content="+91-9876543210" />
      <meta name="business.email" content="info@microfasttech.com" />

      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "MicroFast Tech",
          "legalName": "MicroFast Tech Private Limited",
          "description": description,
          "url": url,
          "logo": `${url}/logo.png`,
          "foundingDate": "2010",
          "email": "info@microfasttech.com",
          "telephone": "+91-9876543210",
          "faxNumber": "+91-422-1234567",
          "contactPoint": [{
            "@type": "ContactPoint",
            "telephone": "+91-9876543210",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": ["en", "ta", "hi"],
            "contactOption": "TollFree",
            "hoursAvailable": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "09:00",
              "closes": "18:00"
            }
          }],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Technology Street",
            "addressLocality": "Coimbatore",
            "addressRegion": "Tamil Nadu",
            "postalCode": "641001",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "11.0168",
            "longitude": "76.9558"
          },
          "sameAs": [
            "https://www.facebook.com/microfasttech",
            "https://www.linkedin.com/company/microfasttech",
            "https://twitter.com/microfasttech",
            "https://www.instagram.com/microfasttech"
          ],
          "areaServed": [{
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": "11.0168",
              "longitude": "76.9558"
            },
            "geoRadius": "100000"
          }],
          "serviceArea": {
            "@type": "AdministrativeArea",
            "name": "Tamil Nadu, India"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Technology Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "CCTV Surveillance Systems",
                  "description": "Professional CCTV installation, equipment supply, staff training, and maintenance services"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "PBX Communication Systems",
                  "description": "Professional phone systems with VoIP integration, system supply, training, and storage backup"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Structured Network Cabling",
                  "description": "Professional CAT6/CAT7 installation, quality supply, technical training, and system consultation"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "IT Infrastructure Solutions",
                  "description": "Complete IT solutions, equipment installation, hardware supply, training, and maintenance warranty"
                }
              }
            ]
          }
        })}
      </script>

      {/* Structured Data - LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": `${url}#LocalBusiness`,
          "name": "MicroFast Tech",
          "description": description,
          "url": url,
          "telephone": "+91-9876543210",
          "email": "info@microfasttech.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Technology Street",
            "addressLocality": "Coimbatore", 
            "addressRegion": "Tamil Nadu",
            "postalCode": "641001",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "11.0168",
            "longitude": "76.9558"
          },
          "openingHoursSpecification": [{
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "18:00"
          }],
          "priceRange": "$$",
          "paymentAccepted": "Cash, Credit Card, Bank Transfer",
          "currenciesAccepted": "INR"
        })}
      </script>

      {/* Structured Data - WebSite */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": `${url}#WebSite`,
          "url": url,
          "name": "MicroFast Tech",
          "description": description,
          "publisher": {
            "@type": "Organization",
            "name": "MicroFast Tech"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${url}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        })}
      </script>

      {/* Breadcrumb */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": url
          }]
        })}
      </script>

      {/* FAQ Schema for Homepage */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "What services does MicroFast Tech provide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "MicroFast Tech provides CCTV surveillance systems, PBX communication systems, structured network cabling, and IT infrastructure solutions with professional installation, training, and maintenance services."
            }
          }, {
            "@type": "Question", 
            "name": "Which industries do you serve?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We serve gas stations, convenience stores, restaurants, hospitality businesses, and corporate offices with customized technology solutions."
            }
          }, {
            "@type": "Question",
            "name": "Do you provide maintenance and support?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide comprehensive support including maintenance warranty, system consultation, storage backup solutions, and ongoing technical support for all our services."
            }
          }]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;