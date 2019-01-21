#!/usr/bin/env node
console.log("loli");
var validator = require("email-validator");
var axios = require("axios");

var email = validator.validate("olivier.huttmacher@gmail.com");


if(email==true){
    //requete axios
    console.log("ok");
    axios({
        method:'get',
        url:'https://haveibeenpwned.com/api/v2/breachedaccount/olivier.huttmacher@gmail.com',
      
        headers : {'User-Agent': 'nodejsexercicelc'}
      })
        .then(function(response) {
     console.log(response.data);
      });
}
else{
    console.log("erreur");
}

