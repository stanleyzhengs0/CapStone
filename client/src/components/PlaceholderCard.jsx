import React from "react";

export default function ProductCardPlaceholder() {
  return (
    <div
      className="h-[400px] rounded-3xl border border-white/10
                 bg-gradient-to-br from-white/5 via-white/0 to-white/5
                 backdrop-blur-[2px] shadow-[0_0_15px_0_rgba(0,0,0,0.35)]
                 animate-pulse"
    >
      <div className="h-full w-full flex flex-col p-6 gap-4">
        <div className="h-6 w-24 bg-white/20 rounded" />
        <div className="flex-1" />
        <div className="h-8 w-32 bg-white/20 rounded self-end" />
      </div>
    </div>
  );
}
