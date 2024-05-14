import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SideNav, { Toggle, NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import QuizRoundedIcon from '@mui/icons-material/QuizRounded';
import '../../styles/Sidenav.css'

function Sidenav() {
    const [reportsOpen, setReportsOpen] = useState(false);

    return (
        <SideNav
            onSelect={(selected) => {
                console.log(selected);
            }}
            className='mysidenav'
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon><HomeOutlinedIcon style={{ fontSize: "1.5em" }} /></NavIcon>
                    <NavText><Link to="/home">Home</Link></NavText>
                </NavItem>
                <NavItem eventKey="course">
                    <NavIcon><MenuBookRoundedIcon style={{ fontSize: "1.5em" }} /></NavIcon>
                    <NavText><Link to="/course">Course</Link></NavText>
                </NavItem>
                <NavItem eventKey="learner">
                    <NavIcon><AssignmentIndOutlinedIcon style={{ fontSize: "1.5em" }} /></NavIcon>
                    <NavText><Link to="/learner">Learner</Link></NavText>
                </NavItem>
                <NavItem eventKey="report" onClick={() => setReportsOpen(!reportsOpen)}>
                    <NavIcon><InsertChartOutlinedIcon style={{ fontSize: "1.5em" }} /></NavIcon>
                    <NavText>Reports</NavText>
                    {reportsOpen && (
                        <NavItem eventKey="reports">
                            <NavText>
                                <Link to="/learnerreport">Learner Report</Link>
                            </NavText>
                            <NavText>
                                <Link to="/coursereport">Course Report</Link>
                            </NavText>
                            {/* <NavText>
                                <Link to="/enroll">Enrollment Report</Link>
                            </NavText>
                            <NavText>
                                <Link to="/quiz">Quiz Report</Link>
                            </NavText> */}
                        </NavItem>
                    )}
                </NavItem>
            </SideNav.Nav>
        </SideNav>
    );
}

export default Sidenav;