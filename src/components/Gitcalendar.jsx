import { GitHubCalendar } from "react-github-calendar";
import { useState } from "react";
function Gitcalendar() {
  const [year, setYear] = useState(new Date().getFullYear());
  const currentYear = new Date().getFullYear();

  const years = Array.from({ length: 3 }, (_, i) => currentYear - 2 + i);

  return (
    <div className="my-10 md:my-15 lg:my-20">
      {/* GitHub Calendar */}
      <div className="calendar-container lg:flex justify-center gap-5">
        <GitHubCalendar
          username="Frehitzz"
          blockSize={15}
          blockMargin={2}
          fontSize={10}
          colorScheme="dark"
          year={year}
        />
        {/* Year Selection Buttons */}
        <div className="flex lg:flex-col justify-center gap-3 mt-5">
          {years.map((item) => (
            <button
              key={item}
              onClick={() => setYear(item)}
              className={`px-4 py-1 rounded transition-all ${
                year === item
                  ? "bg-[#91ff00] text-black"
                  : "bg-transparent border border-[#91ff00] text-[#91ff00] hover:bg-[#91ff00] hover:text-black"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Gitcalendar;
