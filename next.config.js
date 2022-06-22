/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "s3-ap-northeast-1.amazonaws.com",
      "qiita-image-store.s3.ap-northeast-1.amazonaws.com",
      "hiyokoyarou.com",
    ],
  },
};

module.exports = nextConfig;
