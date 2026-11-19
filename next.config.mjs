/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingIncludes: {
    '/historia/dias-incontados': ['./content/lore/**/*'],
    '/historia/primeiro-ciclo': ['./content/lore/**/*'],
    '/planos': ['./content/lore/**/*'],
  },
};

export default nextConfig;
