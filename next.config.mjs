/** @type {import('next').NextConfig} */
const useGithubPages = process.env.GITHUB_PAGES === "true";
const useStaticExport = process.env.STATIC_EXPORT === "true" || useGithubPages;

const nextConfig = {
  ...(useStaticExport ? { output: "export" } : {}),
  ...(useGithubPages
    ? { basePath: "/Birzont", assetPrefix: "/Birzont/" }
    : {}),
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
};

export default nextConfig;
