import Navbar from "../../components/Plant/navbar/Navbar";
import Sidebar from "../../components/Plant/sidebar/Sidebar";
import Ongoing from "../../components/Plant/sidebar/ongoing/Ongoing";
// import Rightbar from "../../components/Technician/rightbar/Rightbar";
import "./plantDash.css"

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