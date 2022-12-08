import {Schema, model} from "mongoose";


interface code{
    code:string,
    slug:string,
    date:number,
    lang:string
}


let pasteSchema = new Schema<code>({
    code:{
        type:String
    },
    slug:{
        type:String
    },
    date:{
        type:Number,
        default:Date.now
    },
    lang:{
        type:String
    }
})


let pasteModel = model<code>('Paste', pasteSchema);

export default pasteModel;