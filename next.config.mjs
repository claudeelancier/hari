/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/index.php", destination: "/", permanent: true },
      { source: "/about-us.php", destination: "/about", permanent: true },
      { source: "/contact.php", destination: "/contact", permanent: true },
      { source: "/careers.php", destination: "/careers", permanent: true },
      { source: "/portfolio.php", destination: "/work", permanent: true },
      { source: "/web-development.php", destination: "/services/web-development", permanent: true },
      { source: "/mobileapp-development.php", destination: "/services/mobile-app-development", permanent: true },
      { source: "/creative-design.php", destination: "/services/ui-ux-design", permanent: true },
      { source: "/online-marketing.php", destination: "/services/digital-marketing", permanent: true },
    ];
  },
};

export default nextConfig;
