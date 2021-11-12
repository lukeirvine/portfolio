!/bin/bash

firebase deploy --only functions
# another acceptable form: 
# firebase deploy --only functions:addMessage,functions:makeUppercase