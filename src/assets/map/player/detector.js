import Calculater from '../tools/calculater.js';
import Tools from '../tools/tools.js';
import { setTimeout } from 'core-js';

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
        //  debugger
        if(!target.id){
            return;
        }

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
                        text:target.type+target.origin.sptdh,
                        // text:target.origin.fbbh.slice(-3)+'/S',
                        font:'16px bold',
                        fillColor:Cesium.Color.BLUE,
                        verticalOrigin:Cesium.VerticalOrigin.BOTTOM,
                        pixelOffset:Ce.XY2D(0,40)
                    },
                    billboard:{
                        image:'/static/image/junbiao/fubiao1.png',
                        width:30,
                        height:30,
                        scaleByDistance:Ce.ScaleNF(2000,2,50000,1),
                        // color:Ce.CssColor('grey')
                    },
                    cylinder:{
                        length:1,
                        topRadius:target.R || 2000,
                        bottomRadius:target.R || 2000,
                        fill:false,
                        outline:true,
                        outlineWidth:4,
                        outlineColor:Ce.CssColor('red')
                    },
                    origin:target
                })
            });

            if(target.blink){

                Tool.Blink( target.id )
            }
        }

    }

    Update( ups ){

    }

    Lights( detectorIds ){
        // console.log(detectorIds);
        if(!detectorIds.length){
            return
        }

        _.forEach(sourceData, (single) => {
            let id = single.target.id;
            let detector = Tool.GetId(id);
        //    if(single.target.origin.fbzt == "成活"){
        //        detector.billboard.image = '/static/image/junbiao/fubiao1.png'
        //    } else
            if(single.target.origin.fbzt == "死亡"){
               detector.billboard.image = '/static/image/junbiao/fubiao5.png'
           } else if(single.target.origin.fbzt == "失联"){
               detector.billboard.image = '/static/image/junbiao/fubiaosl.png'
           }
            // let id = single.target.id;
            //
            // let onShow = _.filter(detectorIds, (tarId) => {
            //     return tarId == id
            // })
            //
            // let detector = Tool.GetId(id);
            //
            // if(!detector){
            //     return;
            // }
            // if(onShow.length){
            //     // detector.billboard.color = Ce.CssColor('white')
            //     detector.billboard.image = '/static/image/junbiao/fubiao1.png'
            // }else{
            //     // detector.billboard.color = Ce.CssColor('grey')
            //     detector.billboard.image = '/static/image/junbiao/fubiao5.png'
            // }
        })
        
    }

    LinkOn( detectorId, link ){
        let detector = Tool.GetId(detectorId);
        //  debugger
        if(!detector){
            return
        }

        link.positions = _.map(link.positions, (item) => {
            return (item).toFixed(2)
        })
        let detecPosition = Tool.GetGps(detector.position._value);
        let linePosition = []
        if(detecPosition){
            linePosition = [detecPosition.lon, detecPosition.lat].concat(link.positions);
        }else{
            linePosition = detector.origin.positions.concat(link.positions);
        }

        
        // let ToName = Ce.ToName(linePosition)
    
      


        let linked = Tool.GetId(link.id);

    
        if(linked){

            if(!linked.polyline){
                return;
            }

            let _lpos = Ce.ToPoints(linePosition)
            

            linked.polyline.positions = new Cesium.CallbackProperty(function(){

                return _lpos
            },false) 
        }else{
            var name = ''
            for(let key in link.origin){
                
                if(key.indexOf('dwfbxh') != -1){
                    if(Tool.GetId('detector_'+link.origin[key])){
                        name += Tool.GetId('detector_'+link.origin[key])._origin.origin.sptdh+'/'
                        // console.log(Tool.GetId('detector_'+link.origin[key])._origin.origin.sptdh)
                    }
                    
                }
            }
            DrawEntity.Draw({
                id:link.id,
                name:'浮标目标',
                position:Ce.ToPoint(link.positions),
                type:'detector_mb',
                group:'detector_mb',
                label:{
                    font:'12px bold',
                    text:`${name}S\n${((Ce.Distance(detector.origin.positions, link.positions))/1000).toFixed(2)}km`,
                    fillColor:Cesium.Color.BLUE,
                    verticalOrigin:Cesium.VerticalOrigin.BOTTOM,
                    pixelOffset:Ce.XY2D(0,-10)
                },
                billboard:{
                    image:'/static/image/junbiao/wofangss.png',
                    width:30,
                    height:30,
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

            setTimeout(()=>{
                // Tool.Remove(Tool.GetId(link.id))
                let _line = Tool.GetId(link.id);
                _line.polyline.show = false;
            },3000)
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

    SetRange(range = 2){

        if(range < 0) return;
        
        _.forEach(sourceData, (item) => {
            item.entity.cylinder.topRadius = range * 1000;
            item.entity.cylinder.bottomRadius = range * 1000;
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