//create a new prisma client setup
import { PrismaClient } from '@prisma/client';

export const prismaClient = new PrismaClient({ log: ['query']});