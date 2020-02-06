let productionPORT = window.location.port,
env = {
    development:'http://127.0.0.1:10000',
    //development:'http://192.168.0.1:10000',
    production:'http://'+window.location.hostname +":"+productionPORT
}
  
let currentEnv = 'production';

var globalUrl = {
    host:`${env[currentEnv]}`,
    ws:`${env[currentEnv]}`.replace('https://','').replace('http://',''),
    initGis:env[currentEnv] + ":8090/iserver/services/map-haituWS/rest/maps/haituMap"
}
// var globalUrl = {
//     host:window.location.origin,
//     ws:window.location.origin.replace('https://','').replace('http://',''),
//     initGis:window.location.hostname + ":8090/iserver/services/map-haituWS/rest/maps/haituMap"
// }