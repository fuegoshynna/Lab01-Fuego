import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    document.title = showModal ? "Modal Page" : "Main Page";
  }, [showModal]);

  return (
    <div className="app">
      {showModal ? (
        // MODAL PAGE
        <div className="modal-page">
          <h1>This is a Modal Window</h1>

          <div className="modal-buttons">
            <button
              className="cancel-btn"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>

            <button
              className="ok-btn"
              onClick={() => setShowModal(true)}
            >
              OK
            </button>
          </div>
        </div>
      ) : (
        // MAIN PAGE
        <div className="main-page">
          <h1>Conditional Rendering</h1>

          <p className="pending">Pending</p>

          <button
            className="view-btn"
            onClick={() => setShowModal(true)}
          >
            Click to View Modal
          </button>
        </div>
      )}
    </div>
  );
}

export default App;