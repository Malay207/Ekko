import React from 'react'
import { useState, useEffect } from 'react'
import "./style/todo.css"

export const Todo = () => {
    const getlocaldata = () => {
        const list = localStorage.getItem("mytodolist")
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
    const deleteitem = (ind) => {
        const updateditem = item.filter((ele) => {
            return ind !== ele.id
        })
        setitem(updateditem)
    }
    useEffect(() => {
        localStorage.setItem("mytodolist", JSON.stringify(item))
    }, [item])
    const edititem = (ind) => {
        const newinput = item.find(
            (ele) => {
                return ind === ele.id
            }
        )
        settoggle(false)
        setinput(newinput.name)
        setEdititem(ind)

    }

    return (
        <>
            <div className="addtodo">
                <input type="text" placeholder="Enter Todo" value={input}
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
                                <input type="checkbox" />
                                <p style={{ color: "black", margin: "0" }}>{ele.name}</p>
                            </div>
                            <div>
                                <i class="fa-solid fa-pen-to-square" title="edit item" onClick={() => edititem(ele.id)}></i>
                                <i class="fa-solid fa-trash" title="delete item" onClick={() => deleteitem(ele.id)}></i>
                            </div>
                        </div>
                    )
                })}

            </div>
        </>
    )
}
