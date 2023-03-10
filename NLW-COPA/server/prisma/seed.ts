import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "Jonh Doe",
      email: "jonh@gmail.com.br",
      avatarURL: "https://github.com/diego3g.png",
    },
  });

  const pool = await prisma.pool.create({
    data: {
      title: "Exemplo Pool",
      code: "BOL123",
      ownerId: user.id,

      // participants: {
      //   create: {
      //     userId: user.id,
      //   },
      // },
    },
  });

  await prisma.participant.create({
      data: {
        poolId: pool.id,
        userId: user.id,
      },
    });

  await prisma.game.create({
    data: {
      date: "2022-11-02T12:00:00.201Z",
      firstTeamCountryCode: "DE",
      secondTeamCountryCode: "BR",
    },
  });

  await prisma.game.create({
    data: {
      date: "2022-11-03T12:00:00.201Z",
      firstTeamCountryCode: "BR",
      secondTeamCountryCode: "AR",

      guesses: {
        create: {
          firstTeamPoints: 2,
          secondTeamPoints: 0,

          participant: {
            connect: {
              userId_poolId: {
                userId: user.id,
                poolId: pool.id,
              },
            },
          },
        },
      },
    },
  });
}

main();
