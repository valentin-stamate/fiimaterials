import {NextFunction, Request, Response} from "express";
import {Service} from "../service/service";
import {ResponseError} from "./middleware";
import {ResponseMessage, StatusCode} from "./rest.utils";
import {UploadedFile} from "express-fileupload";
import {Feedback} from "../models";

export class Controller {

    static async getMaterials(req: Request<any>, res: Response, next: NextFunction) {
        try {
            const data = await Service.getMaterials();
            res.end(JSON.stringify(data));
        } catch (err) {
            next(err);
        }
    }

    static async getFeedback(req: Request<any>, res: Response, next: NextFunction) {
        try {
            const data = await Service.getFeedback();
            res.end(JSON.stringify(data));
        } catch (err) {
            next(err);
        }
    }

    static async addFeedback(req: Request<any>, res: Response, next: NextFunction) {
        try {
            const body = req.body;

            const data: Feedback = {
                name: body.name,
                feedback: body.feedback,
                response: '',
                solved: false,
                createdAt: new Date(),
            };

            await Service.addFeedback(data);

            res.statusCode = StatusCode.CREATED;
            res.end();
        } catch (err) {
            next(err);
        }
    }

    static async refreshMaterials(req: Request<any>, res: Response, next: NextFunction) {
        if (!req.files) {
            next(new ResponseError(ResponseMessage.INCOMPLETE_FORM, StatusCode.BAD_REQUEST));
            return;
        }

        const file = req.files.file as UploadedFile;

        if (file === undefined) {
            next(new ResponseError(ResponseMessage.INCOMPLETE_FORM));
            return;
        }

        try {
            await Service.refreshMaterials(file);

            res.statusCode = StatusCode.CREATED;
            res.end()
        } catch (err) {
            next(err);
        }
    }

}