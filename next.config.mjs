/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true
    },
    transpilePackages: ["swiper", "lucide-react"]
};

export default nextConfig;
