/** @type {import('postcss-load-config').Config} */
const isProd = process.env.NODE_ENV === "production";
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const config = {
  plugins: {
    tailwindcss: {
      ...(isProd &&
        isGitHubPages && {
          basePath: "/renda-file-catalogo",
        }),
    },
    autoprefixer: {},
  },
};

export default config;
