import { FastifyInstance } from "fastify";
import { prisma } from '../lib/prisma'
import  { z } from 'zod'

export async function memoriesRoutes(app:FastifyInstance) {
    app.get('/memories', async () => {

        const memories = await prisma.memory.findMany({
            orderBy: {
                createAt: 'asc'
            }
        })

        return memories.map(memory => {
            return {
                id: memory.id,
                coverUrl: memory.coverUrl,
                excerpt: memory.Content.substring(0, 115).concat('...')
            }
        })

    })

    app.get('/memories/:id', async (request) => {

        const paramsSchema = z.object({
            id: z.string().uuid()
        })

        const { id } = paramsSchema.parse(request.params) 

        const memorie = await prisma.memory.findUniqueOrThrow({
            where: { id }
        })

        return memorie
    })

    app.post('/memories', async (request) => {

        const paramsSchema = z.object({
            isPublic: z.coerce.boolean().default(false),
            content: z.string(),
            coverUrl:z.string()
        })

        const { content, isPublic, coverUrl } = paramsSchema.parse(request.body)

        const memorie = await prisma.memory.create({
            data: {
                Content: content,
                coverUrl,
                isPublic,
                userId: 'deb653a0-c6f0-4ba9-bbbb-5c815812bd4e'
            }
        })

        return memorie

    })

    app.put('/memories/:id', async (request) => {

        const paramsSchema = z.object({
            id: z.string().uuid()
        })
        const { id } = paramsSchema.parse(request.params) 
        
        const bodySchema = z.object({
            isPublic: z.coerce.boolean().default(false),
            content: z.string(),
            coverUrl:z.string()
        })

        const { content, isPublic, coverUrl } = bodySchema.parse(request.body)

        await prisma.memory.update({
            where: {
                id
            },
            data: {
                Content: content,
                coverUrl,
                isPublic,
            }
        })
    })
}   