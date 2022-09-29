import "./App.css";
import ChatBody from "./components/chatBody/ChatBody";
import ChatContent from "./components/chatContent/ChatContent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="__main">
      <Router>
        <Routes>
          <Route path="/" element={<ChatBody />}>
            <Route path="/room/:roomId" element={<ChatContent />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
