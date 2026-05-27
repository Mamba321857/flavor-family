import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Heart, Check, Share2 } from 'lucide-react';
import { FLAVOR_VOTES } from '../data';

type Page = 'home' | 'lab' | 'map' | 'profile' | 'trace' | 'funeral' | 'activities' | 'tasting' | 'factory' | 'flavor_vote';

export default function FlavorVotePage({ navigate }: { navigate: (p: Page) => void }) {
  const [voted, setVoted] = useState<Record<number, boolean>>({});
  const [votes, setVotes] = useState(FLAVOR_VOTES);
  const totalVotes = votes.reduce((s, v) => s + v.votes, 0);

  const handleVote = (idx: number) => {
    if (voted[idx]) return;
    setVoted(prev => ({ ...prev, [idx]: true }));
    setVotes((prev: typeof FLAVOR_VOTES) => prev.map((v, i) => i === idx ? { ...v, votes: v.votes + 1 } : v));
  };

  return (
    <div className="pb-6 min-h-full" style={{ backgroundColor: '#FAF6F0' }}>
      <header className="sticky top-0 z-40 h-14 bg-white/80 backdrop-blur flex items-center px-4 shadow-sm">
        <button onClick={() => navigate('home')} className="text-stone-400 active:scale-95 p-1"><ChevronLeft size={22} /></button>
        <div className="flex-1 text-center">
          <h1 className="text-base font-extrabold text-stone-800">口味投票</h1>
          <p className="text-[10px] text-stone-400">为喜欢的创意口味投票 · 共{totalVotes.toLocaleString()}票</p>
        </div>
        <div className="w-8" />
      </header>

      {/* 说明卡片 */}
      <div className="mx-3 mt-3 bg-white rounded-2xl p-4 shadow-sm border border-stone-100">
        <div className="flex items-start gap-2.5">
          <span className="text-xl">💡</span>
          <div>
            <p className="text-sm font-bold text-stone-800">这些口味来自实验室的创作</p>
            <p className="text-[11px] text-stone-400 mt-0.5 leading-relaxed">所有会员都可以为自己喜欢的创意口味投票，得票最高的口味将有机会量产上市！</p>
          </div>
        </div>
      </div>

      {/* 投票列表 */}
      <div className="mx-3 mt-3 space-y-3">
        {votes.map((item, idx) => {
          const isVoted = voted[idx];
          const maxVotes = votes[0].votes;
          const pct = (item.votes / maxVotes) * 100;
          const rankColors = ['text-[#E53935]', 'text-[#E53935]', 'text-[#E53935]', 'text-stone-400', 'text-stone-400', 'text-stone-400'];
          return (
            <motion.div key={item.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.06 }}
              className="bg-white rounded-2xl p-4 shadow-sm border border-stone-100">
              {/* 第一行：排名 + emoji + 名称/创作者/标签 + 票数 */}
              <div className="flex items-center gap-3">
                {/* 排名 */}
                <span className={`text-lg font-extrabold ${rankColors[idx]} w-5`}>{idx + 1}</span>
                {/* emoji */}
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-xl" style={{ backgroundColor: item.color + '15' }}>
                  {item.emoji}
                </div>
                {/* 名称和创作者 */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-stone-800 truncate">{item.name}</p>
                  <p className="text-[10px] text-stone-400">@{item.creator}</p>
                  {/* 原料标签 */}
                  <div className="flex gap-1 mt-1">
                    {item.ingredients.map(ing => (
                      <span key={ing} className="px-1.5 py-0.5 bg-stone-100 rounded text-[9px] text-stone-500">{ing}</span>
                    ))}
                  </div>
                </div>
                {/* 票数 */}
                <div className="text-right">
                  <p className="text-lg font-extrabold text-stone-800">{item.votes.toLocaleString()}</p>
                  <p className="text-[10px] text-stone-400">票</p>
                </div>
              </div>
              {/* 进度条 */}
              <div className="mt-3 h-2 bg-stone-100 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="h-full rounded-full" style={{ backgroundColor: item.color }} />
              </div>
              {/* 投票按钮 */}
              <div className="flex gap-2 mt-3">
                <button onClick={() => handleVote(idx)}
                  className={`flex-1 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-1.5 transition-all ${
                    isVoted ? 'bg-green-50 text-green-600' : 'bg-[#E53935] text-white active:scale-[0.97] shadow-md shadow-red-200'
                  }`}>
                  {isVoted ? <><Check size={16} /> 已投票</> : <><Heart size={16} /> 投票</>}
                </button>
                <button className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center text-stone-400 active:scale-90 transition-transform">
                  <Share2 size={18} />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 底部提示 */}
      <div className="mx-3 mt-4 p-4 bg-white rounded-2xl shadow-sm border border-stone-100 text-center">
        <p className="text-xs text-stone-400 mb-2">你也可以在口味实验室创造口味参与投票</p>
        <button onClick={() => navigate('lab')}
          className="px-6 py-2.5 bg-stone-100 text-stone-700 rounded-xl text-sm font-bold active:scale-95 transition-transform">
          前往口味实验室
        </button>
      </div>
    </div>
  );
}
