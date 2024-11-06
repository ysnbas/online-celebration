/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    webpack5: true,
    sassOptions:{
        includePaths: ["src/assets/styles/**/*.scss", "pages/**/*.scss"],
        resources: [".src/assets/styles/common/_colors.scss",],
        prependData: `@import "./src/assets/styles/common/_colors.scss";`,
    }
};

export default nextConfig;
