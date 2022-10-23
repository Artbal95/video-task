// Node Modules
import { FC, ReactNode } from "react";
// Bootstrap UI
import { Col, Container, Row } from "react-bootstrap";
// App Shared
import { SideBar } from "shared";

interface ISideBarLayoutProps {
    children: ReactNode
}

const SideBarLayout: FC<ISideBarLayoutProps> = ({ children }) => (
    <Container fluid>
        <Row>
            <Col xs={2} id="sidebar-wrapper">      
                <SideBar />
            </Col>
            <Col xs={10} id="page-content-wrapper">
                {children}
            </Col> 
        </Row>
    </Container>
);

export default SideBarLayout;