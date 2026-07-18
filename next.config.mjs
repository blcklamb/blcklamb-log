import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: "build",
  images: {
    domains: ["velog.velcdn.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "velog.velcdn.com",
      },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ["@prisma/client"],
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

export default withContentlayer(nextConfig);
