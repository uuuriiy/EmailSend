const router = require('express').Router();

const contactUsRouter = require("./contact-us/contact-us.router");

router.use('/contact-us', contactUsRouter)

router.use('*', (err, req, res, next) => res.status(err.status || 400).json({
    message: err.message,
    code: err.customCode
}));


module.exports = router;
