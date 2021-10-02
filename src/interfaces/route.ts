import { FC } from "react";

export default interface Route {
    name: string,
    path: string,
    exact: boolean,
    component: any
    props?: any
}