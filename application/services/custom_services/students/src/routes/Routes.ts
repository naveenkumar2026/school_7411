import { Request, Response, NextFunction } from "express";
import { schoolstudentController } from '../controller/schoolstudentController';


export class Routes {
    private schoolstudent: schoolstudentController = new schoolstudentController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/schoolstudent/get/search').get(this.schoolstudent.GpSearch);
app.route('/schoolstudent').put(this.schoolstudent.GpUpdate);
app.route('/schoolstudent').get(this.schoolstudent.GpGetAllValues);
app.route('/schoolstudent/:id').get(this.schoolstudent.GpGetNounById);
app.route('/schoolstudent/:id').delete(this.schoolstudent.GpDelete);
app.route('/schoolstudent').post(this.schoolstudent.GpCreate);
     }

}