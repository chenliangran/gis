import Calculater from '../tools/calculater.js';
import Tools from '../tools/tools.js';

import Params from "../params.js";


const Drawer     = require('../drawer/Draw.js');

const _ = require('lodash');

let Ce = null,
    Tool = null,
    DrawEntity = null;

let sourceData = {}

export default class Player{

    constructor(Cesium,viewer){

        this.Cesium   = Cesium;
        this.viewer   = viewer;

        Ce = new Calculater(Cesium);
        Tool = new Tools(Cesium,viewer)
        DrawEntity = new Drawer.DrawEntity(Cesium,viewer);
    }

    isSamePoint(p1, p2){

        
        return p1[0] == p2[0]
                && p1[1] == p2[1]
                && p1[2] == p2[2]

    }

    Add( target ){

        if(!target.id){
            return;
        }

        sourceData[target.id] = target
    }

    Update( id, position, origin, callback ){
        // console.log(window.Map.Tool.GetId(id))    
        let target = sourceData[id];
        if( target ){

            if(!origin) return;

            target.entity.origin = origin || target.entity.origin;

            let lastPoints = _.takeRight(target.path,3);


            if(this.isSamePoint(lastPoints, position)){

                return;
            }
           
            if(target.path.length > Params.path.len){
                target.path.shift()
                target.path.shift()
                target.path.shift()
            }
            target.path.push(position[0])
            target.path.push(position[1])
            target.path.push(position[2])

            let _pos = Ce.GetGps(target.entity.position._value);

            target.entity.position = Ce.ToPoint(position);

            let angle = Ce.CalcAngle(  [_pos.lon,_pos.lat], position );

            let _orientation = Ce.ToOrientation(position, Ce.ToRadians( Number(origin.hjj || origin.hx) - 90 ), 0, 0);
                
            target.entity.orientation = _orientation;
            if(origin.hjj || origin.hx){
                target.entity.billboard.rotation = Ce.ToRadians( 360 - Number(origin.hjj || origin.hx));
            }
            let _lpos = Ce.ToPointsHeight( target.path );

            target.entity.polyline.positions = new Cesium.CallbackProperty(function(){

                return _lpos
            },false)
            
            if(callback){

                let info = {
                    xy : Tool.ToCanvasXY(Ce.ToPoint(position)),
                    data : origin,
                }
                
                callback(info)
            }
        }
    }

    ClearPath( id ){



        if( id ){

            let target = sourceData[id];
            if( target ){

                target.entity.polyline.positions = undefined;
                target.path = [];
            }
        }else{

            _.forEach( sourceData, (source, id)=>{

                source.entity.polyline.positions = undefined;
                source.path = [];
            })
        }
    }

    Fire( id, position ){

        let target = sourceData[id];

        let _pos = Ce.GetGps(target.entity.position._value);

        let angle = Ce.ToRadians( 180-Ce.CalcAngle( position, [_pos.lon,_pos.lat] ) );


        let fps = 10,
            speed = 0.1,
            dirX = 1,
            dirY = 1;

        if( _pos.lon > position[0] ){

            dirX = -1
        }

        if( _pos.lat > position[1] ){

            dirY = -1
        }

        let firePoint = [_pos.lon,_pos.lat];

        let boom = DrawEntity.Draw({
            position:new Cesium.CallbackProperty(function(){

                return Ce.ToPoint( firePoint )
            },false),
            billboard:{
                image:'/static/image/arrow_up2.png',
                width:60,
                height:60,
                rotation:angle,
                scaleByDistance:Ce.ScaleNF(0,2,1000000,0.5)
            }
        })
        
        let _wayLon = _pos.lon,
            _wayLat = _pos.lat,
            _arrive = 0;
        
        let timer = setInterval(()=>{

            if(dirX>0){

                if(_wayLon >= position[0]){
                    _arrive++
                }else{
                    _wayLon += (dirX * speed)
                }
            }else{

                if(_wayLon <= position[0]){
                    _arrive++
                }else{
                    _wayLon += (dirX * speed)
                }
            }

            if(dirY>0){

                if(_wayLat > position[1]){
                    _arrive++
                }else{
                    _wayLat += (dirY * speed)
                }
            }else{

                if(_wayLat <= position[1]){
                    _arrive++
                }else{
                    _wayLat += (dirY * speed)
                }
            }

            firePoint = [_wayLon,_wayLat];

            if(Math.abs(_wayLon - position[0])<=0.5 && Math.abs(_wayLat - position[1])<=0.5 ){
                clearInterval(timer)
                DrawEntity.Remove(boom)
            }

        },1000/fps)

        // setTimeout(() => {
        //     clearInterval(timer)
        // }, 5000);
        
    }
}