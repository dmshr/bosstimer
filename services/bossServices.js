export async function updateBoss(data) {
  try {
    const res = await fetch("/api/boss", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (!res.ok) throw new Error("Failed update");
  } catch (err) {
    console.error(err);
  }
}