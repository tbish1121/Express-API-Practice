import {Request, Response} from 'express';
const prisma = require('../config/db.config');


exports.getUserPosts = async(req: Request, res: Response) => {
    const userId = parseInt(req.params.id);
    const posts = await prisma.post.findMany({
            where: {
                authorId: userId
            },
            include: {
                author: true
            }
        });
    res.json(posts); 
}

exports.createPost = async(req: Request, res: Response) => {
    const post = await prisma.post.create({
        data: {
            title: 'Very interesting title',
            author: {
                connect: { email: "email5" }
            }
        }
    })
    res.send(post);
}