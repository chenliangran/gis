import Calculater from '../tools/calculater.js';

const _ = require('lodash');


let Ce = null;

let sourceData = []

let playList = [];

let playTimer = null;

let onPause     = false,
    Direction   = 'forward';


function _build(data,viewer){

    _.forEach( data, (single, i) => {

        playList.push({
            id:single.data.id,
            nowIndex:0,
            parent:single.entity,
            pathConfig:single.data.pathConfig,
            timeRange:single.data.timeRange,
            positions:single.data.positions,
            path:[]
        })
    } )

}

function _playing(item,now){

    // if(_checkInrange( item.timeRange, now)){

        

        if(item.nowIndex >= item.positions.length){
            item.nowIndex = 0;
        }else if( item.nowIndex < 0 ){
            item.nowIndex = item.positions.length-1;
        }


        _UpdatePosition(item)

        
        _CalcPathArray(item)
        
        if( Direction == 'forward'){

            item.nowIndex += 1;
        }else if( Direction == 'backward'){

            item.nowIndex -= 1;
        }

        _UpdatePath(item)

    // }else{

    //     console.log()
    // }

}

function _CalcPathArray(item){

    if(item.nowIndex == 0){
        item.path = [];
    }
    
    let inds = item.nowIndex;

    if( Direction == 'forward'){

        if(item.path.length >= item.pathConfig.len){

            item.path.shift()
        }
        
        item.path.push(item.positions[inds].position);
    }else if( Direction == 'backward'){

        item.path.pop();
        item.positions[inds-item.pathConfig.len+1] && item.path.unshift(item.positions[inds-item.pathConfig.len+1].position)
    }

}

function _UpdatePosition(item){


    if( item.parent.position ){

            let inds = item.nowIndex;
            
            let _pos = item.positions[inds].position;

            item.parent.position = Ce.ToPoint(_pos);


            if( item.positions[inds+1] ){

                let angle = Ce.CalcAngle( _pos, item.positions[inds+1].position );

                let _orientation = Ce.ToOrientation(_pos, Ce.ToDegree(70-angle),0,0);
                
                item.parent.orientation = _orientation;
                // item.parent.billboard.rotation = angle
            }

    }
    
}

function _UpdatePath(item){

    if( item.parent.polyline ){

            let _pos = _.flatten(item.path);

            item.parent.polyline.positions = new Cesium.CallbackProperty(function(){
                return Ce.ToPointsHeight( _pos )
            },true);
    
    }
}

function _checkInrange(timeRange, tick){

    // console.log(timeRange, tick)
    return true;
}


export default class Player{


    constructor(Cesium,viewer){

        this.Cesium   = Cesium;
        this.viewer   = viewer;

        Ce = new Calculater(Cesium)
    }


    

    Add( playData ){

        sourceData.push( playData );
        _build( sourceData, this.viewer );
    }

    Remove( id ){

        let inds = _.findIndex( sourceData, (item)=>{

            return item.id == id;
        })

        if( inds != -1 ){

            sourceData.splice( inds, 1);
        }
    }

    Play(){

        !playTimer && (playTimer = setInterval(()=>{

            if(onPause) return;

            _.forEach(playList, (item)=>{

                _playing(item, this.viewer.clock)
            })

        },1000))
        
    }

    Pause(state = true){

        onPause = state;
    }

    Stop(){

        clearInterval(playTimer);

        playTimer = null;

        _.forEach(playList, (item)=>{

            item.nowIndex = 0;
        })
    }


    SetDirection( direction = 'forward' ){

        Direction = direction;
    }

    Faster( level ){


    }

    Slower( level ){


    }

    

}

