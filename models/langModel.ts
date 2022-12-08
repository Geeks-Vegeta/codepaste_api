import {Schema, model} from "mongoose";


interface lang{
    lang:string
}


let langSchema = new Schema<lang>({
    lang:{
        type:String
    }
})


let langModel = model<lang>('Language', langSchema);

export default langModel;