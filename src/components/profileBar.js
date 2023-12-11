import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { IoLogOutOutline } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import './common.css'
export default function ProfileBar() {
    const [name, setName] = useState("Tùng");
    useEffect(() => {
        ///get data
    }, [])
    const logout = () => {

    }
    return (
        <div className="profile-bar">
            <h3>Xin chào, {name}</h3>
            <div className="profile-right-bar">
                <a href='/#'>
                    <Button
                        className="logout-button"
                        onClick={logout}
                    >
                        <IoIosNotifications size={30} color="black" />
                    </Button>
                </a>
                <a href='/#'>
                    <Button
                        className="logout-button"
                        onClick={logout}
                    >
                        <IoLogOutOutline size={30} color="black" />
                    </Button>
                </a>
                <a href='/profile'>
                    <Button
                        className="logout-button"
                        onClick={logout}
                    >
                        <CgProfile size={40} color="black"/>
                    </Button>
                </a>
            </div>

        </div>
    )
}