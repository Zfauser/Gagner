import React, { useState, useEffect } from "react";
import "../styles/MoneyDisplay.css";

const cookie = document.cookie.split(";");
let money;

const MoneyDisplay = () => {

    // attempt to get money from cookies
    // attempt to get money from cookies
const [money, setMoney] = useState(0);

    useEffect(() => {
        setInterval(() => {
        let moneyValue = 0;
        try {
            // get cookie
            moneyValue = cookie[0].split("=")[1];
        } catch (err) {
            // create cookie
            document.cookie = "money=100";
        } finally {
            // set money
            moneyValue = cookie[0].split("=")[1];
        }
    
        setMoney(moneyValue);
    }, 1000)
    }, []);

    return (
        <div className="money-display">
            <h2>Total Money: {money}</h2>
            <hr></hr>
            <br></br>
        </div>
    );
    };

export default MoneyDisplay;