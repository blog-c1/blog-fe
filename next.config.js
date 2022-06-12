/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: "/admin",
        destination: "/admin/manage-posts/create",
        permanent: true,
      },
      {
        source: "/admin/dashboard",
        destination: "/admin/manage-posts/create",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
