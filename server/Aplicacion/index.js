var express = require('express')
var Storage = require('../Storage')
var Router = express.Router()

Router.get('/Filtro', function(req, res) {
  // get Filtro
  Storage.getData('aplication')
    .then(function(users) {
      res.json(users)
    }).catch(function(error) {
      res.sendStatus(500).json(error)
    })

})


module.exports = Router

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
