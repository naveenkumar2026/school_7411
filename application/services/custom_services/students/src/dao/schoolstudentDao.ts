import * as mongoose from 'mongoose';
import schoolstudentModel from '../models/schoolstudent';
import { CustomLogger } from '../config/Logger'


export class schoolstudentDao {
    private schoolstudent = schoolstudentModel;
    constructor() { }
public GpSearch(schoolstudentData, callback){
new CustomLogger().showLogger('info', 'Enter into schoolstudentDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(schoolstudentData).forEach(
                        ([key,value]) => {
                            if(value !== ''){
                                andkey = key;
                                and_obj[andkey] = value;
                            }
                            else{
                                orkey = key;
                                or_obj[orkey] = { $ne: '' }
                            }
                        }
                    );;
;
this.schoolstudent.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from schoolstudentDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(schoolstudentData, callback){
new CustomLogger().showLogger('info', 'Enter into schoolstudentDao.ts: GpUpdate')

this.schoolstudent.findOneAndUpdate({ _id: schoolstudentData._id }, schoolstudentData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from schoolstudentDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into schoolstudentDao.ts: GpGetAllValues')

this.schoolstudent.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from schoolstudentDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetNounById(schoolstudentId, callback){
new CustomLogger().showLogger('info', 'Enter into schoolstudentDao.ts: GpGetNounById')

this.schoolstudent.findById(schoolstudentId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from schoolstudentDao.ts: GpGetNounById');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpDelete(schoolstudentId, callback){
new CustomLogger().showLogger('info', 'Enter into schoolstudentDao.ts: GpDelete')

this.schoolstudent.findByIdAndRemove(schoolstudentId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from schoolstudentDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(schoolstudentData, callback){
new CustomLogger().showLogger('info', 'Enter into schoolstudentDao.ts: GpCreate')
let temp = new schoolstudentModel(schoolstudentData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from schoolstudentDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}