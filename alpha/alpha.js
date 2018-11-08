class Alpha{
constructor(listMessage){
    const jsonfile = require('jsonfile');
        jsonfile.writeFile('alpha/alpha.json',listMessage,function(err){
            if (err) console.error(err);
        });
}
}
module.exports=Alpha;