var env = process.env;

Object.keys(env).forEach(function (key) {
    // if (key === "MONEY1") {
        console.log('export ' + key + '="' + env[key] + '"');
    // }
});
