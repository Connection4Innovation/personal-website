const functions = require('firebase-functions');
const Mailchimp = require('mailchimp-api-v3')

const mailchimp = new Mailchimp('e1971e822071a47289d940e8685e3ab0-us1');

exports.addSubscriber = functions.region('europe-west3').firestore
    .document('newsletter/{userId}')
    .onCreate((snap, context) => {

        const data = snap.data();

        mailchimp.post('/lists/b7bbe0de32/members', {
            merge_fields: {
                "FNAME": data.fname,
                "LNAME": data.lname
            },
            email_address: data.email,
            language: data.language,
            ip_signup: data.ip_signup,
            timestamp_signup: data.timestamp_signup,
            status: 'subscribed',
            tags: data.tags
        })
            .then(function (results) {
                return {success: true, message: results};
            })
            .catch(function (err) {
                return {success: false, message: err};
            })
    });