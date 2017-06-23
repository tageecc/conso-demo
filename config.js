module.exports = {
    project: "conso",
    host: "localhost",
    port: 3000,
    publicDir: "./public",
    encoding: "utf8",
    view: {
        name: "handlebars",
        ext: ".hbs",
        baseDir: "./view",
        cache: false
    },
    dbConfig: {
        host: "localhost",
        port: 5984,
        dbName: "customers"
    },
    annotations: {
        enable: false,
        basePackage: "./controller"
    }
};