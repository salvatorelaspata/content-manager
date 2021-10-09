import React from 'react';
// import css from './HeaderToolbar.module.css';

import Search20 from "@carbon/icons-react/lib/search/20";
import Notification20 from "@carbon/icons-react/lib/notification/20";
import AppSwitcher20 from "@carbon/icons-react/lib/app-switcher/20";

import {
    Header,
    HeaderName,
    HeaderGlobalAction,
    HeaderGlobalBar,
    HeaderNavigation,
    HeaderMenu,
    HeaderMenuItem,
    HeaderContainer,
    SkipToContent,
    HeaderMenuButton,
    SideNav,
    SideNavItems,
    HeaderSideNavItems,
    Toggle
} from 'carbon-components-react';

import css from './HeaderToolbar.module.css'

import { ROUTES } from '../../config/constants';
import {
    Link as RouterLink,
    LinkProps as RouterLinkProps,
    useLocation
} from 'react-router-dom';

const ILink = (to: string) => React.forwardRef<any, Omit<RouterLinkProps, "to">>(
    (itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />
)
interface HeaderToolbarProp {
    toggleTheme: () => void
}
const HeaderToolbar: React.FC<HeaderToolbarProp> = ({ toggleTheme }) => {

    const location = useLocation();
    const routes = ROUTES.map(({ id, path, name, subRoute, hiddenMenu }) =>
        !hiddenMenu && (subRoute ?
            <HeaderMenu key={id} aria-label={name} menuLinkName={name}>
                {subRoute.map((sub) =>
                    !sub.hiddenMenu && <HeaderMenuItem key={sub.id} href={sub.path} element={ILink(sub.path)} className={sub.path === location.pathname ? css.active : ''}>{sub.name}</HeaderMenuItem>
                )}
            </HeaderMenu>
            :
            <HeaderMenuItem key={id} aria-label={name} href={path} children={name} element={ILink(path)} className={path === location.pathname ? css.active : ''} />)
    )
    return (
        <HeaderContainer
            render={({ isSideNavExpanded, onClickSideNavExpand }) => (
                <Header aria-label="CONTENT [Manager]">
                    <SkipToContent />
                    <HeaderMenuButton
                        aria-label="Open menu"
                        onClick={onClickSideNavExpand}
                        isActive={isSideNavExpanded}
                    />
                    <HeaderName prefix="CONTENT" href="/">
                        [Manager]
                    </HeaderName>
                    <HeaderNavigation aria-label="CONTENT [Manager]">
                        {routes}
                    </HeaderNavigation>
                    <SideNav
                        aria-label="Side navigation"
                        expanded={isSideNavExpanded}
                        isPersistent={false}>
                        <SideNavItems>
                            <HeaderSideNavItems>
                                {routes}
                            </HeaderSideNavItems>
                        </SideNavItems>
                    </SideNav>
                    <HeaderGlobalBar>
                        <Toggle defaultToggled id="165ffccf-7d3b-4483-b997-3796bcaf44f1" labelA="Light" labelB="Dark" onToggle={toggleTheme} />
                        <HeaderGlobalAction aria-label="Search" onClick={() => { }}>
                            <Search20 />
                        </HeaderGlobalAction>
                        <HeaderGlobalAction aria-label="Notifications" onClick={() => { }}>
                            <Notification20 />
                        </HeaderGlobalAction>
                        <HeaderGlobalAction aria-label="App Switcher" onClick={() => { }}>
                            <AppSwitcher20 />
                        </HeaderGlobalAction>
                    </HeaderGlobalBar>
                </Header>
            )} />

    )
};

export default HeaderToolbar;
