import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import HomeIcon from '@/shared/assets/icons/main-page-icon.svg';
import AboutIcon from '@/shared/assets/icons/about-page-icon.svg';
import ProfileIcon from '@/shared/assets/icons/profile-page-icon.svg';
import ArticlesIcon from '@/shared/assets/icons/articles-page-icon.svg';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
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
        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: RoutePath.profile + userData.id,
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
            );
        }
        return sidebarItemsList;
    },
);
