"use client"
import React, { useState } from 'react'
import { LiaMinusSquare, LiaPlusSquareSolid } from 'react-icons/lia'
import { useDispatch, useSelector } from 'react-redux'
import { AddCard, DeleteItem, Updateitems } from '../Redux/BazarSlice'
import { useEffect } from 'react'


const PlusButton = (item, index) => {
    const { bazarcard } = useSelector((e) => e)

    const dispatch = useDispatch();

    const [count, setCount] = useState(0);


    useEffect(() => {
        let ind = bazarcard.findIndex((item2, index2) =>
            item2?.item?.name == item?.item?.name
        )
        if (ind != -1 && bazarcard.length != 0) {
            setCount(bazarcard[ind]?.quantity)

        }
        else setCount(0)
    }, [bazarcard])

    const handleIncrement = () => {
        let tempitem = { ...item }
        tempitem.quantity = count + 1
        dispatch(count == 0 ? AddCard(tempitem) : Updateitems(tempitem))
        setCount(count + 1);
    }

    const handleDecrement = () => {
        let tempitem = { ...item };
        tempitem.quantity = count - 1;

        if (tempitem.quantity === 0) {
            dispatch(DeleteItem(tempitem));
        } else {
            dispatch(Updateitems(tempitem));
        }

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