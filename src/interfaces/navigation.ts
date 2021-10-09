export interface IRoute {
    id: string
    name: string
    path: string
    exact: boolean
    component: React.FC | string
    hiddenMenu?: boolean
    subRoute?: IRoute[]
    icon?: string
    props?: any
}

export interface INavigationProp {
    section: string
}