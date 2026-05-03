import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  CheckCircle2,
  Check,
  Flame,
  HelpCircle,
  Map as MapIcon,
  MapPin,
  MessageCircle,
  MoreHorizontal,
  Navigation,
  RefreshCw,
  Watch,
  X,
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
