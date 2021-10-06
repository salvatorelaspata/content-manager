export interface IRoute {
    id: string,
    name: string,
    path: string,
    exact: boolean,
    component: React.FC
    subRoute?: IRoute[]
    icon?: string,
    props?: any
}