import de from "element-ui/src/locale/lang/de";

let GroupRecords = {}

export class DrawEntity{


    constructor(Cesium,viewer){

        this.Cesium = Cesium;
        this.entities = viewer.entities;
        
    }

    Draw(shapeConfig){

        let gname = shapeConfig.group;

        if(gname){

            if(!GroupRecords[gname]){
                GroupRecords[gname] = new this.Cesium.Entity({})
            }

            shapeConfig['parent'] = GroupRecords[gname]
        }

        return this.entities.add(shapeConfig)
    }

    Remove( entity ){
        
        this.entities.remove(entity)
    }

}

export class GroupController{

    constructor(){
        
    }

    GetGroup( gname ){


    }

    SetGroup( gname, state ){

        if(!GroupRecords[gname]){
            GroupRecords[gname] = new this.Cesium.Entity({})
        }
        console.log(GroupRecords[gname]._children);
        GroupRecords[gname].show = state;
        GroupRecords[gname]._children.map(s=>{
            if(s.billboard.image._value.includes("fubiao5")){
                s.show = state;
                console.log(s);
            };
        })
    }

    Show( gname ){

        GroupRecords[gname] && (GroupRecords[gname].show = true)
    }

    Hide( gname ){

        GroupRecords[gname] && (GroupRecords[gname].show = false)
    }

    Remove( gname ){


    }
}

export class DrawPrimitive{

    constructor(Cesium,viewer){

        this.Cesium = Cesium;
        this.primitive = viewer.scene.primitives;
    }

    Draw(shapeConfig){


    }
}
