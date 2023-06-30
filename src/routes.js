import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeCategory from "./pages/HomeCategory";
import Watch from "./pages/Watch";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";

const AppRoutes = () => {
    return (
        <BrowserRouter>
                    <Routes>
                        <Route path= "/" element= { <Search /> } ></Route>
                        <Route path= "/search-category" element= { <HomeCategory /> } ></Route>
                        <Route path= "/watch/:id" element= { <Watch /> } ></Route>
                        <Route path= "*" element= { <NotFound /> } ></Route>
                    </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes; 