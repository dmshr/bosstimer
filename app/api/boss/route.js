import { saveBoss } from "@/repositories/bossRepository";

export async function POST(req) {
  const body = await req.json();

  await saveBoss(body);

  return Response.json({ success: true });
}