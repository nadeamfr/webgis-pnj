var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_adm_sibon_tes1_2 = new ol.format.GeoJSON();
var features_adm_sibon_tes1_2 = format_adm_sibon_tes1_2.readFeatures(json_adm_sibon_tes1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adm_sibon_tes1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adm_sibon_tes1_2.addFeatures(features_adm_sibon_tes1_2);
var lyr_adm_sibon_tes1_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_adm_sibon_tes1_2, 
                style: style_adm_sibon_tes1_2,
                interactive: true,
                title: '<img src="styles/legend/adm_sibon_tes1_2.png" /> adm_sibon_tes1'
            });
var format_jalan_tes2_3 = new ol.format.GeoJSON();
var features_jalan_tes2_3 = format_jalan_tes2_3.readFeatures(json_jalan_tes2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_tes2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_tes2_3.addFeatures(features_jalan_tes2_3);
var lyr_jalan_tes2_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalan_tes2_3, 
                style: style_jalan_tes2_3,
                interactive: true,
                title: '<img src="styles/legend/jalan_tes2_3.png" /> jalan_tes2'
            });
var format_pendidikan_tes_4 = new ol.format.GeoJSON();
var features_pendidikan_tes_4 = format_pendidikan_tes_4.readFeatures(json_pendidikan_tes_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pendidikan_tes_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pendidikan_tes_4.addFeatures(features_pendidikan_tes_4);
var lyr_pendidikan_tes_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pendidikan_tes_4, 
                style: style_pendidikan_tes_4,
                interactive: true,
                title: '<img src="styles/legend/pendidikan_tes_4.png" /> pendidikan_tes'
            });
var format_bendungan_tes_5 = new ol.format.GeoJSON();
var features_bendungan_tes_5 = format_bendungan_tes_5.readFeatures(json_bendungan_tes_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bendungan_tes_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bendungan_tes_5.addFeatures(features_bendungan_tes_5);
var lyr_bendungan_tes_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bendungan_tes_5, 
                style: style_bendungan_tes_5,
                interactive: true,
                title: '<img src="styles/legend/bendungan_tes_5.png" /> bendungan_tes'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_adm_sibon_tes1_2.setVisible(true);lyr_jalan_tes2_3.setVisible(true);lyr_pendidikan_tes_4.setVisible(true);lyr_bendungan_tes_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatellite_1,lyr_adm_sibon_tes1_2,lyr_jalan_tes2_3,lyr_pendidikan_tes_4,lyr_bendungan_tes_5];
lyr_adm_sibon_tes1_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_jalan_tes2_3.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_pendidikan_tes_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGGPDK': 'FGGPDK', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JJGPDF': 'JJGPDF', 'JNSPDL': 'JNSPDL', });
lyr_bendungan_tes_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'FBD': 'FBD', 'POBD': 'POBD', 'REMARK': 'REMARK', 'VOLAIR': 'VOLAIR', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_adm_sibon_tes1_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'Range', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_jalan_tes2_3.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'Range', 'MATRJL': 'Range', 'FGSRJL': 'Range', 'UTKRJL': 'Range', 'TOLRJL': 'Range', 'WLYRJL': 'Range', 'AUTRJL': 'Range', 'KLSRJL': 'Range', 'SPCRJL': 'Range', 'JPARJL': 'Range', 'ARHRJL': 'Range', 'STARJL': 'Range', 'KLLRJL': 'TextEdit', 'MEDRJL': 'Range', 'LOCRJL': 'Range', 'JARRJL': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_pendidikan_tes_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'KATPDK': 'TextEdit', 'JLPDDK': 'TextEdit', 'FGGPDK': 'TextEdit', 'REMARK': 'TextEdit', 'FCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'JJGPDF': 'TextEdit', 'JNSPDL': 'TextEdit', });
lyr_bendungan_tes_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'FBD': 'TextEdit', 'POBD': 'TextEdit', 'REMARK': 'TextEdit', 'VOLAIR': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_adm_sibon_tes1_2.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_jalan_tes2_3.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'inline label', 'SRS_ID': 'header label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_LENG': 'no label', 'SHAPE_LEN': 'no label', });
lyr_pendidikan_tes_4.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'KATPDK': 'no label', 'JLPDDK': 'no label', 'FGGPDK': 'no label', 'REMARK': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JJGPDF': 'no label', 'JNSPDL': 'no label', });
lyr_bendungan_tes_5.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'FBD': 'no label', 'POBD': 'no label', 'REMARK': 'no label', 'VOLAIR': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_bendungan_tes_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});