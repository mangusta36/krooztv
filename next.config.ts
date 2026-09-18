import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/plans",
        destination: "/subscription",
        permanent: true
      }
    ];
  },
  experimental: {
    inlineCss: true
  },
  images: {
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
