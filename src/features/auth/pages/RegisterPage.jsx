import React from 'react';
import { Link } from 'react-router-dom';

function RegisterPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-slate-200 selection:bg-cyan-500/30">
            {/* Background glow effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-500/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="relative z-10 w-full max-w-lg p-8 mx-4">
                {/* Logo and Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white mb-2"><span className="text-cyan-500">H</span>orus</h1>
                    <p className="text-slate-400 font-medium tracking-widest text-xs uppercase">Gestión de Información y Eventos de Seguridad</p>
                </div>

                {/* Register Card */}
                <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl relative group">
                    <div className="absolute -inset-0.5 bg-linear-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur opacity-0 transition duration-1000 group-hover:duration-200"></div>

                    <div className="relative">
                        <h2 className="text-xl font-semibold text-white mb-6 text-center">Registro de Nuevo Operador</h2>

                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2" htmlFor="fullName">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all font-mono text-sm"
                                        placeholder="J. DOE"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2" htmlFor="identifier">
                                        Operator ID
                                    </label>
                                    <input
                                        type="text"
                                        id="identifier"
                                        className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all font-mono text-sm"
                                        placeholder="OP-7742"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2" htmlFor="role">
                                    Access Clearance
                                </label>
                                <select
                                    id="role"
                                    className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all text-sm appearance-none cursor-pointer"
                                    defaultValue=""
                                >
                                    <option value="" disabled>Select Clearance Level...</option>
                                    <option value="analyst" className="bg-slate-900">Level 1 - Analyst</option>
                                    <option value="auditor" className="bg-slate-900">Level 2 - Auditor</option>
                                    <option value="admin" className="bg-slate-900">Level 3 - Administrator</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2" htmlFor="password">
                                        Security Key
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all font-mono text-sm"
                                        placeholder="••••••••"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2" htmlFor="confirmPassword">
                                        Confirm Key
                                    </label>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all font-mono text-sm"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full bg-linear-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-cyan-900/20 transform active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
                                >
                                    <span>Registrar</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </button>
                            </div>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-slate-500 text-sm">
                                ¿Ya tienes cuenta?{' '}
                                <Link to="/" className="text-cyan-500 hover:text-cyan-400 font-semibold transition-colors decoration-dotted underline-offset-4">
                                    Inicia sesión
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-8 text-center text-slate-600 text-[10px] uppercase tracking-[0.2em]">
                    <p>© 2026 Horus Forensic Systems • Verificación de Identidad Requerida</p>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
