export async function POST(req) {
  const body = await req.json();

  // simpan ke PostgreSQL (prisma nanti)
  console.log(body);

  return Response.json({ success: true });
}