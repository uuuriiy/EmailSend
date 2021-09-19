const {emailActionEnum: {CONTACT_US_MESSAGE}} = require("../../constants");
const {emailService} = require("../../services");

module.exports = {
    createContactMessage:async(req, res, next) => {
        try {
            const user = req.body;
            console.log(user)

            await emailService.sendMail(
                user.email,
                CONTACT_US_MESSAGE,
                {userName: user.name, userMessage: user.message}
            )

            res.sendStatus(200)
            res.redirect('/')
        } catch (e) {
            next(e)
        }
    }
}
