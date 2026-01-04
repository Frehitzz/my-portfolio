function Timeline() {
  const timelineData = [
    {
      id: 1,
      year: 2026,
      description:
        "Just finished Learning React and TailwindCss. Started Creating Projects using React like this Portfolio of mine",
    },
    {
      id: 2,
      year: 2025,
      description:
        "Started backend development with PHP & MySQL, created the DreamBooking capstone system. Joined a Hackathon, build POMOZONE a pomodoro timer and earned a Best UI/UX award.",
    },
    {
      id: 3,
      year: 2024,
      description:
        "Starting to learn JavaScript and this is were I started using git for tracking changes in code locally and github for putting my projects and collaborating",
    },
    {
      id: 4,
      year: 2023,
      description:
        "Exploring more about Web development and starting a small project using HTML and CSS by duplicating popular website",
    },
    {
      id: 5,
      year: 2022,
      description:
        "Learning HTML, CSS for the firsttime by watching BroCode on Youtube this is where I amazed by the web development",
    },
  ];

  return (
    <div className="flex justify-center w-full py-20">
      <div className="relative max-w-4xl w-full">
        {/* Vertical center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 -translate-x-1/2"></div>

        {timelineData.map((item, index) => {
          // the index is the count of the array stored not id
          // seperating odd and even numbers
          // if true it gets even, else false it gets odd
          const isLeft = index % 2 === 0;
          return (
            <div className="mb-10 relative flex items-start" key={item.id}>
              {/* Left side content */}
              {/* ${isLeft ? } check if the isLeft is true if true it have even */}
              <div className={`w-1/2 ${isLeft ? "pr-8 text-right" : ""}`}>
                {isLeft && ( // for displaying true isLeft
                  <>
                    <h1 className="text-3xl font-bold text-[#91ff00]">
                      {item.year}
                    </h1>
                    <p className="text-white text-lg">{item.description}</p>
                  </>
                )}
              </div>

              {/* Center dot */}
              <span className="absolute left-1/2 -translate-x-1/2 top-1.5 w-5 h-5 bg-[#91ff00] rounded-full z-10"></span>

              {/* Right side content */}
              {/* ${!isLeft} getting the false which means it have the odd numbers */}
              <div className={`w-1/2 ${!isLeft ? "pl-8 text-left" : ""}`}>
                {!isLeft && ( // for displaying false isLeft
                  <>
                    <h1 className="text-3xl font-bold text-[#91ff00]">
                      {item.year}
                    </h1>
                    <p className="text-white text-lg">{item.description}</p>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Timeline;
