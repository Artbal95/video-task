// Node Modules
import { FC, useState } from "react";
// Bootstrap UI
import { Nav, NavItem, NavLink } from "react-bootstrap";

const SideBar: FC = () => {
    const [ activeLink, setActiveLink ] = useState<string>("/video");
    return (
        <Nav 
            className={"col-md-12 d-none d-md-block bg-light sidebar"}
            activeKey={activeLink}
            onSelect={selectedKey => selectedKey && setActiveLink(selectedKey)}
        >
            <div className="sidebar-sticky"></div>
            <NavItem>
                <NavLink href="/video">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/frames">Frames</NavLink>
            </NavItem>
        </Nav>
    );
};

export default SideBar;