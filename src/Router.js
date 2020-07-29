import React from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Howitwork from "./pages/Howitwork";
import AboutUs from "./pages/Aboutus";
function Router() {
  return (
    <Routes>
      <Route exact path="/" component={Home} />
      <Route path="/signin" component={Signin} />
      <Route path="/how-it-work" component={Howitwork} />
      <Route path="/about-us" component={AboutUs} />
    </Routes>
  );
}

export default Router;
