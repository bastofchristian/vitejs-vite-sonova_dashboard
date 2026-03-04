import {
  BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area,
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine
} from 'recharts';
import { TrendingUp, Users, ShieldAlert, Cpu, Activity, Zap } from 'lucide-react';

// --- DATA SOURCED FROM YOUR BUSINESS CASE & HY25/26 RESULTS ---

// 1. Financial Trajectory (Interpolated for 18-month Breakeven on 63.1M TCO)
const roiTrajectory = [
  { month: 'Month 0', netCash: -63.1 },
  { month: 'Month 6', netCash: -45.0 },
  { month: 'Month 12', netCash: -20.0 },
  { month: 'Month 18', netCash: 0.0 }, // Breakeven
  { month: 'Month 24', netCash: 35.0 },
  { month: 'Month 30', netCash: 60.0 },
  { month: 'Month 36', netCash: 95.0 },
];

// 2. Silent Churn Capabilities (Legacy vs. AI CRM from your "Hans" Use Case)
const silentChurnRadar = [
  { metric: 'IoT Telemetry', legacy: 10, newCrm: 95 },
  { metric: 'Proactive Outreach', legacy: 15, newCrm: 90 },
  { metric: 'CLV Tracking', legacy: 30, newCrm: 100 },
  { metric: 'Cross-Silo Sync', legacy: 20, newCrm: 85 },
  { metric: 'Predictive Maint.', legacy: 10, newCrm: 90 },
];

// 3. Operational Impact & TCO (From MVP)
const efficiencyKPIs = [
  { category: 'Lead Conv. (%)', legacy: 51, newCrm: 60 },
  { category: 'Manual Tickets (Idx)', legacy: 100, newCrm: 70 },
  { category: 'Retention (Idx)', legacy: 100, newCrm: 105 },
];

const tcoBreakdown = [
  { name: 'Software Lics', value: 43.2 },
  { name: 'Middleware', value: 8.0 },
  { name: 'Implementation', value: 6.0 },
  { name: 'Support/Change', value: 5.9 },
];

const COLORS = ['#005A9C', '#00A3E0', '#38bdf8', '#7dd3fc']; 

export default function SonovaExecutiveDashboard() {
  return (
    <div className="p-4 md:p-8 bg-[#f8fafc] min-h-screen font-sans">
      
      {/* HEADER: Corporate Context */}
      <header className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-blue-600 animate-pulse"></div>
            <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">Executive Briefing</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Sonova CRM Transformation</h1>
          <p className="text-slate-500 mt-1 flex items-center gap-2">
            <ShieldAlert size={16} /> Defeating "Silent Churn" via Agentforce AI
          </p>
        </div>
        <div className="mt-4 md:mt-0 text-right bg-slate-50 p-4 rounded-lg border border-slate-100">
          <p className="text-xs font-semibold text-slate-500 uppercase">Sonova HY 25/26 Macro Context</p>
          <div className="flex gap-4 mt-1">
            <div>
              <p className="text-sm text-slate-400">Group Sales</p>
              <p className="text-lg font-bold text-slate-800">1.81B CHF</p>
            </div>
            <div>
              <p className="text-sm text-slate-400">HI Growth</p>
              <p className="text-lg font-bold text-green-600">+7.0% LC</p>
            </div>
          </div>
        </div>
      </header>

      {/* TOP ROW: Strategic KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex items-start justify-between border-l-4 border-l-blue-600">
          <div>
            <p className="text-sm font-semibold text-slate-500">Total Investment (TCO)</p>
            <p className="text-3xl font-black text-slate-900 mt-1">63.1M <span className="text-lg text-slate-400 font-normal">CHF</span></p>
            <p className="text-xs text-slate-400 mt-2">~1.6% of annual revenue</p>
          </div>
          <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><TrendingUp size={24} /></div>
        </div>
        
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex items-start justify-between border-l-4 border-l-emerald-500">
          <div>
            <p className="text-sm font-semibold text-slate-500">Payback Period</p>
            <p className="text-3xl font-black text-slate-900 mt-1">18 <span className="text-lg text-slate-400 font-normal">Months</span></p>
            <p className="text-xs text-emerald-600 font-medium mt-2">Base Case Scenario</p>
          </div>
          <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600"><Activity size={24} /></div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex items-start justify-between border-l-4 border-l-amber-500">
          <div>
            <p className="text-sm font-semibold text-slate-500">Target Scale</p>
            <p className="text-3xl font-black text-slate-900 mt-1">7,000</p>
            <p className="text-xs text-slate-400 mt-2">Hearing Care Professionals</p>
          </div>
          <div className="p-2 bg-amber-50 rounded-lg text-amber-600"><Users size={24} /></div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex items-start justify-between border-l-4 border-l-indigo-500">
          <div>
            <p className="text-sm font-semibold text-slate-500">CLV Projection</p>
            <p className="text-3xl font-black text-slate-900 mt-1">+15%</p>
            <p className="text-xs text-slate-400 mt-2">Customer Lifetime Value uplift</p>
          </div>
          <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600"><Zap size={24} /></div>
        </div>
      </div>

      {/* MIDDLE ROW: "The Crazy Stuff" - Cashflow & Radar */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        
        {/* Cumulative ROI Area Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h2 className="text-lg font-bold text-slate-800 mb-1 flex items-center gap-2"><TrendingUp size={18} className="text-blue-600"/> Cumulative ROI & Breakeven</h2>
          <p className="text-xs text-slate-500 mb-6">36-Month projection based on 63.1M initial outlay</p>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={roiTrajectory} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorNet" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#005A9C" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#005A9C" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="month" tick={{fontSize: 12, fill: '#64748b'}} />
                <YAxis tick={{fontSize: 12, fill: '#64748b'}} />
                <Tooltip formatter={(value) => [`${value}M CHF`, 'Net Cashflow']} />
                <ReferenceLine y={0} stroke="#ef4444" strokeDasharray="3 3" label={{ position: 'top', value: 'Breakeven (18 Mo)', fill: '#ef4444', fontSize: 12 }} />
                <Area type="monotone" dataKey="netCash" stroke="#005A9C" strokeWidth={3} fillOpacity={1} fill="url(#colorNet)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Silent Churn Radar Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h2 className="text-lg font-bold text-slate-800 mb-1 flex items-center gap-2"><Cpu size={18} className="text-blue-600"/> Agentforce AI vs. Silent Churn</h2>
          <p className="text-xs text-slate-500 mb-2">Capability mapping from Case Study "Hans" (IoT Telemetry)</p>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="75%" data={silentChurnRadar}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="metric" tick={{ fill: '#475569', fontSize: 11, fontWeight: 600 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} />
                <Radar name="Legacy IT" dataKey="legacy" stroke="#94a3b8" strokeWidth={2} fill="#cbd5e1" fillOpacity={0.4} />
                <Radar name="Agentforce CRM" dataKey="newCrm" stroke="#005A9C" strokeWidth={2} fill="#00A3E0" fillOpacity={0.5} />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }}/>
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* BOTTOM ROW: TCO & Operational Impact */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* TCO Pie */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 lg:col-span-1">
          <h2 className="text-lg font-bold text-slate-800 mb-4">CAPEX/OPEX Breakdown</h2>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={tcoBreakdown} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={2} dataKey="value">
                  {tcoBreakdown.map((_, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                </Pie>
                <Tooltip formatter={(value) => [`${value}M CHF`, 'Investment']} />
                <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '11px' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Efficiency Bar Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 lg:col-span-2">
          <h2 className="text-lg font-bold text-slate-800 mb-4">Operational Efficiency Gains</h2>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={efficiencyKPIs} layout="vertical" margin={{ top: 0, right: 30, left: 20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                <XAxis type="number" domain={[0, 120]} tick={{fontSize: 12, fill: '#64748b'}} />
                <YAxis dataKey="category" type="category" width={120} tick={{fontSize: 12, fill: '#475569', fontWeight: 500}} />
                <Tooltip cursor={{fill: '#f1f5f9'}} />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }}/>
                <Bar dataKey="legacy" fill="#94a3b8" name="Pre-Transformation" radius={[0, 4, 4, 0]} barSize={20} />
                <Bar dataKey="newCrm" fill="#005A9C" name="New CRM Setup" radius={[0, 4, 4, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
}