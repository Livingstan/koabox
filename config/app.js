module.exports = {
    app: {
        title: 'Cargoez',
        version: '0.1.0'
    },

    // server
    server: {
        port: process.env.PORT || 3000,
        host: process.env.HOST || '0.0.0.0',
        // DOMAIN config should be set to the fully qualified application accessible
        // URL. For example: https://www.myapp.com (including port if required).
        domain: process.env.DOMAIN,
    },

    // database
    db: {
        uri: 'mongodb://localhost/db_cargoez',
        options: {
            useMongoClient: true
        },
        promise: global.Promise
    },

    body: {
        parser: {
            enableTypes: ['json', 'form'],
            formLimit: '10mb',
            jsonLimit: '10mb'
        }
    }
}