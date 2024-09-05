/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['wefit-react-web-test.s3.amazonaws.com'], // Adiciona o domínio permitido para carregar imagens
  },
};

export default nextConfig;
