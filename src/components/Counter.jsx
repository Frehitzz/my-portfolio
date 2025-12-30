function Counter() {
  // ARRAY OF OBJECTS
  const stats = [
    { value: 20, label: "Age" },
    { value: 5, label: "Projects" },
    { value: 3, label: "Projects\ndeployed" },
  ];
  return (
    <div className="flex mt-40 justify-between">
      {stats.map((stat, index) => (
        <div key={index} className="projects flex items-center gap-3">
          <h1 className="text-7xl text-[#599c02]">{stat.value}</h1>
          <p className="text-3xl text-white whitespace-pre-line">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
export default Counter;
