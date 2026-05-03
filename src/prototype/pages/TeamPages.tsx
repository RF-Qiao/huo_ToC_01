import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  AlertCircle,
  ArrowLeft,
  Calendar,
  Check,
  Clock,
  ExternalLink,
  Flame,
  Info,
  Lock,
  LogOut,
  MapPin,
  MessageCircle,
  Navigation,
  Plus,
  QrCode,
  Share2,
  Users,
  Zap,
} from 'lucide-react';

type TeamHomePageProps = {
  hasTeam: boolean;
  onClose: () => void;
  onCreate: () => void;
  onJoin: () => void;
  onViewDetails: () => void;
};

export function TeamHomePage({ hasTeam, onClose, onCreate, onJoin, onViewDetails }: TeamHomePageProps) {
  return (
    <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="fixed inset-0 z-[1000] bg-[#FBF9F8] overflow-y-auto flex flex-col">
      <header className="h-16 px-6 bg-white border-b border-black/5 flex items-center justify-between shrink-0 sticky top-0 z-10">
        <button onClick={onClose} className="p-2 -ml-2 text-[#38100E]"><ArrowLeft size={24} strokeWidth={3} /></button>
        <h2 className="text-lg font-black text-[#38100E]">我的队伍</h2>
        <button className="p-2 -mr-2 text-[#8C6A58]/60"><MessageCircle size={22} /></button>
      </header>

      <div className="flex-1 px-6 pt-6 pb-12">
        {!hasTeam ? (
          <div className="h-full flex flex-col items-center justify-center text-center space-y-8">
            <div className="relative">
              <div className="w-40 h-40 rounded-full bg-[#F5DDA2]/20 flex items-center justify-center">
                <Users size={80} className="text-[#9C1B1F]/20" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-[#38100E] flex items-center justify-center border-4 border-[#FBF9F8]">
                <Plus size={32} className="text-[#FFD36B]" strokeWidth={3} />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-black text-[#38100E]">你还没有加入队伍</h3>
              <p className="mt-2 text-sm text-[#8C6A58] font-bold">和朋友一起完成英雄挑战，体验更有意思</p>
            </div>
            <div className="w-full space-y-3">
              <button onClick={onCreate} className="w-full h-14 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm shadow-xl shadow-[#9C171D]/20 active:scale-95 transition-all">
                创建队伍
              </button>
              <button onClick={onJoin} className="w-full h-14 rounded-2xl border-2 border-black/5 text-[#38100E] font-black text-sm active:scale-95 transition-all">
                输入队伍码加入
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-[#38100E] rounded-[40px] p-8 text-[#FFD36B] relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#9C1B1F]/30 rounded-full -mr-12 -mt-12 blur-2xl" />
              <div className="relative z-10 flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Active Team</span>
                  <h3 className="text-2xl font-black mt-1">冠军侯小队</h3>
                </div>
                <div className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[10px] font-black">5/8人</div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <span className="text-[9px] font-black opacity-40 uppercase">当前英雄</span>
                  <p className="text-xs font-black">霍去病</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-black opacity-40 uppercase">所选路线</span>
                  <p className="text-xs font-black">封狼居胥挑战线</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-black opacity-40 uppercase">集合时间</span>
                  <p className="text-xs font-black">14:00</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white/5 rounded-2xl border border-white/5 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#9C1B1F]/20 flex items-center justify-center">
                  <Zap size={16} fill="currentColor" />
                </div>
                <div className="flex-1">
                  <span className="text-[9px] font-black opacity-30 uppercase block">当前任务</span>
                  <span className="text-[11px] font-black">第2关 · 漠北追击</span>
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <button onClick={onViewDetails} className="flex-1 h-12 rounded-xl bg-[#FFD36B] text-[#38100E] font-black text-xs active:scale-95 transition-all">
                  查看队伍
                </button>
                <button className="flex-1 h-12 rounded-xl bg-white/5 text-white font-black text-xs border border-white/10 active:scale-95 transition-all">
                  邀请好友
                </button>
              </div>
            </div>

            <div className="bg-white rounded-[32px] p-6 border border-black/5 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?u=${i}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <span className="text-[11px] font-black text-[#8C6A58]">5 位英雄正在途中</span>
              </div>
              <button className="w-full py-4 rounded-2xl bg-[#FBF9F8] text-[11px] font-black text-[#38100E] uppercase tracking-widest active:scale-98">
                发送集合提醒
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

type CreateTeamPageProps = {
  onClose: () => void;
  onCreate: () => void;
};

export function CreateTeamPage({ onClose, onCreate }: CreateTeamPageProps) {
  return (
    <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="fixed inset-0 z-[1100] bg-[#FBF9F8] overflow-y-auto flex flex-col">
      <header className="h-16 px-6 bg-white border-b border-black/5 flex items-center justify-between shrink-0 sticky top-0 z-10">
        <button onClick={onClose} className="p-2 -ml-2 text-[#38100E]"><ArrowLeft size={24} strokeWidth={3} /></button>
        <h2 className="text-lg font-black text-[#38100E]">创建队伍</h2>
        <div className="w-10" />
      </header>

      <div className="flex-1 px-6 pt-6 pb-32 space-y-8">
        <section className="space-y-4">
          <div className="flex items-center gap-2 px-2">
            <span className="w-1 h-3 bg-[#9C1B1F] rounded-full" />
            <h3 className="text-sm font-black text-[#38100E]">基础信息</h3>
          </div>
          <div className="bg-white rounded-[32px] p-6 border border-black/5 shadow-sm space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-[#8C6A58]/50 uppercase tracking-widest pl-1">队伍名称</label>
              <input defaultValue="冠军侯小队" className="w-full h-14 bg-[#FBF9F8] rounded-2xl px-5 text-sm font-black text-[#38100E] focus:ring-2 focus:ring-[#9C1B1F]/20 focus:border-[#9C1B1F] outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-[#8C6A58]/50 uppercase tracking-widest pl-1">选择路线</label>
              <div className="h-14 bg-[#FBF9F8] rounded-2xl flex items-center px-4 gap-2 border border-black/5">
                <MapPin size={14} className="text-[#8C6A58]" />
                <span className="text-xs font-black">封狼居胥挑战线</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-[#8C6A58]/50 uppercase tracking-widest pl-1">选择英雄</label>
                <div className="h-14 bg-[#FBF9F8] rounded-2xl flex items-center px-4 gap-2 border border-black/5">
                  <Flame size={14} className="text-[#9C1B1F]" fill="currentColor" />
                  <span className="text-xs font-black">霍去病</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-[#8C6A58]/50 uppercase tracking-widest pl-1">队伍人数</label>
                <div className="h-14 bg-[#FBF9F8] rounded-2xl flex items-center px-4 gap-2 border border-black/5">
                  <Users size={14} className="text-[#8C6A58]" />
                  <span className="text-xs font-black">最多 8 人</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-[#8C6A58]/50 uppercase tracking-widest pl-1">游玩日期</label>
                <div className="h-14 bg-[#FBF9F8] rounded-2xl flex items-center px-4 gap-2 border border-black/5">
                  <Calendar size={14} className="text-[#8C6A58]" />
                  <span className="text-xs font-black">今天</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-[#8C6A58]/50 uppercase tracking-widest pl-1">集合时间</label>
                <div className="h-14 bg-[#FBF9F8] rounded-2xl flex items-center px-4 gap-2 border border-black/5">
                  <Clock size={14} className="text-[#8C6A58]" />
                  <span className="text-xs font-black">14:00</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2 px-2">
            <span className="w-1 h-3 bg-[#9C1B1F] rounded-full" />
            <h3 className="text-sm font-black text-[#38100E]">队伍设置</h3>
          </div>
          <div className="bg-white rounded-[32px] p-6 border border-black/5 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FBF9F8] flex items-center justify-center text-[#8C6A58]">
                  <ExternalLink size={16} />
                </div>
                <span className="text-xs font-black">是否公开</span>
              </div>
              <div className="w-12 h-6 rounded-full bg-black/5 relative">
                <div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-white shadow-sm" />
              </div>
            </div>
            <div className="h-[1px] bg-black/5" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FBF9F8] flex items-center justify-center text-[#8C6A58]">
                  <Lock size={16} />
                </div>
                <span className="text-xs font-black">加入方式</span>
              </div>
              <span className="text-[10px] font-black text-[#9C1B1F] uppercase tracking-widest">队伍码加入</span>
            </div>
          </div>
        </section>

        <div className="bg-[#F5DDA2]/10 rounded-2xl p-5 border border-[#F5DDA2]/30 flex gap-3">
          <Info size={18} className="text-[#9C1B1F] shrink-0" />
          <p className="text-[10px] font-bold text-[#8C6A58] leading-relaxed">创建队伍后，你可以将生成的专属队伍码或二维码分享给好友。队员加入后，你们可以一起查看任务进度、集合提醒，并共同完成现场英雄挑战。</p>
        </div>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 p-6 bg-white/95 backdrop-blur-xl border-t border-black/5 z-20">
        <button onClick={onCreate} className="w-full h-14 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm shadow-xl shadow-[#9C171D]/20 active:scale-95 transition-all">
          创建队伍
        </button>
      </footer>
    </motion.div>
  );
}

type JoinTeamPageProps = {
  isDevMode: boolean;
  onClose: () => void;
  onJoin: () => void;
};

export function JoinTeamPage({ isDevMode, onClose, onJoin }: JoinTeamPageProps) {
  const [code, setCode] = useState('');
  const [errorType, setErrorType] = useState<null | 'not_exist' | 'full' | 'ended'>(null);

  return (
    <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="fixed inset-0 z-[1100] bg-[#FBF9F8] overflow-y-auto flex flex-col">
      <header className="h-16 px-6 bg-white border-b border-black/5 flex items-center justify-between shrink-0 sticky top-0 z-10">
        <button onClick={onClose} className="p-2 -ml-2 text-[#38100E]"><ArrowLeft size={24} strokeWidth={3} /></button>
        <h2 className="text-lg font-black text-[#38100E]">加入队伍</h2>
        <div className="w-10" />
      </header>

      <div className="flex-1 px-6 pt-10 pb-12 space-y-12 flex flex-col items-center">
        <div className="w-full space-y-6 text-center">
          <div>
            <h3 className="text-xl font-black text-[#38100E]">输入队伍码</h3>
            <p className="mt-2 text-xs font-bold text-[#8C6A58]/50">问问你的队长，获取 6 位专属代码</p>
          </div>

          <div className="flex justify-center gap-3">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div key={i} className={`w-12 h-16 rounded-2xl border-2 flex items-center justify-center text-xl font-black ${code.length > i ? 'border-[#9C1B1F] bg-[#9C1B1F]/5 text-[#9C1B1F]' : 'border-black/5 bg-white text-[#38100E]'}`}>
                {code[i] || ''}
              </div>
            ))}
            <input autoFocus maxLength={6} value={code} onChange={(e) => setCode(e.target.value.toUpperCase())} className="absolute inset-0 opacity-0 cursor-default" />
          </div>

          <button disabled={code.length < 6} onClick={onJoin} className={`w-full h-14 rounded-2xl font-black text-sm shadow-xl transition-all active:scale-95 flex items-center justify-center ${code.length === 6 ? 'bg-[#9C1B1F] text-[#FFD36B] shadow-[#9C171D]/20' : 'bg-[#FBF9F8] text-[#8C6A58]/20 shadow-none'}`}>
            加入队伍
          </button>
        </div>

        <div className="flex flex-col items-center gap-4 w-full">
          <div className="flex items-center gap-4 w-full px-10">
            <div className="h-[1px] flex-1 bg-black/5" />
            <span className="text-[10px] font-black text-[#8C6A58]/30">OR</span>
            <div className="h-[1px] flex-1 bg-black/5" />
          </div>
          <button className="flex items-center gap-3 px-8 h-14 rounded-full bg-white border border-black/5 text-sm font-black text-[#38100E] shadow-sm active:scale-95 transition-all">
            <QrCode size={20} className="text-[#9C1B1F]" />
            扫码加入队伍
          </button>
        </div>

        <div className="bg-[#F5DDA2]/10 rounded-3xl p-6 border border-[#F5DDA2]/30 space-y-4">
          <p className="text-[10px] font-bold text-[#8C6A58] leading-relaxed text-center">每个队伍都有独立的任务进度。通过队伍码加入后，你将自动同步该队伍的当前关卡，并与成员们在同一个剧情节点展开体验。</p>

          {isDevMode && (
            <>
              <div className="h-[1px] bg-black/5 mx-4" />

              <div className="space-y-2">
                <span className="text-[9px] font-black text-[#8C6A58]/30 uppercase tracking-widest block text-center mb-3">调试：模拟错误状态</span>
                <div className="flex flex-wrap justify-center gap-2">
                  {[
                    { id: 'not_exist', label: '队伍不存在' },
                    { id: 'full', label: '人数已满' },
                    { id: 'ended', label: '体验已结束' },
                  ].map((item) => (
                    <button key={item.id} onClick={() => setErrorType(item.id as 'not_exist' | 'full' | 'ended')} className="px-3 py-1.5 rounded-lg bg-white border border-black/5 text-[10px] font-black text-[#8C6A58]">
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <AnimatePresence>
        {errorType && (
          <div className="fixed inset-0 z-[1200] flex items-center justify-center px-10">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setErrorType(null)} className="absolute inset-0 bg-[#38100E]/90 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="relative w-full bg-white rounded-[48px] p-8 text-center shadow-2xl">
              <div className="w-20 h-20 rounded-full bg-[#9C1B1F]/10 mx-auto -mt-18 shadow-xl flex items-center justify-center border-4 border-white text-[#9C1B1F]">
                <AlertCircle size={36} strokeWidth={3} />
              </div>
              <h2 className="mt-6 text-2xl font-black text-[#38100E]">{errorType === 'not_exist' ? '找不到该队伍' : errorType === 'full' ? '队伍人数已满' : '体验已结束'}</h2>
              <p className="mt-2 text-[#8C6A58] text-sm font-bold leading-relaxed px-4">
                {errorType === 'not_exist'
                  ? '请检查 6 位队伍码是否输入正确，获取最新代码后再试。'
                  : errorType === 'full'
                    ? '该队伍由于安全限制已达上限 8 人。你可以自行创建新队伍。'
                    : '该队伍的英雄挑战已圆满达成，无法再加入新成员。'}
              </p>
              <div className="mt-8">
                <button onClick={() => setErrorType(null)} className="w-full h-14 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm">我知道了</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

type TeamDetailsPageProps = {
  onClose: () => void;
  onExit: () => void;
};

export function TeamDetailsPage({ onClose, onExit }: TeamDetailsPageProps) {
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  return (
    <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="fixed inset-0 z-[1100] bg-[#FBF9F8] overflow-y-auto flex flex-col">
      <header className="h-16 px-6 bg-white border-b border-black/5 flex items-center justify-between shrink-0 sticky top-0 z-10">
        <button onClick={onClose} className="p-2 -ml-2 text-[#38100E]"><ArrowLeft size={24} strokeWidth={3} /></button>
        <h2 className="text-lg font-black text-[#38100E]">队伍详情</h2>
        <button className="p-2 -mr-2 text-[#8C6A58]/60"><Share2 size={22} /></button>
      </header>

      <div className="flex-1 px-6 pt-6 pb-40 space-y-8">
        <div className="bg-white rounded-[32px] p-6 border border-black/5 shadow-sm space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-black text-[#38100E]">冠军侯小队</h3>
              <p className="text-xs font-bold text-[#8C6A58] mt-1">霍去病 · 封狼居胥挑战线</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#9C1B1F]/10 text-[#9C1B1F] text-[10px] font-black uppercase">进行中</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <span className="text-[9px] font-black text-[#8C6A58]/40 uppercase tracking-widest pl-1">队伍人数</span>
              <div className="h-12 bg-[#FBF9F8] rounded-2xl flex items-center px-4 gap-2 border border-black/5">
                <Users size={14} className="text-[#8C6A58]" />
                <span className="text-[11px] font-black text-[#38100E]">5 / 8</span>
              </div>
            </div>
            <div className="space-y-1">
              <span className="text-[9px] font-black text-[#8C6A58]/40 uppercase tracking-widest pl-1">集合时间</span>
              <div className="h-12 bg-[#FBF9F8] rounded-2xl flex items-center px-4 gap-2 border border-black/5">
                <Clock size={14} className="text-[#8C6A58]" />
                <span className="text-[11px] font-black text-[#38100E]">14:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#38100E] rounded-[40px] p-8 text-center text-[#FFD36B] relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#9C1B1F]/20 rounded-full -mr-16 -mt-16 blur-2xl" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">Team Access Code</span>
          <div className="mt-4 text-4xl font-black tracking-[0.2em] font-mono">A12345</div>

          <div className="mt-10 mb-8 mx-auto w-40 h-40 bg-white rounded-3xl p-4 relative border-[6px] border-[#9C1B1F]/20">
            <QrCode size="100%" className="text-[#38100E]" />
          </div>

          <button className="w-full h-14 rounded-2xl bg-[#FFD36B] text-[#38100E] font-black text-sm active:scale-95 transition-all flex items-center justify-center gap-2">
            <Share2 size={18} />
            邀请好友加入
          </button>
        </div>

        <section className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-sm font-black text-[#38100E]">队伍成员 (5)</h3>
            <span className="text-[10px] font-black text-[#8C6A58]/40">Active Now</span>
          </div>
          <div className="bg-white rounded-[32px] p-2 border border-black/5 shadow-sm">
            {[
              { name: '张三', role: '队长', img: 'https://i.pravatar.cc/100?u=1' },
              { name: '李四', role: '队员', img: 'https://i.pravatar.cc/100?u=2' },
              { name: '王五', role: '队员', img: 'https://i.pravatar.cc/100?u=3' },
              { name: '赵六', role: '队员', img: 'https://i.pravatar.cc/100?u=4' },
              { name: '小火苗', role: '队员', img: 'https://i.pravatar.cc/100?u=5' },
            ].map((user, i) => (
              <div key={user.name} className={`flex items-center justify-between p-4 px-5 ${i !== 4 ? 'border-b border-black/5' : ''}`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border-2 border-[#F5DDA2]/30 overflow-hidden bg-gray-100">
                    <img src={user.img} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-[#38100E]">{user.name}</p>
                    <span className={`text-[9px] font-black uppercase px-1.5 py-0.5 rounded-md ${user.role === '队长' ? 'bg-[#9C1B1F] text-white' : 'bg-[#FBF9F8] text-[#8C6A58]/40'}`}>
                      {user.role}
                    </span>
                  </div>
                </div>
                {user.role !== '队长' && <button className="text-[9px] font-black text-[#8C6A58]/30 uppercase tracking-tighter">移出</button>}
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-sm font-black text-[#38100E] px-2 italic">队伍任务进度</h3>
          <div className="bg-white rounded-[32px] p-8 border border-black/5 shadow-sm space-y-8">
            {[
              { stage: 'Stage 01', name: '誓师出征', status: 'completed' },
              { stage: 'Stage 02', name: '漠北追击', status: 'active' },
              { stage: 'Stage 03', name: '战鼓挑战', status: 'locked' },
            ].map((item, i) => (
              <div key={item.name} className="relative flex items-center gap-5">
                {i !== 2 && <div className="absolute left-[15px] top-8 w-0.5 h-10 bg-black/5" />}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10 ${
                  item.status === 'completed' ? 'bg-green-500 text-white' :
                  item.status === 'active' ? 'bg-[#9C1B1F] text-white shadow-lg shadow-[#9C171D]/20 animate-pulse' :
                  'bg-gray-100 text-gray-300'
                }`}>
                  {item.status === 'completed' ? <Check size={18} strokeWidth={3} /> : <span className="text-[10px] font-black">{i + 1}</span>}
                </div>
                <div className="flex-1">
                  <span className={`text-[9px] font-black uppercase tracking-widest ${item.status === 'active' ? 'text-[#9C1B1F]' : 'text-[#8C6A58]/40'}`}>{item.stage}</span>
                  <h4 className={`text-sm font-black ${item.status === 'active' ? 'text-[#38100E]' : 'text-[#8C6A58]/60'}`}>{item.name}</h4>
                </div>
                {item.status === 'active' && <span className="text-[9px] font-black text-[#9C1B1F] px-2 py-0.5 bg-[#9C1B1F]/10 rounded-md">队员正在打卡</span>}
              </div>
            ))}
          </div>
        </section>

        <div className="p-6 bg-[#9C1B1F]/5 rounded-[32px] border border-[#9C1B1F]/10 flex flex-col items-center text-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#9C1B1F] shadow-sm">
            <AlertCircle size={24} />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-black text-[#38100E]">集合节点提醒</h4>
            <p className="text-[11px] font-bold text-[#8C6A58] leading-relaxed">当前处于“漠北追击”核心点，还有 1 名队员（小火苗）尚未到达集合圈 30 米范围内。</p>
          </div>
          <div className="flex gap-2 w-full">
            <button className="flex-1 h-12 rounded-xl bg-[#9C1B1F] text-white font-black text-xs">发送一键提醒</button>
            <button className="h-12 w-12 rounded-xl bg-white border border-black/5 flex items-center justify-center text-[#38100E]"><MessageCircle size={18} /></button>
          </div>
        </div>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 p-6 bg-white/95 backdrop-blur-xl border-t border-black/5 flex flex-col gap-2 z-20">
        <button onClick={onClose} className="w-full h-14 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm shadow-xl shadow-[#9C171D]/20 active:scale-95 transition-all">
          返回当前体验
        </button>
        <button onClick={() => setShowExitConfirm(true)} className="w-full py-4 text-[10px] font-black text-[#8C6A58]/40 uppercase tracking-widest">
          退出队伍
        </button>
      </footer>

      <AnimatePresence>
        {showExitConfirm && (
          <div className="fixed inset-0 z-[1200] flex items-center justify-center px-10">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowExitConfirm(false)} className="absolute inset-0 bg-[#38100E]/90 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="relative w-full bg-white rounded-[48px] p-8 text-center shadow-2xl">
              <div className="w-20 h-20 rounded-full bg-[#9C1B1F]/10 mx-auto -mt-18 shadow-xl flex items-center justify-center border-4 border-white text-[#9C1B1F]">
                <LogOut size={36} strokeWidth={3} />
              </div>
              <h2 className="mt-6 text-2xl font-black text-[#38100E]">确认退出队伍？</h2>
              <p className="mt-2 text-[#8C6A58] text-sm font-bold leading-relaxed px-4">退出后你将无法继续查看该队伍的任务进度和实时位置，需要重新获取队伍码由队长审核确认后方可再次加入。</p>
              <div className="mt-8 flex gap-3">
                <button onClick={() => setShowExitConfirm(false)} className="flex-1 h-14 rounded-2xl bg-[#FBF9F8] text-[#8C6A58] font-black text-sm">取消</button>
                <button onClick={() => { setShowExitConfirm(false); onExit(); }} className="flex-1 h-14 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm shadow-lg shadow-[#9C171D]/20">确认退出</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
