import React from "react";

import Banner from "./components/Banner";
import Booking from "./components/Booking";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Price } from "./components/Price";
import Travel from "./components/Travel";

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Booking />
            <Travel />
            <Explore />
            <Price />
            <Banner />
            <Footer />
        </div>
    );
}

export default App;
