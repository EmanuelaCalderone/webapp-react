//importo createContext e useState per creare il context
import { createContext, useState } from "react";

//creo il context per il loader
export const LoaderContext = createContext();

//creo il provider per la gestione dello stato del loader
export const LoaderProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);

    //funzione per attivare e disattivare il loader
    const showLoader = () => setLoading(true);
    const hideLoader = () => setLoading(false);

    return (
        <LoaderContext.Provider value={{ loading, showLoader, hideLoader }}>
            {children}
        </LoaderContext.Provider>
    );
};

