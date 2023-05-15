import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

const db = () => {
  if (!prisma) {
    prisma = new PrismaClient();
  }
  return prisma;
};

export default db;
