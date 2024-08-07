import { createContext, useContext, useState } from "react";

const defaultProvider = {
    user: null,
    total: null,
    points: null,
    setUser: () => {},
    setTotal: () => {},
    setPoints: () => {}
}

const Context = createContext(defaultProvider);

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [total, setTotal] = useState(0);
    const [points, setPoints] = useState(0);

    return (
        <Context.Provider value={{ user, setUser, total, setTotal, points, setPoints}}>
            {children}
        </Context.Provider>
    )
}

export const useCtx = () => useContext(Context);
