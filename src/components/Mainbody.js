import React from 'react'
import "./style/mainbody.css"
import { useState } from 'react'
import growth from "./growth.png"
import Static from "./static.png"
import { Team } from './Team'
import { Todo } from './Todo'
import { Profiles } from './Profiles'

export const Mainbody = () => {
    const [Hover, setHover] = useState(false)
    return (
        <>
            <>
                <div className="body-main-component">
                    <div className="body-main-component__top">
                        <div className="search">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Search" />
                        </div>
                        <div className="user">
                            <i class="fa-solid fa-bell"></i>
                            <a href="#" onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }}><i class="fa-solid fa-user"></i></a>
                            <div>{Hover ? <Profiles /> : null}
                            </div>
                        </div>
                    </div>
                    <div className="body-main-component__middle">
                        <ul>
                            <li>
                                <h4 style={{ margin: "0" }}>Total Sale</h4>
                                <h3 style={{ margin: "0" }}>1,000K  <i class="fa-solid fa-chart-simple" ></i></h3>
                            </li>
                            <li><h4 style={{ margin: "0" }}>Visits</h4>
                                <h3 style={{ margin: "0" }}>412.05  <i class="fa-solid fa-chart-line"></i></h3></li>
                            <li><h4 style={{ margin: "0" }}>New Users</h4>
                                <h3 style={{ margin: "0" }}>1,156 <i class="fa-solid fa-chart-simple" ></i></h3></li>
                            <li><h4 style={{ margin: "0" }}>Active Users</h4>
                                <h3 style={{ margin: "0" }}>239K <i class="fa-solid fa-chart-line"></i></h3></li>
                        </ul>

                    </div>
                    <div className="body-main-component__bottom">
                        <div className='activite'>
                            <div style={{
                                display: "flex", justifyContent: "space-between", alignItems: "center"
                            }}>
                                <h3 style={{ margin: "10px 0" }}>Activities</h3>
                                <input type="text" placeholder='year' style={{
                                    width: "100px", height: "30px", border: "none", borderRadius: "5px", outline: "none"
                                }} />
                            </div>

                            <img src={growth} alt="" />
                        </div>
                        <div className='activite'>
                            <img src={Static} alt="" />
                            <h3 style={{ margin: "10px 0" }}>Orders</h3>
                        </div>
                        <div className='activite'><h3 style={{ margin: "10px 0" }}>TODO</h3>
                            <Todo />
                        </div>
                        <div className='activite'><h3 style={{ margin: "10px 0" }}>Team</h3>
                            <Team />
                        </div>
                    </div>

                </div>
            </>
        </>
    )
}
