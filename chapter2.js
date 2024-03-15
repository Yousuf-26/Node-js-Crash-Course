/*
    Topic: read and write files
    module : File System - callback API
    Create read write files and make directories

    most node modules are async in nature

    common definitions to know
    process - instance of program in execution on a computer
*/

//const fs = require('fs');

//better use the path because that would make it os-indepedent, as the slashes for files are used differently based
//on different OS
//const path = require('path')

//C:\JSCert\Node-js-Crash-Course\sample2.txt
//console.log(path.join(__dirname,'sample2.txt'));

//--------------------------------------------------reading files
/*
fs.readFile(path.join(__dirname,'sample2.txt'), (err,data)=>{

    if(err) throw err;
    //Basically we get data as a stream of data
    //so we would want to use toString() method to make it human readable
    console.log(data.toString())

})
*/

//-----------------------------------------fs.writefile helps us to write files-----------------
/*
fs.writeFile(path.join(__dirname,'reply.txt'),'Nice to meet you', (err)=>{

    if (err) throw err;
    console.log('write compelete')
})
let mytext = "Carried nothing on am warrant towards. Polite in of in oh needed itself silent course. Assistance travelling so especially do prosperous appearance mr no celebrated."+
        "At every tiled on ye defer do. No attention suspected oh difficult. Fond his say old meet cold find come whom. The sir park sake bred. Wonder matter now can estate esteem assure fat roused. Am performed on existence as discourse is. Pleasure friendly at marriage blessing or."+
        "Its had resolving otherwise she contented therefore. Afford relied warmth out sir hearts sister use garden. Men day warmth formed admire former simple. Humanity declared vicinity continue supplied no an. He hastened am no property exercise of. Dissimilar comparison no terminated devonshire no literature on. Say most yet head room such just easy.";

//fs.appendFile helps us to add text to the files
        fs.appendFile(path.join(__dirname,'reply.txt'),mytext, (err)=>{

     if(err) throw err;

     fs.rename(path.join(__dirname,'reply.txt'),path.join(__dirname,'renamed-reply.txt'),(err)=>{

        if(err) throw err;
        console.log('rename completed')

     })

     console.log('Test is appened')
})


//exit on uncaught errors
process.on('uncaughtException', err =>{
    console.error('There was uncaught error: '+err)
    //EXIT 
    process.exit(1);
})
*/


// ---------------------------------------------------------Handling files with promises

/*
const fsPromises = require('fs').promises;
const pathy = require('path');

// with promises we could simply get the order of execute corrected, and await keyword will wait until we have a
// response with from the promise
const filesOps = async () =>{

    try{
        const data = await fsPromises.readFile(pathy.join(__dirname,'notes.txt'),'utf8');
        console.log(data);
        await fsPromises.writeFile(pathy.join(__dirname,'sample.txt'),data)
        await fsPromises.appendFile(pathy.join(__dirname,'sample.txt'),'\n I am appending using fs promise')
        await fsPromises.rename(pathy.join(__dirname,'sample.txt'),pathy.join(__dirname,'sample-prmoise.txt'))

    }catch (err){
        console.error(err)
    }
}

filesOps()
*/

//--------------------------------------------------STREAM 
//---> for larger files , helps to gather files with some chunks rather than completely get the whole file
/*
const fss = require('fs')
const pathyy= require('path')
const rs = fss.createReadStream(pathyy.join(__dirname,'server.js'), {encoding:'utf8'});
const ws = fss.createWriteStream('./newStream.txt');


rs.on('data',(dataChunk)=>{

    ws.write(dataChunk);
})

// does the same thing as above put in a much efficient way
rs.pipe(ws)
*/

//----------------------------------------FOLDERS AND DIRECTORY HANDLING
const fs = require('fs');

//checks if file exists
if(!fs.existsSync('./New-FS')){

    fs.mkdir('./New-FS', (err)=>{

        //check if the file exist
        
        if(err) throw err;
        console.log('Directory is created using fs module');

})     
}else{
    console.log('No directory is created since it exists')
}

if(fs.existsSync('./New-FS')){

    fs.rmdir('./New-FS', (err)=>{

        //check if the file exist
        
        if(err) throw err;
        console.log('Directory is removed using fs module');

})     
}else{
    console.log('No directory is created since it exists')
}



