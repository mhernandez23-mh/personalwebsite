import SiteContext from "./contexts/SiteContexts";
import SiteNavbar from "./structural/SiteNavbar";
import { Outlet } from "react-router-dom";

export default function Homepage(){
    
    return <div>
    <SiteNavbar />
    <div style={{ margin: "1rem" }}>
        <Outlet />
    </div>
</div>
}