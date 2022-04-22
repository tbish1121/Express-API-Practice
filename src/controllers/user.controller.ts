import {Request, Response} from 'express';
const prisma = require('../config/db.config');

exports.createUser = async(req: Request, res: Response) => {
    const {email} = req.body;
    const newUser = await prisma.user.create({
        data: {
            email: email
        }
    })
    res.send(newUser);
}

exports.getAllUsers = async(req: Request, res: Response) => {
    const users = await prisma.user.findMany();
    res.json(users);
}

exports.getUserByID = async(req: Request, res: Response) => {
    const userId = parseInt(req.params.id);
    const user = await prisma.user.findUnique({
        where: {
            id: userId
        },
        include: {
            posts: true
        }
    })
    res.json(user);
}

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
    const {title, content, published, email} = req.body;

    const post = await prisma.post.create({
        data: {
            title: title,
            published: published,
            content: content,
            author: {
                connect: { email: email }
            }
        }
    })
    res.send(post);
}
