
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
            selectionIndicator:false,
            timeline:true,
            animation:false,
            geocoder: false,
            homeButton: false,
            baseLayerPicker: false,
            fullscreenButton: false,
            navigationHelpButton: false,
            sceneMode : Cesium.SceneMode.SCENE2D,  //初始场景模式 为二维
            imageryProvider: new Cesium.SingleTileImageryProvider({
                url : '/static/image/Map/single.jpg',
            }),
            navigation:false,
            sceneModePicker:true,
            contextOptions:{
                webgl:{
                    alpha: true,
                    depth:true,
                    stencil:true,
                    antialias:true,
                    premultipliedAlpha:true,
                    preserveDrawingBuffer:true,
                    failIfMajorPerformanceCaveat:true
                }
            }
        });
    }

    const viewer = _create(ele);
    viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);

    var viewerImagery = {}
    const camera = viewer.camera;

    const scene = viewer.scene;
    scene.faxx=true

    const entities = viewer.entities;

    const primitive = scene.primitives;

    const imageryLayers = viewer.imageryLayers;

    scene.undergroundDepth = 0;

    scene.globe.depthTestAgainstTerrain = false;

    
    const Ce = new calculater(Cesium);

    const Tool = new Tools(Cesium,viewer);

    // const Tileset = new Cesium.Cesium3DTileset({
    //     url:"http://192.168.0.111:8080/earthview/services/file/GetFileData/tileset/tileset.json",
    //     show:false
    // })
    // viewer.scene.primitives.add(Tileset)
    var Tileset = viewer.scene.primitives
    $.get(`${globalUrl.host}/find/findHypsographicMap`, {
        crossDomain: true, 
        dataType:'jsonp',
    }).then(data=>{
        Tileset.add(new Cesium.Cesium3DTileset({
            url:data,
            show:false
        }))
    })
    // viewer.zoomTo(Tileset)
    // let landMap = imageryLayers.addImageryProvider(new Cesium.ArcGisMapServerImageryProvider({
    //     url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer',
    //     enablePickFeatures: false
    // }));

//     var tile_lay = new Cesium.TileCoordinatesImageryProvider({

//         tilingScheme: new Cesium.GeographicTilingScheme()
//         }); tile_lay.requestImage = function(x,y,level){
        
//         var canvas = document.createElement('canvas');
//         canvas.width = 256;
//         canvas.height = 256;
//         var context = canvas.getContext('2d');
//         context.strokeStyle = "rgba(192,192,192,0.7)";
//         context.lineWidth = 1;
//         context.strokeRect(0, 0, 256, 256);
//         var label = zxy2TileKey(level,x,y); //label里面放需要显示的文字
//         context.font = 'bold 12px Arial';
//         context.fillStyle = "rgba(10, 10, 10, 0.6)";
//         context.textAlign = 'center';
//         context.fillText(label, 124, 124);
//         return canvas;
//         }; 
//         viewer.scene.imageryLayers.addImageryProvider(tile_lay);

//         function zxy2TileKey(level,x,y){
          

//     var interval = 180.0 / Math.pow(2, level);
//     var lon = (x + 0.5) * interval-180;
//     var lat = 90 - (y + 0.5) * interval;
//     //var label = 'L-' + level + 'X-' + x + 'Y-' + y;
//     var labelLevel = '';
//     var labelLon = '';
//     var labelLat = '';
//     if (lon > 0) {
//        if (lat > 0) {
//            //label = 'L' + level + 'E' + lon + 'N' + lat;
//            labelLevel = 'L' + level;
//            labelLon = 'E' + lon;
//            labelLat = 'N' + lat;
//        } else {
//            //label = 'L' + level + 'E' + lon + 'S' + (-lat);
//            labelLevel = 'L' + level;
//            labelLon = 'E' + lon;
//            labelLat = 'N' + (-lat);
//        }
//     } else {
//        if (lat > 0) {
//            //label = 'L' + level + 'W' + (-lon) + 'N' + lat;
//            labelLevel = 'L' + level;
//            labelLon = 'E' + (-lon);
//            labelLat = 'N' + lat;
//        } else {
//            //label = 'L' + level + 'W' + (-lon) + 'S' + (-lat);
//            labelLevel = 'L' + level;
//            labelLon = 'E' + (-lon);
//            labelLat = 'N' + (-lat);
//        }
//     }
   
// //    console.log(labelLevel,labelLon,labelLat)
//     //context.textAlign = 'center';
//     //context.fillStyle = 'black';//绘制阴影效果
//    //context.fillText(label, 127, 127);
//     //context.fillStyle = cssColor;
//    //context.fillText(label, 124, 24);

//         return labelLon+" "+labelLat;
//         }

    $.get(`${globalUrl.host}/find/findGisPath`, {
        crossDomain: true, 
        dataType:'jsonp',
    }).then(data => {
        var arrAll = data;
        arrAll.map(item =>{
            if(!viewerImagery[item.name]){
                if(item.type == 'haitu'){
                    //海图
                    let haitu = new Cesium.UrlTemplateImageryProvider({
                        url : item.url,
                        ellipsoid: Cesium.Ellipsoid.WGS84,
                        tilingScheme: new Cesium.GeographicTilingScheme({
                            numberOfLevelZeroTilesX : 2,
                            numberOfLevelZeroTilesY : 1,
                            rectangle : new Cesium.Rectangle(-Cesium.Math.PI, -Cesium.Math.PI * 0.5, Cesium.Math.PI, Cesium.Math.PI * 0.5),
                            ellipsoid : Cesium.Ellipsoid.WGS84
                        }),
                        maximumLevel:14,
                        customTags:{
                            m : (provider,x,y,level) => level+1,
                            r : (provider,x,y,level) => y,
                            c : (provider,x,y,level) => x
                        }
                    })
                    viewerImagery[item.name] = viewer.imageryLayers.addImageryProvider(haitu)
                    viewerImagery[item.name].show = true
                }else if(item.type == 'qita' && item.name !="jysl格式"){
                    debugger
                    let wmts = new Cesium.UrlTemplateImageryProvider({
                        url : item.url,
                        tilingScheme: new Cesium.GeographicTilingScheme({
                            numberOfLevelZeroTilesX : 2,
                            numberOfLevelZeroTilesY : 1,
                            ellipsoid : Cesium.Ellipsoid.WGS84
                        }),
                        ellipsoid: Cesium.Ellipsoid.WGS84,
                        tileWidth: 512,
                        tilHeight: 512,
                        maximumLevel: 5,
                        enablePickFeatures: false,
                        customTags: {
                            matrix: function(imageryProvider,x,y,level) {
                                return (Array(2).join(0) + level).slice(-2)
                            },
                            row:function(imageryProvider, x, y,level){
                                return (Array(8).join(0) + ((1<<level)- y-1)).slice(-8)
                            },
                            col: function(imageryProvider,x,y,level) {
                                return (Array(8).join(0)+x).slice(-8)
                            }
                        }
                    })
                    
                    viewerImagery[item.name] = viewer.imageryLayers.addImageryProvider(wmts)
                    viewerImagery[item.name].show = false
                }else if(item.type == 'qita' && item.name =="jysl格式"){
                    debugger
                    let wmts = new Cesium.UrlTemplateImageryProvider({
                        url : item.url,
                        tilingScheme: new Cesium.GeographicTilingScheme({
                            numberOfLevelZeroTilesX : 2,
                            numberOfLevelZeroTilesY : 1,
                            ellipsoid : Cesium.Ellipsoid.WGS84
                        }),
                        ellipsoid: Cesium.Ellipsoid.WGS84,
                        tileWidth: 512,
                        tilHeight: 512,
                        maximumLevel: 10,
                        enablePickFeatures: false,
                        customTags: {
                            matrix: function(imageryProvider,x,y,level) {
                                return (Array(2).join(0) + level).slice(-2)
                            },
                            row:function(imageryProvider, x, y,level){
                                return (Array(8).join(0) + ((1<<level)- y-1)).slice(-8)
                            },
                            col: function(imageryProvider,x,y,level) {
                                return (Array(8).join(0)+x).slice(-8)
                            }
                        }
                    })
                    
                    viewerImagery[item.name] = viewer.imageryLayers.addImageryProvider(wmts)
                    viewerImagery[item.name].show = false
                }
            }
        })
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

    const GroupController = new Drawer.GroupController(Cesium,viewer);

    const DrawPrimitive = new Drawer.DrawPrimitive(Cesium,viewer);

    const FlyPlayer = new Player(Cesium,viewer);

    const FlyCompare = new Compare(Cesium,viewer);

    const Detector = new Detect(Cesium,viewer);

    const Menu = new Menus(Cesium,viewer);

    


    function ImageLayersHandler(){
        landMap.show = !landMap.show
    }

    function AddTarget(target){

        if(!target.id){
            return;
        }

        let entity = DrawEntity.Draw({
            id:target.id,
            position:Ce.ToPoint([120,30,500]),
            label:{
                text:'模型名字',
                font:'16px',
                verticalOrigin:Cesium.VerticalOrigin.BOTTOM,
                pixelOffset:Ce.XY2D(0,-20)
            },
            polyline:{
                positions:Ce.ToPointsHeight([])
            },
            billboard:{
                image:'/static/image/junbiao/feiji1.png',
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
            qianting : Ce.CssColor('#06a9e9'),
        },
        displayDistance : {
            feiji : Ce.DisplayNF(300000, 100000000),
            qianting : Ce.DisplayNF(0, 100000000)
        }
    }

    function AddCompare(type, target){
        if(!target.id){
            return;
        }
        let shape = {
            id:target.id,
            name:target.name,
            type:type,
            group:type,
            position:Ce.ToPoint(target.position),
            label:{
                text:target.name,
                font:'16px',
                fillColor:Cesium.Color.BLUE,
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
                // distanceDisplayCondition:typeConfig.displayDistance[type]
            },
            origin:target
        }
        if(type == 'qianting'){
            shape.billboard.width = 20
            shape.billboard.height = 50
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
                // billboard:{
                //     image:`/static/image/junbiao/feiji.png`,
                //     width:60,
                //     height:60,
                //     distanceDisplayCondition:Ce.DisplayNF(0, 300000)
                // },
                // model:{
                //     uri : '/static/SampleData/models/CesiumAir/Cesium_Air.gltf',
                //     minimumPixelSize : 60,
                //     maximumScale : 20000,
                //     distanceDisplayCondition:Ce.DisplayNF(0, 300000)
                // },
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

        if(!target.id){
            return;
        }

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
                    font:'16px',
                    fillColor:Cesium.Color.BLUE,
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

        if(!target.id){
            return;
        }
        DrawEntity.Draw({
            id:target.id,
            name:'磁探目标',
            type:'ct',
            group:'ct',
            position:Ce.ToPoint(target.positions),

            label:{
                text:target.name+'/M',
                font:'16px',
                fillColor:Cesium.Color.BLUE,
                verticalOrigin:Cesium.VerticalOrigin.BOTTOM,
                pixelOffset:Ce.XY2D(0,-20)
            },
            billboard:{
                image:'/static/image/junbiao/wofang.png',
                width:30,
                height:30,
                scaleByDistance:Ce.ScaleNF(2000,2,50000,1)
                // scaleByDistance:Ce.ScaleNF(50000,2,100000,1)
                // distanceDisplayCondition:Ce.DisplayNF(500000, 100000000)
            },
            origin:target
        })
        if(target.Blink){
          Tool.Blink( target.id );
        }

    }




    return {
        viewerImagery,
        viewer,
        Tool,
        Tileset,
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
        Group:GroupController,
    }

}