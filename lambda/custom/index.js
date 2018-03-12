'use strict';
const Alexa = require('alexa-sdk');
const APP_ID = undefined;

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

const handlers = {
    'LaunchRequest': function () {
        this.emit(':ask', "Welcome to query search skill");
    },
    'GetQueryData': function () {

        var slotValue = this.event.request.intent.slots.Query.value;
        this.emit(':tell', "You have searched for " + slotValue);

    },
    'AMAZON.HelpIntent': function () {
        this.emit(':tell', "GoodBye");
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', "GoodBye");
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', "GoodBye");
    },
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.registerHandlers(handlers);
    alexa.execute();
};
