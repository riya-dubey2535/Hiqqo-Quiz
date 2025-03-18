
const LandingPage3 = () => {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center p-4">
        <div className="relative max-w-4xl mx-auto text-center">
          {/* Decorative elements */}
          <div className="absolute left-4 top-10">
            <div className="w-6 h-6 bg-blue-400 rounded-sm transform rotate-45" />
          </div>
          <div className="absolute right-10 top-20">
            <div className="w-8 h-10 bg-pink-400 rounded-sm transform -rotate-12" />
          </div>
          <div className="absolute left-1/4 bottom-10">
            <div className="w-4 h-4 bg-yellow-400 rounded-sm transform rotate-45" />
          </div>
  
  
          <h1 className="text-[2.75rem] md:text-6xl font-bold tracking-tight mb-6 text-[#1a1060]">
            More than <span className="text-[#7C3AED]">240,000+</span>  Members.
          </h1>
  
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Discover a world of learning with a constantly expanding selection of quiz! Whether you looking to
            unlock the secrets of knowledge, explore a new hobby, or embark on a journey of personal development, our quiz
            for everyone.
          </p>
        </div>
      </div>
    )
  }
  
  export default LandingPage3;