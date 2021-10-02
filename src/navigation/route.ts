import ContentManager from "../pages/ContentManager";
import ContentManagerDetail from "../pages/ContentManagerDetail";
import Route from "../interfaces/route";

const routes: Route[] = [{
    path: '/',
    name: 'Content Manager',
    exact: true,
    component: ContentManager
}, {
    path: '/detail',
    name: 'Content Manager Detail',
    exact: true,
    component: ContentManagerDetail
}]

export default routes;