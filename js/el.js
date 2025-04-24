let mapa_el = L.map("mapa-el").setView(
  [18.200509555814374, -96.68788100808545],
  11
);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | <a href="https://www.nangina.org.mx"</a> Gabinete Nanginá',
}).addTo(mapa_el);

// Caja de texto
var info = L.control();
info.onAdd = function (map) {
  this._div = L.DomUtil.create("div", "info");
  this.update();
  return this._div;
};

info.update = function (props) {
  this._div.innerHTML = "<h4> <strong>Él, ella </strong> <h4>" + "*hæ, kʷi";
};
info.addTo(mapa_el);

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
    mapa_el.flyTo(coords, 14);
  });

// Municipios mazatecos
L.geoJSON(municipios).addTo(mapa_el);

//icono de él, ella-azul
var blueIcon = L.icon({
  iconUrl: "icons/el/el-azul.png",
  iconSize: [30, 30],
});

// icono de él, ella-rojo
var redIcon = L.icon({
  iconUrl: "icons/el/el-rojo.png",
  iconSize: [30, 30],
});

// icono de él, ella-amarillo
var yellowIcon = L.icon({
  iconUrl: "icons/el/el-amarillo.png",
  iconSize: [30, 30],
});

// localidades
var cuau = L.marker([18.207051606631374, -96.91168268606408], { icon: redIcon })
  .addTo(mapa_el)
  .bindPopup(
    "<strong>jé</strong><p>[hɛ<sup>3</sup>]</p>" +
      '<audio controls><source src="audios/el/OT11-20-14-01-M1-HCG-0130_él.wav"></source></audio>'
  );
var maz = L.marker([18.033177058963886, -96.91420527129755], { icon: blueIcon })
  .addTo(mapa_el)
  .bindPopup(
    "<strong>kui</strong><p>[k<sup>w</sup>i<sup>2</sup>]</p>" +
      '<audio controls><source src="audios/el/OT11-20-06-01-M1-IFG-K-225_él.wav"></source></audio>'
  );
var huau = L.marker([18.130655815498585, -96.84436140936339], {
  icon: blueIcon,
})
  .addTo(mapa_el)
  .bindPopup(
    "<strong>kui</strong><p>[k<sup>w</sup>i<sup>2</sup>]</p>" +
      '<audio controls><source src="audios/el/OT11-20-05-01-H1-MMC-K-225_él pronombre (ese, demostrativo) .wav"></source></audio>'
  );
var inde = L.marker([18.2398340950581, -96.6453256830706], { icon: redIcon })
  .addTo(mapa_el)
  .bindPopup(
    "<strong>jé</strong><p>[hɛ<sup>3</sup>]</p>" +
      '<audio controls><source src="audios/el/OT11-20-11-01-H1-ARV-K-225_él.wav"></source></audio>'
  );
var ayau = L.marker([18.0316244671714, -96.6691758468062], { icon: blueIcon })
  .addTo(mapa_el)
  .bindPopup(
    "<strong>kui</strong><p>[k<sup>w</sup>i<sup>2</sup>]</p>" +
      '<audio controls><source src="audios/el/él.ERN.ayautla.wav"></source></audio>'
  );
var chiq = L.marker([17.99683817271383, -96.74542432655439], { icon: redIcon })
  .addTo(mapa_el)
  .bindPopup(
    "<strong>jé</strong><p>[hɛ<sup>3</sup>]</p>" +
      '<audio controls><source src="audios/el/OT11-20-02-01-H2-MCC-K-225_él.wav"></source></audio>'
  );
var jal = L.marker([18.07063037252, -96.5335047459864], { icon: blueIcon })
  .addTo(mapa_el)
  .bindPopup(
    "<strong>kui</strong><p>[k<sup>w</sup>i<sup>2</sup>]</p>" +
      '<audio controls><source src="audios/el/OT11-20-08-01-H1-RSS-k-0130_el.wav"></source></audio>'
  );
var soya = L.marker([18.239934772662025, -96.41377809451589], {
  icon: blueIcon,
})
  .addTo(mapa_el)
  .bindPopup(
    "<strong>kui</strong><p>[k<sup>w</sup>i<sup>2</sup>]</p>" +
      '<audio controls><source src="audios/el/OT11-20-18-01-H-BSG-K-225_él.wav"></source></audio>'
  );

// agrupar localidades
var kwi = L.layerGroup([maz, huau, ayau, jal, soya]);
var he = L.layerGroup([inde, chiq]);

// Control de capas
var baseMaps = {
  "Open Street Map": mapa_el,
  "ESRI Terreno": Esri_WorldImagery,
  Gris: CartoDB_Positron,
  Oscuro: CartoDB_DarkMatter,
};

var overlayMaps = {
  "<strong>k<sup>w</sup>i</strong>": kwi,
  "<strong>he</strong>": he,
};

var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(mapa_el);
