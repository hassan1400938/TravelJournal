import React from "react";
import siteLogo from "../assets/site-logo.svg";

export default function Header(){
    return (
        <header className="header">
            <img src={siteLogo} className="header--site-logo"/>
            <h1 className="header--site-title">my travel journal.</h1>
        </header>
    )
}