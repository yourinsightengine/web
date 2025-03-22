import Advisors from "../components/Advisors.jsx";

export default function PartnersPage() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#3332C8_100%)]"></div>
      <div
        className={`w-screen min-h-screen flex flex-col items-center justify-center`}
      >
        <Advisors />
      </div>
    </div>
  );
}
