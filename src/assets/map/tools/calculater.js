const _ = require('lodash');

export default class Calculater{


    constructor(Cesium){

        this.Cesium = Cesium;
    }

    ToPoint( p ){

        p = _.map( p, (item) => {
            return Number(item)
        })

        return this.Cesium.Cartesian3.fromDegrees(p[0], p[1], p[2] || 0)
    }

    ToPoints( p ){

        p = _.map( p, (item) => {
            return Number(item)
        })

        return this.Cesium.Cartesian3.fromDegreesArray( p );
    }

    ToPointsHeight( p ){

        if( (p.length == 0) || (p.length % 3 !=0) ){

            return undefined;
        }

        p = _.map( p, (item) => {
            return Number(item)
        })

        return this.Cesium.Cartesian3.fromDegreesArrayHeights( p );
    }

    ToHPR( h=0, p=0, r=0){

        return new this.Cesium.HeadingPitchRoll(h, p, r);
    }

    ToOrientation(position,h,p,r){

        let hpr = this.ToHPR(h,p,r),
            pos = this.ToPoint(position);

        return Cesium.Transforms.headingPitchRollQuaternion(pos, hpr);
    }

    ToDegree( radians ){

        return Cesium.Math.toDegrees( Number(radians) )
    }

    ToRadians( degrees ){

        return Cesium.Math.toRadians( Number(degrees) )
    }

    Distance( p1, p2 ){

        return this.Cesium.Cartesian3.distance(this.ToPoint(p1), this.ToPoint( p2 ));
    }

    GetAngle( p1, p2 ){

        return this.Cesium.Cartesian3.angleBetween( this.ToPoint(p1), this.ToPoint(p2) )
    }

    GetGps( cartesian, radians ){

        let _gps = this.Cesium.Cartographic.fromCartesian(cartesian),
            _lon = _gps.longitude,
            _lat = _gps.latitude;

        let lon = radians ? _lon : this.ToDegree( _lon ),
            lat = radians ? _lat : this.ToDegree( _lat );

        return {
            lon,lat
        }
    }

    XY2D( x, y){

        return new this.Cesium.Cartesian2(x, y);
    }

    ScaleNF(near, nearValue, far, farValue){

        return new this.Cesium.NearFarScalar(near||0, nearValue||1, far||10000000, farValue||1)
    }

    DisplayNF(near, far){

        return new this.Cesium.DistanceDisplayCondition(near, far)
    }

    CssColor( color ){

        return this.Cesium.Color.fromCssColorString(color)
    }

    DynamicPositions( value ){

        return new this.Cesium.CallbackProperty(function(position){

            return this.ToPoint(value)
        },true)
    }

    CalcAngle(p1, p2){  

        const Rc = 6378137, 
              Rj = 6356725,
              PI = Math.PI;

        let lat1 = p1[1],
            lat2 = p2[1],
            lon1 = p1[0],
            lon2 = p2[0];

        let EC = Rj + (Rc-Rj) * (90-lat1) / 90,
            Ed = EC * Math.cos(lat1 / 180 * PI);

        let dx = (lon2 - lon1) * Ed,
            dy = (lat2 - lat1) * EC;

        if( dx == 0 && dy == 0 ) {
            return 0;
        }

        if( dx ==0 ){
            return dy > 0 ? 180.0 : 0.0;
        }

        if( dy == 0 ){
            return dx > 0 ? 270.0 : 90.0;
        }

        let ang = Math.atan( Math.abs( dx/dy ) ) * 180/PI;

        let x = lon2 - lon1, y = lat2 - lat1;

        if( x > 0 && y < 0 ){
            ang = ( 90 - ang ) + 90;
        }else if( x <= 0 && y < 0 ){
            ang = ang + 180;
        }else if( x < 0 && y >= 0 ){
            ang = ( 90 - ang ) + 270;
        }

        return ang;
    }

}