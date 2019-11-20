
const _ = require('lodash');

const calculater = require('./tools/calculater.js').default;
const Drawer     = require('./drawer/Draw.js');

import Tools from "./tools/tools.js";

import {Events, Mark} from "./events/events.js";

import Player from "./player/play.js";

import Compare from "./player/compare.js";

import Detect from "./player/detector.js";

import Menus from "./tools/menus.js";

import './cmap.css'



export function Init(ele,CONFIG){

    function _create(eleid){

        return new Cesium.Viewer(eleid,{
            timeline:true,
            imageryProvider: new Cesium.SingleTileImageryProvider({
                url : '/static/image/Map/single.jpg'
            }),
            navigation:false,
            selectionIndicator : false,
        });
    }

    const viewer = _create(ele);


    const camera = viewer.camera;

    const scene = viewer.scene;

    const entities = viewer.entities;

    const primitive = scene.primitives;

    const imageryLayers = viewer.imageryLayers;

    scene.undergroundDepth = 0;

    scene.globe.depthTestAgainstTerrain = false;

    
    const Ce = new calculater(Cesium);

    const Tool = new Tools(Cesium,viewer);


    // let landMap = imageryLayers.addImageryProvider(new Cesium.ArcGisMapServerImageryProvider({
    //     url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer',
    //     enablePickFeatures: false
    // }));



    

    $.get(`${globalUrl.host}/find/findGisPath`, {
        
    }).then(data => {
        console.log(data)
        var url = data
        var originResult = {"viewBounds":{"top":35.966639677190145,"left":-38.441075287286836,"bottom":-40.91551089738353,"leftBottom":{"x":-38.441075287286836,"y":-40.91551089738353},"right":38.441075287286836,"rightTop":{"x":38.441075287286836,"y":35.966639677190145}},"viewer":{"leftTop":{"x":0,"y":0},"top":0,"left":0,"bottom":256,"rightBottom":{"x":256,"y":256},"width":256,"right":256,"height":256},"distanceUnit":"METER","minVisibleTextSize":0.1,"coordUnit":"DEGREE","scale":7.914176193429535E-9,"description":"","paintBackground":true,"maxVisibleTextSize":1000,"maxVisibleVertex":3600000,"clipRegionEnabled":false,"antialias":false,"textOrientationFixed":false,"angle":0,"prjCoordSys":{"distanceUnit":"METER","projectionParam":null,"epsgCode":4326,"coordUnit":"DEGREE","name":"GCS_WGS_1984","projection":null,"type":"PCS_EARTH_LONGITUDE_LATITUDE","coordSystem":{"datum":{"name":"D_WGS_1984","type":"DATUM_WGS_1984","spheroid":{"flatten":0.00335281066474748,"name":"WGS_1984","axis":6378137,"type":"SPHEROID_WGS_1984"}},"unit":"DEGREE","spatialRefType":"SPATIALREF_EARTH_LONGITUDE_LATITUDE","name":"GCS_WGS_1984","type":"GCS_WGS_1984","primeMeridian":{"longitudeValue":0,"name":"Greenwich","type":"PRIMEMERIDIAN_GREENWICH"}}},"minScale":0,"markerAngleFixed":false,"overlapDisplayedOptions":{"allowPointWithTextDisplay":true,"horizontalOverlappedSpaceSize":0,"allowPointOverlap":true,"allowThemeGraduatedSymbolOverlap":false,"verticalOverlappedSpaceSize":0,"allowTextOverlap":false,"allowThemeGraphOverlap":false,"allowTextAndPointOverlap":true},"visibleScales":[],"visibleScalesEnabled":false,"customEntireBoundsEnabled":false,"clipRegion":{"center":null,"parts":null,"style":null,"prjCoordSys":null,"id":0,"type":"REGION","partTopo":null,"points":null},"maxScale":1.0E12,"customParams":"","center":{"x":0,"y":-2.474435610096691},"dynamicPrjCoordSyses":[{"distanceUnit":null,"projectionParam":null,"epsgCode":0,"coordUnit":null,"name":null,"projection":null,"type":"PCS_ALL","coordSystem":null}],"colorMode":"DEFAULT","textAngleFixed":false,"overlapDisplayed":false,"userToken":{"userID":""},"cacheEnabled":true,"dynamicProjection":true,"autoAvoidEffectEnabled":true,"customEntireBounds":null,"name":"haituMap","bounds":{"top":85.05112877980662,"left":-180,"bottom":-90,"leftBottom":{"x":-180,"y":-90},"right":180,"rightTop":{"x":180,"y":85.05112877980662}},"backgroundStyle":{"fillGradientOffsetRatioX":0,"markerSize":2.4,"fillForeColor":{"red":255,"green":255,"blue":255,"alpha":255},"fillGradientOffsetRatioY":0,"markerWidth":0,"markerAngle":0,"fillSymbolID":0,"lineColor":{"red":0,"green":0,"blue":0,"alpha":255},"markerSymbolID":0,"lineWidth":0.1,"markerHeight":0,"fillOpaqueRate":100,"fillBackOpaque":true,"fillBackColor":{"red":255,"green":255,"blue":255,"alpha":255},"fillGradientMode":"NONE","lineSymbolID":0,"fillGradientAngle":0}};
        var bounds = originResult.bounds;
        var mapName = url.substring(url.lastIndexOf('/')+1);
        mapName =  decodeURI(mapName);


        //利用服务url创建SuperMapImageryProvider实例
        var provider;
        if (!originResult.visibleScales || originResult.visibleScales.length == 0) {
            provider = new Cesium.SuperMapImageryProvider({
                url : url
            });
        } else {
            var visibleScales = originResult.visibleScales;
            var min = findNearScale(visibleScales[0]);
            var max = findNearScale(visibleScales[visibleScales.length-1]);
            provider = new Cesium.SuperMapImageryProvider({
                url : url,
                // 设置最大缩放层级后，到了最大缩放层级，不会去后端请求数据，但是地图还可以继续放大
                maximumLevel: max,
                minimumLevel: min
            });
        }

        if(provider){

            var imagery = imageryLayers.addImageryProvider(provider);
            imagery.alpha = 1.0;
        }
    });



    function findNearScale(scale) {
        // webGL3D采用固定比例尺出图，且从第一级比例尺开始。
        var indexScale = 3.3803271432053056E-9;
        var sub;
        var zoom = 0;
        for(var j = 0; j < 20; j++) {
            var temp = Math.abs(scale - indexScale);
            if(j==0) {
                sub = temp;
                indexScale = indexScale * 2;
                continue;
            }
            if(sub > temp) {
                sub = temp;
                zoom = j;
            } else {
                break;
            }
            indexScale = indexScale * 2;
        }
        return zoom;
    }   





    const Event = new Events(Cesium,viewer);

    const MarkTool = new Mark(Cesium,viewer);

    const DrawEntity = new Drawer.DrawEntity(Cesium,viewer);

    const GroupController = new Drawer.GroupController();

    const DrawPrimitive = new Drawer.DrawPrimitive(Cesium,viewer);

    const FlyPlayer = new Player(Cesium,viewer);

    const FlyCompare = new Compare(Cesium,viewer);

    const Detector = new Detect(Cesium,viewer);

    const Menu = new Menus(Cesium,viewer);

    


    function ImageLayersHandler(){
        landMap.show = !landMap.show
    }

    function AddTarget(target){

        let entity = DrawEntity.Draw({
            id:target.id,
            position:Ce.ToPoint([120,30,500]),
            label:{
                text:'模型名字',
                font:'15px',
                verticalOrigin:Cesium.VerticalOrigin.BOTTOM,
                pixelOffset:Ce.XY2D(0,-20)
            },
            polyline:{
                positions:Ce.ToPointsHeight([])
            },
            billboard:{
                image:'/static/image/junbiao/feiji.png',
                width:60,
                height:60
            },
            // model:{
            //     uri : '/static/SampleData/models/CesiumAir/Cesium_Air.gltf',
            //     minimumPixelSize : 60,
            //     maximumScale : 20000
            // }
        })
    
        FlyPlayer.Add({
            entity : entity,
            data   : target   
        });
    }

    const typeConfig = {
        color : {
            feiji : Ce.CssColor('orange'),
            qianting : Ce.CssColor('white'),
        },
        displayDistance : {
            feiji : Ce.DisplayNF(300000, 100000000),
            qianting : Ce.DisplayNF(0, 100000000)
        }
    }

    function AddCompare(type, target){

        let shape = {
            id:target.id,
            name:target.name,
            type:type,
            group:type,
            position:Ce.ToPoint(target.position),
            label:{
                text:target.name,
                font:'15px',
                verticalOrigin:Cesium.VerticalOrigin.BOTTOM,
                pixelOffset:Ce.XY2D(0,-20)
            },
            polyline:{
                positions:Ce.ToPointsHeight([]),
                width : 2,
                material:new Cesium.PolylineDashMaterialProperty({
                    color : typeConfig.color[type],
                    dashLength: 8.0
                })
            },
            billboard:{
                image:`/static/image/junbiao/${type}.png`,
                width:60,
                height:60,
                distanceDisplayCondition:typeConfig.displayDistance[type]
            },
            origin:target
        }

        if(type == 'feiji'){

            _.merge(shape,{
                cylinder:{
                    length:1,
                    topRadius:target.R || 0,
                    bottomRadius:target.R || 0,
                    fill:false,
                    outline:true,
                    outlineWidth:2,
                    outlineColor:Ce.CssColor('aqua')
                },
                model:{
                    uri : '/static/SampleData/models/CesiumAir/Cesium_Air.gltf',
                    minimumPixelSize : 60,
                    maximumScale : 20000,
                    distanceDisplayCondition:Ce.DisplayNF(0, 300000)
                },
            })
        }

        let entity = DrawEntity.Draw(shape)
    
        FlyCompare.Add({
            id:target.id,
            entity : entity,
            data   : target   ,
            path:[]
        });
    }

    function AddSubmarine(target){

        let tarEntity = Tool.GetId(target.id)

        if(tarEntity){

            // console.log('update:',target);
            let _pos = Ce.ToPoint(target.positions);
            tarEntity.position = _pos;

            let _orientation = Ce.ToOrientation(_pos, Ce.ToRadians( Number(target.angle) ), 0, 0);
                
            tarEntity.orientation = _orientation;

            tarEntity.billboard.rotation = Ce.ToRadians( Number(target.angle)+90);

        }else{

            DrawEntity.Draw({
                id:target.id,
                name:'潜艇',
                type:'submarine',
                group:'submarine',
                position:Ce.ToPoint(target.positions),

                label:{
                    text:'核潜艇',
                    font:'15px',
                    verticalOrigin:Cesium.VerticalOrigin.BOTTOM,
                    pixelOffset:Ce.XY2D(0,-20)
                },
                billboard:{
                    image:'/static/image/junbiao/qianting.png',
                    width:40,
                    height:40,
                    // distanceDisplayCondition:Ce.DisplayNF(500000, 100000000)
                },
                origin:target
            })

            Tool.Blink( target.id );
        }

    }

    function AddCtTarget(target){

        if(Tool.GetId(target.id)){
            return
        }

        DrawEntity.Draw({
            id:target.id,
            name:'磁探目标',
            type:'ct',
            group:'ct',
            position:Ce.ToPoint(target.positions),

            label:{
                text:'磁探',
                font:'15px',
                verticalOrigin:Cesium.VerticalOrigin.BOTTOM,
                pixelOffset:Ce.XY2D(0,-20)
            },
            billboard:{
                image:'/static/image/junbiao/citan.png',
                width:20,
                height:20,
                scaleByDistance:Ce.ScaleNF(50000,2,100000,1)
                // distanceDisplayCondition:Ce.DisplayNF(500000, 100000000)
            },
            origin:target
        })

        Tool.Blink( target.id );
    }




    return {
        viewer,
        Tool,
        Event,
        FlyPlayer,
        FlyCompare,
        Detector,
        AddTarget,
        AddCompare,
        AddSubmarine,
        AddCtTarget,
        ImageLayersHandler,
        Menu,
        MarkTool,
        Groups:GroupController,
    }

}