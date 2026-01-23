// --- JSON-LD for SEO ---
const ldJsonScript = document.createElement('script');
ldJsonScript.type = 'application/ld+json';
ldJsonScript.text = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AppTech Solutions",
  "url": "https://apptechofficial.github.io/AppTech/",
  "logo": "https://apptechofficial.github.io/AppTech/favicon.ico",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+260975212655",
    "contactType": "customer service",
    "areaServed": "ZM"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ndola",
    "addressCountry": "ZM"
  }
});
document.head.appendChild(ldJsonScript);

// --- Smooth Scrolling for Nav Links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
