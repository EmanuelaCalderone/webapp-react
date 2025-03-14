import { useContext } from "react";
import { useState, useEffect } from "react";
//importo outer di module react-router
import { Outlet } from "react-router-dom"
//importo l'header
import Header from "../components/Header"
//importo Loader
import Loader from "../components/Loader";
import { LoaderContext } from "../context/LoaderContext";

const DefaultLayout = () => {
    //recupero lo stato del loader
    const { loading } = useContext(LoaderContext);

    return (
        <>
            <Header />
            {/* Mostro il loader solo se loading è true */}
            {loading && <Loader />}
            <main className="container">
                <Outlet />
            </main>
        </>
    );
};

export default DefaultLayout;