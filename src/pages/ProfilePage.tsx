import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, QrCode, MapPin, Calendar, X } from 'lucide-react';
import { MEMBER_LEVELS, BADGES } from '../data';

type Page = 'home' | 'lab' | 'map' | 'profile' | 'trace' | 'funeral' | 'activities' | 'tasting' | 'factory' | 'flavor_vote';

export default function ProfilePage({ navigate }: { navigate: (p: Page) => void }) {
  const [showMemberCode, setShowMemberCode] = useState(false);
  const userPoints = 1280;
  const currentLevel = MEMBER_LEVELS.reduce((acc, lvl) => userPoints >= lvl.minPoints ? lvl : acc, MEMBER_LEVELS[0]);
  const nextLevel = MEMBER_LEVELS.find(l => l.minPoints > userPoints);

  return (
    <div className="pb-6 min-h-full" style={{ backgroundColor: '#FAF6F0' }}>
      {/* 风味卡 FLAVOR CLUB */}
      <div className="mx-3 mt-3">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl overflow-hidden shadow-xl relative"
          style={{ background: 'linear-gradient(135deg, #BF360C 0%, #C62828 35%, #B71C1C 70%, #8B0000 100%)' }}>
          {/* 中央团纹暗纹 */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] pointer-events-none">
            <svg width="200" height="200" viewBox="0 0 200 200"><circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeWidth="2" /><circle cx="100" cy="100" r="55" fill="none" stroke="white" strokeWidth="1.5" /><path d="M100,30 Q120,50 140,45 Q135,65 150,80 Q130,90 125,110 Q105,100 85,110 Q80,90 60,80 Q75,65 70,45 Q90,50 100,30Z" fill="white" /><path d="M100,170 Q80,150 60,155 Q65,135 50,120 Q70,110 75,90 Q95,100 115,90 Q120,110 140,120 Q125,135 130,155 Q110,150 100,170Z" fill="white" /></svg>
          </div>
          {/* 左下祥云 */}
          <div className="absolute -bottom-3 -left-3 opacity-20 pointer-events-none">
            <svg width="100" height="60" viewBox="0 0 100 60"><path d="M10,50 Q20,30 35,35 Q40,15 60,20 Q70,5 85,15 Q95,20 90,35 Q100,45 85,55 Q70,60 50,58 Q30,62 15,55 Q5,58 10,50Z" fill="#FFB300" /></svg>
          </div>
          {/* 右下祥云 */}
          <div className="absolute bottom-2 right-2 opacity-25 pointer-events-none">
            <svg width="80" height="50" viewBox="0 0 80 50"><path d="M5,40 Q15,20 30,25 Q40,8 55,15 Q65,5 75,18 Q80,28 70,38 Q75,48 60,48 Q45,52 30,48 Q15,50 5,40Z" fill="#FFD54F" /></svg>
          </div>
          {/* 左上祥云 */}
          <div className="absolute top-1 left-1 opacity-10 pointer-events-none">
            <svg width="60" height="40" viewBox="0 0 60 40"><path d="M5,30 Q12,15 25,18 Q32,5 45,12 Q55,8 52,22 Q58,30 48,35 Q38,38 25,36 Q12,38 5,30Z" fill="#FF8F00" /></svg>
          </div>
          <div className="relative p-5">
            {/* 右上 */}
            <div className="flex justify-end mb-4">
              <button className="flex items-center gap-1 px-3 py-1.5 bg-white/15 backdrop-blur rounded-full text-white text-[11px] font-bold active:scale-95 transition-transform">
                会员权益 <ChevronRight size={12} />
              </button>
            </div>
            {/* 大字 */}
            <div className="text-center pb-2">
              <h2 className="text-[#FFD54F] text-[42px] font-black tracking-[0.15em] leading-none" style={{ fontFamily: 'serif', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>风味卡</h2>
              <p className="text-[#FFD54F]/70 text-xs tracking-[0.25em] mt-2 font-medium">FLAVOR CLUB</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 用户信息卡 */}
      <div className="mx-3 mt-3 bg-white rounded-2xl p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#E53935] flex items-center justify-center text-white text-lg font-bold">薯</div>
            <div>
              <p className="text-base font-bold text-stone-800">风味探索家</p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[10px] text-stone-400">No.0731 2464 416</span>
                <button className="text-stone-300"><QrCode size={12} /></button>
              </div>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-stone-100 rounded-full text-[10px] text-stone-500 mt-1">
                <MapPin size={9} /> 云南昭通
              </span>
            </div>
          </div>
          <button onClick={() => setShowMemberCode(true)} className="flex flex-col items-center">
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center border border-red-100">
              <QrCode size={22} className="text-[#E53935]" />
            </div>
            <span className="text-[9px] text-stone-400 mt-0.5">会员码</span>
          </button>
        </div>
      </div>

      {/* 数据概览 - 余额/积分/优惠券 */}
      <div className="mx-3 mt-3 bg-white rounded-2xl p-4 shadow-sm">
        <div className="grid grid-cols-3 gap-4 divide-x divide-stone-100">
          <div className="text-center">
            <p className="text-xl font-extrabold text-stone-800">0</p>
            <p className="text-[11px] text-stone-400 mt-0.5">余额</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-extrabold text-[#E53935]">1,280</p>
            <p className="text-[11px] text-stone-400 mt-0.5">积分</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-extrabold text-stone-800">3</p>
            <p className="text-[11px] text-stone-400 mt-0.5">优惠券</p>
          </div>
        </div>
      </div>

      {/* 会员等级 */}
      <div className="mx-3 mt-3 bg-white rounded-2xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold text-stone-800">会员等级</h3>
          <span className="text-xs font-bold" style={{ color: currentLevel.color }}>{currentLevel.name}会员</span>
        </div>
        {/* 进度条 */}
        {nextLevel && (
          <div className="mb-3">
            <div className="flex justify-between text-[10px] text-stone-400 mb-1.5">
              <span className="flex items-center gap-1">{currentLevel.emoji} {currentLevel.name}</span>
              <span>距{nextLevel.name}还需 <span className="text-[#E53935] font-bold">{nextLevel.minPoints - userPoints}</span> 积分</span>
            </div>
            <div className="h-2.5 bg-stone-100 rounded-full overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${(userPoints / nextLevel.minPoints) * 100}%`, background: 'linear-gradient(to right, #E53935, #FF9800)' }} />
            </div>
          </div>
        )}
        {/* 四个等级 */}
        <div className="grid grid-cols-4 gap-2 mt-3">
          {MEMBER_LEVELS.map(lvl => {
            const isCurrent = lvl.name === currentLevel.name;
            return (
              <div key={lvl.name}
                className={`flex flex-col items-center gap-1 py-2.5 rounded-xl transition-all ${
                  isCurrent ? 'bg-amber-50 border-2 border-amber-300' : 'bg-stone-50 border-2 border-transparent'
                }`}>
                <span className="text-lg">{lvl.emoji}</span>
                <p className={`text-xs font-bold ${isCurrent ? 'text-[#E53935]' : 'text-stone-500'}`}>{lvl.name}</p>
                <p className="text-[10px] text-stone-400">{lvl.discount}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 我的徽章 */}
      <div className="mx-3 mt-3 bg-white rounded-2xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold text-stone-800">我的徽章</h3>
          <span className="text-[11px] text-stone-400">共获得 <span className="text-[#E53935] font-bold">{BADGES.filter(b => b.earned).length}</span> 枚 <ChevronRight size={12} className="inline" /></span>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {BADGES.map(badge => (
            <div key={badge.name} className={`flex flex-col items-center gap-1 ${badge.earned ? '' : 'opacity-40'}`}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-lg" style={{ backgroundColor: badge.earned ? badge.color + '15' : '#F5F5F4' }}>
                <span className={badge.earned ? '' : 'grayscale'}>{badge.emoji}</span>
              </div>
              <p className="text-[9px] text-stone-500 text-center font-medium leading-tight">{badge.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 我的活动 */}
      <div className="mx-3 mt-3 bg-white rounded-2xl p-4 shadow-sm">
        <h3 className="text-sm font-bold text-stone-800 mb-3">我的活动</h3>
        <div className="space-y-2.5">
          {[
            { title: '噜咪啦品鉴会', date: '2026.06.15', status: '已报名', color: 'text-green-600', bg: 'bg-green-50' },
            { title: '工厂开放日', date: '2026.06.20', status: '待开始', color: 'text-amber-600', bg: 'bg-amber-50' },
          ].map(act => (
            <div key={act.title} className="flex items-center gap-3 p-3 bg-stone-50 rounded-xl">
              <div className="w-10 h-10 bg-stone-200 rounded-lg flex items-center justify-center"><Calendar size={16} className="text-stone-400" /></div>
              <div className="flex-1">
                <p className="text-xs font-bold text-stone-800">{act.title}</p>
                <p className="text-[10px] text-stone-400">{act.date}</p>
              </div>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${act.bg} ${act.color}`}>{act.status}</span>
            </div>
          ))}
        </div>
        <button onClick={() => navigate('activities')}
          className="w-full mt-3 py-2.5 text-[#E53935] text-xs font-bold border border-red-200 rounded-xl active:scale-[0.97] transition-transform">
          查看更多活动
        </button>
      </div>

      {/* 会员码弹窗 */}
      <AnimatePresence>
        {showMemberCode && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-6">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl p-6 w-full max-w-[300px] shadow-2xl">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-base font-bold text-stone-800">会员码</h3>
                <button onClick={() => setShowMemberCode(false)} className="w-7 h-7 bg-stone-100 rounded-full flex items-center justify-center text-stone-400"><X size={14} /></button>
              </div>
              <div className="bg-stone-100 rounded-2xl p-4 flex items-center justify-center">
                <div className="w-40 h-40 bg-white rounded-xl flex items-center justify-center">
                  <QrCode size={80} className="text-stone-800" />
                </div>
              </div>
              <p className="text-center text-xs text-stone-400 mt-3">门店扫码即可积分享优惠</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
