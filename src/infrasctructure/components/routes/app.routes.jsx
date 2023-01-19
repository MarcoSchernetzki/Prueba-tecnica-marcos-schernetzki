import { Routes, Route } from "react-router-dom";
import { CreatePage } from "../../../features/pages/createPage/createPage";
import { HomePage } from "../../../features/pages/homePage/homePage";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="Añadir" element={<CreatePage />}></Route>
            <Route path="" element={<HomePage />}></Route>
            <Route path="*" element={<HomePage />}></Route>
        </Routes>
    );
}
