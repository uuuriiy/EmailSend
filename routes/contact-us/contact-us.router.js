const {createContactMessage} = require("../../controllers/contact-us/contact-us.controller");
const contactUsRouter = require('express').Router();

contactUsRouter.post('/', createContactMessage)

module.exports = contactUsRouter;
