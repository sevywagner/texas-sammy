import React, { useState } from "react";

const sidebarContext = React.createContext({
    paths: [],
    title: '',
    fallback: '',
    setTitleHandler: (title) => {},
    setPathsHandler: (paths) => {},
    setFallBackHandler: (fallback) => {}
});

export const SidebarContextProvider = (props) => {
    const [paths, setPaths] = useState();
    const [title, setTitle] = useState();
    const [fallback, setFallBack] = useState('');

    const setTitleHandler = (title) => {
        setTitle(title);
    }

    const setPathsHandler = (paths) => {
        setPaths(paths);
    }

    const setFallBackHandler = (fallback) => {
        setFallBack(fallback);
    }

    return (
        <sidebarContext.Provider
            value={{
                paths,
                title,
                fallback,
                setTitleHandler,
                setPathsHandler,
                setFallBackHandler
            }}
        >
            {props.children}
        </sidebarContext.Provider>
    );
}

export default sidebarContext;