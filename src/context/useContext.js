import { createContext, useContext, useState } from "react";

const defaultProvider = {
    user: null,
    total: null,
    points: null,
    welcomeBonus: null,
    maxValue: 20000,
    setUser: () => {},
    setTotal: () => {},
    setPoints: () => {},
    setWelcomeBonus: () => {},
    setMaxValue: () => {},
}

const Context = createContext(defaultProvider);

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [total, setTotal] = useState(0);
    const [points, setPoints] = useState(0);
    const [welcomeBonus, setWelcomeBonus] = useState(null);
    const [maxValue, setMaxValue] = useState(20000);

    return (
        <Context.Provider value={{ user, setUser, total, setTotal, points, setPoints, welcomeBonus, setWelcomeBonus, maxValue, setMaxValue }}>
            {children}
        </Context.Provider>
    )
}

export const useCtx = () => useContext(Context);
