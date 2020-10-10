var BaseLayerModels;
import Resource from "../common/js/language" 
export default BaseLayerModels = [
    {
        url : '@/../static/images/baseLayer/baseImage.png',
        name : Resource.localImage,
        thumbnail : '@/../static/images/baseLayer/Image.png',
        title : 'Image',
        type : 'IMAGE',
        // serviceType : Resource.imgServiceType
    },
    {
        url : '//dev.virtualearth.net',
        name : Resource.bingMaps,
        thumbnail : '@/../static/images/baseLayer/Bing.png',
        title : 'BingMap',
        type : 'BINGMAP',
        // serviceType : Resource.bingServiceType
    },
    {
        url : 'https://[subdomain].tianditu.com/img_w/wmts',
        name : Resource.tianditu,
        thumbnail : '@/../static/images/baseLayer/tianditu.png',
        title : '天地图',
        type : 'TIANDITU',
        // serviceType : Resource.tdtServiceType
    },
    {
        url : 'https://a.tile.openstreetmap.org/',
        name : Resource.OpenStreetMap,
        thumbnail : '@/../static/images/baseLayer/OSM.png',
        title : 'Open Street Map',
        type : 'OSM',
        // serviceType : Resource.osmServiceType
    },
    {
        url : 'https://www.supermapol.com/iserver/services/map_China/rest/maps/China_Dark',
        name : Resource.SuperMapChinaDark,
        thumbnail : '@/../static/images/baseLayer/SuperMapDark.jpg',
        title : 'SuperMap China_Dark Map',
        type : 'SUPERMAPDARK'
    },
    {
        url : 'https://www.supermapol.com/iserver/services/map_China/rest/maps/China_Light',
        name : Resource.gridImagery,
        thumbnail : '@/../static/images/baseLayer/grad.jpg',
        title : 'Grid Image Map',
        type : 'GRIDIMAGERY'
    },
    {
        url : 'https://www.supermapol.com/iserver/services/map_China/rest/maps/China_Light',
        name : Resource.superMapChinaLight,
        thumbnail : '@/../static/images/baseLayer/SuperMapLight.jpg',
        title : 'SuperMap China_Light Map',
        type : 'SUPERMAPLIGHT'
    }
];