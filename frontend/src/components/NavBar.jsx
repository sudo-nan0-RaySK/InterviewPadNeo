import React from 'react'
import { Nav, Navbar, Icon } from 'rsuite'
import LanguageSelector from './LanguageSelector';
import './NavBar.css'

export default function NavBar(props) {
    return (
        <div>
            <Navbar appearance="inverse">
                <Navbar.Header className="nav-style">
                    <div className="logo-header">InterviewPadNeo v1.0</div>
                </Navbar.Header>
                <Navbar.Body className="nav-body-font">
                    <Nav>
                        <Nav.Item icon={<Icon icon="home" />} >Home</Nav.Item>
                        <Nav.Item icon={<Icon icon="info" />}> Info </Nav.Item>
                        <LanguageSelector {...props} />
                    </Nav>

                    <Nav pullRight>
                        <Nav.Item icon={<Icon icon="sign-out" />} >Logout</Nav.Item>
                    </Nav>
                </Navbar.Body>
            </Navbar>
        </div>
    );
}
