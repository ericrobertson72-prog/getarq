
import { createRoot } from "react-dom/client";
import "./test.css";
function App() { return <div className="test">Hello</div>; }
createRoot(document.getElementById("root")!).render(<App />);
