import { CategoryCard } from "./CategoryCard";

import {
  BrainIcon,
  TrophyIcon,
  ClockIcon,
  PuzzleIcon,
  ChartIcon,
  ConnectIcon,
} from "../../../assets/Icons";

export default function Landing6() {
  const categories = [
    {
      title: "Boost Brain Power",

      description:
        "Enhance cognitive function and memory through regular quizzing.",

      icon: <BrainIcon />,

      className: "bg-pink-200 h-70",
    },

    {
      title: "Track Progress",

      description:
        "Monitor your improvement over time with detailed performance analytics.",

      icon: <ChartIcon />,

      className: "bg-white h-80",
    },

    {
      title: "Compete & Win",

      description:
        "Challenge friends and win trophies in our competitive quiz leagues.",

      icon: <TrophyIcon />,

      className: "bg-yellow-200 h-80 ",
    },

    {
      title: "Learn Efficiently",

      description:
        "Optimize your study time with our adaptive learning algorithm.",

      icon: <ClockIcon />,

      className: "bg-purple-200 h-80",
    },

    {
      title: "Diverse Topics",

      description:
        "Explore a wide range of subjects and discover new interests.",

      icon: <PuzzleIcon />,

      className: "bg-green-200 h-70",
    },

    {
      title: "Connect & Share",

      description:
        "Join a community of learners and share your knowledge with others.",

      icon: <ConnectIcon />,

      className: "bg-blue-200 h-80",
    },
  ];

  return (
    <div className="min-h-screen bg-[#8740f2] p-7">
      <div className="lg:max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center ">
          Discover the Benefits of Our Quiz Platform
        </h1>

        <div className="lg:columns-3 gap-4 p-4 md:columns-2 sm:columns-1 ">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              description={category.description}
              icon={category.icon}
              className={`${category.className} w-full mb-4 break-inside-avoid mx-auto flex flex-col items-center text-center p-4`}
            >
              <h2 className="text-xl font-bold mb-2">{category.title}</h2>

              <div className="text-4xl">{category.icon}</div>
            </CategoryCard>
          ))}
        </div>
      </div>
    </div>
  );
}
