/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        minimumCacheTTL: 60*60*24*30,
        remotePatterns: [
          {
            protocol: "https",
            hostname: "rickandmortyapi.com",
            port: "",
            pathname: "/**",
          },
        ]
    }
};

export default nextConfig;
