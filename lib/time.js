// lib/time.js
export function getCountdown(spawnTime) {
  if (spawnTime === "--:--:--") return { label: "SPAWNED", seconds: 0 };

  const now = new Date();
  const [h, m, s] = spawnTime.split(":").map(Number);

  const spawn = new Date();
  spawn.setHours(h, m, s, 0);

  // ✅ FIX beda hari
  if (spawn < now) {
    spawn.setDate(spawn.getDate() + 1);
  }

  const diff = Math.floor((spawn - now) / 1000);

  if (diff <= 0) {
    return { label: "SPAWNED", seconds: 0 };
  }

  const hours = Math.floor(diff / 3600);
  const minutes = Math.floor((diff % 3600) / 60);
  const seconds = diff % 60;

  let label = "";
  if (hours > 0) label += `${hours}h `;
  if (minutes > 0 || hours > 0) label += `${minutes}m `;
  label += `${seconds}s`;

  return { label: label.trim(), seconds: diff };
}