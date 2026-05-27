import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Calendar, MapPin, Award, UserPlus, Check } from 'lucide-react';

type Page = 'home' | 'lab' | 'map' | 'profile' | 'trace' | 'funeral' | 'activities' | 'tasting' | 'factory' | 'flavor_vote';

export default function TastingPage({ navigate }: { navigate: (p: Page) => void }) {
  const [form, setForm] = useState({ name: '', phone: '', date: '', people: '1' });
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="min-h-full flex flex-col items-center justify-center p-6" style={{ backgroundColor: '#FAF6F0' }}>
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-3xl p-6 shadow-xl text-center w-full max-w-sm">
          <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3">
            <Check size={32} className="text-green-500" />
          </div>
          <h3 className="text-lg font-bold text-stone-800 mb-1">预约成功!</h3>
          <p className="text-xs text-stone-400 mb-4">我们会在活动前3天通过短信通知您</p>
          <div className="bg-stone-50 rounded-2xl p-4 mb-4 text-left">
            <div className="flex justify-between text-xs mb-2"><span className="text-stone-400">活动</span><span className="font-bold text-stone-800">噜咪啦品鉴会</span></div>
            <div className="flex justify-between text-xs mb-2"><span className="text-stone-400">时间</span><span className="font-bold text-stone-800">2026.06.15 14:00</span></div>
            <div className="flex justify-between text-xs"><span className="text-stone-400">地点</span><span className="font-bold text-stone-800">云南昭通噜咪啦总部</span></div>
          </div>
          <button onClick={() => navigate('activities')} className="w-full py-3 bg-[#E53935] text-white rounded-2xl font-bold text-sm active:scale-95 transition-transform">
            返回活动列表
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pb-6 min-h-full" style={{ backgroundColor: '#FAF6F0' }}>
      <header className="sticky top-0 z-40 h-14 bg-white flex items-center px-4 shadow-sm">
        <button onClick={() => navigate('activities')} className="text-stone-400 active:scale-95 p-1"><ChevronLeft size={22} /></button>
        <div className="flex-1 text-center"><h1 className="text-base font-extrabold text-stone-800">品鉴会预约</h1></div>
        <div className="w-8" />
      </header>

      {/* 活动头图 */}
      <div className="mx-3 mt-3 rounded-2xl overflow-hidden shadow-sm relative h-44">
        <img src="./images/tasting-event.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3">
          <p className="text-white text-sm font-bold">噜咪啦品鉴会</p>
          <p className="text-white/70 text-xs">限定30人 · 免费参加</p>
        </div>
      </div>

      {/* 活动信息 */}
      <div className="mx-3 mt-3 bg-white rounded-2xl p-4 shadow-sm">
        <h3 className="text-sm font-bold text-stone-800 mb-3">活动详情</h3>
        <div className="space-y-2.5">
          {[
            { icon: Calendar, label: '时间', value: '2026年6月15日 14:00-17:00' },
            { icon: MapPin, label: '地点', value: '云南昭通噜咪啦品牌体验中心' },
            { icon: UserPlus, label: '人数', value: '限定30人' },
            { icon: Award, label: '福利', value: '品鉴5款新口味 + 伴手礼' },
          ].map(item => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center"><Icon size={14} className="text-[#E53935]" /></div>
                <div>
                  <p className="text-[10px] text-stone-400">{item.label}</p>
                  <p className="text-xs font-bold text-stone-800">{item.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 预约表单 */}
      <div className="mx-3 mt-3 bg-white rounded-2xl p-4 shadow-sm">
        <h3 className="text-sm font-bold text-stone-800 mb-3">填写预约信息</h3>
        <div className="space-y-3">
          <div>
            <label className="text-[11px] text-stone-500 font-medium mb-1 block">姓名</label>
            <input type="text" placeholder="请输入您的姓名" value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              className="w-full px-3 py-2.5 bg-stone-50 rounded-xl text-sm border border-stone-200 focus:border-[#E53935] focus:outline-none transition-colors" />
          </div>
          <div>
            <label className="text-[11px] text-stone-500 font-medium mb-1 block">手机号</label>
            <input type="tel" placeholder="请输入手机号码" value={form.phone}
              onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
              className="w-full px-3 py-2.5 bg-stone-50 rounded-xl text-sm border border-stone-200 focus:border-[#E53935] focus:outline-none transition-colors" />
          </div>
          <div>
            <label className="text-[11px] text-stone-500 font-medium mb-1 block">参加人数</label>
            <select value={form.people} onChange={e => setForm(f => ({ ...f, people: e.target.value }))}
              className="w-full px-3 py-2.5 bg-stone-50 rounded-xl text-sm border border-stone-200 focus:border-[#E53935] focus:outline-none transition-colors">
              {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}人</option>)}
            </select>
          </div>
        </div>
        <button onClick={() => form.name && form.phone ? setSubmitted(true) : null}
          className="w-full mt-4 py-3.5 bg-[#E53935] text-white rounded-2xl font-bold text-sm active:scale-[0.97] transition-transform shadow-lg shadow-red-200">
          确认预约
        </button>
        <p className="text-[10px] text-stone-400 text-center mt-2">预约成功后不可取消，请确认时间后提交</p>
      </div>
    </div>
  );
}
