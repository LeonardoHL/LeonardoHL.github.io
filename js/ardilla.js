let mapa_ardilla = L.map("mapa-ardilla").setView(
  [18.200509555814374, -96.68788100808545],
  11
);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | <a href="https://www.nangina.org.mx"</a> Gabinete Nanginá',
}).addTo(mapa_ardilla);

// Caja de texto
var info = L.control();
info.onAdd = function (map) {
  this._div = L.DomUtil.create("div", "info");
  this.update();
  return this._div;
};

info.update = function (props) {
  this._div.innerHTML =
    "<h4> <strong>Ardilla</strong> <h4>" +
    "*nt<sup>j</sup>a<sup>1</sup>hu<sup>1</sup>";
};
info.addTo(mapa_ardilla);

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
    mapa_ardilla.flyTo(coords, 14);
  });

// Municipios mazatecos
L.geoJSON(municipios).addTo(mapa_ardilla);

//icono de ardilla-azul
var blueIcon = L.icon({
  iconUrl: "icons/ardilla/ardilla-azul.png",
  iconSize: [30, 30],
});

// icono de ardilla-rojo
var redIcon = L.icon({
  iconUrl: "icons/ardilla/ardilla-rojo.png",
  iconSize: [30, 30],
});

// icono de ardilla-amarillo
var yellowIcon = L.icon({
  iconUrl: "icons/ardilla/ardilla-amarillo.png",
  iconSize: [30, 30],
});

// localidades
var cuau = L.marker([18.207051606631374, -96.91168268606408], {
  icon: blueIcon,
})
  .addTo(mapa_ardilla)
  .bindPopup(
    "<strong>choyonu</strong><p>/tʃojon̤ɨ/</p>" +
      '<audio controls><source src="audios/ardilla/OT11-20-14-01-M1-HCG-0056_ardilla.wav"></source></audio>'
  );
var elox = L.marker([18.1773054185917, -96.8767721148899], { icon: blueIcon })
  .addTo(mapa_ardilla)
  .bindPopup(
    "<strong>chijno</strong><p>/tʃin̤o/</p>" +
      '<audio controls><source src="audios/ardilla/OT11-20-03-01-H2-CWO-K-056_ardilla.wav"></source></audio>'
  );
var maz = L.marker([18.033177058963886, -96.91420527129755], { icon: blueIcon })
  .addTo(mapa_ardilla)
  .bindPopup("<strong>chajnu</strong><p>/tʃan̤u/</p>");
var huau = L.marker([18.130655815498585, -96.84436140936339], {
  icon: blueIcon,
})
  .addTo(mapa_ardilla)
  .bindPopup(
    "<strong>chajno</strong><p>/tʃan̤o/</p>" +
      '<audio controls><source src="audios/ardilla/OT11-20-05-01-H1-MMC-K-056_ardilla.wav"></source></audio>'
  );
var inde = L.marker([18.2398340950581, -96.6453256830706], { icon: blueIcon })
  .addTo(mapa_ardilla)
  .bindPopup("<strong>chájno̱</strong><p>/tʃa<sup>3</sup>n̤͡no<sup>1</sup>/</p>");
var ayau = L.marker([18.0316244671714, -96.6691758468062], { icon: redIcon })
  .addTo(mapa_ardilla)
  .bindPopup("<strong>chaxnu</strong><p>/tʃa<sup>2</sup>ʃnu<sup>2</sup>/</p>");
var chiq = L.marker([17.99683817271383, -96.74542432655439], { icon: redIcon })
  .addTo(mapa_ardilla)
  .bindPopup("<strong>xnu</strong><p>/ʃnu/</p>");
var jal = L.marker([18.07063037252, -96.5335047459864], { icon: yellowIcon })
  .addTo(mapa_ardilla)
  .bindPopup(
    "<strong>chátúyá</strong><p>/tʃatuj̰a/</p>" +
      '<audio controls><source src="audios/ardilla/OT11-20-08-01-H1-RSS-k-0056_ardilla.wav"></source></audio>'
  );
var ixc = L.marker([18.1447915, -96.5100424], { icon: yellowIcon })
  .addTo(mapa_ardilla)
  .bindPopup(
    "<strong>ndi̱jo̱</strong><p>/<sup>n</sup>d<sup>j</sup>i<sup>1</sup>ɦo<sup>1</sup>/</p>"
  );
var soya = L.marker([18.239934772662025, -96.41377809451589], {
  icon: yellowIcon,
})
  .addTo(mapa_ardilla)
  .bindPopup(
    "<strong>bixtutsi</strong><p>/biʃtutsi/</p>" +
      '<audio controls><source src="audios/ardilla/OT11-20-18-01-H-BSG-K-56_ardilla.wav"></source></audio>'
  );

// agrupar localidades
var hn = L.layerGroup([cuau, elox, maz, huau, inde, jal, ixc, soya]);
var sn = L.layerGroup([ayau, chiq]);

// Control de capas
var baseMaps = {
  "Open Street Map": mapa_ardilla,
  "ESRI Terreno": Esri_WorldImagery,
  Gris: CartoDB_Positron,
  Oscuro: CartoDB_DarkMatter,
};

var overlayMaps = {
  "<strong>*sn</strong> > hn": hn,
  "<strong>*sn</strong> > sn": sn,
};

var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(mapa_ardilla);
