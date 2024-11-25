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
    const [theme, setTheme] = useState("theme1")
   

    const handleDashboardConfigurator = () => {
        setIsOpen(prev => !prev)
    }
    const handleOpenSidenav = () => {
        setOpenSidenav(prev => !prev)
    }

    const handleOpenNotification = () => {
        setNotificationIsOpen(prev => !prev)
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "theme1"
        setTheme(savedTheme)
    }, [])

    const handleChangeColor = (color) => {
        setColorChange(color)
    }
    const handleThemeChange = (newTheme) => {
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
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
    theme, 
    handleThemeChange
}
return (
    <StateContext.Provider value = {value}>
        {children}
    </StateContext.Provider>
)
}

export default StateProvider