import { Route, Routes } from "react-router"
import App from "./App"
import NotFound from "./pages/NotFound"
import DetailedCard from "./pages/DetailedCard"

const AppRouter = () => {
  return (
      <div>
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="/details/:movieId" element={<DetailedCard/>} />
              <Route path="*" element={ <NotFound/>} />
          </Routes>
    </div>
  )
}

export default AppRouter
