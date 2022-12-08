import { Router } from 'express';
import { getCodeBySlug, addCodeBySlug } from "../controllers/code.controller";

const codeRouter = Router();


// get all lang
codeRouter.get("/get", getCodeBySlug);
codeRouter.post("/add", addCodeBySlug);

export default codeRouter;