import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Map, Beaker, Vote,
  Sparkles, ChevronRight,
  Gift,
  ScanLine, CreditCard, Star, QrCode,
  Clock, MapPin,
  Award, ChevronLeft, UserPlus,
} from 'lucide-react';
import {
  PROVINCES, INGREDIENTS, INGREDIENT_CATEGORIES,
  FLAVOR_NAMES, DEFAULT_FLAVORS,
  MEMBER_LEVELS, BADGES, FLAVOR_VOTES,
} from '../data';

type Page = 'home' | 'lab' | 'map' | 'profile' | 'trace' | 'funeral' | 'activities' | 'tasting' | 'factory' | 'flavor_vote';

export default function HomePage({ navigate }: { navigate: (p: Page) => void }) {
  const [bannerIdx, setBannerIdx] = useState(0);
  const banners = ['/images/banner-chips-field.jpg', '/images/banner-chicken-feet.jpg'];

  useEffect(() => {
    const timer = setInterval(() => setBannerIdx(i => (i + 1) % banners.length), 4000);
    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <div className="pb-4 min-h-full" style={{ backgroundColor: '#FAF6F0' }}>
      {/* Banner轮播 */}
      <div className="relative w-full h-[200px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img key={bannerIdx} src={banners[bannerIdx]} alt=""
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full object-cover" />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
        <div className="absolute top-3 right-4 bg-white/20 backdrop-blur rounded-full px-3 py-1">
          <span className="text-white text-[10px] font-bold">{bannerIdx + 1}/{banners.length}</span>
        </div>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {banners.map((_, i) => (
            <button key={i} onClick={() => setBannerIdx(i)} className={`w-1.5 h-1.5 rounded-full transition-all ${i === bannerIdx ? 'bg-white w-4' : 'bg-white/40'}`} />
          ))}
        </div>
      </div>

      {/* 用户信息卡 */}
      <div className="mx-3 -mt-5 relative z-10">
        <div className="bg-white rounded-2xl shadow-md border border-stone-100 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E53935] to-orange-400 flex items-center justify-center text-white text-lg font-bold shadow-md">
                薯
              </div>
              <div>
                <p className="text-base font-bold text-stone-800">风味探索家</p>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-stone-100 rounded-full text-[10px] text-stone-500 mt-0.5">
                  <Map size={10} /> 云南昭通
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center border border-red-100">
                <QrCode size={20} className="text-[#E53935]" />
              </div>
              <span className="text-[9px] text-stone-400 mt-0.5">会员码</span>
            </div>
          </div>
          <div className="flex mt-4 pt-3 border-t border-stone-100">
            {[
              { value: '1,280', label: '积分', color: 'text-[#E53935]' },
              { value: '3', label: '优惠券', color: 'text-stone-800' },
              { value: '0', label: '余额', color: 'text-stone-800' },
            ].map(stat => (
              <div key={stat.label} className="flex-1 text-center">
                <p className={`text-lg font-extrabold ${stat.color}`}>{stat.value}</p>
                <p className="text-[10px] text-stone-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 核心功能入口 - 三栏 */}
      <div className="mx-3 mt-3 bg-white rounded-2xl shadow-sm border border-stone-100 p-4">
        <div className="grid grid-cols-3 gap-3 divide-x divide-stone-100">
          {[
            { icon: Beaker, title: '口味实验室', desc: '66种原料调配', page: 'lab', color: 'text-blue-600', bg: 'bg-blue-50' },
            { icon: Vote, title: '口味投票', desc: '为喜欢的口味助力', page: 'flavor_vote', color: 'text-red-600', bg: 'bg-red-50' },
            { icon: ScanLine, title: '产地溯源', desc: '扫码看土豆老家', page: 'trace', color: 'text-emerald-600', bg: 'bg-emerald-50' },
          ].map(item => {
            const Icon = item.icon;
            return (
              <button key={item.title} onClick={() => navigate(item.page as Page)}
                className="flex flex-col items-center gap-2 text-center active:scale-95 transition-transform first:pl-0 last:pr-0">
                <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center`}>
                  <Icon size={22} className={item.color} />
                </div>
                <div>
                  <p className="text-sm font-bold text-stone-800">{item.title}</p>
                  <p className="text-[10px] text-stone-400 mt-0.5">{item.desc}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 活动区 - 四宫格 */}
      <div className="mx-3 mt-3 bg-white rounded-2xl shadow-sm border border-stone-100 p-4">
        <div className="grid grid-cols-4 gap-3">
          {[
            { icon: Gift, label: '家族活动', desc: '限定福利不停', page: 'activities', color: 'text-rose-600', bg: 'bg-rose-50' },
            { icon: CreditCard, label: '积分充值', desc: '91折起充值', page: 'profile', color: 'text-amber-600', bg: 'bg-amber-50' },
            { icon: Sparkles, label: '会员福利', desc: '0元注册享福利', page: 'profile', color: 'text-purple-600', bg: 'bg-purple-50' },
            { icon: Star, label: '订单评价', desc: '参与赢取好礼', page: 'profile', color: 'text-blue-600', bg: 'bg-blue-50' },
          ].map(item => {
            const Icon = item.icon;
            return (
              <button key={item.label} onClick={() => navigate(item.page as Page)}
                className="flex flex-col items-center gap-1.5 active:scale-95 transition-transform">
                <div className={`w-10 h-10 ${item.bg} rounded-lg flex items-center justify-center`}>
                  <Icon size={18} className={item.color} />
                </div>
                <p className="text-xs font-bold text-stone-800">{item.label}</p>
                <p className="text-[9px] text-stone-400 text-center leading-tight">{item.desc}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* 我的徽章 */}
      <div className="mx-3 mt-3 bg-white rounded-2xl shadow-sm border border-stone-100 p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold text-stone-800">我的徽章</h3>
          <span className="text-[11px] text-stone-400">已获得 <span className="text-[#E53935] font-bold">3</span> 枚 <ChevronRight size={12} className="inline" /></span>
        </div>
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
          {BADGES.filter(b => b.earned).map(badge => (
            <div key={badge.name} className="flex-shrink-0 w-14 flex flex-col items-center gap-1">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-lg" style={{ backgroundColor: badge.color + '12' }}>
                {badge.emoji}
              </div>
              <p className="text-[9px] text-stone-500 text-center font-medium leading-tight">{badge.name}</p>
            </div>
          ))}
          {BADGES.filter(b => !b.earned).map(badge => (
            <div key={badge.name} className="flex-shrink-0 w-14 flex flex-col items-center gap-1 opacity-40">
              <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center text-lg grayscale">
                {badge.emoji}
              </div>
              <p className="text-[9px] text-stone-400 text-center font-medium leading-tight">{badge.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 新品口味预约 */}
      <div className="mx-3 mt-3 bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-stone-800">新品口味预约</h3>
            <span className="px-2 py-0.5 bg-red-50 rounded-full text-[10px] text-[#E53935] font-bold">火热预约中</span>
          </div>
          <div className="flex gap-3">
            <img src="/images/new-product.jpg" alt="" className="w-20 h-20 rounded-xl object-cover shadow-sm" />
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-base font-extrabold text-stone-800">非遗联名限定系列</p>
              <p className="text-[11px] text-stone-400 mt-0.5">敦煌飞天 · 景泰蓝 · 皮影戏</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex -space-x-1.5">
                  {['🥔','🌶️','🧀'].map((e, i) => (
                    <div key={i} className="w-5 h-5 rounded-full bg-stone-100 flex items-center justify-center text-[10px] border-2 border-white">{e}</div>
                  ))}
                </div>
                <span className="text-[10px] text-stone-400">已有 <span className="text-[#E53935] font-bold">2,847</span> 人预约</span>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full py-3 bg-gradient-to-r from-[#E53935] to-orange-500 text-white text-sm font-bold active:scale-[0.97] transition-transform flex items-center justify-center gap-1.5">
          <Gift size={16} /> 立即预约
        </button>
      </div>
    </div>
  );
}
