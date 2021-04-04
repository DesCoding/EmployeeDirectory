import logo from "./logo.svg";
import "./App.css";
import EmployeeTable from "./components/EmployeeTable";
import Navbar from "react-bootstrap/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <EmployeeTable />
    </div>
  );
}

export default App;
