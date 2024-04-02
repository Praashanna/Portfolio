import React, {createContext, FC, useState, useContext} from "react";

interface MenuContextType {
    active: string;
    child: React.ReactNode;
    setActive: (active: string) => void;
    setChild: (child: React.ReactNode) => void;
}

const MenuContext = createContext<MenuContextType>(
    {
        active: 'Home',
        setActive: (active) => {},
        child: <></>,
        setChild: (child) => {}
    }
);

interface MenuProviderProps {
    children?: React.ReactNode;
}

const MenuProvider: FC<MenuProviderProps> = ({children}) => {
    const [active, setActive] = useState<string>('/');
    const [child, setChild] = useState<React.ReactNode>(<></>);

    return (
        <MenuContext.Provider value={{active, setActive, child, setChild}}>
            {children}
        </MenuContext.Provider>
    );
}

const useMenu = () => useContext(MenuContext);

export { MenuContext, MenuProvider, useMenu };
