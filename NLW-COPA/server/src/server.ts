import Fastify from "fastify";
import cours from "@fastify/cors";
import { PrismaClient } from "@prisma/client";
import { z } from 'zod';
import ShortUniqueId from 'short-unique-id';

const prisma = new PrismaClient({
  log: ["query"],
});

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(cours, {
    origin: true,
  });

  //localhost:3333
  fastify.get("/pools/count", async () => {
    const count = await prisma.pool.count();
    // const Lista_pools = await prisma.Pool.findMany({
    //   where: {
    //     code: {
    //       startsWith: "C",
    //     },
    //   },

    return { count };
  });

  fastify.get("/user/count", async () => {
    const count = await prisma.user.count();
    return { count };
  });

  fastify.get("/guesses/count", async () => {
    const count = await prisma.guess.count();
    return { count };
  });

  fastify.post("/pools", async (request, replay) => {
    const createPoolBody = z.object({
      title: z.string(), //biblioteca de validação de string!!!
    })
    const { title } = createPoolBody.parse(request.body);

    const generate = new ShortUniqueId({length: 6}); //biblioteca que cria novos códugos unicos que não se repetem!!!
    const code = String(generate()).toUpperCase();

    await prisma.pool.create({
      data: {
        title,
        code,
      }
    })

    return replay.status(201).send({ code });
    // return { title };
  });

  await fastify.listen({ port: 3333, host: "0.0.0.0" });
}

bootstrap();
