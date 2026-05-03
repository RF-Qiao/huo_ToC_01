import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowLeft,
  Calendar,
  Flame,
  Lock,
  Receipt,
  Share2,
  Trophy,
  User as UserIcon,
} from 'lucide-react';

type SimplePageProps = {
  onClose: () => void;
};

type Medal = {
  name: string;
  desc: string;
  time?: string;
  locked: boolean;
  img: string;
};

export function MyOrdersPage({ onClose }: SimplePageProps) {
  const [activeTab, setActiveTab] = useState('全部');
  const tabs = ['全部', '待付款', '待核销', '体验中', '已完成', '退款/售后'];

  const orders = [
    {
      status: '待核销',
      title: '霍去病英雄体验',
      type: '单人体验票',
      location: '蓝色港湾体验点',
      date: '今天',
      price: '99',
      color: 'text-orange-500 bg-orange-50',
    },
    {
      status: '已完成',
      title: '花木兰英雄体验',
      type: '亲子体验票',
      location: '蓝色港湾体验点',
      date: '2026-04-20',
      price: '169',
      color: 'text-green-500 bg-green-50',
    },
    {
      status: '待付款',
      title: '岳飞英雄体验',
      type: '单人体验票',
      location: '蓝色港湾体验点',
      date: '-',
      price: '99',
      color: 'text-red-500 bg-red-50',
    },
  ];

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      className="fixed inset-0 z-[1000] bg-[#FBF9F8] overflow-y-auto flex flex-col"
    >
      <header className="h-16 px-6 bg-white border-b border-black/5 flex items-center justify-between shrink-0 sticky top-0 z-10">
        <button onClick={onClose} className="p-2 -ml-2 text-[#38100E]"><ArrowLeft size={24} strokeWidth={3} /></button>
        <h2 className="text-lg font-black text-[#38100E]">我的订单</h2>
        <div className="w-10" />
      </header>

      <div className="bg-white border-b border-black/5 sticky top-16 z-10 flex overflow-x-auto scrollbar-hide px-4">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-none px-4 h-12 text-xs font-black transition-all relative ${activeTab === tab ? 'text-[#9C1B1F]' : 'text-[#8C6A58]/40'}`}
          >
            {tab}
            {activeTab === tab && (
              <motion.div layoutId="orderTab" className="absolute bottom-0 left-4 right-4 h-1 bg-[#9C1B1F] rounded-t-full" />
            )}
          </button>
        ))}
      </div>

      <div className="flex-1 p-6 space-y-4">
        {orders.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center pb-20">
            <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center text-gray-300 mb-6">
              <Receipt size={40} />
            </div>
            <h3 className="text-lg font-black text-[#38100E]">暂无订单</h3>
            <button className="mt-6 px-10 h-12 rounded-full bg-[#9C1B1F] text-[#FFD36B] font-black text-sm active:scale-95 transition-all">去购票</button>
          </div>
        ) : (
          orders.map((order, i) => (
            <div key={i} className="bg-white rounded-[32px] p-6 border border-black/5 shadow-sm space-y-4">
              <div className="flex justify-between items-center">
                <span className={`text-[10px] font-black px-2 py-0.5 rounded-md ${order.color}`}>
                  {order.status}
                </span>
                <span className="text-[10px] font-bold text-[#8C6A58]/40 uppercase tracking-widest">Order ID: HHF202604270{i + 1}</span>
              </div>
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gray-100 overflow-hidden shrink-0 border border-black/5">
                  <img src="https://images.unsplash.com/photo-1599599810694-b5b3aa44a97d?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h4 className="text-base font-black text-[#38100E] leading-tight">{order.title}</h4>
                  <p className="text-[10px] font-bold text-[#8C6A58] mt-1">{order.type} · {order.location}</p>
                  <div className="mt-2 flex items-center gap-2 text-[10px] font-bold text-[#8C6A58]/60">
                    <Calendar size={10} />
                    日期: {order.date}
                  </div>
                </div>
              </div>
              <div className="h-[1px] bg-black/5" />
              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-1">
                  <span className="text-xs font-bold text-[#38100E]">¥</span>
                  <span className="text-xl font-black text-[#38100E]">{order.price}</span>
                </div>
                <div className="flex gap-2">
                  <button className="px-5 h-10 rounded-xl border border-black/5 text-[#38100E] text-[11px] font-black active:scale-95">
                    查看详情
                  </button>
                  <button className="px-5 h-10 rounded-xl bg-[#9C1B1F] text-[#FFD36B] text-[11px] font-black active:scale-95 shadow-lg shadow-[#9C171D]/20">
                    {order.status === '待核销' ? '查看核销码' : order.status === '待付款' ? '继续支付' : '评价领火种'}
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </motion.div>
  );
}

export function MyExperiencesPage({ onClose }: SimplePageProps) {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      className="fixed inset-0 z-[1000] bg-[#FBF9F8] overflow-y-auto flex flex-col"
    >
      <header className="h-16 px-6 bg-white border-b border-black/5 flex items-center justify-between shrink-0 sticky top-0 z-10">
        <button onClick={onClose} className="p-2 -ml-2 text-[#38100E]"><ArrowLeft size={24} strokeWidth={3} /></button>
        <h2 className="text-lg font-black text-[#38100E]">体验记录</h2>
        <div className="w-10" />
      </header>

      <div className="p-6">
        <div className="bg-[#38100E] rounded-[40px] p-8 text-[#FFD36B] relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#9C1B1F]/30 rounded-full -mr-16 -mt-16 blur-3xl" />
          <div className="grid grid-cols-2 gap-y-6">
            <div>
              <span className="text-[10px] font-black opacity-40 uppercase tracking-widest block mb-1">累计体验</span>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black italic">3</span>
                <span className="text-xs font-bold opacity-60">次</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-black opacity-40 uppercase tracking-widest block mb-1">完成任务</span>
              <div className="flex items-baseline gap-1 justify-end">
                <span className="text-3xl font-black italic">18</span>
                <span className="text-xs font-bold opacity-60">个</span>
              </div>
            </div>
            <div>
              <span className="text-[10px] font-black opacity-40 uppercase tracking-widest block mb-1">累计火种</span>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black italic">120</span>
                <Flame size={14} fill="currentColor" className="opacity-60" />
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-black opacity-40 uppercase tracking-widest block mb-1">获得勋章</span>
              <div className="flex items-baseline gap-1 justify-end">
                <span className="text-3xl font-black italic">3</span>
                <Trophy size={14} className="opacity-60" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 px-6 pb-12 space-y-4">
        <h3 className="text-sm font-black text-[#38100E] px-2 italic">史诗记录</h3>
        {[
          { hero: '霍去病', route: '封狼居胥挑战线', status: '已完赛', tasks: '6/6', time: '86', flow: '88', medal: '冠军侯火种勋章' },
          { hero: '花木兰', route: '巾帼挑战线', status: '已完赛', tasks: '5/5', time: '72', flow: '82', medal: null },
        ].map((record, i) => (
          <div key={i} className="bg-white rounded-[32px] p-6 border border-black/5 shadow-sm space-y-5">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FBF9F8] flex items-center justify-center text-[#9C1B1F]">
                  <UserIcon size={24} />
                </div>
                <div>
                  <h4 className="text-base font-black text-[#38100E]">{record.hero}</h4>
                  <p className="text-[10px] font-bold text-[#8C6A58]/60 uppercase tracking-widest">{record.route}</p>
                </div>
              </div>
              <span className="text-[9px] font-black text-green-500 bg-green-50 px-2 py-0.5 rounded-md">{record.status}</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="bg-[#FBF9F8] rounded-2xl p-3 flex flex-col items-center">
                <span className="text-[8px] font-black text-[#8C6A58]/40 uppercase mb-1">完成任务</span>
                <span className="text-sm font-black text-[#38100E]">{record.tasks}</span>
              </div>
              <div className="bg-[#FBF9F8] rounded-2xl p-3 flex flex-col items-center">
                <span className="text-[8px] font-black text-[#8C6A58]/40 uppercase mb-1">总用时</span>
                <span className="text-sm font-black text-[#38100E]">{record.time} min</span>
              </div>
              <div className="bg-[#FBF9F8] rounded-2xl p-3 flex flex-col items-center">
                <span className="text-[8px] font-black text-[#8C6A58]/40 uppercase mb-1">心流峰值</span>
                <span className="text-sm font-black text-[#38100E]">{record.flow}</span>
              </div>
            </div>

            {record.medal && (
              <div className="flex items-center gap-3 p-3 bg-[#FFD36B]/10 rounded-2xl border border-[#FFD36B]/20">
                <div className="w-8 h-8 rounded-full bg-[#FFD36B]/20 flex items-center justify-center">
                  <Trophy size={16} className="text-[#9C1B1F]" />
                </div>
                <div className="flex-1">
                  <span className="text-[8px] font-black text-[#9C1B1F]/40 uppercase block leading-none mb-1">Earned Medal</span>
                  <span className="text-[11px] font-black text-[#38100E]">{record.medal}</span>
                </div>
              </div>
            )}

            <button className="w-full h-12 rounded-xl border border-black/5 text-[#38100E] text-xs font-black active:scale-95">
              查看详情
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function MyMedalsPage({ onClose }: SimplePageProps) {
  const [selectedMedal, setSelectedMedal] = useState<Medal | null>(null);

  const medals: Medal[] = [
    { name: '冠军侯火种勋章', desc: '完成霍去病英雄体验全部任务', time: '今日', locked: false, img: 'https://cdn-icons-png.flaticon.com/512/10156/10156828.png' },
    { name: '少年将军勋章', desc: '单次任务评分超过90分', time: '2026-04-20', locked: false, img: 'https://cdn-icons-png.flaticon.com/512/10156/10156847.png' },
    { name: '初入火种勋章', desc: '完成首次注册并登陆', time: '2026-04-18', locked: false, img: 'https://cdn-icons-png.flaticon.com/512/10156/10156845.png' },
    { name: '精忠报国勋章', desc: '完成岳飞英雄体验全部任务', locked: true, img: 'https://cdn-icons-png.flaticon.com/512/10156/10156832.png' },
    { name: '巾帼英雄勋章', desc: '完成花木兰英雄体验全部任务', locked: true, img: 'https://cdn-icons-png.flaticon.com/512/10156/10156854.png' },
    { name: '火种传承勋章', desc: '累计点燃100个火种', locked: true, img: 'https://cdn-icons-png.flaticon.com/512/10156/10156811.png' },
  ];

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      className="fixed inset-0 z-[1000] bg-[#FBF9F8] overflow-y-auto flex flex-col"
    >
      <header className="h-16 px-6 bg-white border-b border-black/5 flex items-center justify-between shrink-0 sticky top-0 z-10">
        <button onClick={onClose} className="p-2 -ml-2 text-[#38100E]"><ArrowLeft size={24} strokeWidth={3} /></button>
        <h2 className="text-lg font-black text-[#38100E]">我的勋章</h2>
        <div className="w-10" />
      </header>

      <div className="p-8 text-center bg-white border-b border-black/5">
        <div className="relative inline-block mb-6">
          <div className="absolute inset-0 bg-[#FFD36B]/20 blur-3xl rounded-full" />
          <div className="w-32 h-32 rounded-full border-[6px] border-[#F5DDA2]/30 flex items-center justify-center p-6 relative bg-[#38100E]">
            <Trophy size={56} className="text-[#FFD36B]" fill="currentColor" />
          </div>
          <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-[#9C1B1F] text-white flex items-center justify-center border-4 border-white font-black text-sm">
            3
          </div>
        </div>
        <h1 className="text-2xl font-black text-[#38100E]">初级火种传承者</h1>
        <div className="mt-2 flex justify-center gap-6">
          <div className="flex flex-col items-center">
            <span className="text-[20px] font-black text-[#38100E]">3</span>
            <span className="text-[10px] font-bold text-[#8C6A58]/40 uppercase tracking-widest">已获得</span>
          </div>
          <div className="w-[1px] h-8 bg-black/5 my-auto" />
          <div className="flex flex-col items-center">
            <span className="text-[20px] font-black text-gray-300">9</span>
            <span className="text-[10px] font-bold text-[#8C6A58]/40 uppercase tracking-widest">未解锁</span>
          </div>
        </div>
      </div>

      <div className="flex-1 p-6 grid grid-cols-3 gap-x-4 gap-y-8">
        {medals.map((medal, i) => (
          <button
            key={i}
            onClick={() => !medal.locked && setSelectedMedal(medal)}
            className={`flex flex-col items-center transition-all active:scale-95 ${medal.locked ? 'opacity-40' : ''}`}
          >
            <div className={`w-20 h-20 rounded-full mb-3 flex items-center justify-center p-3 relative bg-white border border-black/5 shadow-sm ${!medal.locked ? 'shadow-[#FFD36B]/20' : 'grayscale'}`}>
              <img src={medal.img} className="w-full h-full object-contain" />
              {medal.locked && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Lock size={20} className="text-white drop-shadow-md" fill="rgba(0,0,0,0.5)" />
                </div>
              )}
            </div>
            <span className="text-[10px] font-black text-[#38100E] text-center leading-tight line-clamp-2 px-1">{medal.name}</span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {selectedMedal && (
          <div className="fixed inset-0 z-[1200] flex items-center justify-center px-10">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedMedal(null)} className="absolute inset-0 bg-[#38100E]/90 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="relative w-full bg-white rounded-[48px] p-8 text-center shadow-2xl">
              <div className="w-32 h-32 rounded-full mx-auto -mt-24 shadow-2xl flex items-center justify-center border-8 border-white bg-white">
                <img src={selectedMedal.img} className="w-full h-full object-contain" />
              </div>
              <h2 className="mt-8 text-2xl font-black text-[#38100E]">{selectedMedal.name}</h2>
              <p className="text-[10px] font-black text-[#8C6A58]/30 uppercase tracking-[0.2em] mt-1">获得时间: {selectedMedal.time}</p>

              <div className="mt-6 py-4 px-6 bg-[#FBF9F8] rounded-3xl">
                <p className="text-xs font-bold text-[#8C6A58] leading-relaxed">
                  {selectedMedal.desc}
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <button className="w-full h-14 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm flex items-center justify-center gap-2">
                  <Share2 size={18} />
                  生成分享海报
                </button>
                <button onClick={() => setSelectedMedal(null)} className="w-full h-12 text-[10px] font-black text-[#8C6A58]/40 uppercase tracking-widest">返回我的勋章</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
