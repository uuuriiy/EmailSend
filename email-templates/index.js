const {emailActionEnum} = require('../constants')

module.exports = {
    [emailActionEnum.CONTACT_US_MESSAGE]: {
        subject: 'Movie For Elite',
        templateFileName: 'message'
    },
}
