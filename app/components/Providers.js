"use client"
import { Provider } from "react-redux";
import { Store } from './Redux/Store'

export const Providers = ({ children }) => {
    return (
        <Provider store={Store}>
            {children}
        </Provider>
    )
}