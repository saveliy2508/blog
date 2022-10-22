import React, {Suspense} from 'react';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classnames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {LangSwitcher} from "widgets/LangSwitcher/LangSwitcher";



const App = () => {
    const {theme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<div>is loading...</div>}>
                <Navbar/>
                <div className='content-page'>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;
