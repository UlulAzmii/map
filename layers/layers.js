var wms_layers = [];

var format_Padangadm_0 = new ol.format.GeoJSON();
var features_Padangadm_0 = format_Padangadm_0.readFeatures(json_Padangadm_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Padangadm_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Padangadm_0.addFeatures(features_Padangadm_0);
var lyr_Padangadm_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Padangadm_0, 
                style: style_Padangadm_0,
                popuplayertitle: "Padang adm",
                interactive: true,
                title: '<img src="styles/legend/Padangadm_0.png" /> Padang adm'
            });
var format_titikkoordinat_1 = new ol.format.GeoJSON();
var features_titikkoordinat_1 = format_titikkoordinat_1.readFeatures(json_titikkoordinat_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_titikkoordinat_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_titikkoordinat_1.addFeatures(features_titikkoordinat_1);
var lyr_titikkoordinat_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_titikkoordinat_1, 
                style: style_titikkoordinat_1,
                popuplayertitle: "titik-koordinat",
                interactive: true,
                title: '<img src="styles/legend/titikkoordinat_1.png" /> titik-koordinat'
            });

lyr_Padangadm_0.setVisible(true);lyr_titikkoordinat_1.setVisible(true);
var layersList = [lyr_Padangadm_0,lyr_titikkoordinat_1];
lyr_Padangadm_0.set('fieldAliases', {'Id': 'Id', 'kecamatan': 'kecamatan', });
lyr_titikkoordinat_1.set('fieldAliases', {'No': 'No', 'Nama Tempat': 'Nama Tempat', 'S': 'S', 'E': 'E', });
lyr_Padangadm_0.set('fieldImages', {'Id': 'Range', 'kecamatan': 'TextEdit', });
lyr_titikkoordinat_1.set('fieldImages', {'No': '', 'Nama Tempat': '', 'S': '', 'E': '', });
lyr_Padangadm_0.set('fieldLabels', {'Id': 'no label', 'kecamatan': 'no label', });
lyr_titikkoordinat_1.set('fieldLabels', {'No': 'no label', 'Nama Tempat': 'inline label - visible with data', 'S': 'no label', 'E': 'no label', });
lyr_titikkoordinat_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});