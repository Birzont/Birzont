/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',               // Static Export 모드
  basePath: '/Birzont',           // Github 레포 이름 정확히
  assetPrefix: '/Birzont/',      //CloudFlare에서는 삭제. 위에것도
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
