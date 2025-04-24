let mapa_huevo = L.map("mapa-huevo").setView(
  [18.200509555814374, -96.68788100808545],
  11
);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | <a href="https://www.nangina.org.mx"</a> Gabinete Nanginá',
}).addTo(mapa_huevo);

// Caja de texto
var info = L.control();
info.onAdd = function (map) {
  this._div = L.DomUtil.create("div", "info");
  this.update();
  return this._div;
};

info.update = function (props) {
  this._div.innerHTML =
    "<h4> <strong>Huevo</strong> <h4>" + "tʂu<sup>1</sup>hu<sup>3</sup>";
};
info.addTo(mapa_huevo);

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

// Seleccionador de localidad
document
  .getElementById("Ir a la localidad")
  .addEventListener("change", function (e) {
    let coords = e.target.value.split(",");
    mapa_huevo.flyTo(coords, 14);
  });

// Municipios mazatecos
L.geoJSON(municipios).addTo(mapa_huevo);

//icono de huevo-azul
var blueIcon = L.icon({
  iconUrl: "icons/huevo/huevo-azul.png",
  iconSize: [30, 30],
});

// icono de huevo-rojo
var redIcon = L.icon({
  iconUrl: "icons/huevo/huevo-rojo.png",
  iconSize: [30, 30],
});

// icono de huevo-amarillo
var yellowIcon = L.icon({
  iconUrl: "icons/huevo/huevo-amarillo.png",
  iconSize: [30, 30],
});

// localidades
var cuau = L.marker([18.207051606631374, -96.91168268606408], {
  icon: blueIcon,
})
  .addTo(mapa_huevo)
  .bindPopup("<strong>chji</strong><p>[tʃ<sup>h</sup>i]</p>");
var elox = L.marker([18.1773054185917, -96.8767721148899], { icon: blueIcon })
  .addTo(mapa_huevo)
  .bindPopup("<strong>chjo</strong><p>[tʃ<sup>h</sup>o]</p>");
var maz = L.marker([18.033177058963886, -96.91420527129755], { icon: blueIcon })
  .addTo(mapa_huevo)
  .bindPopup("<strong>chjo</strong><p>[tʃ<sup>h</sup>o]</p>");
var huau = L.marker([18.130655815498585, -96.84436140936339], { icon: redIcon })
  .addTo(mapa_huevo)
  .bindPopup("<strong>chjao</strong><p>[tʃ<sup>h</sup>ao]</p>");
var inde = L.marker([18.2398340950581, -96.6453256830706], { icon: blueIcon })
  .addTo(mapa_huevo)
  .bindPopup("<strong>chjo</strong><p>[tʃ<sup>h</sup>o]</p>");
var ayau = L.marker([18.0316244671714, -96.6691758468062], { icon: blueIcon })
  .addTo(mapa_huevo)
  .bindPopup(
    "<strong>chjo</strong><p>[tʃ<sup>h</sup>o]</p>" +
      '<audio controls><source src="audios/huevo/huevo.ERN.ayautla.wav"></source></audio>'
  );
var chiq = L.marker([17.99683817271383, -96.74542432655439], { icon: blueIcon })
  .addTo(mapa_huevo)
  .bindPopup("<strong>chjo</strong><p>[tʃ<sup>h</sup>o]</p>");
var jal = L.marker([18.07063037252, -96.5335047459864], { icon: blueIcon })
  .addTo(mapa_huevo)
  .bindPopup(
    "<strong>chjo̱o</strong><p>[tʃ<sup>h</sup>o12]</p>" +
      '<audio controls><source src="audios/huevo/huevo RSS Jalapa.wav"></source></audio>'
  );
var ixc = L.marker([18.1447915, -96.5100424], { icon: blueIcon })
  .addTo(mapa_huevo)
  .bindPopup("<strong>chjo̱(ó)</strong><p>[tʃ<sup>h</sup>o1(3)]</p>");
var soya = L.marker([18.239934772662025, -96.41377809451589], { icon: redIcon })
  .addTo(mapa_huevo)
  .bindPopup(
    "<strong>chjaó</strong><p>[tʃ<sup>h</sup>ao324]</p>" +
      '<audio controls><source src="audios/huevo/OT11-20-18-01-H-BSG-K-75_huevo.wav"></source></audio>'
  );

// agrupar localidades
var o = L.layerGroup([cuau, elox, maz, inde, ayau, chiq, jal, ixc]);
var au = L.layerGroup([huau, soya]);

// Control de capas
var baseMaps = {
  "Open Street Map": mapa_huevo,
  "ESRI Terreno": Esri_WorldImagery,
  Gris: CartoDB_Positron,
  Oscuro: CartoDB_DarkMatter,
};

var overlayMaps = {
  "<strong>*au</strong> > o": o,
  "<strong>*au</strong> > au": au,
};

var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(mapa_huevo);
