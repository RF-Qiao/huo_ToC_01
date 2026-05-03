import { AnimatePresence, motion } from 'motion/react';
import { ArrowLeft, Calendar, Clock, MapPin, Sparkles, Star } from 'lucide-react';

export type ContentEvent = {
  title: string;
  loc: string;
  date: string;
  price: string;
  desc: string;
  longDesc: string;
  tags: string[];
};

type ContentPageProps = {
  activeTab: string;
  onSelectEvent: (event: ContentEvent) => void;
};

export function ContentPage({ activeTab, onSelectEvent }: ContentPageProps) {
  return (
    <div className="pt-20 px-4 space-y-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.2 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <div className="w-1 h-4 bg-[#FFB800] rounded-full" />
              {activeTab === '排行榜' ? '热门榜单' : activeTab === '商城' ? '精选好物' : '发现新奇'}
            </h2>
            <button className="text-xs text-on-surface-variant font-medium">查看更多</button>
          </div>

          {activeTab === '排行榜' ? (
            <div className="space-y-4">
              {[
                { name: '秦始皇陵兵马俑', score: '9.9', rank: 1, img: 'https://picsum.photos/seed/rank1/400/200' },
                { name: '故宫博物院', score: '9.8', rank: 2, img: 'https://picsum.photos/seed/rank2/400/200' },
                { name: '敦煌莫高窟', score: '9.8', rank: 3, img: 'https://picsum.photos/seed/rank3/400/200' },
              ].map((item) => (
                <div key={item.name} className="flex items-center gap-4 bg-white p-3 rounded-2xl border border-black/5 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-[#FFB800] flex items-center justify-center font-black text-black shrink-0 shadow-lg shadow-[#FFB800]/20 italic">
                    {item.rank}
                  </div>
                  <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-on-surface">{item.name}</h4>
                    <div className="flex items-center gap-1 mt-1">
                      <Star size={10} fill="#FFB800" stroke="none" />
                      <span className="text-[10px] font-bold text-[#FFB800]">{item.score} 分</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : activeTab === '文旅' ? (
            <div className="space-y-4">
              {[
                { title: '大明宫词·夜游会', loc: '西安', date: '10.24-11.24', price: '¥88', desc: '在千年古都，感受大唐不夜城的璀璨华章。', longDesc: '本次活动将带领您深入考古现场感触历史，配备专业导师讲解，包含汉服体验、宫廷晚宴及沉浸式剧本杀。', tags: ['汉服体验', '大唐文化', '沉浸式'] },
                { title: '丝绸之路艺术展', loc: '敦煌', date: '常驻演出', price: '¥120', desc: '一眼万年，跨越时空的文明对话。', longDesc: '本展览汇集了来自世界各地的敦煌艺术珍品，通过数字化手段完美还原石窟内景，是一次不容错过的艺术饕餮盛宴。', tags: ['文化瑰宝', '数字艺术', '敦煌学'] },
              ].map((event, index) => (
                <div
                  key={index}
                  onClick={() => onSelectEvent(event)}
                  className="bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm cursor-pointer active:scale-[0.98] transition-transform"
                >
                  <div className="h-40 bg-gray-100 italic flex items-center justify-center text-on-surface-variant/20">
                    <img src={`https://picsum.photos/seed/event${index}/800/400`} className="w-full h-full object-cover opacity-80" alt="event" />
                  </div>
                  <div className="p-4 flex justify-between items-end">
                    <div>
                      <h4 className="font-bold text-on-surface">{event.title}</h4>
                      <p className="text-[10px] text-on-surface-variant mt-1">{event.loc} • {event.date}</p>
                    </div>
                    <button className="px-4 py-1.5 bg-[#FFB800] text-black text-xs font-bold rounded-full">{event.price} 购票</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden border border-black/5 shadow-sm">
                  <div className="aspect-[4/5] bg-gray-100 relative">
                    <img src={`https://picsum.photos/seed/${index + 10 + activeTab.length}/400/500`} alt="Content" className="w-full h-full object-cover" />
                    <div className="absolute top-2 right-2 p-1.5 bg-black/20 backdrop-blur-md rounded-full text-white">
                      <Sparkles size={12} />
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-[11px] font-bold text-on-surface line-clamp-2 leading-relaxed">
                      {activeTab}精选内容：探索隐藏的文化宝藏...
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-1.5">
                        <div className="w-4 h-4 rounded-full bg-primary-container" />
                        <span className="text-[9px] text-on-surface-variant font-bold">探索者</span>
                      </div>
                      <div className="flex items-center gap-1 opacity-40">
                        <Star size={10} fill="currentColor" stroke="none" />
                        <span className="text-[9px] font-mono">4.8</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function EventDetailPage({ event, onBack }: { event: ContentEvent; onBack: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] bg-[#FBF9F8] overflow-y-auto pb-32">
      <div className="relative h-72">
        <img src={`https://picsum.photos/seed/${event.title}/1200/800`} className="w-full h-full object-cover" alt="Detail" />
        <div className="absolute inset-0 bg-black/20" />
        <button
          onClick={onBack}
          className="absolute top-12 left-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white"
        >
          <ArrowLeft size={24} />
        </button>
      </div>

      <div className="px-6 -mt-10 relative z-10">
        <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-black/5">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-black text-on-surface flex-1">{event.title}</h2>
            <div className="flex items-center gap-1 bg-[#FFF9E6] px-3 py-1 rounded-full text-[#FFB800] shrink-0">
              <Star size={14} fill="currentColor" stroke="none" />
              <span className="text-sm font-bold">4.9</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {event.tags.map((tag: string) => (
              <span key={tag} className="text-[10px] font-bold px-2.5 py-1 bg-[#FBF9F8] text-on-surface-variant border border-black/5 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 text-on-surface-variant">
              <div className="w-8 h-8 rounded-xl bg-primary-container/10 flex items-center justify-center text-[#FFB800]">
                <MapPin size={18} />
              </div>
              <span className="text-sm font-bold">{event.loc}市 • 活动中心</span>
            </div>
            <div className="flex items-center gap-3 text-on-surface-variant">
              <div className="w-8 h-8 rounded-xl bg-primary-container/10 flex items-center justify-center text-[#FFB800]">
                <Calendar size={18} />
              </div>
              <span className="text-sm font-bold">{event.date}</span>
            </div>
            <div className="flex items-center gap-3 text-on-surface-variant">
              <div className="w-8 h-8 rounded-xl bg-primary-container/10 flex items-center justify-center text-[#FFB800]">
                <Clock size={18} />
              </div>
              <span className="text-sm font-bold">10:00 - 22:00</span>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-base font-bold flex items-center gap-2 mb-4">
              <div className="w-1 h-4 bg-[#FFB800] rounded-full" />
              活动介绍
            </h3>
            <p className="text-sm text-on-surface-variant/80 leading-loose font-medium">
              {event.longDesc}
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-base font-bold flex items-center gap-2 mb-4">
              <div className="w-1 h-4 bg-[#FFB800] rounded-full" />
              精选评价
            </h3>
            <div className="space-y-4">
              {[1, 2].map(i => (
                <div key={i} className="flex gap-3 pb-4 border-b border-black/5 last:border-0">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-100 shrink-0">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}`} alt="user" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-on-surface">用户_{i * 2}31</p>
                    <p className="text-[11px] text-on-surface-variant/60 mt-1">非常棒的体验，讲解很专业，特别是汉服体验环节！</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full p-6 bg-white/80 backdrop-blur-md border-t border-black/5 flex items-center justify-between z-[110]">
        <div className="flex flex-col">
          <span className="text-xs text-on-surface-variant font-bold">价格自</span>
          <span className="text-xl font-black text-[#FFB800]">{event.price}</span>
        </div>
        <button className="bg-[#FFB800] text-black px-12 py-4 rounded-full font-black shadow-lg shadow-[#FFB800]/30 active:scale-95 transition-transform">
          立即预约
        </button>
      </div>
    </div>
  );
}
