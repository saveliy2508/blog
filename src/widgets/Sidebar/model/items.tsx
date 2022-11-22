import { ReactNode } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/main-page-icon.svg';
import AboutIcon from 'shared/assets/icons/about-page-icon.svg';
import ProfileIcon from 'shared/assets/icons/profile-page-icon.svg';
import ArticlesIcon from 'shared/assets/icons/articles-page-icon.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: ReactNode;
    authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: 'main',
        Icon: <HomeIcon />,
    },
    {
        path: RoutePath.about,
        text: 'about',
        Icon: <AboutIcon />,
    },
    {
        path: RoutePath.profile,
        text: 'profile',
        Icon: <ProfileIcon />,
        authOnly: true,
    },
    {
        path: RoutePath.articles,
        text: 'articles',
        Icon: <ArticlesIcon />,
        authOnly: true,
    },
];
