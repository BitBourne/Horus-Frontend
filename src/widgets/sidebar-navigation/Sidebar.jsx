import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    Search,
    HardDrive,
    FileCheck,
    Bug,
    Settings,
    Target,
    ShieldAlert,
    Activity,
    ShieldCheck,
    Lock,
    AlertCircle,
    Box,
    Cloud,
    Globe,
    Users,
    Database,
    BarChart3,
    Menu,
    User,
    ChevronLeft,
    ChevronRight,
    LogOut
} from 'lucide-react';

const SidebarItem = ({ to, icon: Icon, label, isCollapsed }) => (
    <NavLink
        to={to}
        title={isCollapsed ? label : ''}
        className={({ isActive }) => `
            group relative flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200
            ${isActive
                ? 'bg-slate-900 text-cyan-500 shadow-sm'
                : 'text-slate-500 hover:text-slate-300 hover:bg-slate-900/30'}
            ${isCollapsed ? 'justify-center px-0' : ''}
        `}
    >
        {({ isActive }) => (
            <>
                <Icon size={18} className={`transition-colors ${isActive ? 'text-cyan-500' : 'text-slate-500 group-hover:text-slate-300'}`} />
                {!isCollapsed && <span className="font-medium text-[13px] tracking-tight whitespace-nowrap overflow-hidden">{label}</span>}
                {isActive && !isCollapsed && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-cyan-500 rounded-r-full" />
                )}
            </>
        )}
    </NavLink>
);

const SidebarSection = ({ title, children, isCollapsed }) => (
    <div className="mb-6">
        {!isCollapsed && (
            <h2 className="px-3 mb-2 text-[10px] font-bold text-slate-600 uppercase tracking-[0.15em]">
                {title}
            </h2>
        )}
        <div className="space-y-0.5">
            {children}
        </div>
    </div>
);

function Sidebar({ isCollapsed, setIsCollapsed, className = "" }) {
    return (
        <aside
            className={`relative bg-slate-950/40 backdrop-blur-xl border-x border-slate-800/50 flex flex-col z-20 transition-all duration-300 ease-in-out shadow-[10px_0_40px_-10px_rgba(0,0,0,0.5)] ${isCollapsed ? 'w-20' : 'w-64'} ${className} no-scrollbar`}
        >
            {/* Header */}
            <div className={`flex items-center justify-between p-6 mb-2 ${isCollapsed ? 'justify-center' : ''}`}>
                {!isCollapsed && (
                    <h1 className="text-xl font-bold text-white tracking-tight">Horus</h1>
                )}
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="text-slate-500 hover:text-white transition-colors p-1"
                >
                    <Menu size={20} />
                </button>
            </div>

            {/* Navigation - Scrollable */}
            <nav className="flex-1 overflow-y-auto px-3 no-scrollbar">
                <SidebarSection title="Main" isCollapsed={isCollapsed}>
                    <SidebarItem to="/dashboard" icon={LayoutDashboard} label="Overview" isCollapsed={isCollapsed} />
                    <SidebarItem to="/explore" icon={Search} label="Explore" isCollapsed={isCollapsed} />
                </SidebarSection>

                <SidebarSection title="Endpoint Security" isCollapsed={isCollapsed}>
                    <SidebarItem to="/endpoints" icon={HardDrive} label="Endpoints" isCollapsed={isCollapsed} />
                    <SidebarItem to="/file-integrity" icon={FileCheck} label="File Integrity" isCollapsed={isCollapsed} />
                    <SidebarItem to="/malware" icon={Bug} label="Malware Detection" isCollapsed={isCollapsed} />
                    <SidebarItem to="/config" icon={Settings} label="Configuration" isCollapsed={isCollapsed} />
                </SidebarSection>

                <SidebarSection title="Threat Intelligence" isCollapsed={isCollapsed}>
                    <SidebarItem to="/hunting" icon={Target} label="Threat Hunting" isCollapsed={isCollapsed} />
                    <SidebarItem to="/vulnerabilities" icon={ShieldAlert} label="Vulnerabilities" isCollapsed={isCollapsed} />
                    <SidebarItem to="/mitre" icon={Activity} label="MITRE ATT&CK" isCollapsed={isCollapsed} />
                </SidebarSection>

                <SidebarSection title="Compliance" isCollapsed={isCollapsed}>
                    <SidebarItem to="/pci-dss" icon={ShieldCheck} label="PCI DSS" isCollapsed={isCollapsed} />
                    <SidebarItem to="/gdpr" icon={Lock} label="GDPR" isCollapsed={isCollapsed} />
                    <SidebarItem to="/hipaa" icon={AlertCircle} label="HIPAA" isCollapsed={isCollapsed} />
                </SidebarSection>

                <SidebarSection title="Cloud Security" isCollapsed={isCollapsed}>
                    <SidebarItem to="/docker" icon={Box} label="Docker" isCollapsed={isCollapsed} />
                    <SidebarItem to="/aws" icon={Cloud} label="AWS" isCollapsed={isCollapsed} />
                    <SidebarItem to="/gcp" icon={Globe} label="Google Cloud" isCollapsed={isCollapsed} />
                </SidebarSection>

                <SidebarSection title="Management" isCollapsed={isCollapsed}>
                    <SidebarItem to="/agents" icon={Users} label="Agents" isCollapsed={isCollapsed} />
                    <SidebarItem to="/indexer" icon={Database} label="Indexer" isCollapsed={isCollapsed} />
                    <SidebarItem to="/reports" icon={BarChart3} label="Reports" isCollapsed={isCollapsed} />
                </SidebarSection>
            </nav>

            {/* Footer Profile */}
            <div className="p-4 border-t border-slate-900 bg-black/50 backdrop-blur-sm">
                <div className={`flex items-center gap-3 ${isCollapsed ? 'justify-center' : ''}`}>
                    <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center relative overflow-hidden group cursor-pointer">
                        <User size={18} className="text-slate-400 group-hover:text-cyan-500 transition-colors" />
                    </div>
                    {!isCollapsed && (
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-white truncate">Admin</p>
                            <p className="text-[10px] text-slate-500 truncate">admin@horus.io</p>
                        </div>
                    )}
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
