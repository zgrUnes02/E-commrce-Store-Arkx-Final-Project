import React from 'react'
import Header from '../../layouts/Header'
import LeftSideBar from '../../layouts/LeftSideBar'

function Dashboard() {
    return (
        <React.Fragment>
            <Header/>
            <LeftSideBar/>

            <main id="main" class="main">

            <div class="pagetitle">
                <h1> Dashboard </h1>
            </div>

            </main>
        </React.Fragment>
    )
}

export default Dashboard
