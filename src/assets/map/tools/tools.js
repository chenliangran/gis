import Calculater from '../tools/calculater.js';
import * as Drawer from '../drawer/Draw.js';
import * as _ from 'lodash';

let Ce = null,
    MarkId = 'reactmark'

export default class Tools{


    constructor(Cesium,viewer){

        this.Cesium = Cesium;
        this.viewer = viewer;
        this.drawer = new Drawer.DrawEntity(Cesium,viewer);

        Ce = new Calculater(Cesium)
    }

    GetGps( cartesian, xy ){

        if(!cartesian && !xy){
            return false
        }

        if( !cartesian ){

            cartesian = this.viewer.scene.camera.pickEllipsoid(xy, this.viewer.scene.globe.ellipsoid);
        }


        if (this.Cesium.defined(cartesian)) {

            let cartographic = this.Cesium.Cartographic.fromCartesian(cartesian, this.viewer.scene.globe.ellipsoid);

            let lon =  Number( Ce.ToDegree(cartographic.longitude ).toFixed(2));
            let lat = Number( Ce.ToDegree(cartographic.latitude).toFixed(2));
            let height = Number( cartographic.height.toFixed(2) );

            return {
                lon,lat,height
            }
        }

        return false;
    }

    GetCenter( p1, p2 ){

        let lon = (p1[0] - p2[0]) > 0 ? p1[0] - ((p1[0] - p2[0]) / 2) : p1[0] + ((p2[0] - p1[0]) / 2),
            lat = (p1[1] - p2[1]) > 0 ? p1[1] - ((p1[1] - p2[1]) / 2) : p1[1] + ((p2[1] - p1[1]) / 2)

        return [lon, lat]
    }

    Blink( id, duration=5000 ){

        let entity = this.GetId( id );

        if( entity ){

            entity.billboard && (entity.billboard.color = Ce.CssColor('red'))

            let blink = setInterval(()=>{

                entity.show = !entity.show;
            },500)

            setTimeout(()=>{

                clearInterval( blink );
                entity.show = true;
                
                entity.billboard && (entity.billboard.color = Ce.CssColor('white'))
            },duration)
        }
    }

    GetId( id ){

        return this.viewer.entities.getById( id );
    }


    Focus( id ){

        this.viewer.trackedEntity = id ? this.GetId( id ) : undefined;
    }

    FlyTo( position, type, mark ){

        let _destination = null;

        switch( type ){

            case 'rect' :
                    _destination = this.Cesium.Rectangle.fromDegrees( position[0], position[1], position[2], position[3] );

                    if(mark){

                        this.drawer.Draw({
                            id : MarkId,
                            rectangle : {
                                coordinates : _destination,
                                fill : false,
                                outline : true,
                                outlineColor : Ce.CssColor('aqua')
                            }
                        })
                    }
                break;

            default :
                _destination = Ce.ToPoint( position )
        }

        this.viewer.camera.flyTo({
            destination : _destination
        });
    }

    ToCanvasXY( cartesian ){

        return this.viewer.scene.cartesianToCanvasCoordinates( cartesian )
    }

    Remove( ent ){

        return this.viewer.entities.remove(ent)
    }

    RemoveByParent( parent ){

        _.forEach(parent._children, (ent) => {

            this.Remove(ent)
        })

        parent._children = [];
    }

    Grid( state ){

        let imageProvider = this.viewer.imageryLayers;

        if(state){

            imageProvider.addImageryProvider(new Cesium.GridImageryProvider({
                cells: 4,
                color: Ce.CssColor('red'),
                glowColor: Ce.CssColor('transparent'),
                backgroundColor: Ce.CssColor('transparent'),
            }))
        }else{
            let _gridLayer = imageProvider.get(imageProvider.length-1)
            imageProvider.remove(_gridLayer)
            console.log(imageProvider)
        }
    }
}