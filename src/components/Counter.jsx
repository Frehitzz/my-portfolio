function Counter() {
  // ARRAY OF OBJECTS
  const stats = [
    { value: 20, label: "Age" },
    { value: 5, label: "Projects" },
    { value: 3, label: "Projects\ndeployed" },
  ];
  return (
    <div className="flex mt-5 md:mt-15 lg:mt-0 justify-between">
      {stats.map((stat, index) => (
        <div key={index} className="projects flex items-center gap-1">
          <h1 className="text-5xl md:text-7x lg:text-8xl text-[#599c02]">
            {stat.value}
          </h1>
          <p className="text-lg md:text-2xl text-white whitespace-pre-line">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
export default Counter;
