import React from 'react'
import Auth from './Redux/Auth'
import Balance from './Redux/Balance'
import Banking from './Redux/Banking'
import AccountStatus from './Redux/AccountStatus'


function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Auth />
            <Balance />
            <Banking />
            <AccountStatus />
        </div>
    )
}

export default Home