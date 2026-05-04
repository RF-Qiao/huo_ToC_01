import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  AlertCircle,
  ArrowLeft,
  Award,
  Camera,
  CheckCircle2,
  Check,
  Dna,
  Flame,
  Download,
  HelpCircle,
  Home,
  Info,
  Map as MapIcon,
  MapPin,
  MessageCircle,
  MoreHorizontal,
  Navigation,
  RefreshCw,
  Share2,
  History,
  Timer,
  Trophy,
  TrendingUp,
  Watch,
  X,
  Star,
} from 'lucide-react';
import { ProtoIcon } from '../../components/prototype';

type PaymentSuccessPageProps = {
  onClose: () => void;
  onViewCode: () => void;
};

export function PaymentSuccessPage({ onClose, onViewCode }: PaymentSuccessPageProps) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      className="fixed inset-0 z-[400] bg-[#9C1B1F] overflow-y-auto flex flex-col shadow-2xl"
    >
      <header className="h-16 px-6 flex items-center justify-between text-[#FFD36B] shrink-0">
        <button onClick={onClose}><X size={24} /></button>
        <span className="font-black">支付成功</span>
        <div className="w-6" />
      </header>

      <div className="flex-1 flex flex-col items-center px-8 pt-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-24 h-24 rounded-[2.5rem] bg-[#FFD36B] flex items-center justify-center shadow-2xl shadow-black/40 mb-6"
        >
          <div className="relative">
            <CheckCircle2 size={48} className="text-[#9C1B1F]" strokeWidth={3} />
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -top-2 -right-2 text-[#9C1B1F]"
            >
              <Flame size={20} fill="currentColor" />
            </motion.div>
          </div>
        </motion.div>

        <h2 className="text-3xl font-black text-[#FFD36B]">支付成功</h2>
        <div className="mt-2 flex items-baseline gap-1 text-[#FFD36B] font-bold">
          <span className="text-sm">¥</span>
          <span className="text-3xl">99.00</span>
        </div>
        <p className="mt-4 text-[#FFD36B]/60 text-[11px] font-black uppercase tracking-widest">Experience Ticket Generated</p>

        <div className="w-full mt-10 bg-black/10 backdrop-blur-md rounded-[32px] p-6 border border-white/10 shadow-inner">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD36B]" />
            <span className="text-xs font-black text-[#FFD36B] uppercase tracking-widest">Order Summary</span>
          </div>
          <div className="space-y-4">
            {[
              { label: '体验项目', val: '霍去病英雄体验' },
              { label: '游玩日期', val: '今天' },
              { label: '场景地点', val: '蓝色港湾体验点' },
              { label: '票种数量', val: '单人体验票 x 1' },
            ].map((item) => (
              <div key={item.label} className="flex justify-between items-center text-sm">
                <span className="text-[#FFD36B]/40 font-bold">{item.label}</span>
                <span className="text-white font-black">{item.val}</span>
              </div>
            ))}
            <div className="h-[1px] bg-white/5 my-4" />
            <div className="flex justify-between items-center">
              <span className="text-[#FFD36B]/40 text-sm font-bold">订单状态</span>
              <span className="px-3 py-1 rounded-lg bg-[#FFD36B] text-[#9C1B1F] text-[10px] font-black shadow-lg">待核销</span>
            </div>
          </div>
        </div>

        <div className="w-full mt-10 space-y-4 bg-white/5 rounded-3xl p-6 border border-white/5">
          <h3 className="text-[#FFD36B] font-black text-sm">下一步：到现场核销</h3>
          <p className="text-[11px] text-[#FFD36B]/50 leading-relaxed font-medium">
            请到蓝色港湾展示中心向体验官出示核销码。核销成功后即可开始英雄体验。
          </p>
        </div>
      </div>

      <footer className="p-8 pb-12 flex flex-col gap-3 shrink-0">
        <button
          onClick={onViewCode}
          className="h-14 rounded-2xl bg-[#FFD36B] text-[#9C1B1F] font-black shadow-2xl active:scale-95 transition-all text-sm uppercase tracking-wider"
        >
          查看核销码
        </button>
        <button
          onClick={onClose}
          className="h-14 rounded-2xl border-2 border-[#FFD36B]/20 text-[#FFD36B] font-black active:scale-95 transition-all text-sm"
        >
          返回首页
        </button>
      </footer>
    </motion.div>
  );
}

type VerificationCodePageProps = {
  onClose: () => void;
  onStart: () => void;
};

export function VerificationCodePage({ onClose, onStart }: VerificationCodePageProps) {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      className="fixed inset-0 z-[500] bg-[#FBF9F8] overflow-y-auto flex flex-col"
    >
      <header className="h-16 px-6 bg-white border-b border-black/5 flex items-center justify-between shrink-0">
        <button onClick={onClose} className="p-2 -ml-2 text-[#38100E]"><ArrowLeft size={24} strokeWidth={3} /></button>
        <h2 className="text-lg font-black text-[#38100E]">核销码</h2>
        <button className="p-2 -mr-2 text-[#8C6A58]/60"><MessageCircle size={22} /></button>
      </header>

      <div className="flex-1 px-6 pt-8 pb-12 space-y-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#9C1B1F]/10 mb-2">
            <div className="w-2 h-2 rounded-full bg-[#9C1B1F] animate-pulse" />
            <span className="text-[10px] font-black text-[#9C1B1F] uppercase tracking-widest">Waiting for Verification</span>
          </div>
          <p className="text-sm text-[#8C6A58] font-bold">请向现场体验官出示此二维码</p>
        </div>

        <div className="bg-white rounded-[48px] p-8 pb-10 border border-black/5 shadow-2xl shadow-[#9C171D]/5 flex flex-col items-center">
          <div className="w-64 h-64 bg-[#FBF9F8] rounded-[36px] flex items-center justify-center p-6 relative border-2 border-dashed border-[#F5DDA2]">
            <div className="w-full h-full bg-[#2D1414] rounded-24 p-3 relative overflow-hidden group">
              <div className="w-full h-full bg-white flex flex-wrap">
                {Array.from({ length: 100 }).map((_, i) => (
                  <div key={i} className={`w-[10%] h-[10%] ${Math.random() > 0.5 ? 'bg-[#2D1414]' : 'bg-white'}`} />
                ))}
              </div>
              <div className="absolute inset-0 bg-transparent flex items-center justify-center">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-2xl flex items-center justify-center border border-black/5 border-2">
                  <Flame size={28} className="text-[#9C1B1F]" fill="currentColor" />
                </div>
              </div>
            </div>
            <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-[#FFB800] flex items-center justify-center text-white border-4 border-white shadow-lg">
              <RefreshCw size={18} strokeWidth={3} />
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-1">
            <span className="text-[10px] font-black text-[#8C6A58]/30 uppercase tracking-[.25em] mb-1">Redeem Code</span>
            <span className="text-2xl font-black text-[#38100E] tracking-widest font-mono">HHF-2026-001234</span>
          </div>

          <div className="w-full h-[1px] bg-[#FBF9F8] mt-8 mb-6" />
          <p className="text-[9px] text-[#8C6A58]/40 font-black uppercase tracking-tighter text-center">
            QR Code refreshes automatically every 5 minutes<br />
            Expiring in 04:59
          </p>
        </div>

        <div className="bg-white rounded-[32px] p-6 border border-black/5 shadow-sm space-y-4">
          {[
            { icon: <ProtoIcon name="crown" size={14} />, label: '项目', val: '霍去病英雄体验' },
            { icon: <ProtoIcon name="mapPin" size={14} />, label: '网点', val: '蓝色港湾 · 核心柜台' },
            { icon: <ProtoIcon name="ticket" size={14} />, label: '票种', val: '单人体验票 x 1' },
          ].map((item) => (
            <div key={item.label} className="flex justify-between items-center text-xs">
              <div className="flex items-center gap-2 text-[#8C6A58]/40">
                {item.icon}
                <span className="font-bold">{item.label}</span>
              </div>
              <span className="text-[#38100E] font-black">{item.val}</span>
            </div>
          ))}
        </div>

        <div className="bg-[#38100E] rounded-[32px] p-6 text-[#FFD36B] shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#9C1B1F]/20 rounded-full -mr-16 -mt-16 blur-3xl" />
          <h3 className="font-black mb-1 flex items-center gap-2">
            <MapIcon size={16} fill="currentColor" />
            现场位置指引
          </h3>
          <p className="text-[11px] text-[#FFD36B]/60 font-medium leading-relaxed mt-2">
            蓝色港湾商圈 A 区正门向北 200 米，看到“将军火焰”旗帜即可到达官方服务点。
          </p>
          <button className="mt-6 w-full h-12 rounded-2xl bg-[#FFD36B] text-[#9C1B1F] font-black text-xs shadow-lg active:scale-95 transition-all">
            开始导航
          </button>
        </div>
      </div>

      <footer className="p-6 pb-12 flex gap-3 bg-white border-t border-black/5 shrink-0">
        <button className="flex-1 h-14 rounded-2xl border-2 border-black/5 text-[#8C6A58] font-black text-sm">
          联系记录
        </button>
        <button
          onClick={() => {
            onClose();
            onStart();
          }}
          className="flex-[2] h-14 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm shadow-xl shadow-[#9C171D]/20 active:scale-95 transition-all uppercase tracking-wider"
        >
          开始体验
        </button>
      </footer>
    </motion.div>
  );
}

type CurrentExperiencePageProps = {
  onClose: () => void;
  onCheckIn: () => void;
  onShowDetails: () => void;
};

export function CurrentExperiencePage({ onClose, onCheckIn, onShowDetails }: CurrentExperiencePageProps) {
  const [isBandBound, setIsBandBound] = useState(true);

  const stages = [
    { name: '第1关 誓师出征', status: 'completed' },
    { name: '第2关 漠北追击', status: 'active' },
    { name: '第3关 战鼓挑战', status: 'locked' },
    { name: '第4关 智取敌营', status: 'locked' },
    { name: '第5关 封狼居胥', status: 'locked' },
    { name: '第6关 火种传承', status: 'locked' },
  ] as const;

  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      className="fixed inset-0 z-[600] bg-[#FBF9F8] overflow-y-auto flex flex-col"
    >
      <header className="h-16 px-6 bg-white border-b border-black/5 flex items-center justify-between shrink-0 sticky top-0 z-10">
        <button onClick={onClose} className="p-2 -ml-2 text-[#38100E]"><ArrowLeft size={24} strokeWidth={3} /></button>
        <h2 className="text-lg font-black text-[#38100E]">当前体验</h2>
        <button className="p-2 -mr-2 text-[#8C6A58]/60"><MessageCircle size={22} /></button>
      </header>

      <div className="flex-1 px-6 pt-6 pb-32 space-y-6">
        <div className="bg-[#38100E] rounded-[32px] p-6 text-[#FFD36B] relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#9C1B1F]/30 rounded-full -mr-10 -mt-10 blur-3xl opacity-50" />
          <div className="relative z-10 flex justify-between items-center">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-black">霍去病</h3>
                <span className="px-2 py-0.5 rounded-lg bg-[#9C1B1F] text-[10px] font-black uppercase">史诗英雄</span>
              </div>
              <p className="text-xs font-bold text-[#FFD36B]/60 italic mb-4">封狼居胥挑战线 · 正在进行中</p>
              <div className="flex items-center gap-2">
                <MapPin size={12} fill="currentColor" />
                <span className="text-[10px] font-bold">蓝色港湾体验点</span>
              </div>
            </div>
            <div className="w-20 h-20 rounded-2xl bg-[#9C1B1F]/20 flex items-center justify-center p-1 border border-[#FFD36B]/20">
              <img
                src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=2670&auto=format&fit=crop"
                className="w-full h-full object-cover rounded-xl shadow-lg"
                alt="Huo Qubing"
              />
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <div className="h-1 bg-[#FFD36B] flex-1 rounded-full opacity-60" />
            <div className="h-1 bg-[#FFD36B] flex-1 rounded-full opacity-60" />
            <div className="h-1 bg-white/10 flex-1 rounded-full" />
            <div className="h-1 bg-white/10 flex-1 rounded-full" />
            <div className="h-1 bg-white/10 flex-1 rounded-full" />
            <div className="h-1 bg-white/10 flex-1 rounded-full" />
          </div>
        </div>

        <section className="bg-white rounded-[40px] p-8 border-2 border-[#9C1B1F] shadow-2xl shadow-[#9C171D]/10 relative">
          <div className="absolute -top-3 left-10 px-4 py-1 bg-[#9C1B1F] text-[#FFD36B] text-[10px] font-black rounded-full uppercase tracking-widest">
            Active Quest
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[#9C1B1F] text-[11px] font-black uppercase tracking-[.25em]">Stage 02</span>
                <h2 className="text-2xl font-black text-[#38100E] mt-1">漠北追击</h2>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-1 text-[#9C1B1F]">
                  <Navigation size={14} fill="currentColor" className="rotate-45" />
                  <span className="text-sm font-black">120m</span>
                </div>
                <span className="text-[10px] font-bold text-[#8C6A58]/40">距离目的地</span>
              </div>
            </div>

            <p className="text-xs text-[#8C6A58] leading-relaxed font-bold border-l-2 border-[#F5DDA2] pl-3 py-1">
              “大漠风起，你率轻骑深入敌后，前往战鼓点完成本关挑战。切不可惊扰敌军，火速前进！”
            </p>

            <div className="p-4 bg-[#F5DDA2]/10 rounded-2xl border border-[#F5DDA2]/30">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#9C1B1F]/10 flex items-center justify-center text-[#9C1B1F]">
                  <MapPin size={18} strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-[11px] font-black text-[#38100E]">任务目标</h4>
                  <p className="text-[10px] font-bold text-[#8C6A58]">前往战鼓点，完成现场打卡任务</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={onCheckIn}
                className="flex-1 h-12 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Navigation size={16} fill="currentColor" className="rotate-45" />
                去打卡
              </button>
              <button
                onClick={onShowDetails}
                className="h-12 w-12 rounded-2xl bg-[#FBF9F8] border border-black/5 flex items-center justify-center text-[#38100E] active:scale-95 transition-all"
              >
                <MoreHorizontal size={20} />
              </button>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-4 rounded-full bg-[#9C1B1F]" />
            <h2 className="text-lg font-black text-[#38100E]">任务进度</h2>
          </div>
          <div className="bg-white rounded-[32px] p-6 border border-black/5 shadow-sm">
            <div className="space-y-4">
              {stages.map((stage, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 shadow-sm ${
                    stage.status === 'completed' ? 'bg-[#FFB800] text-black' :
                    stage.status === 'active' ? 'bg-[#9C1B1F] text-white animate-pulse' : 'bg-[#FBF9F8] text-[#8C6A58]/20 border border-black/5'
                  }`}>
                    {stage.status === 'completed' ? <Check size={14} strokeWidth={4} /> : <span className="text-[10px] font-black">{index + 1}</span>}
                  </div>
                  <span className={`text-[12px] font-black ${
                    stage.status === 'completed' ? 'text-[#8C6A58]' :
                    stage.status === 'active' ? 'text-[#38100E]' : 'text-[#8C6A58]/30'
                  }`}>
                    {stage.name}
                  </span>
                  {stage.status === 'active' && (
                    <div className="ml-auto px-2 py-0.5 rounded-full bg-[#9C1B1F]/10 text-[#9C1B1F] text-[8px] font-black uppercase">Now</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="grid grid-cols-2 gap-4">
          <section className="col-span-1">
            <div className="bg-white rounded-[32px] p-5 border border-black/5 shadow-sm h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-black text-[#38100E]">我的队伍</h3>
                <span className="text-[10px] font-black text-[#9C1B1F]">5/8</span>
              </div>
              <p className="text-[10px] font-bold text-[#8C6A58] mb-4">冠军侯小队 · 已集合</p>
              <div className="flex -space-x-2 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/100?img=${i + 20}`} className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-white bg-[#FBF9F8] flex items-center justify-center text-[10px] font-black text-[#8C6A58]/30">
                  +3
                </div>
              </div>
              <button className="mt-auto w-full py-2 rounded-xl bg-[#FBF9F8] text-[10px] font-black text-[#8C6A58] active:scale-95 transition-all">
                查看详情
              </button>
            </div>
          </section>

          <section className="col-span-1">
            <div className={`rounded-[32px] p-5 border shadow-sm h-full flex flex-col transition-all ${isBandBound ? 'bg-[#38100E] border-[#38100E] text-[#FFD36B]' : 'bg-white border-black/5'}`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-xs font-black ${isBandBound ? 'text-[#FFD36B]' : 'text-[#38100E]'}`}>心流状态</h3>
                <div className={`w-1.5 h-1.5 rounded-full ${isBandBound ? 'bg-green-400 animate-pulse' : 'bg-gray-300'}`} />
              </div>

              {isBandBound ? (
                <div className="flex-1 flex flex-col">
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-2xl font-black">72</span>
                    <span className="text-[8px] font-black opacity-40 uppercase">Flow</span>
                  </div>
                  <span className="text-[10px] font-black px-2 py-0.5 rounded-lg bg-[#9C1B1F] inline-block self-start mb-4">沉浸中</span>
                  <div className="flex gap-4 mt-auto">
                    <div className="flex flex-col">
                      <span className="text-[8px] font-black opacity-40 uppercase">Heart</span>
                      <span className="text-xs font-black">98 <span className="text-[8px] opacity-40">bpm</span></span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[8px] font-black opacity-40 uppercase">SpO2</span>
                      <span className="text-xs font-black">98%</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex flex-col justify-center items-center text-center">
                  <Watch size={24} className="text-[#8C6A58]/20 mb-2" />
                  <p className="text-[9px] font-bold text-[#8C6A58] leading-tight mb-4">绑定手环获取沉浸数据反馈</p>
                  <button
                    onClick={() => setIsBandBound(true)}
                    className="w-full py-2 rounded-xl bg-[#9C1B1F] text-[10px] font-black text-[#FFD36B] active:scale-95 transition-all"
                  >
                    去绑定
                  </button>
                </div>
              )}
            </div>
          </section>
        </div>

        <section className="flex gap-3">
          <button className="flex-1 h-14 rounded-3xl bg-white border border-black/5 flex items-center justify-center gap-2 text-xs font-black text-[#38100E] shadow-sm active:scale-95">
            <MessageCircle size={18} className="text-[#9C1B1F]" />
            联系体验官
          </button>
          <button className="flex-1 h-14 rounded-3xl bg-white border border-black/5 flex items-center justify-center gap-2 text-xs font-black text-[#38100E] shadow-sm active:scale-95">
            <HelpCircle size={18} className="text-[#9C1B1F]" />
            现场指引
          </button>
        </section>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 h-24 bg-white/95 backdrop-blur-xl border-t border-[#F5DDA2] px-6 py-4 flex items-center justify-between z-20">
        <div className="flex flex-col">
          <span className="text-[10px] font-black text-[#9C1B1F] uppercase tracking-widest">Stage 02 Ongoing</span>
          <span className="text-sm font-black text-[#38100E] mt-0.5">漠北追击 · 战鼓任务</span>
        </div>
        <button
          onClick={onCheckIn}
          className="h-14 px-12 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm shadow-xl shadow-[#9C171D]/20 active:scale-95 transition-all flex items-center gap-2"
        >
          <Navigation size={18} fill="currentColor" className="rotate-45" />
          去打卡
        </button>
      </footer>
    </motion.div>
  );
}

type TaskDetailsPageProps = {
  onClose: () => void;
  onCheckIn: () => void;
  onSubmitPhoto: () => void;
};

export function TaskDetailsPage({ onClose, onCheckIn, onSubmitPhoto }: TaskDetailsPageProps) {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      className="fixed inset-0 z-[750] bg-[#FBF9F8] overflow-y-auto flex flex-col"
    >
      <header className="h-16 px-6 bg-white border-b border-black/5 flex items-center justify-between shrink-0 sticky top-0 z-10">
        <button onClick={onClose} className="p-2 -ml-2 text-[#38100E]"><ArrowLeft size={24} strokeWidth={3} /></button>
        <h2 className="text-lg font-black text-[#38100E]">任务详情</h2>
        <button className="p-2 -mr-2 text-[#8C6A58]/60"><MessageCircle size={22} /></button>
      </header>

      <div className="flex-1 px-6 pt-6 pb-32 space-y-6">
        <div className="bg-[#38100E] rounded-[32px] p-6 text-[#FFD36B] relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#9C1B1F]/30 rounded-full -mr-16 -mt-16 blur-2xl" />
          <div className="relative z-10">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Huo Qubing · Stage 02</span>
            <h1 className="text-2xl font-black mt-1 mb-4">漠北追击</h1>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-white/5 rounded-2xl border border-white/5">
                <span className="text-[9px] font-black uppercase opacity-40 block mb-1">英雄项目</span>
                <span className="text-xs font-black">霍去病 · 封狼居胥</span>
              </div>
              <div className="p-3 bg-white/5 rounded-2xl border border-white/5">
                <span className="text-[9px] font-black uppercase opacity-40 block mb-1">任务类型</span>
                <span className="text-xs font-black">LBS打卡 + 拍照</span>
              </div>
            </div>
          </div>
        </div>

        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-1 h-3 bg-[#9C1B1F] rounded-full" />
            <h3 className="text-sm font-black text-[#38100E]">剧情背景</h3>
          </div>
          <div className="bg-white rounded-[32px] p-6 border border-black/5 shadow-sm">
            <p className="text-sm text-[#8C6A58] leading-relaxed font-bold font-serif opacity-80">
              “大漠风起，你率轻骑深入敌后。匈奴单于的主力就在前方。战鼓点已经点燃，这不仅是追击的信号，更是勇气的考验。你需要抵达指定地点，完成战鼓挑战，向全军证明你的判断与无畏。”
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-1 h-3 bg-[#9C1B1F] rounded-full" />
            <h3 className="text-sm font-black text-[#38100E]">任务目标</h3>
          </div>
          <div className="bg-white rounded-[32px] p-6 border border-black/5 shadow-sm space-y-4">
            {[
              { label: '抵达 蓝色港湾·核心柜台 (战鼓点)', done: true },
              { label: '在 30 米打卡范围内完成 LBS 电子签到', done: false },
              { label: '在现场拍摄一张包含“战鼓”元素的任务照', done: false },
              { label: '上传照片并等待体验官线上/线下核准', done: false },
            ].map((goal, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${goal.done ? 'bg-green-500 text-white' : 'border-2 border-black/5 text-transparent'}`}>
                  {goal.done && <Check size={10} strokeWidth={4} />}
                </div>
                <span className={`text-xs font-black ${goal.done ? 'text-[#8C6A58]/40' : 'text-[#38100E]'}`}>{goal.label}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-2 gap-4">
          <section className="space-y-3">
            <h3 className="text-sm font-black text-[#38100E] px-2 italic">完成规则</h3>
            <div className="bg-white rounded-[32px] p-5 border border-black/5 h-full space-y-3">
              {['实时定位校验', '照片需包含景观', '逾期自动失效', '禁止虚假打卡'].map((rule) => (
                <div key={rule} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#9C1B1F]" />
                  <span className="text-[10px] font-black text-[#8C6A58]">{rule}</span>
                </div>
              ))}
            </div>
          </section>
          <section className="space-y-3">
            <h3 className="text-sm font-black text-[#38100E] px-2 italic text-right">本关奖励</h3>
            <div className="bg-[#38100E] rounded-[32px] p-5 border border-white/5 h-full space-y-3 text-[#FFD36B]">
              <div className="flex justify-between items-center bg-white/5 p-2 rounded-xl border border-white/5">
                <Flame size={14} fill="currentColor" />
                <span className="text-[10px] font-black">+10 火种</span>
              </div>
              <div className="flex justify-between items-center bg-white/5 p-2 rounded-xl border border-white/5">
                <Award size={14} />
                <span className="text-[10px] font-black">+5 银票</span>
              </div>
              <div className="flex justify-between items-center bg-white/5 p-2 rounded-xl border border-white/5">
                <Dna size={14} />
                <span className="text-[10px] font-black">+1 进度</span>
              </div>
            </div>
          </section>
        </div>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 p-6 bg-white/95 backdrop-blur-xl border-t border-black/5 flex gap-3 z-20">
        <button
          onClick={onCheckIn}
          className="flex-1 h-14 rounded-2xl border-2 border-[#9C1B1F]/20 text-[#9C1B1F] font-black text-sm active:scale-95 transition-all"
        >
          去打卡
        </button>
        <button
          onClick={onSubmitPhoto}
          className="flex-[1.5] h-14 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm shadow-xl shadow-[#9C171D]/20 active:scale-95 transition-all"
        >
          拍照提交
        </button>
      </footer>
    </motion.div>
  );
}

type MapCheckInPageProps = {
  onClose: () => void;
  onCheckedIn?: () => void;
};

export function MapCheckInPage({ onClose, onCheckedIn }: MapCheckInPageProps) {
  const [distance, setDistance] = useState(120);
  const [showSuccess, setShowSuccess] = useState(false);
  const isAvailable = distance <= 30;

  const completeCheckIn = () => {
    setShowSuccess(false);
    onCheckedIn?.();
    onClose();
  };

  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      className="fixed inset-0 z-[700] bg-[#FBF9F8] overflow-y-auto flex flex-col"
    >
      <header className="h-16 px-6 bg-white border-b border-black/5 flex items-center justify-between shrink-0 sticky top-0 z-10">
        <button onClick={onClose} className="p-2 -ml-2 text-[#38100E]"><ArrowLeft size={24} strokeWidth={3} /></button>
        <h2 className="text-lg font-black text-[#38100E]">任务打卡</h2>
        <button className="p-2 -mr-2 text-[#8C6A58]/60"><MessageCircle size={22} /></button>
      </header>

      <div className="flex-1 flex flex-col relative min-h-[600px]">
        <div className="px-6 pt-4 shrink-0">
          <div className="bg-white rounded-[32px] p-6 border border-black/5 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#9C1B1F]/5 rounded-full -mr-8 -mt-8" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-black text-[#9C1B1F] bg-[#9C1B1F]/10 px-2 py-0.5 rounded-md uppercase tracking-wider">进行中</span>
                <h3 className="font-black text-[#38100E]">漠北追击</h3>
              </div>
              <p className="text-[11px] text-[#8C6A58] font-bold leading-relaxed">前往战鼓点，完成本关挑战。</p>
              <div className="mt-3 flex items-center gap-1.5">
                <MapPin size={12} className="text-[#9C1B1F]" fill="currentColor" />
                <span className="text-xs font-black text-[#38100E]">目标地点：战鼓点</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 m-6 mt-4 bg-gray-100 rounded-[40px] overflow-hidden border border-black/5 relative shadow-inner">
          <div className="absolute inset-0 bg-[#F2EDE4] opacity-50">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
          </div>

          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <path
              d="M 120 450 Q 200 350 250 200"
              stroke="#9C1B1F"
              strokeWidth="3"
              strokeDasharray="8,8"
              fill="none"
              className="opacity-30"
            />
          </svg>

          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-32 left-24 w-8 h-8 rounded-full bg-[#9C1B1F]/20 flex items-center justify-center border-2 border-white shadow-lg"
          >
            <div className="w-3 h-3 rounded-full bg-[#9C1B1F]" />
          </motion.div>

          <div className="absolute top-40 right-24">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="w-24 h-24 rounded-full bg-[#9C1B1F]/10 border-2 border-[#9C1B1F]/30 flex items-center justify-center"
            >
              <div className="w-4 w-4 bg-[#9C1B1F]/20 rounded-full animate-ping absolute" />
            </motion.div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <MapPin size={32} className="text-[#9C1B1F]" fill="#9C1B1F" />
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 bg-[#38100E] text-[#FFD36B] text-[10px] font-black rounded-xl shadow-xl">
                  战鼓点 (Target)
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 right-6 flex flex-col gap-3">
            <button className="w-12 h-12 rounded-2xl bg-white shadow-xl flex items-center justify-center text-[#38100E] active:scale-90 transition-all border border-black/5">
              <RefreshCw size={20} />
            </button>
            <button
              onClick={() => setDistance(distance === 120 ? 25 : 120)}
              className="w-12 h-12 rounded-2xl bg-[#9C1B1F] shadow-xl flex items-center justify-center text-[#FFD36B] active:scale-90 transition-all"
            >
              <MapIcon size={20} />
            </button>
          </div>
        </div>

        <div className="px-6 pb-32">
          <div className={`p-6 rounded-[32px] border-2 transition-all ${isAvailable ? 'bg-[#9C1B1F]/5 border-[#9C1B1F]' : 'bg-white border-black/5'}`}>
            <div className="flex justify-between items-end">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Navigation size={16} className={`rotate-45 ${isAvailable ? 'text-[#9C1B1F]' : 'text-[#8C6A58]/40'}`} fill="currentColor" />
                  <span className={`text-2xl font-black ${isAvailable ? 'text-[#38100E]' : 'text-[#8C6A58]/40'}`}>{distance}m</span>
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] font-bold text-[#8C6A58]">打卡范围：30米内可打卡</p>
                  <p className="text-[11px] font-bold text-[#8C6A58]">预计步行：{Math.ceil(distance / 60)} 分钟</p>
                </div>
              </div>
              <div className="text-right">
                <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-lg ${isAvailable ? 'bg-[#9C1B1F] text-white' : 'bg-[#FBF9F8] text-[#8C6A58]/30'}`}>
                  {isAvailable ? 'READY' : 'TOO FAR'}
                </span>
              </div>
            </div>

            <div className="h-[1px] bg-black/5 my-4" />

            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${isAvailable ? 'bg-[#9C1B1F] animate-pulse' : 'bg-[#8C6A58]/20'}`} />
              <p className={`text-xs font-black ${isAvailable ? 'text-[#9C1B1F]' : 'text-[#8C6A58]/40'}`}>
                {isAvailable ? '已到达战鼓点附近，可以完成打卡' : '你还未到达打卡范围，请继续前往'}
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-4">
            <button
              onClick={() => setDistance(120)}
              className="text-[10px] font-black text-[#8C6A58]/40 border-b border-[#8C6A58]/20"
            >
              定位不准？
            </button>
            <button className="text-[10px] font-black text-[#8C6A58]/40 border-b border-[#8C6A58]/20">
              现场求助
            </button>
          </div>
        </div>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 p-6 bg-white/95 backdrop-blur-xl border-t border-black/5 flex flex-col gap-2 z-20">
        <button
          disabled={!isAvailable}
          onClick={() => setShowSuccess(true)}
          className={`h-14 rounded-2xl font-black text-sm shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2 ${
            isAvailable ? 'bg-[#9C1B1F] text-[#FFD36B] shadow-[#9C171D]/20' : 'bg-[#FBF9F8] text-[#8C6A58]/20 shadow-none'
          }`}
        >
          <Flame size={20} fill={isAvailable ? 'currentColor' : 'none'} />
          {isAvailable ? '立即打卡' : '未到达打卡范围'}
        </button>
        <p className="text-[9px] text-[#8C6A58]/40 text-center font-bold tracking-tight">
          如果你已到达现场但无法打卡，可点击“定位不准”上传现场照片确认
        </p>
      </footer>

      <AnimatePresence>
        {showSuccess && (
          <div className="fixed inset-0 z-[800] flex items-center justify-center px-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#38100E]/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full bg-white rounded-[48px] p-8 text-center"
            >
              <div className="w-24 h-24 rounded-[32px] bg-[#9C1B1F] mx-auto -mt-20 shadow-2xl flex items-center justify-center border-[6px] border-white text-white">
                <Check size={40} strokeWidth={4} />
              </div>

              <h2 className="mt-6 text-2xl font-black text-[#38100E]">打卡成功！</h2>
              <p className="mt-2 text-[#8C6A58] text-sm font-bold">你已完成第2关 · 漠北追击</p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-3xl bg-[#F5DDA2]/10 border border-[#F5DDA2]/30 flex flex-col items-center gap-1">
                  <div className="w-8 h-8 rounded-full bg-[#9C1B1F]/10 flex items-center justify-center text-[#9C1B1F]">
                    <Flame size={18} fill="currentColor" />
                  </div>
                  <span className="text-xs font-black text-[#38100E]">+10</span>
                  <span className="text-[9px] font-bold text-[#8C6A58]/60 uppercase">Fire Seed</span>
                </div>
                <div className="p-4 rounded-3xl bg-[#F5DDA2]/10 border border-[#F5DDA2]/30 flex flex-col items-center gap-1">
                  <div className="w-8 h-8 rounded-full bg-[#FFB800]/10 flex items-center justify-center text-[#FFB800]">
                    <Award size={18} />
                  </div>
                  <span className="text-xs font-black text-[#38100E]">+5</span>
                  <span className="text-[9px] font-bold text-[#8C6A58]/60 uppercase">Silver Coin</span>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <button
                  onClick={completeCheckIn}
                  className="w-full h-14 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm shadow-xl shadow-[#9C171D]/20 active:scale-95 transition-all"
                >
                  继续下一关
                </button>
                <button
                  onClick={completeCheckIn}
                  className="w-full h-14 rounded-2xl border-2 border-black/5 text-[#8C6A58] font-black text-sm active:scale-95 transition-all"
                >
                  查看任务进度
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

type PhotoSubmissionPageProps = {
  isDevMode: boolean;
  onClose: () => void;
  onCompleteTask: () => void;
};

export function PhotoSubmissionPage({ isDevMode, onClose, onCompleteTask }: PhotoSubmissionPageProps) {
  const [images, setImages] = useState<string[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const mockUpload = () => {
    setImages(['https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2574&auto=format&fit=crop']);
  };

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      className="fixed inset-0 z-[800] bg-[#FBF9F8] overflow-y-auto flex flex-col"
    >
      <header className="h-16 px-6 bg-white border-b border-black/5 flex items-center justify-between shrink-0 sticky top-0 z-10">
        <button onClick={onClose} className="p-2 -ml-2 text-[#38100E]"><ArrowLeft size={24} strokeWidth={3} /></button>
        <h2 className="text-lg font-black text-[#38100E]">提交任务</h2>
        <div className="w-10" />
      </header>

      <div className="flex-1 px-6 pt-6 pb-32 space-y-6">
        <div className="bg-white rounded-[32px] p-6 border border-black/5 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <div>
              <span className="text-[10px] font-black text-[#9C1B1F] uppercase tracking-widest">Stage 02</span>
              <h3 className="text-lg font-black text-[#38100E]">漠北追击</h3>
            </div>
            <span className="px-2 py-1 rounded-lg bg-[#FBF9F8] text-[9px] font-black text-[#8C6A58]/60 uppercase">待提交</span>
          </div>
          <p className="text-xs font-bold text-[#8C6A58]">任务要求：上传一张现场挑战照片，证明你已抵达战荷点并完成相应任务。</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-black text-[#38100E] px-2">上传任务照片</h3>
          <div className="grid grid-cols-2 gap-4">
            {images.map((img, index) => (
              <div key={index} className="aspect-square rounded-3xl overflow-hidden relative group border-2 border-[#F5DDA2]">
                <img src={img} className="w-full h-full object-cover" />
                <button
                  onClick={() => setImages((prev) => prev.filter((_, imageIndex) => imageIndex !== index))}
                  className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/50 text-white flex items-center justify-center backdrop-blur-md"
                >
                  <X size={14} />
                </button>
              </div>
            ))}
            {images.length < 3 && (
              <button
                onClick={mockUpload}
                className="aspect-square rounded-3xl border-2 border-dashed border-[#F5DDA2] bg-[#F5DDA2]/5 flex flex-col items-center justify-center gap-2 active:scale-95 transition-all"
              >
                <Camera size={32} className="text-[#9C1B1F]/30" />
                <span className="text-[10px] font-black text-[#8C6A58]/40 uppercase tracking-widest">拍摄照片</span>
              </button>
            )}
          </div>
          <p className="text-[10px] font-bold text-[#8C6A58]/50 px-2 leading-relaxed">
            请上传清晰照片，建议包含现场任务标识、明显的建筑景观或队伍成员合影。
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <h3 className="text-sm font-black text-[#38100E] px-2">补充说明 (选填)</h3>
          <textarea
            placeholder="可以简单说明你完成任务的情况..."
            className="w-full h-32 bg-white rounded-[32px] border border-black/5 p-5 text-sm font-medium focus:ring-2 focus:ring-[#9C1B1F]/20 focus:border-[#9C1B1F] outline-none transition-all resize-none shadow-sm"
          />
        </div>

        <div className="p-5 bg-[#F5DDA2]/10 rounded-3xl border border-[#F5DDA2]/30 flex gap-3">
          <Info size={18} className="text-[#9C1B1F] shrink-0" />
          <div className="space-y-1">
            <p className="text-[11px] font-black text-[#38100E]">提交前须知</p>
            <p className="text-[10px] font-bold text-[#8C6A58]/70 leading-relaxed">
              提交后将进入人工/AI 混合确认流程；若照片不清晰，可能需要重新提交；如现场体验官已面对面确认，提交后将快速通过。
            </p>
          </div>
        </div>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 p-6 bg-white/95 backdrop-blur-xl border-t border-black/5 flex flex-col gap-2 z-20">
        <button
          disabled={images.length === 0}
          onClick={() => setShowSuccess(true)}
          className={`h-14 rounded-2xl font-black text-sm shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2 ${
            images.length > 0 ? 'bg-[#9C1B1F] text-[#FFD36B] shadow-[#9C171D]/20' : 'bg-[#FBF9F8] text-[#8C6A58]/20 shadow-none'
          }`}
        >
          提交任务
        </button>
        {isDevMode && (
          <button
            onClick={() => setShowError(true)}
            className="text-[10px] font-black text-[#8C6A58]/30 py-2"
          >
            模拟提交失败状态
          </button>
        )}
      </footer>

      <AnimatePresence>
        {showSuccess && (
          <div className="fixed inset-0 z-[900] flex items-center justify-center px-10">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-[#38100E]/90 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="relative w-full bg-white rounded-[48px] p-8 text-center shadow-2xl">
              <div className="w-20 h-20 rounded-full bg-green-500 mx-auto -mt-18 shadow-xl flex items-center justify-center border-4 border-white text-white">
                <Check size={36} strokeWidth={4} />
              </div>
              <h2 className="mt-6 text-2xl font-black text-[#38100E]">提交成功</h2>
              <p className="mt-2 text-[#8C6A58] text-sm font-bold">任务已提交，待系统确认</p>
              <div className="mt-8 space-y-3">
                <button onClick={() => { setShowSuccess(false); onCompleteTask(); }} className="w-full h-14 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm">返回当前体验</button>
                <button onClick={() => { setShowSuccess(false); onCompleteTask(); }} className="w-full h-14 rounded-2xl border-2 border-black/5 text-[#8C6A58] font-black text-sm">查看进度</button>
              </div>
            </motion.div>
          </div>
        )}

        {showError && (
          <div className="fixed inset-0 z-[900] flex items-center justify-center px-10">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-[#38100E]/90 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="relative w-full bg-white rounded-[48px] p-8 text-center shadow-2xl">
              <div className="w-20 h-20 rounded-full bg-[#9C1B1F] mx-auto -mt-18 shadow-xl flex items-center justify-center border-4 border-white text-white">
                <AlertCircle size={36} strokeWidth={3} />
              </div>
              <h2 className="mt-6 text-2xl font-black text-[#38100E]">提交未通过</h2>
              <p className="mt-2 text-[#8C6A58] text-sm font-bold">照片不够清晰，请尝试重新上传背景较亮、包含任务目标的照片。</p>
              <div className="mt-8 space-y-3">
                <button onClick={() => setShowError(false)} className="w-full h-14 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm">重新提交</button>
                <button onClick={() => { setShowError(false); onClose(); }} className="w-full h-14 rounded-2xl border-2 border-black/5 text-[#8C6A58] font-black text-sm">稍后再试</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

type TaskCompletePageProps = {
  onClose: () => void;
  onNext: () => void;
  onViewProgress: () => void;
};

export function TaskCompletePage({ onClose, onNext, onViewProgress }: TaskCompletePageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000] bg-[#38100E] overflow-y-auto flex flex-col"
    >
      <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b from-[#9C1B1F] to-transparent opacity-50" />

      <div className="flex-1 px-6 pt-20 pb-32 flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="w-32 h-32 rounded-full bg-[#FFD36B] shadow-[0_0_50px_rgba(255,211,107,0.4)] flex items-center justify-center relative mb-8"
        >
          <div className="absolute inset-0 rounded-full border-4 border-white/20 animate-ping" />
          <Award size={64} className="text-[#9C1B1F]" fill="currentColor" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-4 border-2 border-dashed border-[#FFD36B]/30 rounded-full"
          />
        </motion.div>

        <h1 className="text-4xl font-black text-[#FFD36B] tracking-tighter mb-2">任务完成！</h1>
        <p className="text-white/60 font-bold mb-12">你已成功通关 第2关 · 漠北追击</p>

        <div className="w-full space-y-4 mb-12">
          <h3 className="text-xs font-black text-[#FFD36B]/40 uppercase tracking-[0.3em] mb-4">获得战利品</h3>
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: <Flame size={20} fill="currentColor" />, label: '火种', val: '+10', color: 'bg-[#9C1B1F]/20' },
              { icon: <Award size={20} />, label: '银票', val: '+5', color: 'bg-white/5' },
              { icon: <Dna size={20} />, label: '进度', val: '+1', color: 'bg-white/5' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className={`${item.color} rounded-3xl p-5 border border-white/5 flex flex-col items-center gap-2`}
              >
                <div className="text-[#FFD36B]">{item.icon}</div>
                <span className="text-lg font-black text-white">{item.val}</span>
                <span className="text-[10px] font-bold text-white/40">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-white/5 rounded-[40px] p-8 border border-white/5 backdrop-blur-md w-full mb-8">
          <h3 className="text-[#FFD36B] font-black mb-3 italic">新的剧情已解锁</h3>
          <p className="text-sm text-white/70 leading-relaxed font-bold font-serif opacity-80">
            “战鼓已响，大漠深处传来的回响正是胜利的序曲。下一关「战鼓挑战」已经开启，匈奴主力就在前方，继续前进，完成你的封狼居胥之路。”
          </p>
        </div>

        <div className="w-full bg-[#FFD36B] rounded-[32px] p-6 text-[#38100E] flex items-center justify-between shadow-2xl">
          <div className="text-left">
            <span className="text-[10px] font-black opacity-40 uppercase tracking-widest">Next Stage</span>
            <h4 className="text-lg font-black mt-0.5">战鼓挑战</h4>
            <div className="flex items-center gap-2 mt-2">
              <MapPin size={12} fill="currentColor" />
              <span className="text-xs font-bold">距离约 180m</span>
            </div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-[#38100E] border border-black/5 flex items-center justify-center text-[#FFD36B]">
            <Navigation size={24} fill="currentColor" className="rotate-45" />
          </div>
        </div>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 p-6 bg-[#38100E]/80 backdrop-blur-xl border-t border-white/5 flex flex-col gap-3 z-20">
        <button
          onClick={onNext}
          className="w-full h-14 rounded-2xl bg-[#FFD36B] text-[#38100E] font-black text-sm shadow-xl active:scale-95 transition-all"
        >
          继续下一关
        </button>
        <div className="flex gap-3">
          <button
            onClick={onViewProgress}
            className="flex-1 h-14 rounded-2xl bg-white/5 text-white font-black text-sm border border-white/10 active:scale-95 transition-all"
          >
            任务进度
          </button>
          <button
            onClick={onClose}
            className="flex-1 h-14 rounded-2xl bg-white/5 text-white font-black text-sm border border-white/10 active:scale-95 transition-all opacity-40"
          >
            返回
          </button>
        </div>
      </footer>
    </motion.div>
  );
}

type RaceResultPageProps = {
  onClose: () => void;
  onGoHome: () => void;
  onShowMallHome: () => void;
};

export function RaceResultPage({ onClose, onGoHome, onShowMallHome }: RaceResultPageProps) {
  const [showPoster, setShowPoster] = useState(false);

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      className="fixed inset-0 z-[1100] bg-[#FBF9F8] overflow-y-auto flex flex-col"
    >
      <div className="h-[45vh] relative shrink-0 overflow-hidden bg-[#38100E]">
        <img
          src="https://images.unsplash.com/photo-1599599810694-b5b3aa44a97d?q=80&w=2600&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#9C1B1F]/80 via-transparent to-[#FBF9F8]" />

        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            <span className="text-[10px] font-black text-[#FFD36B] uppercase tracking-[.4em] mb-3 block">Hero's Journey Complete</span>
            <h1 className="text-4xl font-black text-white tracking-tighter mb-2">恭喜完赛！</h1>
            <p className="text-white/70 font-bold">你已成功完成 霍去病英雄体验</p>
          </motion.div>

          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.5, type: 'spring' }} className="mt-10 relative">
            <div className="absolute inset-0 bg-[#FFD36B] rounded-full blur-[60px] opacity-20" />
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#FFD36B] to-[#F5DDA2] p-1 shadow-2xl relative z-10">
              <div className="w-full h-full rounded-full bg-[#38100E] flex flex-col items-center justify-center border-4 border-[#FFD36B]/20">
                <Trophy size={56} className="text-[#FFD36B] mb-2" fill="currentColor" />
                <span className="text-[10px] font-black text-[#FFD36B] uppercase tracking-widest">Champion Hou</span>
              </div>
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#9C1B1F] text-white px-4 py-1.5 rounded-full text-[10px] font-black shadow-xl border-2 border-white">
              获得最高成就勋章
            </div>
          </motion.div>
        </div>
      </div>

      <div className="px-6 pb-40 -mt-8 relative z-20 space-y-6">
        <div className="bg-white rounded-[40px] p-8 text-center border border-black/5 shadow-xl shadow-black/5">
          <h2 className="text-2xl font-black text-[#38100E]">冠军侯火种勋章</h2>
          <p className="text-[#8C6A58]/50 text-[10px] font-black uppercase tracking-[0.2em] mt-1">Earned Today · {new Date().toLocaleDateString()}</p>
          <p className="mt-4 text-xs font-bold text-[#8C6A58] leading-relaxed px-4">
            本勋章颁发给完成「封狼居胥」英雄路线全部 6 项挑战的勇者。你已证明了自己的智慧、勇气与耐力。
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-sm font-black text-[#38100E]">体验战报</h3>
            <span className="text-[10px] font-black text-[#8C6A58]/40">冠军侯小队</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: '完成任务', val: '6/6', icon: <Award size={16} /> },
              { label: '总用时', val: '86 min', icon: <Timer size={16} /> },
              { label: '获得火种', val: '60', icon: <Flame size={16} fill="currentColor" /> },
              { label: '获得银票', val: '30', icon: <History size={16} /> },
              { label: '心流峰值', val: '88', icon: <Activity size={16} /> },
              { label: '超越玩家', val: '92%', icon: <TrendingUp size={16} /> },
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-3xl p-5 border border-black/5 shadow-sm flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#FBF9F8] flex items-center justify-center text-[#9C1B1F]">
                  {stat.icon}
                </div>
                <div>
                  <span className="text-[10px] font-black text-[#8C6A58]/40 block">{stat.label}</span>
                  <span className="text-base font-black text-[#38100E]">{stat.val}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 bg-[#38100E] rounded-[40px] text-[#FFD36B] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#9C1B1F]/20 rounded-full -mr-16 -mt-16 blur-3xl" />
          <h3 className="font-black mb-3 flex items-center gap-2 italic">
            <Star size={16} fill="currentColor" />
            你的英雄时刻
          </h3>
          <p className="text-xs font-bold leading-relaxed opacity-80">
            从最初的「誓师出征」开始，你率领小队深入漠北，经历「漠北追击」落点与「战鼓挑战」的热血。今日登顶，完成「封狼居胥」的终极跨越，这是一场属于你的英雄成长之旅，未来大路，必有回响。
          </p>
        </div>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-1 h-3 bg-[#9C1B1F] rounded-full" />
            <h3 className="text-sm font-black text-[#38100E]">解锁限定纪念</h3>
          </div>
          <div className="bg-white rounded-[40px] p-6 border-2 border-[#9C1B1F]/10 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFD36B]/10 rounded-full -mr-12 -mt-12 blur-2xl" />
            <div className="flex gap-4">
              <div className="w-24 h-24 rounded-2xl bg-gray-50 overflow-hidden shrink-0 shadow-inner">
                <img src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 space-y-2">
                <h4 className="text-sm font-black text-[#38100E]">霍去病实体纪念勋章</h4>
                <p className="text-[10px] font-bold text-[#8C6A58]/60 leading-relaxed">完成霍去病英雄体验后，你已解锁专属实体纪念购买资格。</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-black text-[#9C1B1F]">¥39</span>
                  <span className="px-2 py-0.5 rounded-lg bg-green-50 text-[9px] font-black text-green-600 uppercase">已解锁</span>
                </div>
              </div>
            </div>
            <button
              onClick={onShowMallHome}
              className="w-full h-12 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-xs mt-6 shadow-xl shadow-[#9C171D]/10 active:scale-95 transition-all uppercase tracking-widest"
            >
              去火种商城看看
            </button>
          </div>
        </section>

        <div className="flex gap-4 pb-12">
          <button
            onClick={() => setShowPoster(true)}
            className="flex-1 h-14 rounded-2xl bg-white border-2 border-[#9C1B1F]/20 text-[#9C1B1F] font-black text-xs flex items-center justify-center gap-2 active:scale-95 transition-all"
          >
            <Share2 size={16} />
            生成分享海报
          </button>
          <button
            onClick={onGoHome}
            className="flex-1 h-14 rounded-2xl bg-white border-2 border-black/5 text-[#38100E] font-black text-xs flex items-center justify-center gap-2 active:scale-95 transition-all"
          >
            <Home size={16} />
            返回首页
          </button>
        </div>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 p-6 bg-white/95 backdrop-blur-xl border-t border-black/5 flex flex-col gap-3 z-30">
        <button className="w-full h-14 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm shadow-xl active:scale-95 transition-all">
          查看我的勋章
        </button>
        <button onClick={onGoHome} className="w-full h-14 rounded-2xl bg-[#FBF9F8] text-[#8C6A58] font-black text-sm active:scale-95 transition-all">
          返回首页
        </button>
      </footer>

      <AnimatePresence>
        {showPoster && (
          <div className="fixed inset-0 z-[1200] flex items-center justify-center px-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowPoster(false)} className="absolute inset-0 bg-black/80 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 30 }} className="relative w-full max-w-sm">
              <div className="bg-[#38100E] rounded-[48px] overflow-hidden shadow-2xl p-1">
                <div className="bg-white rounded-[46px] overflow-hidden flex flex-col aspect-[4/6]">
                  <div className="h-2/5 bg-[#9C1B1F] relative overflow-hidden p-8 flex flex-col justify-end">
                    <img src="https://images.unsplash.com/photo-1599599810694-b5b3aa44a97d?q=80&w=2600&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay" />
                    <div className="relative z-10">
                      <span className="text-[10px] font-black text-[#FFD36B] uppercase tracking-widest">Huo Qubing Experience</span>
                      <h2 className="text-3xl font-black text-white italic">封狼居胥 · 终极见证</h2>
                    </div>
                  </div>
                  <div className="flex-1 p-8 flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-[#38100E] flex items-center justify-center border-4 border-[#FFD36B] shadow-lg -mt-20 relative z-20">
                      <Trophy size={32} className="text-[#FFD36B]" fill="currentColor" />
                    </div>
                    <h3 className="mt-4 text-xl font-black text-[#38100E]">冠军侯火种勋章</h3>
                    <p className="text-[9px] font-black text-[#8C6A58]/40 uppercase tracking-[0.2em] mt-1">Earned by {new Date().toLocaleDateString()}</p>
                    <div className="w-full h-[1px] bg-black/5 my-6" />
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4 w-full">
                      <div className="text-left">
                        <span className="text-[10px] font-bold text-[#8C6A58]/40 block">完成任务</span>
                        <span className="text-2xl font-black text-[#38100E]">6/6</span>
                      </div>
                      <div className="text-left">
                        <span className="text-[10px] font-bold text-[#8C6A58]/40 block">心流峰值</span>
                        <span className="text-2xl font-black text-[#38100E]">88</span>
                      </div>
                    </div>
                    <div className="mt-auto flex items-end justify-between w-full">
                      <div className="text-left">
                        <div className="flex items-center gap-2 mb-1">
                          <Flame size={12} fill="#9C1B1F" className="text-[#9C1B1F]" />
                          <span className="text-xs font-black text-[#38100E]">黄火火 · 智慧文旅</span>
                        </div>
                        <p className="text-[8px] font-bold text-[#8C6A58]/60 leading-tight">
                          扫描左侧二维码<br />开启你的英雄之旅
                        </p>
                      </div>
                      <div className="w-16 h-16 bg-[#FBF9F8] rounded-xl border border-black/5 p-2 shrink-0">
                        <QrCode size="100%" className="text-[#38100E]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <button className="flex-1 h-14 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm flex items-center justify-center gap-2 shadow-xl shadow-black/20">
                  <Download size={18} />
                  保存海报
                </button>
                <button className="flex-1 h-14 rounded-2xl bg-white text-[#38100E] font-black text-sm flex items-center justify-center gap-2">
                  <Share2 size={18} />
                  分享好友
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
