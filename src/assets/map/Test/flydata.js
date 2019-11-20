// base on ISOString Date Format;

let _positions = []

let secendCount = 10,
    fps = 24,
    i = 0,
    secend = 1,
    lon = 100,
    lat = 30;

for(;i<secendCount*fps;i++ ){

    if(secend>60){
        secend = 0
    }

    _positions.push({
        time:`2019-06-30T03:16:${secend<10?'0':''}${secend}.000Z`,
        position:[lon+=0.1,lat+=(i%2==0?-0.1:0.1),5000]
        // position:[lon+=0.1,lat,5000]
    })
    secend ++;
}



let Fly = {
    id:'targetId_1',
    timeRange:["2019-06-30T03:16:37.946Z","2019-06-30T08:16:37.946Z"],
    pathConfig:{
        mode:'',
        len:10
    },
    positions:_positions
}

/**
 * 
 * [{
        time:"2019-06-30T03:16:37.946Z",
        position:[120,30,5000]
    },{
        time:"2019-06-30T03:20:37.946Z",
        position:[121,30,10000]
    },{
        time:"2019-06-30T03:40:37.946Z",
        position:[122,30,10000]
    },{
        time:"2019-06-30T04:16:37.946Z",
        position:[123,30,8000]
    },{
        time:"2019-06-30T05:16:37.946Z",
        position:[124,31,4000]
    },{
        time:"2019-06-30T06:16:37.946Z",
        position:[126,33,1000]
    },{
        time:"2019-06-30T07:16:37.946Z",
        position:[128,30,1000]
    },{
        time:"2019-06-30T08:16:37.946Z",
        position:[130,27,1000]
    },]
 */

export default Fly;