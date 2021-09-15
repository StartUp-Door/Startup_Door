import Navbar from "../../components/Food/navbar/Navbar";
import Sidebar from "../../components/Food/sidebar/Sidebar";
import Ongoing from "../../components/Food/sidebar/ongoing/Ongoing";
// import Rightbar from "../../components/Technician/rightbar/Rightbar";
import "./foodDash.css"

export default function TechnicianDash() {
  return (
    <div>
      <Navbar />
      <div className="homeContainer">
        <Sidebar />
        <Ongoing />
        {/* <Rightbar/> */}
      </div>
    </div>
  );
}