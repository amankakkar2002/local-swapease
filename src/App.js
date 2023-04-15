import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AboutUs from "./components/AboutUs";
import ApplyForm from "./components2/ApplyForm";
import AttendancePredictor from "./components2/AttendancePredictor";
import Contact from "./components2/Contact";
import Description from "./components2/Description";
import Details from "./components2/Details";
import Navbar2 from "./components2/Navbar2";
import Materials from "./components2/Materials";
import Swapped from "./components2/Swapped";

const App=()=>{
  return (
		<>
			<Routes>
				<Route exact path="/" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} />
				<Route path="/aboutus" element={<AboutUs />} />
				<Route path="/applyform" element={<ApplyForm />} />
				<Route path="/attendance" element={<AttendancePredictor />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/description" element={<Description />} />
				<Route path="/details" element={<Details />} />
				<Route path="/materials" element={<Materials />} />
				<Route path="/navbar2" element={<Navbar2 />} />
				<Route path="/swapped" element={<Swapped />} />
			</Routes>
		</>
	);
}
export default App