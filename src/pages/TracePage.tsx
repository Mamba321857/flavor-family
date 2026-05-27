import { motion } from 'framer-motion';
import { ChevronLeft, ScanLine, MapPin } from 'lucide-react';

type Page = 'home' | 'lab' | 'map' | 'profile' | 'trace' | 'funeral' | 'activities' | 'tasting' | 'factory' | 'flavor_vote';

export default function TracePage({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <div className="pb-6 min-h-full" style={{ backgroundColor: '#FAF6F0' }}>
      <header className="sticky top-0 z-40 h-14 bg-white flex items-center px-4 shadow-sm">
        <button onClick={() => navigate('home')} className="text-stone-400 active:scale-95 p-1"><ChevronLeft size={22} /></button>
        <div className="flex-1 flex items-center justify-center gap-2">
          <ScanLine size={18} className="text-emerald-600" />
          <h1 className="text-base font-extrabold text-stone-800">产地溯源</h1>
        </div>
        <div className="w-8" />
      </header>

      {/* 扫描区域 */}
      <div className="mx-3 mt-3 bg-white rounded-2xl p-6 shadow-sm text-center">
        <div className="w-24 h-24 bg-emerald-50 rounded-3xl flex items-center justify-center mx-auto mb-3">
          <ScanLine size={40} className="text-emerald-600" />
        </div>
        <p className="text-base font-bold text-stone-800 mb-1">扫描包装上的溯源码</p>
        <p className="text-xs text-stone-400 mb-4">了解每一片薯片背后的产地故事</p>
        <button className="px-8 py-3 bg-emerald-600 text-white rounded-2xl font-bold text-sm active:scale-95 transition-transform shadow-lg shadow-emerald-200">
          开始扫描
        </button>
      </div>

      {/* 溯源时间线 */}
      <div className="mx-3 mt-3 bg-white rounded-2xl p-4 shadow-sm">
        <h3 className="text-sm font-bold text-stone-800 mb-3">云南昭通 · 噜咪啦农场</h3>
        <div className="relative pl-6 space-y-4">
          <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-emerald-200" />
          {[
            { emoji: '🌱', title: '土豆种植', desc: '云南昭通高原红皮土豆', time: '2024年3月' },
            { emoji: '🚜', title: '采收加工', desc: '手工筛选 · 清洗切片', time: '2024年8月' },
            { emoji: '🏭', title: '工厂生产', desc: '低温油炸 · 真空包装', time: '2024年9月' },
            { emoji: '🚚', title: '物流配送', desc: '冷链运输 · 新鲜直达', time: '2024年9月' },
          ].map((step, idx) => (
            <motion.div key={step.title} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }}
              className="relative">
              <div className="absolute -left-[13px] top-0.5 w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center text-[10px]">{step.emoji}</div>
              <p className="text-xs font-bold text-stone-800">{step.title}</p>
              <p className="text-[10px] text-stone-400">{step.desc}</p>
              <p className="text-[9px] text-stone-300 mt-0.5">{step.time}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 农场信息 */}
      <div className="mx-3 mt-3 bg-white rounded-2xl p-4 shadow-sm">
        <div className="flex items-center gap-3 mb-3">
          <img src="/images/lumila-ip.jpg" alt="" className="w-14 h-14 rounded-xl object-cover" />
          <div>
            <p className="text-sm font-bold text-stone-800">噜咪啦高原农场</p>
            <div className="flex items-center gap-1 text-[10px] text-stone-400">
              <MapPin size={10} className="text-emerald-500" /> 云南昭通 · 海拔2000m
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { value: '2000m', label: '海拔高度' },
            { value: '365天', label: '生长周期' },
            { value: '15°C', label: '均温' },
          ].map(stat => (
            <div key={stat.label} className="bg-stone-50 rounded-xl p-2 text-center">
              <p className="text-sm font-extrabold text-emerald-600">{stat.value}</p>
              <p className="text-[9px] text-stone-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
