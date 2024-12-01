import { createContext, useContext, useEffect, useState } from "react";



const StateContext = createContext()

export const manageState = () => {
    return useContext(StateContext)
}


const StateProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [openSidenav, setOpenSidenav] = useState(false)
    const [notificationIsOpen, setNotificationIsOpen] = useState(false)
    const [navbarToggler, setNavbarToggler] = useState(false)
    const [theme, setTheme] = useState("theme1")
    const [bgColor, setBgColor] = useState("white")
   

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
        const savedTheme = localStorage.getItem("theme")
        if (savedTheme) {
            setTheme(savedTheme)
        }
        
    }, [theme])

  
    const handleThemeChange = (newTheme) => {
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
    }
    const toggleNavbar = () => {
        setNavbarToggler(prev => !prev)
    }
    const handleBgColor = (color) => {
        setBgColor(color)
    }
   

const value = {
    isOpen,
    handleDashboardConfigurator,
    openSidenav,
    handleOpenSidenav,
    notificationIsOpen,
    handleOpenNotification,
    toggleNavbar,
    navbarToggler,
    theme, 
    handleThemeChange,
    bgColor,
    handleBgColor
}
return (
    <StateContext.Provider value = {value}>
        {children}
    </StateContext.Provider>
)
}

export default StateProvider