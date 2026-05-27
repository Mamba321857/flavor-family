import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Map, ChevronRight, Lock, Check, X, Gift } from 'lucide-react';
import { PROVINCES } from '../data';

type Page = 'home' | 'lab' | 'map' | 'profile' | 'trace' | 'funeral' | 'activities' | 'tasting' | 'factory' | 'flavor_vote';

export default function MapPage({ navigate }: { navigate: (p: Page) => void }) {
  const [selected, setSelected] = useState<typeof PROVINCES[0] | null>(null);
  const lit = PROVINCES.filter(p => p.fragments.normal).length;

  return (
    <div className="pb-6 min-h-full" style={{ backgroundColor: '#FAF6F0' }}>
      <header className="sticky top-0 z-40 h-14 flex items-center px-4 shadow-sm" style={{ backgroundColor: '#FAF6F0' }}>
        <button onClick={() => navigate('home')} className="text-stone-400 active:scale-95 p-1"><ChevronRight size={22} className="rotate-180" /></button>
        <div className="flex-1 flex items-center justify-center gap-2">
          <Map size={18} className="text-[#E53935]" />
          <h1 className="text-base font-extrabold text-stone-800">中国风味地图</h1>
        </div>
        <div className="w-8" />
      </header>

      {/* 收集进度 */}
      <div className="px-3 mt-2">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-stone-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-stone-500 text-xs font-medium">收集进度</span>
            <span className="text-[#E53935] text-xs font-bold">{lit}/{PROVINCES.length} 省份</span>
          </div>
          <div className="h-2.5 bg-stone-100 rounded-full overflow-hidden">
            <motion.div initial={{ width: 0 }} animate={{ width: `${(lit / PROVINCES.length) * 100}%` }} transition={{ duration: 1 }}
              className="h-full bg-gradient-to-r from-[#E53935] to-amber-500 rounded-full" />
          </div>
          <div className="flex gap-4 mt-3 justify-center">
            {[{ e: '🥔', l: '普通' }, { e: '✨', l: '稀有' }, { e: '👑', l: '典藏' }].map(t => (
              <div key={t.l} className="text-center flex-1"><p className="text-lg">{t.e}</p><p className="text-[10px] text-stone-400">{t.l}</p></div>
            ))}
          </div>
        </div>
      </div>

      {/* 34省网格 */}
      <div className="px-3 mt-3">
        <div className="grid grid-cols-5 gap-2">
          {PROVINCES.map(p => {
            const isLit = p.fragments.normal;
            return (
              <motion.button key={p.id} whileTap={{ scale: 0.92 }}
                onClick={() => setSelected(p)}
                className="relative aspect-square rounded-2xl border-2 flex flex-col items-center justify-center gap-0.5 transition-all"
                style={isLit ? { backgroundColor: p.color + '10', borderColor: p.color + '40' } : { backgroundColor: 'white', borderColor: '#E5E5E5' }}>
                {isLit ? (
                  <><span className="text-lg">{p.normal.emoji}</span><span className="text-stone-800 text-[10px] font-bold">{p.name}</span></>
                ) : (
                  <><Lock size={14} className="text-stone-300" /><span className="text-stone-400 text-[10px]">{p.name}</span></>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* 弹窗 - 带关闭按钮和购买跳转 */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/30 z-[55]" />
            <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-x-0 bottom-0 bg-white rounded-t-3xl p-5 z-[60] max-w-[430px] mx-auto shadow-2xl">
              <div className="flex justify-between items-center mb-4">
                <div className="w-8 h-1 bg-stone-200 rounded-full" />
                <button onClick={() => setSelected(null)}
                  className="w-7 h-7 bg-stone-100 rounded-full flex items-center justify-center text-stone-400 active:scale-90 transition-transform">
                  <X size={14} />
                </button>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-sm" style={{ backgroundColor: selected.color + '15' }}>
                  {selected.fragments.normal ? selected.normal.emoji : '?'}
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-stone-800">{selected.name}省风味</h3>
                  <p className="text-xs text-stone-400">{selected.fragments.normal ? '已解锁' : '未解锁 - 购买限定口味解锁'}</p>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                {(['normal', 'rare', 'legendary'] as const).map(type => {
                  const hasIt = selected.fragments[type];
                  const flavorData = selected[type] as { name: string; emoji: string };
                  const labels = { normal: '普通碎片', rare: '稀有碎片', legendary: '典藏碎片' };
                  return (
                    <div key={type}
                      className={`flex items-center gap-3 p-3 rounded-xl border-2 ${hasIt ? 'border-amber-200 bg-amber-50' : 'border-stone-100 bg-stone-50'}`}>
                      <span className="text-xl">{hasIt ? flavorData.emoji : '?'}</span>
                      <div className="flex-1">
                        <p className={`text-xs font-bold ${hasIt ? 'text-stone-800' : 'text-stone-300'}`}>{labels[type]}</p>
                        <p className={`text-sm font-bold ${hasIt ? 'text-stone-800' : 'text-stone-300'}`}>{hasIt ? flavorData.name : '???'}</p>
                      </div>
                      {hasIt && <Check size={16} className="text-green-500" />}
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-2">
                <button onClick={() => setSelected(null)}
                  className="flex-1 py-3 bg-[#E53935] text-white rounded-xl font-bold text-sm active:scale-95 transition-transform shadow-lg shadow-red-200">
                  购买限定口味
                </button>
                {selected.fragments.normal && (
                  <button className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-bold text-sm active:scale-95 transition-transform flex items-center justify-center gap-1">
                    <Gift size={14} /> 购买
                  </button>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
