import {Request, Response} from 'express';
import langModel from '../models/langModel';

export const  getAllLang=async(req:Request, res:Response)=>{

    try {

        let alllang = await langModel.find();
        res.send(alllang);
        
    } catch (error) {
        console.log(error)
    }
}


export const addLang = async(req:Request, res:Response)=>{

    let {lang} = req.query;

    try {

        let searchlang = await langModel.findOne({"lang":lang});
        if(searchlang) return res.json({"message":"Langauge already exists"});

        let addlang = new langModel({
            "lang": lang
        })

        addlang.save();


        res.json({"message":"Language added"});
        
    } catch (error) {
        console.log(error);
    }
}