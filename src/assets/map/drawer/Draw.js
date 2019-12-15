let GroupRecords = {}


export class DrawEntity{


    constructor(Cesium,viewer){

        this.Cesium = Cesium;
        this.entities = viewer.entities;
        
    }

    Draw(shapeConfig){
        // debugger  
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

    constructor(Cesium,viewer){

        this.Cesium = Cesium;
        this.entities = viewer.entities;
    }

    GetGroup( gname ){


    }

    SetGroup( gname, state ){
        if(gname == 'detector_sl'){//失联浮标
            GroupRecords['detector']._children.map(s=>{
                if(s.billboard.image._value.includes("fubiaosl")){
                    s.show = state;
                };
            })
            return
        }
        if(!GroupRecords[gname]){
            GroupRecords[gname] = new this.Cesium.Entity({})
        }
        GroupRecords[gname].show = state;

    }

    Show( gname ){
        GroupRecords[gname] && (GroupRecords[gname].show = true)
    }

    Hide( gname ){
        GroupRecords[gname] && (GroupRecords[gname].show = false)
    }

    Remove( gname ){


    }

    RemoveByGroup( gname ){

        let parent = GroupRecords[gname];
        
        if(!parent){
            return;
        }
        _.forEach(parent._children, (ent) => {

            this.entities.remove(ent)
        })

        parent._children = [];

        this.entities.remove(parent);

        delete GroupRecords[gname]
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
