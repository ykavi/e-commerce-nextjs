/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['vuaws.imgix.net'], //eklenen cdn domaini kullanılabilir
  },
};

module.exports = nextConfig;
