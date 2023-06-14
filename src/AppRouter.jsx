import { Route, Routes } from "react-router";
import App from "./pages/Home";
import NotFound from "./pages/NotFound";
import DetailedCard from "./pages/DetailedCard";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/details/:imdbID" element={<DetailedCard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
