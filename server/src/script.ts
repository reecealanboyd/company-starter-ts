import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const allItems = await prisma.item.findMany();
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
