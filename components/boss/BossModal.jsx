"use client";

import { useState } from "react";
import { updateBoss } from "@/services/bossServices";

export default function BossModal({ boss, onClose, setBosses }) {
  const [killedInput, setKilledInput] = useState("");

  function handleSave() {
    const now = new Date().toISOString();

    setBosses(prev =>
      prev.map(b =>
        b.name === boss.name ? { ...b, killed: now } : b
      )
    );

    updateBoss({ ...boss, killed: now }); // API call
    onClose();
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-black p-5 rounded-xl">
        <h2>{boss.name}</h2>

        <input
          value={killedInput}
          onChange={(e) => setKilledInput(e.target.value)}
          className="border p-2"
        />

        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}