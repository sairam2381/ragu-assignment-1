import { Link, Routes, Route } from "react-router-dom";
import ApicallComponent from "./components/api-call";

function App() {
  return (
    <>
      <div>
        <h1>Hello world</h1>
        <nav>
          {/* Links to navigate */}
          <Link to="/">Home</Link> |<Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/api-call-component" element={<ApicallComponent />} />
        </Routes>
      </div>
    </>
  );
}

function Home() {
  return <h2>Welcome to the Home Page</h2>;
}

function About() {
  return <h2>This is the About Page</h2>;
}

export default App;
