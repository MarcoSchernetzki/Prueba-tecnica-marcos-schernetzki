import { Layout } from "../layout/layout";
import { AppRoutes } from "../routes/app.routes";

export function App() {
    return (
        <Layout>
            <main>
                <AppRoutes />
            </main>
        </Layout>
    );
}
