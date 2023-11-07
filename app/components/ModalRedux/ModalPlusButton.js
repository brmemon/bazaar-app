// "use client"
// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { AddCard, UpdateQuantity } from '../Redux/BazarSlice'
// import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'


// const ModalPlusButton = ({item, index}) => {
//     const dispatch = useDispatch();

//     const [count, setCount] = useState(item?.quantity);
//     console.log(item,"data")

//     const handleIncrement = () => {
//         // dispatch(UpdateQuantity(item))
//         setCount(count + 1);
//     }

//     const handleDecrement = () => {
//         setCount(count - 1);
//     }

//     return (
//         <div style={{ color: "red", cursor: "pointer" }}>

//             <div
//                 style={{ fontSize: "20px", userSelect: "none" }}
//                 onClick={handleIncrement}>
//                 <AiOutlinePlusCircle />
//             </div>

//             <div
//                 style={{ fontSize: "15px", color: "black", fontWeight: "500" }}>
//                 {count ? count : false}
//             </div>

//             <div
//                 style={{ fontSize: "20px", fontWeight: "400" }}
//                 onClick={handleDecrement}>
//                 <AiOutlineMinusCircle />
//             </div>
//         </div>
//     )
// }

// export default ModalPlusButton





















import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddCard, UpdateQuantity, Updateitems } from '../Redux/BazarSlice'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'

const ModalPlusButton = ({ item, index }) => {
    const [count, setCount] = useState(item?.quantity);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        if (count > 1) {
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

