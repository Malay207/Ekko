import React from 'react'

export const Profiles = () => {
    return (
        <>
            <div className="profile" style={{
                position: "absolute",
                top: "70px",
                right: "0",
                width: "200px",
                height: "250px",
                backgroundColor: "black",
                zIndex: "1"

            }}>
                <div className="profile__top">
                    <h3 style={{
                        margin: "0 10px",
                        color: "white",
                        fontSize: "15px",
                        fontWeight: "bolder"
                    }}>Jese Leos</h3>
                    <h3 style={{
                        margin: "0 10px",
                        color: "white",
                        fontSize: "15px",
                        fontWeight: "bolder"
                    }}>example@gmail.com</h3>
                </div>
                <hr />
                <div className="profile__mid">
                    <h3 style={{
                        margin: "0 10px",
                        color: "white",
                        fontSize: "15px",
                        fontWeight: "bolder"
                    }}>
                        My profile
                    </h3>
                    <h3 style={{
                        margin: "0 10px",
                        color: "white",
                        fontSize: "15px",
                        fontWeight: "bolder"
                    }}>Account Setting</h3>
                </div>
                <hr />
                <div className="profile__mid2">
                    <h3 style={{
                        margin: "0 10px",
                        color: "white",
                        fontSize: "15px",
                        fontWeight: "bolder"

                    }}>My Likes</h3>
                    <h3 style={{
                        margin: "0 10px",
                        color: "white",
                        fontSize: "15px",
                        fontWeight: "bolder"
                    }}>My Collection</h3>
                    <h3 style={{
                        margin: "0 10px",
                        color: "white",
                        fontSize: "15px",
                        fontWeight: "bolder"
                    }}>Go pro </h3>
                </div>
                <hr />
                <div className="profile__bottom">
                    <h3 style={{
                        margin: "0 10px",
                        color: "white",
                        fontSize: "15px",
                        fontWeight: "bolder"
                    }}>Signout</h3>
                </div>
            </div>


        </>
    )
}
