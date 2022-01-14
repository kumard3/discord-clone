import SideBar from "../components/SideBar";
import SideSection from "../components/SideSection";

export default function Dashboard() {
    return (
        <div className="flex">
            <SideBar />
            <SideSection />
        </div>
    )
}
