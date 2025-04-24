let map = L.map("mapa").setView([18.200509555814374, -96.58788100808545], 11);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | <a href="https://www.nangina.org.mx"</a> Gabinete Nanginá',
}).addTo(map);

// Mapas alternativos
var Esri_WorldImagery = L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  {
    attribution:
      "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
  }
);

var CartoDB_Positron = L.tileLayer(
  "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: "abcd",
    maxZoom: 20,
  }
);

var CartoDB_DarkMatter = L.tileLayer(
  "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: "abcd",
    maxZoom: 20,
  }
);

// Control de capas
var baseMaps = {
  "Open Street Map": map,
  "ESRI Terreno": Esri_WorldImagery,
  Gris: CartoDB_Positron,
  Oscuro: CartoDB_DarkMatter,
};

var layerControl = L.control.layers(baseMaps).addTo(map);

// Seleccionador de localidad
document
  .getElementById("Ir a la localidad")
  .addEventListener("change", function (e) {
    let coords = e.target.value.split(",");
    map.flyTo(coords, 14);
  });

// Municipios mazatecos
L.geoJSON(municipios).addTo(map);

function getColor(d) {
  return d > 35000
    ? "#800026"
    : d > 20000
    ? "#BD0026"
    : d > 10000
    ? "#E31A1C"
    : d > 5000
    ? "#FC4E2A"
    : d > 4000
    ? "#FD8D3C"
    : d > 3000
    ? "#FEB24C"
    : d > 1000
    ? "#FED976"
    : "#FFEDA0";
}

function style(feature) {
  return {
    fillColor: getColor(feature.properties.PHLI),
    weight: 2,
    opacity: 1,
    color: "white",
    dashArray: "3",
    fillOpacity: 0.5,
  };
}

L.geoJson(municipios, { style: style }).addTo(map);

function highlightFeature(e) {
  var layer = e.target;

  layer.setStyle({
    weight: 5,
    color: "#666",
    dashArray: "",
    fillOpacity: 0.9,
  });

  info.update(layer.feature.properties);

  layer.bringToFront();
}

function resetHighlight(e) {
  geojson.resetStyle(e.target);
  info.update();
}

function zoomToFeature(e) {
  map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
    click: zoomToFeature,
  });
}

geojson = L.geoJson(municipios, {
  style: style,
  onEachFeature: onEachFeature,
}).addTo(map);

//Visualización de los datos poblacionales

var info = L.control();

info.onAdd = function (map) {
  this._div = L.DomUtil.create("div", "info"); // Crea una div "info"
  this.update();
  return this._div;
};

// Método que delimita la información que se va actualizando con el cursor
info.update = function (props) {
  this._div.innerHTML =
    "<h4>Población hablante por municipio</h4>" +
    (props
      ? "<b>" +
        props.NOMGEO +
        "</b><br />" +
        "<strong>Variedad: </strong>" +
        props.VARIEDAD +
        "</b><br >" +
        "<strong>Autodenominación: </strong>" +
        props.AUTO_DEM +
        "</b><br />" +
        props.PHLI +
        " hablantes de 3 años o más<sup></sup>"
      : "selecciona un municipio");
};

info.addTo(map);

var legend = L.control({ position: "bottomright" });

legend.onAdd = function (map) {
  var div = L.DomUtil.create("div", "info legend"),
    grades = [1000, 3000, 4000, 5000, 10000, 20000, 35000],
    labels = [];

  // Geenera la escala de la leyenda y una simbología de color para cada intervalo
  for (var i = 0; i < grades.length; i++) {
    div.innerHTML +=
      '<i style="background:' +
      getColor(grades[i] + 1) +
      '"></i> ' +
      grades[i] +
      (grades[i + 1] ? "&ndash;" + grades[i + 1] + "<br>" : "+");
  }

  return div;
};

legend.addTo(map);

// Añadir marcadores con audio
var Ocopetatillo1 = L.marker([18.185907433392277, -96.91168320712673])
  .bindPopup('<audio controls><source src="audios/SON1.mp3"></source></audio>')
  .addTo(map);

var Ixcatlan1 = L.marker([18.147075279237043, -96.50992240298193])
  .bindPopup('<audio controls><source src="audios/SON2.mp3"></source></audio>')
  .addTo(map);

var Huautepec1 = L.marker([18.102567096783865, -96.79713451176092])
  .bindPopup('<audio controls><source src="audios/SON3.mp3"></source></audio>')
  .addTo(map);

var Ayautla1 = L.marker([18.03186500712926, -96.67182692298879])
  .bindPopup('<audio controls><source src="audios/SON4.mp3"></source></audio>')
  .addTo(map);
