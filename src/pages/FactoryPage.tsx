import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

type Page = 'home' | 'lab' | 'map' | 'profile' | 'trace' | 'funeral' | 'activities' | 'tasting' | 'factory' | 'flavor_vote';

export default function FactoryPage({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <div className="pb-6 min-h-full" style={{ backgroundColor: '#FAF6F0' }}>
      <header className="sticky top-0 z-40 h-14 bg-white flex items-center px-4 shadow-sm">
        <button onClick={() => navigate('activities')} className="text-stone-400 active:scale-95 p-1"><ChevronLeft size={22} /></button>
        <div className="flex-1 text-center"><h1 className="text-base font-extrabold text-stone-800">工厂开放日</h1></div>
        <div className="w-8" />
      </header>

      {/* 头图 */}
      <div className="mx-3 mt-3 rounded-2xl overflow-hidden shadow-sm relative h-48">
        <img src="/images/factory-tour.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-white text-base font-bold">噜咪啦工厂开放日</p>
          <p className="text-white/70 text-xs">见证一片薯片从土豆到包装的全过程</p>
        </div>
      </div>

      {/* 参观流程 */}
      <div className="mx-3 mt-3 bg-white rounded-2xl p-4 shadow-sm">
        <h3 className="text-sm font-bold text-stone-800 mb-3">参观流程</h3>
        <div className="relative pl-6 space-y-4">
          <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-blue-200" />
          {[
            { emoji: '🥔', title: '原料仓库', desc: '了解高原土豆的筛选标准' },
            { emoji: '🚿', title: '清洗车间', desc: '全自动清洗去皮生产线' },
            { emoji: '🔪', title: '切片车间', desc: '0.8mm超薄切片工艺' },
            { emoji: '🍟', title: '油炸车间', desc: '低温真空油炸技术' },
            { emoji: '🧂', title: '调味车间', desc: '精准撒粉 · 口味调配' },
            { emoji: '📦', title: '包装车间', desc: '氮气保鲜 · 自动封装' },
          ].map((step, idx) => (
            <motion.div key={step.title} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.08 }}
              className="relative">
              <div className="absolute -left-[13px] top-0.5 w-5 h-5 bg-blue-50 rounded-full flex items-center justify-center text-[10px]">{step.emoji}</div>
              <p className="text-xs font-bold text-stone-800">{step.title}</p>
              <p className="text-[10px] text-stone-400">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 预约信息 */}
      <div className="mx-3 mt-3 bg-white rounded-2xl p-4 shadow-sm">
        <h3 className="text-sm font-bold text-stone-800 mb-3">预约信息</h3>
        <div className="space-y-2">
          {[
            { label: '开放时间', value: '每周六 09:00-12:00' },
            { label: '集合地点', value: '噜咪啦工厂正门' },
            { label: '参观时长', value: '约2小时' },
            { label: '人数限制', value: '每批次20人' },
          ].map(item => (
            <div key={item.label} className="flex justify-between py-2 border-b border-stone-50 last:border-0">
              <span className="text-xs text-stone-400">{item.label}</span>
              <span className="text-xs font-bold text-stone-800">{item.value}</span>
            </div>
          ))}
        </div>
        <button className="w-full mt-4 py-3 bg-[#E53935] text-white rounded-2xl font-bold text-sm active:scale-[0.97] transition-transform shadow-lg shadow-red-200">
          立即预约
        </button>
      </div>
    </div>
  );
}
