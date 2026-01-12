import { GitHubCalendar } from "react-github-calendar";
function Gitcalendar() {
  return (
    <div className="calendar-container my-10 md:my-15 lg:my-20 flex justify-center">
      <GitHubCalendar
        username="Frehitzz"
        blockSize={12}
        blockMargin={4}
        fontSize={14}
        colorScheme="dark"
      />
    </div>
  );
}
export default Gitcalendar;
