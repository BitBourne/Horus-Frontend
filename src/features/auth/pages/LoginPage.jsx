import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-slate-200 selection:bg-cyan-500/30">
            {/* Background glow effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-500/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="relative z-10 w-full max-w-md p-8 mx-4">
                {/* Logo and Header */}
                <div className="text-center mb-10">

                    <h1 className="text-4xl font-extrabold tracking-tight text-white mb-2"><span className="text-cyan-500">H</span>orus</h1>
                    <p className="text-slate-400 font-medium tracking-widest text-xs uppercase">Gestión de Información y Eventos de Seguridad</p>
                </div>

                {/* Login Card */}
                <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl relative group">
                    <div className="absolute -inset-0.5 bg-linear-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur opacity-0 transition duration-1000 group-hover:duration-200"></div>

                    <div className="relative">
                        <h2 className="text-xl font-semibold text-white mb-6">Acceso a Terminal de Seguridad</h2>

                        <form className="space-y-5">
                            <div>
                                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2" htmlFor="identifier">
                                    Operador ID / Email
                                </label>
                                <input
                                    type="text"
                                    id="identifier"
                                    className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                                    placeholder="admin@horus.security"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2" htmlFor="password">
                                    Contraseña
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                                    placeholder="••••••••••••"
                                />
                            </div>

                            <div className="flex items-center justify-between py-2 text-sm">
                                <label className="flex items-center cursor-pointer group">
                                    <input type="checkbox" className="hidden peer" />
                                    <div className="w-5 h-5 border-2 border-slate-700 rounded-md bg-slate-950/50 mr-2 peer-checked:bg-cyan-500 peer-checked:border-cyan-500 transition-all flex items-center justify-center">
                                        <svg className="w-3 h-3 text-white hidden peer-checked:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                                            <path d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-slate-400 group-hover:text-slate-300 transition-colors">Mantener Sesión Activa</span>
                                </label>
                            </div>

                        </form>


                        <button
                            type="submit"
                            className="w-full bg-linear-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-cyan-900/20 transform active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
                        >
                            <span>Iniciar</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
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

export default LoginPage;
