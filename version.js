json = require('json-update');

const v = process.env.npm_package_version;

json.update('extension/manifest.json', {
        version: v
    })
    .then(function(dat) {
        console.log(dat.version)
    });
