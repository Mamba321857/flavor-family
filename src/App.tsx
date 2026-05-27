import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Map, User, Beaker } from 'lucide-react';

import HomePage from './pages/HomePage';
import MapPage from './pages/MapPage';
import LabPage from './pages/LabPage';
import ProfilePage from './pages/ProfilePage';
import FlavorVotePage from './pages/FlavorVotePage';
import TracePage from './pages/TracePage';
import ActivitiesPage from './pages/ActivitiesPage';
import TastingPage from './pages/TastingPage';
import FactoryPage from './pages/FactoryPage';
import FuneralPage from './pages/FuneralPage';

type Page = 'home' | 'lab' | 'map' | 'profile' | 'trace' | 'funeral' | 'activities' | 'tasting' | 'factory' | 'flavor_vote';

/* ═══════════════════════════════════════════
   MAIN APP
   ═══════════════════════════════════════════ */
export default function App() {
  const [page, setPage] = useState<Page>('home');
  const [direction, setDirection] = useState(1);

  const navigate = useCallback((p: Page) => {
    setDirection(p === 'home' ? -1 : 1);
    setPage(p);
  }, []);

  const navItems = [
    { key: 'home' as Page, label: '首页', icon: Home },
    { key: 'lab' as Page, label: '实验室', icon: Beaker },
    { key: 'map' as Page, label: '地图', icon: Map },
    { key: 'profile' as Page, label: '我的', icon: User },
  ];

  return (
    <div className="h-screen w-full bg-neutral-900 flex justify-center items-center p-0 md:p-4">
      <div className="w-full max-w-[430px] h-[100dvh] md:h-[850px] bg-white rounded-none md:rounded-[32px] overflow-hidden shadow-2xl relative isolate flex flex-col">
        <main className="flex-1 overflow-y-auto no-scrollbar relative">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={page}
              initial={{ opacity: 0, x: direction * 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -30 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="min-h-full"
            >
              {page === 'home' && <HomePage navigate={navigate} />}
              {page === 'lab' && <LabPage navigate={navigate} />}
              {page === 'map' && <MapPage navigate={navigate} />}
              {page === 'profile' && <ProfilePage navigate={navigate} />}
              {page === 'trace' && <TracePage navigate={navigate} />}
              {page === 'funeral' && <FuneralPage navigate={navigate} />}
              {page === 'activities' && <ActivitiesPage navigate={navigate} />}
              {page === 'tasting' && <TastingPage navigate={navigate} />}
              {page === 'factory' && <FactoryPage navigate={navigate} />}
              {page === 'flavor_vote' && <FlavorVotePage navigate={navigate} />}
            </motion.div>
          </AnimatePresence>
        </main>

        <nav className="shrink-0 h-[72px] bg-white z-50 flex items-center justify-around px-3 pb-2">
          {navItems.map((item) => {
            const isActive = page === item.key;
            const Icon = item.icon;
            return (
              <button
                key={item.key}
                onClick={() => navigate(item.key)}
                className={`flex flex-col items-center justify-center gap-1 w-16 h-14 rounded-2xl transition-all duration-300 ${
                  isActive ? 'bg-[#E53935] text-white shadow-lg shadow-red-200' : 'text-stone-400 hover:text-stone-600'
                }`}
              >
                <Icon size={22} strokeWidth={isActive ? 2.5 : 1.5} />
                <span className={`text-[10px] font-medium ${isActive ? 'font-bold' : ''}`}>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
