const apikey = "pl4n06";
/************************************** SERVICIOS ****************************************/
const getHermandades = "http://www.juntadeandalucia.es/justiciaeinterior/prom/rest/hermandades/";
const getDias = "http://www.juntadeandalucia.es/justiciaeinterior/prom/rest/fechas/";
const getRutas = "http://www.juntadeandalucia.es/justiciaeinterior/prom/rest/ruta/";
const getFechas = "http://www.juntadeandalucia.es/justiciaeinterior/prom/rest/fechas/";
const getCamino = "http://www.juntadeandalucia.es/justiciaeinterior/prom/rest/camino/";
const getPasos = "http://www.juntadeandalucia.es/justiciaeinterior/prom/rest/pasos/";
const getFechasPaso = "http://www.juntadeandalucia.es/justiciaeinterior/prom/rest/fechas/paso/";
const getHoras = "http://www.juntadeandalucia.es/justiciaeinterior/prom/rest/horario/";
const getGPS = "http://www.juntadeandalucia.es/justiciaeinterior/prom/rest/gps/";
const getColor = "http://www.juntadeandalucia.es/justiciaeinterior/prom/rest/color/"; //NO USADO
/**/
const bboxContext = {x:{min:96388,max:621889},y:{min:3959795,max:4299792}};
const zoomToPoint = 12;
const updateGPS = 150; //en segundos
const timeout = 15; //en segundos. Se usa para detectar si hay algún problema con los servicios no controlado
const attrNotShow = ["the_geom", "geom", "geometry", "color", "sentido"];
/*********************** MENSAJES DE ERROR NO CONTROLADO EN LOS SERVICIOS **********************/
const noGPS = "Actualmente no existen posiciones de las hermandades. Inténtelo más tarde";
const noPosicion = "No existe posición para la hermandad seleccionada";
const errInesperado = "Ha ocurrido un error inesperado. Vuelva a ejecutar la aplicación";
const errCode = [2];
const errMsg = ["No es posible visualizar la ruta. El desplazamiento no se realiza en carreta"];
const htmlAcercade = "<img src='img/logoJunta.png'/><br>Plan Romero 2017<br>Versión 1.0.0<br><br>Junta de Andalucía<br><a href='#' onclick='javascript:openInfo();'>Consejería de Justicia e Interior</a>";

const codJornada = new Date().getHours() > 15? 2 : 1;
const urlWMSCaminosOcupados = 'http://www.cji.junta-andalucia.es/justiciaeinterior/IDE-pru/PlanRomero/wms';

window.isApp = /^(?!HTTP)/.test(document.URL.toUpperCase()); //
window.iOS = /IPAD|IPHONE|IPOD/.test(navigator.userAgent.toUpperCase());
var formatDate = function (date, format) {
	//console.log(date);
	switch (format) {
		case "gps":
			return date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + " " +
				('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2);
		
		case "combo":
		default:
			return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
	}
};

