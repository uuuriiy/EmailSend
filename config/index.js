module.exports = {
    PORT: process.env.PORT || 8080,

    ROOT_EMAIL: process.env.ROOT_EMAIL || 'email',
    ROOT_EMAIL_PASSWORD: process.env.ROOT_EMAIL_PASSWORD || 'pass',
    ROOT_EMAIL_SERVICE: process.env.ROOT_EMAIL_SERVICE || 'gmail',

    FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:4200'
}
