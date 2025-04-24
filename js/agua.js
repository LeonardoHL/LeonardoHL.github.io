let map = L.map("mapa-agua").setView(
  [18.200509555814374, -96.68788100808545],
  11
);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | <a href="https://www.nangina.org.mx"</a> Gabinete Nanginá',
}).addTo(map);

// Caja de texto
var info = L.control();
info.onAdd = function (map) {
  this._div = L.DomUtil.create("div", "info");
  this.update();
  return this._div;
};

info.update = function (props) {
  this._div.innerHTML =
    "<h4> <strong>Agua </strong> <h4>" + "*ni<sup>2</sup>ʔi<sup>3</sup>";
};
info.addTo(map);

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
    map.flyTo(coords, 14);
  });

// Municipios mazatecos
L.geoJSON(municipios).addTo(map);

//icono de agua-azul
var blueIcon = L.icon({
  iconUrl: "icons/agua/agua-azul.png",
  iconSize: [30, 30],
});

// icono de agua-rojo
var redIcon = L.icon({
  iconUrl: "icons/agua/agua-rojo.png",
  iconSize: [30, 30],
});

// localidades
var cuau = L.marker([18.207051606631374, -96.91168268606408], {
  icon: blueIcon,
})
  .addTo(map)
  .bindPopup(
    "<strong>nondó</strong><p>[no<sup>2n</sup>do<sup>3</sup>]</p>" +
      '<audio controls><source src="audios/agua/OT11-20-14-01-M1-HCG-270_agua.wav"></source></audio>'
  );
var elox = L.marker([18.1773054185917, -96.8767721148899], { icon: blueIcon })
  .addTo(map)
  .bindPopup(
    "<strong>nandá</strong><p>[na<sup>2n</sup>da<sup>3</sup>]</p>" +
      '<audio controls><source src="audios/agua/OT11‑20-20-01-M1-DLO-K-270_agua.wav"></source></audio>'
  );
var maz = L.marker([18.033177058963886, -96.91420527129755], { icon: blueIcon })
  .addTo(map)
  .bindPopup(
    "<strong>nandá</strong><p>[na<sup>2n</sup>da<sup>3</sup>]</p>" +
      '<audio controls><source src="audios/agua/OT11-20-06-01-M1-IFG-K-270_agua.wav"></source></audio>'
  );
var huau = L.marker([18.130655815498585, -96.84436140936339], {
  icon: blueIcon,
})
  .addTo(map)
  .bindPopup("<strong>nandá</strong><p>[na<sup>2n</sup>da<sup>3</sup>]</p>");
var inde = L.marker([18.2398340950581, -96.6453256830706], { icon: blueIcon })
  .addTo(map)
  .bindPopup("<strong>nandá</strong><p>[na<sup>2n</sup>da<sup>3</sup>]</p>");
var ayau = L.marker([18.0316244671714, -96.6691758468062], { icon: blueIcon })
  .addTo(map)
  .bindPopup(
    "<strong>ndá</strong><p>[<sup>n</sup>da<sup>3</sup>]</p>" +
      '<audio controls><source src="audios/agua/OT11-20-07-01-H-MCC-K-270_agua.wav"></source></audio>'
  );
var chiq = L.marker([17.99683817271383, -96.74542432655439], { icon: blueIcon })
  .addTo(map)
  .bindPopup(
    "<strong>nandá</strong><p>[na<sup>2n</sup>da<sup>3</sup>]</p>" +
      '<audio controls><source src="audios/agua/OT11-20-02-01-H1-MCC-K-270_agua.wav"></source></audio>'
  );
var ixc = L.marker([18.1447915, -96.5100424], { icon: blueIcon })
  .addTo(map)
  .bindPopup("<strong>ndába</strong><p>[<sup>n</sup>da<sup>3</sup>ba]</p>");
var soya = L.marker([18.239934772662025, -96.41377809451589], {
  icon: blueIcon,
})
  .addTo(map)
  .bindPopup(
    "<strong>ndíba</strong><p>[<sup>n</sup>di<sup>3</sup>ba<sup>2</sup>]</p>" +
      '<audio controls><source src="audios/agua/OT11-20-18-01-H-BSG-K-270_agua.wav"></source></audio>'
  );
var jal = L.marker([18.07063037252, -96.5335047459864], { icon: redIcon })
  .addTo(map)
  .bindPopup(
    "<strong>ntá</strong><p>[nta<sup>3</sup>]</p>" +
      '<audio controls><source src="audios/agua/OT11-20-08-H1-01-RSS-k-0270_agua.wav"></source></audio>'
  );

// agrupar localidades
var nd = L.layerGroup([cuau, elox, maz, huau, inde, ayau, chiq, ixc, soya]);
var nt = L.layerGroup([jal]);

// Control de capas
var baseMaps = {
  "Open Street Map": map,
  "ESRI Terreno": Esri_WorldImagery,
  Gris: CartoDB_Positron,
  Oscuro: CartoDB_DarkMatter,
};

var overlayMaps = {
  "<strong>*nt</strong> > <sup>n</sup>d": nd,
  "<strong>*nt</strong> > nt": nt,
};

var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);
