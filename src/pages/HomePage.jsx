import { Helmet } from "react-helmet"
import '../assets/css/HomePage.css';
// import { useState } from "react";
import Header from "../components/HomePageHeader";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

function HomePage() {

    return (
        <>
            <Helmet>
                <title>Google Search</title>
                <link rel="icon" href={require('../assets/images/icon.png')} type="image/x-icon"></link>
            </Helmet>

            {/* Header  */}
            <Header />
            
            {/* body - Search Bar */}
            <SearchBar />

            {/* Footer */}
            <Footer />
        </>
    )
}

export default HomePage