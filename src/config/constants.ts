import { lazy } from 'react';
import { IRoute } from '../interfaces/navigation';
// import { Home, ToDo, Doc, NotFound, SnapCode, ProjecTile, Drive } from '../pages';

export const ROUTES: IRoute[] = [{
    id: '242a75cb-aa7f-460e-8aa3-dc7fcbf64718',
    path: '/',
    name: 'Home',
    exact: true,
    component: 'Home'
}, {
    id: 'd2777f7f-b1b0-4053-a25a-2ccc8f8d8372',
    path: '/todo',
    name: 'ToDo',
    exact: true,
    component: 'ToDo'
}, {
    id: 'cdc6c871-4be0-401a-9c2b-8db5c0f6e212',
    path: '/doc',
    name: 'Doc',
    exact: true,
    component: 'Doc',
    subRoute: [{
        id: 'f9f8bdde-ed44-4379-a3e5-893be9562442',
        path: '/doc/snapcode',
        name: 'Snapcode',
        exact: true,
        component: 'SnapCode',
    }, {
        id: 'd113ff18-ee93-4552-a483-7247dad87f82',
        path: '/doc/projectile',
        name: 'Projectile',
        exact: true,
        component: 'ProjecTile',
    }]
}, {
    id: '2ed86fde-3861-4a08-8f0d-42284204d829',
    path: '/drive',
    name: 'Drive',
    exact: true,
    component: 'Drive'
}, {
    id: '0945392f-c830-47be-b3cb-08815436b56b',
    path: '*',
    name: '404',
    exact: true,
    component: 'NotFound',
    hiddenMenu: true
}];

ROUTES.map(async (r) => {
    const Component = await lazy(() => import(`../pages/${r.component}`));
    r.component = Component
    return r;
})

const flatten = (items: IRoute[]) => {
    const flat: IRoute[] = [];

    items && items.forEach(item => {
        flat.push(item)
        if (Array.isArray(item.subRoute) && item.subRoute.length > 0) {
            flat.push(...flatten(item.subRoute));
            delete item.subRoute
        }
        delete item.subRoute
    });

    return flat;
}

export const flattenRoutes = () => {
    const routes: IRoute[] = JSON.parse(JSON.stringify(ROUTES));
    const flat: IRoute[] = [];
    routes && routes.forEach(item => {
        flat.push(item)
        if (Array.isArray(item.subRoute) && item.subRoute.length > 0) {
            flat.push(...flatten(item.subRoute));
            delete item.subRoute
        }
        delete item.subRoute
    });
    return flat;
}

export const allRouter: IRoute[] = JSON.parse(JSON.stringify(ROUTES));
// export const flattenRoutes: IRoute[] = [...flatten([...ROUTES])]