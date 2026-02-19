import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar-navigation/Sidebar';

function MainLayout() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="flex h-screen bg-black overflow-hidden select-none py-0 pl-4 gap-4">
            {/* Sidebar background glow */}
            <div
                className={`absolute top-0 left-0 h-full bg-cyan-500/5 blur-[100px] z-0 pointer-events-none transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}
            ></div>

            <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} className="shrink-0 h-full" />

            <main className="flex-1 relative overflow-y-auto overflow-x-hidden no-scrollbar transition-all duration-300">
                {/* Content background glows */}
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="p-8 relative z-10 w-full">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}

export default MainLayout;
