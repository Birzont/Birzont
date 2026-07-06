/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  ...(isProd ? { basePath: "/Birzont", assetPrefix: "/Birzont/" } : {}),
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
};

export default nextConfig;
