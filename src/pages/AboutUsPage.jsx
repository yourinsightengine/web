import React from "react";
import denis from "../assets/denis.jpg";
import iclal from "../assets/iclal.png";
import manav from "../assets/manav.png";
import { TrendingUp, Activity, Users } from "lucide-react";
import Card from "../components/Card.jsx";

// Example team members
const teamMembers = [
  {
    name: "İclal Yağız",
    role: "Medical Engineering",
    image: iclal,
    bio: "I am a medical engineering professional with a strong interest in AI-driven medical imaging and its potential to transform healthcare.",
  },
  {
    name: "Denis Stephan",
    role: "Intelligent Systems",
    image: denis,
    bio: "I am a software developer striving to gain knowledge from experts across various academic domains in order to design machine learning tasks of service robots.",
  },
  {
    name: "Manav Dave",
    role: "Computer Science",
    image: manav,
    bio: "I am a technology enthusiast passionate about AI and computer science, always striving to stay ahead of the curve.",
  },
];

export default function AboutUsPage() {
  return (
    <div className="relative min-h-screen">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 h-full w-full px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#3332C8_100%)]"></div>
      <div className="relative max-w-7xl mx-auto px-6 pb-8 pt-36 text-center text-white">
        <h1 className="text-4xl sm:text-5xl mb-10">About Insight Engine</h1>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="max-w-5xl mx-auto p-6 sm:p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-medium mb-4 text-white text-center">
              Mission
            </h2>
            <p className="text-lg sm:text-xl text-gray-300">
              At <strong>Insight Engine</strong>, we create a{" "}
              <strong>safe and collaborative space</strong> where highly
              motivated students{" "}
              <strong>
                challenge each other to stay ahead of AI advancements
              </strong>
              . We foster a culture of{" "}
              <strong>
                continuous learning, critical thinking, and innovation
              </strong>
              , ensuring that participants not only stay informed but actively
              contribute to shaping the field.
            </p>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="mb-16">
          <div className="max-w-5xl mx-auto p-6 sm:p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-medium mb-6 text-white text-center">
              Why Join Us?
            </h2>
            <ul className="text-lg sm:text-xl text-gray-300 space-y-6 flex flex-col items-center">
              <li className="flex items-center space-x-4 text-start">
                <TrendingUp className="md:w-8 md:h-8 w-14 h-14 text-white" />
                <span>
                  <strong>Stay Ahead</strong>: Keep up with the latest
                  developments in AI.
                </span>
              </li>
              <li className="flex items-center space-x-4 text-start">
                <Activity className="md:w-8 md:h-8 w-14 h-14 text-white" />
                <span>
                  <strong>Challenge and Grow</strong>: Engage in{" "}
                  <strong>critical discussions</strong> beyond passive learning.
                </span>
              </li>
              <li className="flex items-center space-x-4 text-start">
                <Users className="md:w-8 md:h-8 w-14 h-14 text-white" />
                <span>
                  <strong>Collaborate with Passionate Peers</strong>: Exchange
                  ideas, refine skills, and contribute to innovation.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-4">
          <h2 className="text-2xl sm:text-3xl font-medium mb-8">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card leader={member} key={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
