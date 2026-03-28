export async function fetchBosses() {
  const res = await fetch("/api/boss");

  if (!res.ok) throw new Error("Failed fetch bosses");

  return res.json();
}

export async function updateBoss(data) {
  const res = await fetch("/api/boss", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed update");
}