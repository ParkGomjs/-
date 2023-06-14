import React, { useState } from "react";
import "./App.css";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setModalOpen(true)}>모달창 열기</button>
      {modalOpen && (
        <div className="modalOverlay" onClick={() => setModalOpen(false)}>
          <div className="modalWindow" onClick={(e) => e.stopPropagation()}>
            <h1>모달창</h1>
            <p>이곳은 모달창입니다.</p>
            <button onClick={() => setModalOpen(false)}>닫기</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
