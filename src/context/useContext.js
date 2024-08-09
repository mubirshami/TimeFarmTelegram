import { createContext, useContext, useState } from "react";

const defaultProvider = {
    user: null,
    total: null,
    points: null,
    welcomeBonus: null,
    setUser: () => {},
    setTotal: () => {},
    setPoints: () => {},
    setWelcomeBonus: () => {},
}

const Context = createContext(defaultProvider);

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [total, setTotal] = useState(0);
    const [points, setPoints] = useState(0);
    const [welcomeBonus, setWelcomeBonus] = useState(null);

    return (
        <Context.Provider value={{ user, setUser, total, setTotal, points, setPoints, welcomeBonus, setWelcomeBonus}}>
            {children}
        </Context.Provider>
    )
}

export const useCtx = () => useContext(Context);
