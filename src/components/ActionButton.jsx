import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function ActionButton({ to, label }) {
  const isExternal = to.startsWith("http") || to.startsWith("//");
  const className =
    "bg-black/20 border border-primary flex px-4 sm:px-6 py-2 sm:py-3 sm:text-lg text-sm font-medium items-center gap-x-4 text-white rounded-2xl transition-all duration-200 max-w-max mx-auto hover:shadow-[0_0_10px_#3332C8] shadow-[0_0_4px_#3332C8]";

  return isExternal ? (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {label}
      <ChevronRight />
    </a>
  ) : (
    <Link to={to} className={className}>
      {label}
      <ChevronRight />
    </Link>
  );
}

export default ActionButton;
