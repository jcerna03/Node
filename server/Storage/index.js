var fs = require('fs'),
  path = require('path')
/*
module.exports = {

  saveData: function(datatype, newData, data) {
    var dataPath = _dirname + path.join('/data/data.json')
    return new promise(function(resolver, reject) {
      fs.writeFile(dataPath, JSON.stringify(data), function(err) {
        resolve('OK')
      })

    })
  },
  getData: function(dataType) {
    var dataPath = __dirname + path.join('/data/data.json')
    return new promise(function(resolve, reject) {
      fs.readFile(dataPath, 'utf8', function(err, readData) {
        if (err) reject(err)
        resolve(JSON.parse(readData))
      })
    })

  }
}


*/


module.exports = {
  getData: function() {
    let rutaJSON = __dirname + path.join('/data.json');
    return new Promise(function(resolve, reject) {
      fs.readFile(rutaJSON, 'utf8', function(err, readData) {
        if (err) reject(err)
        var dataJson = JSON.parse(readData)

        resolve(dataJson);
      });
    });
  }
};
