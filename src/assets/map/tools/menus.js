import Tools from './tools.js';

let Tool = null;

const makeMenuHtml = {

    setRange : function(cylinder, position){

        console.log(cylinder, position)
        let hasExit = document.querySelector('.rangeSetterContainer');

        if(hasExit){

            document.body.removeChild(hasExit)
        }

        let setRangeContainer = document.createElement('div'),
            setRangeInputer   = document.createElement('input'),
            setRangeConfirm   = document.createElement('button'),
            setRangeClose     = document.createElement('button');

            setRangeContainer.className = 'rangeSetterContainer';

            setRangeInputer.setAttribute('type', 'text');
            setRangeInputer.setAttribute('placeholder', '设置探测范围(km)');

            setRangeConfirm.innerText = '确认';
            setRangeClose.innerText = '关闭';

            setRangeConfirm.onclick = function(){

                let newValue = Number(setRangeInputer.value);

                console.log(newValue)

                cylinder.topRadius = newValue * 1000;
                cylinder.bottomRadius = newValue * 1000;

                console.log(cylinder)
            }

            setRangeClose.onclick = function(){

                document.body.removeChild( setRangeContainer );
            }

            setRangeContainer.append( setRangeInputer )
            setRangeContainer.append( setRangeConfirm )
            setRangeContainer.append( setRangeClose )

            document.body.append( setRangeContainer );

            // setRangeContainer.style.position = 'fixed';
            setRangeContainer.style.left = `${position.x}px`;
            setRangeContainer.style.top = `${position.y}px`;
    }
}

export default class Menus {

    constructor( Cesium, viewer){

        Tool = new Tools( Cesium, viewer)
    }

    setRange( id, R, config){

        let entity = Tool.GetId( id );
        
        if( !entity.cylinder ){

            entity.cylinder = {
                length : 1,
                topRadius : 2000,
                bottomRadius : 2000,
            }
        }

        if( entity.cylinder ){

            makeMenuHtml.setRange(entity.cylinder, Tool.ToCanvasXY(entity.position._value))
        }
    }
}