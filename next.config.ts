import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "i.szalas.hu",
      },
      {
        protocol: "https",
        hostname: "antonin.com.pl",
      },
      {
        protocol: "https",
        hostname: "familyfunspace.com",
      },
      {
        protocol: "https",
        hostname: "pomnikiorganizacji.wordpress.com",
      },
    ],
  },
};

export default nextConfig;
