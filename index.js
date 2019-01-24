#!/usr/bin/env node

var validator = require("email-validator");
var axios = require("axios");
var figlet = require("figlet");
const ora = require("ora");
const [,, ...args] = process.argv;
const email = validator.validate(`${args}`);

var chalk = require("chalk");

// text figlet test en ...
/*figlet('Hack-Server-Node.js',function(err, data){
    if(err){
        console.log('sorry server is dead...');
        console.dir(err);
        return;
    }
    console.log(data)
});
*/
// email validator verifie


/* ecrire en sortie et attender une réponse
process.stdout.write('Je suis un server Node JS\n donne moi une Adresse Mail :');
process.stdin.on('data', function (data){
    process.stdout.write(`${data.toString()}`);
});
*/



/*if(email==true){
    //requete axios
    console.log("ok");
    axios({
        method:'get',
        url:'https://haveibeenpwned.com/api/v2/breachedaccount/olivier.huttmacher@gmail.com',
      
        headers : {'User-Agent': 'nodejsexercicelc'}
      })
        .then(res => {
     console.log("");
      res.data.foreach(function(breach){
          console.log(breach.Name);
          console.log(breach.Domain);
          console.log(breach.Description);
          //console.log(breach.);
      })
      });
}
else{
    console.log("erreur");

}

*/

if (email == true){
    figlet('Hack-Server-Node-Js', function(err, data) {
    if (err) {
    console.log('Server is Dead...');
    console.dir(err);
    return;
    }
    console.log(chalk.blue(data));
    console.log('\n');
    });
    
    //spinner
    let spinner = ora(`Searching the breaches with ${args}\n`).clear()
    
    setTimeout(() => {
        spinner.start()
        spinner.color = 'yellow'
        spinner.text = `Searching the breaches with ${args}\n`
    })
    
    axios ({
        method: 'GET',
        url: `https://haveibeenpwned.com/api/v2/breachedaccount/${args}`,
        data: [],
        headers: {'User-Agent': 'grabbed'},
    })
    .then(res => {
        console.log(chalk.red(`We found some breaches with your email! ...${args}`))
        res.data.forEach(function(breach){
            console.log(chalk.green('Name : ') + breach.Name)
            console.log(chalk.green('Domain : ') + breach.Domain)
            console.log(chalk.green('Description : ') + '\n' + breach.Description  + '\n')
            //console.log(chalk.blue('-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --')+ '\n')
        })
    
    setTimeout(() => {
        spinner.stop()
        spinner.clear()
    })
    
    }).catch(err => {
        const log = chalk.green('There is no breaches with your email !')
        console.log(log)
    })
    }
  