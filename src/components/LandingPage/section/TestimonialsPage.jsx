import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    image: "https://i.pinimg.com/474x/26/07/93/260793870622be81cfec09f5cef3fcef.jpg",
    name: "Neha Khan",
    company: "Software Engineer",
    quizType: "User Review",
    title: "Amazing Quiz Experience!",
    score: "98%",
    rating: 5.0,
    skillsGained: "Enhanced problem solving and quick thinking.",
    duration: "45 min",
  },
  {
    image: "https://i.pinimg.com/474x/42/38/71/4238718a61f5cee8f068f68efb7c5b1e.jpg",
    name: "Rahul Sharma",
    company: "Computer Science Student",
    quizType: "User Review",
    title: "Engaging and Informative",
    score: "95%",
    rating: 4.8,
    skillsGained: "Improved algorithm skills.",
    duration: "50 min",
  },
  {
    image: "https://i.pinimg.com/474x/81/8f/3c/818f3c1c5b03c68312bfcf20226697a7.jpg",
    name: "Kavita Singh",
    company: "Computer Science Student",
    quizType: "User Review",
    title: "Engaging and Informative",
    score: "95%",
    rating: 4.8,
    skillsGained: "Improved algorithm skills.",
    duration: "50 min",
  },
  {
    image: "https://i.pinimg.com/474x/b8/f3/3d/b8f33d491d6ca461357bacc06177feb4.jpg",
    name: "Yash Gupta",
    company: "Computer Science Student",
    quizType: "User Review",
    title: "Engaging and Informative",
    score: "95%",
    rating: 4.8,
    skillsGained: "Improved algorithm skills.",
    duration: "50 min",
  },
  {
    image: "https://i.pinimg.com/474x/44/ab/77/44ab7754ab0680b3acb231a0d5593588.jpg",
    name: "Kriti Sharma",
    company: "Computer Science Student",
    quizType: "User Review",
    title: "Engaging and Informative",
    score: "95%",
    rating: 4.8,
    skillsGained: "Improved algorithm skills.",
    duration: "50 min",
  },
  {
    image: "https://i.pinimg.com/474x/3e/8c/0a/3e8c0a469c7b58ddeb7f07560acea19a.jpg",
    name: "Deepak Kumar",
    company: "Computer Science Student",
    quizType: "User Review",
    title: "Engaging and Informative",
    score: "95%",
    rating: 4.8,
    skillsGained: "Improved algorithm skills.",
    duration: "50 min",
  },
];

function TestimonialCard({
  image,
  name,
  company,
  quizType,
  title,
  score,
  rating,
  skillsGained,
  duration,
}) {
  return (
    <div className="flex-shrink-0 w-72 bg-white rounded-xl overflow-hidden shadow-md">
      {/* Increased image container height from h-56 to h-64 */}
      <div className="h-64 w-full relative">
        <img
          src={image || "/placeholder.svg"}
          alt={`${name}'s profile`}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Flex container for quizType and star rating */}
      <div className="px-4 pt-4 flex justify-between items-center">
        <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
          {quizType}
        </span>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="font-medium text-sm">{rating.toFixed(1)}</span>
        </div>
      </div>
      {/* Rest of the card content */}
      <div className="p-4 space-y-2 text-left">
        <h3 className="font-semibold text-sm">{title}</h3>
        <div className="text-xs text-gray-500">
          <p>{name}</p>
          <p>{company}</p>
        </div>
        <div className="pt-2 border-t text-xs">
          <p className="text-gray-500">
            Duration: <span className="font-medium">{duration}</span>
          </p>
          <p className="text-gray-500">
            Score: <span className="font-medium text-green-600">{score}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function TestimonialsPage() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const handleMouseMove = (e) => {
      if (scrollContainer) {
        const { left, width } = scrollContainer.getBoundingClientRect();
        const x = e.clientX - left;
        const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        const newScrollLeft = (x / width) * maxScrollLeft;
        scrollContainer.scrollLeft = newScrollLeft;
      }
    };

    scrollContainer.addEventListener("mousemove", handleMouseMove);
    return () => {
      scrollContainer.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FDE674] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Centered heading and description */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Quiz App Testimonials
          </h1>
          <p className="mt-3 text-xl text-gray-500">
            Discover how our quiz app has helped users level up their skills.
          </p>
        </div>
        {/* Testimonial cards container (using justify-start to show the first card) */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-4 pb-4 cursor-grab scrollbar-hide justify-start"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${index}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonialsPage;
