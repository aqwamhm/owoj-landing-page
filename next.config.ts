import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "xsgames.co",
            },
        ],
    },
};

export default nextConfig;
