"use client";

import { useState, useEffect } from "react";
import { initialBosses } from "@/data/bossData";
import { getCountdown } from "@/lib/time";
import BossRow from "./BossRow";
import BossModal from "./BossModal";

export default function BossList() {
  const [bosses, setBosses] = useState(initialBosses);
  const [selectedBoss, setSelectedBoss] = useState(null);
  const [tick, setTick] = useState(0);

  // realtime
  useEffect(() => {
    const interval = setInterval(() => setTick(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  // localStorage (optional tapi penting)
  useEffect(() => {
    const saved = localStorage.getItem("bosses");
    if (saved) setBosses(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("bosses", JSON.stringify(bosses));
  }, [bosses]);

  const sortedBosses = [...bosses].sort(
    (a, b) => getCountdown(a.spawn).seconds - getCountdown(b.spawn).seconds
  );

  return (
    <div>
      {sortedBosses.map((boss, i) => (
        <BossRow
          key={i}
          boss={boss}
          onSelect={setSelectedBoss}
        />
      ))}

      {selectedBoss && (
        <BossModal
          boss={selectedBoss}
          onClose={() => setSelectedBoss(null)}
          setBosses={setBosses}
        />
      )}
    </div>
  );
}