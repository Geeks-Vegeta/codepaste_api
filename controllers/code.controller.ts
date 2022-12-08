import {Request, Response} from 'express';
import pasteModel from '../models/pasteModel';

export const getCodeBySlug=(req:Request, res:Response)=>{

    let {slug} = req.query;

    try {
        let data = pasteModel.findOne({"slug":slug});
        if(!data) return res.status(404).json({"message":"No match found"});
        res.send(data);
        
    } catch (error) {
        console.log(error);
    }
}


export const addCodeBySlug=(req:Request, res:Response)=>{

    let {code, lang} = req.body;
    let slug:string = Math.random().toString(36).slice(-10);

    try {

        let data = new pasteModel({
            "code":code,
            "lang":lang,
            "slug":slug
        })
        data.save();
        res.json({"message":"slug created"});
        
    } catch (error) {
        console.log(error);
    }
}