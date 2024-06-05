/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "firebasestorage.googleapis.com",
            pathname: "**",
          },
          {
            protocol: "https",
            hostname: "jasper-pimstorage-skullcandy.s3.us-west-1.amazonaws.com",
            pathname: "**",
          },
          {
            protocol: "https",
            hostname: "images.unsplash.com",
          },
        ],
      },
};

export default nextConfig;
