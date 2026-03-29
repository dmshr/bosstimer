import { prisma } from "@/lib/prisma";

export async function getAllBosses() {
  return await prisma.boss.findMany();
}

export async function saveBoss(data) {
  return await prisma.boss.upsert({
    where: { name: data.name },
    update: {
      spawn: data.spawn,
      killed: data.killed,
    },
    create: {
      name: data.name,
      spawn: data.spawn,
      killed: data.killed,
    },
  });
}