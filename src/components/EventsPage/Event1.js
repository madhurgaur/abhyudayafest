import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Event from "./Event";
import DancePage from "./Dancepage";
import MusicPage from "./Musicpage";

function Event1() {
    return (
    <Router>
        <div className="App" >
        <Routes>
            <Route path="/" element={<Event />} />
            <Route path="/dance" element={<DancePage />} />
            <Route path="/music" element={<MusicPage />} />
        </Routes>
        </div>
    </Router>
    );
}
export default Event1;

