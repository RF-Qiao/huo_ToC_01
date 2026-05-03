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
    <div className="min-h-screen bg-[#FBF9F8] px-8 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center py-20">
        <div className="w-24 h-24 bg-[#9C1B1F] rounded-[40px] flex items-center justify-center shadow-2xl mb-8">
          <Flame size={48} className="text-[#FFD36B]" />
        </div>
        <h2 className="text-3xl font-black text-[#38100E]">登录黄火火</h2>
        <p className="mt-2 text-sm font-bold text-[#8C6A58]/60">开启你的英雄体验</p>

        <div className="w-full mt-16 space-y-4">
          <button
            onClick={onWechatLogin}
            className={`w-full h-16 rounded-3xl bg-[#07C160] text-white font-black text-sm flex items-center justify-center gap-3 active:scale-95 transition-all ${!agreed ? 'opacity-50' : ''}`}
          >
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <MessageCircle size={16} fill="white" />
            </div>
            微信一键登录
          </button>
          <button
            onClick={onPhoneLogin}
            className={`w-full h-16 rounded-3xl bg-white border border-black/5 text-[#38100E] font-black text-sm flex items-center justify-center gap-3 active:scale-95 transition-all ${!agreed ? 'opacity-50' : ''}`}
          >
            <Smartphone size={20} />
            手机号登录
          </button>
          <button onClick={onPreview} className="w-full h-12 text-[#8C6A58]/40 font-black text-xs uppercase tracking-widest">
            先看看
          </button>
        </div>
      </div>

      <div className="py-12 flex items-start gap-3">
        <button
          onClick={onToggleAgreed}
          className={`w-5 h-5 rounded-md border-2 shrink-0 transition-colors flex items-center justify-center ${agreed ? 'bg-[#9C1B1F] border-[#9C1B1F] text-[#FFD36B]' : 'border-black/5'}`}
        >
          {agreed && <Check size={14} strokeWidth={4} />}
        </button>
        <div className="text-[10px] font-bold text-[#8C6A58]/60 leading-relaxed">
          我已阅读并同意：
          <br />
          <span className="text-[#38100E] underline">《用户协议》</span> 与 <span className="text-[#38100E] underline">《隐私政策》</span>
        </div>
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
    <div className="min-h-screen bg-white px-8 pt-20">
      <button onClick={onBack} className="mb-12 p-2 -ml-2">
        <ArrowLeft size={24} strokeWidth={3} className="text-[#38100E]" />
      </button>
      <h2 className="text-3xl font-black text-[#38100E]">手机号登录</h2>
      <p className="mt-2 text-sm font-bold text-[#8C6A58]/40 mb-12">未注册手机号将自动创建账号</p>

      <div className="space-y-6">
        <div className="bg-[#FBF9F8] rounded-2xl p-5 border border-black/5 focus-within:border-[#9C1B1F] transition-all">
          <label className="text-[10px] font-black text-[#8C6A58]/20 uppercase tracking-widest">Phone Number</label>
          <input type="tel" placeholder="请输入手机号" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full text-base font-black text-[#38100E] outline-none bg-transparent mt-1" />
        </div>
        <div className="flex gap-4">
          <div className="flex-1 bg-[#FBF9F8] rounded-2xl p-5 border border-black/5 focus-within:border-[#9C1B1F] transition-all">
            <label className="text-[10px] font-black text-[#8C6A58]/20 uppercase tracking-widest">Code</label>
            <input type="text" placeholder="输入验证码" value={code} onChange={(e) => setCode(e.target.value)} className="w-full text-base font-black text-[#38100E] outline-none bg-transparent mt-1" />
          </div>
          <button onClick={startTimer} disabled={count > 0 || phone.length < 11} className="px-6 bg-[#38100E] text-[#FFD36B] rounded-2xl text-[10px] font-black uppercase tracking-widest disabled:opacity-50">
            {count > 0 ? `${count}s` : '获取验证码'}
          </button>
        </div>
      </div>

      <button onClick={onSubmit} disabled={!phone || !code} className="w-full h-16 rounded-3xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm mt-12 shadow-xl shadow-[#9C171D]/20 active:scale-95 transition-all disabled:opacity-50">
        登录
      </button>
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
