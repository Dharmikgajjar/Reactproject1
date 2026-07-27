import Header from "./Header";
import Welcome from "./Welcome";
import Footer from "./Footer";
import RestSpread from "./RestSpread";
import StudentList from "./Props";
import State from "./state";
import useEffect from "./TaskEffect"
import "./assets/App.css";
import TaskEffect from "./TaskEffect";

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <Footer />
      <RestSpread/>
      <StudentList/>
      <State/>
      <TaskEffect/>


    </>
  );
}

export default App;
