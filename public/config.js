let env = {
     development:'http://127.0.0.1',
   // development:'http://192.168.0.111',
    production:'http://'+window.location.hostname
},PORT = '10000';

let currentEnv = 'production';

var globalUrl = {
    host:`${env[currentEnv]}:${PORT}`,
    ws:`${env[currentEnv]}:${PORT}`.replace('https://','').replace('http://',''),
    initGis:env[currentEnv] + ":8090/iserver/services/map-haituWS/rest/maps/haituMap"
}
// var globalUrl = {
//     host:window.location.origin,
//     ws:window.location.origin.replace('https://','').replace('http://',''),
//     initGis:window.location.hostname + ":8090/iserver/services/map-haituWS/rest/maps/haituMap"
// }