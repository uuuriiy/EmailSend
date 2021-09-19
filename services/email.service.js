const nodemailer = require("nodemailer");
const EmailTemplates = require('email-templates');
const path = require('path');

const {ROOT_EMAIL_SERVICE, ROOT_EMAIL, ROOT_EMAIL_PASSWORD, FRONTEND_URL} = require("../config");
const htmlTemplates = require("../email-templates");


const transporter = nodemailer.createTransport({
    service: ROOT_EMAIL_SERVICE,
    auth: {
        user: ROOT_EMAIL,
        pass: ROOT_EMAIL_PASSWORD
    }
});

const emailTemplates = new EmailTemplates({
    message: null,
    views: {
        root: path.join(process.cwd(), 'email-templates/'),
        options: {
            extension: 'ejs'
        }
    },
    juiceResources: {
        preserveImportant: true,
        webResources: {
            relativeTo: path.join(process.cwd(), 'email-templates', 'css')
        }
    }
})

class EmailService {
    async sendMail(userMail, action, context) {
        try {
            const templateInfo = htmlTemplates[action]
            const html = await emailTemplates.render(templateInfo.templateFileName, {...context, frontendUrl: FRONTEND_URL})

            const mailOptions = {
                from: 'Movie For Elite',
                to: userMail,
                subject: templateInfo.subject,
                html,
                attachments: [
                    {
                        filename: 'image-4.png',
                        path: path.join(process.cwd(), 'email-templates', 'images', 'image-4.png'),
                        cid: 'mainImg'
                    },
                    {
                        filename: 'image-5.png',
                        path: path.join(process.cwd(), 'email-templates', 'images', 'image-5.png'),
                        cid: 'fixImg'
                    },
                    {
                        filename: 'image-1.png',
                        path: path.join(process.cwd(), 'email-templates', 'images', 'image-1.png'),
                        cid: 'facebook'
                    },
                    {
                        filename: 'image-2.png',
                        path: path.join(process.cwd(), 'email-templates', 'images', 'image-2.png'),
                        cid: 'instagram'
                    },
                    {
                        filename: 'image-3.png',
                        path: path.join(process.cwd(), 'email-templates', 'images', 'image-3.png'),
                        cid: 'linkedIn'
                    },
                ]
            }

            return transporter.sendMail(mailOptions)
        } catch (e) {
            console.log(e);
        }

    }
}
module.exports = new EmailService();
