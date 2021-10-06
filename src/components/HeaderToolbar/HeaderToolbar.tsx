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
    HeaderSideNavItems
} from 'carbon-components-react';

import { ROUTES } from '../../config/constants';

const HeaderToolbar: React.FC = () => {
    {/* <Link to="/">Home</Link> */ }
    const routes = ROUTES.map(({ id, path, name, subRoute }) =>
        subRoute ?
            <HeaderMenu key={id} aria-label={name} menuLinkName={name}>
                {subRoute.map((sub) =>
                    <HeaderMenuItem key={sub.id} href={sub.path}>{sub.name}</HeaderMenuItem>
                )}
            </HeaderMenu>
            :
            <HeaderMenuItem key={id} aria-label={name} href={path} children={name} />
    )
    console.log(routes)
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
                    <HeaderName href="#" prefix="CONTENT">
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
