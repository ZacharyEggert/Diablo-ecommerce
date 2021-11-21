import { Request } from "express";
import { Session } from "express-session";

export type RequestWithUser = Request & {
    session: Session & {
        user: any | undefined;
    };
};