import React, { Component } from 'react'
import '../App.css';


export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar1 bg-warning p-2">
                    <div style={{color: "white"}}><i class="fas fa-bars"></i></div>
                    <div style={{color: "red", marginLeft: "30px"}}>Advancing for Humanity</div>
                    <div style={{margin: "auto"}}><input style={{borderRadius: "30px", width: "500px", backgroundColor: "blueviolet", color: "white"}} type="search" placeholder="    search" /></div>
                    <div className="ml-auto" style={{color: "white"}}><i class="fas fa-user-friends"></i></div>
                    <div className="ml-5" style={{color: "white"}}><i class="fas fa-bell"></i></div>
                    <div className="ml-5 mr-3" style={{color: "white"}}><i class="fas fa-comment-alt"></i></div>
                </nav>
            </div>
        )
    }
}
