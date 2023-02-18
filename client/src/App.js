import { Routes, Route } from "react-router-dom";
import Phones from "./pages/Phones"
import PhoneDetails from "./pages/PhoneDetails"


function App() {
  return (
    <div>
      <Routes>
        <Route path="/phones" element={<Phones />} />
        <Route path="/phones/:id" element={<PhoneDetails />} />
      </Routes>
    </div>
  );
}

export default App;
