var config = {}

// database
config.db = {
    uri: 'mongodb://localhost/db_cargoez',
    options: {
        useMongoClient: true
    }
}

config.server = {
    port: 3000
}
config.app = {
    title: 'Cargoez',
    version: '0.1.0'
}

export default config;