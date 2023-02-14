import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { collectInterest, deleteAccount, deposit, withdraw, toggleAccount } from "../Action/bankingAction"

const Banking = () => {

    const [amount, setAmount] = useState("")

    const dispatch = useDispatch()

    const handleDeposit = () => {
        dispatch(deposit(amount))
    }

    const handleWithdraw = () => {
        dispatch(withdraw(amount))
    }

    const handleCollectInterval = () => {
        dispatch(collectInterest())
    }

    const handleDeleteAccount = () => {
        dispatch(deleteAccount())
    }

    const handleChangeAccess = () => {
        dispatch(toggleAccount())
    }



    return (
        <div className="form-group">
            <input type="text" className="form-control" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <button className="btn btn-success" onClick={handleDeposit}>Deposit</button>
            <button className="btn btn-primary" onClick={handleWithdraw}>Withdraw</button>
            <button className="btn btn-warning" onClick={handleCollectInterval}>Collect Interest</button>
            <button className="btn btn-danger" onClick={handleDeleteAccount}>Delete Account</button>
            <button className="btn btn-secondary" onClick={handleChangeAccess}>Change Access</button>
        </div>
    )
}

export default Banking