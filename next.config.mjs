/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/**', // Permite todas as imagens no domínio
      },
    ],
  },
};

export default nextConfig;
