const glob = require('glob');
require('dotenv').config();
const fs = require('fs');
const env = process.env;


//    1- Locate build js files
const locateBuildJsFiles = () => {
    glob('./dist' + '/**/*.js', {}, (err, files) => {
        replaceVars(files)
    })
}

//    2- Locate words between %:API_URL:%
const getBuildEnvVars = (sentence, first, last) => {
    let keys = [];

    const allVariables = sentence.split(first);
    allVariables.forEach((part) => {
        if (part.indexOf(last) > -1) {
            const key = (part.split(last))[0];
            keys = keys.concat(key);
        }
    });
    return keys;
}

const replaceVars = async (files) => {
    /* Read File */
    files.map((file) => {
        //    3- Get the key from the located value "API_URL"
        fs.readFile(file, (err, data) => {
            /* If an error exists, show it, otherwise show the file */
            if (err) {
                Function("error", "throw error")(err)
            } else {
                const allKeys = getBuildEnvVars(data.toString(), '%:', ':%');
                if (allKeys.length>0){
                    console.log("Founded env keys: "+allKeys)
                    replaceEnvVarsValues(file,data.toString(),allKeys)
                }

            }
        })
    })
}


const replaceEnvVarsValues = (file,code,valuesToChange)=>{
    let newCode = code;
    valuesToChange.map(value => {
       newCode = newCode.replace(`%:${value}:%`,env[`VUE_APP_${value}_REPLACE`])
    });
    fs.writeFileSync(file, newCode);
}

locateBuildJsFiles();


