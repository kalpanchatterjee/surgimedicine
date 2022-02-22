const nextSettings = {
    optimizeFonts: false,
    //crossOrigin: "anonymous",
    env: {
        title: "MyMedi",
        titleDescription: "React Ecomerce template with RESTFul API",
    },
    eslint: {
        // Warning: Dangerously allow production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ["localhost", "54.89.60.0"],
    },
};

module.exports = nextSettings;
