import { getCountdown } from "@/lib/time";

export default function BossRow({ boss, onSelect }) {
  const { label, seconds } = getCountdown(boss.spawn);
  const isUrgent = seconds > 0 && seconds < 120;

  return (
    <div className="grid grid-cols-3 px-4 py-3">
      <span>{boss.name}</span>

      <div className="text-center">
        <div>{boss.spawn}</div>
        <div className="text-xs text-gray-500">
          Killed: {boss.killed || "--:--:--"}
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <span className={isUrgent ? "text-red-400" : ""}>{label}</span>
        <button onClick={() => onSelect(boss)}>💀</button>
      </div>
    </div>
  );
}