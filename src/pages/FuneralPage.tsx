import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Trash2, Check, Share2 } from 'lucide-react';

type Page = 'home' | 'lab' | 'map' | 'profile' | 'trace' | 'funeral' | 'activities' | 'tasting' | 'factory' | 'flavor_vote';

export default function FuneralPage({ navigate }: { navigate: (p: Page) => void }) {
  const [flavorVotes, setFlavorVotes] = useState([
    { emoji: '🌿', name: '折耳根味', quote: '像啃一条生鱼', votes: 3421, color: '#4CAF50', voted: false },
    { emoji: '😷', name: '榴莲味', quote: '让我社死的味道', votes: 2156, color: '#E91E63', voted: false },
    { emoji: '👃', name: '芥末味', quote: '太冲了', votes: 1234, color: '#66BB6A', voted: false },
    { emoji: '🥬', name: '香菜味', quote: '爱不起来', votes: 843, color: '#43A047', voted: false },
  ]);
  const [chats, setChats] = useState([
    { name: '匿名', text: '折耳根味好冲!', me: false },
    { name: '我', text: '榴莲味太劲了', me: true },
    { name: '匿名', text: '香菜味好冲!', me: false },
    { name: '匿名', text: '不要吃芥末啊啊啊', me: true },
    { name: '匿名', text: '折耳根能不能消失', me: false },
  ]);
  const [chatInput, setChatInput] = useState('');
  const totalVotes = flavorVotes.reduce((s, f) => s + f.votes, 0);
  const maxVotes = Math.max(...flavorVotes.map(f => f.votes));

  const handleFlavorVote = (idx: number) => {
    setFlavorVotes(prev => prev.map((f, i) => i === idx ? { ...f, votes: f.votes + 1, voted: true } : f));
  };

  const handleSendChat = () => {
    if (!chatInput.trim()) return;
    setChats(prev => [...prev, { name: '我', text: chatInput, me: true }]);
    setChatInput('');
  };

  return (
    <div className="pb-6 min-h-full" style={{ backgroundColor: '#1C1C1E' }}>
      {/* Header */}
      <header className="sticky top-0 z-40 h-14 flex items-center px-4" style={{ backgroundColor: '#1C1C1E' }}>
        <button onClick={() => navigate('activities')} className="text-white/50 active:scale-95 p-1"><ChevronLeft size={22} /></button>
        <div className="flex-1 flex items-center justify-center gap-2">
          <Trash2 size={18} className="text-[#E53935]" />
          <h1 className="text-base font-extrabold text-white">风味考核大会</h1>
        </div>
        <div className="w-8" />
      </header>

      {/* 头图 */}
      <div className="mx-3 mt-1 rounded-2xl overflow-hidden relative h-48">
        <img src="/images/flavor-exam-header.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* 标题区 */}
      <div className="px-4 mt-4 text-center">
        <span className="text-[#E53935] text-xs font-bold tracking-wider">2026年度 · 全民公投</span>
        <h2 className="text-white text-xl font-extrabold mt-1">最该进小黑屋反省的口味</h2>
        <p className="text-white/40 text-[11px] mt-1.5">投票截止：2026年12月31日 · 总投票 {totalVotes.toLocaleString()} 票</p>
      </div>

      {/* 口味投票列表 */}
      <div className="px-3 mt-4 space-y-3">
        {flavorVotes.map((flavor, idx) => {
          const isTop = idx === 0;
          const pct = (flavor.votes / maxVotes) * 100;
          return (
            <motion.div key={flavor.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }}
              className="p-3.5 rounded-2xl border-2"
              style={{
                backgroundColor: isTop ? 'rgba(229,57,53,0.08)' : '#2C2C2E',
                borderColor: isTop ? 'rgba(229,57,53,0.3)' : '#3A3A3C',
              }}>
              {/* 名称和票数 */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ backgroundColor: flavor.color + '20' }}>
                  {flavor.emoji}
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm font-bold">{flavor.name}</p>
                  <p className="text-white/40 text-[10px]">&ldquo;{flavor.quote}&rdquo;</p>
                </div>
                <div className="text-right">
                  <p className="text-white text-lg font-extrabold">{flavor.votes.toLocaleString()}</p>
                  <p className="text-white/30 text-[10px]">票</p>
                </div>
              </div>
              {/* 进度条 */}
              <div className="h-2 rounded-full overflow-hidden mb-3" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
                <motion.div initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="h-full rounded-full" style={{ backgroundColor: isTop ? '#E53935' : 'rgba(255,255,255,0.15)' }} />
              </div>
              {/* 按钮 */}
              <div className="flex gap-2">
                <button onClick={() => handleFlavorVote(idx)}
                  className={`flex-1 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                    flavor.voted ? 'bg-green-500/20 text-green-400' : isTop ? 'bg-[#E53935] text-white active:scale-[0.97]' : 'bg-white/10 text-white/70 active:scale-[0.97]'
                  }`}>
                  {flavor.voted ? <><Check size={14} /> 已投票</> : <><Trash2 size={14} /> 送{flavor.name}进小黑屋</>}
                </button>
                <button className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-white/30 active:scale-90 transition-transform">
                  <Share2 size={16} />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 吐槽墙 - 牛皮纸风格 */}
      <div className="px-3 mt-6">
        <h3 className="text-white text-sm font-bold mb-3">&ldquo;吐槽墙&rdquo;</h3>
        <div className="rounded-2xl p-4 space-y-3 relative overflow-hidden"
          style={{ backgroundColor: '#C4A265', backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(139,90,43,0.08) 19px, rgba(139,90,43,0.08) 20px)' }}>
          {/* 牛皮纸纹理叠加 */}
          <div className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(139,69,19,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(160,82,45,0.2) 0%, transparent 50%)' }} />
          <div className="relative">
            {chats.map((c, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.04 }}
                className={`flex ${c.me ? 'justify-end' : 'justify-start'}`}>
                <div className={`px-3.5 py-2 rounded-2xl max-w-[75%] shadow-sm ${
                  c.me ? 'bg-[#8B4513] text-amber-100 rounded-tr-sm' : 'bg-[#E8D5A3] text-amber-900 rounded-tl-sm'
                }`}>
                  <p className="text-xs">{c.text}</p>
                </div>
              </motion.div>
            ))}
            {/* 输入框 */}
            <div className="flex gap-2 mt-3 pt-3 border-t border-amber-800/20">
              <input value={chatInput} onChange={e => setChatInput(e.target.value)}
                placeholder="写下你的吐槽..."
                className="flex-1 px-3 py-2.5 bg-amber-100/60 rounded-xl text-xs text-amber-900 placeholder-amber-700/40 focus:outline-none focus:bg-amber-100/80 transition-colors"
                onKeyDown={e => e.key === 'Enter' && handleSendChat()} />
              <button onClick={handleSendChat}
                className="px-4 py-2.5 bg-[#8B4513] text-amber-100 rounded-xl text-xs font-bold active:scale-90 transition-transform shadow-md">
                发送
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
