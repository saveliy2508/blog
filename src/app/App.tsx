import React, { Suspense, useState } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classnames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';

const App = () => {
    const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<PageLoader />}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
