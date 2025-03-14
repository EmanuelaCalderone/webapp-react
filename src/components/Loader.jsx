import { useContext } from "react";
import { LoaderContext } from "../context/LoaderContext";

const Loader = () => {
    const { loading } = useContext(LoaderContext);

    //se loading è false, non mostro nulla
    if (!loading) return null;

    return (
        <div className="loader-overlay">
            <div className="loader"></div>
        </div>
    );
};

export default Loader;
