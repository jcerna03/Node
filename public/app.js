//Inicializador del elemento Slider
$("#rangoPrecio").ionRangeSlider({
  type: "double",
  grid: false,
  min: 0,
  max: 100000,
  from: 1000,
  to: 20000,
  prefix: "$"
})


$('#buscar').click(function() {

  var urls = "http://localhost:8082/busqueda";




  $.ajax({
      url: urls,
      type: 'get',
      dataType: 'json',
      data: {
        tipo: $('#tipo').val(),
        ciudad: $('#ciudad').val(),
        rangomenor: $('#rangoPrecio').val().split(';')[0],
        rangomayor: $('#rangoPrecio').val().split(';')[1]
      }

    })


    .done(function(data) {
      if (!data.error) {
        $('#lista').empty()

        var html = '<div class="card horizontal">    <div class="card-image">      <img src="images/home.jpg">    </div>    <div class="card-stacked">      <div class="card-content">        <div>          <b>Direccion: :direccion: </b>          <p></p>        </div>        <div>          <b>Ciudad: :ciudad:</b>          <p></p>        </div>        <div>          <b>Telefono: :telefono: </b>          <p></p>        </div>        <div>          <b>Código postal: :cp: </b>          <p></p>        </div>        <div>          <b>Precio: :precio: </b>          <p></p>        </div>        <div>          <b>Tipo: :tipo: </b>          <p></p>        </div>      </div>      <div class="card-action right-align">        <a href="#">Ver más</a>      </div>    </div>  </div>'


        $.each(data.datos, function(key, value) {
          var html_rep = html.replace(':direccion:', value.Direccion)
            .replace(':ciudad:', value.Ciudad)
            .replace(':telefono:', value.Telefono)
            .replace(':cp:', value.Codigo_Postal)
            .replace(':precio:', value.Precio)
            .replace(':tipo:', value.Tipo)
          $('#lista').append(html_rep)
        });

      }
    });
});



function setSearch() {
  let busqueda = $('#checkPersonalizada')
  busqueda.on('change', (e) => {
    if (this.customSearch == false) {
      this.customSearch = true
    } else {
      this.customSearch = false
    }
    $('#personalizada').toggleClass('invisible')
    $('#tipo').val('')
    $('#ciudad').val('')
    $('#rangoPrecio').val('1000;20000')

  })
}

setSearch()
