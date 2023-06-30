import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeCategory from "./pages/HomeCategory";
import Watch from "./pages/Watch";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";
import FavoritesContext from "./contexts/Favorites";

const AppRoutes = () => {
    return (
        <FavoritesContext value={{ user: 'learning' }} >
            <BrowserRouter>
                <Routes>
                    <Route path= "/" element= { <Search /> } ></Route>
                    <Route path= "/search-category" element= { <HomeCategory /> } ></Route>
                    <Route path= "/watch/:id" element= { <Watch /> } ></Route>
                    <Route path= "*" element= { <NotFound /> } ></Route>
                </Routes>
        </BrowserRouter>
     </FavoritesContext>
    );
}

export default AppRoutes; 