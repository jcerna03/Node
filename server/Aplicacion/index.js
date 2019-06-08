var express = require('express')
var Storage = require('../Storage')
var Router = express.Router()
var where = require("lodash.where");
/*
Router.get('/Filtro', function(req, res) {
  // get Filtro
  Storage.getData('aplication')
    .then(function(users) {
      res.json(users)
    }).catch(function(error) {
      res.sendStatus(500).json(error)
    })

})

*/

Router.get('/busqueda', function(req, res) {

  var urlParam = function(name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(req.url);
    if (results == null) {
      return null;
    }
    return decodeURI(results[1]) || 0;
  }
console.log(req.url)
  Storage.getData()
    .then((data) => {
      res.json({
        "datos": data.filter(data => (data.Ciudad == urlParam('ciudad') || urlParam('ciudad') == '') && (data.Tipo == urlParam('tipo') || urlParam('tipo') == '') && ((parseFloat(data.Precio.split('$')[1].replace(',','')) >= urlParam('rangomenor') && parseFloat(data.Precio.split('$')[1].replace(',','')) <= urlParam('rangomayor')) || (urlParam('rangomenor')=='' || urlParam('rangomayor') =='')))
      });
    })
    .catch((err) => {
      res.json({
        "datos": err
      });
    });

})



module.exports = Router
/*
(function(document, window, undefined, $) {
  (function() {
    return Filtro = {

      apiUrl: '/aplication',

      Init: function() {
        var self = this
        this.fetchUserInfo(function(user) {
          self.renderUser(user)
        })
      },
      fetchUserInfo: function(callback) {
        var self = this
        var $buscar = $('#buscar')
        $buscar.on('click', function() {
          var ciudad = $('#ciudad').selectedValue
          var tipo = $('#tipo').selectedValue
          var RangoMenor = $('#rangoPrecio').val().split(';')[0]
          var Rangomayor = $('#rangoPrecio').val().split(';')[0]

          alert(ciudad + ' ' + tipo + ' ' + RangoMenor + ' ' + Rangomayor)
        })

      }

    }

  })
})
*/
