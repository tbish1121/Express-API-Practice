import {Request, Response} from "express";

module.exports = (app:any) => {
    const express = require("express");
    let router = express.Router();

    router.get('/', (req: Request, res: Response) => {
        console.log(res);
    })
}