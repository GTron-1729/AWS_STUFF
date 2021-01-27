'use strict';

function close(sessionAttributes, type, fulfillmentState, message, responseCard) {
    return {
        sessionAttributes,
        dialogAction: {
            type,
            fulfillmentState,
            message,
            responseCard
        }
    };
}

function fail(intentRequest) {
    return close(intentRequest.sessionAttributes, 'Close', 'Failed', {
        'contentType': 'PlainText',
        'content': 'Okay, your order will not be placed. Let\'s try that again.'
    });
}

function fullfil(intentRequest) {
    // Pad a number with zeros
    Number.prototype.pad = function(size) {
        var s = String(this);
        while (s.length < (size || 2)) {s = "0" + s;}
        return s;
    };

    console.log(`request received for userId=${intentRequest.userId}, intentName=${intentRequest.currentIntent.name}`);
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const sessionAttributes = intentRequest.sessionAttributes;
    const slots = intentRequest.currentIntent.slots;

    // Create the current date by offseting by the given timeZoneOffset, all lamda dates are in GMT
    const orderDate = new Date(new Date().valueOf() - (sessionAttributes.timezoneOffset * 60000));
    // Save order day, date and time
    sessionAttributes.orderDay = days[orderDate.getDay()];
    sessionAttributes.orderDate = `${orderDate.getMonth() + 1}-${orderDate.getDate()}-${orderDate.getUTCFullYear()}`;
    // Format date and time in a way that will sound nice in Polly
    const militaryHour = orderDate.getHours();
    const hour = militaryHour % 12 ? militaryHour % 12 : 12;
    const ampm = militaryHour > 11 ? 'pm' : 'am';
    sessionAttributes.orderTime = `${hour}:${orderDate.getMinutes().pad(2)}${ampm}`;

    // Save order number
    sessionAttributes.orderNumber = Math.floor(Math.random() * 1000000000); // Complicated order number generation logic!

    // Create the message
    const message = `${sessionAttributes.awesomeMessage3}! Your order was received on ${sessionAttributes.orderDay} <say-as interpret-as="date" format="mdy"> ${sessionAttributes.orderDate} </say-as> at ${sessionAttributes.orderTime}. <mark name= 'gesture:${sessionAttributes.confirmationGesture}'/> You can come pick up your drink when your order number is called. Thanks for stopping by, and have a ${sessionAttributes.awesomeMessage4} day!`;

    // Create the response card title
    let title;

    if(slots.Appetizers === 'Bruschetta')
        title = `${slots.MainOrderType}\n${slots.Appetizers}\nwith ${slots.BruschettaType}`;
    if(slots.Appetizers === 'Steak Tartare')
        title = `${slots.MainOrderType}\n${slots.Appetizers}\nwith ${slots.SteakTartareType}`;
    if(slots.Appetizers === 'Gazpacho')
        title = `${slots.MainOrderType}\n${slots.Appetizers}\nwith ${slots.GazpachoType}`;
    if(slots.Appetizers === 'Tzatziki')
        title = `${slots.MainOrderType}\n${slots.Appetizers}\nwith ${slots.TzatzikiType}`;

    if(slots.Drinks === 'Cappuccino')
        title = `${slots.MainOrderType}\n${slots.Drinks}\n ${slots.CappuccinoType}`;
    if(slots.Drinks === 'Herbal Tea')
        title = `${slots.MainOrderType}\n${slots.Drinks}\nwith ${slots.HerbalTeaType}`;
    if(slots.Drinks === 'Water')
        title = `${slots.MainOrderType}\n${slots.Drinks}\nwith ${slots.WaterType}`;
    if(slots.Drinks === 'Juices')
        title = `${slots.MainOrderType}\n${slots.Drinks}\nwith ${slots.JuiceType}`;

    if(slots.MainCourse === 'Lasagne')
        title = `${slots.MainOrderType}\n${slots.MainCourse}\nwith ${slots.LasagneType}`;
    if(slots.MainCourse === 'Grilled Fish')
        title = `${slots.MainOrderType}\n${slots.MainCourse}\nwith ${slots.GrilledFishType}`;
    if(slots.MainCourse === 'Beef Brasato')
        title = `${slots.MainOrderType}\n${slots.MainCourse}\nwith ${slots.BeefBrasatoType}`;
    if(slots.MainCourse === 'Risotto')
        title = `${slots.MainOrderType}\n${slots.MainCourse}\nwith ${slots.RisottoType}`;


    return close(sessionAttributes, 'Close', 'Fulfilled', {
        'contentType': 'SSML',
        'content': message
    }, {
        'version': 1,
        'contentType': 'application/vnd.amazonaws.card.generic',
        'genericAttachments': [
            {
                'title': title,
                'subTitle': sessionAttributes.orderNumber/*,
                'imageUrl': `${sessionAttributes.imageLocation}/${slots.beverageType.toLowerCase().replace(/ /g, '')}.png`*/
            }
        ]
    });
}

function confirm(intentRequest) {
    const slots = intentRequest.currentIntent.slots;
    let message;

    if(slots.Appetizers === 'Bruschetta')
        message = `<speak> So youre looking at a <mark name= 'gesture:one'/> Bruschetta , with ${slots.BruschettaType}. Is that right? </speak>`;
    if(slots.Appetizers === 'Steak Tartare')
        message = `<speak> So youre looking at a <mark name= 'gesture:one'/> Steak Tartare , with ${slots.SteakTartareType}. Is that right? </speak>`;
    if(slots.Appetizers === 'Gazpacho')
        message = `<speak> So youre looking at a <mark name= 'gesture:one'/> Gazpacho , with ${slots.GazpachoType}. Is that right? </speak>`;
    if(slots.Appetizers === 'Tzatziki')
        message = `<speak> So youre looking at a <mark name= 'gesture:one'/> Tzatziki , with ${slots.TzatzikiType}. Is that right? </speak>`;
    
    if(slots.Drinks === 'Cappuccino')
        message = `<speak> So youre looking at a <mark name= 'gesture:one'/> Cappuccino , with ${slots.CappuccinoType}. Is that right? </speak>`;
    if(slots.Drinks === 'Herbal Tea')
        message = `<speak> So youre looking at a <mark name= 'gesture:one'/> Herbal Tea , with ${slots.HerbalTeaType}. Is that right? </speak>`;
    if(slots.Drinks === 'Water')
        message = `<speak> So youre looking at a <mark name= 'gesture:one'/> Water , with ${slots.WaterType}. Is that right? </speak>`;
    if(slots.Drinks === 'Juices')
        message = `<speak> So youre looking at a <mark name= 'gesture:one'/> Juice , with ${slots.JuiceType}. Is that right? </speak>`;

    if(slots.MainCourse === 'Lasagne')
        message = `<speak> So youre looking at a <mark name= 'gesture:one'/> Lasagne , with ${slots.LasagneType}. Is that right? </speak>`;
    if(slots.MainCourse === 'Grilled Fish')
        message = `<speak> So youre looking at a <mark name= 'gesture:one'/> Grilled Fish , with ${slots.GrilledFishType}. Is that right? </speak>`;
    if(slots.MainCourse === 'Beef Brasato')
        message = `<speak> So youre looking at a <mark name= 'gesture:one'/> Beef Brasato , with ${slots.BeefBrasatoType}. Is that right? </speak>`;
    if(slots.MainCourse === 'Risotto')
        message = `<speak> So youre looking at a <mark name= 'gesture:one'/> Risotto , with ${slots.RisottoType}. Is that right? </speak>`;



    return {
        sessionAttributes: intentRequest.sessionAttributes,
        dialogAction: {
            type: 'ConfirmIntent',
            intentName: intentRequest.currentIntent.name,
            message: {
                'contentType': 'SSML',
                'content': message
            },
            slots
        }
    };
}

function elicitSlot(intentRequest) {
    const slots = intentRequest.currentIntent.slots;

    let slotToElicit;
    if (!slots.MainOrderType) {
        slotToElicit = 'MainOrderType';
    }

    else if (slots.MainOrderType && !slots.Appetizers && !slots.Drinks && !slots.MainCourse) {
        switch(slots.MainOrderType) {
            case 'Drinks':
                slotToElicit = 'Drinks';
                break;
            case 'Appetizers':
                slotToElicit = 'Appetizers';
                break;
            default:
                slotToElicit = 'MainCourse';
        }
    }

    else {
        if(slots.Appetizers === 'Bruschetta')
            slotToElicit = 'BruschettaType';
        if(slots.Appetizers === 'Steak Tartare')
            slotToElicit = 'SteakTartareType';
        if(slots.Appetizers === 'Gazpacho')
            slotToElicit = 'GazpachoType';
        if(slots.Appetizers === 'Tzatziki')
            slotToElicit = 'TzatzikiType';

        if(slots.Drinks === 'Cappuccino')
            slotToElicit = 'CappuccinoType';
        if(slots.Drinks === 'Herbal Tea')
            slotToElicit = 'HerbalTeaType';
        if(slots.Drinks === 'Water')
            slotToElicit = 'WaterType';
        if(slots.Drinks === 'Juices')
            slotToElicit = 'JuiceType';
        
        if(slots.MainCourse === 'Lasagne')
            slotToElicit = 'LasagneType';
        if(slots.MainCourse === 'Grilled Fish')
            slotToElicit = 'GrilledFishType';
        if(slots.MainCourse === 'Beef Brasato')
            slotToElicit = 'BeefBrasatoType';
        if(slots.MainCourse === 'Risotto')
            slotToElicit = 'RisottoType';
    }

    return {
        sessionAttributes: intentRequest.sessionAttributes,
        dialogAction : {
            type: 'ElicitSlot',
            intentName: intentRequest.currentIntent.name,
            slotToElicit,
            slots
        }
    };
}

function delegate(intentRequest) {
    return {
        sessionAttributes: intentRequest.sessionAttributes,
        dialogAction : {
            type: 'Delegate',
            slots: {
                'MainOrderType': null,
                'Appetizers': null,
                'Drinks': null,
                'WaterType': null
            }
        }
    };
}

// --------------- Events -----------------------

function dispatch(intentRequest, callback) {
    console.log(`request received for userId=${intentRequest.userId}, intentName=${intentRequest.currentIntent.name}`);
    const intentName = intentRequest.currentIntent.name;
    const invocationSource = intentRequest.invocationSource;
    const confirmationStatus = intentRequest.currentIntent.confirmationStatus;
    const slots = intentRequest.currentIntent.slots;
    intentRequest.sessionAttributes.inputTranscript = intentRequest.inputTranscript;
    intentRequest.sessionAttributes.intentName = intentName;
    intentRequest.sessionAttributes.confirmationStatus = confirmationStatus;
    intentRequest.sessionAttributes.invocationSource = invocationSource;

    if (intentName === null) {
        callback(delegate(intentRequest));
    }
    //(slots.BruschettaType || slots.SteakTartareType || slots.GazpachoType || TzatzikiType || slots.CappuccinoType || slots.HerbalTeaType || slots.WaterType || slots.JuiceType || slots.LasagneType || slots.GrilledFishType || slots.BeefBrasatoType || slots.RisottoType )
    else if (slots.MainOrderType && (slots.Appetizers || slots.Drinks || slots.MainCourse) && (slots.WaterType || slots.CappuccinoType || slots.HerbalTeaType || slots.JuiceType || slots.BruschettaType || slots.SteakTartareType || slots.GazpachoType || slots.TzatzikiType || slots.LasagneType || slots.GrilledFishType || slots.BeefBrasatoType || slots.RisottoType)) {
        switch(confirmationStatus) {
            case "Confirmed":
                callback(fullfil(intentRequest));
                break;
            case "Denied":
                callback(fail(intentRequest));
                break;
            case "None":
            default:
                callback(confirm(intentRequest));
                break;
        }


    }

    else {
        callback(elicitSlot(intentRequest));
    }
}

// --------------- Main handler -----------------------

// Route the incoming request based on intent.
// The JSON body of the request is provided in the event slot.
exports.handler = (event, context, callback) => {
    try {
        dispatch(event,
            (response) => {
                callback(null, response);
            });
    } catch (err) {
        callback(err);
    }
};
