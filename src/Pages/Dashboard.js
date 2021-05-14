import React from 'react'
import { useSelector } from 'react-redux'
import NavigationBar from '../components/NavigationBar'
import DashboardSecond from "../components/DashboardSecond"
import ThirdSectionDashboard from '../components/ThirdSectionDashboard'
import Footer from '../components/Footer';




export const Dashboard = () => {
    const state = useSelector(state => state.userData)
    return (
        <div>
            <NavigationBar />
            <div className="dashboard__firstSection">
                <h1 className="thanking__heading">Thanks, {state.name}</h1>
                <p className="thanking__para">You are part of the challenge. Thanks for supporting #IStandForGenderEquality.</p>
            </div>
            <DashboardSecond />
            <ThirdSectionDashboard />
            <Footer/>

        </div>
    )
}
