import "./App.css";
import React, { useEffect, useState } from "react";
import CardMuseo from '../src/CardMuseo'

function App() {
  const URL = "https://back-museums-uniandes.herokuapp.com/api/museums"
  const [museos, setMuseo] = useState([]);
  const [curMuseum, setCurMuseum] = useState();

  useEffect(() => {
    fetch(URL)
      .then((result) => result.json())
      .then((museo) => setMuseo(museo));
  }, []);

  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "lightgray"}}>
        <div class="container-fluid">  
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <h1 style={{fontFamily: 'Sevillana'}}>Museos de arte moderno</h1>
            <ul class="navbar-nav navbar-right">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Museos
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Artistas
                </a>
              </li>
              <li class="nav-item">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Movimientos
                </a>
              </li>
              </li>
            </ul>
            <form class="d-flex">
            </form>
          </div>
        </div>
      </nav>
      <p className="home"> Home &gt; Museos</p> 
      <nav class="navbar navbar-expand-lg navbar-light" className="navbarmuseo" style={{backgroundColor: "lightgray"}}>
        <h3>MUSEOS</h3>
      </nav>
      {/* 
      //<div id="museum-cards">
        {
          museos.map(museo => (
          <CardMuseo key={museo.id} museo={museo} />
          ))
        }
      </div>
      */ }
    </div>
  );
}




export default App;
