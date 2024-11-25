import { createContext, useContext, useEffect, useState } from "react";



const StateContext = createContext()

export const manageState = () => {
    return useContext(StateContext)
}


const StateProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [openSidenav, setOpenSidenav] = useState(false)
    const [notificationIsOpen, setNotificationIsOpen] = useState(false)
    const [colorChange, setColorChange] = useState("gray-800")
    const [navbarToggler, setNavbarToggler] = useState(false)
   

    const handleDashboardConfigurator = () => {
        setIsOpen(prev => !prev)
    }
    const handleOpenSidenav = () => {
        setOpenSidenav(prev => !prev)
    }

    const handleOpenNotification = () => {
        setNotificationIsOpen(prev => !prev)
    }
    const handleChangeColor = (color) => {
        setColorChange(color)
    }
    const toggleNavbar = () => {
        setNavbarToggler(prev => !prev)
    }
   

const value = {
    isOpen,
    handleDashboardConfigurator,
    openSidenav,
    handleOpenSidenav,
    notificationIsOpen,
    handleOpenNotification,
    colorChange,
    handleChangeColor,
    toggleNavbar,
    navbarToggler,
}
return (
    <StateContext.Provider value = {value}>
        {children}
    </StateContext.Provider>
)
}

export default StateProvider