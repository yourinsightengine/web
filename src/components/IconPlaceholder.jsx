import React from "react";

export default function IconPlaceholder({ label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
        <span className="text-2xl">🔹</span>
      </div>
      <p className="mt-2 text-lg text-gray-300">{label}</p>
    </div>
  );
}
