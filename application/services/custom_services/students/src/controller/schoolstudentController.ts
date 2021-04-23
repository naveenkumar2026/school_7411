import { Request, Response } from 'express';
import { schoolstudentService } from '../service/schoolstudentService';
import { CustomLogger } from '../config/Logger'
let schoolstudent = new schoolstudentService();

export class schoolstudentController {
    
    constructor() { }
    
    public GpSearch(req: Request, res: Response) {
schoolstudent.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into schoolstudentController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from schoolstudentController.ts: GpSearch');
    })}
public GpUpdate(req: Request, res: Response) {
schoolstudent.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into schoolstudentController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from schoolstudentController.ts: GpUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
schoolstudent.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into schoolstudentController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from schoolstudentController.ts: GpGetAllValues');
    })}
public GpGetNounById(req: Request, res: Response) {
schoolstudent.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into schoolstudentController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from schoolstudentController.ts: GpGetNounById');
    })}
public GpDelete(req: Request, res: Response) {
schoolstudent.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into schoolstudentController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from schoolstudentController.ts: GpDelete');
    })}
public GpCreate(req: Request, res: Response) {
schoolstudent.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into schoolstudentController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from schoolstudentController.ts: GpCreate');
    })}


}