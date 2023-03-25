import React from 'react'
import "./style/dashboard.css"

function dashboard(props) {
    function show() {
        const icon = document.getElementById("profile");
        icon.style.transform = 'translateX(0%)';
        icon.style.transition = 'all 0.5s ease-in-out';
        setTimeout(() => {
            document.addEventListener("click", () => {
                icon.style.transform = 'translateX(-100%)';
                icon.style.transition = 'all 0.5s ease-in-out';
            })

        }, 2000)

    }

    return (
        <>
            <div className='dashmin' id='profile' >
                <div className="main-container">
                    <div className="left-main-container-1">
                        <div className="left-top-container-1">
                            <img src="https://www.citypng.com/public/uploads/preview/free-round-flat-male-portrait-avatar-user-icon-png-11639648873oplfof4loj.png" alt="" style={{
                                width: "100px",
                                height: "100px",
                                borderRadius: "50%",
                            }
                            } />
                            <h1 style={{ margin: "0", }}>EKKO</h1>
                            <h3 style={{ margin: "0", }}>www.Ekoo.network</h3>
                        </div>
                        <div className="left-top-container-2">
                            <ul>
                                <li><i className="fa-brands fa-facebook" style={{ color: "#1c4792" }}></i></li>
                                <li><i className="fa-solid fa-basketball" style={{ color: "#b65535", }}></i></li>
                                <li><i className="fa-brands fa-linkedin-in" style={{ color: "#204e9d" }}></i></li>
                                <li><i className="fa-brands fa-discord" style={{ color: "#1c4da0" }}></i></li>
                                <li><i className="fa-brands fa-google" style={{ color: "#561070" }}></i></li>
                            </ul>
                        </div>
                    </div>
                    <div className="left-main-container-2">
                        <div className="left-mid-container">
                            <ul>
                                <li><i className="fa-solid fa-cart-shopping" style={{ color: "#1a81ad" }}></i>Orders</li>
                                <li><i class="fa-solid fa-users-rectangle" style={{ color: "#1a81ad" }}></i>Custumers</li>
                                <li><i className="fa-solid fa-boxes-stacked" style={{ color: "#248794" }}></i>Products</li>
                                <li><i className="fa-solid fa-bag-shopping" style={{ color: "#277b90" }}></i>Marketing</li>
                                <li><i className="fa-solid fa-tag" style={{ color: "#2b9ea6" }}></i>Discount</li>
                            </ul>
                        </div>
                    </div>
                    <div className="left-main-container-3">
                        <div className="left-bottom-container">
                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <i class="fa-solid fa-user" style={{
                                    color: "#2d5eb4",
                                    marginRight: "10px",

                                }}></i>
                                <h3 style={{ margin: "0", }}>Personal Account</h3>
                            </div>
                            <h5 style={{
                                margin: "0",
                                textAlign: "center",
                            }}>Switch to pro plan</h5>
                        </div>
                    </div>
                </div>
                <div className="change" style={{
                    display: "flex",
                    margin: "0 1.5rem",
                }}>
                    <i class="fa-sharp fa-solid fa-gear" style={{
                        color: "black",
                        marginRight: "20px",
                        fontSize: "30px",
                        borderRadius: "50%",


                    }}></i>
                    <i class="fa-solid fa-sun" onClick={props.setbg} style={{
                        color: "black",
                        marginRight: "20px",
                        fontSize: "30px",
                        borderRadius: "50%",
                        cursor: 'pointer'
                    }}></i>
                </div>
            </div>
            <div className='dashmin1' id="profil">
                <i onClick={show} class="fa-solid fa-list" style={{
                    color: "black",
                    marginRight: "20px",
                    fontSize: "30px",
                    borderRadius: "50%",
                    cursor: 'pointer',
                    margin: "2.5rem 5px"
                }}></i>
            </div>

        </>
    )
}

export default dashboard