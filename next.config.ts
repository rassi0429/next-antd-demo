import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "standalone",
  transpilePackages: [
    'rc-util',
    "rc-picker",
    "rc-pagination",
    "@ant-design/icons-svg"
  ]
};

export default nextConfig;
