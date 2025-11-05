/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
    minimumCacheTTL: 5184000, // 60 days
  },
};

export default nextConfig;
