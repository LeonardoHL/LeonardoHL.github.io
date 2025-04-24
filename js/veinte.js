let mapa_veinte = L.map("mapa-veinte").setView(
  [18.200509555814374, -96.68788100808545],
  11
);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | <a href="https://www.nangina.org.mx"</a> Gabinete Nanginá',
}).addTo(mapa_veinte);

// Caja de texto
var info = L.control();
info.onAdd = function (map) {
  this._div = L.DomUtil.create("div", "info");
  this.update();
  return this._div;
};

info.update = function (props) {
  this._div.innerHTML =
    "<h4> <strong>Veinte </strong> <h4>" + "tu<sup>2</sup>ku<sup>2</sup>";
};
info.addTo(mapa_veinte);

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
    mapa_veinte.flyTo(coords, 14);
  });

// Municipios mazatecos
L.geoJSON(municipios).addTo(mapa_veinte);

//icono de huevo-azul
var blueIcon = L.icon({
  iconUrl: "icons/veinte/20-azul.png",
  iconSize: [30, 30],
});

// icono de huevo-rojo
var redIcon = L.icon({
  iconUrl: "icons/veinte/20-rojo.png",
  iconSize: [30, 30],
});

// icono de huevo-amarillo
var yellowIcon = L.icon({
  iconUrl: "icons/veinte/20-amarillo.png",
  iconSize: [30, 30],
});

// localidades
var cuau = L.marker([18.207051606631374, -96.91168268606408], {
  icon: blueIcon,
})
  .addTo(mapa_veinte)
  .bindPopup(
    "<strong>ku</strong><p>[kɨ]</p>" +
      '<audio controls><source src="OT11-20-14-01-H1-HCG-597_se cabeza.wav"></source></audio>'
  );
var elox = L.marker([18.1773054185917, -96.8767721148899], { icon: redIcon })
  .addTo(mapa_veinte)
  .bindPopup(
    "<strong>sko</strong><p>[sko]</p>" +
      '<audio controls><source src="OT11-20-03-01-H2-CWO-K-597_cabeza.wav"></source></audio>'
  );
var maz = L.marker([18.033177058963886, -96.91420527129755], { icon: blueIcon })
  .addTo(mapa_veinte)
  .bindPopup("<strong>jku</strong><p>[<sup>j</sup>ku]</p>");
var huau = L.marker([18.130655815498585, -96.84436140936339], { icon: redIcon })
  .addTo(mapa_veinte)
  .bindPopup("<strong>jko</strong><p>[<sup>j</sup>ko]</p>");
var inde = L.marker([18.2398340950581, -96.6453256830706], { icon: blueIcon })
  .addTo(mapa_veinte)
  .bindPopup(
    "<strong>sku</strong><p>[sku]</p>" +
      '<audio controls><source src="OT11-20-11-01-M1-ARV-K-597.wav"></source></audio>'
  );
var ayau = L.marker([18.0316244671714, -96.6691758468062], { icon: blueIcon })
  .addTo(mapa_veinte)
  .bindPopup(
    "<strong>nindaku</strong><p>[ni<sup>n</sup>daku]</p>" +
      '<audio controls><source src="cabeza.ERN.ayautla.wav"></source></audio>'
  );
var chiq = L.marker([17.99683817271383, -96.74542432655439], { icon: blueIcon })
  .addTo(mapa_veinte)
  .bindPopup("<strong>rku</strong><p>[rku<sup>2</sup>]</p>");
var jal = L.marker([18.07063037252, -96.5335047459864], { icon: blueIcon })
  .addTo(mapa_veinte)
  .bindPopup(
    "<strong>nintaku̱</strong><p>[ni<sup>2n</sup>ta<sup>2</sup>ku<sup>1</sup>]</p>" +
      '<audio controls><source src="cabeza RSS Jalapa.wav"></source></audio>'
  );
var ixc = L.marker([18.1447915, -96.5100424], { icon: redIcon })
  .addTo(mapa_veinte)
  .bindPopup("<strong>toko</strong><p>[to<sup>2</sup>ko<sup>2</sup>]</p>");
var soya = L.marker([18.239934772662025, -96.41377809451589], {
  icon: blueIcon,
})
  .addTo(mapa_veinte)
  .bindPopup(
    "<strong>tku̱</strong><p>[tku<sup>1</sup>]</p>" +
      '<audio controls><source src="cabeza.wav"></source></audio>'
  );

// agrupar localidades
var u = L.layerGroup([cuau, maz, inde, ayau, chiq, jal, soya]);
var o = L.layerGroup([elox, huau, ixc]);

// Control de capas
var baseMaps = {
  "Open Street Map": mapa_veinte,
  "ESRI Terreno": Esri_WorldImagery,
  Gris: CartoDB_Positron,
  Oscuro: CartoDB_DarkMatter,
};

var overlayMaps = {
  "<strong>*u</strong> > u": u,
  "<strong>*u</strong> > o": o,
};

var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(mapa_veinte);
