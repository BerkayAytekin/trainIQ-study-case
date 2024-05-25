import "./App.css";
import TopEmployees from "./components/TopEmployees/TopEmployees";
import ActivityHours from "./components/ActivityHours/ActivityHours";
import InProgressCourses from "./components/InProgressCourses/InProgressCourses";
import SkillsInDevelopment from "./components/SkillsInDevelopment/SkillsInDevelopment";
import Teams from "./components/Teams/Teams";
import TopSkills from "./components/TopSkills/TopSkills";
import UpcomingCourses from "./components/UpcomingCourses/UpcomingCourses";

function App() {
  return (
    <div className="container">
      <h1>INFORMATION ABOUT EMPLOYEES AND COURSES</h1>
      <ActivityHours></ActivityHours>
      <InProgressCourses></InProgressCourses>
      <SkillsInDevelopment></SkillsInDevelopment>
      <Teams></Teams>
      <TopEmployees></TopEmployees>
      <TopSkills></TopSkills>
      <UpcomingCourses></UpcomingCourses>
    </div>
  );
}

export default App;
