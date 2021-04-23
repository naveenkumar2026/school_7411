import { Request, Response } from 'express';
import {schoolstudentDao} from '../dao/schoolstudentDao';
import { CustomLogger } from '../config/Logger'
let schoolstudent = new schoolstudentDao();

export class schoolstudentService {
    
    constructor() { }
    
    public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into schoolstudentService.ts: GpSearch')
     const  schoolstudentData = req.query;
     schoolstudent.GpSearch(schoolstudentData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from schoolstudentService.ts: GpSearch')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into schoolstudentService.ts: GpUpdate')
     const  schoolstudentData = req.body;
     schoolstudent.GpUpdate(schoolstudentData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from schoolstudentService.ts: GpUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into schoolstudentService.ts: GpGetAllValues')
     
     schoolstudent.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from schoolstudentService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into schoolstudentService.ts: GpGetNounById')
     const  schoolstudentId = req.params.id;
     schoolstudent.GpGetNounById(schoolstudentId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from schoolstudentService.ts: GpGetNounById')
         callback(response);
         });
    }
public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into schoolstudentService.ts: GpDelete')
     const  schoolstudentId = req.params.id;
     schoolstudent.GpDelete(schoolstudentId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from schoolstudentService.ts: GpDelete')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into schoolstudentService.ts: GpCreate')
     const  schoolstudentData = req.body;
     schoolstudent.GpCreate(schoolstudentData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from schoolstudentService.ts: GpCreate')
         callback(response);
         });
    }


}