import { Route, Routes } from "react-router";
import App from "./pages/Home";
import NotFound from "./pages/NotFound";
import DetailedCard from "./pages/DetailedCard";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/moviewave" element={<App />} />
        <Route path="/moviewave/details/:imdbID" element={<DetailedCard />} />
        <Route path="/moviewave/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
