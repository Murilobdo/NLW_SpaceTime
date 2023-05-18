import fastify from 'fastify';
import { memoriesRoutes } from './routes/memorys'

const app = fastify()

app.register(memoriesRoutes)

app.listen({ port: 3333 })
    .then(() => {
        console.log("Server running on http://localhost:3333")
    })