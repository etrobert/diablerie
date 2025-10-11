/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "images.ctfassets.net" }],
  },
  // Remove any static export configuration to allow SSR
  output: "standalone",
};

export default nextConfig;
