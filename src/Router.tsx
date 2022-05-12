import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coin from "./routes/Coin.tsx";
import Coins from "./routes/Coins.tsx";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/:coinId" element={<Coin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
