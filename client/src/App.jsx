import React, {Suspense,lazy} from "react";
import {Switch,Route} from "react-router-dom";

import "./styles/main.css";
// Importing components
import NavBar from "./components/NavBar.jsx";
import CookiePopup from "./components/CookiePopup.jsx";

// Importing Pages
const HomePage = lazy(() => import("./pages/HomePage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Form  = lazy(() => import("./pages/Form"));

const renderLoader = () => (
  <div></div>
);

export default function App() {

  return (
    <div id="pseudo-body">
      <NavBar />
      <CookiePopup />
      <Switch>
        <Route component={() => <Suspense fallback={renderLoader()}><HomePage /></Suspense>} exact path="/" />
        <Route component={() => <Suspense fallback={renderLoader()}><Form /></Suspense>} path="/form/:id" />
        
        {/* 404 Page */}
        <Route component={() => <Suspense fallback={renderLoader()}><PageNotFound /></Suspense>} path="*" />
      </Switch>
    </div>
  );
}
