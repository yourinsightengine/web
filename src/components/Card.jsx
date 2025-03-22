import React from "react";

function Card({ leader }) {
  return (
    <div className="rounded-3xl p-[2px] bg-conic/[from_var(--border-angle)] animate-border-rotate from-black from-80% via-white/85 via-90% to-black">
      <div className="flex flex-col h-full items-center border border-neutral-800 p-10 rounded-3xl bg-black/85 text-white backdrop-blur-3xl">
        <img
          className="w-40 h-40 rounded-full object-cover"
          src={leader.image}
          alt={leader.name}
        />
        <h3 className="mt-5 text-2xl text-white">{leader.name}</h3>
        <p className="text-blue-400 font-medium">{leader.role}</p>
        <p className="mt-3 text-gray-300 text-center text-sm">{leader.bio}</p>
      </div>
    </div>
  );
}

export default Card;
