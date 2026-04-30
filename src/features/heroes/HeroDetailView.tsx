import { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, MapPin, Share2, Sparkles } from 'lucide-react';
import { ProtoIcon } from '../../components/prototype';
import { mvpApi } from '../../services';
import type { Hero, Route, Task } from '../../types';

type HeroDetailViewProps = {
  onClose: () => void;
  onBook: () => void;
  heroId?: string;
  routeId?: string;
};

const defaultHeroId = 'hero_huo_qubing';
const defaultRouteId = 'route_fenglangjuxu';

const difficultyText: Record<Route['difficulty'], string> = {
  easy: '简单难度',
  medium: '中等难度',
  hard: '困难难度',
};

export function HeroDetailView({
  onClose,
  onBook,
  heroId = defaultHeroId,
  routeId = defaultRouteId,
}: HeroDetailViewProps) {
  const [hero, setHero] = useState<Hero | null>(null);
  const [route, setRoute] = useState<Route | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    let mounted = true;

    Promise.all([mvpApi.getHero(heroId), mvpApi.getRoute(routeId), mvpApi.listTasks(routeId)]).then(([heroData, routeData, taskData]) => {
      if (!mounted) return;
      setHero(heroData ?? null);
      setRoute(routeData ?? null);
      setTasks(taskData);
    });

    return () => {
      mounted = false;
    };
  }, [heroId, routeId]);

  const taskCount = tasks.length || 6;
  const audienceTags = route?.audienceTags ?? ['朋友组队', '亲子家庭', '团建活动', '历史文化爱好者', '首次体验推荐'];
  const rewards = useMemo(
    () => [
      { label: `火种 +${taskCount * 10}`, icon: <ProtoIcon name="flame" size={24} className="text-[#E34328]" fill="#E34328" /> },
      { label: `银票 +${taskCount * 5}`, icon: <ProtoIcon name="ticket" size={24} className="text-[#D8A543]" /> },
      { label: '冠军侯勋章', icon: <ProtoIcon name="crown" size={24} className="text-[#FFD36B]" fill="#FFD36B" /> },
    ],
    [taskCount],
  );

  const displayHero = hero ?? {
    name: '霍去病',
    subtitle: '少年将军 · 封狼居胥',
    imageUrl: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=2670&auto=format&fit=crop',
    story: '你将扮演少年将军霍去病，从誓师出征到漠北追击，在真实场景中完成剧情挑战，穿越千年风沙，书写属于你的英雄史诗，最终解锁专属火种勋章。',
  };

  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-[200] bg-[#FFF8EA] overflow-y-auto"
    >
      <div className="relative h-[400px] w-full">
        <img src={displayHero.imageUrl} className="w-full h-full object-cover" alt={displayHero.name} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFF8EA] via-transparent to-black/40" />

        <div className="absolute top-12 left-6 right-6 flex justify-between items-center">
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-2xl bg-black/20 backdrop-blur-md flex items-center justify-center text-white border border-white/10"
          >
            <ArrowLeft size={20} />
          </button>
          <button className="w-10 h-10 rounded-2xl bg-black/20 backdrop-blur-md flex items-center justify-center text-white border border-white/10">
            <Share2 size={20} />
          </button>
        </div>

        <div className="absolute bottom-12 left-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <div className="text-[64px] font-black text-white/10 absolute -top-16 left-0 tracking-widest leading-none">将军</div>
            <h1 className="text-4xl font-black text-[#38100E] tracking-tighter drop-shadow-sm">{displayHero.name}</h1>
            <p className="text-lg font-bold text-[#9C1B1F] mt-1">{displayHero.subtitle}</p>
          </motion.div>
        </div>
      </div>

      <div className="px-6 -mt-6">
        <div className="bg-gradient-to-br from-[#7A1014] to-[#3C080B] rounded-[32px] p-6 text-white shadow-xl shadow-[#7b1115]/20 flex justify-between items-center border border-[#FFD36B]/20">
          {[
            { label: '历史英雄', val: '史诗' },
            { label: difficultyText[route?.difficulty ?? 'medium'], val: '挑战' },
            { label: `${route?.durationMinutes ?? 90}分钟`, val: '时长' },
            { label: `${taskCount}个任务`, val: '关卡' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-[10px] text-[#FFD36B]/60 font-bold mb-1">{item.val}</div>
              <div className="text-xs font-black">{item.label}</div>
            </div>
          ))}
        </div>

        <section className="mt-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-4 rounded-full bg-[#9C1B1F]" />
            <h2 className="text-lg font-black text-[#38100E]">英雄剧情</h2>
          </div>
          <p className="text-sm text-[#8C6A58] leading-7 font-medium">
            {displayHero.story} <span className="text-[#9C1B1F] font-bold">火种勋章</span>。
          </p>
        </section>

        <section className="mt-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-4 rounded-full bg-[#9C1B1F]" />
            <h2 className="text-lg font-black text-[#38100E]">今日路线</h2>
          </div>
          <div className="rounded-[28px] overflow-hidden bg-white border border-[#F5DDA2] p-4 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="font-bold text-[#38100E]">{route?.name ?? '封狼居胥挑战线'}</h3>
                <p className="text-[10px] text-[#8C6A58] mt-1 italic">约{((route?.distanceMeters ?? 1800) / 1000).toFixed(1)}公里 · 适合好友/亲子</p>
              </div>
              <div className="text-right">
                <span className="text-sm font-black text-[#9C1B1F]">{route?.durationMinutes ?? 90}min</span>
              </div>
            </div>
            <div className="h-32 bg-[#FFF9E6] rounded-2xl relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
              <div className="relative w-full h-full flex items-center justify-between px-10">
                {Array.from({ length: Math.min(taskCount, 6) }).map((_, i) => (
                  <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-[#9C1B1F]' : 'bg-[#D8A543]/40'}`} />
                ))}
                <div className="absolute top-1/2 left-10 right-10 h-[1px] bg-dashed bg-gradient-to-r from-[#9C1B1F] to-transparent -z-10" />
                <MapPin className="absolute left-8 top-12 text-[#9C1B1F]" size={16} />
                <Sparkles className="absolute right-8 bottom-12 text-[#D8A543]" size={16} />
              </div>
              <div className="text-[10px] font-bold text-[#8C6A58]/50 uppercase tracking-tighter">Desert Route Visualization</div>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-4 rounded-full bg-[#9C1B1F]" />
            <h2 className="text-lg font-black text-[#38100E]">任务预览</h2>
          </div>
          <div className="space-y-6 ml-3 border-l-2 border-[#F5DDA2] pl-6 pb-2">
            {tasks.map((task) => {
              const active = task.status === 'active' || task.status === 'available';
              return (
                <div key={task.id} className="relative">
                  <div className={`absolute -left-[31px] top-0 w-3 h-3 rounded-full border-2 border-[#FFF8EA] ${active ? 'bg-[#9C1B1F] shadow-[0_0_8px_#9C1B1F]' : 'bg-[#D8A543]'}`} />
                  <div className="flex justify-between items-center">
                    <span className={`text-sm font-bold ${active ? 'text-[#38100E]' : 'text-[#8C6A58]/60'}`}>
                      第{task.stage}关：{task.title}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${active ? 'bg-[#9C1B1F] text-white' : 'bg-[#F5DDA2]/30 text-[#8C6A58]/40'}`}>
                      {active ? '可开始' : '待解锁'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-4 rounded-full bg-[#9C1B1F]" />
            <h2 className="text-lg font-black text-[#38100E]">完成后可获得</h2>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {rewards.map((item) => (
              <div key={item.label} className="bg-white border border-[#F5DDA2] rounded-2xl p-4 flex flex-col items-center text-center shadow-sm">
                <div className="mb-2">{item.icon}</div>
                <span className="text-[10px] font-black text-[#38100E] leading-tight">{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-4 rounded-full bg-[#9C1B1F]" />
            <h2 className="text-lg font-black text-[#38100E]">适合人群</h2>
          </div>
          <div className="flex flex-wrap gap-2 text-on-surface-variant">
            {audienceTags.map((tag) => (
              <span key={tag} className="px-4 py-2 rounded-full bg-white border border-black/5 text-[11px] font-bold">
                {tag}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-10 mb-32">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-4 rounded-full bg-[#9C1B1F]" />
            <h2 className="text-lg font-black text-[#38100E]">游玩须知</h2>
          </div>
          <ul className="space-y-3">
            {['请先购买体验票并到现场核销；', '建议提前10分钟到达集合点；', '体验过程中需要开启定位；', '如需使用心流手环，请到现场领取并绑定。'].map((text, i) => (
              <li key={i} className="flex gap-2 items-start text-xs text-[#8C6A58] leading-relaxed">
                <span className="w-1 h-1 rounded-full bg-[#D8A543] mt-1.5 shrink-0" />
                {text}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-white/95 backdrop-blur-lg border-t border-[#F5DDA2] px-6 py-4 flex items-center justify-between shadow-[0_-12px_44px_rgba(123,17,21,0.08)]">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-[#8C6A58] uppercase tracking-widest">Experience Price</span>
          <div className="flex items-baseline gap-1">
            <span className="text-xs font-black text-[#9C1B1F]">¥</span>
            <span className="text-2xl font-black text-[#9C1B1F]">99</span>
            <span className="text-xs font-bold text-[#8C6A58]/50 ml-1">起</span>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="h-12 px-6 rounded-2xl border border-[#9C1B1F] text-[#9C1B1F] font-black text-sm active:scale-95 transition-all">
            预约咨询
          </button>
          <button
            onClick={onBook}
            className="h-12 px-10 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm shadow-xl shadow-[#9C171D]/20 active:scale-95 transition-all"
          >
            立即购票
          </button>
        </div>
      </div>
    </motion.div>
  );
}
