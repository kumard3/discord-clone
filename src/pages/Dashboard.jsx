import SideBar from "../components/SideBar";
import SideSection from "../components/SideSection";
import download from "../download.svg";
export default function Dashboard() {
  return (
    <div className="flex bg-[#37393E] w-full">
      <SideBar />
      <SideSection />
      <div>
        <div className="flex justify-center items-center w-full h-full">
          <img src={download} />
        </div>
      </div>
    </div>
  );
}
