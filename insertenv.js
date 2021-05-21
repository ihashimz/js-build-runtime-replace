const env = process.env;
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is the env variable key ? ", function (name) {
    if (isKeyExist(name)) {
        rl.question(`Update key ${name} value : `, function (value) {
            console.log(`KEY : ${name}, VALUE : ${value}`);
            insertEnvVariable(name, value)
            rl.close();
        })
    } else {
        rl.question(`Enter key ${name} value : `, function (value) {
            console.log(`KEY : ${name}, VALUE : ${value}`);
            insertEnvVariable(name, value)
            rl.close();
        })
    }

});

rl.on("close", function () {
    console.log("\nYour key has been added !!!");
    process.exit(0);
});

const isKeyExist = (enteredKey) => {
    Object.keys(env).forEach(function (key) {
        if (enteredKey === key) {
            console.log('Your Key is Existed ' + key + '="' + env[key] + '"');
            return true
        }
    });

    return false
}

const insertEnvVariable = (key, value) => {
    process.env[`${key}`] = value;
    console.log("Insert Done ...")
}


