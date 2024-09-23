'use client';

import { useState, useEffect } from "react";
import CountDownElement from "./countdown-element";
import classes from './countdown-row.module.css';


export default function CountDownRow() {

    const targetTime = new Date("2024-12-31").getTime();
    const [currentTime,setCurrentTime] = useState(Date.now());

    const timeBetween = targetTime - currentTime;
    const seconds = Math.floor((timeBetween / 1000) % 60);
    const minutes = Math.floor((timeBetween / 1000 / 60) % 60);
    const hours = Math.floor((timeBetween / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));
    
    useEffect(() => {
        const timer = setInterval(()=>setCurrentTime(Date.now()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }});

    return(
        <div className={classes.countDownRow}>
            <CountDownElement value={days} label="DAYS"/>
            <CountDownElement value={hours} label="HOURS"/>
            <CountDownElement value={minutes} label="MINUTES"/>
            <CountDownElement value={seconds} label="SECONDS"/>
        </div>
    );
}