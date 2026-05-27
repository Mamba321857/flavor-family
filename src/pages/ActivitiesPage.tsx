import { motion } from 'framer-motion';
import { ChevronLeft, Gift, Calendar, MapPin, ChevronRight, Clock } from 'lucide-react';

type Page = 'home' | 'lab' | 'map' | 'profile' | 'trace' | 'funeral' | 'activities' | 'tasting' | 'factory' | 'flavor_vote';

export default function ActivitiesPage({ navigate }: { navigate: (p: Page) => void }) {
  const activities = [
    {
      id: 'tasting',
      title: '噜咪啦品鉴会',
      desc: '限定30人 · 免费品鉴新口味',
      image: './images/tasting-event.jpg',
      date: '2026.06.15',
      location: '云南昭通',
      tag: '免费报名',
      page: 'tasting' as Page,
    },
    {
      id: 'factory',
      title: '工厂开放日',
      desc: '参观生产线 · 见证薯片诞生',
      image: './images/factory-tour.jpg',
      date: '2026.06.20',
      location: '噜咪啦工厂',
      tag: '预约参观',
      page: 'factory' as Page,
    },
    {
      id: 'funeral',
      title: '风味考核大会',
      desc: '小黑屋挑战 · 投票决定口味命运',
      image: './images/flavor-exam.jpg',
      date: '2026.05.28',
      location: '线上直播',
      tag: '即将开始',
      page: 'funeral' as Page,
    },
  ];

  return (
    <div className="pb-6 min-h-full" style={{ backgroundColor: '#FAF6F0' }}>
      <header className="sticky top-0 z-40 h-14 bg-white flex items-center px-4 shadow-sm">
        <button onClick={() => navigate('home')} className="text-stone-400 active:scale-95 p-1"><ChevronLeft size={22} /></button>
        <div className="flex-1 flex items-center justify-center gap-2">
          <Gift size={18} className="text-[#E53935]" />
          <h1 className="text-base font-extrabold text-stone-800">家族活动</h1>
        </div>
        <div className="w-8" />
      </header>

      {/* 活动列表 */}
      <div className="px-3 mt-3 space-y-3">
        {activities.map((act, idx) => (
          <motion.button key={act.id} onClick={() => navigate(act.page)}
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
            className="w-full bg-white rounded-2xl overflow-hidden shadow-sm text-left active:scale-[0.98] transition-transform">
            <div className="relative h-40">
              <img src={act.image} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#E53935] rounded-lg text-white text-[10px] font-bold">{act.tag}</div>
              <div className="absolute bottom-3 left-3 right-3">
                <h3 className="text-white text-base font-bold">{act.title}</h3>
                <p className="text-white/70 text-xs">{act.desc}</p>
              </div>
            </div>
            <div className="p-3 flex items-center gap-3 text-stone-400">
              <div className="flex items-center gap-1 text-[10px]"><Calendar size={12} /> {act.date}</div>
              <div className="flex items-center gap-1 text-[10px]"><MapPin size={12} /> {act.location}</div>
              <ChevronRight size={14} className="ml-auto text-stone-300" />
            </div>
          </motion.button>
        ))}
      </div>

      {/* 历史活动 */}
      <div className="mx-3 mt-4 p-4 bg-white rounded-2xl shadow-sm">
        <h3 className="text-sm font-bold text-stone-800 mb-3">往期活动回顾</h3>
        <div className="space-y-3">
          {[
            { title: '2026春季新品发布会', date: '2026.03.15', participants: '1.2万人参与' },
            { title: '噜咪啦×非遗联名启动仪式', date: '2026.04.01', participants: '8千人参与' },
          ].map(item => (
            <div key={item.title} className="flex items-center gap-3 p-3 bg-stone-50 rounded-xl">
              <div className="w-10 h-10 bg-stone-200 rounded-lg flex items-center justify-center"><Clock size={16} className="text-stone-400" /></div>
              <div className="flex-1">
                <p className="text-xs font-bold text-stone-800">{item.title}</p>
                <p className="text-[10px] text-stone-400">{item.date} · {item.participants}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
