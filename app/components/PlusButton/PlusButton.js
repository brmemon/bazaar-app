"use client"
import React, { useState } from 'react'
import { LiaMinusSquare, LiaPlusSquareSolid } from 'react-icons/lia'
import { useDispatch } from 'react-redux'
import { AddCard, Updateitems } from '../Redux/BazarSlice'


const PlusButton = ( item, index ) => {
    const dispatch = useDispatch();

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        let tempitem = {...item}
        tempitem.quantity = count + 1
        { count == 0 ? dispatch(AddCard(tempitem)) : dispatch(Updateitems(tempitem)) }
        // dispatch(AddCard(tempitem))
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }

    return (
        <div
            style={{
                color: "red", display: "flex", alignItems: "center",
                cursor: "pointer", flexDirection: "column-reverse"
            }}
        >
            <div
                style={{ fontSize: "35px", fontWeight: "400", userSelect: "none" }}
                onClick={() => {
                    handleIncrement()
                }} >

                <LiaPlusSquareSolid />
            </div>
            {
                count ?
                    <>
                        <div style={{ fontSize: "15px", color: "black", fontWeight: "500" }}>{count ? count : false}</div>
                        <div
                            style={{ fontSize: "35px", fontWeight: "400" }}
                            onClick={handleDecrement}>
                            <LiaMinusSquare />
                        </div>
                    </> : false
            }
        </div>
    )
}

export default PlusButton
