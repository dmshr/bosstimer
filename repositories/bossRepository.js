import prisma from "@/lib/prisma"; // kalau pakai prisma

export async function saveBoss(data) {
  return prisma.boss.upsert({
    where: { name: data.name },
    update: data,
    create: data
  });
}