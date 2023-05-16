import fastify from 'fastify';
import { PrismaClient } from '@prisma/client';

const app = fastify();
const prisma = new PrismaClient();

app.get('/hello', async () => {
    return await prisma.user.findMany();
})

app.listen({
    port: 3333
}).then(() => {
    console.log("HTTP Server running on http://localhost:3333 👍")
})


