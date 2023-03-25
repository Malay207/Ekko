import React from 'react'
import { useState, useEffect } from 'react'
import "./style/todo.css"

export const Team = () => {
    const getlocaldata = () => {
        const list = localStorage.getItem("mymember")
        if (list) {
            return JSON.parse(list)
        }
        else {
            return []
        }
    }
    const [input, setinput] = useState("")
    const [item, setitem] = useState(getlocaldata());
    const [toggle, settoggle] = useState(true)
    const [Edititem, setEdititem] = useState(null)
    const additem = () => {
        if (!input) {
            alert("please fill the data")
        }
        else if (input && !toggle) {
            setitem(item.map((ele) => {
                if (ele.id === Edititem) {
                    return { ...ele, name: input }
                }
                return ele
            }
            ))
            setinput("")
            setEdititem(null)
            settoggle(true)

        }

        else {
            const allinput = { id: new Date().getTime().toString(), name: input };
            setitem([...item, allinput])
            setinput("")
        }
    }
    useEffect(() => {
        localStorage.setItem("mymember", JSON.stringify(item))
    }, [item])

    return (
        <>
            <div className="addtodo">
                <input type="text" placeholder="Add Member" value={input}
                    onChange={(e) => setinput(e.target.value)}
                />
                {
                    toggle ? <i class="fa-solid fa-plus" style={{ color: "#2c58a5" }} title="add item" onClick={additem}></i> :
                        <i class="fa-solid fa-pen-to-square" style={{ color: "#2c58a5" }} title="edit item" onClick={additem}></i>
                }
            </div>
            <div className="showtodo">
                {item.map((ele) => {
                    return (
                        <div className="eachtodo" key={ele.id}>
                            <div className='show'>
                                <p style={{ color: "black", margin: "0" }}>{ele.name}</p>
                            </div>
                            <div>
                                <i class="fa-solid fa-message" style={{ color: "#305fb0" }}></i>                                <i class="fa-solid fa-phone" style={{ color: "#305fb0" }}></i>
                            </div>
                        </div>
                    )
                })}

            </div>
        </>
    )
}
