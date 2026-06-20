import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
  ScatterChart, Scatter, ZAxis, BarChart, Bar, Cell,
} from "recharts";
import {
  Lock, Mail, Eye, EyeOff, ArrowRight, TrendingUp, TrendingDown, Wallet,
  Plus, X, ChevronDown, ChevronRight, ChevronLeft, FileText, FolderOpen, Folder,
  Activity, ShieldAlert, LogOut, CircuitBoard, CheckCircle2, Settings,
  Pencil, Trash2, Upload, Users, Truck, Database, Save,
  RefreshCw, Building2, Phone, AlertCircle, FilePlus2,
  FolderPlus, LayoutGrid, Search, Cpu, Loader2, UploadCloud, ArrowUpRight,
  Receipt, IndianRupee, Flame, Tag, Download,
} from "lucide-react";

// Placeholder Base64 fallback transparent pixel to replace the broken string
const LOGO_SRC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

// Simulated Analytical Pipeline Mock-Data 
const performanceData = [
  { name: "Jan", revenue: 4000, operations: 2400, risk: 400 },
  { name: "Feb", revenue: 3000, operations: 1398, risk: 300 },
  { name: "Mar", revenue: 2000, operations: 9800, risk: 200 },
  { name: "Apr", revenue: 2780, operations: 3908, risk: 278 },
  { name: "May", revenue: 1890, operations: 4800, risk: 189 },
  { name: "Jun", revenue: 2390, operations: 3800, risk: 239 },
  { name: "Jul", revenue: 3490, operations: 4300, risk: 349 },
];

const riskScatterData = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

export default function EnterpriseDashboard() {
  // Navigation State Control Engine
  const [currentTab, setCurrentTab] = useState("analytics");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  // Structural Auth Validation Framework 
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Toggle to simulate login sequence

  // Global Context System Refresh 
  const handleDataRefresh = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 800);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 font-sans text-slate-100">
        <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500" />
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-indigo-950 border border-indigo-500/30 rounded-xl flex items-center justify-center mb-4 shadow-inner">
              <CircuitBoard className="w-8 h-8 text-indigo-400 animate-pulse" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Core Node Validation</h2>
            <p className="text-sm text-slate-400 mt-1">Access restricted to verified operations personnel</p>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); setIsAuthenticated(true); }} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Gate Access Identity</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input type="email" required className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-11 pr-4 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="operator@enterprise.internal" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Cryptographic Key</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input type={showPassword ? "text" : "password"} required className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-11 pr-12 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="••••••••••••" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors">
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-medium text-sm py-3 rounded-xl transition-all shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2 group">
              Initialize Connection <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    );
  }
    return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex overflow-hidden">
      {/* Side Dynamic Command Center Container */}
      <aside className={`${isSidebarOpen ? "w-64" : "w-20"} bg-slate-900 border-r border-slate-800 flex flex-col transition-all duration-300 relative z-20`}>
        <div className="p-4 border-b border-slate-800 flex items-center justify-between h-16">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shrink-0">
              <Cpu className="w-5 h-5 text-white" />
            </div>
            {isSidebarOpen && <span className="font-bold tracking-wider text-sm text-slate-200 uppercase">Roton Engine</span>}
          </div>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-1.5 rounded-lg border border-slate-800 bg-slate-950 text-slate-400 hover:text-slate-200 transition-colors">
            {isSidebarOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
        </div>

        <nav className="flex-1 p-3 space-y-1.5">
          {[
            { id: "analytics", label: "Analytics Space", icon: Activity },
            { id: "vault", label: "File Vault", icon: FolderOpen },
            { id: "system", label: "System Nodes", icon: CircuitBoard },
            { id: "settings", label: "Configuration", icon: Settings }
          ].map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button key={item.id} onClick={() => setCurrentTab(item.id)} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${isActive ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/10" : "text-slate-400 hover:bg-slate-850 hover:text-slate-200"}`}>
                <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-slate-400"}`} />
                {isSidebarOpen && <span>{item.label}</span>}
              </button>
            );
          })}
        </nav>

        <div className="p-3 border-t border-slate-800">
          <button onClick={() => setIsAuthenticated(false)} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-rose-400 hover:bg-rose-950/20 transition-all">
            <LogOut className="w-5 h-5" />
            {isSidebarOpen && <span>Sever Access</span>}
          </button>
        </div>
      </aside>

      {/* Main Structural Runtime Stage Canvas */}
      <div className="flex-1 flex flex-col min-w-0 relative overflow-hidden">
        {/* Universal Subsystem Appbar */}
        <header className="h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-6 shrink-0 relative z-10">
          <div className="w-72 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2 pl-9 pr-4 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Query data clusters..." />
          </div>
          
          <div className="flex items-center gap-3">
            <button onClick={handleDataRefresh} disabled={loading} className="p-2 bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200 rounded-xl transition-all disabled:opacity-50">
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin text-indigo-400" : ""}`} />
            </button>
            <div className="h-4 w-[1px] bg-slate-800 mx-1" />
            <div className="flex items-center gap-3 bg-slate-950 border border-slate-800 rounded-xl py-1.5 pl-2 pr-3">
              <div className="w-7 h-7 rounded-lg bg-purple-600 flex items-center justify-center text-xs font-bold text-white shadow-md">
                OP
              </div>
              <span className="text-xs font-medium text-slate-300 tracking-wide">Sys_Admin_01</span>
            </div>
          </div>
        </header>

        {/* Content Runtime Render Loop Layout Matrix */}
        <main className="flex-1 overflow-y-auto p-6 relative">
          {loading && (
            <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px] z-50 flex items-center justify-center">
              <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
            </div>
          )}

          <AnimatePresence mode="wait">
            {currentTab === "analytics" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="space-y-6">
                
                {/* Micro Metric Telemetry Framework Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { title: "Net Processing Velocity", val: "₹ 8,34,920", delta: "+12.4%", up: true, icon: IndianRupee, color: "from-cyan-500/10 to-indigo-500/5" },
                    { title: "Node Compute Efficiency", val: "94.82 Mhz", delta: "+3.1%", up: true, icon: CircuitBoard, color: "from-emerald-500/10 to-teal-500/5" },
                    { title: "Data Ingress Volumes", val: "48,291 packets", delta: "-1.4%", up: false, icon: Database, color: "from-amber-500/10 to-orange-500/5" },
                    { title: "Active Firewall Incidents", val: "2 Critical", delta: "Mitigated", up: true, icon: ShieldAlert, color: "from-rose-500/10 to-purple-500/5" }
                  ].map((card, idx) => {
                    const CardIcon = card.icon;
                    return (
                      <div key={idx} className={`bg-gradient-to-br ${card.color} border border-slate-800 rounded-2xl p-5 relative overflow-hidden flex flex-col justify-between shadow-sm`}>
                        <div className="flex items-start justify-between">
                          <span className="text-xs font-semibold text-slate-400 tracking-wide uppercase">{card.title}</span>
                          <CardIcon className="w-5 h-5 text-slate-400" />
                        </div>
                        <div className="mt-4 flex items-baseline justify-between">
                          <span className="text-xl font-bold tracking-tight text-slate-100">{card.val}</span>
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-md flex items-center gap-1 ${card.up ? "bg-emerald-500/10 text-emerald-400" : "bg-rose-500/10 text-rose-400"}`}>
                            {card.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                            {card.delta}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Main Graphing Execution Systems Workspace Matrix */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-sm font-bold tracking-wide text-slate-200">System Telemetry Output</h3>
                        <p className="text-xs text-slate-500 mt-0.5">Real-time processing framework verification metric arrays</p>
                      </div>
                      <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-lg">Live Connection</span>
                    </div>
                    <div className="h-72 w-full text-xs">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={performanceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                          <defs>
                            <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.2}/>
                              <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                          <XAxis dataKey="name" stroke="#64748b" />
                          <YAxis stroke="#64748b" />
                          <Tooltip contentStyle={{ backgroundColor: "#0f172a", borderColor: "#334155", borderRadius: "12px", color: "#f1f5f9" }} />
                          <Area type="monotone" dataKey="revenue" stroke="#4f46e5" strokeWidth={2} fillOpacity={1} fill="url(#colorRev)" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-bold tracking-wide text-slate-200">Cluster Density Scaling</h3>
                      <p className="text-xs text-slate-500 mt-0.5">Physical distribution map of threat-vectors</p>
                    </div>
                    <div className="h-56 w-full text-xs my-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <ScatterChart margin={{ top: 20, right: 20, bottom: 0, left: -20 }}>
                          <CartesianGrid stroke="#1e293b" />
                          <XAxis type="number" dataKey="x" name="stature" stroke="#64748b" />
                          <YAxis type="number" dataKey="y" name="weight" stroke="#64748b" />
                          <ZAxis type="number" dataKey="z" range={[60, 400]} name="volume" />
                          <Tooltip cursor={{ strokeDasharray: "3 3" }} contentStyle={{ backgroundColor: "#0f172a", borderColor: "#334155", borderRadius: "12px" }} />
                          <Scatter name="Nodes" data={riskScatterData} fill="#ec4899" />
                        </ScatterChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="flex items-center gap-2 text-xs bg-slate-950 border border-slate-800 p-2.5 rounded-xl text-slate-400">
                      <AlertCircle className="w-4 h-4 text-pink-500 shrink-0" />
                      <span>Nodes exceeding thresholds require micro-kernel reconfiguration.</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {currentTab !== "analytics" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.15 }} className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center max-w-xl mx-auto my-12">
                <div className="w-12 h-12 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <LayoutGrid className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="text-base font-bold text-slate-200 capitalize">{currentTab} Module Shell</h3>
                <p className="text-sm text-slate-500 mt-1.5 max-w-sm mx-auto">This logical construct subsystem interface execution pathway is configured and awaiting dataset initialization schema parameters.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
