let mapa_blanco = L.map("mapa-blanco").setView(
  [18.200509555814374, -96.68788100808545],
  11
);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | <a href="https://www.nangina.org.mx"</a> Gabinete Nanginá',
}).addTo(mapa_blanco);

// Caja de texto
var info = L.control();
info.onAdd = function (map) {
  this._div = L.DomUtil.create("div", "info");
  this.update();
  return this._div;
};

info.update = function (props) {
  this._div.innerHTML =
    "<h4> <strong>Blanco</strong> <h4>" +
    "*t<sup>j</sup>a<sup>2</sup>wa<sup>2</sup>";
};
info.addTo(mapa_blanco);

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
    mapa_blanco.flyTo(coords, 14);
  });

// Municipios mazatecos
L.geoJSON(municipios).addTo(mapa_blanco);

//icono de blanco-azul
var blueIcon = L.icon({
  iconUrl: "icons/blanco/blanco-azul.png",
  iconSize: [30, 30],
});

// icono de blanco-rojo
var redIcon = L.icon({
  iconUrl: "icons/blanco/blanco-rojo.png",
  iconSize: [30, 30],
});

// icono de blanco-amarillo
var yellowIcon = L.icon({
  iconUrl: "icons/blanco/blanco-amarillo.png",
  iconSize: [30, 30],
});

// localidades
var cuau = L.marker([18.207051606631374, -96.91168268606408], {
  icon: blueIcon,
})
  .addTo(mapa_blanco)
  .bindPopup(
    "<strong>chrubo</strong><p>[ʈʂɨ<sup>2</sup>.βo<sup>1</sup>]</p>" +
      '<audio controls><source src="audios/blanco/OT11-20-14-01-H1-HCG-608_blanco.wav"></source></audio>'
  );
var elox = L.marker([18.1773054185917, -96.8767721148899], { icon: blueIcon })
  .addTo(mapa_blanco)
  .bindPopup(
    "<strong>chroba</strong><p>[ɻu<sup>2</sup>ˈβaː<sup>2</sup>]</p>" +
      '<audio controls><source src="audios/blanco/OT11-20-03-01-H2-CWO-K-608_blanco.wav"></source></audio>'
  );
var maz = L.marker([18.033177058963886, -96.91420527129755], { icon: blueIcon })
  .addTo(mapa_blanco)
  .bindPopup("<strong>taba̱</strong><p>[ta<sup>2</sup>.βa<sup>1</sup>]</p>");
var huau = L.marker([18.130655815498585, -96.84436140936339], {
  icon: blueIcon,
})
  .addTo(mapa_blanco)
  .bindPopup(
    '<audio controls><source src="audios/blanco/OT11-20-05-01-M1-MMC-K-608_blanco.wav"></source></audio>'
  );
var inde = L.marker([18.2398340950581, -96.6453256830706], { icon: redIcon })
  .addTo(mapa_blanco)
  .bindPopup(
    "<strong>tiba</strong><p>[ti<sup>2</sup>βa<sup>2</sup>]</p>" +
      '<audio controls><source src="audios/blanco/OT11-20-11-01-M1-ARV-K-608.wav"></source></audio>'
  );
var ayau = L.marker([18.0316244671714, -96.6691758468062], { icon: blueIcon })
  .addTo(mapa_blanco)
  .bindPopup(
    "<strong>tibá</strong><p>[ti<sup>2</sup>ˈβa<sup>4</sup>]</p>" +
      '<audio controls><source src="audios/blanco/OT11-20-07-01-H-MMC-KC_blanco.wav"></source></audio>'
  );

var ixc = L.marker([18.1447915, -96.5100424], { icon: blueIcon })
  .addTo(mapa_blanco)
  .bindPopup(
    "<strong>chubo</strong><p>[ tʃu<sup>2</sup>βo<sup>2</sup>]</p>" +
      '<audio controls><source src="audios/blanco/OT11-30-01-01-H1-ZGE-K-0608_blanco.wav"></source></audio>'
  );
var soya = L.marker([18.239934772662025, -96.41377809451589], {
  icon: blueIcon,
})
  .addTo(mapa_blanco)
  .bindPopup(
    "<strong>tiaba</strong><p>[t<sup>j</sup>a<sup>2</sup>βa<sup>2</sup>]</p>" +
      '<audio controls><source src="audios/blanco/OT11-20-18-01-H-BSG-K-608_blanco.wav"></source></audio>'
  );
var jal = L.marker([18.07063037252, -96.5335047459864], { icon: blueIcon })
  .addTo(mapa_blanco)
  .bindPopup(
    "<strong>taba</strong><p>[ta<sup>2</sup>βa<sup>2</sup>]</p>" +
      '<audio controls><source src="audios/blanco/OT11-20-08-01-H1-RSS-k-0608_blanco.wav"></source></audio>'
  );

// agrupar localidades
var ts = L.layerGroup([cuau, elox, maz, huau, ayau, ixc, soya, jal]);
var tj = L.layerGroup([inde]);

// Control de capas
var baseMaps = {
  "Open Street Map": mapa_blanco,
  "ESRI Terreno": Esri_WorldImagery,
  Gris: CartoDB_Positron,
  Oscuro: CartoDB_DarkMatter,
};

var overlayMaps = {
  "<strong>*t<sup>j</sup></strong> > t<sup>j</sup>": tj,
  "<strong>*t<sup>j</sup></strong> > ʈʂ": ts,
};

var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(mapa_blanco);
