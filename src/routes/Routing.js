
import React from 'react'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import Home from '../view/Home'
import Course from '../view/Course'
import Learner from '../view/Learner'
import LearnerReport from '../components/AdminComponent/LearnerReport'
import CourseReport from '../components/AdminComponent/CourseReport'
import AdminNavbar from '../components/AdminComponent/AdminNavbar'

function Routing() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<AdminNavbar/>}></Route>
                    <Route path='/home' element={<Home />}></Route>
                    <Route path='/course' element={<Course />}></Route>
                    <Route path='/learner' element={<Learner />}></Route>
                    <Route path='/learnerreport' element={<LearnerReport />}></Route>
                    <Route path='/coursereport' element={<CourseReport />}></Route>
                </Routes>
            </BrowserRouter>


        </div>
    )
}

export default Routing
