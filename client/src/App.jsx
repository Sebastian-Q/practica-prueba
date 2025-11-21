import { useState } from "react";
import TestController from "./models/test/test.controller"

function App() {
  const [message, setMessage] = useState("");

  const callApi = async () => {
    const response = await TestController.callToAPI();
    setMessage(response.message);  // aquí guardas el mensaje
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a href="" className="navbar-brand">ADK-Demo</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="" className="nav-link active">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-m">
        <h2>Inicio</h2>
        <hr />
        <button onClick={callApi} className="btn btn-success">Llamar a mi API</button>
      </div>

      {/* Mostrar mensaje */}
        {message && (
          <div className="alert alert-info mt-3">
            {message}
          </div>
        )}
    </>
  )
}

export default App
