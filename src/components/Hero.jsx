import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import ActionButton from "./ActionButton.jsx";

export default function Hero() {
  return (
    <div className="relative max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8 h-full flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center w-full">
        {/* Text Content */}
        <div className="max-w-7xl col-span-3 text-center lg:text-left mx-auto p-4 sm:p-0">
          <h1 className="text-5xl text-white font-light text-center sm:text-6xl lg:text-8xl">
            Be the Initiator of Our Future
          </h1>
          <p className="mt-6 mb-10 sm:text-2xl text-white text-center max-w-6xl">
            The future of AI is shaped by those who dare to question, explore,
            and innovate. At Insight Engine, we empower students to take an
            active role in advancing artificial intelligence—not just by keeping
            up with developments but by driving them forward.
          </p>
          <div className={`flex items-center justify-center gap-x-10`}>
            <div
              className={`hidden md:block bg-gradient-to-r from-transparent to-white flex-1 h-0.5`}
            ></div>
            <ActionButton to={"/join"} label={"Learn More"} />

            <div
              className={`hidden md:block bg-gradient-to-r to-transparent from-white flex-1 h-0.5`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
