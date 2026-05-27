import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Sparkles, X, Check, Heart } from 'lucide-react';
import { INGREDIENTS, INGREDIENT_CATEGORIES, FLAVOR_NAMES, DEFAULT_FLAVORS } from '../data';

type Page = 'home' | 'lab' | 'map' | 'profile' | 'trace' | 'funeral' | 'activities' | 'tasting' | 'factory' | 'flavor_vote';

export default function LabPage({ navigate }: { navigate: (p: Page) => void }) {
  const [salt, setSalt] = useState(50);
  const [spicy, setSpicy] = useState(30);
  const [umami, setUmami] = useState(60);
  const [aroma, setAroma] = useState(40);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [generatedFlavor, setGeneratedFlavor] = useState('');
  const [activeCategory, setActiveCategory] = useState('蔬果');

  const sliders = [
    { label: '咸', sub: 'Salt', value: salt, set: setSalt, color: '#3B82F6', bg: 'bg-blue-50' },
    { label: '辣', sub: 'Spicy', value: spicy, set: setSpicy, color: '#EF4444', bg: 'bg-red-50' },
    { label: '鲜', sub: 'Umami', value: umami, set: setUmami, color: '#10B981', bg: 'bg-green-50' },
    { label: '香', sub: 'Aroma', value: aroma, set: setAroma, color: '#F59E0B', bg: 'bg-amber-50' },
  ];

  const toggleIngredient = (id: string) => {
    setSelectedIngredients(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const filteredIngredients = INGREDIENTS.filter(i => i.category === activeCategory);

  const handleGenerate = () => {
    if (selectedIngredients.length > 0) {
      const names = FLAVOR_NAMES[selectedIngredients[0]] || ['创意混合'];
      setGeneratedFlavor(`${names[(salt + spicy) % names.length]}味`);
    } else {
      setGeneratedFlavor(DEFAULT_FLAVORS[(salt + spicy + umami + aroma) % DEFAULT_FLAVORS.length]);
    }
    setShowResult(true);
  };

  return (
    <div className="pb-6 min-h-full" style={{ backgroundColor: '#FAF6F0' }}>
      <header className="sticky top-0 z-40 h-14 flex items-center px-4" style={{ backgroundColor: '#FAF6F0' }}>
        <button onClick={() => navigate('home')} className="text-stone-400 active:scale-95 p-1"><ChevronRight size={22} className="rotate-180" /></button>
        <div className="flex-1 text-center">
          <h1 className="text-base font-extrabold text-stone-800">口味实验室</h1>
          <p className="text-[10px] text-stone-400">{INGREDIENTS.length}种原料自由调配</p>
        </div>
        <div className="w-8" />
      </header>

      {/* IP形象引导 */}
      <div className="mx-4 mb-4 flex items-center gap-3 bg-white rounded-2xl p-3 shadow-sm">
        <img src="/images/lumila-ip.jpg" alt="" className="w-12 h-12 rounded-xl object-cover" />
        <div>
          <p className="text-sm font-bold text-stone-800">用{INGREDIENTS.length}种原料创造你的专属口味</p>
          <p className="text-[10px] text-stone-400">选择原料 → 调整参数 → 生成口味</p>
        </div>
      </div>

      {/* 圆环滑杆 */}
      <div className="px-4">
        <div className="grid grid-cols-4 gap-2.5">
          {sliders.map(s => (
            <div key={s.label} className={`${s.bg} rounded-2xl p-2.5 flex flex-col items-center gap-1`}>
              <div className="relative w-14 h-14">
                <svg className="w-14 h-14 -rotate-90" viewBox="0 0 56 56">
                  <circle cx="28" cy="28" r="24" fill="none" stroke="white" strokeWidth="5" />
                  <circle cx="28" cy="28" r="24" fill="none" stroke={s.color} strokeWidth="5"
                    strokeDasharray={`${2 * Math.PI * 24}`}
                    strokeDashoffset={`${2 * Math.PI * 24 * (1 - s.value / 100)}`}
                    strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-extrabold" style={{ color: s.color }}>{s.value}</span>
                </div>
              </div>
              <span className="text-xs font-bold text-stone-700">{s.label}</span>
              <span className="text-[8px] text-stone-400 uppercase">{s.sub}</span>
              <input type="range" min="0" max="100" value={s.value}
                onChange={e => s.set(Number(e.target.value))}
                className="w-full h-1 rounded-full appearance-none cursor-pointer"
                style={{ background: `linear-gradient(to right, ${s.color} 0%, ${s.color} ${s.value}%, #E5E5E5 ${s.value}%, #E5E5E5 100%)` }} />
            </div>
          ))}
        </div>
      </div>

      {/* 已选原料 */}
      {selectedIngredients.length > 0 && (
        <div className="px-4 mt-3">
          <div className="flex flex-wrap gap-1.5">
            {selectedIngredients.map(id => {
              const ing = INGREDIENTS.find(i => i.id === id)!;
              return (
                <motion.span key={id} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: ing.color }}>
                  {ing.emoji} {ing.name}
                  <button onClick={() => toggleIngredient(id)}><X size={10} /></button>
                </motion.span>
              );
            })}
          </div>
        </div>
      )}

      {/* 分类标签 */}
      <div className="px-4 mt-3">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {INGREDIENT_CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                activeCategory === cat ? 'bg-[#E53935] text-white shadow-md' : 'bg-white text-stone-500 border border-stone-200'
              }`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 原料网格 */}
      <div className="px-4 mt-2">
        <div className="grid grid-cols-5 gap-2">
          {filteredIngredients.map(ing => {
            const isSelected = selectedIngredients.includes(ing.id);
            return (
              <motion.button key={ing.id} whileTap={{ scale: 0.9 }}
                onClick={() => toggleIngredient(ing.id)}
                className="flex flex-col items-center gap-1 py-2.5 rounded-2xl border-2 transition-all"
                style={{
                  backgroundColor: isSelected ? ing.color + '15' : 'white',
                  borderColor: isSelected ? ing.color + '50' : '#F0F0F0',
                }}>
                <span className="text-xl">{ing.emoji}</span>
                <span className={`text-[10px] font-bold ${isSelected ? 'text-stone-800' : 'text-stone-500'}`}>{ing.name}</span>
                {isSelected && (
                  <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ backgroundColor: ing.color }}>
                    <Check size={10} className="text-white" />
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* 生成按钮 */}
      <div className="px-4 mt-4">
        <button onClick={handleGenerate}
          className="w-full py-4 bg-[#E53935] text-white rounded-2xl font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-red-200 active:scale-[0.97] transition-transform">
          <Sparkles size={20} /> 开始调配
        </button>
      </div>

      {/* Result */}
      <AnimatePresence>
        {showResult && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="px-4 mt-4 mb-2">
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
              <div className="h-52 relative">
                <img src="/images/chips-bag.png" alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white/50 text-[10px] uppercase tracking-widest mb-1">Your Creation</p>
                  <p className="text-white text-2xl font-extrabold">{generatedFlavor}</p>
                  {selectedIngredients.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {selectedIngredients.map(id => {
                        const ing = INGREDIENTS.find(i => i.id === id)!;
                        return <span key={id} className="px-2 py-0.5 rounded-full text-[10px] text-white bg-white/20 backdrop-blur">{ing.emoji} {ing.name}</span>;
                      })}
                    </div>
                  )}
                </div>
              </div>
              <div className="p-4 flex gap-2">
                <button className="flex-1 py-3 bg-[#E53935] text-white rounded-2xl text-sm font-bold active:scale-95 transition-transform flex items-center justify-center gap-1.5 shadow-md"><Heart size={16} /> 投票支持</button>
                <button onClick={() => setShowResult(false)} className="flex-1 py-3 bg-stone-100 text-stone-600 rounded-2xl text-sm font-bold active:scale-95 transition-transform">重新调配</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
