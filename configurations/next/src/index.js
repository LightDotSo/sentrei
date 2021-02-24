const withBundleAnalyzer = require("@next/bundle-analyzer");
const withPlugins = require("next-compose-plugins");
const withTranslate = require("next-translate");

const isVercel = process.env.VERCEL_ENV === "1";

const config = {
  experimental: {
    optimizeCss: true,
    optimizeFonts: true,
    optimizeImages: true,
    pageEnv: true,
    plugins: true,
    profiling: true,
    reactMode: "concurrent",
    scriptLoader: true,
    scrollRestoration: true,
    sprFlushToDisk: true,
    stats: true,
    workerThreads: true,
  },
  future: {
    excludeDefaultMomentLocales: true,
    strictPostcssConfiguration: true,
    webpack5: true,
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja", "zh"],
  },
  poweredByHeader: true,
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  webpack: config => {
    config.resolve.symlinks = isVercel ? false : true;
    return config;
  },
};

const plugins = [
  [
    withBundleAnalyzer({
      enabled: process.env.ANALYZE === "true",
    }),
    withTranslate,
  ],
];

module.exports = withPlugins(plugins, config);
