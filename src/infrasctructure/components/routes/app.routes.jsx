import { Routes, Route } from "react-router-dom";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="Añadir" element={<p>Proximamente</p>}></Route>
            <Route path="" element={<p>Proximamente</p>}></Route>
            <Route path="*" element={<p>Proximamente</p>}></Route>
        </Routes>
    );
}
