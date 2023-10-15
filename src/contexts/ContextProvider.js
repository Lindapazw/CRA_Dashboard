import React, {createContext, useContext, useState} from "react";

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    useProfile: false,
    notificaton: false,
}

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState (true);
    const [isClicked, setIsClicked] = useState (initialState);
    return (
        <StateContext.Provider value={{ 
            activeMenu,
            setActiveMenu,
            isClicked, 
            setIsClicked,
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);