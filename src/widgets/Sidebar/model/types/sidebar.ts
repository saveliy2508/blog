import { ReactNode } from 'react';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: ReactNode;
    authOnly?: boolean
}
