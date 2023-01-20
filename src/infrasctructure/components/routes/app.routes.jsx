import { Routes, Route } from "react-router-dom";
import { CreatePage } from "../../../features/pages/createPage/createPage";
import { DetailsPage } from "../../../features/pages/detailPage/detailsPage";
import { UpdatePage } from "../../../features/pages/updatePage/updatePage";
import { HomePage } from "../../../features/pages/homePage/homePage";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="edit" element={<UpdatePage />}></Route>
            <Route path="detail" element={<DetailsPage />}></Route>
            <Route path="create" element={<CreatePage />}></Route>
            <Route path="" element={<HomePage />}></Route>
            <Route path="*" element={<HomePage />}></Route>
        </Routes>
    );
}
