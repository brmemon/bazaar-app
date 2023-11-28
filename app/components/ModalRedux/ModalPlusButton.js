import React, { useState } from 'react'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { UpdateModalitems } from '../Redux/BazarSlice';
import { useEffect } from 'react';

const ModalPlusButton = ({ item, index }) => {
    const { bazarcard } = useSelector((e) => e)
    const dispatch = useDispatch();
    const [count, setCount] = useState(0);
    useEffect(() => {
        setCount(bazarcard[index]?.quantity)
    }, [bazarcard])
    const handleIncrement = () => {
        let obj = { ind: index, quantity: 1 }
        dispatch(UpdateModalitems(obj))
        setCount(count + 1);
    }

    const handleDecrement = () => {
        if (count > 1) {
            let obj = { ind: index, quantity: -1 }
            dispatch(UpdateModalitems(obj))
            setCount(count - 1);
        }
    }

    return (
        <div style={{ color: "red", cursor: "pointer" }}>

            <div
                style={{ fontSize: "20px", userSelect: "none" }}
                onClick={handleIncrement}>
                <AiOutlinePlusCircle />
            </div>

            <div
                style={{
                    fontSize: "15px", color: "black", fontWeight: "500",
                    display: "flex", justifyContent: "center"
                }}>
                {count ? count : false}
            </div>

            <div
                style={{ fontSize: "20px", fontWeight: "400" }}
                onClick={handleDecrement}
                className={count <= 1 ? 'disabled' : ''}
            >
                <AiOutlineMinusCircle />
            </div>
        </div>
    )
}

export default ModalPlusButton

