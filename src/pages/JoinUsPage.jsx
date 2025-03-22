import ActionButton from "../components/ActionButton.jsx";

export default function JoinUsPage() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#3332C8_100%)]"></div>
      <div className="relative max-w-5xl mx-auto px-6 py-36 text-center text-white flex flex-col items-center justify-center w-screen min-h-screen">
        <h1 className="text-5xl mb-6">Insight Engine Paper Club (IEPC)</h1>

        <p className="text-xl max-w-3xl mb-8 text-gray-300">
          IEPC is where AI enthusiasts go beyond passive learning and actively
          engage with cutting-edge research. Through structured discussions, we
          foster deep understanding and critical analysis of AI advancements.
        </p>

        <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-lg max-w-3xl text-left mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Why Join IEPC?
          </h2>
          <ul className="text-lg text-gray-300 space-y-3">
            <li>
              🔹 <b>Master AI research</b> with shared accountability.
            </li>
            <li>
              🔹 <b>Deep-dive into papers</b> through structured discussions.
            </li>
            <li>
              🔹 <b>Cultivate a critical mindset</b> to assess AI’s strengths
              and limitations.
            </li>
            <li>
              🔹 <b>Clarify doubts</b>, share insights, and collectively push AI
              boundaries.
            </li>
          </ul>
          <p className="mt-6 text-xl text-white">
            Take action. Shape the future. 🚀
          </p>
        </div>

        <ActionButton
          to={"https://www.google.com"}
          label={"Sign up now & explore cutting-edge AI research!"}
        />
      </div>
    </div>
  );
}
