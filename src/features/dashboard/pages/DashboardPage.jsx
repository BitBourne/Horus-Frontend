import React from 'react';
import {
    Search,
    Calendar,
    RefreshCw,
    Bell,
    User,
    LayoutGrid,
    AlertTriangle,
    ShieldCheck,
    TrendingUp,
    TrendingDown,
    ChevronDown,
    Database,
    ShieldAlert,
    Scan,
    Cloud,
    FileText,
    Fingerprint
} from 'lucide-react';
import { VegaEmbed } from 'react-vega';

const StatCard = ({ label, value, subtext, trend, icon: Icon, valueColor = 'text-white' }) => (
    <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 p-5 rounded-xl flex flex-col justify-between relative group hover:border-slate-700 transition-all">
        <div className="flex justify-between items-start mb-4">
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">{label}</p>
            <Icon size={18} className="text-slate-600 group-hover:text-cyan-500 transition-colors" />
        </div>
        <div>
            <h2 className={`text-3xl font-bold ${valueColor} mb-1`}>{value}</h2>
            <div className="flex items-center gap-2">
                <span className="text-[10px] text-slate-500">{subtext}</span>
                {trend && (
                    <span className={`flex items-center text-[10px] font-bold ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {trend > 0 ? <TrendingUp size={10} className="mr-0.5" /> : <TrendingDown size={10} className="mr-0.5" />}
                        {Math.abs(trend)}%
                    </span>
                )}
            </div>
        </div>
    </div>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="bg-slate-900/30 border border-slate-800/50 p-5 rounded-xl flex items-start gap-4 hover:bg-slate-900/50 transition-all cursor-pointer group">
        <div className="p-2.5 bg-cyan-500/5 rounded-lg border border-cyan-500/10 text-cyan-500 group-hover:scale-110 transition-transform">
            <Icon size={20} />
        </div>
        <div>
            <h3 className="text-sm font-semibold text-slate-200 mb-1">{title}</h3>
            <p className="text-xs text-slate-500 leading-relaxed">{description}</p>
        </div>
    </div>
);

const SectionHeader = ({ title }) => (
    <div className="flex items-center gap-4 mb-4">
        <h2 className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em] whitespace-nowrap">{title}</h2>
        <div className="h-px w-full bg-slate-900" />
    </div>
);

const agentsSummarySpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    description: 'Agents Summary Donut Chart',
    width: 'container',
    height: 160,
    background: 'transparent',
    padding: 0,
    data: {
        values: [
            { category: 'Active', value: 12 },
            { category: 'Disc.', value: 3 },
            { category: 'Pending', value: 1 }
        ]
    },
    mark: { type: 'arc', innerRadius: 55, outerRadius: 75, cornerRadius: 4, stroke: '#0f172a', strokeWidth: 1 },
    encoding: {
        theta: { field: 'value', type: 'quantitative', stack: true },
        color: {
            field: 'category',
            type: 'nominal',
            scale: {
                domain: ['Active', 'Disc.', 'Pending'],
                range: ['#06b6d4', '#f97316', '#eab308']
            },
            legend: null
        },
        tooltip: [
            { field: 'category', type: 'nominal', title: 'Status' },
            { field: 'value', type: 'quantitative', title: 'Count' }
        ]
    },
    config: {
        view: { stroke: null }
    }
};

const alertsHistorySpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    width: 'container',
    height: 180,
    background: 'transparent',
    padding: { top: 10, right: 10, bottom: 20, left: 10 },
    data: {
        values: [40, 45, 42, 50, 60, 55, 45, 40, 42, 48, 55, 65, 70, 68, 60, 55, 45, 42, 40, 38, 42, 45, 50, 48].map((h, i) => ({
            hour: i === 23 ? 'Now' : `${String(i).padStart(2, '0')}:00`,
            alerts: h
        }))
    },
    mark: {
        type: 'bar',
        cornerRadiusTop: 4,
        color: {
            gradient: 'linear',
            x1: 0, y1: 0, x2: 0, y2: 1,
            stops: [
                { offset: 0, color: '#06b6d4' },
                { offset: 1, color: '#06b6d422' }
            ]
        }
    },
    encoding: {
        x: {
            field: 'hour',
            type: 'nominal',
            axis: {
                labelColor: '#475569',
                tickColor: 'transparent',
                domainColor: '#1e293b',
                labelAngle: 0,
                values: ['04:00', '08:00', '12:00', '16:00', '20:00', 'Now']
            },
            title: null
        },
        y: {
            field: 'alerts',
            type: 'quantitative',
            axis: null,
            title: null
        },
        tooltip: [
            { field: 'hour', type: 'nominal', title: 'Time' },
            { field: 'alerts', type: 'quantitative', title: 'Alerts' }
        ]
    },
    config: {
        view: { stroke: null }
    }
};

function DashboardPage() {

    return (
        <div className="animate-in fade-in duration-700 space-y-8 pb-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2 text-[10px] text-slate-500 uppercase tracking-widest mb-1">
                        <span>Home</span>
                        <span>/</span>
                        <span className="text-slate-300">Overview</span>
                    </div>
                    <h1 className="text-2xl font-bold text-white">Overview</h1>
                </div>

                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={14} />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-slate-900/50 border border-slate-800 rounded-lg pl-9 pr-4 py-2 text-xs text-slate-300 w-64 focus:outline-none focus:border-cyan-500/50 transition-all"
                        />
                    </div>
                    <button className="flex items-center gap-2 bg-slate-900/50 border border-slate-800 px-3 py-2 rounded-lg text-xs font-medium text-slate-300 hover:bg-slate-800 transition-all">
                        <Calendar size={14} />
                        <span>Last 24 hours</span>
                        <ChevronDown size={14} className="text-slate-500" />
                    </button>
                    <div className="flex items-center gap-2 border-l border-slate-800 pl-3">
                        <button className="p-2 text-slate-500 hover:text-white transition-colors"><RefreshCw size={16} /></button>
                        <button className="p-2 text-slate-500 hover:text-white transition-colors relative">
                            <Bell size={16} />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-black" />
                        </button>
                        <div className="w-8 h-8 rounded-lg bg-cyan-600 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-cyan-900/20">A</div>
                    </div>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard label="Total Endpoints" value="16" subtext="4 groups" trend={12} icon={LayoutGrid} valueColor="text-white" />
                <StatCard label="Active Alerts" value="47" subtext="Last 24 hours" trend={-8} icon={AlertTriangle} valueColor="text-orange-500" />
                <StatCard label="Vulnerabilities" value="128" subtext="23 critical" icon={ShieldAlert} valueColor="text-red-500" />
                <StatCard label="Compliance Score" value="87%" subtext="PCI DSS" trend={5} icon={ShieldCheck} valueColor="text-green-500" />
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-4 bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-xl p-6">
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-8">Agents Summary</h3>
                    <div className="flex flex-col items-center">
                        <div className="relative w-full h-44 flex items-center justify-center">
                            <VegaEmbed spec={agentsSummarySpec} options={{ actions: false, background: 'transparent' }} className="w-full flex justify-center translate-y-2" />
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="text-center">
                                    <span className="text-2xl font-bold text-white">16</span>
                                    <p className="text-[10px] text-slate-500 mt-0.5">Total</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-2 w-full max-w-[240px]">
                            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-cyan-500" /><span className="text-xs text-slate-300">Active (12)</span></div>
                            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-orange-500" /><span className="text-xs text-slate-300">Disc. (3)</span></div>
                            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-yellow-500" /><span className="text-xs text-slate-300">Pending (1)</span></div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-8 bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-xl p-6">
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-8">Last 24 Hours Alerts</h3>
                    <div className="grid grid-cols-4 gap-4 mb-4">
                        {[
                            { label: 'Critical', val: 0, color: 'text-red-500' },
                            { label: 'High', val: 2, color: 'text-orange-500' },
                            { label: 'Medium', val: 30, color: 'text-yellow-500' },
                            { label: 'Low', val: 15, color: 'text-green-500' },
                        ].map(sev => (
                            <div key={sev.label} className="text-center">
                                <span className={`text-2xl font-bold ${sev.color}`}>{sev.val}</span>
                                <p className="text-[10px] text-slate-500 uppercase tracking-tighter">{sev.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="w-full h-52">
                        <VegaEmbed spec={alertsHistorySpec} options={{ actions: false, background: 'transparent' }} className="w-full h-full" />
                    </div>
                </div>
            </div>

            {/* Categorized Features */}
            <div className="space-y-10">
                <section>
                    <SectionHeader title="Endpoint Security" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <FeatureCard icon={Scan} title="Configuration Assessment" description="Scan your assets as part of a configuration assessment audit." />
                        <FeatureCard icon={ShieldAlert} title="Malware Detection" description="Check indicators of compromise triggered by malware infections." />
                        <FeatureCard icon={Database} title="File Integrity Monitoring" description="Alerts related to file changes, including permissions and attributes." />
                    </div>
                </section>

                <section>
                    <SectionHeader title="Threat Intelligence" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <FeatureCard icon={Search} title="Threat Hunting" description="Browse through your security alerts, identifying threats in your environment." />
                        <FeatureCard icon={Fingerprint} title="Vulnerability Detection" description="Discover what applications are affected by well-known vulnerabilities." />
                        <FeatureCard icon={LayoutGrid} title="MITRE ATT&CK" description="Explore security alerts mapped to adversary tactics and techniques." />
                    </div>
                </section>

                <section>
                    <SectionHeader title="Cloud Security" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FeatureCard icon={ShieldCheck} title="Docker" description="Monitor and collect activity from Docker containers." />
                        <FeatureCard icon={Cloud} title="Amazon Web Services" description="Security events related to your AWS services, collected via AWS API." />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default DashboardPage;
