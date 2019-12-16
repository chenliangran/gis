import Tools from '../tools/tools.js';
import { DrawEntity } from '../drawer/Draw.js'; 
import Calculater from '../tools/calculater.js';


const _ = require('lodash');

let Tool = null,
    Drawer = null,
    Ce = null;

let MarkingState = false,
    MarkConfig = null;

let linePositions = [];

let MarkParent = null;

const EventsContainer = {
    EntityClick      : [],
    MouseMove        : [],
    EntityRightClick : [],
    
}

function _Trigger(name,param){

    if( EventsContainer[name] && EventsContainer[name].length ){

        _.forEach(EventsContainer[name],(callback)=>{

            callback(param)
        })
    }
}

function editRange( id ){


}



export class Events{

    constructor(Cesium,viewer){

        this.Cesium = Cesium;
        this.viewer = viewer;

        Tool = new Tools(Cesium, viewer);
        Drawer = new DrawEntity(Cesium, viewer);
        Ce = new Calculater(Cesium, viewer);

        this.Bind()
    }

    Bind(){

        const _this = this;

        let handler = new this.Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas);

        handler.removeInputAction(this.Cesium.ScreenSpaceEventType.LEFT_CLICK);

        handler.setInputAction(function(e){ }, this.Cesium.ScreenSpaceEventType.LEFT_CLICK);


        let currentLine = null,
            currentText = null;

        MarkParent = _this.viewer.entities.add(new this.Cesium.Entity());

        // 处理鼠标点击事件
        handler.setInputAction(function(e) {

            let picked = _this.viewer.scene.pick(e.position),
                _gps = Tool.GetGps(null, e.position);

            if(!_gps){
                return;
            }

            let pos = _this.viewer.scene.camera.pickEllipsoid(e.position, _this.viewer.scene.globe.ellipsoid)

            if(MarkingState){

                if(MarkConfig.shape == 'point' || MarkConfig.shape.indexOf('line') != -1){

                    Drawer.Draw({
                        position : Ce.ToPoint([_gps.lon, _gps.lat, 0]),
                        parent : MarkParent,
                        point : {
                            pixelSize : 10
                        }
                    })
                }

                if(MarkConfig.shape.indexOf('line') != -1){

                    if(linePositions.length){

                        let path = [];

                        let lastP = _.last(linePositions);

                        if(lastP.lon == _gps.lon && lastP.lat == _gps.lat){

                            return;
                        }

                        linePositions.push(_gps);

                        _.forEach(linePositions, (item) => {

                            path.push(item.lon);
                            path.push(item.lat);
                        })

                        currentLine.polyline.positions = new _this.Cesium.CallbackProperty(function(){

                            return Ce.ToPoints(path)
                        },false)

                        if(MarkConfig.shape == 'line_distance'){

                            let midP = Tool.GetCenter([lastP.lon, lastP.lat], [_gps.lon, _gps.lat] )

                            Drawer.Draw({
                                position : Ce.ToPoint(midP),
                                parent : MarkParent,
                                point : {
                                    pixelSize : 5,
                                    color : Ce.CssColor('yellow')
                                },
                                label : {
                                    text : (Ce.Distance([lastP.lon, lastP.lat, 0],[_gps.lon, _gps.lat, 0]) / 1000).toFixed(2) + ' KM',
                                    font : '16px Helvetica',
                                    fillColor:Cesium.Color.RED,
                                    showBackground : true,
                                    verticalOrigin : Cesium.VerticalOrigin.BOTTOM
                                }
                            })
                        }

                    }else{

                        let startPoint = [_gps.lon, _gps.lat, _gps.lon+0.01, _gps.lat+0.01]

                        currentLine = Drawer.Draw({
                            parent : MarkParent,
                            polyline : {
                                positions : new _this.Cesium.CallbackProperty(function(){

                                    return Ce.ToPoints(startPoint)
                                },false),
                                material: Cesium.Color.DEEPSKYBLUE
                            }
                        })

                        linePositions.push(_gps);
                    }
                }

                if(MarkConfig.shape == 'text'){

                    if(document.querySelectorAll('.markLabelEditor').length){
                        alert('请先编辑或删除上一个标注文字')
                        return;
                    }

                    currentText = Drawer.Draw({
                        position : Ce.ToPoint([_gps.lon, _gps.lat, 0]),
                        parent : MarkParent,
                        point : {
                            pixelSize : 5,
                            color : Ce.CssColor('red')
                        },
                        label : {
                            text : '标注',
                            font : '20px',
                            verticalOrigin : Cesium.VerticalOrigin.TOP
                        },
                        isMarkLabel : true
                    })

                    let container = document.createElement('div'),
                        textArea = document.createElement('textarea'),
                        br = document.createElement('br'),
                        cancle = document.createElement('button'),
                        sure = document.createElement('button');

                        container.className = 'markLabelEditor'

                        cancle.innerText = '取消';
                        sure.innerText = '确定';

                        textArea.setAttribute('placeholder', '请在此输入文字,换行请按回车键')
                        textArea.setAttribute('rows', '5')
                        textArea.setAttribute('cols', '20')

                        container.appendChild(textArea);
                        container.appendChild(br);
                        container.appendChild(cancle);
                        container.appendChild(sure);

                        container.style.top = e.position.y + 15 + 'px';
                        container.style.left = e.position.x + 'px';

                        document.body.appendChild(container);

                        sure.onclick = function(){

                            currentText.label.text = textArea.value;
                            document.body.removeChild(container);
                            currentText = null;
                        }

                        cancle.onclick = function(){

                            document.body.removeChild(container);
                            Tool.Remove(currentText);
                            currentText = null;
                        }
                    
                }
            }

            if(picked && picked.id){

                _Trigger('EntityClick',{
                    type : picked.id.type,
                    xy:e.position,
                    gps : _gps,
                    data : picked.id.origin
                })
            }else{

                _Trigger('MapClick',{
                    type : 'MapClick',
                    xy:e.position,
                    gps : _gps,
                })
            }

         }, this.Cesium.ScreenSpaceEventType.LEFT_CLICK);

        // 处理鼠标右键点击
        handler.setInputAction(function(e) {

            let picked = _this.viewer.scene.pick(e.position),
                _gps = Tool.GetGps(null, e.position);

            if(MarkingState){

                
                if(MarkConfig.shape.indexOf('line') != -1){
                    

                    let path = [];
                    _.forEach(linePositions, (item) => {
                        
                        path.push(item.lon);
                        path.push(item.lat);
                    })
                    if(!path.length){return}
                    currentLine.polyline.positions = new _this.Cesium.CallbackProperty(function(){

                        return Ce.ToPoints(path)
                    },false)
                    
                    linePositions = [];
                }
            }

            if(picked && picked.id){

                _Trigger('EntityRightClick',{
                    id:picked.id.id,
                    type : picked.id.type,
                    xy:e.position,
                    gps : picked.id.position ? Tool.GetGps(picked.id.position._value) : _gps,
                    data : picked.id.origin
                })

            }

        }, this.Cesium.ScreenSpaceEventType.RIGHT_CLICK);

         // 处理鼠标移动事件
         handler.setInputAction(function(e) {

             let picked = _this.viewer.scene.pick(e.endPosition);

             let _gps = Tool.GetGps(null,e.endPosition);

             
            if(!_gps){
                return;
            }

             if(MarkingState){

                if(MarkConfig.shape.indexOf('line') != -1){
    
                    if(linePositions.length){

                        let pos = _.cloneDeep(linePositions),
                            path = [];

                        pos.push(_gps);

                        _.forEach(pos, (item) => {

                            path.push(item.lon);
                            path.push(item.lat);
                        })

                        currentLine.polyline.positions = new _this.Cesium.CallbackProperty(function(){

                            return Ce.ToPoints(path)
                        },false)
                    }
                }
            }

             _Trigger('MouseMove',{
                 xy : e.endPosition,
                 gps : _gps
             })

          }, this.Cesium.ScreenSpaceEventType.MOUSE_MOVE);
    }

    Listen( type, callback){

        EventsContainer[type] && EventsContainer[type].push(callback)
    }


}

export class Mark{

    constructor(Cesium,viewer){

        this.Cesium = Cesium;
        this.viewer = viewer;
    }
 
    Start(config){

        MarkingState = true;
        MarkConfig = config;

        linePositions = [];
    }

    Stop(state, config){

        MarkingState = false;

        linePositions = [];
    }

    Clear_point(){

        Tool.RemoveByParent(MarkParent)
    }
    Clear_line(){

        Tool.RemoveByParent(MarkParent)
    }
    Clear_text(){

        Tool.RemoveByParent(MarkParent)
    }
    Clear_distance(){

        Tool.RemoveByParent(MarkParent)
    }   
}