/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const useGithubPagesBase = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",
  ...(isProd && useGithubPagesBase
    ? { basePath: "/Birzont", assetPrefix: "/Birzont/" }
    : {}),
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
};

export default nextConfig;
