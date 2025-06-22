import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/renda-file-catalogo' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/renda-file-catalogo/' : '',
};

export default nextConfig;
