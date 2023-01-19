import { Layout } from "./infrasctructure/components/layout/layout";
import { AppRoutes } from "./infrasctructure/components/routes/app.routes";

export function App() {
    return (
        <Layout>
            <main>
                <AppRoutes />
            </main>
        </Layout>
    );
}
