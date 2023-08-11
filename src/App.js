import React, { useState } from "react";
import CardGrid from "./Componenets/card";
import Header from "./Componenets/header";
import Navbar from "./Componenets/navbar";
import Footer from "./Componenets/footer";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const [cartValue, setCartValue] = useState(0);

  return (
    <>
      <Navbar cartValue={cartValue} />
      <Header />
      <section>
        <div className="container">
          <div className="row">
            <CardGrid setCartValue={setCartValue}></CardGrid>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default App;
