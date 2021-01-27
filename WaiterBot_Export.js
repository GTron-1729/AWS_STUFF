{
  "metadata": {
    "schemaVersion": "1.0",
    "importType": "LEX",
    "importFormat": "JSON"
  },
  "resource": {
    "name": "WaiterBot",
    "version": "20",
    "intents": [
      {
        "name": "MainIntent",
        "version": "22",
        "fulfillmentActivity": {
          "codeHook": {
            "uri": "arn:aws:lambda:eu-west-1:591050207407:function:WaiterProcessor",
            "messageVersion": "1.0"
          },
          "type": "CodeHook"
        },
        "sampleUtterances": [
          "Order something"
        ],
        "slots": [
          {
            "sampleUtterances": [],
            "slotType": "Appetizers",
            "slotTypeVersion": "1",
            "obfuscationSetting": "NONE",
            "slotConstraint": "Optional",
            "valueElicitationPrompt": {
              "messages": [
                {
                  "contentType": "PlainText",
                  "content": "Here are our Appetizers!"
                }
              ],
              "maxAttempts": 2
            },
            "priority": 3,
            "name": "Appetizers"
          },
          {
            "sampleUtterances": [],
            "slotType": "BeefBrasatoType",
            "slotTypeVersion": "1",
            "obfuscationSetting": "NONE",
            "slotConstraint": "Optional",
            "valueElicitationPrompt": {
              "messages": [
                {
                  "contentType": "PlainText",
                  "content": "Excellent  choice, What addon would you prefer?"
                }
              ],
              "maxAttempts": 2
            },
            "priority": 18,
            "name": "BeefBrasatoType"
          },
          {
            "sampleUtterances": [],
            "slotType": "BruschettaType",
            "slotTypeVersion": "1",
            "obfuscationSetting": "NONE",
            "slotConstraint": "Optional",
            "valueElicitationPrompt": {
              "messages": [
                {
                  "contentType": "PlainText",
                  "content": "Awesome, Should we serve it ,with onions or without onions?"
                }
              ],
              "maxAttempts": 2
            },
            "priority": 15,
            "name": "BruschettaType"
          },
          {
            "sampleUtterances": [],
            "slotType": "CappType",
            "slotTypeVersion": "1",
            "obfuscationSetting": "NONE",
            "slotConstraint": "Optional",
            "valueElicitationPrompt": {
              "messages": [
                {
                  "contentType": "PlainText",
                  "content": "Superb choice, You want some almond milk, or extra coffee shot with that?"
                }
              ],
              "maxAttempts": 2
            },
            "priority": 25,
            "name": "CappType"
          },
          {
            "sampleUtterances": [],
            "slotType": "Drinks",
            "slotTypeVersion": "1",
            "obfuscationSetting": "NONE",
            "slotConstraint": "Optional",
            "valueElicitationPrompt": {
              "messages": [
                {
                  "contentType": "PlainText",
                  "content": "Here are Our Drinks!"
                }
              ],
              "maxAttempts": 2
            },
            "priority": 4,
            "name": "Drinks"
          },
          {
            "sampleUtterances": [],
            "slotType": "GazpoType",
            "slotTypeVersion": "1",
            "obfuscationSetting": "NONE",
            "slotConstraint": "Optional",
            "valueElicitationPrompt": {
              "messages": [
                {
                  "contentType": "PlainText",
                  "content": "Cool, should we serve it, with extra garlic bread or grapes garnish?"
                }
              ],
              "maxAttempts": 2
            },
            "priority": 24,
            "name": "GazpoType"
          },
          {
            "sampleUtterances": [],
            "slotType": "GrilledFType",
            "slotTypeVersion": "1",
            "obfuscationSetting": "NONE",
            "slotConstraint": "Optional",
            "valueElicitationPrompt": {
              "messages": [
                {
                  "contentType": "PlainText",
                  "content": "Awesome, would you prefer it with artichokes or tomatoes?"
                }
              ],
              "maxAttempts": 2
            },
            "priority": 27,
            "name": "GrilledFType"
          },
          {
            "sampleUtterances": [],
            "slotType": "HerbalTeaType",
            "slotTypeVersion": "1",
            "obfuscationSetting": "NONE",
            "slotConstraint": "Optional",
            "valueElicitationPrompt": {
              "messages": [
                {
                  "contentType": "PlainText",
                  "content": "Awesome, how about little honey or lemon with that?"
                }
              ],
              "maxAttempts": 2
            },
            "priority": 10,
            "name": "HerbalTeaType"
          },
          {
            "sampleUtterances": [],
            "slotType": "JuiseType",
            "slotTypeVersion": "1",
            "obfuscationSetting": "NONE",
            "slotConstraint": "Optional",
            "valueElicitationPrompt": {
              "messages": [
                {
                  "contentType": "PlainText",
                  "content": "Sweet, so would you like an Orange juice, or pomegranate juice?"
                }
              ],
              "maxAttempts": 2
            },
            "priority": 12,
            "name": "JuiseType"
          },
          {
            "sampleUtterances": [],
            "slotType": "LasagType",
            "slotTypeVersion": "1",
            "obfuscationSetting": "NONE",
            "slotConstraint": "Optional",
            "valueElicitationPrompt": {
              "messages": [
                {
                  "contentType": "PlainText",
                  "content": "Awesome, Would you prefer a vegetarian lasagne or lasagne with meat?"
                }
              ],
              "maxAttempts": 2
            },
            "priority": 28,
            "name": "LasagType"
          },
          {
            "sampleUtterances": [],
            "slotType": "MainCourse",
            "slotTypeVersion": "1",
            "obfuscationSetting": "NONE",
            "slotConstraint": "Optional",
            "valueElicitationPrompt": {
              "messages": [
                {
                  "contentType": "PlainText",
                  "content": "Please, choose a Main Course"
                }
              ],
              "maxAttempts": 2
            },
            "priority": 8,
            "name": "MainCourse"
          },
          {
            "sampleUtterances": [],
            "slotType": "MainOrderBro",
            "slotTypeVersion": "1",
            "obfuscationSetting": "NONE",
            "slotConstraint": "Required",
            "valueElicitationPrompt": {
              "messages": [
                {
                  "contentType": "PlainText",
                  "content": "Hello there, what would you like to order today?"
                }
              ],
              "maxAttempts": 2
            },
            "priority": 2,
            "name": "MainOrderBro"
          },
          {
            "sampleUtterances": [],
            "slotType": "RisottoType",
            "slotTypeVersion": "1",
            "obfuscationSetting": "NONE",
            "slotConstraint": "Optional",
            "valueElicitationPrompt": {
              "messages": [
                {
                  "contentType": "PlainText",
                  "content": "I love  your choice, Will you choose Pungent Capers or Espresso Bean?"
                }
              ],
              "maxAttempts": 2
            },
            "priority": 19,
            "name": "RisottoType"
          },
          {
            "sampleUtterances": [],
            "slotType": "SteakType",
            "slotTypeVersion": "1",
            "obfuscationSetting": "NONE",
            "slotConstraint": "Optional",
            "valueElicitationPrompt": {
              "messages": [
                {
                  "contentType": "PlainText",
                  "content": "what a choice, so would you like it with toasted bread or french fries?"
                }
              ],
              "maxAttempts": 2
            },
            "priority": 23,
            "name": "SteakType"
          },
          {
            "sampleUtterances": [],
            "slotType": "TzatzikiType",
            "slotTypeVersion": "1",
            "obfuscationSetting": "NONE",
            "slotConstraint": "Optional",
            "valueElicitationPrompt": {
              "messages": [
                {
                  "contentType": "PlainText",
                  "content": "Nice, Should we serve it with veggies or Pita Bread?"
                }
              ],
              "maxAttempts": 2
            },
            "priority": 16,
            "name": "TzatzikiType"
          },
          {
            "sampleUtterances": [],
            "slotType": "WatType",
            "slotTypeVersion": "1",
            "obfuscationSetting": "NONE",
            "slotConstraint": "Optional",
            "valueElicitationPrompt": {
              "messages": [
                {
                  "contentType": "PlainText",
                  "content": "Epic, Do you prefer still water,or sparkling water?"
                }
              ],
              "maxAttempts": 2
            },
            "priority": 26,
            "name": "WatType"
          }
        ]
      }
    ],
    "slotTypes": [
      {
        "name": "MainCourse",
        "version": "1",
        "enumerationValues": [
          {
            "value": "Beef Brasato"
          },
          {
            "value": "Risotto"
          },
          {
            "value": "Lasagne"
          },
          {
            "value": "Grilled Fish"
          }
        ],
        "valueSelectionStrategy": "TOP_RESOLUTION"
      },
      {
        "name": "TzatzikiType",
        "version": "1",
        "enumerationValues": [
          {
            "value": "with Veggies"
          },
          {
            "value": "with Pita Bread"
          }
        ],
        "valueSelectionStrategy": "TOP_RESOLUTION"
      },
      {
        "name": "MainOrderBro",
        "version": "1",
        "enumerationValues": [
          {
            "value": "Appetizers"
          },
          {
            "value": "Drinks"
          },
          {
            "value": "Main Course"
          }
        ],
        "valueSelectionStrategy": "TOP_RESOLUTION"
      },
      {
        "name": "CappType",
        "version": "1",
        "enumerationValues": [
          {
            "value": "with Almond Milk"
          },
          {
            "value": "with Extra Coffee Shot"
          }
        ],
        "valueSelectionStrategy": "ORIGINAL_VALUE"
      },
      {
        "name": "Appetizers",
        "version": "1",
        "enumerationValues": [
          {
            "value": "Steak Tartare"
          },
          {
            "value": "Bruschetta"
          },
          {
            "value": "Tzatziki"
          },
          {
            "value": "Gazpacho"
          }
        ],
        "valueSelectionStrategy": "TOP_RESOLUTION"
      },
      {
        "name": "HerbalTeaType",
        "version": "1",
        "enumerationValues": [
          {
            "value": "with Lemon"
          },
          {
            "value": "with Honey"
          }
        ],
        "valueSelectionStrategy": "TOP_RESOLUTION"
      },
      {
        "name": "WatType",
        "version": "1",
        "enumerationValues": [
          {
            "value": "Sparkling Water"
          },
          {
            "value": "Still Water"
          }
        ],
        "valueSelectionStrategy": "ORIGINAL_VALUE"
      },
      {
        "name": "BruschettaType",
        "version": "1",
        "enumerationValues": [
          {
            "value": "with Onions"
          },
          {
            "value": "without Onions"
          }
        ],
        "valueSelectionStrategy": "TOP_RESOLUTION"
      },
      {
        "name": "BeefBrasatoType",
        "version": "1",
        "enumerationValues": [
          {
            "value": "with Mint"
          },
          {
            "value": "with Pappardelle"
          }
        ],
        "valueSelectionStrategy": "TOP_RESOLUTION"
      },
      {
        "name": "GazpoType",
        "version": "1",
        "enumerationValues": [
          {
            "value": "with Garlic Bread"
          },
          {
            "value": "with Grapes Garnish"
          }
        ],
        "valueSelectionStrategy": "ORIGINAL_VALUE"
      },
      {
        "name": "GrilledFType",
        "version": "1",
        "enumerationValues": [
          {
            "value": "with Artichokes"
          },
          {
            "value": "with Tomatoes"
          }
        ],
        "valueSelectionStrategy": "ORIGINAL_VALUE"
      },
      {
        "name": "LasagType",
        "version": "1",
        "enumerationValues": [
          {
            "value": "Vegetarian"
          },
          {
            "value": "with Meat"
          }
        ],
        "valueSelectionStrategy": "ORIGINAL_VALUE"
      },
      {
        "name": "SteakType",
        "version": "1",
        "enumerationValues": [
          {
            "value": "with Toasted Bread"
          },
          {
            "value": "with French Fries"
          }
        ],
        "valueSelectionStrategy": "ORIGINAL_VALUE"
      },
      {
        "name": "Drinks",
        "version": "1",
        "enumerationValues": [
          {
            "value": "Herbal Tea"
          },
          {
            "value": "Water"
          },
          {
            "value": "Juices"
          },
          {
            "value": "Cappuccino"
          }
        ],
        "valueSelectionStrategy": "TOP_RESOLUTION"
      },
      {
        "name": "RisottoType",
        "version": "1",
        "enumerationValues": [
          {
            "value": "with Espresso Beans"
          },
          {
            "value": "with Pungent Capers"
          }
        ],
        "valueSelectionStrategy": "TOP_RESOLUTION"
      },
      {
        "name": "JuiseType",
        "version": "1",
        "enumerationValues": [
          {
            "value": "Orange Juice"
          },
          {
            "value": "Pomegranate Juice"
          }
        ],
        "valueSelectionStrategy": "TOP_RESOLUTION"
      }
    ],
    "voiceId": "Matthew",
    "childDirected": false,
    "locale": "en-US",
    "idleSessionTTLInSeconds": 300,
    "clarificationPrompt": {
      "messages": [
        {
          "contentType": "PlainText",
          "content": "Sorry, can you please repeat that?"
        }
      ],
      "maxAttempts": 5
    },
    "abortStatement": {
      "messages": [
        {
          "contentType": "PlainText",
          "content": "Sorry, I could not understand. Goodbye."
        }
      ]
    },
    "detectSentiment": true,
    "enableModelImprovements": false
  }
}