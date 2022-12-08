import { Router } from 'express';
import { getAllLang, addLang } from "../controllers/lang.controller";

const langRouter = Router();


// get all lang
langRouter.get("/get", getAllLang);
langRouter.post("/add", addLang);

export default langRouter;