import logo from "../assets/logo.png";
import THU_Logo from "../assets/thu_logo.png";
import Card from "./Card.jsx";
import ActionButton from "../components/ActionButton.jsx";

const leaders = [
  {
    name: "Advisor Name",
    role: "Research Focus of Advisor",
    image: logo,
    bio: "Brief description of advisor",
  },
  {
    name: "Advisor Name",
    role: "Research Focus of Advisor",
    image: logo,
    bio: "Brief description of advisor",
  },
  {
    name: "Advisor Name",
    role: "Research Focus of Advisor",
    image: logo,
    bio: "Brief description of advisor",
  },
];

export default function Advisors() {
  return (
    <div className="relative max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-white">
      <img className="w-32 mb-8" src={THU_Logo} alt="THU Logo" />

      <h2 className="text-5xl mb-6">Our Advisors</h2>
      <p className="text-xl max-w-3xl mb-8 text-gray-300 mx-auto">
        Meet the experts leading our digital transformation initiatives.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {leaders.map((leader, index) => (
          <Card leader={leader} key={index} />
        ))}
      </div>
    </div>
  );
}
