import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Headers from "./Headers";
import Sidebar from "./components/sidebar";
import Collections from "./Collections";
// import collectionsList from "./components/collectionList";
import "./App.css";
const App = ({ Component, pageProps }) => {
  return (
    <Router>
    <div className="flex flex-row w-screen h-screen bg-gray-300">
      <Sidebar />
      <div className="flex-1">
        <Headers />
        <Routes>
          <Route path="/Collections" element={<Collections  />} />
        </Routes>
      </div>
    </div>
  </Router>
  );
};

export default App;
