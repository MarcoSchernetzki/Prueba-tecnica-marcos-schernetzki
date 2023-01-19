import { Routes, Route } from "react-router-dom";
import { HomePage } from "../../../features/pages/homePage/homePage";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="Añadir" element={<HomePage />}></Route>
            <Route path="" element={<HomePage />}></Route>
            <Route path="*" element={<HomePage />}></Route>
        </Routes>
    );
}
