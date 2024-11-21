// Grupos de capas bases
var baseLayers = [
	{
		name: "ArgenMap",
		layer: argenmap,
	},
	{
		name: "Open Street Map",
		layer: osm,
	},
	{
		name: "Google Satelite",
		layer: google
	},

];
// Grupos de capas interactivas
// Grupos de capas interactivas
var overlayMaps = [
	{
		group: "Información FET",
		collapsed: false,
		layers: [
			 {
				active: false,
				name: "Areas de Consorcio",
				layer: Consorcio,
				transparent: true,
				opacity: 0.5,
			},
			{
				active: false,
				name: "Padron regantes",
				layer: PadronRiego,
				transparent: true,
				opacity: 0.5,
			},
			{
				active: false,
				name: "Lotes de Tabaco",
				layer: LotesTabaco,
				transparent: true,
				opacity: 0.5,
			},
			{
				active: false,
				name: "Canales de Riego",
				layer: Canales,
				transparent: true,
				opacity: 0.5,
			},
			{
				active: false,
				name: "Tomas",
				layer: TomasRiego,
				transparent: true,
				opacity: 0.5,
			},
			
			// 
			// {
			// 	active: false,
			// 	name: "Localidades Censales",
			// 	layer: Localidad,
			// 	transparent: true,
			// 	opacity: 0.5,
			// },
			// {
			// 	active: false,
			// 	name: "Parajes",
			// 	layer: Parajes,
			// 	transparent: true,
			// 	opacity: 0.5,
			// },


		]
	},
	{
		group: "Información Base <br> Nivel de Cuencas",
		collapsed: true,
		layers: [

			{
				active: false,
				name: "Rios",
				layer: Rios,
				transparent: true,
				opacity: 0.5,
			},
			{
				active: false,
				name: "Cuencas del NOA",
				layer: SubCuencas,
				transparent: true,
				opacity: 0.5,
			},

		]
	}


];

//panel de control agregado//
var panelLayers = new L.Control.PanelLayers(baseLayers, null,
	{
		compact: true,
		collapsed: false,
		collapsibleGroups: true,
		position: 'topleft',
	});
var panelLayers1 = new L.Control.PanelLayers(null, overlayMaps,
	{
		compact: true,
		collapsed: false,
		collapsibleGroups: true,
		position: 'topleft',
	});

// var panelLayers2 = new L.Control.PanelLayers(null, infoAmb,
// 		{
// 			compact: true,
// 			collapsed: false,
// 			collapsibleGroups: true,
// 			position: 'topleft',
// 		});


