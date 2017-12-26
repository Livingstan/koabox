var config = {}

// database
config.mongodb = {
    uri: 'mongodb://localhost/db_cargoez',
    options: {
        useMongoClient: true
    }
}

config.server = {
    port: 3000
}

export default config;