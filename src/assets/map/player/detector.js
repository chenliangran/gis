import Calculater from '../tools/calculater.js';
import Tools from '../tools/tools.js';

const Drawer     = require('../drawer/Draw.js');

const _ = require('lodash');

let Ce = null,
    Tool = null,
    DrawEntity = null;

let sourceData = [];


const colorLevel = [
    'rgb(12,173,214)',
    'rgb(207,215,15)',
    'rgb(223,61,66)',
]

export default class Detect{

    constructor(Cesium,viewer){

        this.Cesium   = Cesium;
        this.viewer   = viewer;

        Ce = new Calculater(Cesium);

        Tool = new Tools(Cesium,viewer);

        DrawEntity = new Drawer.DrawEntity(Cesium,viewer);

    }

    Add( target ){

        target.positions = _.map(target.positions, (item) => {
            return (item).toFixed(2)
        })

        if(Tool.GetId(target.id)){

            // this.Update(target)
        }else{
            sourceData.push({
                target,
                entity : DrawEntity.Draw({
                    id:target.id,
                    name:'浮标',
                    position:Ce.ToPoint(target.positions),
                    type:'detector',
                    group:'detector',                  
                    label:{
                        text:target.origin.fbbh.slice(-3)+'/S',
                        font:'15px',
                        fillColor:Cesium.Color.BLUE,
                        verticalOrigin:Cesium.VerticalOrigin.BOTTOM,
                        pixelOffset:Ce.XY2D(0,-20)
                    },
                    billboard:{
                        image:'/static/image/junbiao/fubiao1.png',
                        width:30,
                        height:30,
                        scaleByDistance:Ce.ScaleNF(2000,2,50000,1)
                    },
                    // cylinder:{
                    //     length:1,
                    //     topRadius:target.R || 2000,
                    //     bottomRadius:target.R || 2000,
                    //     fill:false,
                    //     outline:true,
                    //     outlineWidth:2,
                    //     outlineColor:Ce.CssColor('aqua')
                    // },
                    origin:target
                })
            });

            Tool.Blink( target.id )
        }

    }

    Update( ups ){

    }

    LinkOn( detectorId, link ){

        let detector = Tool.GetId(detectorId);

        if(!detector){
            return
        }

        link.positions = _.map(link.positions, (item) => {
            return (item).toFixed(2)
        })

        let detecPosition = Tool.GetGps(detector.position._value);

        let linePosition = [detecPosition.lon, detecPosition.lat].concat(link.positions);


        let linked = Tool.GetId(link.id);

    
        if(linked){

            let _lpos = Ce.ToPoints(linePosition)

            linked.polyline.positions = new Cesium.CallbackProperty(function(){

                return _lpos
            },false) 
        }else{


            DrawEntity.Draw({
                id:link.id,
                name:'浮标目标',
                position:Ce.ToPoint(link.positions),
                type:'detector_mb',
                group:'detector_mb',
                label:{
                    text:'浮标目标',
                    font:'15px',
                    fillColor:Cesium.Color.BLUE,
                    verticalOrigin:Cesium.VerticalOrigin.BOTTOM,
                    pixelOffset:Ce.XY2D(0,-10)
                },
                billboard:{
                    image:'/static/image/junbiao/fubiaomb.png',
                    width:40,
                    height:40,
                    // scaleByDistance:Ce.ScaleNF(2000,2,50000,1)
                },
                polyline:{
                    show : true,
                    positions : Ce.ToPoints(linePosition),
                    material : new Cesium.PolylineDashMaterialProperty({
                                    color : Ce.CssColor('red'),
                                    dashLength: 8.0
                                })
                },
                origin:link
            })
        }
    }

    Detect( positions ){

        _.forEach(sourceData, (detector)=>{

            let isIn = 0,level = 0;

            _.forEach(positions, (pos)=>{

                let distance = Ce.Distance(detector.target.positions, pos);
                if(distance <= detector.target.R){
                    isIn++;

                    let split = detector.target.R / 3;

                    if(distance <= split){
                        level = 2;
                    }else if(distance <= split*2){
                        level = 1;
                    }

                }
            })

            if(isIn){

                this.IsIn(detector.entity, level)
            }else{

                this.NotIn(detector.entity)
            }

        })
    }

    IsIn( entity, level ){

        let cylinder = entity.cylinder;

        if(cylinder['level'] == level){
            return
        }

        cylinder.outlineColor = Ce.CssColor(colorLevel[level]);
        cylinder.outline = true;
        cylinder.material = Ce.CssColor(colorLevel[level]).withAlpha(0.3),
        cylinder.fill = true;
        cylinder['level'] = level;
    }

    NotIn( entity ){

        let cylinder = entity.cylinder;

        if(!cylinder.fill._value){
            return
        }

        cylinder.outlineColor = Ce.CssColor('aqua');
        cylinder.outline = false;
        cylinder.fill = false;
    }
}