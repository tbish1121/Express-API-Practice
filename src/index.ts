import {Request, Response} from 'express';
import { PrismaClient } from '@prisma/client';
const express = require('express');
const cors = require('cors');


const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

//Routes
require('./routes/user.route')(app);

// //Get Requests

// //Get all users
// app.get('/users', async(req: Request, res: Response) => {
//     const users = await prisma.user.findMany({
//         include: {
//             posts: true,
//         },
//     });
//     res.send(users);
// })

// //Get a specific users info by id
// app.get('/users/:id', async(req: Request, res: Response) => {
//     const userId = parseInt(req.params.id);
//     const user = await prisma.user.findUnique({
//         where: {
//             id: userId
//         },
//         include: {
//             posts: true
//         }
//     })
//     res.send(user);
// })

// //Post Requests

// //Find all posts of a certain user
// app.post('/users/posts/:id', async(req: Request, res: Response) => {
//     const userId = parseInt(req.params.id);
//     const posts = await prisma.post.findMany({
//             where: {
//                 authorId: userId
//             },
//             include: {
//                 author: true
//             }
//         });
//     res.send(posts);
// })

// //Create new user
// app.post('/users', async(req: Request, res: Response) => {
//     const {email} = req.body;
//     const newUser = await prisma.user.create({
//         data: {
//             email: email
//         }
//     })
//     res.send(newUser);
// })

// //Create new post
// app.post('/posts', async(req: Request, res: Response) => {
//     const post = await prisma.post.create({
//         data: {
//             title: 'Very interesting title',
//             author: {
//                 connect: { email: "email5" }
//             }
//         }
//     })
//     res.send(post);
// })

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})