function Counter() {
  const calculateAge = () => {
    const birthDate = new Date(2005, 1, 11); // February 11, 2005, its 1 becuae its index
    const today = new Date();

    // finds the age by year difference
    let age = today.getFullYear() - birthDate.getFullYear();
    const hasHadBirthdayThisYear =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() >= birthDate.getDate());


        // if the person hasnt had their birthday yet this
    if (!hasHadBirthdayThisYear) {
      age -= 1;
    }

    return age;
  };

  // ARRAY OF OBJECTS
  const stats = [
    { value: calculateAge(), label: "Age" },
    { value: 3, label: "Projects" },
    { value: 2, label: "Projects\ndeployed" },
  ];
  return (
    <div className="flex mt-5 md:mt-0 lg:mt-0 justify-between">
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
