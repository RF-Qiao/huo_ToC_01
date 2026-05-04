import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Bell, Bluetooth, Camera, Check, Flame, MapPin, MessageCircle, Smartphone, Sparkles, Trophy, User as UserIcon, Zap } from 'lucide-react';
import { LoadingIndicator } from '../../components/prototype';
import type { PrototypeUserProfile } from '../types';

type SplashPageProps = {
  onComplete: () => void;
};

export function SplashPage({ onComplete }: SplashPageProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[5000] bg-[#38100E] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,#9C1B1F,transparent_70%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #FFD36B 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      </div>

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative z-10 flex flex-col items-center">
        <div className="w-32 h-32 bg-[#9C1B1F] rounded-[48px] flex items-center justify-center shadow-2xl border-4 border-[#FFD36B]/20 relative overflow-hidden group">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 opacity-40"
            style={{ background: 'conic-gradient(from 0deg, #FFD36B, transparent)' }}
          />
          <Flame size={64} className="text-[#FFD36B] relative z-10" />
        </div>
        <h1 className="mt-8 text-4xl font-black text-[#FFD36B] tracking-[1em] mr-[-1em]">黄火火</h1>
        <p className="mt-4 text-[10px] font-black text-[#FFD36B]/40 uppercase tracking-[0.4em]">开启你的英雄体验</p>
      </motion.div>

      <div className="absolute bottom-24 flex flex-col items-center gap-4">
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              className="w-1.5 h-1.5 rounded-full bg-[#FFD36B]"
            />
          ))}
        </div>
        <span className="text-[10px] font-black text-[#FFD36B]/60 tracking-widest uppercase">正在点燃火种...</span>
      </div>
    </div>
  );
}

type WelcomePageProps = {
  onSkip: () => void;
  onEnter: () => void;
};

export function WelcomePage({ onSkip, onEnter }: WelcomePageProps) {
  return (
    <div className="fixed inset-0 z-[4900] bg-[#FBF9F8] flex flex-col">
      <button
        onClick={onSkip}
        className="absolute top-12 right-6 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-black/5 text-[10px] font-black text-[#38100E] z-10"
      >
        跳过
      </button>

      <div className="flex-1 flex flex-col px-8 pt-24 pb-12 overflow-y-auto">
        <div className="w-full aspect-square bg-[#F5DDA2]/10 rounded-[64px] border-2 border-dashed border-[#9C1B1F]/10 flex items-center justify-center relative mb-12">
          <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 6, repeat: Infinity }} className="w-48 h-48 bg-[#9C1B1F] rounded-[48px] shadow-2xl flex items-center justify-center text-[#FFD36B]">
            <Trophy size={80} strokeWidth={1} />
          </motion.div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center text-[#9C1B1F]">
            <Sparkles size={32} />
          </div>
        </div>

        <h2 className="text-3xl font-black text-[#38100E] leading-tight text-center">
          开启属于你的
          <br />
          英雄旅程
        </h2>
        <p className="mt-4 text-sm font-bold text-[#8C6A58]/60 text-center leading-relaxed">购票、组队、打卡、挑战、获得勋章，体验沉浸式文化冒险。</p>

        <div className="mt-12 space-y-4">
          {[
            { title: '英雄剧情挑战', desc: '穿越古迹，扮演传奇英雄' },
            { title: '真实场景任务', desc: '基于LBS的线下实地打卡' },
            { title: '心流沉浸体验', desc: '生理数据监测与智慧讲解' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-3xl p-5 border border-black/5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-2xl bg-[#9C1B1F]/5 flex items-center justify-center text-[#9C1B1F]">
                {i === 0 ? <MessageCircle size={20} /> : i === 1 ? <MapPin size={20} /> : <Zap size={20} />}
              </div>
              <div>
                <h4 className="text-sm font-black text-[#38100E]">{item.title}</h4>
                <p className="text-[10px] font-bold text-[#8C6A58]/40">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-8 pb-12 bg-white/80 backdrop-blur-md">
        <button onClick={onEnter} className="w-full h-16 rounded-3xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm shadow-xl shadow-[#9C171D]/20 active:scale-95 transition-all">
          立即进入
        </button>
      </div>
    </div>
  );
}

type AuthSelectorPageProps = {
  agreed: boolean;
  onToggleAgreed: () => void;
  onWechatLogin: () => void;
  onPhoneLogin: () => void;
  onPreview: () => void;
};

export function AuthSelectorPage({ agreed, onToggleAgreed, onWechatLogin, onPhoneLogin, onPreview }: AuthSelectorPageProps) {
  return (
    <div className="min-h-dvh bg-gradient-to-b from-[#FFF5EC] via-[#FFFAF5] to-white flex flex-col overflow-hidden relative w-full max-w-md mx-auto">
      {/* 柔和装饰元素 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-16 w-72 h-72 bg-[#FFE0C8]/40 rounded-full blur-3xl" />
        <div className="absolute top-1/4 -left-20 w-56 h-56 bg-[#FFECD2]/30 rounded-full blur-2xl" />
        <div className="absolute top-[55%] right-1/4 w-32 h-32 bg-[#F5A623]/10 rounded-full blur-2xl" />
      </div>

      {/* 顶部品牌区域 */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 sm:px-8 relative z-10 min-h-0 py-4">
        {/* Logo 容器 */}
        <div className="relative mb-6 sm:mb-8">
          <div className="absolute inset-0 bg-[#F5A623]/15 rounded-full blur-2xl scale-150" />
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#FFFAF0] to-[#FFF5EC] rounded-full flex items-center justify-center shadow-lg shadow-[#F5A623]/10 relative border border-[#FFE0C8]/50">
            <Flame size={38} className="text-[#F5A623] sm:size-11" />
          </div>
        </div>

        <h2 className="text-[28px] sm:text-[32px] font-extrabold text-[#1A1A1A] tracking-tight">黄火火</h2>
        <p className="mt-2 sm:mt-2.5 text-sm sm:text-[15px] font-medium text-[#B0A097]">开启你的英雄体验之旅</p>

        {/* 特性标签 */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mt-8 sm:mt-10">
          {['文化探索', '沉浸打卡', '英雄挑战'].map((tag) => (
            <span key={tag} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FFF5EC] rounded-full text-[11px] sm:text-xs font-semibold text-[#E8963A] border border-[#FFE0C8]/60">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* 底部登录卡片 */}
      <div className="relative z-10 bg-white rounded-t-[28px] sm:rounded-t-[32px] px-5 sm:px-7 pt-7 sm:pt-9 pb-[max(2.5rem,env(safe-area-inset-bottom,2.5rem))] flex flex-col gap-2.5 sm:gap-3 shadow-[0_-8px_40px_rgba(0,0,0,0.04)]">
        {/* 手机号登录 */}
        <button
          onClick={onPhoneLogin}
          disabled={!agreed}
          className="w-full h-12 sm:h-[52px] rounded-2xl bg-gradient-to-r from-[#F5A623] to-[#F0901E] text-white font-semibold text-sm sm:text-[15px] flex items-center justify-center gap-2 sm:gap-2.5 active:scale-[0.98] transition-all disabled:opacity-40 shadow-[0_8px_24px_rgba(245,166,35,0.25)]"
        >
          <Smartphone size={18} className="sm:size-5" />
          手机号登录
        </button>

        {/* 微信登录 */}
        <button
          onClick={onWechatLogin}
          disabled={!agreed}
          className="w-full h-12 sm:h-[52px] rounded-2xl bg-[#F7F7F7] text-[#1A1A1A] font-semibold text-sm sm:text-[15px] flex items-center justify-center gap-2 sm:gap-2.5 active:scale-[0.98] transition-all disabled:opacity-40"
        >
          <MessageCircle size={18} className="text-[#07C160] sm:size-5" />
          微信一键登录
        </button>

        {/* 协议勾选 */}
        <div className="flex items-start gap-2 sm:gap-2.5 py-2 sm:py-2.5">
          <button
            onClick={onToggleAgreed}
            className={`w-[18px] h-[18px] rounded-md border-2 shrink-0 flex items-center justify-center mt-px transition-colors ${
              agreed ? 'bg-[#F5A623] border-[#F5A623] text-white' : 'border-[#DDD]'
            }`}
          >
            {agreed && <Check size={11} strokeWidth={4} />}
          </button>
          <span className="text-[10px] sm:text-[11px] text-[#B0A097] leading-relaxed">
            我已阅读并同意
            <span className="text-[#8B7B72] font-semibold underline decoration-[#DDD] underline-offset-2">《用户协议》</span> 与 <span className="text-[#8B7B72] font-semibold underline decoration-[#DDD] underline-offset-2">《隐私政策》</span>
          </span>
        </div>

        {/* 先看看 */}
        <button onClick={onPreview} className="w-full py-2.5 sm:py-3 text-[#C4B8AE] font-semibold text-xs sm:text-[13px] tracking-wide">
          先看看
        </button>
      </div>
    </div>
  );
}

type PhoneLoginPageProps = {
  onBack: () => void;
  onSubmit: () => void;
};

export function PhoneLoginPage({ onBack, onSubmit }: PhoneLoginPageProps) {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [count, setCount] = useState(0);

  const startTimer = () => {
    setCount(59);
    const timer = setInterval(() => {
      setCount((current) => {
        if (current <= 1) {
          clearInterval(timer);
          return 0;
        }
        return current - 1;
      });
    }, 1000);
  };

  return (
    <div className="min-h-dvh bg-gradient-to-b from-[#FFF5EC] to-white flex flex-col w-full max-w-md mx-auto">
      {/* 顶部导航区 */}
      <div className="px-5 sm:px-7 pt-[max(3rem,env(safe-area-inset-top,3rem))] pb-4 sm:pb-6">
        <button onClick={onBack} className="p-2 -ml-2 mb-4 sm:mb-6">
          <ArrowLeft size={22} strokeWidth={2.5} className="text-[#1A1A1A] sm:size-6" />
        </button>
        <h2 className="text-[26px] sm:text-[28px] font-extrabold text-[#1A1A1A] tracking-tight">手机号登录</h2>
        <p className="mt-1 sm:mt-1.5 text-[13px] sm:text-sm font-medium text-[#B0A097]">未注册手机号将自动创建账号</p>
      </div>

      {/* 表单区域 */}
      <div className="flex-1 px-5 sm:px-7 pt-4 sm:pt-6 space-y-3.5 sm:space-y-4">
        <div className="bg-[#F8F6F4] rounded-2xl p-4 sm:p-5 border border-transparent focus-within:border-[#F5A623]/40 focus-within:bg-[#FEFAF5] transition-all duration-200">
          <label className="text-[10px] sm:text-[11px] font-semibold text-[#C4B8AE] uppercase tracking-wider">手机号</label>
          <input
            type="tel"
            placeholder="请输入手机号"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full text-sm sm:text-[15px] font-semibold text-[#1A1A1A] outline-none bg-transparent mt-1 sm:mt-1.5 placeholder:text-[#D4CCC4]"
          />
        </div>

        <div className="flex gap-2.5 sm:gap-3">
          <div className="flex-1 bg-[#F8F6F4] rounded-2xl p-4 sm:p-5 border border-transparent focus-within:border-[#F5A623]/40 focus-within:bg-[#FEFAF5] transition-all duration-200">
            <label className="text-[10px] sm:text-[11px] font-semibold text-[#C4B8AE] uppercase tracking-wider">验证码</label>
            <input
              type="text"
              placeholder="输入验证码"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full text-sm sm:text-[15px] font-semibold text-[#1A1A1A] outline-none bg-transparent mt-1 sm:mt-1.5 placeholder:text-[#D4CCC4]"
            />
          </div>
          <button
            onClick={startTimer}
            disabled={count > 0 || phone.length < 11}
            className="shrink-0 self-stretch px-4 sm:px-5 bg-[#FFF5EC] text-[#E8963A] rounded-2xl text-xs sm:text-[13px] font-semibold disabled:opacity-40 active:scale-95 transition-all border border-[#FFE0C8]/60"
          >
            {count > 0 ? `${count}s后重发` : '获取验证码'}
          </button>
        </div>
      </div>

      {/* 登录按钮 */}
      <div className="px-5 sm:px-7 pt-6 sm:pt-8 pb-[max(2rem,env(safe-area-inset-bottom,2rem))]">
        <button
          onClick={onSubmit}
          disabled={!phone || !code}
          className="w-full h-12 sm:h-[52px] rounded-2xl bg-gradient-to-r from-[#F5A623] to-[#F0901E] text-white font-semibold text-sm sm:text-[15px] shadow-[0_8px_24px_rgba(245,166,35,0.25)] active:scale-[0.98] transition-all disabled:opacity-40 disabled:shadow-none"
        >
          登录
        </button>
      </div>
    </div>
  );
}

type ProfileSetupPageProps = {
  userProfile: PrototypeUserProfile;
  onProfileChange: (profile: PrototypeUserProfile) => void;
  onSubmit: () => void;
};

export function ProfileSetupPage({ userProfile, onProfileChange, onSubmit }: ProfileSetupPageProps) {
  return (
    <div className="min-h-screen bg-[#FBF9F8] px-8 pt-20">
      <h2 className="text-3xl font-black text-[#38100E]">完善你的英雄身份</h2>
      <p className="mt-2 text-sm font-bold text-[#8C6A58]/40 mb-16">你的信息仅用于体验展示和账号识别</p>

      <div className="flex flex-col items-center mb-16">
        <div className="relative">
          <div className="w-32 h-32 rounded-[48px] bg-white border border-black/5 shadow-inner flex items-center justify-center overflow-hidden">
            {userProfile.avatar ? <img src={userProfile.avatar} className="w-full h-full object-cover" /> : <UserIcon size={48} className="text-[#8C6A58]/10" />}
          </div>
          <button
            onClick={() => onProfileChange({ ...userProfile, avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${Math.random()}` })}
            className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#9C1B1F] rounded-2xl flex items-center justify-center text-[#FFD36B] shadow-xl border-4 border-[#FBF9F8]"
          >
            <Camera size={20} />
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-2xl p-5 border border-black/5">
          <label className="text-[10px] font-black text-[#8C6A58]/20 uppercase mb-1">英雄昵称</label>
          <input type="text" value={userProfile.nickname} onChange={(e) => onProfileChange({ ...userProfile, nickname: e.target.value })} className="w-full text-base font-black text-[#38100E] outline-none" />
        </div>
        <div className="grid grid-cols-3 gap-3">
          {['男', '女', '不填写'].map((gender) => (
            <button key={gender} className="h-14 rounded-2xl bg-white border border-black/5 text-xs font-black text-[#38100E] active:bg-[#9C1B1F] active:text-[#FFD36B] transition-colors">
              {gender}
            </button>
          ))}
        </div>
        <div className="bg-white rounded-2xl p-5 border border-black/5 flex items-center justify-between">
          <span className="text-xs font-black text-[#38100E]">出生日期</span>
          <span className="text-xs font-bold text-[#8C6A58]/40">2000-01-01</span>
        </div>
      </div>

      <button onClick={onSubmit} className="w-full h-16 rounded-3xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm mt-16 shadow-xl shadow-[#9C171D]/20 active:scale-95 transition-all">
        进入黄火火
      </button>
    </div>
  );
}

type PermissionGuidePageProps = {
  onSubmit: () => void;
};

export function PermissionGuidePage({ onSubmit }: PermissionGuidePageProps) {
  return (
    <div className="min-h-screen bg-white px-8 pt-20 flex flex-col pb-12">
      <h2 className="text-3xl font-black text-[#38100E]">开启完整体验</h2>
      <p className="mt-2 text-sm font-bold text-[#8C6A58]/40 mb-12">你可以随时在系统设置中关闭权限</p>

      <div className="flex-1 space-y-6">
        {[
          { icon: <MapPin size={24} />, title: '定位权限', desc: '用于任务打卡和地图导航' },
          { icon: <Bluetooth size={24} />, title: '蓝牙权限', desc: '用于连接体验手环展示实时数据' },
          { icon: <Bell size={24} />, title: '通知权限', desc: '用于接收任务和队伍提醒' },
          { icon: <Camera size={24} />, title: '相机权限', desc: '用于拍照提交任务完成凭证' },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-5 p-4 rounded-[32px] bg-[#FBF9F8] border border-black/5">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#9C1B1F]">{item.icon}</div>
            <div className="flex-1">
              <h4 className="text-sm font-black text-[#38100E]">{item.title}</h4>
              <p className="text-[10px] font-bold text-[#8C6A58]/60 leading-relaxed">{item.desc}</p>
            </div>
            <button className="w-10 h-10 rounded-full bg-white border border-black/5 flex items-center justify-center text-green-500">
              <Check size={20} />
            </button>
          </div>
        ))}
      </div>

      <div className="space-y-4 pt-8">
        <button onClick={onSubmit} className="w-full h-16 rounded-3xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm shadow-xl shadow-[#9C171D]/20">
          开启权限并进入
        </button>
        <button onClick={onSubmit} className="w-full py-2 text-xs font-black text-[#8C6A58]/40 uppercase tracking-widest">
          稍后再说
        </button>
      </div>
    </div>
  );
}

type EnteringTransitionPageProps = {
  onComplete: () => void;
};

export function EnteringTransitionPage({ onComplete }: EnteringTransitionPageProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[5000] bg-[#38100E] flex flex-col items-center justify-center">
      <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative">
        <div className="absolute inset-0 bg-[#FFD36B] blur-[80px] opacity-20 animate-pulse" />
        <div className="w-32 h-32 bg-[#9C1B1F] rounded-[48px] flex items-center justify-center relative z-10 border-4 border-[#FFD36B]/20">
          <Flame size={64} className="text-[#FFD36B]" />
        </div>
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }} className="absolute -inset-8 border-4 border-dashed border-[#FFD36B]/20 rounded-full" />
      </motion.div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-black text-[#FFD36B] italic">火种已点燃</h3>
        <p className="mt-2 text-xs font-bold text-[#FFD36B]/40 uppercase tracking-widest">欢迎进入黄火火英雄世界</p>
      </div>

      <div className="absolute bottom-24">
        <LoadingIndicator text="正在加载空间..." />
      </div>
    </div>
  );
}
