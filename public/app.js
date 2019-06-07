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
data:
{
  rango:'1'
}
})
.done(function(data) {
if (!data.error) {
console.log(data);
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
  })
}

setSearch()
