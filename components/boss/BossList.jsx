"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import BossRow from "@/components/boss/BossRow.jsx";
import BossModal from "@/components/boss/BossModal.jsx";
import { initialBosses } from "@/data/bossData.js";

export default function BossList() {
  const [selectedBoss, setSelectedBoss] = useState(null);

  const sortedBosses = [...initialBosses];

  return (
    <div className="w-full bg-[#0f0f0f] rounded-2xl mt-4 overflow-hidden">
      
      {/* CONTENT */}
      <div className="w-full">
        <AnimatePresence>
          {sortedBosses.map((boss) => (
            <BossRow
              key={boss.name}
              boss={boss}
              onSelect={setSelectedBoss}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* MODAL */}
      <BossModal
        boss={selectedBoss}
        onClose={() => setSelectedBoss(null)}
      />
    </div>
  );
}