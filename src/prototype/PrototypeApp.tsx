/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  PieChart, 
  Pie, 
  Cell,
  LineChart,
  Line
} from 'recharts';
import { 
  Menu, 
  Search, 
  Home, 
  Compass, 
  Plus, 
  Minus,
  Zap,
  Watch,
  Bluetooth,
  Battery,
  User as UserIcon, 
  ChevronRight, 
  Sparkles, 
  Swords, 
  Mountain, 
  Shield, 
  Lightbulb, 
  Award, 
  Trees, 
  Palette, 
  Music,
  MapPin,
  Filter,
  Star,
  Ghost,
  Map,
  Edit2,
  FileText,
  MoreHorizontal,
  Heart,
  Coins,
  Radio,
  Flag,
  Package,
  ShoppingBag,
  MessageCircle,
  Share2,
  ArrowLeft,
  Calendar,
  Clock,
  Info,
  Smartphone,
  Lock,
  EyeOff,
  Activity,
  AlertCircle,
  CheckCircle2,
  Bell,
  Camera,
  LogOut,
  QrCode,
  RefreshCw,
  RotateCw,
  X,
  Flame,
  Check,
  HelpCircle,
  Navigation,
  Image as ImageIcon,
  History,
  Map as MapIcon,
  ExternalLink,
  ChevronDown,
  Hash,
  Target,
  Dna,
  Trophy,
  Timer,
  Download,
  TrendingUp,
  Users,
  Copy,
  Receipt,
  Undo2,
  Ticket,
  Settings,
  Layout,
  Headset,
  Play,
  CreditCard,
  Wallet,
  ShieldCheck,
  BellRing,
  RotateCcw,
  Upload,
  MessageSquare,
  FileCheck,
  CheckCheck,
  Mail,
  LocateFixed,
  WifiOff,
  CameraOff,
  BluetoothOff,
  Loader2,
  AlertTriangle,
  XCircle,
  Truck,
  Unlock,
  MousePointer2,
} from 'lucide-react';
import {
  ActionButton,
  BottomNav,
  EmptyState,
  HeroCard,
  LoadingIndicator,
  ProtoIcon,
  ProtoSectionTitle,
  QuickCard,
  Toast,
} from '../components/prototype';
import { HeroDetailView } from '../features/heroes';
import { TicketBookingView } from '../features/ticketing';

// --- Types ---

interface Soul {
  id: string;
  name: string;
  tagline: string;
  image: string;
  type: string;
}

// --- Mock Data ---

const isDevMode = import.meta.env.DEV;

const quickItems = [
  {
    icon: "ticket",
    title: "购票",
    desc: "购买体验票，现场核销入场",
    bg: "from-[#A8171E] to-[#D64B26]",
  },
  {
    icon: "play",
    title: "开始体验",
    desc: "进入剧情任务，开启英雄挑战",
    bg: "from-[#B51C23] to-[#7D1218]",
  },
  {
    icon: "users",
    title: "加入队伍",
    desc: "输入队伍码，和朋友一起玩",
    bg: "from-[#7E171D] to-[#C73820]",
  },
  {
    icon: "watch",
    title: "绑定手环",
    desc: "查看心率、血氧、心流状态",
    bg: "from-[#9B1D1D] to-[#D99938]",
  },
];

const heroes = [
  {
    name: "霍去病",
    tag: "少年将军",
    time: "90分钟",
    diff: "中等难度",
    tone: "from-[#621013] via-[#A4151C] to-[#E1A83A]",
  },
  {
    name: "花木兰",
    tag: "巾帼英雄",
    time: "75分钟",
    diff: "简单难度",
    tone: "from-[#711619] via-[#B0262A] to-[#E7B956]",
  },
  {
    name: "岳飞",
    tag: "精忠报国",
    time: "100分钟",
    diff: "中等难度",
    tone: "from-[#5C1115] via-[#9B1A1F] to-[#C78C2E]",
  },
];

function CurrentExperience() {
  return (
    <div className="space-y-3">
      <div className="rounded-[28px] p-[1px] bg-gradient-to-br from-[#F7CA62] via-[#B51B20] to-[#6E1114] shadow-xl shadow-[#7b1115]/15">
        <div className="rounded-[27px] p-4 bg-gradient-to-br from-[#8E1217] to-[#3C080B] text-white relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-36 h-36 rounded-full bg-[#F7C85D]/10" />
          <div className="flex justify-between items-start relative">
            <div>
              <div className="text-xs text-[#FFD875] font-bold tracking-wide">当前进行中</div>
              <h3 className="mt-1 text-xl font-black">霍去病体验</h3>
              <div className="mt-2 flex items-center gap-2 text-sm text-[#FFE7B0]">
                <ProtoIcon name="swords" size={15} />
                第2关 · 漠北追击
              </div>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-[#FFD36B] text-[#771116] flex items-center justify-center">
              <ProtoIcon name="flame" size={26} fill="#8F1015" />
            </div>
          </div>
          <div className="relative mt-4">
            <div className="flex justify-between text-xs text-[#FFEAC1] mb-2">
              <span>已完成 2/6 任务</span>
              <span>33%</span>
            </div>
            <div className="h-2.5 rounded-full bg-white/15 overflow-hidden">
              <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-[#FFD875] to-[#FF9E2C]" />
            </div>
          </div>
          <button className="relative mt-4 w-full h-11 rounded-2xl bg-[#FFD36B] text-[#701015] font-extrabold shadow-lg shadow-black/20">
            继续体验
          </button>
        </div>
      </div>

      <div className="rounded-[26px] p-5 bg-white border border-[#F5DDA2] text-center shadow-sm">
        <div className="mx-auto w-14 h-14 rounded-full bg-[#FFF4D7] text-[#B51B20] flex items-center justify-center mb-3">
          <ProtoIcon name="footprints" size={28} />
        </div>
        <div className="font-extrabold text-[#3B1110]">你还没有开始体验</div>
        <p className="mt-1 text-sm text-[#8C6A58]">先去选择英雄，开启挑战吧</p>
        <button className="mt-4 h-10 px-6 rounded-full bg-[#98161B] text-[#FFE6A3] font-bold">
          去看看英雄
        </button>
      </div>
    </div>
  );
}

// --- Prototypes ---

const PaymentSuccessView = ({ onClose, onViewCode }: { onClose: () => void, onViewCode: () => void }) => (
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
            { label: '票种数量', val: '单人体验票 x 1' }
          ].map(item => (
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

const VerificationCodeView = ({ onClose, onStart }: { onClose: () => void, onStart: () => void }) => (
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
             {/* Mock QR Pattern */}
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
          QR Code refreshes automatically every 5 minutes<br/>
          Expiring in 04:59
        </p>
      </div>

      <div className="bg-white rounded-[32px] p-6 border border-black/5 shadow-sm space-y-4">
        {[
          { icon: <ProtoIcon name="crown" size={14} />, label: '项目', val: '霍去病英雄体验' },
          { icon: <ProtoIcon name="mapPin" size={14} />, label: '网点', val: '蓝色港湾 · 核心柜台' },
          { icon: <ProtoIcon name="ticket" size={14} />, label: '票种', val: '单人体验票 x 1' }
        ].map(item => (
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

const CurrentExperienceView = ({ onClose, onCheckIn, onShowDetails }: { onClose: () => void, onCheckIn: () => void, onShowDetails: () => void }) => {
  const [isBandBound, setIsBandBound] = useState(true);

  const stages = [
    { name: '第1关 誓师出征', status: 'completed' },
    { name: '第2关 漠北追击', status: 'active' },
    { name: '第3关 战鼓挑战', status: 'locked' },
    { name: '第4关 智取敌营', status: 'locked' },
    { name: '第5关 封狼居胥', status: 'locked' },
    { name: '第6关 火种传承', status: 'locked' },
  ];

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
        {/* 当前英雄状态卡 */}
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

        {/* 当前任务主卡 */}
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

        {/* 任务进度区 */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-4 rounded-full bg-[#9C1B1F]" />
            <h2 className="text-lg font-black text-[#38100E]">任务进度</h2>
          </div>
          <div className="bg-white rounded-[32px] p-6 border border-black/5 shadow-sm">
             <div className="space-y-4">
                {stages.map((stage, i) => (
                  <div key={i} className="flex items-center gap-4">
                     <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 shadow-sm ${
                        stage.status === 'completed' ? 'bg-[#FFB800] text-black' : 
                        stage.status === 'active' ? 'bg-[#9C1B1F] text-white animate-pulse' : 'bg-[#FBF9F8] text-[#8C6A58]/20 border border-black/5'
                     }`}>
                        {stage.status === 'completed' ? <Check size={14} strokeWidth={4} /> : <span className="text-[10px] font-black">{i + 1}</span>}
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
           {/* 队伍状态区 */}
           <section className="col-span-1">
             <div className="bg-white rounded-[32px] p-5 border border-black/5 shadow-sm h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                   <h3 className="text-xs font-black text-[#38100E]">我的队伍</h3>
                   <span className="text-[10px] font-black text-[#9C1B1F]">5/8</span>
                </div>
                <p className="text-[10px] font-bold text-[#8C6A58] mb-4">冠军侯小队 · 已集合</p>
                <div className="flex -space-x-2 mb-6">
                   {[1, 2, 3, 4, 5].map(i => (
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

           {/* 心流手环状态区 */}
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

        {/* 现场帮助区 */}
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
};

const TeamHomeView = ({ 
  hasTeam, 
  onClose, 
  onCreate, 
  onJoin, 
  onViewDetails 
}: { 
  hasTeam: boolean, 
  onClose: () => void, 
  onCreate: () => void, 
  onJoin: () => void,
  onViewDetails: () => void
}) => (
  <motion.div 
    initial={{ x: '100%' }}
    animate={{ x: 0 }}
    exit={{ x: '100%' }}
    className="fixed inset-0 z-[1000] bg-[#FBF9F8] overflow-y-auto flex flex-col"
  >
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
              <button 
                onClick={onCreate}
                className="w-full h-14 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm shadow-xl shadow-[#9C171D]/20 active:scale-95 transition-all"
              >
                创建队伍
              </button>
              <button 
                onClick={onJoin}
                className="w-full h-14 rounded-2xl border-2 border-black/5 text-[#38100E] font-black text-sm active:scale-95 transition-all"
              >
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
                 <div className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[10px] font-black">
                    5/8人
                 </div>
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
                 <button 
                   onClick={onViewDetails}
                   className="flex-1 h-12 rounded-xl bg-[#FFD36B] text-[#38100E] font-black text-xs active:scale-95 transition-all"
                 >
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
                    {[1,2,3,4,5].map(i => (
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

const CreateTeamView = ({ onClose, onCreate }: { onClose: () => void, onCreate: () => void }) => (
  <motion.div 
    initial={{ x: '100%' }}
    animate={{ x: 0 }}
    exit={{ x: '100%' }}
    className="fixed inset-0 z-[1100] bg-[#FBF9F8] overflow-y-auto flex flex-col"
  >
    <header className="h-16 px-6 bg-white border-b border-black/5 flex items-center justify-between shrink-0 sticky top-0 z-10">
      <button onClick={onClose} className="p-2 -ml-2 text-[#38100E]"><ArrowLeft size={24} strokeWidth={3} /></button>
      <h2 className="text-lg font-black text-[#38100E]">创建队伍</h2>
      <div className="w-10" />
    </header>

    <div className="flex-1 px-6 pt-6 pb-32 space-y-8">
      {/* 2. 队伍基础信息区 */}
      <section className="space-y-4">
         <div className="flex items-center gap-2 px-2">
            <span className="w-1 h-3 bg-[#9C1B1F] rounded-full" />
            <h3 className="text-sm font-black text-[#38100E]">基础信息</h3>
         </div>
         <div className="bg-white rounded-[32px] p-6 border border-black/5 shadow-sm space-y-6">
            <div className="space-y-2">
               <label className="text-[10px] font-black text-[#8C6A58]/50 uppercase tracking-widest pl-1">队伍名称</label>
               <input 
                 defaultValue="冠军侯小队"
                 className="w-full h-14 bg-[#FBF9F8] rounded-2xl px-5 text-sm font-black text-[#38100E] focus:ring-2 focus:ring-[#9C1B1F]/20 focus:border-[#9C1B1F] outline-none transition-all"
               />
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

      {/* 3. 队伍设置区 */}
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
         <p className="text-[10px] font-bold text-[#8C6A58] leading-relaxed">
            创建队伍后，你可以将生成的专属队伍码或二维码分享给好友。队员加入后，你们可以一起查看任务进度、集合提醒，并共同完成现场英雄挑战。
         </p>
      </div>
    </div>

    <footer className="fixed bottom-0 left-0 right-0 p-6 bg-white/95 backdrop-blur-xl border-t border-black/5 z-20">
       <button 
         onClick={onCreate}
         className="w-full h-14 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm shadow-xl shadow-[#9C171D]/20 active:scale-95 transition-all"
       >
          创建队伍
       </button>
    </footer>
  </motion.div>
);

const JoinTeamView = ({ onClose, onJoin }: { onClose: () => void, onJoin: () => void }) => {
  const [code, setCode] = useState('');
  const [errorType, setErrorType] = useState<null | 'not_exist' | 'full' | 'ended'>(null);

  return (
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      className="fixed inset-0 z-[1100] bg-[#FBF9F8] overflow-y-auto flex flex-col"
    >
      <header className="h-16 px-6 bg-white border-b border-black/5 flex items-center justify-between shrink-0 sticky top-0 z-10">
        <button onClick={onClose} className="p-2 -ml-2 text-[#38100E]"><ArrowLeft size={24} strokeWidth={3} /></button>
        <h2 className="text-lg font-black text-[#38100E]">加入队伍</h2>
        <div className="w-10" />
      </header>

      <div className="flex-1 px-6 pt-10 pb-12 space-y-12 flex flex-col items-center">
        {/* 2. 队伍码输入区 */}
        <div className="w-full space-y-6 text-center">
           <div>
              <h3 className="text-xl font-black text-[#38100E]">输入队伍码</h3>
              <p className="mt-2 text-xs font-bold text-[#8C6A58]/50">问问你的队长，获取 6 位专属代码</p>
           </div>
           
           <div className="flex justify-center gap-3">
              {[0,1,2,3,4,5].map(i => (
                <div key={i} className={`w-12 h-16 rounded-2xl border-2 flex items-center justify-center text-xl font-black ${code.length > i ? 'border-[#9C1B1F] bg-[#9C1B1F]/5 text-[#9C1B1F]' : 'border-black/5 bg-white text-[#38100E]'}`}>
                   {code[i] || ''}
                </div>
              ))}
              <input 
                autoFocus
                maxLength={6}
                value={code}
                onChange={e => setCode(e.target.value.toUpperCase())}
                className="absolute inset-0 opacity-0 cursor-default"
              />
           </div>

           <button 
             disabled={code.length < 6}
             onClick={onJoin}
             className={`w-full h-14 rounded-2xl font-black text-sm shadow-xl transition-all active:scale-95 flex items-center justify-center ${code.length === 6 ? 'bg-[#9C1B1F] text-[#FFD36B] shadow-[#9C171D]/20' : 'bg-[#FBF9F8] text-[#8C6A58]/20 shadow-none'}`}
           >
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

        {/* 4. 说明区 */}
        <div className="bg-[#F5DDA2]/10 rounded-3xl p-6 border border-[#F5DDA2]/30 space-y-4">
           <p className="text-[10px] font-bold text-[#8C6A58] leading-relaxed text-center">
              每个队伍都有独立的任务进度。通过队伍码加入后，你将自动同步该队伍的当前关卡，并与成员们在同一个剧情节点展开体验。
           </p>
           
           {isDevMode && (
             <>
               <div className="h-[1px] bg-black/5 mx-4" />
               
               <div className="space-y-2">
                  <span className="text-[9px] font-black text-[#8C6A58]/30 uppercase tracking-widest block text-center mb-3">调试：模拟错误状态</span>
                  <div className="flex flex-wrap justify-center gap-2">
                     {[
                       { id: 'not_exist', label: '队伍不存在' },
                       { id: 'full', label: '人数已满' },
                       { id: 'ended', label: '体验已结束' }
                     ].map(item => (
                       <button 
                         key={item.id}
                         onClick={() => setErrorType(item.id as any)}
                         className="px-3 py-1.5 rounded-lg bg-white border border-black/5 text-[10px] font-black text-[#8C6A58]"
                       >
                         {item.label}
                       </button>
                     ))}
                  </div>
               </div>
             </>
           )}
        </div>
      </div>

      {/* 错误提示弹窗 */}
      <AnimatePresence>
         {errorType && (
            <div className="fixed inset-0 z-[1200] flex items-center justify-center px-10">
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setErrorType(null)} className="absolute inset-0 bg-[#38100E]/90 backdrop-blur-md" />
               <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="relative w-full bg-white rounded-[48px] p-8 text-center shadow-2xl">
                  <div className="w-20 h-20 rounded-full bg-[#9C1B1F]/10 mx-auto -mt-18 shadow-xl flex items-center justify-center border-4 border-white text-[#9C1B1F]">
                     <AlertCircle size={36} strokeWidth={3} />
                  </div>
                  <h2 className="mt-6 text-2xl font-black text-[#38100E]">
                     {errorType === 'not_exist' ? '找不到该队伍' : errorType === 'full' ? '队伍人数已满' : '体验已结束'}
                  </h2>
                  <p className="mt-2 text-[#8C6A58] text-sm font-bold leading-relaxed px-4">
                     {errorType === 'not_exist' ? '请检查 6 位队伍码是否输入正确，获取最新代码后再试。' : 
                      errorType === 'full' ? '该队伍由于安全限制已达上限 8 人。你可以自行创建新队伍。' : 
                      '该队伍的英雄挑战已圆满达成，无法再加入新成员。'}
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
};

const TeamDetailsView = ({ onClose, onExit }: { onClose: () => void, onExit: () => void }) => {
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  return (
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      className="fixed inset-0 z-[1100] bg-[#FBF9F8] overflow-y-auto flex flex-col"
    >
      <header className="h-16 px-6 bg-white border-b border-black/5 flex items-center justify-between shrink-0 sticky top-0 z-10">
        <button onClick={onClose} className="p-2 -ml-2 text-[#38100E]"><ArrowLeft size={24} strokeWidth={3} /></button>
        <h2 className="text-lg font-black text-[#38100E]">队伍详情</h2>
        <button className="p-2 -mr-2 text-[#8C6A58]/60"><Share2 size={22} /></button>
      </header>

      <div className="flex-1 px-6 pt-6 pb-40 space-y-8">
         {/* 2. 队伍信息卡 */}
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

         {/* 3. 队伍码区 */}
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

         {/* 4. 成员列表区 */}
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
                 { name: '小火苗', role: '队员', img: 'https://i.pravatar.cc/100?u=5' }
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
                    {user.role !== '队长' && (
                       <button className="text-[9px] font-black text-[#8C6A58]/30 uppercase tracking-tighter">移出</button>
                    )}
                 </div>
               ))}
            </div>
         </section>

         {/* 5. 当前进度区 */}
         <section className="space-y-4">
            <h3 className="text-sm font-black text-[#38100E] px-2 italic">队伍任务进度</h3>
            <div className="bg-white rounded-[32px] p-8 border border-black/5 shadow-sm space-y-8">
               {[
                 { stage: 'Stage 01', name: '誓师出征', status: 'completed' },
                 { stage: 'Stage 02', name: '漠北追击', status: 'active' },
                 { stage: 'Stage 03', name: '战鼓挑战', status: 'locked' }
               ].map((item, i) => (
                 <div key={item.name} className="relative flex items-center gap-5">
                    {i !== 2 && (
                       <div className="absolute left-[15px] top-8 w-0.5 h-10 bg-black/5" />
                    )}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10 ${
                      item.status === 'completed' ? 'bg-green-500 text-white' : 
                      item.status === 'active' ? 'bg-[#9C1B1F] text-white shadow-lg shadow-[#9C171D]/20 animate-pulse' : 
                      'bg-gray-100 text-gray-300'
                    }`}>
                       {item.status === 'completed' ? <Check size={18} strokeWidth={3} /> : <span className="text-[10px] font-black">{i+1}</span>}
                    </div>
                    <div className="flex-1">
                       <span className={`text-[9px] font-black uppercase tracking-widest ${item.status === 'active' ? 'text-[#9C1B1F]' : 'text-[#8C6A58]/40'}`}>{item.stage}</span>
                       <h4 className={`text-sm font-black ${item.status === 'active' ? 'text-[#38100E]' : 'text-[#8C6A58]/60'}`}>{item.name}</h4>
                    </div>
                    {item.status === 'active' && (
                       <span className="text-[9px] font-black text-[#9C1B1F] px-2 py-0.5 bg-[#9C1B1F]/10 rounded-md">队员正在打卡</span>
                    )}
                 </div>
               ))}
            </div>
         </section>

         {/* 6. 集合提醒区 */}
         <div className="p-6 bg-[#9C1B1F]/5 rounded-[32px] border border-[#9C1B1F]/10 flex flex-col items-center text-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#9C1B1F] shadow-sm">
               <AlertCircle size={24} />
            </div>
            <div className="space-y-1">
               <h4 className="text-sm font-black text-[#38100E]">集合节点提醒</h4>
               <p className="text-[11px] font-bold text-[#8C6A58] leading-relaxed">
                  当前处于“漠北追击”核心点，还有 1 名队员（小火苗）尚未到达集合圈 30 米范围内。
               </p>
            </div>
            <div className="flex gap-2 w-full">
               <button className="flex-1 h-12 rounded-xl bg-[#9C1B1F] text-white font-black text-xs">发送一键提醒</button>
               <button className="h-12 w-12 rounded-xl bg-white border border-black/5 flex items-center justify-center text-[#38100E]"><MessageCircle size={18} /></button>
            </div>
         </div>
      </div>

      {/* 7. 底部操作区 */}
      <footer className="fixed bottom-0 left-0 right-0 p-6 bg-white/95 backdrop-blur-xl border-t border-black/5 flex flex-col gap-2 z-20">
         <button 
           onClick={onClose}
           className="w-full h-14 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm shadow-xl shadow-[#9C171D]/20 active:scale-95 transition-all"
         >
            返回当前体验
         </button>
         <button 
           onClick={() => setShowExitConfirm(true)}
           className="w-full py-4 text-[10px] font-black text-[#8C6A58]/40 uppercase tracking-widest"
         >
            退出队伍
         </button>
      </footer>

      {/* 退出确认弹窗 */}
      <AnimatePresence>
         {showExitConfirm && (
            <div className="fixed inset-0 z-[1200] flex items-center justify-center px-10">
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowExitConfirm(false)} className="absolute inset-0 bg-[#38100E]/90 backdrop-blur-md" />
               <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="relative w-full bg-white rounded-[48px] p-8 text-center shadow-2xl">
                  <div className="w-20 h-20 rounded-full bg-[#9C1B1F]/10 mx-auto -mt-18 shadow-xl flex items-center justify-center border-4 border-white text-[#9C1B1F]">
                     <LogOut size={36} strokeWidth={3} />
                  </div>
                  <h2 className="mt-6 text-2xl font-black text-[#38100E]">确认退出队伍？</h2>
                  <p className="mt-2 text-[#8C6A58] text-sm font-bold leading-relaxed px-4">
                     退出后你将无法继续查看该队伍的任务进度和实时位置，需要重新获取队伍码由队长审核确认后方可再次加入。
                  </p>
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
};

const TaskCompleteView = ({ onClose, onNext, onViewProgress }: { onClose: () => void, onNext: () => void, onViewProgress: () => void }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[1000] bg-[#38100E] overflow-y-auto flex flex-col"
  >
    <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b from-[#9C1B1F] to-transparent opacity-50" />
    
    <div className="flex-1 px-6 pt-20 pb-32 flex flex-col items-center text-center relative z-10">
      {/* 1. 顶部状态区 */}
      <motion.div 
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: 'spring' }}
        className="w-32 h-32 rounded-full bg-[#FFD36B] shadow-[0_0_50px_rgba(255,211,107,0.4)] flex items-center justify-center relative mb-8"
      >
        <div className="absolute inset-0 rounded-full border-4 border-white/20 animate-ping" />
        <Trophy size={64} className="text-[#9C1B1F]" fill="currentColor" />
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="absolute -inset-4 border-2 border-dashed border-[#FFD36B]/30 rounded-full"
        />
      </motion.div>

      <h1 className="text-4xl font-black text-[#FFD36B] tracking-tighter mb-2">任务完成！</h1>
      <p className="text-white/60 font-bold mb-12">你已成功通关 第2关 · 漠北追击</p>

      {/* 2. 奖励展示区 */}
      <div className="w-full space-y-4 mb-12">
        <h3 className="text-xs font-black text-[#FFD36B]/40 uppercase tracking-[0.3em] mb-4">获得战利品</h3>
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: <Flame size={20} fill="currentColor" />, label: '火种', val: '+10', color: 'bg-[#9C1B1F]/20' },
            { icon: <Award size={20} />, label: '银票', val: '+5', color: 'bg-white/5' },
            { icon: <Dna size={20} />, label: '进度', val: '+1', color: 'bg-white/5' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className={`${item.color} rounded-3xl p-5 border border-white/5 flex flex-col items-center gap-2`}
            >
              <div className="text-[#FFD36B]">{item.icon}</div>
              <span className="text-lg font-black text-white">{item.val}</span>
              <span className="text-[10px] font-bold text-white/40">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. 剧情推进区 */}
      <div className="bg-white/5 rounded-[40px] p-8 border border-white/5 backdrop-blur-md w-full mb-8">
        <h3 className="text-[#FFD36B] font-black mb-3 italic">新的剧情已解锁</h3>
        <p className="text-sm text-white/70 leading-relaxed font-bold font-serif opacity-80">
          “战鼓已响，大漠深处传来的回响正是胜利的序曲。下一关「战鼓挑战」已经开启，匈奴主力就在前方，继续前进，完成你的封狼居胥之路。”
        </p>
      </div>

      {/* 4. 下一任务卡 */}
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

    {/* 5. 操作按钮区 */}
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

const RaceResultView = ({ onClose, onGoHome, onShowMallHome }: { onClose: () => void, onGoHome: () => void, onShowMallHome: () => void }) => {
  const [showPoster, setShowPoster] = useState(false);

  return (
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      className="fixed inset-0 z-[1100] bg-[#FBF9F8] overflow-y-auto flex flex-col"
    >
      {/* 1. 顶部荣誉区 */}
      <div className="h-[45vh] relative shrink-0 overflow-hidden bg-[#38100E]">
        <img 
          src="https://images.unsplash.com/photo-1599599810694-b5b3aa44a97d?q=80&w=2600&auto=format&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#9C1B1F]/80 via-transparent to-[#FBF9F8]" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-[10px] font-black text-[#FFD36B] uppercase tracking-[.4em] mb-3 block">Hero's Journey Complete</span>
            <h1 className="text-4xl font-black text-white tracking-tighter mb-2">恭喜完赛！</h1>
            <p className="text-white/70 font-bold">你已成功完成 霍去病英雄体验</p>
          </motion.div>

          {/* 勋章展示区 */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
            className="mt-10 relative"
          >
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
        {/* 勋章详述 */}
        <div className="bg-white rounded-[40px] p-8 text-center border border-black/5 shadow-xl shadow-black/5">
           <h2 className="text-2xl font-black text-[#38100E]">冠军侯火种勋章</h2>
           <p className="text-[#8C6A58]/50 text-[10px] font-black uppercase tracking-[0.2em] mt-1">Earned Today · {new Date().toLocaleDateString()}</p>
           <p className="mt-4 text-xs font-bold text-[#8C6A58] leading-relaxed px-4">
             本勋章颁发给完成「封狼居胥」英雄路线全部 6 项挑战的勇者。你已证明了自己的智慧、勇气与耐力。
           </p>
        </div>

        {/* 3. 本次体验数据区 */}
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
                { label: '超越玩家', val: '92%', icon: <TrendingUp size={16} /> }
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-3xl p-5 border border-black/5 shadow-sm flex items-center gap-4">
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

        {/* 4. 英雄成长总结区 */}
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

        {/* 5. 完赛商城推荐模块 */}
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
                   <p className="text-[10px] font-bold text-[#8C6A58]/60 leading-relaxed">
                     完成霍去病英雄体验后，你已解锁专属实体纪念购买资格。
                   </p>
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

        {/* 6. 其他推荐与返回 */}
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

      {/* 底部操作区 */}
      <footer className="fixed bottom-0 left-0 right-0 p-6 bg-white/95 backdrop-blur-xl border-t border-black/5 flex flex-col gap-3 z-30">
         <button className="w-full h-14 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm shadow-xl active:scale-95 transition-all">
            查看我的勋章
         </button>
         <button onClick={onGoHome} className="w-full h-14 rounded-2xl bg-[#FBF9F8] text-[#8C6A58] font-black text-sm active:scale-95 transition-all">
            返回首页
         </button>
      </footer>

      {/* 7. 分享海报弹窗 */}
      <AnimatePresence>
         {showPoster && (
            <div className="fixed inset-0 z-[1200] flex items-center justify-center px-6">
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowPoster(false)} className="absolute inset-0 bg-black/80 backdrop-blur-md" />
               <motion.div 
                 initial={{ scale: 0.9, y: 30 }} 
                 animate={{ scale: 1, y: 0 }} 
                 exit={{ scale: 0.9, y: 30 }} 
                 className="relative w-full max-w-sm"
               >
                  {/* Poster Preview */}
                  <div className="bg-[#38100E] rounded-[48px] overflow-hidden shadow-2xl p-1">
                     <div className="bg-white rounded-[46px] overflow-hidden flex flex-col aspect-[4/6]">
                        <div className="h-2/5 bg-[#9C1B1F] relative overflow-hidden p-8 flex flex-col justify-end">
                           <img 
                              src="https://images.unsplash.com/photo-1599599810694-b5b3aa44a97d?q=80&w=2600&auto=format&fit=crop" 
                              className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
                           />
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
                                    扫描左侧二维码<br/>开启你的英雄之旅
                                 </p>
                              </div>
                              <div className="w-16 h-16 bg-[#FBF9F8] rounded-xl border border-black/5 p-2 shrink-0">
                                 <QrCode size="100%" className="text-[#38100E]" />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Poster Actions */}
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
};

const PhotoSubmissionView = ({ onClose, onCompleteTask }: { onClose: () => void, onCompleteTask: () => void }) => {

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
        {/* 当前任务摘要卡 */}
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

        {/* 图片上传区 */}
        <div className="space-y-3">
           <h3 className="text-sm font-black text-[#38100E] px-2">上传任务照片</h3>
           <div className="grid grid-cols-2 gap-4">
              {images.map((img, i) => (
                <div key={i} className="aspect-square rounded-3xl overflow-hidden relative group border-2 border-[#F5DDA2]">
                   <img src={img} className="w-full h-full object-cover" />
                   <button 
                     onClick={() => setImages(prev => prev.filter((_, idx) => idx !== i))}
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

        {/* 备注区 */}
        <div className="space-y-3 pt-2">
           <h3 className="text-sm font-black text-[#38100E] px-2">补充说明 (选填)</h3>
           <textarea 
             placeholder="可以简单说明你完成任务的情况..."
             className="w-full h-32 bg-white rounded-[32px] border border-black/5 p-5 text-sm font-medium focus:ring-2 focus:ring-[#9C1B1F]/20 focus:border-[#9C1B1F] outline-none transition-all resize-none shadow-sm"
           />
        </div>

        {/* 提示区 */}
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

      {/* 底部固定提交栏 */}
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

      {/* 成功/失败 弹窗 */}
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
};

const TaskDetailsView = ({ onClose, onCheckIn, onSubmitPhoto }: { onClose: () => void, onCheckIn: () => void, onSubmitPhoto: () => void }) => (
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
      {/* 2. 任务头部卡 */}
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

      {/* 3. 剧情说明区 */}
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

      {/* 4. 任务目标区 */}
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
              { label: '上传照片并等待体验官线上/线下核准', done: false }
            ].map((goal, i) => (
              <div key={i} className="flex items-start gap-3">
                 <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${goal.done ? 'bg-green-500 text-white' : 'border-2 border-black/5 text-transparent'}`}>
                    {goal.done && <Check size={10} strokeWidth={4} />}
                 </div>
                 <span className={`text-xs font-black ${goal.done ? 'text-[#8C6A58]/40' : 'text-[#38100E]'}`}>{goal.label}</span>
              </div>
            ))}
         </div>
      </section>

      {/* 5. 完成规则/奖励区 (Grid) */}
      <div className="grid grid-cols-2 gap-4">
         <section className="space-y-3">
            <h3 className="text-sm font-black text-[#38100E] px-2 italic">完成规则</h3>
            <div className="bg-white rounded-[32px] p-5 border border-black/5 h-full space-y-3">
               {[
                 '实时定位校验',
                 '照片需包含景观',
                 '逾期自动失效',
                 '禁止虚假打卡'
               ].map(rule => (
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

    {/* 7. 操作按钮区 */}
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

const MapCheckInView = ({ onClose, onCheckedIn }: { onClose: () => void, onCheckedIn?: () => void }) => {
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
        {/* 当前任务信息卡 */}
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

        {/* 地图区域 */}
        <div className="flex-1 m-6 mt-4 bg-gray-100 rounded-[40px] overflow-hidden border border-black/5 relative shadow-inner">
           {/* Mock Map Background */}
           <div className="absolute inset-0 bg-[#F2EDE4] opacity-50">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
           </div>
           
           {/* Route Line (Dashed) */}
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

           {/* Current Location */}
           <motion.div 
             animate={{ scale: [1, 1.2, 1] }}
             transition={{ repeat: Infinity, duration: 2 }}
             className="absolute bottom-32 left-24 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center border-2 border-white shadow-lg"
           >
              <div className="w-3 h-3 rounded-full bg-blue-500" />
           </motion.div>

           {/* Target Point & Range Circle */}
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

           {/* Map Controls */}
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

        {/* 距离与打卡状态区 */}
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

      {/* 打卡按钮区 */}
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

      {/* 打卡成功弹窗 */}
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
};
/** --- Wristband Module Views --- */

// 页面一：手环绑定页
const WristbandBindingView = ({ onClose, onStartSearch }: { onClose: () => void, onStartSearch: () => void }) => (
  <motion.div 
    initial={{ y: '100%' }}
    animate={{ y: 0 }}
    exit={{ y: '100%' }}
    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
    className="fixed inset-0 z-[650] bg-[#FBF9F8] overflow-y-auto flex flex-col"
  >
    <header className="h-16 px-6 bg-white border-b border-black/5 flex items-center justify-between shrink-0 sticky top-0 z-10">
      <button onClick={onClose} className="p-2 -ml-2 text-[#38100E]"><ArrowLeft size={24} strokeWidth={3} /></button>
      <h2 className="text-lg font-black text-[#38100E]">绑定手环</h2>
      <button className="p-2 -mr-2 text-[#8C6A58]/60"><Info size={22} /></button>
    </header>

    <div className="flex-1 px-8 pt-10 pb-32 space-y-10">
      {/* 手环介绍区 */}
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-8">
           <div className="absolute inset-0 bg-[#FFD36B]/20 blur-3xl rounded-full" />
           <div className="relative w-48 h-48 bg-gradient-to-br from-[#FFD36B] to-[#F39C28] rounded-[48px] flex items-center justify-center shadow-2xl shadow-black/10">
              <Watch size={86} className="text-[#8E1217]" strokeWidth={1.5} />
              <div className="absolute -right-2 -bottom-2 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                 <Bluetooth size={24} className="text-[#3B82F6]" />
              </div>
           </div>
        </div>
        <h1 className="text-2xl font-black text-[#38100E]">绑定体验手环</h1>
        <p className="mt-3 text-sm text-[#8C6A58] leading-relaxed font-bold px-4">
          查看心率、血氧和心流状态，让你的英雄体验更沉浸。
        </p>
      </div>

      {/* 数据说明区 */}
      <div className="grid grid-cols-1 gap-4">
        {[
          { icon: <Activity size={20} />, title: '心率', desc: '体验过程中的心跳状态', color: 'text-red-500 bg-red-50' },
          { icon: <Zap size={20} />, title: '血氧', desc: '身体状态参考', color: 'text-blue-500 bg-blue-50' },
          { icon: <Flame size={20} />, title: '心流值', desc: '沉浸体验辅助指标', color: 'text-orange-500 bg-orange-50' }
        ].map(item => (
          <div key={item.title} className="bg-white rounded-3xl p-5 border border-black/5 shadow-sm flex items-center gap-5">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.color}`}>
              {item.icon}
            </div>
            <div>
              <h4 className="text-sm font-black text-[#38100E]">{item.title}</h4>
              <p className="text-[11px] font-bold text-[#8C6A58]/60 mt-0.5">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 权限提示区 */}
      <div className="p-5 bg-[#F5DDA2]/10 rounded-3xl border border-[#F5DDA2]/30 flex gap-4">
        <Info size={18} className="text-[#9C1B1F] shrink-0 mt-0.5" />
        <p className="text-[10px] font-bold text-[#8C6A58]/70 leading-relaxed">
          绑定手环需要开启蓝牙权限。数据仅用于本次体验展示和个人体验回顾，不作为医疗或心理诊断依据。
        </p>
      </div>
    </div>

    {/* 操作按钮区 */}
    <footer className="fixed bottom-0 left-0 right-0 p-8 bg-white/95 backdrop-blur-xl border-t border-black/5 flex flex-col gap-3">
       <button 
         onClick={onStartSearch}
         className="w-full h-14 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm shadow-xl active:scale-95 transition-all"
       >
         开始搜索手环
       </button>
       <button 
         onClick={onClose}
         className="w-full h-14 rounded-2xl bg-[#FBF9F8] text-[#8C6A58] font-black text-sm active:scale-95 transition-all"
       >
         暂不绑定，继续体验
       </button>
    </footer>
  </motion.div>
);

// 页面二：搜索设备页 (含蓝牙未开启状态)
const SearchDeviceView = ({ onClose, onBind }: { onClose: () => void, onBind: () => void }) => {
  const [isSearching, setIsSearching] = useState(true);
  const [bluetoothEnabled, setBluetoothEnabled] = useState(true);

  return (
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      className="fixed inset-0 z-[660] bg-[#FBF9F8] overflow-y-auto flex flex-col"
    >
      <header className="h-16 px-6 bg-white border-b border-black/5 flex items-center justify-between shrink-0 sticky top-0 z-10">
        <button onClick={onClose} className="p-2 -ml-2 text-[#38100E]"><ArrowLeft size={24} strokeWidth={3} /></button>
        <h2 className="text-lg font-black text-[#38100E]">搜索手环</h2>
        <div className="w-10" />
      </header>

      {!bluetoothEnabled ? (
        <div className="flex-1 flex flex-col items-center justify-center px-10 text-center space-y-8">
           <div className="w-24 h-24 rounded-[2.5rem] bg-gray-100 flex items-center justify-center text-gray-400">
              <EyeOff size={48} />
           </div>
           <div>
              <h1 className="text-2xl font-black text-[#38100E]">蓝牙未开启</h1>
              <p className="mt-3 text-sm font-bold text-[#8C6A58]/60">请打开手机蓝牙后重新搜索</p>
           </div>
           <button 
             onClick={() => setBluetoothEnabled(true)}
             className="w-full h-14 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm active:scale-95 transition-all shadow-lg"
           >
             重新搜索
           </button>
        </div>
      ) : (
        <div className="flex-1 p-6 space-y-10">
          {/* 搜索状态区 */}
          <div className="text-center py-10">
             <div className="relative inline-block mb-6">
                <motion.div 
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute inset-0 bg-[#9C1B1F] rounded-full"
                />
                <div className="w-20 h-20 bg-[#9C1B1F] rounded-full flex items-center justify-center text-white relative z-10 shadow-xl shadow-[#9C171D]/30">
                   <Bluetooth size={32} />
                </div>
             </div>
             <h3 className="text-lg font-black text-[#38100E]">正在搜索附近手环</h3>
             <p className="mt-2 text-xs font-bold text-[#8C6A58]/40 uppercase tracking-widest">Searching for nearby HHF-Bands</p>
             <p className="mt-4 text-[11px] font-bold text-[#8C6A58]/60">请确认手环已开启，并靠近手机。</p>
          </div>

          {/* 设备列表区 */}
          <div className="space-y-4">
             <div className="flex items-center gap-2 px-2">
                <span className="w-1 h-3 bg-[#9C1B1F] rounded-full" />
                <h3 className="text-sm font-black text-[#38100E]">可用设备</h3>
             </div>
             {[
               { name: 'HHF-Band-001', battery: '86%', status: '可绑定', active: true },
               { name: 'HHF-Band-002', battery: '72%', status: '可绑定', active: true },
               { name: 'HHF-Band-003', battery: '8%', status: '建议更换', active: false },
             ].map((device, i) => (
               <div key={i} className={`bg-white rounded-[28px] p-5 border border-black/5 shadow-sm flex items-center justify-between transition-all ${!device.active ? 'opacity-50' : 'active:bg-gray-50'}`}>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#FBF9F8] flex items-center justify-center text-[#9C1B1F]">
                       <Watch size={24} strokeWidth={2.5} />
                    </div>
                    <div>
                       <h4 className="text-sm font-black text-[#38100E]">{device.name}</h4>
                       <div className="flex items-center gap-3 mt-1">
                          <div className={`flex items-center gap-1 text-[10px] font-black ${device.active ? 'text-green-500' : 'text-red-500'}`}>
                             <Battery size={12} fill="currentColor" className="opacity-50" />
                             {device.battery}
                          </div>
                          <span className="text-[10px] font-bold text-[#8C6A58]/40">{device.status}</span>
                       </div>
                    </div>
                 </div>
                 <button 
                   onClick={() => device.active && onBind()} 
                   disabled={!device.active}
                   className={`h-9 px-6 rounded-full font-black text-xs transition-all active:scale-95 ${device.active ? 'bg-[#9C1B1F] text-[#FFD36B]' : 'bg-gray-100 text-[#8C6A58]/20'}`}
                 >
                   绑定
                 </button>
               </div>
             ))}
          </div>

          {/* 异常提示区 */}
          <div className="text-center py-6 px-4">
             <p className="text-[11px] font-bold text-[#8C6A58]/40 leading-relaxed">
                搜索不到设备？请打开手机蓝牙，或联系现场体验官。<br/>
                也可点击 <button onClick={() => setBluetoothEnabled(false)} className="text-[#9C1B1F] underline underline-offset-2">刷新重试</button>
             </p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

// 页面三：绑定成功页
const BindingSuccessView = ({ onClose, onViewStatus }: { onClose: () => void, onViewStatus: () => void }) => (
  <motion.div 
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    exit={{ scale: 0.9, opacity: 0 }}
    className="fixed inset-0 z-[670] bg-[#9C1B1F] overflow-y-auto flex flex-col"
  >
    <header className="h-16 px-6 flex items-center justify-between text-[#FFD36B] shrink-0">
      <button onClick={onClose}><X size={24} /></button>
      <span className="font-black">绑定出手</span>
      <div className="w-6" />
    </header>

    <div className="flex-1 flex flex-col items-center px-10 pt-10">
      {/* 1. 顶部成功反馈区 */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative mb-10"
      >
        <div className="absolute inset-0 bg-[#FFD36B]/20 blur-[60px] animate-pulse" />
        <div className="relative w-32 h-32 rounded-[2.5rem] bg-[#FFD36B] flex items-center justify-center shadow-2xl shadow-black/40">
           <Watch size={64} className="text-[#9C1B1F]" strokeWidth={1} />
           <motion.div 
             initial={{ scale: 0 }}
             animate={{ scale: 1 }}
             transition={{ delay: 0.5, type: 'spring' }}
             className="absolute -right-3 -bottom-3 w-12 h-12 bg-[#9B171C] text-[#FFD36B] rounded-2xl flex items-center justify-center border-4 border-[#FFD36B]"
           >
              <Check size={24} strokeWidth={4} />
           </motion.div>
        </div>
      </motion.div>

      <h2 className="text-3xl font-black text-[#FFD36B]">绑定成功</h2>
      <p className="mt-2 text-[#FFD36B]/60 font-bold uppercase tracking-widest text-xs">HHF-Band-001 已连接</p>

      {/* 2. 设备状态卡 */}
      <div className="w-full mt-12 bg-black/10 backdrop-blur-md rounded-[32px] p-6 border border-white/10 shadow-inner">
        <div className="flex items-center gap-2 mb-6">
           <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
           <span className="text-[10px] font-black text-[#FFD36B] uppercase tracking-widest">Device Status</span>
        </div>
        <div className="space-y-5">
           {[
             { label: '设备名称', val: 'HHF-Band-001', icon: <Watch size={14} /> },
             { label: '连接状态', val: '已连接', icon: <Bluetooth size={14} />, color: 'text-green-400' },
             { label: '手环电量', val: '86%', icon: <Battery size={14} /> },
             { label: '数据更新', val: '实时同步中', icon: <RefreshCw size={14} /> }
           ].map(item => (
             <div key={item.label} className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2 text-[#FFD36B]/40 font-bold">
                   {item.icon}
                   {item.label}
                </div>
                <span className={`font-black ${item.color || 'text-white'}`}>{item.val}</span>
             </div>
           ))}
        </div>
      </div>

      {/* 3. 下一步提示区 */}
      <div className="w-full mt-8 space-y-4">
         <h3 className="text-white font-black text-sm text-center">你现在可以</h3>
         <div className="grid grid-cols-1 gap-3">
            {[
              { icon: <Activity size={18} />, text: '查看心流状态' },
              { icon: <Edit2 size={18} />, text: '记录体验过程' },
              { icon: <FileText size={18} />, text: '完成后生成体验摘要' }
            ].map((cap, i) => (
              <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                 <div className="text-[#FFD36B]">{cap.icon}</div>
                 <span className="text-xs font-black text-white/80">{cap.text}</span>
              </div>
            ))}
         </div>
      </div>
    </div>

    {/* 操作按钮区 */}
    <footer className="p-8 pb-12 flex flex-col gap-3 shrink-0">
       <button 
         onClick={onViewStatus}
         className="h-14 rounded-2xl bg-[#FFD36B] text-[#9C1B1F] font-black shadow-2xl active:scale-95 transition-all text-sm uppercase tracking-wider"
       >
         查看心流状态
       </button>
       <button 
         onClick={onClose}
         className="h-14 rounded-2xl border-2 border-[#FFD36B]/20 text-[#FFD36B] font-black active:scale-95 transition-all text-sm"
       >
         返回当前体验
       </button>
    </footer>
  </motion.div>
);

// --- My Profile Module Views ---

const MyProfileView = ({ 
  onShowOrders, 
  onShowExperiences, 
  onShowMedals, 
  onShowWristband,
  onShowHelpCenter,
  onShowFeedback,
  onShowSettings,
  onShowSystemGallery,
  onShowMallHome,
  isLoggedIn = true,
  onLogin
}: { 
  onShowOrders: () => void, 
  onShowExperiences: () => void, 
  onShowMedals: () => void, 
  onShowWristband: () => void,
  onShowHelpCenter: () => void,
  onShowFeedback: () => void,
  onShowSettings: () => void,
  onShowSystemGallery: () => void,
  onShowMallHome: () => void,
  isLoggedIn?: boolean,
  onLogin?: () => void
}) => {
  const hasExperiences = true; // For simulation
  const hasMedals = true; // For simulation

  if (!isLoggedIn) {
     return (
        <div className="min-h-screen bg-[#FBF9F8] flex flex-col items-center justify-center p-8 text-center">
           <div className="w-24 h-24 rounded-full bg-[#9C1B1F]/5 flex items-center justify-center text-[#9C1B1F] mb-6">
              <UserIcon size={48} className="opacity-20" />
           </div>
           <h3 className="text-xl font-black text-[#38100E]">登录后查看你的英雄成长档案</h3>
           <p className="mt-2 text-xs font-bold text-[#8C6A58]/60 leading-relaxed uppercase tracking-widest">Login to Unlock Your Hero Archive</p>
           <button 
             onClick={onLogin}
             className="mt-12 w-full h-16 rounded-3xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm shadow-xl shadow-[#9C171D]/20 active:scale-95 transition-all"
           >
              立即登录
           </button>
        </div>
     );
  }

  return (
    <div className="pb-40 bg-[#FBF9F8]">
      {/* 1. 顶部用户身份区 */}
      <div className="relative pt-16 pb-12 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#9C1B1F] via-[#711619] to-[#38100E]" />
        
        {/* 火焰与勋章背景装饰 */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD36B]/10 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#9C1B1F]/40 rounded-full -ml-24 -mb-24 blur-3xl opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 pointer-events-none">
           <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        </div>
        
        <div className="relative z-10 flex items-center justify-between mb-10">
           <div className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-full border-4 border-[#FFD36B]/30 p-1 bg-white/10 shadow-2xl">
                <img src="https://i.pravatar.cc/200?u=myprofile" className="w-full h-full rounded-full object-cover" alt="avatar" />
              </div>
              <div className="space-y-1">
                <h2 className="text-2xl font-black text-[#FFD36B] italic">火种游客001</h2>
                <p className="text-white/40 text-[10px] font-bold tracking-widest uppercase">138****8888</p>
                <div className="mt-2 flex items-center gap-2">
                  <div className="px-3 py-1 rounded-full bg-[#FFD36B] text-[#38100E] text-[9px] font-black uppercase tracking-widest shadow-lg">
                    初级火种传承者
                  </div>
                  <div className="w-6 h-6 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-[#FFD36B]">
                    <ShieldCheck size={14} />
                  </div>
                </div>
              </div>
           </div>
           <button onClick={onShowSettings} className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-[#FFD36B]">
              <Settings size={20} />
           </button>
        </div>

        {/* 2. 用户资产区 */}
        <div className="relative z-10 grid grid-cols-4 gap-3">
          {[
            { label: '火种', val: '120', icon: <Flame size={14} fill="currentColor" /> },
            { label: '银票', val: '30', icon: <Coins size={14} /> },
            { label: '勋章', val: '3枚', icon: <Trophy size={14} /> },
            { label: '体验', val: '3次', icon: <Activity size={14} /> }
          ].map(asset => (
            <div key={asset.label} className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10 flex flex-col items-center shadow-lg">
              <div className="text-[#FFD36B] mb-1.5 opacity-60">{asset.icon}</div>
              <span className="text-base font-black text-white italic leading-none">{asset.val}</span>
              <span className="text-[8px] font-black text-white/40 mt-1 uppercase tracking-tighter">{asset.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 -mt-6 relative z-20 space-y-6">
        {/* 3. 我的订单区 */}
        <section className="bg-white rounded-[40px] p-6 shadow-xl shadow-black/5 border border-black/5">
          <div className="flex justify-between items-center mb-6 px-1">
            <h3 className="text-sm font-black text-[#38100E]">我的订单</h3>
            <button onClick={onShowOrders} className="text-[10px] font-black text-[#8C6A58]/30 flex items-center gap-1 uppercase tracking-widest">
              全部订单 <ChevronRight size={12} />
            </button>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: '待付款', icon: <CreditCard size={20} /> },
              { label: '待核销', icon: <Ticket size={20} /> },
              { label: '体验中', icon: <Navigation size={20} /> },
              { label: '退款/售后', icon: <Undo2 size={20} /> }
            ].map(item => (
              <button key={item.label} className="flex flex-col items-center gap-2 py-2 group active:scale-95 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#FBF9F8] flex items-center justify-center text-[#9C1B1F] shadow-inner group-hover:bg-[#9C1B1F]/5 transition-colors">
                  {item.icon}
                </div>
                <span className="text-[10px] font-black text-[#38100E] opacity-60">{item.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* 4. 最近体验区 */}
        <section className="space-y-3">
           <h3 className="text-sm font-black text-[#38100E] px-1">最近体验</h3>
           {!hasExperiences ? (
             <div className="bg-white rounded-[40px] p-10 border border-black/5 shadow-sm text-center">
                <div className="w-16 h-16 rounded-full bg-gray-50 mx-auto flex items-center justify-center text-gray-200 mb-4"><Map size={32} /></div>
                <p className="text-xs font-black text-[#8C6A58]/40">你还没有完成体验</p>
                <button className="mt-6 px-8 h-12 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-xs shadow-lg active:scale-95 transition-all">去选择英雄</button>
             </div>
           ) : (
             <div className="bg-white rounded-[40px] p-6 shadow-sm border border-black/5 overflow-hidden transition-all hover:bg-white active:scale-[0.99]">
               <div className="flex justify-between items-center mb-5">
                  <div className="flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                     <span className="text-[10px] font-black uppercase text-[#38100E]/40 tracking-widest">Last Journey</span>
                  </div>
                  <span className="text-[9px] font-black uppercase text-green-500 bg-green-50 px-2 py-0.5 rounded-md">已完赛</span>
               </div>
               <div className="flex gap-5">
                  <div className="w-24 h-24 rounded-[28px] bg-gray-100 overflow-hidden shrink-0 border border-black/5 shadow-inner">
                     <img src="https://images.unsplash.com/photo-1599599810694-b5b3aa44a97d?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" alt="hero" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                     <h4 className="text-xl font-black text-[#38100E]">霍去病</h4>
                     <p className="text-[10px] font-bold text-[#8C6A58]/60 uppercase tracking-[0.2em] mt-1 italic">封狼居胥挑战线</p>
                     
                     <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1">
                        <div className="text-[9px] font-bold text-[#8C6A58]/40 uppercase tracking-widest">任务: <span className="text-[#38100E]">6/6</span></div>
                        <div className="text-[9px] font-bold text-[#8C6A58]/40 uppercase tracking-widest">用时: <span className="text-[#38100E]">86min</span></div>
                     </div>

                     <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-[#9C1B1F]/5 text-[#9C1B1F]">
                           <Trophy size={12} fill="currentColor" />
                           <span className="text-[9px] font-black uppercase tracking-tighter">冠军侯火种勋章</span>
                        </div>
                        <button onClick={onShowExperiences} className="w-8 h-8 rounded-full bg-[#38100E] text-[#FFD36B] flex items-center justify-center active:scale-90 transition-all shadow-lg"><ChevronRight size={16} /></button>
                     </div>
                  </div>
               </div>
             </div>
           )}
        </section>

        {/* 5. 我的勋章区 */}
        <section className="bg-white rounded-[40px] p-6 shadow-sm border border-black/5">
          <div className="flex justify-between items-center mb-6 px-1">
            <h3 className="text-sm font-black text-[#38100E]">我的勋章</h3>
            <button onClick={onShowMedals} className="text-[10px] font-black text-[#9C1B1F] flex items-center gap-1 uppercase tracking-widest">
              查看全部 <ChevronRight size={12} />
            </button>
          </div>
          {!hasMedals ? (
             <div className="py-6 text-center">
                <p className="text-[10px] font-black text-[#8C6A58]/40 mb-4 italic">完成英雄任务即可点亮勋章</p>
                <button 
                  onClick={onShowMedals}
                  className="px-6 h-10 rounded-xl bg-gray-50 border border-black/5 text-[#38100E] font-black text-[10px] uppercase tracking-widest"
                >
                   去体验
                </button>
             </div>
          ) : (
             <div className="flex justify-between px-2">
                {[
                  { name: '冠军侯火种', img: 'https://cdn-icons-png.flaticon.com/512/10156/10156828.png' },
                  { name: '少年将军', img: 'https://cdn-icons-png.flaticon.com/512/10156/10156847.png' },
                  { name: '初入火种', img: 'https://cdn-icons-png.flaticon.com/512/10156/10156845.png' }
                ].map((medal, i) => (
                  <div key={i} className="flex flex-col items-center gap-3 group">
                     <div className="w-16 h-16 rounded-full bg-[#F5DDA2]/10 border-2 border-[#F5DDA2]/40 flex items-center justify-center p-3 shadow-lg shadow-[#F5DDA2]/10 group-active:scale-90 transition-all relative">
                        <div className="absolute inset-0 bg-[#FFD36B]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <img src={medal.img} className="w-full h-full object-contain relative z-10" alt={medal.name} />
                     </div>
                     <span className="text-[9px] font-black text-[#38100E] text-center uppercase tracking-tighter opacity-60 group-hover:opacity-100 transition-opacity">{medal.name}</span>
                  </div>
                ))}
             </div>
          )}
        </section>

        {/* 6. 火种商城入口区 */}
        <section className="space-y-3">
           <div className="flex items-center gap-2 px-1">
              <div className="w-1 h-3 bg-[#9C1B1F] rounded-full" />
              <h3 className="text-sm font-black text-[#38100E]">火种商城</h3>
           </div>
           <button 
             onClick={onShowMallHome}
             className="w-full bg-[#38100E] rounded-[40px] p-6 text-left relative overflow-hidden group shadow-2xl"
           >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#9C1B1F]/30 rounded-full -mr-16 -mt-16 blur-3xl group-hover:scale-125 transition-transform duration-700" />
              <div className="relative z-10 flex items-center gap-6">
                 <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-[#FFD36B] shadow-inner shrink-0">
                    <ShoppingBag size={28} />
                 </div>
                 <div className="flex-1 space-y-1">
                    <h4 className="text-base font-black text-[#FFD36B]">你已解锁限定纪念</h4>
                    <p className="text-[9px] font-bold text-white/40 leading-tight">查看英雄勋章、完赛纪念和<br/>城市限定周边</p>
                 </div>
                 <div className="flex -space-x-3 pr-2">
                    <div className="w-10 h-10 rounded-xl bg-white/20 border border-white/20 overflow-hidden shadow-lg"><img src="https://images.unsplash.com/photo-1599599810694-b5b3aa44a97d?q=80&w=50" className="w-full h-full object-cover" alt="item1" /></div>
                    <div className="w-10 h-10 rounded-xl bg-white/20 border border-white/20 overflow-hidden shadow-lg border-l-2"><img src="https://api.qrserver.com/v1/create-qr-code/?size=50x50&data=medal" className="w-full h-full object-cover invert opacity-40 px-2" alt="item2" /></div>
                 </div>
                 <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-[#FFD36B] active:scale-90 transition-all"><ChevronRight size={18} /></div>
              </div>
           </button>
        </section>

        {/* 7. 常用功能区 */}
        <section className="bg-white rounded-[40px] overflow-hidden shadow-sm border border-black/5">
          {[
            { label: '手环管理', icon: <Watch size={18} />, onClick: onShowWristband },
            { label: '优惠券', icon: <Award size={18} />, onClick: () => {} },
            { label: '客服帮助', icon: <HelpCircle size={18} />, onClick: onShowHelpCenter },
            { label: '意见反馈', icon: <MessageCircle size={18} />, onClick: onShowFeedback },
            { label: '系统演示', icon: <Layout size={18} />, onClick: onShowSystemGallery },
            { label: '设置', icon: <Settings size={18} />, onClick: onShowSettings },
            { label: '关于我们', icon: <Info size={18} />, onClick: () => {} }
          ].map((item, i, arr) => (
            <button 
              key={item.label} 
              onClick={item.onClick}
              className={`w-full h-14 px-8 flex items-center justify-between active:bg-gray-50 transition-all ${i !== arr.length - 1 ? 'border-b border-black/5' : ''}`}
            >
              <div className="flex items-center gap-4 text-[#38100E]">
                <div className="text-[#8C6A58]/20">{item.icon}</div>
                <span className="text-xs font-black uppercase tracking-tight">{item.label}</span>
              </div>
              <ChevronRight size={14} className="text-[#8C6A58]/10" />
            </button>
          ))}
        </section>

        {/* 8. 合规与服务区 */}
        <section className="py-6 px-4 space-y-4">
           <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              {['用户协议', '隐私政策', '权限说明', '未成年人保护说明'].map(txt => (
                <button key={txt} className="text-[10px] font-black text-[#8C6A58]/20 uppercase tracking-widest hover:text-[#9C1B1F] transition-colors">{txt}</button>
              ))}
           </div>
           <div className="text-center space-y-1">
              <p className="text-[8px] font-black text-[#8C6A58]/10 uppercase tracking-[0.4rem]">Huang Huo Huo v1.0.0</p>
              <p className="text-[8px] font-bold text-[#8C6A58]/10">Copyright © 2026 黄火火智慧文旅</p>
           </div>
        </section>

        <button className="w-full pt-10 flex items-center justify-center gap-2 text-[10px] font-black text-[#8C6A58]/20 uppercase tracking-[0.3em] hover:text-[#9C1B1F] transition-colors group">
          <LogOut size={16} className="group-hover:-translate-x-1 transition-transform" />
          退出登录
        </button>
      </div>
    </div>
  );
};

const MyOrdersView = ({ onClose }: { onClose: () => void }) => {
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
      color: 'text-orange-500 bg-orange-50'
    },
    { 
      status: '已完成', 
      title: '花木兰英雄体验', 
      type: '亲子体验票', 
      location: '蓝色港湾体验点', 
      date: '2026-04-20', 
      price: '169',
      color: 'text-green-500 bg-green-50'
    },
    { 
      status: '待付款', 
      title: '岳飞英雄体验', 
      type: '单人体验票', 
      location: '蓝色港湾体验点', 
      date: '-', 
      price: '99',
      color: 'text-red-500 bg-red-50'
    }
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

      {/* 2. 订单状态Tab */}
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
                  <span className="text-[10px] font-bold text-[#8C6A58]/40 uppercase tracking-widest">Order ID: HHF202604270{i+1}</span>
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
};

const MyExperiencesView = ({ onClose }: { onClose: () => void }) => {
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

      {/* 2. 数据概览区 */}
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
           { hero: '花木兰', route: '巾帼挑战线', status: '已完赛', tasks: '5/5', time: '72', flow: '82', medal: null }
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
};

const MyMedalsView = ({ onClose }: { onClose: () => void }) => {
  const [selectedMedal, setSelectedMedal] = useState<null | any>(null);

  const medals = [
    { name: '冠军侯火种勋章', desc: '完成霍去病英雄体验全部任务', time: '今日', locked: false, img: 'https://cdn-icons-png.flaticon.com/512/10156/10156828.png' },
    { name: '少年将军勋章', desc: '单次任务评分超过90分', time: '2026-04-20', locked: false, img: 'https://cdn-icons-png.flaticon.com/512/10156/10156847.png' },
    { name: '初入火种勋章', desc: '完成首次注册并登陆', time: '2026-04-18', locked: false, img: 'https://cdn-icons-png.flaticon.com/512/10156/10156845.png' },
    { name: '精忠报国勋章', desc: '完成岳飞英雄体验全部任务', locked: true, img: 'https://cdn-icons-png.flaticon.com/512/10156/10156832.png' },
    { name: '巾帼英雄勋章', desc: '完成花木兰英雄体验全部任务', locked: true, img: 'https://cdn-icons-png.flaticon.com/512/10156/10156854.png' },
    { name: '火种传承勋章', desc: '累计点燃100个火种', locked: true, img: 'https://cdn-icons-png.flaticon.com/512/10156/10156811.png' }
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

      {/* 2. 勋章概览区 */}
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

      {/* 3. 勋章宫格区 */}
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

      {/* 勋章详情弹窗 */}
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
};

/** --- Settings & Compliance Module Views --- */

// 页面一：设置页
const SettingsView = ({ 
  onClose, 
  onShowAgreement, 
  onShowPrivacy, 
  onShowPermissions, 
  onLogout 
}: { 
  onClose: () => void, 
  onShowAgreement: () => void, 
  onShowPrivacy: () => void, 
  onShowPermissions: () => void,
  onLogout: () => void 
}) => {
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  return (
    <motion.div 
      initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
      className="fixed inset-0 z-[1100] bg-[#FBF9F8] overflow-y-auto flex flex-col"
    >
      <header className="h-16 px-6 bg-white border-b border-black/5 flex items-center justify-between shrink-0 sticky top-0 z-10">
        <button onClick={onClose} className="p-2 -ml-2 text-[#38100E]"><ArrowLeft size={24} strokeWidth={3} /></button>
        <h2 className="text-lg font-black text-[#38100E]">设置</h2>
        <div className="w-10" />
      </header>

      <div className="flex-1 p-6 space-y-6">
        {/* 账号安全 */}
        <section className="space-y-3">
          <h3 className="px-2 text-[10px] font-black text-[#8C6A58]/40 uppercase tracking-widest">账号安全</h3>
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-black/5">
            <div className="h-14 px-6 flex items-center justify-between border-b border-black/5">
              <span className="text-sm font-bold text-[#38100E]">手机号</span>
              <span className="text-sm font-bold text-[#8C6A58]/60">138****8888</span>
            </div>
            <button className="w-full h-14 px-6 flex items-center justify-between active:bg-gray-50 transition-all">
              <span className="text-sm font-bold text-[#38100E]">修改手机号</span>
              <ChevronRight size={16} className="text-[#8C6A58]/20" />
            </button>
          </div>
        </section>

        {/* 权限设置 */}
        <section className="space-y-3">
          <h3 className="px-2 text-[10px] font-black text-[#8C6A58]/40 uppercase tracking-widest">权限设置</h3>
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-black/5">
            {[
              { label: '定位权限', desc: '用于任务打卡', status: '已开启' },
              { label: '蓝牙权限', desc: '用于连接体验手环', status: '已开启' },
              { label: '通知权限', desc: '用于任务、订单、队伍提醒', status: '去设置' },
              { label: '相机权限', desc: '用于拍照提交任务', status: '已开启' }
            ].map((item, i) => (
              <div key={i} className={`h-16 px-6 flex items-center justify-between ${i !== 3 ? 'border-b border-black/5' : ''}`}>
                <div>
                  <div className="text-sm font-bold text-[#38100E]">{item.label}</div>
                  <div className="text-[10px] text-[#8C6A58]/40 font-bold">{item.desc}</div>
                </div>
                <span className={`text-xs font-black ${item.status === '已开启' ? 'text-green-500' : 'text-[#9C1B1F]'}`}>{item.status}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 通用设置 */}
        <section className="space-y-3">
          <h3 className="px-2 text-[10px] font-black text-[#8C6A58]/40 uppercase tracking-widest">通用设置</h3>
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-black/5">
            {['清除缓存', '检查更新', '声音与提示', '联系客服'].map((item, i) => (
              <button key={i} className={`w-full h-14 px-6 flex items-center justify-between active:bg-gray-50 transition-all ${i !== 3 ? 'border-b border-black/5' : ''}`}>
                <span className="text-sm font-bold text-[#38100E]">{item}</span>
                <ChevronRight size={16} className="text-[#8C6A58]/20" />
              </button>
            ))}
          </div>
        </section>

        {/* 合规与关于 */}
        <section className="space-y-3">
          <h3 className="px-2 text-[10px] font-black text-[#8C6A58]/40 uppercase tracking-widest">合规与关于</h3>
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-black/5">
            {[
              { label: '用户协议', onClick: onShowAgreement },
              { label: '隐私政策', onClick: onShowPrivacy },
              { label: '权限说明', onClick: onShowPermissions },
              { label: '未成年人保护说明', onClick: () => {} },
              { label: '关于黄火火', onClick: () => {} }
            ].map((item, i) => (
              <button key={i} onClick={item.onClick} className={`w-full h-14 px-6 flex items-center justify-between active:bg-gray-50 transition-all ${i !== 4 ? 'border-b border-black/5' : ''}`}>
                <span className="text-sm font-bold text-[#38100E]">{item.label}</span>
                <ChevronRight size={16} className="text-[#8C6A58]/20" />
              </button>
            ))}
          </div>
        </section>

        <button 
          onClick={() => setShowLogoutConfirm(true)}
          className="w-full h-14 rounded-2xl border-2 border-red-500/20 text-red-500 font-black text-sm active:scale-95 transition-all mt-4"
        >
          退出登录
        </button>
        <p className="text-center text-[10px] font-black text-[#8C6A58]/20 uppercase tracking-widest pb-10">Version 2.4.1 (Build 888)</p>
      </div>

      <AnimatePresence>
        {showLogoutConfirm && (
          <div className="fixed inset-0 z-[1200] flex items-center justify-center px-10">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowLogoutConfirm(false)} className="absolute inset-0 bg-[#38100E]/90 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="relative w-full bg-white rounded-[40px] p-8 text-center shadow-2xl">
              <div className="w-16 h-16 rounded-full bg-red-50 mx-auto -mt-16 flex items-center justify-center text-red-500 border-4 border-white shadow-lg">
                <LogOut size={28} />
              </div>
              <h3 className="mt-6 text-xl font-black text-[#38100E]">确认退出登录？</h3>
              <p className="mt-2 text-sm font-bold text-[#8C6A58] leading-relaxed">退出后将无法查看当前体验进度和订单信息。</p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                <button onClick={() => setShowLogoutConfirm(false)} className="h-14 rounded-2xl bg-[#FBF9F8] text-[#8C6A58] font-black text-sm">取消</button>
                <button 
                  onClick={() => {
                    setShowLogoutConfirm(false);
                    onLogout();
                  }}
                  className="h-14 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm shadow-xl"
                >
                  确认退出
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// 页面二：帮助中心页
const HelpCenterView = ({ onClose }: { onClose: () => void }) => (
  <motion.div 
    initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
    className="fixed inset-0 z-[1100] bg-[#FBF9F8] overflow-y-auto flex flex-col"
  >
    <header className="h-16 px-6 bg-white border-b border-black/5 flex items-center justify-between shrink-0 sticky top-0 z-10">
      <button onClick={onClose} className="p-2 -ml-2 text-[#38100E]"><ArrowLeft size={24} strokeWidth={3} /></button>
      <h2 className="text-lg font-black text-[#38100E]">帮助中心</h2>
      <div className="w-10" />
    </header>

    <div className="p-6 space-y-8">
      {/* 搜索区 */}
      <div className="relative">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-[#8C6A58]/40" size={18} />
        <input 
          type="text" 
          placeholder="搜索购票、核销、手环、任务问题" 
          className="w-full h-14 bg-white rounded-2xl pl-12 pr-6 text-sm font-bold text-[#38100E] border border-black/5 shadow-sm outline-none focus:border-[#9C1B1F]/30 transition-all"
        />
      </div>

      {/* 快捷帮助区 */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: '购票问题', icon: <CreditCard size={20} /> },
          { label: '核销问题', icon: <Ticket size={20} /> },
          { label: '任务打卡', icon: <MapPin size={20} /> },
          { label: '手环绑定', icon: <Watch size={20} /> }
        ].map((item, i) => (
          <button key={i} className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-black/5 flex items-center justify-center text-[#9C1B1F]">
              {item.icon}
            </div>
            <span className="text-[10px] font-black text-[#38100E]">{item.label}</span>
          </button>
        ))}
      </div>

      {/* 常见问题列表 */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 px-2">
           <div className="w-1 h-3 bg-[#9C1B1F] rounded-full" />
           <h3 className="text-sm font-black text-[#38100E]">常见问题</h3>
        </div>
        <div className="space-y-3">
          {[
            { q: '如何查看我的核销码？', a: '购票成功后，可在“我的订单-待核销”中查看。' },
            { q: '定位不准无法打卡怎么办？', a: '可上传现场照片，等待体验官确认。' },
            { q: '手环连接不上怎么办？', a: '请打开蓝牙，靠近手环后重新搜索。' },
            { q: '订单可以退款吗？', a: '未核销订单可按购票规则申请退款。' }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-3xl p-5 border border-black/5 shadow-sm space-y-2">
              <h4 className="text-sm font-black text-[#38100E] flex items-center gap-2">
                <HelpCircle size={14} className="text-[#9C1B1F]" />
                {item.q}
              </h4>
              <p className="text-xs font-bold text-[#8C6A58]/60 leading-relaxed pl-6">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 人工客服区 */}
      <div className="bg-[#38100E] rounded-[40px] p-8 text-[#FFD36B] text-center space-y-6">
        <div>
          <p className="text-[10px] font-black opacity-40 uppercase tracking-widest">Customer Service</p>
          <p className="text-2xl font-black italic mt-1 font-mono">400-000-0000</p>
        </div>
        <div className="flex flex-col gap-3">
          <button className="w-full h-12 rounded-xl bg-[#9C1B1F] text-white text-xs font-black shadow-lg">联系在线客服</button>
          <button className="w-full h-12 rounded-xl bg-white/10 text-[#FFD36B] text-xs font-black border border-white/10">联系现场体验官</button>
        </div>
      </div>
    </div>
  </motion.div>
);

// 页面三：意见反馈页
const FeedbackView = ({ onClose }: { onClose: () => void }) => {
  const [selectedType, setSelectedType] = useState('体验问题');
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <motion.div 
      initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
      className="fixed inset-0 z-[1100] bg-[#FBF9F8] overflow-y-auto flex flex-col"
    >
      <header className="h-16 px-6 bg-white border-b border-black/5 flex items-center justify-between shrink-0 sticky top-0 z-10">
        <button onClick={onClose} className="p-2 -ml-2 text-[#38100E]"><ArrowLeft size={24} strokeWidth={3} /></button>
        <h2 className="text-lg font-black text-[#38100E]">意见反馈</h2>
        <div className="w-10" />
      </header>

      <div className="flex-1 p-6 space-y-8">
        {/* 反馈类型 */}
        <section className="space-y-4">
          <h3 className="text-sm font-black text-[#38100E]">反馈类型</h3>
          <div className="flex flex-wrap gap-2">
            {['体验问题', '购票问题', '定位问题', '手环问题', '内容建议', '投诉反馈'].map(tag => (
              <button 
                key={tag}
                onClick={() => setSelectedType(tag)}
                className={`px-4 h-9 rounded-full text-xs font-black transition-all ${selectedType === tag ? 'bg-[#9C1B1F] text-[#FFD36B]' : 'bg-white text-[#8C6A58]/40 border border-black/5'}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </section>

        {/* 反馈内容 */}
        <div className="bg-white rounded-3xl p-5 border border-black/5 shadow-sm">
          <textarea 
            placeholder="请描述你遇到的问题或建议，我们会认真查看。" 
            className="w-full h-32 text-sm font-bold text-[#38100E] outline-none resize-none placeholder:text-[#8C6A58]/40"
          />
          {/* 图片上传 */}
          <div className="mt-4 pt-4 border-t border-black/5 flex gap-4">
            <button className="w-20 h-20 rounded-2xl bg-[#FBF9F8] border-2 border-dashed border-[#8C6A58]/20 flex flex-col items-center justify-center text-[#8C6A58]/30">
              <Camera size={20} />
              <span className="text-[10px] font-black mt-1">上传</span>
            </button>
            <div className="flex flex-col justify-center">
               <p className="text-[10px] font-black text-[#8C6A58]/40">上传截图或现场照片</p>
               <p className="text-[10px] font-bold text-[#8C6A58]/20 mt-0.5">最多 3 张</p>
            </div>
          </div>
        </div>

        {/* 联系方式 */}
        <section className="space-y-3">
          <h3 className="text-sm font-black text-[#38100E]">联系方式</h3>
          <input 
            type="text" 
            defaultValue="138****8888" 
            className="w-full h-14 bg-white rounded-2xl px-6 text-sm font-bold text-[#38100E] border border-black/5 shadow-sm"
          />
        </section>
      </div>

      <footer className="p-6 pb-12 bg-white/80 backdrop-blur-md">
        <button 
          onClick={() => setShowSuccess(true)}
          className="w-full h-14 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm shadow-xl active:scale-95 transition-all"
        >
          提交反馈
        </button>
      </footer>

      <AnimatePresence>
        {showSuccess && (
          <div className="fixed inset-0 z-[1200] flex items-center justify-center px-10">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-[#38100E]/90 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="relative w-full bg-white rounded-[40px] p-8 text-center shadow-2xl">
              <div className="w-16 h-16 rounded-full bg-green-50 mx-auto -mt-16 flex items-center justify-center text-green-500 border-4 border-white shadow-lg">
                <Check size={28} strokeWidth={3} />
              </div>
              <h3 className="mt-6 text-xl font-black text-[#38100E]">提交成功</h3>
              <p className="mt-2 text-sm font-bold text-[#8C6A58] leading-relaxed">感谢你的反馈，我们会尽快处理。</p>
              <button 
                onClick={() => {
                  setShowSuccess(false);
                  onClose();
                }}
                className="mt-8 w-full h-14 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm active:scale-95 transition-all shadow-xl"
              >
                我知道了
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// 页面四：用户协议页
const AgreementView = ({ onClose }: { onClose: () => void }) => (
  <motion.div 
    initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
    className="fixed inset-0 z-[1100] bg-[#FBF9F8] overflow-y-auto flex flex-col"
  >
    <header className="h-16 px-6 bg-white border-b border-black/5 flex items-center justify-between shrink-0 sticky top-0 z-10">
      <button onClick={onClose} className="p-2 -ml-2 text-[#38100E]"><ArrowLeft size={24} strokeWidth={3} /></button>
      <h2 className="text-lg font-black text-[#38100E]">用户协议</h2>
      <div className="w-10" />
    </header>

    <div className="flex-1 p-8 space-y-8 bg-white m-4 rounded-3xl border border-black/5 shadow-sm">
      <div className="space-y-4">
        {[
          { title: '服务说明', content: '黄火火提供基于LBS的沉浸式实景互动体验服务，包含数字内容展示、硬件手环交互及现场任务引导。' },
          { title: '用户账号', content: '用户通过手机号授权注册，需确保信息真实。账号仅限本人使用，不得转让或售卖体验进度。' },
          { title: '购票与核销规则', content: '购票通过微信支付完成，购买后生成唯一核销码。到店后需向体验官出示码进行核销开始体验。' },
          { title: '体验安全须知', content: '实景体验涉及一定步动，请在规定区域内活动，听从引导人员指挥。如有身体不适请立即停止。' },
          { title: '用户行为规范', content: '禁止恶意破坏现场设施、窃取互动数据或发布违法违规评论内容。' },
          { title: '退款与售后', content: '未核销订单在规定天数内（详见票款页面）可申请退款。逾期或已核销不予退款。' },
          { title: '协议更新', content: '我方有权根据运营需要更新协议，更新后重新启动小程序将弹窗提示。' }
        ].map((item, i) => (
          <div key={i} className="space-y-2">
            <h3 className="text-sm font-black text-[#38100E] border-l-4 border-[#9C1B1F] pl-3 leading-none py-0.5">{item.title}</h3>
            <p className="text-xs text-[#8C6A58] leading-relaxed font-bold opacity-80">{item.content}</p>
          </div>
        ))}
      </div>
    </div>

    <footer className="p-6 pb-12">
      <button 
        onClick={onClose}
        className="w-full h-14 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm active:scale-95 transition-all shadow-xl"
      >
        我已阅读并同意
      </button>
    </footer>
  </motion.div>
);

// 页面五：隐私政策页
const PrivacyPolicyView = ({ onClose }: { onClose: () => void }) => (
  <motion.div 
    initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
    className="fixed inset-0 z-[1100] bg-[#FBF9F8] overflow-y-auto flex flex-col"
  >
    <header className="h-16 px-6 bg-white border-b border-black/5 flex items-center justify-between shrink-0 sticky top-0 z-10">
      <button onClick={onClose} className="p-2 -ml-2 text-[#38100E]"><ArrowLeft size={24} strokeWidth={3} /></button>
      <h2 className="text-lg font-black text-[#38100E]">隐私政策</h2>
      <div className="w-10" />
    </header>

    <div className="flex-1 p-8 pb-12 space-y-8 bg-white m-4 rounded-3xl border border-black/5 shadow-sm">
      <div className="p-5 bg-red-50 rounded-2xl border border-red-100 flex gap-3">
        <ShieldCheck size={20} className="text-red-500 shrink-0" />
        <p className="text-[11px] font-bold text-red-800 leading-relaxed">
          特别提醒：心率、血氧和心流值仅用于体验展示和个人回顾，不作为医疗、健康或心理诊断依据。
        </p>
      </div>

      <div className="space-y-6">
        {[
          { title: '我们收集的信息', content: '包含手机号、地理位置（用于打卡）、蓝牙连接状态、运动步数及体验过程中授权采集的心率血氧数据。' },
          { title: '定位权限说明', content: '仅在体验运行及任务打卡时获取经纬度坐标，用于验证任务点达成状态。' },
          { title: '蓝牙与手环数据', content: '连接手环需开启蓝牙，手环采集的生理波动仅用于计算“心流值”这一娱乐数值，不会用于商业广告。' },
          { title: '信息存储与安全', content: '所有数据加密存储于云端，体验结束后30天可申请彻底注销个人历史数据。' },
          { title: '未成年人保护', content: '未满14周岁用户需由监护人授权购票并开启体验模式。' }
        ].map((item, i) => (
          <div key={i} className="space-y-2">
            <h3 className="text-sm font-black text-[#38100E] flex items-center gap-2">
               <div className="w-1.5 h-1.5 rounded-full bg-[#9C1B1F]" />
               {item.title}
            </h3>
            <p className="text-xs text-[#8C6A58] leading-relaxed font-bold opacity-80">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

// 页面六：权限说明页
const PermissionsListView = ({ onClose }: { onClose: () => void }) => (
  <motion.div 
    initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
    className="fixed inset-0 z-[1100] bg-[#FBF9F8] overflow-y-auto flex flex-col"
  >
    <header className="h-16 px-6 bg-white border-b border-black/5 flex items-center justify-between shrink-0 sticky top-0 z-10">
      <button onClick={onClose} className="p-2 -ml-2 text-[#38100E]"><ArrowLeft size={24} strokeWidth={3} /></button>
      <h2 className="text-lg font-black text-[#38100E]">权限说明</h2>
      <div className="w-10" />
    </header>

    <div className="p-6 space-y-4">
      {[
        { title: '定位权限', desc: '用于判断是否到达任务点，完成LBS打卡。', icon: <MapPin size={20} /> },
        { title: '蓝牙权限', desc: '用于连接现场体验手环。', icon: <Bluetooth size={20} /> },
        { title: '相机权限', desc: '用于拍照提交任务凭证。', icon: <Camera size={20} /> },
        { title: '相册权限', desc: '用于上传任务图片或反馈截图。', icon: <ImageIcon size={20} /> },
        { title: '通知权限', desc: '用于接收订单、任务、队伍集合提醒。', icon: <BellRing size={20} /> },
        { title: '手机号', desc: '用于登录、订单通知和客服联系。', icon: <Smartphone size={20} /> }
      ].map((item, i) => (
        <div key={i} className="bg-white rounded-[28px] p-5 shadow-sm border border-black/5 flex gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#FBF9F8] flex items-center justify-center text-[#9C1B1F] shrink-0 border border-black/5">
            {item.icon}
          </div>
          <div className="flex-1">
             <h4 className="text-sm font-black text-[#38100E]">{item.title}</h4>
             <p className="mt-1 text-[11px] font-bold text-[#8C6A58]/60 leading-relaxed">{item.desc}</p>
          </div>
        </div>
      ))}

      <div className="p-6 mt-6 bg-[#F5DDA2]/10 rounded-3xl border border-[#F5DDA2]/30 flex gap-3">
         <Info size={18} className="text-[#9B1D1D] shrink-0 mt-0.5" />
         <p className="text-[10px] font-bold text-[#8C6A58] leading-relaxed">
            你可以随时在手机系统设置中关闭相关权限。关闭部分权限可能影响任务打卡、手环连接或消息提醒。
         </p>
      </div>
    </div>
  </motion.div>
);

const FlowStatusView = ({ onClose, onDisconnect }: { onClose: () => void, onDisconnect: () => void }) => {
  const [isConnected, setIsConnected] = useState(true);
  const [showConfirmUnbind, setShowConfirmUnbind] = useState(false);

  return (
    <motion.div 
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      className="fixed inset-0 z-[680] bg-[#FBF9F8] overflow-y-auto flex flex-col"
    >
      <header className="h-16 px-6 bg-white border-b border-black/5 flex items-center justify-between shrink-0 sticky top-0 z-10">
        <button onClick={onClose} className="p-2 -ml-2 text-[#38100E]"><ArrowLeft size={24} strokeWidth={3} /></button>
        <h2 className="text-lg font-black text-[#38100E]">心流状态</h2>
        <button className="p-2 -mr-2 text-[#8C6A58]/60"><Info size={22} /></button>
      </header>

      {!isConnected ? (
        <div className="flex-1 flex flex-col items-center justify-center px-10 text-center space-y-8 pb-32">
           <div className="w-24 h-24 rounded-full bg-red-50 text-red-500 flex items-center justify-center">
              <LogOut size={40} className="rotate-180" />
           </div>
           <div>
              <h3 className="text-xl font-black text-[#38100E]">手环未连接</h3>
              <p className="mt-2 text-sm font-bold text-[#8C6A58] leading-relaxed">连接手环以实时同步你的心流数据</p>
           </div>
           <button className="h-14 px-8 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm active:scale-95 transition-all shadow-xl">立即连接</button>
        </div>
      ) : (
        <div className="flex-1 p-6 space-y-8 pb-32">
          {/* 这里是心流数据展示逻辑，之前已经写过了 */}
          <div className="bg-white rounded-[40px] p-8 text-center space-y-4 border border-black/5 shadow-sm">
             <div className="text-[10px] font-black text-[#8C6A58]/40 uppercase tracking-widest">当前心流值</div>
             <div className="text-6xl font-black text-[#38100E] italic">88</div>
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-500 rounded-full text-[10px] font-black">
                <Activity size={12} /> 状态极其稳定
             </div>
          </div>
          
          <button 
            onClick={() => setShowConfirmUnbind(true)}
            className="w-full h-14 rounded-2xl border-2 border-red-500/10 text-red-500 font-black text-sm active:bg-red-50 transition-all"
          >
             断开手环连接
          </button>
        </div>
      )}

      <AnimatePresence>
        {showConfirmUnbind && (
          <div className="fixed inset-0 z-[700] flex items-center justify-center px-10">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowConfirmUnbind(false)} className="absolute inset-0 bg-[#38100E]/80 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="relative w-full bg-white rounded-[40px] p-8 text-center shadow-2xl">
              <h3 className="text-xl font-black text-[#38100E]">确认断开连接？</h3>
              <p className="mt-2 text-sm font-bold text-[#8C6A58]">断开后将停止同步心率和心流数据。</p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                <button onClick={() => setShowConfirmUnbind(false)} className="h-14 rounded-2xl bg-[#FBF9F8] text-[#8C6A58] font-black text-sm">取消</button>
                <button 
                  onClick={() => {
                    setIsConnected(false);
                    setShowConfirmUnbind(false);
                    onDisconnect();
                  }}
                  className="h-14 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm shadow-xl shadow-[#9C1B1F]/20"
                >
                  确认断开
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/** --- Scene Selection & Message Center Module Views --- */

// 页面一：场景选择页
const SceneSelectionView = ({ onClose, onSceneChanged }: { onClose: () => void, onSceneChanged: (name: string) => void }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedSceneName, setSelectedSceneName] = useState('');

  const scenes = [
    { 
      name: '蓝色港湾 · 黄火火体验点', 
      addr: '北京市朝阳区', 
      dist: '1.2km', 
      status: '开放中', 
      heroes: ['霍去病', '花木兰', '岳飞'],
      img: 'https://images.unsplash.com/photo-1547984602-40d667cf313f?q=80&w=400&auto=format&fit=crop'
    },
    { 
      name: '奥森公园 · 英雄挑战点', 
      addr: '北京市朝阳区', 
      dist: '4.8km', 
      status: '即将开放', 
      heroes: ['岳飞', '霍去病'],
      img: 'https://images.unsplash.com/photo-1518151820534-10651790471b?q=80&w=400&auto=format&fit=crop'
    },
    { 
      name: '古城文化街区 · 火种体验点', 
      addr: '北京市东城区', 
      dist: '8.5km', 
      status: '筹备中', 
      heroes: ['朱元璋', '秦始皇'],
      img: 'https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=400&auto=format&fit=crop'
    }
  ];

  const handleSelect = (name: string) => {
    setSelectedSceneName(name);
    setShowSuccess(true);
  };

  return (
    <motion.div 
      initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
      className="fixed inset-0 z-[1300] bg-[#FBF9F8] overflow-y-auto flex flex-col"
    >
      <header className="h-16 px-6 bg-white border-b border-black/5 flex items-center justify-between shrink-0 sticky top-0 z-10">
        <button onClick={onClose} className="p-2 -ml-2 text-[#38100E]"><ArrowLeft size={24} strokeWidth={3} /></button>
        <h2 className="text-lg font-black text-[#38100E]">选择场景</h2>
        <div className="w-10" />
      </header>

      <div className="p-6 space-y-6">
        {/* 搜索区 */}
        <div className="relative">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-[#8C6A58]/40" size={18} />
          <input 
            type="text" 
            placeholder="搜索城市、景区、商圈、公园" 
            className="w-full h-14 bg-white rounded-2xl pl-12 pr-6 text-sm font-bold text-[#38100E] border border-black/5 shadow-sm outline-none"
          />
        </div>

        {/* 当前定位区 */}
        <div className="bg-[#38100E] rounded-[32px] p-6 text-[#FFD36B] flex items-center justify-between shadow-xl">
           <div className="flex gap-4">
              <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                 <LocateFixed size={20} />
              </div>
              <div>
                 <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black opacity-40 uppercase tracking-widest">当前定位: 北京</span>
                 </div>
                 <div className="mt-1 flex flex-col">
                    <span className="text-sm font-black">蓝色港湾 · 黄火火体验点</span>
                    <span className="text-[10px] font-bold opacity-60 mt-0.5">距离你 1.2km</span>
                 </div>
              </div>
           </div>
           <button className="text-[10px] font-black text-[#FFD36B]/60 uppercase tracking-widest bg-white/5 px-3 py-2 rounded-xl border border-white/5 active:scale-95 transition-all">重新定位</button>
        </div>

        {/* 附近场景列表 */}
        <section className="space-y-4">
           <div className="flex items-center gap-2 px-2">
              <div className="w-1 h-3 bg-[#9C1B1F] rounded-full" />
              <h3 className="text-sm font-black text-[#38100E]">附近推荐</h3>
           </div>
           
           <div className="space-y-4">
              {scenes.map((scene, i) => (
                <div key={i} className="bg-white rounded-[40px] overflow-hidden border border-black/5 shadow-sm">
                   <div className="h-40 relative">
                      <img src={scene.img} className="w-full h-full object-cover" />
                      <div className="absolute top-4 left-4">
                         <span className={`px-3 py-1 rounded-full text-[10px] font-black text-white shadow-lg backdrop-blur-md ${scene.status === '开放中' ? 'bg-green-500/80' : scene.status === '即将开放' ? 'bg-orange-500/80' : 'bg-gray-500/80'}`}>
                            {scene.status}
                         </span>
                      </div>
                      <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-[10px] font-black text-white">
                         {scene.dist}
                      </div>
                   </div>
                   <div className="p-6">
                      <h4 className="text-lg font-black text-[#38100E] leading-tight">{scene.name}</h4>
                      <p className="text-[10px] font-bold text-[#8C6A58]/60 mt-1 flex items-center gap-1">
                         <MapPin size={10} /> {scene.addr}
                      </p>
                      
                      <div className="mt-4 flex flex-wrap gap-2">
                         {scene.heroes.map(hero => (
                           <span key={hero} className="px-2 py-0.5 bg-[#FBF9F8] text-[#8C6A58]/60 text-[9px] font-black rounded-md border border-black/5">{hero}</span>
                         ))}
                      </div>

                      <div className="mt-6 flex gap-2">
                         {scene.status === '开放中' ? (
                            <button 
                              onClick={() => handleSelect(scene.name)}
                              className="flex-1 h-12 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-xs active:scale-95 transition-all shadow-lg shadow-[#9C1B1F]/20"
                            >
                               选择此场景
                            </button>
                         ) : (
                            <button 
                              className="flex-1 h-12 rounded-2xl bg-gray-100 text-[#8C6A58]/40 font-black text-xs cursor-not-allowed"
                            >
                               {scene.status === '即将开放' ? '查看详情' : '敬请期待'}
                            </button>
                         )}
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </section>
      </div>

      <AnimatePresence>
        {showSuccess && (
          <div className="fixed inset-0 z-[1400] flex items-center justify-center px-10">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-[#38100E]/90 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="relative w-full bg-white rounded-[40px] p-8 text-center shadow-2xl">
              <div className="w-16 h-16 rounded-full bg-green-50 mx-auto -mt-16 flex items-center justify-center text-green-500 border-4 border-white shadow-lg">
                <CheckCheck size={28} strokeWidth={3} />
              </div>
              <h3 className="mt-6 text-xl font-black text-[#38100E]">场景已切换</h3>
              <p className="mt-2 text-sm font-bold text-[#8C6A58] leading-relaxed">当前场景已切换为<br /><span className="text-[#9C1B1F]">{selectedSceneName}</span></p>
              <button 
                onClick={() => {
                  setShowSuccess(false);
                  onSceneChanged(selectedSceneName);
                }}
                className="mt-8 w-full h-14 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm active:scale-95 transition-all shadow-xl"
              >
                返回首页
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// 页面二：消息中心页
const MessageCenterView = ({ onClose }: { onClose: () => void }) => {
  const [activeTab, setActiveTab] = useState('全部');
  const [selectedMsg, setSelectedMsg] = useState<null | any>(null);

  const tabs = ['全部', '任务', '订单', '队伍', '系统'];

  const messages = [
    { id: 1, type: '任务', title: '第3关已解锁', content: '战鼓挑战已开启，继续完成你的封狼居胥之路。', time: '刚刚', unread: true, icon: <Target size={16} /> },
    { id: 2, type: '订单', title: '支付成功', content: '你的霍去病英雄体验票已生成，请到现场核销。', time: '10分钟前', unread: false, icon: <Receipt size={16} /> },
    { id: 3, type: '队伍', title: '集合提醒', content: '冠军侯小队队长提醒你前往集合点。', time: '20分钟前', unread: true, icon: <Users size={16} /> },
    { id: 4, type: '系统', title: '手环连接已断开', content: '请靠近手环并重新连接。', time: '30分钟前', unread: false, icon: <Watch size={16} /> },
    { id: 5, type: '系统', title: '新人福利已到账', content: '新人首单立减10元优惠已发放。', time: '今天', unread: false, icon: <Award size={16} /> }
  ];

  const filteredMessages = activeTab === '全部' ? messages : messages.filter(m => m.type === activeTab);

  return (
    <motion.div 
      initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
      className="fixed inset-0 z-[1300] bg-[#FBF9F8] overflow-y-auto flex flex-col"
    >
      <header className="h-16 px-6 bg-white border-b border-black/5 flex items-center justify-between shrink-0 sticky top-0 z-10">
        <button onClick={onClose} className="p-2 -ml-2 text-[#38100E]"><ArrowLeft size={24} strokeWidth={3} /></button>
        <h2 className="text-lg font-black text-[#38100E]">消息中心</h2>
        <button className="text-[10px] font-black text-[#8C6A58]/40 flex items-center gap-1 active:text-[#9C1B1F]">
           全部已读 <CheckCheck size={12} />
        </button>
      </header>

      {/* 2. 消息分类Tab */}
      <div className="bg-white border-b border-black/5 sticky top-16 z-10 flex overflow-x-auto scrollbar-hide px-4">
        {tabs.map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-none px-6 h-12 text-xs font-black transition-all relative ${activeTab === tab ? 'text-[#9C1B1F]' : 'text-[#8C6A58]/40'}`}
          >
            {tab}
            {activeTab === tab && (
              <motion.div layoutId="msgTab" className="absolute bottom-0 left-6 right-6 h-1 bg-[#9C1B1F] rounded-t-full" />
            )}
          </button>
        ))}
      </div>

      <div className="flex-1 p-4 pb-20">
        {filteredMessages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center opacity-60">
             <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center text-[#8C6A58]/20 mb-6">
                <Mail size={40} />
             </div>
             <h3 className="text-lg font-black text-[#38100E]">暂无消息</h3>
             <p className="text-xs font-bold text-[#8C6A58]">任务、订单和队伍提醒会显示在这里</p>
          </div>
        ) : (
          <div className="space-y-3">
             {filteredMessages.map((msg) => (
               <button 
                 key={msg.id} 
                 onClick={() => setSelectedMsg(msg)}
                 className="w-full bg-white rounded-3xl p-5 flex gap-4 border border-black/5 shadow-sm active:bg-gray-50 transition-all text-left"
               >
                  <div className={`w-12 h-12 rounded-2xl shrink-0 flex items-center justify-center relative 
                    ${msg.type === '任务' ? 'bg-orange-50 text-orange-500' : 
                      msg.type === '订单' ? 'bg-green-50 text-green-500' : 
                      msg.type === '队伍' ? 'bg-blue-50 text-blue-500' : 'bg-gray-50 text-gray-400'}`}>
                     {msg.icon}
                     {msg.unread && <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />}
                  </div>
                  <div className="flex-1 min-w-0">
                     <div className="flex justify-between items-start mb-1">
                        <h4 className="text-sm font-black text-[#38100E] truncate pr-2">{msg.title}</h4>
                        <span className="text-[9px] font-bold text-[#8C6A58]/40 whitespace-nowrap">{msg.time}</span>
                     </div>
                     <p className="text-xs font-bold text-[#8C6A58]/60 line-clamp-1">{msg.content}</p>
                  </div>
                  <ChevronRight size={14} className="text-[#8C6A58]/20 self-center" />
               </button>
             ))}
          </div>
        )}
      </div>

      <AnimatePresence>
         {selectedMsg && (
           <div className="fixed inset-0 z-[1400] flex items-end">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedMsg(null)} className="absolute inset-0 bg-[#38100E]/80 backdrop-blur-sm" />
              <motion.div 
                initial={{ y: '100%' }} 
                animate={{ y: 0 }} 
                exit={{ y: '100%' }}
                className="relative w-full bg-[#FBF9F8] rounded-t-[48px] p-8 pb-12 shadow-2xl overflow-hidden"
              >
                 <div className="absolute top-0 right-0 w-32 h-32 bg-[#9C1B1F]/5 rounded-full -mr-16 -mt-16 blur-3xl" />
                 <div className="w-12 h-1.5 bg-[#8C6A58]/10 rounded-full mx-auto mb-8" />
                 
                 <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center
                       ${selectedMsg.type === '任务' ? 'bg-orange-50 text-orange-500' : 
                         selectedMsg.type === '订单' ? 'bg-green-50 text-green-500' : 
                         selectedMsg.type === '队伍' ? 'bg-blue-50 text-blue-500' : 'bg-gray-50 text-gray-400'}`}>
                       {selectedMsg.icon}
                    </div>
                    <div>
                       <h3 className="text-xl font-black text-[#38100E]">{selectedMsg.title}</h3>
                       <p className="text-[10px] font-black text-[#8C6A58]/30 uppercase tracking-widest">{selectedMsg.type} · {selectedMsg.time}</p>
                    </div>
                 </div>

                 <div className="bg-white rounded-3xl p-6 border border-black/5 shadow-inner">
                    <p className="text-sm font-bold text-[#8C6A58] leading-relaxed">
                       {selectedMsg.content}
                    </p>
                 </div>

                 <div className="mt-8 flex flex-col gap-3">
                    <button className="w-full h-14 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm active:scale-95 transition-all shadow-xl">
                       {selectedMsg.type === '任务' ? '去查看任务' : 
                        selectedMsg.type === '订单' ? '查看核销码' : 
                        selectedMsg.type === '队伍' ? '查看队伍' : '了解详情'}
                    </button>
                    <button onClick={() => setSelectedMsg(null)} className="w-full h-12 text-[11px] font-black text-[#8C6A58]/40 uppercase tracking-widest">返回消息中心</button>
                 </div>
              </motion.div>
           </div>
         )}
      </AnimatePresence>
    </motion.div>
  );
};

/** --- Global Status & Action Components --- */

// 1. 通用状态弹窗 (成功、失败、确认等)
const StatusDialog = ({ 
  type = 'success', 
  title, 
  content, 
  primaryText = '我知道了', 
  secondaryText, 
  onPrimary, 
  onSecondary,
  rewards
}: { 
  type?: 'success' | 'fail' | 'confirm' | 'reward', 
  title: string, 
  content?: string, 
  primaryText?: string, 
  secondaryText?: string, 
  onPrimary: () => void, 
  onSecondary?: () => void,
  rewards?: { label: string, value: string, icon?: React.ReactNode }[]
}) => (
  <div className="fixed inset-0 z-[2000] flex items-center justify-center px-10">
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-[#38100E]/90 backdrop-blur-md" />
    <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="relative w-full bg-white rounded-[40px] p-8 text-center shadow-2xl">
      {type === 'success' && (
        <div className="w-16 h-16 rounded-full bg-green-50 mx-auto -mt-16 flex items-center justify-center text-green-500 border-4 border-white shadow-lg">
          <CheckCircle2 size={32} strokeWidth={3} />
        </div>
      )}
      {type === 'fail' && (
        <div className="w-16 h-16 rounded-full bg-red-50 mx-auto -mt-16 flex items-center justify-center text-red-500 border-4 border-white shadow-lg">
          <XCircle size={32} strokeWidth={3} />
        </div>
      )}
      {type === 'confirm' && (
        <div className="w-16 h-16 rounded-full bg-orange-50 mx-auto -mt-16 flex items-center justify-center text-orange-500 border-4 border-white shadow-lg">
          <AlertTriangle size={32} strokeWidth={3} />
        </div>
      )}
      {type === 'reward' && (
        <div className="w-16 h-16 rounded-full bg-[#FFD36B]/20 mx-auto -mt-16 flex items-center justify-center text-[#9C1B1F] border-4 border-white shadow-lg overflow-hidden">
          <motion.div animate={{ rotateY: 360 }} transition={{ duration: 2, repeat: Infinity }} className="relative z-10">
             <Trophy size={32} />
          </motion.div>
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg,#FFD36B,transparent)] animate-spin" />
        </div>
      )}

      <h3 className="mt-6 text-xl font-black text-[#38100E]">{title}</h3>
      {content && <p className="mt-2 text-sm font-bold text-[#8C6A58] leading-relaxed">{content}</p>}

      {rewards && (
        <div className="mt-6 grid grid-cols-3 gap-3">
          {rewards.map((reward, i) => (
            <div key={i} className="bg-[#FBF9F8] rounded-2xl p-3 border border-black/5 flex flex-col items-center">
              <div className="text-[#9C1B1F] mb-1">{reward.icon}</div>
              <div className="text-[10px] font-black text-[#38100E] whitespace-nowrap">{reward.value}</div>
              <div className="text-[8px] font-bold text-[#8C6A58]/40 uppercase">{reward.label}</div>
            </div>
          ))}
        </div>
      )}

      <div className={`mt-8 ${secondaryText ? 'grid grid-cols-2 gap-3' : 'flex flex-col'}`}>
        {secondaryText && (
          <button onClick={onSecondary} className="h-14 rounded-2xl bg-[#FBF9F8] text-[#8C6A58] font-black text-sm active:scale-95 transition-all">
            {secondaryText}
          </button>
        )}
        <button 
          onClick={onPrimary} 
          className="h-14 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm active:scale-95 transition-all shadow-xl shadow-[#9B171D]/20"
        >
          {primaryText}
        </button>
      </div>
    </motion.div>
  </div>
);

// 2. 异常状态页 (全屏)
const ErrorStatePage = ({ 
  type = 'network', 
  onRetry, 
  onBack 
}: { 
  type?: 'network' | 'location' | 'bluetooth' | 'camera', 
  onRetry: () => void, 
  onBack: () => void 
}) => {
  const configs = {
    network: {
      title: '网络开小差了',
      desc: '当前网络不稳定，请检查网络后重试。',
      btn: '重新加载',
      icon: <WifiOff size={48} strokeWidth={1.5} />
    },
    location: {
      title: '需要开启定位权限',
      desc: '定位权限用于判断你是否到达任务点，完成LBS打卡。你可以随时在系统设置中关闭。',
      btn: '去开启定位',
      icon: <LocateFixed size={48} strokeWidth={1.5} />
    },
    bluetooth: {
      title: '需要开启蓝牙权限',
      desc: '蓝牙权限用于连接现场体验手环，展示心率、血氧和心流状态。',
      btn: '去开启蓝牙',
      icon: <BluetoothOff size={48} strokeWidth={1.5} />
    },
    camera: {
      title: '需要开启相机权限',
      desc: '相机权限用于拍摄任务照片，作为任务完成凭证。',
      btn: '去开启相机',
      icon: <CameraOff size={48} strokeWidth={1.5} />
    }
  };

  const config = configs[type];

  return (
    <div className="fixed inset-0 z-[1500] bg-[#FBF9F8] flex flex-col items-center justify-center p-12 text-center">
      <div className="w-24 h-24 rounded-[40px] bg-white shadow-xl border border-black/5 flex items-center justify-center text-[#9C1B1F] mb-8">
        {config.icon}
      </div>
      <h3 className="text-2xl font-black text-[#38100E] mb-3">{config.title}</h3>
      <p className="text-sm font-bold text-[#8C6A58] leading-relaxed mb-12">{config.desc}</p>
      
      <div className="w-full space-y-3">
        <button 
          onClick={onRetry}
          className="w-full h-14 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm active:scale-95 transition-all shadow-xl shadow-[#9B171D]/20"
        >
          {config.btn}
        </button>
        <button onClick={onBack} className="text-xs font-black text-[#8C6A58]/40 uppercase tracking-widest pt-2">返回前页</button>
      </div>
    </div>
  );
};

// --- Product Blueprint & Navigation Map Component ---
const ProductBlueprintView = () => {
  const tabs = [
    { title: '首页', pos: '产品入口与推荐转化', color: '#9C1B1F', items: ['场景选择', '消息中心', '主推英雄', '购票入口', '开始体验', '加入队伍', '绑定手环', '火种商城入口'] },
    { title: '体验', pos: '线下实时英雄任务主控页', color: '#9C1B1F', items: ['当前任务', '任务详情', '地图打卡', '拍照提交', '任务奖励', '完赛结果', '心流状态', '联系体验官'] },
    { title: '英雄', pos: '英雄内容中心与购票转化', color: '#FFD36B', items: ['英雄列表', '英雄分类', '英雄详情', '路线详情', '任务预览', '立即购票'] },
    { title: '队伍', pos: '组队协作与真实社交中心', color: '#10B981', items: ['创建队伍', '输入队伍码', '扫码加入', '队伍详情', '成员列表', '集合提醒'] },
    { title: '我的', pos: '用户资产与英雄成长档案', color: '#3B82F6', items: ['我的订单', '体验记录', '我的勋章', '火种商城', '手环管理', '客服帮助', '设置', '隐私协议'] },
  ];

  const mainPath = [
    '首页', '英雄详情', '购票页', '支付成功', '核销码', '体验页', '地图打卡', '任务完成', '完赛结果', '我的勋章/商城'
  ];

  return (
    <div className="space-y-12">
      <header className="py-2">
        <h2 className="text-xl font-black text-[#38100E]">黄火火 C端产品结构总览</h2>
        <p className="text-[10px] font-bold text-[#8C6A58]/60 mt-1 uppercase tracking-widest leading-relaxed">首页 · 体验 · 英雄 · 队伍 · 我的 五大一级页面结构与跳转关系</p>
      </header>

      {/* 1. 五大一级入口 */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 px-1">
           <div className="w-1 h-3 bg-[#9C1B1F] rounded-full" />
           <h3 className="text-sm font-black text-[#38100E]">一级页面 Tab 结构卡</h3>
        </div>
        <div className="space-y-4">
          {tabs.map((tab, i) => (
            <div key={i} className="bg-white rounded-[32px] p-6 border border-black/5 shadow-sm overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-24 h-24 opacity-5 translate-x-8 translate-y--8 group-hover:scale-110 transition-transform duration-700" style={{ backgroundColor: tab.color, borderRadius: '100%' }} />
              <div className="flex flex-col gap-1 mb-4 relative z-10">
                 <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: tab.color }} />
                    <h4 className="text-lg font-black text-[#38100E]">{tab.title}</h4>
                 </div>
                 <span className="text-[10px] font-bold text-[#8C6A58]/40 uppercase tracking-wider">{tab.pos}</span>
              </div>
              <div className="flex flex-wrap gap-2 relative z-10">
                 {tab.items.map(item => (
                   <span key={item} className="px-3 py-1.5 rounded-xl bg-[#FBF9F8] border border-black/5 text-[10px] font-bold text-[#38100E]/70 hover:bg-[#9C1B1F]/5 transition-colors">
                     {item}
                   </span>
                 ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. 核心链路可视化 */}
      <section className="space-y-6">
         <div className="flex items-center gap-2 px-1">
            <div className="w-1 h-3 bg-red-500 rounded-full" />
            <h3 className="text-sm font-black text-[#38100E]">核心用户主链路 (The Hero's Path)</h3>
         </div>
         <div className="bg-white rounded-[40px] p-8 border border-black/5 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-3xl rounded-full" />
            <div className="relative space-y-8">
               {/* Connection Lines */}
               <div className="absolute left-[11px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-red-500 via-yellow-500 to-green-500 opacity-20" />
               
               {mainPath.map((step, i) => (
                 <div key={i} className="flex items-start gap-4 relative z-10 group transition-all hover:translate-x-1">
                    <div className="w-6 h-6 rounded-full bg-white border-4 border-[#9C1B1F] shadow-lg flex items-center justify-center shrink-0">
                       <div className="w-1.5 h-1.5 rounded-full bg-[#9C1B1F]" />
                    </div>
                    <div className="pt-0.5">
                       <h4 className="text-xs font-black text-[#38100E] leading-none mb-1 group-hover:text-[#9C1B1F] transition-colors">{step}</h4>
                       <p className="text-[8px] font-bold text-[#8C6A58]/20 uppercase tracking-widest">Step {i + 1}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. 辅助链路与图例 */}
      <section className="space-y-6">
         <div className="flex items-center gap-2 px-1">
            <div className="w-1 h-3 bg-blue-500 rounded-full" />
            <h3 className="text-sm font-black text-[#38100E]">辅助功能链路</h3>
         </div>
         <div className="bg-white rounded-[32px] p-8 border border-black/5 shadow-sm space-y-8">
            <div className="space-y-6">
               {[
                 { flow: '核心闭环', route: '首页 → 英雄详情 → 购票 → 体验 → 完赛', color: 'bg-red-500' },
                 { flow: '社交协作', route: '首页 → 队伍 → 创建/加入 → 队伍详情', color: 'bg-green-500' },
                 { flow: '智能硬件', route: '首页 → 绑定手环 → 心流状态 → 体验', color: 'bg-blue-500' },
                 { flow: '资产记录', route: '我的 → 订单 → 核销码', color: 'bg-yellow-500' },
                 { flow: '商城转化', route: '我的 → 火种商城 → 商品详情', color: 'bg-purple-500' }
               ].map((f, i) => (
                 <div key={i} className="flex flex-col gap-2 p-3 rounded-2xl hover:bg-[#FBF9F8] transition-colors border border-transparent hover:border-black/5">
                    <div className="flex items-center justify-between">
                       <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${f.color}`} />
                          <span className="text-[11px] font-black text-[#38100E]">{f.flow}</span>
                       </div>
                    </div>
                    <div className="flex items-center gap-2 text-[#8C6A58]/40 overflow-hidden">
                       <p className="text-[10px] font-bold truncate tracking-tight">{f.route}</p>
                    </div>
                 </div>
               ))}
            </div>

            <div className="pt-8 border-t border-black/5">
               <h4 className="text-[9px] font-black text-[#8C6A58]/40 uppercase tracking-[0.2em] mb-4">状态标识图例</h4>
               <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: '红色: 核心体验链路', desc: '购票、打卡与主交互', color: 'bg-red-500' },
                    { label: '金色: 奖励/勋章链路', desc: '任务完成与资产结算', color: 'bg-yellow-500' },
                    { label: '蓝色: 手环心流链路', desc: '生理监测与沉浸数据', color: 'bg-blue-500' },
                    { label: '绿色: 队伍协作链路', desc: '组队、社交与集合', color: 'bg-green-500' },
                    { label: '灰色: 设置/合规链路', desc: '协议、客服与系统设置', color: 'bg-gray-400' }
                  ].map((leg, i) => (
                    <div key={i} className="flex items-start gap-2">
                       <div className={`w-2 h-2 rounded-full mt-1 shrink-0 ${leg.color}`} />
                       <div>
                          <h5 className="text-[9px] font-black text-[#38100E]">{leg.label}</h5>
                          <p className="text-[8px] font-bold text-[#8C6A58]/40 leading-tight">{leg.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

// 设计系统展示页
const DesignSystemView = ({ onClose }: { onClose: () => void }) => {
  const [activeTab, setActiveTab] = useState('蓝图');
  const [dialog, setDialog] = useState<null | any>(null);
  const [errorPage, setErrorPage] = useState<null | string>(null);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (text: string) => {
    setToast(text);
    setTimeout(() => setToast(null), 2000);
  };

  const tabs = ['蓝图', '基础', '组件', '业务', '状态'];

  return (
    <motion.div 
      initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
      className="fixed inset-0 z-[1600] bg-[#FBF9F8] overflow-y-auto flex flex-col"
    >
      <header className="h-16 px-6 bg-white border-b border-black/5 flex items-center justify-between shrink-0 sticky top-0 z-10">
        <button onClick={onClose} className="p-2 -ml-2 text-[#38100E]"><ArrowLeft size={24} strokeWidth={3} /></button>
        <h2 className="text-lg font-black text-[#38100E]">产品架构蓝图</h2>
        <div className="w-10" />
      </header>

      <div className="bg-white border-b border-black/5 flex overflow-x-auto scrollbar-hide px-4 sticky top-16 z-20">
        {tabs.map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`flex-none px-6 h-12 text-xs font-black transition-all relative ${activeTab === tab ? 'text-[#9C1B1F]' : 'text-[#8C6A58]/40'}`}>
            {tab}
            {activeTab === tab && <motion.div layoutId="dsTab" className="absolute bottom-0 left-6 right-6 h-1 bg-[#9C1B1F] rounded-t-full" />}
          </button>
        ))}
      </div>

      <div className="flex-1 p-6 space-y-12 pb-32">
        {activeTab === '蓝图' && <ProductBlueprintView />}
        {activeTab === '基础' && (
          <div className="space-y-12">
            {/* 1. 品牌色彩规范 */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-1 h-3 bg-[#9C1B1F] rounded-full" />
                <h3 className="text-sm font-black text-[#38100E]">品牌色彩规范</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <div className="h-16 rounded-2xl bg-[#9C1B1F] border border-black/5 flex items-end p-3">
                     <span className="text-[10px] font-black text-[#FFD36B]">主色: 中国红</span>
                  </div>
                  <div className="h-16 rounded-2xl bg-[#FFD36B] border border-black/5 flex items-end p-3">
                     <span className="text-[10px] font-black text-[#9C1B1F]">辅色: 金色</span>
                  </div>
                  <div className="h-16 rounded-2xl bg-[#38100E] border border-black/5 flex items-end p-3">
                     <span className="text-[10px] font-black text-[#FFD36B]">强调色: 深红/橙金</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-16 rounded-2xl bg-[#FBF9F8] border border-black/5 flex items-end p-3">
                     <span className="text-[10px] font-black text-[#38100E]">背景色: 米白</span>
                  </div>
                  <div className="h-16 rounded-2xl bg-green-500 border border-black/5 flex items-end p-3">
                     <span className="text-[10px] font-black text-white">成功色: 绿色</span>
                  </div>
                  <div className="h-16 rounded-2xl bg-orange-500 border border-black/5 flex items-end p-3">
                     <span className="text-[10px] font-black text-white">警告色: 橙色</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. 字体层级规范 */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-1 h-3 bg-[#9C1B1F] rounded-full" />
                <h3 className="text-sm font-black text-[#38100E]">字体层级规范</h3>
              </div>
              <div className="bg-white rounded-[32px] p-6 space-y-6 border border-black/5">
                <div className="space-y-1">
                  <div className="text-xs text-[#8C6A58]/30 font-black uppercase tracking-widest">Page Large Title</div>
                  <div className="text-3xl font-black text-[#38100E]">页面大标题 30px</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-[#8C6A58]/30 font-black uppercase tracking-widest">Module Title</div>
                  <div className="text-xl font-black text-[#38100E]">模块标题 20px</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-[#8C6A58]/30 font-black uppercase tracking-widest">Card Title</div>
                  <div className="text-lg font-black text-[#38100E]">卡片标题 18px</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-[#8C6A58]/30 font-black uppercase tracking-widest">Body Text</div>
                  <div className="text-sm font-bold text-[#8C6A58] leading-relaxed">正文内容建议使用 14px，行高 1.6 倍，保持阅读舒适度。</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-[#8C6A58]/30 font-black uppercase tracking-widest">Secondary Desc</div>
                  <div className="text-[11px] font-bold text-[#8C6A58]/60 uppercase tracking-tight">辅助说明描述建议使用 11px，颜色较淡。</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-[#8C6A58]/30 font-black uppercase tracking-widest">Price / Numbers</div>
                  <div className="text-2xl font-black italic text-[#9C1B1F]">¥ 199.00 / 88</div>
                </div>
              </div>
            </section>

            {/* 11. 图标风格规范 */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-1 h-3 bg-[#9C1B1F] rounded-full" />
                <h3 className="text-sm font-black text-[#38100E]">图标风格规范</h3>
              </div>
              <div className="bg-white rounded-[32px] p-6 border border-black/5 grid grid-cols-4 gap-6">
                {[
                  { icon: <Ticket size={24} />, label: '购票' },
                  { icon: <Play size={24} />, label: '开始体验' },
                  { icon: <Users size={24} />, label: '加入队伍' },
                  { icon: <Watch size={24} />, label: '绑定手环' },
                  { icon: <MapPin size={24} />, label: '定位' },
                  { icon: <Bell size={24} />, label: '消息' },
                  { icon: <Target size={24} />, label: '任务' },
                  { icon: <Trophy size={24} />, label: '勋章' },
                  { icon: <Flame size={24} />, label: '火种' },
                  { icon: <Coins size={24} />, label: '银票' },
                  { icon: <Headset size={24} />, label: '客服' },
                  { icon: <Settings size={24} />, label: '设置' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-2xl bg-[#FBF9F8] text-[#9C1B1F] flex items-center justify-center border border-black/5">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-black text-[#8C6A58]/60">{item.label}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === '组件' && (
          <div className="space-y-12">
            {/* 3. 按钮组件 */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-1 h-3 bg-[#9C1B1F] rounded-full" />
                <h3 className="text-sm font-black text-[#38100E]">按钮组件</h3>
              </div>
              <div className="space-y-4">
                <button className="w-full h-14 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm shadow-xl shadow-[#9C1B1F]/20 active:scale-95 transition-all">主按钮: 立即购票</button>
                <button className="w-full h-14 rounded-2xl bg-[#38100E] text-[#FFD36B] font-black text-sm active:scale-95 transition-all">次按钮: 查看详情</button>
                <button className="w-full h-14 rounded-2xl bg-white border border-black/5 text-[#8C6A58] font-black text-sm active:scale-95 transition-all">描边按钮: 联系客服</button>
                <button className="w-full h-14 rounded-2xl bg-gray-100 text-[#8C6A58]/20 font-black text-sm cursor-not-allowed">禁用按钮: 未到达打卡范围</button>
                <button className="w-full h-12 rounded-2xl text-red-500 bg-red-50 font-black text-xs">危险按钮: 退出队伍</button>
              </div>
            </section>

            {/* 5. 标签组件 */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-1 h-3 bg-[#9C1B1F] rounded-full" />
                <h3 className="text-sm font-black text-[#38100E]">标签组件</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-50 text-green-500 rounded-full text-[10px] font-black">可体验</span>
                <span className="px-3 py-1 bg-[#9C1B1F] text-[#FFD36B] rounded-full text-[10px] font-black">进行中</span>
                <span className="px-3 py-1 bg-[#38100E] text-[#FFD36B] rounded-full text-[10px] font-black">待核销</span>
                <span className="px-3 py-1 bg-gray-100 text-[#8C6A58]/40 rounded-full text-[10px] font-black">已核销</span>
                <span className="px-3 py-1 bg-[#FBF9F8] text-[#8C6A58]/60 border border-black/5 rounded-full text-[10px] font-black uppercase">中等难度</span>
                <span className="px-3 py-1 bg-[#FFD36B] text-[#9C1B1F] rounded-full text-[10px] font-black">推荐</span>
                <span className="px-3 py-1 bg-orange-50 text-orange-500 rounded-full text-[10px] font-black">待付款</span>
              </div>
            </section>

            {/* 9. 表单组件 */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-1 h-3 bg-[#9C1B1F] rounded-full" />
                <h3 className="text-sm font-black text-[#38100E]">表单组件</h3>
              </div>
              <div className="bg-white rounded-[32px] p-6 space-y-6 border border-black/5">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-[#8C6A58]/40 uppercase tracking-widest pl-2">手机号</label>
                  <input type="text" placeholder="输入手机号" className="w-full h-12 bg-[#FBF9F8] rounded-xl px-4 text-sm font-bold text-[#38100E] border border-black/5 focus:border-[#9C1B1F] outline-none transition-all" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-[#8C6A58]/40 uppercase tracking-widest pl-2">验证码</label>
                    <input type="text" placeholder="输入验证码" className="w-full h-12 bg-[#FBF9F8] rounded-xl px-4 text-sm font-bold text-[#38100E] border border-black/5 outline-none" />
                  </div>
                  <button className="mt-6 h-12 rounded-xl bg-[#38100E] text-[#FFD36B] font-black text-[10px] uppercase tracking-widest">获取验证码</button>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-[#8C6A58]/40 uppercase tracking-widest pl-2">备注信息</label>
                  <textarea placeholder="点击填写备注信息..." className="w-full h-24 bg-[#FBF9F8] rounded-xl p-4 text-sm font-bold text-[#38100E] border border-black/5 outline-none resize-none" />
                </div>
                <div className="flex items-center justify-between">
                   <span className="text-xs font-black text-[#38100E]">选择数量</span>
                   <div className="flex items-center gap-4 bg-[#FBF9F8] rounded-xl px-4 py-2 border border-black/5">
                      <button className="text-[#9C1B1F]"><Minus size={16} /></button>
                      <span className="text-sm font-black w-8 text-center text-[#38100E]">1</span>
                      <button className="text-[#9C1B1F]"><Plus size={16} /></button>
                   </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-[#8C6A58]/40 uppercase tracking-widest pl-2">上传凭证</label>
                  <div className="w-24 h-24 bg-[#FBF9F8] rounded-2xl border-2 border-dashed border-black/5 flex flex-col items-center justify-center text-[#8C6A58]/20 gap-1">
                     <Camera size={24} />
                     <span className="text-[8px] font-black uppercase">Upload</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === '业务' && (
          <div className="space-y-12">
            {/* 4. 卡片组件 */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-1 h-3 bg-[#9C1B1F] rounded-full" />
                <h3 className="text-sm font-black text-[#38100E]">卡片组件</h3>
              </div>
              <div className="space-y-6">
                {/* 英雄卡片示例 */}
                <div className="bg-white rounded-[40px] p-6 border border-black/5 shadow-sm flex items-center gap-6">
                   <div className="w-20 h-20 rounded-3xl bg-[#FBF9F8] overflow-hidden shrink-0">
                      <img src="https://images.unsplash.com/photo-1547984602-40d667cf313f?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" />
                   </div>
                   <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                         <h4 className="text-lg font-black text-[#38100E]">霍去病</h4>
                         <span className="px-2 py-0.5 bg-green-50 text-green-500 rounded-full text-[8px] font-black">可体验</span>
                      </div>
                      <p className="text-[11px] font-bold text-[#8C6A58]/60 line-clamp-1">封狼居胥，一代战神英雄</p>
                      <button className="mt-3 px-4 py-1.5 bg-[#9C1B1F] text-[#FFD36B] rounded-full text-[10px] font-black">立即体验</button>
                   </div>
                </div>

                {/* 任务卡片示例 */}
                <div className="bg-[#38100E] rounded-[40px] p-6 text-[#FFD36B] border border-black/5 shadow-xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-[#9C1B1F]/20 rounded-full -mr-16 -mt-16 blur-3xl opacity-50" />
                   <div className="relative">
                      <div className="text-[9px] font-black opacity-40 uppercase tracking-widest mb-1">Current Task</div>
                      <h4 className="text-xl font-black italic mb-4">第2关 · 漠北追击</h4>
                      <div className="flex items-center gap-3">
                         <div className="flex -space-x-2">
                            <div className="w-6 h-6 rounded-full border border-[#38100E] bg-white/10" />
                            <div className="w-6 h-6 rounded-full border border-[#38100E] bg-white/20" />
                         </div>
                         <span className="text-[10px] font-bold opacity-60">冠军侯小队 · 2人</span>
                      </div>
                   </div>
                </div>
              </div>
            </section>

            {/* 6. 底部 TabBar 组件 */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-1 h-3 bg-[#9C1B1F] rounded-full" />
                <h3 className="text-sm font-black text-[#38100E]">底部 TabBar组件</h3>
              </div>
              <div className="bg-white rounded-full p-2 border border-black/5 flex items-center shadow-lg relative h-16">
                 {['首页', '英雄', '体验', '队伍', '我的'].map((item, i) => (
                    <div key={i} className={`flex-1 flex flex-col items-center justify-center gap-1 ${i === 0 ? 'text-[#9C1B1F]' : 'text-[#8C6A58]/30 font-bold'}`}>
                       <div className="w-5 h-5 rounded bg-current opacity-20" />
                       <span className="text-[10px] font-black">{item}</span>
                       {i === 0 && <div className="absolute bottom-1 w-1 h-1 rounded-full bg-[#9C1B1F]" />}
                    </div>
                 ))}
              </div>
            </section>

            {/* 7. 顶部导航栏组件 */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-1 h-3 bg-[#9C1B1F] rounded-full" />
                <h3 className="text-sm font-black text-[#38100E]">顶部导航栏组件</h3>
              </div>
              <div className="space-y-3">
                 <div className="h-14 bg-white rounded-2xl border border-black/5 flex items-center justify-center px-4 relative">
                    <h4 className="text-sm font-black">普通标题</h4>
                 </div>
                 <div className="h-14 bg-white rounded-2xl border border-black/5 flex items-center justify-between px-6">
                    <ArrowLeft size={18} />
                    <h4 className="text-sm font-black">带返回标题</h4>
                    <div className="w-4.5" />
                 </div>
                 <div className="h-14 bg-white rounded-2xl border border-black/5 flex items-center justify-between px-6">
                    <ArrowLeft size={18} />
                    <h4 className="text-sm font-black">复合功能栏</h4>
                    <div className="flex gap-4">
                       <Headset size={18} />
                       <Share2 size={18} />
                    </div>
                 </div>
              </div>
            </section>

            {/* 12. 背景与装饰元素 */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-1 h-3 bg-[#9C1B1F] rounded-full" />
                <h3 className="text-sm font-black text-[#38100E]">背景与装饰元素</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div className="h-24 rounded-3xl bg-[#FBF9F8] border border-black/5 flex items-center justify-center text-[10px] font-black text-[#8C6A58]/20 uppercase">米色背景</div>
                 <div className="h-24 rounded-3xl bg-gradient-to-br from-[#9C1B1F] to-[#38100E] border border-black/5 flex items-center justify-center text-[10px] font-black text-[#FFD36B]/40 uppercase text-center">红金渐变背景</div>
                 <div className="h-24 rounded-3xl bg-[#38100E] relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #FFD36B 1px, transparent 1px)', backgroundSize: '12px 12px' }} />
                    <span className="text-[10px] font-black text-[#FFD36B]/40 uppercase">国潮暗纹</span>
                 </div>
                 <div className="h-24 rounded-3xl bg-white relative overflow-hidden flex items-center justify-center shadow-lg">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-[#FFD36B]/20 rounded-full -mr-10 -mt-10 blur-2xl" />
                    <span className="text-[10px] font-black text-[#9C1B1F] uppercase">勋章光效</span>
                 </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === '状态' && (
          <div className="space-y-12">
            {/* 8. 弹窗组件预览 */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-1 h-3 bg-[#9C1B1F] rounded-full" />
                <h3 className="text-sm font-black text-[#38100E]">弹窗组件 快捷预览</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                 <button onClick={() => setDialog({ type: 'success', title: '操作成功' })} className="h-12 rounded-xl bg-white border border-black/5 text-[10px] font-black shadow-sm">成功弹窗</button>
                 <button onClick={() => setDialog({ type: 'fail', title: '失败提示' })} className="h-12 rounded-xl bg-white border border-black/5 text-[10px] font-black shadow-sm">失败弹窗</button>
                 <button onClick={() => setDialog({ type: 'confirm', title: '确认操作？', primaryText: '确认', secondaryText: '取消' })} className="h-12 rounded-xl bg-white border border-black/5 text-[10px] font-black shadow-sm">确认弹窗</button>
                 <button onClick={() => setDialog({ type: 'reward', title: '获得奖励', rewards: [{ label: '火种', value: '+10', icon: <Flame size={14} /> }] })} className="h-12 rounded-xl bg-white border border-black/5 text-[10px] font-black shadow-sm">奖励弹窗</button>
              </div>
            </section>

            {/* 10. 状态组件展示 */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-1 h-3 bg-[#9C1B1F] rounded-full" />
                <h3 className="text-sm font-black text-[#38100E]">页面状态组件</h3>
              </div>
              <div className="bg-white rounded-[40px] border border-black/5 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-black/5 bg-[#FBF9F8] text-[9px] font-black text-[#8C6A58]/40 text-center uppercase tracking-tighter">Empty State</div>
                <EmptyState title="暂无内容" desc="你的英雄旅程还没开始" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-[32px] border border-black/5 p-4 flex flex-col items-center">
                   <div className="h-10 border-b border-black/5 flex items-center justify-center w-full mb-4">
                      <span className="text-[8px] font-black opacity-20 uppercase">Network</span>
                   </div>
                   <WifiOff size={24} className="text-[#8C6A58]/20" />
                </div>
                <div className="bg-white rounded-[32px] border border-black/5 p-4 flex flex-col items-center">
                   <div className="h-10 border-b border-black/5 flex items-center justify-center w-full mb-4">
                      <span className="text-[8px] font-black opacity-20 uppercase">Loading</span>
                   </div>
                   <LoadingIndicator />
                </div>
              </div>
            </section>

            {/* Toast 演示 */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-1 h-3 bg-[#9C1B1F] rounded-full" />
                <h3 className="text-sm font-black text-[#38100E]">Toast 轻提示</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                 {['已复制', '已刷新', '请先上传'].map(t => (
                   <button key={t} onClick={() => showToast(t)} className="h-10 px-4 rounded-xl bg-white border border-black/5 text-[10px] font-black shadow-sm">{t}</button>
                 ))}
              </div>
            </section>

            {/* Auth 流程状态 */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-1 h-3 bg-[#9C1B1F] rounded-full" />
                <h3 className="text-sm font-black text-[#38100E]">Auth 流程状态演示</h3>
              </div>
              <div className="bg-white rounded-[32px] p-6 space-y-6 border border-black/5">
                 <div className="space-y-2">
                    <span className="text-[9px] font-black opacity-40 uppercase">未勾选协议按钮</span>
                    <button className="w-full h-12 rounded-xl bg-gray-100 text-gray-400 font-black text-xs cursor-not-allowed">微信一键登录 (禁用)</button>
                 </div>
                 <div className="space-y-2">
                    <span className="text-[9px] font-black opacity-40 uppercase">验证码倒计时</span>
                    <div className="flex gap-2">
                       <div className="flex-1 h-12 bg-[#FBF9F8] rounded-xl border border-black/5" />
                       <button className="px-6 h-12 rounded-xl bg-[#38100E] text-[#FFD36B]/60 font-black text-[10px] uppercase">59s后获取</button>
                    </div>
                 </div>
                 <div className="grid grid-cols-2 gap-3">
                    <button onClick={() => showToast('登录失败，请稍后重试')} className="h-10 rounded-xl border border-red-100 text-red-500 bg-red-50 text-[10px] font-black">登录失败</button>
                    <button onClick={() => showToast('网络异常，请检查网络')} className="h-10 rounded-xl border border-orange-100 text-orange-500 bg-orange-50 text-[10px] font-black">网络异常</button>
                    <button onClick={() => showToast('权限不足，部分功能受限')} className="h-10 rounded-xl border border-gray-100 text-gray-400 bg-gray-50 text-[10px] font-black col-span-2">权限拒绝提示</button>
                 </div>
              </div>
            </section>
          </div>
        )}
      </div>

      <AnimatePresence>
        {dialog && (
          <StatusDialog 
            {...dialog} 
            onPrimary={() => setDialog(null)} 
            onSecondary={() => setDialog(null)} 
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {errorPage && (
          <ErrorStatePage 
            type={errorPage as any} 
            onRetry={() => setErrorPage(null)} 
            onBack={() => setErrorPage(null)} 
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {toast && <Toast text={toast} />}
      </AnimatePresence>
    </motion.div>
  );
};


const HomeView = ({ 
  onShowDetail, 
  onShowTeamHome, 
  onShowTicketBooking, 
  onShowWristbandBinding, 
  onShowFlowStatus, 
  onShowSceneSelection,
  onShowMessageCenter,
  currentScene,
  isBandBound 
}: { 
  onShowDetail: () => void, 
  onShowTeamHome: () => void,
  onShowTicketBooking: () => void,
  onShowWristbandBinding: () => void,
  onShowFlowStatus: () => void,
  onShowSceneSelection: () => void,
  onShowMessageCenter: () => void,
  currentScene: string,
  isBandBound: boolean
}) => (
  <div className="relative pt-2">
    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_-5%,rgba(255,211,107,.6),transparent_28%),radial-gradient(circle_at_10%_18%,rgba(181,27,32,.16),transparent_20%)]" />

    <main className="relative">
      <header className="px-5 pt-5 pb-3 flex items-start justify-between">
        <div className="flex gap-2 items-start shrink-0">
          <div className="w-10 h-10 rounded-2xl bg-[#9B171C] text-[#FFD36B] flex items-center justify-center shadow-md">
            <MapPin size={20} />
          </div>
          <button onClick={onShowSceneSelection} className="text-left group">
            <div className="flex items-center gap-1">
              <div className="text-[18px] leading-6 font-black text-[#35100E]">{currentScene.split(' · ')[0]}</div>
              <ChevronDown size={14} className="text-[#8B5B44]/40 group-active:translate-y-0.5 transition-all" />
            </div>
            <div className="text-xs mt-0.5 text-[#8B5B44]">{currentScene.split(' · ')[1] || '体验点'}</div>
          </button>
        </div>
        <button 
          onClick={onShowMessageCenter}
          className="relative w-10 h-10 rounded-2xl bg-white text-[#8E1217] flex items-center justify-center shadow-sm border border-[#F3D8A2] active:scale-95 transition-all"
        >
          <Bell size={20} />
          <span className="absolute right-2.5 top-2.5 w-2.5 h-2.5 rounded-full bg-[#E51E2A] border-2 border-white" />
        </button>
      </header>

      <section className="px-5 mt-2">
        <div className="relative rounded-[34px] overflow-hidden min-h-[236px] bg-gradient-to-br from-[#7A0E12] via-[#B71920] to-[#E2A13B] shadow-xl shadow-[#7b1115]/25">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(255,232,164,.7),transparent_18%),radial-gradient(circle_at_18%_18%,rgba(255,255,255,.18),transparent_24%)]" />
          <div className="absolute -right-14 -bottom-20 w-56 h-56 rounded-full border-[26px] border-[#FFD36B]/15" />
          <div className="absolute right-7 top-10 w-28 h-36 rounded-t-full bg-gradient-to-b from-[#FFD36B]/35 to-transparent blur-[1px]" />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 p-6 pt-7"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFD36B]/20 border border-[#FFD36B]/40 text-[#FFEBC1] text-xs font-bold mb-3">
              <ProtoIcon name="sparkles" size={13} /> 英雄主视觉
            </div>
            <h1 className="text-[28px] leading-[34px] font-black text-white tracking-tight max-w-[260px] drop-shadow">
              今日主推：霍去病英雄体验
            </h1>
            <p className="mt-3 text-[13px] leading-5 text-[#FFF2C9] max-w-[285px]">
              穿越6大剧情关卡，完成沉浸式挑战，赢取专属火种勋章
            </p>
            <div className="flex gap-3 mt-6">
              <ActionButton primary onClick={onShowTicketBooking}>立即购票</ActionButton>
              <button 
                onClick={onShowDetail}
                className="h-11 px-6 rounded-full border border-[#FFD36B]/70 text-[#FFE6A3] font-semibold bg-white/10 backdrop-blur active:scale-95 transition-all"
              >
                查看详情
              </button>
            </div>
          </motion.div>
          <div className="absolute right-8 bottom-7 text-[86px] font-black text-white/10 leading-none">将</div>
        </div>
      </section>

      <section className="px-5 mt-6">
        <ProtoSectionTitle title="核心快捷入口" />
        <div className="grid grid-cols-2 gap-3">
          {quickItems.map((item) => (
            <QuickCard 
              key={item.title} 
              item={item} 
              onClick={() => {
                if (item.title === '加入队伍') onShowTeamHome();
                if (item.title === '购票') onShowTicketBooking();
                if (item.title === '开始体验') onShowDetail();
                if (item.title === '绑定手环') {
                  if (isBandBound) onShowFlowStatus();
                  else onShowWristbandBinding();
                }
              }} 
            />
          ))}
        </div>
      </section>

      <section className="px-5 mt-7">
        <ProtoSectionTitle title="体验状态" />
        <CurrentExperience />
      </section>

      <section className="mt-7">
        <div className="px-5">
          <ProtoSectionTitle title="今日可玩英雄" right="更多" />
        </div>
        <div className="flex gap-3 overflow-x-auto px-5 pb-2 no-scrollbar">
          {heroes.map((hero) => (
            <HeroCard hero={hero} key={hero.name} onClick={onShowDetail} />
          ))}
        </div>
      </section>

      <section className="px-5 mt-7">
        <ProtoSectionTitle title="新手三步" />
        <div className="rounded-[28px] bg-white border border-[#F4D99F] p-4 shadow-sm">
          <div className="flex items-center justify-between text-center">
            {["购票", "现场核销", "开始任务"].map((step, idx) => (
              <div key={step} className="flex-1 flex flex-col items-center gap-2">
                 <div className="flex items-center w-full">
                    <div className="flex flex-col items-center gap-2 mx-auto">
                      <div className="w-11 h-11 rounded-2xl bg-[#FFF0C8] text-[#9C171D] flex items-center justify-center font-black">
                        {idx + 1}
                      </div>
                      <span className="text-xs font-bold text-[#442018]">{step}</span>
                    </div>
                    {idx < 2 && <ProtoIcon name="chevron" className="text-[#D8A543]" size={18} />}
                 </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-[#8C6A58] bg-[#FFF7E4] rounded-2xl px-3 py-3">
            <ProtoIcon name="check" size={15} className="text-[#A1171D]" />
            首次体验建议先从简单路线开始
          </div>
        </div>
      </section>

      <section className="px-5 mt-7 pb-10">
        <ProtoSectionTitle title="活动推荐" />
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-[24px] p-4 min-h-[86px] bg-gradient-to-br from-[#FFF0C8] to-[#FFD36B] border border-[#E9B94D] relative overflow-hidden">
            <div className="text-sm font-black text-[#7D1218]">新人首单</div>
            <div className="mt-1 text-xl font-black text-[#B3131A]">立减10元</div>
            <ProtoIcon name="flame" className="absolute right-3 bottom-2 text-[#B3131A]/20" size={48} fill="#B3131A" />
          </div>
          <div className="rounded-[24px] p-4 min-h-[86px] bg-gradient-to-br from-[#98161B] to-[#3E0B0D] relative overflow-hidden text-white">
            <div className="text-sm font-black text-[#FFD36B]">五一英雄挑战赛</div>
            <div className="mt-1 text-lg font-black">即将开启</div>
            <ProtoIcon name="shield" className="absolute right-3 bottom-2 text-[#FFD36B]/20" size={50} />
          </div>
        </div>
      </section>
    </main>
  </div>
);


const Header = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (t: string) => void }) => (
  <header className="fixed top-0 left-0 w-full z-100 bg-[#FFF8EA]/80 backdrop-blur-md border-b border-[#F5DDA2] h-16 flex items-center justify-between px-6 shadow-sm">
    <div className="flex items-center gap-6">
      {['文旅', '排行榜', '商城'].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`text-lg font-black relative transition-all ${activeTab === tab ? 'text-[#9B171C]' : 'text-[#8C6A58]/40 hover:text-[#8C6A58]/60'}`}
        >
          {tab}
          {activeTab === tab && (
            <motion.div 
              layoutId="header-tab-indicator"
              className="absolute -bottom-1.5 left-0 w-full h-1 bg-[#9B171C] rounded-full"
            />
          )}
        </button>
      ))}
    </div>
    <div className="flex items-center gap-4 text-[#9B171C]">
      <Search size={22} strokeWidth={3} />
      <Filter size={22} strokeWidth={3} />
    </div>
  </header>
);

const ContentView = ({ activeTab, onSelectEvent }: { activeTab: string, onSelectEvent: (event: any) => void }) => {
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
          {/* Section Title */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <div className="w-1 h-4 bg-[#FFB800] rounded-full" />
              {activeTab === '排行榜' ? '热门榜单' : activeTab === '商城' ? '精选好物' : '发现新奇'}
            </h2>
            <button className="text-xs text-on-surface-variant font-medium">查看更多</button>
          </div>

          {/* Tab Specific Content */}
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
                 { title: '丝绸之路艺术展', loc: '敦煌', date: '常驻演出', price: '¥120', desc: '一眼万年，跨越时空的文明对话。', longDesc: '本展览汇集了来自世界各地的敦煌艺术珍品，通过数字化手段完美还原石窟内景，是一次不容错过的艺术饕餮盛宴。', tags: ['文化瑰宝', '数字艺术', '敦煌学'] }
               ].map((event, i) => (
                 <div key={i} onClick={() => onSelectEvent(event)} className="bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm cursor-pointer active:scale-[0.98] transition-transform">
                    <div className="h-40 bg-gray-100 italic flex items-center justify-center text-on-surface-variant/20">
                      <img src={`https://picsum.photos/seed/event${i}/800/400`} className="w-full h-full object-cover opacity-80" alt="event" />
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
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden border border-black/5 shadow-sm">
                  <div className="aspect-[4/5] bg-gray-100 relative">
                    <img src={`https://picsum.photos/seed/${i + 10 + (activeTab.length)}/400/500`} alt="Content" className="w-full h-full object-cover" />
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
};

const CHART_DATA_TRENDS = [
  { month: '1月', value: 300, time: 2100 },
  { month: '2月', value: 450, time: 2400 },
  { month: '3月', value: 600, time: 2800 },
  { month: '4月', value: 500, time: 2600 },
  { month: '5月', value: 900, time: 4200 },
  { month: '6月', value: 1200, time: 5100 },
];

const CHART_DATA_SOURCE = [
  { name: '北京市内', value: 48.23, color: '#3B82F6' },
  { name: '京津冀', value: 27.45, color: '#6366F1' },
  { name: '长三角', value: 12.36, color: '#F59E0B' },
  { name: '珠三角', value: 6.21, color: '#EC4899' },
  { name: '其他地区', value: 5.75, color: '#94A3B8' },
];

const MessageView = () => {
  const [activeSubTab, setActiveSubTab] = useState('聊天');
  const [activeSidebar, setActiveSidebar] = useState('景区的人');

  const renderDiscoveryContent = () => (
    <div className="flex bg-white rounded-[2rem] overflow-hidden border border-black/5 shadow-sm h-[65vh]">
      {/* Sidebar from screenshot */}
      <div className="w-16 flex flex-col items-center py-6 gap-6 border-r border-black/5 bg-[#FBF9F8] shrink-0">
        {[
          { id: '关注/粉丝', icon: <UserIcon size={18} /> },
          { id: '景区的人', icon: <MapPin size={18} /> },
          { id: '火伴', icon: <Sparkles size={18} /> },
          { id: '师徒', icon: <Award size={18} /> },
          { id: '圈子', icon: <MessageCircle size={18} /> },
          { id: '陪玩', icon: <Palette size={18} /> },
        ].map(item => (
          <button
            key={item.id}
            onClick={() => setActiveSidebar(item.id)}
            className={`flex flex-col items-center gap-1.5 transition-all ${activeSidebar === item.id ? 'text-[#FFCC33] scale-110' : 'text-on-surface-variant/30 hover:text-on-surface-variant/60'}`}
          >
            <div className={`${activeSidebar === item.id ? 'bg-[#FFCC33]/10 p-2 rounded-xl' : ''}`}>
              {item.icon}
            </div>
            <span className="text-[9px] font-bold whitespace-nowrap">{item.id}</span>
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto bg-white p-4 no-scrollbar">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-black text-on-surface">{activeSidebar}</h3>
          <button className="text-[10px] bg-[#FFF9E6] text-[#7C5800] px-3 py-1 rounded-full font-black border border-[#FFEA80]/30 active:scale-95">我的名片</button>
        </div>

        {/* Filters and Search */}
        <div className="space-y-3 mb-6">
          <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
            {['我想找：女', '年龄：不限', '距离：500米内'].map(filter => (
              <div key={filter} className="bg-[#FBF9F8] border border-black/5 rounded-lg px-3 py-2 whitespace-nowrap text-[10px] font-bold text-on-surface-variant flex items-center gap-1">
                {filter}
                <ChevronRight size={10} className="rotate-90 opacity-40" />
              </div>
            ))}
          </div>
          
          <div className="flex items-center gap-3">
             <div className="flex-1 bg-[#FBF9F8] rounded-xl flex items-center px-4 py-2.5 gap-2 border border-black/5">
               <Search size={14} className="text-on-surface-variant/40" />
               <input 
                 type="text" 
                 placeholder="请输入您要查找的玩家名" 
                 className="bg-transparent border-none text-[10px] focus:outline-none w-full font-medium"
               />
             </div>
             <button className="bg-[#FFCC33] text-[#5C4033] px-5 py-2.5 rounded-xl text-[10px] font-black shadow-lg shadow-[#FFCC33]/20 active:scale-95">搜索</button>
          </div>
        </div>

        {/* User Card List */}
        <div className="space-y-4">
          {[
            { name: '阿梅', age: 22, lv: 66, dist: '500米内', gender: '♀', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amy' },
            { name: '晚风吹过', age: 24, lv: 60, dist: '500米内', gender: '♀', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Wind' },
            { name: '周琳琳', age: 25, lv: 15, dist: '500米内', gender: '♀', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lin' },
            { name: '小小', age: 21, lv: 66, dist: '500米内', gender: '♀', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tiny' }
          ].map((user, i) => (
            <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-3xl border border-black/5 shadow-sm active:bg-gray-50 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-gray-100 overflow-hidden shrink-0 border border-black/5">
                <img src={user.img} className="w-full h-full object-cover" alt="User" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-black text-on-surface truncate">{user.name}</span>
                    <span className="text-[10px] text-pink-400 font-bold">{user.gender}</span>
                  </div>
                  <span className="text-[9px] text-[#FFCC33] font-bold flex items-center gap-0.5">
                    <MapPin size={10} /> {user.dist}
                  </span>
                </div>
                <p className="text-[9px] text-on-surface-variant/60 font-bold mt-1">
                  {user.age}岁 | 火伴
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center gap-0.5 text-[#FFCC33]">
                     {[1,2,3,4].map(s => <Star key={s} size={8} fill="currentColor" stroke="none" />)}
                     <Star size={8} className="text-gray-200" fill="currentColor" stroke="none" />
                  </div>
                  <span className="text-[9px] font-mono text-on-surface-variant/40 font-black">LV.{user.lv}</span>
                </div>
              </div>
              <button className="bg-[#FFCC33] text-[#5C4033] px-4 py-2 rounded-xl text-[10px] font-black active:scale-95 transition-transform shrink-0 shadow-sm border border-[#FFCC33]/10">
                加好友
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-8 px-4 space-y-6 pb-24 bg-[#FBF9F8] min-h-screen">
      {/* Sub tabs Header */}
      <div className="flex items-center gap-8 mb-4">
        {['聊天', '广场'].map(subtab => (
          <button
            key={subtab}
            onClick={() => setActiveSubTab(subtab)}
            className={`text-2xl font-black relative transition-all ${activeSubTab === subtab ? 'text-on-surface scale-105' : 'text-on-surface-variant/30'}`}
          >
            {subtab}
            {activeSubTab === subtab && (
              <motion.div 
                layoutId="message-tab-indicator"
                className="absolute -bottom-2 left-0 w-full h-1.5 bg-[#FFCC33] rounded-full"
              />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeSubTab === '聊天' ? (
          <motion.div
            key="chat-list"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="space-y-4"
          >
            {[
              { name: '系统通知', msg: '您的文化勋章已更新，快去查看吧！', time: '10:45', count: 1, icon: <Menu size={20} /> },
              { name: '霍去病', msg: '少年，历史的脚步从未停止...', time: '昨天', count: 0, avatar: 's1' },
              { name: '林舒涵', msg: '你看这件扎染工艺品是不是很有特色？', time: '周三', count: 0, avatar: 'user2' }
            ].map((chat, i) => (
              <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-[2rem] border border-black/5 active:bg-gray-50 transition-colors cursor-pointer shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-[#FFF9E6] border border-[#FFEA80]/20 flex items-center justify-center text-[#FFCC33] shrink-0 overflow-hidden">
                  {chat.icon ? chat.icon : <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${chat.avatar}`} alt="Avatar" className="w-full h-full object-cover" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <h4 className="text-sm font-black text-on-surface truncate">{chat.name}</h4>
                    <span className="text-[10px] text-on-surface-variant/40 font-bold">{chat.time}</span>
                  </div>
                  <p className="text-[11px] text-on-surface-variant/60 mt-1 line-clamp-1 font-medium">{chat.msg}</p>
                </div>
                {chat.count > 0 && (
                  <div className="w-5 h-5 bg-[#FFCC33] rounded-full flex items-center justify-center text-[10px] font-black text-[#5C4033] shadow-lg shadow-[#FFCC33]/30">
                    {chat.count}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="discovery-view"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
          >
            {renderDiscoveryContent()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MeView = ({ userProfile, setIsLoggedIn, setAuthStep }: { userProfile: any, setIsLoggedIn: (v: boolean) => void, setAuthStep: (s: any) => void }) => {
  const [activeSubTab, setActiveSubTab] = useState('历史');

  const renderTabContent = () => {
    switch (activeSubTab) {
      case '历史':
        return (
          <div className="space-y-4">
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-black/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Lily" alt="Post Author" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-on-surface">爱喝柠檬茶</h4>
                  <p className="text-[10px] text-on-surface-variant/40 mt-0.5">2025.08.04 16:24</p>
                </div>
              </div>
              <p className="text-[11px] text-on-surface font-medium leading-relaxed mt-4 line-clamp-3">
                简单回顾下国庆那几天，陪母亲回家看医生，病好了一家乡之旅...
                文化之路，缅怀祖国的抗日英雄...
              </p>
              <div className="grid grid-cols-3 gap-2 mt-4">
                <div className="aspect-square rounded-xl bg-gray-100 overflow-hidden">
                  <img src="https://picsum.photos/seed/post1/300/300" className="w-full h-full object-cover" alt="p1" />
                </div>
                <div className="aspect-square rounded-xl bg-gray-100 overflow-hidden">
                  <img src="https://picsum.photos/seed/post2/300/300" className="w-full h-full object-cover" alt="p2" />
                </div>
                <div className="aspect-square rounded-xl bg-gray-100 overflow-hidden">
                  <img src="https://picsum.photos/seed/post3/300/300" className="w-full h-full object-cover" alt="p3" />
                </div>
              </div>
              <div className="flex items-center justify-between mt-6">
                <span className="text-[10px] text-on-surface-variant/40 font-bold">浏览96次</span>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-1.5 text-on-surface-variant/40">
                    <Heart size={14} />
                    <span className="text-[10px] font-bold">18</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-on-surface-variant/40">
                    <MessageCircle size={14} />
                    <span className="text-[10px] font-bold">06</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-on-surface-variant/40">
                    <Share2 size={14} />
                    <span className="text-[10px] font-bold">09</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case '点赞':
        return (
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-black/5 shadow-sm">
                <div className="aspect-square bg-gray-100 relative">
                  <img src={`https://picsum.photos/seed/like${i}/400/400`} className="w-full h-full object-cover" />
                  <div className="absolute top-2 right-2 p-1.5 bg-[#FFB800] rounded-full text-black">
                    <Heart size={12} fill="currentColor" />
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-[10px] font-bold text-on-surface truncate">精选文化瞬间 #{i}</p>
                  <p className="text-[9px] text-on-surface-variant/60 mt-1">赞过的人也觉得好玩</p>
                </div>
              </div>
            ))}
          </div>
        );
      case '收藏':
        return (
          <div className="space-y-3">
            {[
              { name: '西安城墙博物馆', tag: '文旅地点', rate: '9.8' },
              { name: '霍去病雕像精缩版', tag: '精选好物', rate: '9.5' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-white p-3 rounded-2xl border border-black/5 shadow-sm">
                <div className="w-16 h-16 rounded-xl bg-gray-100 overflow-hidden shrink-0">
                  <img src={`https://picsum.photos/seed/fav${i}/200/200`} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-on-surface">{item.name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[9px] text-[#FFB800] font-bold bg-[#FFF9E6] px-1.5 py-0.5 rounded border border-[#FFEA80]/30">
                      {item.tag}
                    </span>
                    <div className="flex items-center gap-0.5 text-[#FFB800]">
                      <Star size={10} fill="currentColor" />
                      <span className="text-[10px] font-bold">{item.rate}</span>
                    </div>
                  </div>
                </div>
                <button className="text-[#FFB800]">
                  <Sparkles size={18} />
                </button>
              </div>
            ))}
          </div>
        );
      case '我的':
        return (
          <div className="bg-white rounded-[2rem] border border-black/5 overflow-hidden shadow-sm">
             {[
               { label: '我的等级', val: 'Lv.42', icon: <Award size={18} /> },
               { label: '勋章墙', val: '24枚', icon: <Shield size={18} /> },
               { label: '绑定动态', val: '已开启', icon: <FileText size={18} /> },
               { label: '系统设置', val: '', icon: <MapPin size={18} /> },
               { label: '退出登录', val: '', icon: <LogOut size={18} />, action: () => {
                 setIsLoggedIn(false);
                 setAuthStep('landing');
               } }
             ].map((item: any, i) => (
               <div 
                 key={item.label} 
                 onClick={item.action}
                 className={`p-5 flex items-center justify-between group active:bg-gray-50 transition-colors cursor-pointer ${i !== 4 ? 'border-b border-black/5' : ''}`}
               >
                 <div className="flex items-center gap-3">
                   <div className={`${item.label === '退出登录' ? 'text-red-400' : 'text-on-surface-variant/40 group-hover:text-[#FFB800]'}`}>{item.icon}</div>
                   <span className={`text-sm font-bold ${item.label === '退出登录' ? 'text-red-500' : 'text-on-surface'}`}>{item.label}</span>
                 </div>
                 <div className="flex items-center gap-2">
                   {item.val && <span className="text-[10px] font-bold text-on-surface-variant/40">{item.val}</span>}
                   <ChevronRight size={18} className="text-on-surface-variant/40 group-hover:text-[#FFB800]" />
                 </div>
               </div>
             ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="pb-32 bg-[#FBF9F8] min-h-screen">
      {/* Page Header */}
      <div className="px-4 pt-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-black text-on-surface">称谓</h2>
          <div className="bg-[#FFF9E6] border border-[#FFEA80] rounded-full px-3 py-1 flex items-center gap-1">
            <Star size={14} className="text-[#FFB800]" fill="currentColor" />
            <span className="text-xs font-bold text-[#7C5800]">生面值：6899</span>
          </div>
        </div>
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-black/5">
          <MoreHorizontal size={20} className="text-on-surface" />
        </div>
      </div>

      {/* Profile Card */}
      <div className="mx-4 mt-6 bg-white rounded-3xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-black/5">
        <div className="flex items-start gap-4">
          <div className="w-20 h-20 rounded-full border-4 border-[#FFF9E6] overflow-hidden bg-[#FFEA80]/20 shrink-0">
            <img src={userProfile.avatar || "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"} alt="Avatar" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 pt-1">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-on-surface">{userProfile.nickname || "爱吃红烧肉"}</h3>
              <Edit2 size={16} className="text-on-surface-variant/40" />
            </div>
            <p className="text-sm text-on-surface-variant/60 font-medium mt-1">ID：{Math.floor(Math.random() * 900000000) + 100000000}</p>
          </div>
        </div>

        {/* Info Tags */}
        <div className="flex flex-wrap gap-x-4 gap-y-2 mt-6">
          {[
            { icon: <UserIcon size={12} />, text: '38岁' },
            { text: '7月5日' },
            { text: '巨蟹座' },
            { text: '首都经济贸易大学' },
            { text: '现居北京' },
            { text: '来自北京' },
            { text: '华为终端有限公司' },
            { text: 'IT' }
          ].map((info, i) => (
            <div key={i} className="flex items-center gap-1 text-[11px] font-bold text-on-surface-variant">
              {info.icon}
              <span>{info.text}</span>
              {i !== 7 && <span className="ml-4 text-black/5">|</span>}
            </div>
          ))}
        </div>

        {/* Medals & Level */}
        <div className="mt-8 space-y-6">
          <div className="flex items-center justify-between group cursor-pointer">
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold text-on-surface shrink-0">英雄勋章</span>
              <div className="flex gap-2">
                <Award size={20} className="text-[#FFB800]" />
                <Star size={20} className="text-[#FFB800]" fill="currentColor" />
                <Star size={20} className="text-[#FFB800]" fill="currentColor" />
                <Star size={20} className="text-[#FFB800]" fill="currentColor" />
                <div className="w-5 h-5 rounded-full bg-[#FFB800] text-black text-[10px] font-bold flex items-center justify-center">币</div>
                <div className="w-5 h-5 rounded-full bg-[#FFB800] text-black text-[10px] font-bold flex items-center justify-center">币</div>
              </div>
            </div>
            <ChevronRight size={18} className="text-on-surface-variant/40 transition-transform group-hover:translate-x-1" />
          </div>

          <div className="flex items-center justify-between group cursor-pointer">
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold text-on-surface shrink-0">根器</span>
              <div className="flex gap-3">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className={`w-6 h-6 rounded-md flex items-center justify-center ${i === 1 ? 'bg-blue-100 text-blue-500' : 'bg-gray-100 text-gray-400'}`}>
                    <Shield size={14} fill={i === 1 ? 'currentColor' : 'none'} />
                  </div>
                ))}
              </div>
            </div>
            <ChevronRight size={18} className="text-on-surface-variant/40 transition-transform group-hover:translate-x-1" />
          </div>

          <div className="flex items-center justify-between py-2 group cursor-pointer">
            <p className="text-sm text-on-surface-variant/40 font-medium">编辑个性签名，展示我的独特态度</p>
            <ChevronRight size={18} className="text-on-surface-variant/40 transition-transform group-hover:translate-x-1" />
          </div>
        </div>

        {/* Tags */}
        <div className="mt-4 flex items-center gap-2">
          <div className="bg-[#FBF9F8] border border-black/5 px-4 py-2 rounded-xl text-xs font-bold text-on-surface">添加标签</div>
          <div className="w-8 h-8 bg-[#FBF9F8] border border-black/5 rounded-xl flex items-center justify-center text-on-surface-variant/40">
            <Plus size={16} />
          </div>
        </div>

        {/* Main Actions */}
        <div className="mt-8 grid grid-cols-3 gap-3">
          {[
            { label: '订单', icon: <FileText size={18} />, color: 'bg-[#FFF9F0]' },
            { label: '装饰', icon: <Palette size={18} />, color: 'bg-[#FFF0F0]' },
            { label: '修行', icon: <Sparkles size={18} />, color: 'bg-[#F0F9FF]' }
          ].map(action => (
            <div key={action.label} className={`${action.color} rounded-2xl py-4 flex flex-col items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-transform cursor-pointer`}>
              <div className="text-[#FFB800]">{action.icon}</div>
              <span className="text-sm font-bold text-[#7C5800]">{action.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section Tabs */}
      <div className="mt-8 flex items-center justify-around px-6 border-b border-black/5">
        {['历史', '点赞', '收藏', '我的'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveSubTab(tab)}
            className={`pb-3 text-sm font-bold relative transition-colors ${activeSubTab === tab ? 'text-on-surface' : 'text-on-surface-variant/40'}`}
          >
            {tab}
            {activeSubTab === tab && (
              <motion.div
                layoutId="me-subtab-underline"
                className="absolute bottom-0 left-0 w-full h-1 bg-[#FFB800] rounded-full"
              />
            )}
          </button>
        ))}
      </div>

      {/* Post Feed or Content */}
      <div className="p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSubTab}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            {renderTabContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const EventDetailView = ({ event, onBack }: { event: any, onBack: () => void }) => (
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

// --- Experience Tab (Real-time Control) Components ---

const ExperienceTabHomeView = ({ 
  phase, 
  setPhase, 
  onShowTaskDetails,
  onShowCheckIn,
  onShowOrders,
  onShowMedals
}: { 
  phase: 'not_started' | 'pending' | 'active' | 'arrived' | 'success' | 'finished',
  setPhase: (p: any) => void,
  onShowTaskDetails: () => void,
  onShowCheckIn: () => void,
  onShowOrders: () => void,
  onShowMedals: () => void
}) => {
  const [heartRate, setHeartRate] = useState(98);
  const [flowValue, setFlowValue] = useState(72);

  // States handling for simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setHeartRate(prev => 95 + Math.floor(Math.random() * 8));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const stages = [
    { name: '第1关 誓师出征', status: 'completed' },
    { name: '第2关 漠北追击', status: 'active' },
    { name: '第3关 战鼓挑战', status: 'locked' },
    { name: '第4关 智取敌营', status: 'locked' },
    { name: '第5关 封狼居胥', status: 'locked' },
    { name: '第6关 火种传承', status: 'locked' },
  ];

  // Helper: Status Label Color
  const getPhaseConfig = () => {
    switch(phase) {
      case 'not_started': return { title: '未开始', color: 'bg-gray-400', banner: '你还没有开始当前体验' };
      case 'pending': return { title: '待核销', color: 'bg-orange-500', banner: '请先前往现场核销' };
      case 'arrived': return { title: '已到达', color: 'bg-green-500', banner: '已到达任务点，可立即打卡' };
      case 'success': return { title: '打卡成功', color: 'bg-green-600', banner: '任务已完成' };
      case 'finished': return { title: '已完赛', color: 'bg-[#FFD36B]', banner: '恭喜完成霍去病英雄挑战' };
      default: return { title: '进行中', color: 'bg-[#9C1B1F]', banner: '' };
    }
  };

  const config = getPhaseConfig();

  if (phase === 'not_started') {
    return (
      <div className="min-h-screen bg-[#FBF9F8] flex flex-col items-center justify-center p-8">
        <div className="w-24 h-24 rounded-full bg-[#9C1B1F]/5 flex items-center justify-center text-[#9C1B1F] mb-6">
          <Sparkles size={48} />
        </div>
        <h3 className="text-xl font-black text-[#38100E]">你还没有开始当前体验</h3>
        <p className="mt-2 text-xs font-bold text-[#8C6A58]/60 text-center leading-relaxed">
          购买英雄体验票，开启属于你的封狼居胥之旅。<br/>点燃火种，传承英雄精神。
        </p>
        <button 
          onClick={() => setPhase('pending')}
          className="mt-10 w-full h-16 rounded-3xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm shadow-xl shadow-[#9C171D]/20 active:scale-95 transition-all"
        >
          去购票
        </button>
      </div>
    );
  }

  if (phase === 'pending') {
    return (
      <div className="min-h-screen bg-[#FBF9F8] flex flex-col items-center justify-center p-8 text-center">
        <div className="w-32 h-32 bg-white rounded-3xl p-4 shadow-xl border border-black/5 mb-8">
           <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=HUOHUO-TKT-001" className="w-full h-full opacity-20 grayscale" alt="qr" />
           <div className="absolute inset-0 flex items-center justify-center">
              <Lock size={32} className="text-[#9C1B1F]/20" />
           </div>
        </div>
        <h3 className="text-xl font-black text-[#38100E]">请先前往现场核销</h3>
        <p className="mt-2 text-xs font-bold text-[#8C6A58]/60 leading-relaxed">
          到达“蓝色港湾 · 黄火火体验点”后，<br/>向工作人员展示核销码以激活体验。
        </p>
        <div className="mt-12 w-full space-y-4">
          <button 
            onClick={() => setPhase('active')}
            className="w-full h-16 rounded-3xl bg-[#38100E] text-[#FFD36B] font-black text-sm shadow-xl"
          >
            查看核销码
          </button>
          <button className="w-full py-2 text-xs font-black text-[#8C6A58]/40 uppercase tracking-widest">联系客服</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FBF9F8] flex flex-col">
      {/* 1. 顶部状态区 */}
      <header className="relative shrink-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#9B161B] via-[#711619] to-[#38100E]" />
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        <div className="relative z-10 px-6 pt-14 pb-8 text-white">
           <div className="flex justify-between items-start">
              <div className="space-y-1">
                 <div className="flex items-center gap-2">
                    <MapPin size={12} className="text-[#FFD36B]" />
                    <span className="text-[10px] font-black text-[#FFD36B]/60 uppercase tracking-widest">蓝色港湾 · 黄火火体验点</span>
                 </div>
                 <h2 className="text-2xl font-black flex items-center gap-2">
                    霍去病
                    <span className={`px-2 py-0.5 rounded-lg text-[9px] font-black uppercase text-white shadow-lg ${config.color}`}>
                       {config.title}
                    </span>
                 </h2>
                 <p className="text-[11px] font-bold text-white/40 italic">封狼居胥挑战线</p>
              </div>
              <div className="flex gap-2">
                 <button className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center"><Bell size={18} /></button>
                 <button className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center"><MessageCircle size={18} /></button>
              </div>
           </div>
        </div>
        
        {/* 火焰微光效果 */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-64 h-20 bg-[#9C1B1F] blur-[60px] opacity-40 rounded-full" />
      </header>

      <div className="flex-1 px-6 -mt-4 relative z-20 pb-40 space-y-6">
        {/* 2. 当前任务主卡 */}
        <section className={`bg-white rounded-[40px] p-8 border-2 shadow-2xl transition-all duration-500 overflow-hidden relative ${phase === 'arrived' ? 'border-green-500 shadow-green-500/20' : 'border-[#9C1B1F] shadow-[#9C171D]/10'}`}>
           {phase === 'arrived' && (
             <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-bl-full flex items-center justify-center pl-8 pt-4"
             >
               <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white animate-pulse">
                 <CheckCircle2 size={32} />
               </div>
             </motion.div>
           )}
           
           <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-start">
                 <div>
                    <span className="text-[#9C1B1F] text-[11px] font-black uppercase tracking-[.25em]">Current Quest</span>
                    <h3 className="text-2xl font-black text-[#38100E] mt-1">第2关 · 漠北追击</h3>
                 </div>
                 {phase !== 'finished' && (
                    <div className="flex flex-col items-end">
                       <div className={`flex items-center gap-1 font-black ${phase === 'arrived' ? 'text-green-600' : 'text-[#9C1B1F]'}`}>
                          <Navigation size={14} fill="currentColor" className="rotate-45" />
                          <span className="text-lg">{phase === 'arrived' ? '0' : '120'}m</span>
                       </div>
                       <span className="text-[9px] font-bold text-[#8C6A58]/40 uppercase">Distance</span>
                    </div>
                 )}
              </div>

              <p className="text-xs text-[#8C6A58] leading-relaxed font-bold border-l-2 border-[#F5DDA2] pl-3 py-1">
                “大漠风起，你率轻骑深入敌后，前往战鼓点完成本关挑战。”
              </p>

              <div className={`p-4 rounded-2xl border flex items-center gap-4 ${phase === 'arrived' ? 'bg-green-50 border-green-100 text-green-800' : 'bg-[#FBF9F8] border-black/5 text-[#38100E]'}`}>
                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${phase === 'arrived' ? 'bg-green-500 text-white' : 'bg-[#9C1B1F]/10 text-[#9C1B1F]'}`}>
                    {phase === 'arrived' ? <Zap size={20} /> : <MapPin size={20} />}
                 </div>
                 <div>
                    <h4 className="text-[11px] font-black uppercase tracking-wider">{phase === 'arrived' ? '已到达打卡点' : '下一步任务'}</h4>
                    <p className="text-[10px] font-bold opacity-60 leading-tight">前往战鼓点完成打卡</p>
                 </div>
              </div>

              <div className="flex gap-3 pt-2">
                 {phase === 'finished' ? (
                   <button 
                     onClick={() => setPhase('active')}
                     className="flex-1 h-16 rounded-2xl bg-[#38100E] text-[#FFD36B] font-black text-sm shadow-xl flex items-center justify-center gap-2"
                   >
                     查看完赛结果
                   </button>
                 ) : (
                   <>
                     <button 
                       onClick={() => {
                         if (phase === 'arrived') {
                            setPhase('success');
                         } else {
                            onShowCheckIn();
                         }
                       }}
                       className={`flex-1 h-16 rounded-2xl font-black text-sm shadow-xl flex items-center justify-center gap-3 transition-all ${phase === 'arrived' ? 'bg-green-600 text-white animate-bounce' : 'bg-[#9C1B1F] text-[#FFD36B]'}`}
                     >
                        <Zap size={20} fill={phase === 'arrived' ? 'currentColor' : 'none'} />
                        {phase === 'arrived' ? '立即打卡' : '去打卡'}
                     </button>
                     <button 
                       onClick={onShowTaskDetails}
                       className="h-16 w-16 bg-[#FBF9F8] border border-black/5 rounded-2xl flex items-center justify-center text-[#38100E] active:scale-95 transition-all shadow-sm"
                     >
                        <Menu size={20} />
                     </button>
                   </>
                 )}
              </div>
           </div>
        </section>

        {/* 3. 地图与距离区 */}
        <section className="bg-white rounded-[40px] p-6 border border-black/5 shadow-sm overflow-hidden space-y-4">
           <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-[10px] font-black text-[#8C6A58]/60 uppercase tracking-widest">
                 <Radio size={14} className="text-[#9C1B1F] animate-pulse" />
                 实时距离导引
              </div>
              <span className="text-[9px] font-black px-2 py-0.5 rounded-lg bg-[#9C1B1F]/5 text-[#9C1B1F]">GPS 已连接</span>
           </div>
           
           <div className="h-40 rounded-[32px] bg-gray-50 border border-black/5 relative overflow-hidden">
              {/* Mock Map Visual */}
              <div className="absolute inset-0 bg-[#FBF9F8]">
                 <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#9C1B1F_1px,transparent_1px)] [background-size:20px_20px]" />
                 <motion.div 
                   animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                   transition={{ repeat: Infinity, duration: 2 }}
                   className="absolute top-1/2 left-1/3 w-20 h-20 bg-[#9C1B1F] rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" 
                 />
                 <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-[#9C1B1F] rounded-full border-2 border-white shadow-lg -translate-x-1/2 -translate-y-1/2" />
                 <div className="absolute top-1/4 right-1/4 w-6 h-6 bg-[#FFB800] rounded-full border-2 border-white shadow-xl -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    <Flag size={10} className="text-black" />
                 </div>
                 {/* Dotted Line */}
                 <svg className="absolute inset-0 w-full h-full">
                    <line x1="33%" y1="50%" x2="75%" y2="25%" stroke="#9C1B1F" strokeWidth="2" strokeDasharray="4 4" opacity="0.3" />
                 </svg>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md rounded-xl p-3 border border-white/20 shadow-lg">
                 <div className="flex justify-between items-center text-[10px]">
                    <div className="flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                       <span className="font-black text-[#38100E]">你正在接近任务点</span>
                    </div>
                    <span className="font-bold text-[#8C6A58]">打卡范围：30米内</span>
                 </div>
              </div>
           </div>

           <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#FBF9F8] p-4 rounded-2xl border border-black/5">
                 <span className="text-[9px] font-black text-[#8C6A58]/40 uppercase block mb-1">预计步行</span>
                 <span className="text-sm font-black text-[#38100E]">约 2 分钟</span>
              </div>
              <div className="bg-[#FBF9F8] p-4 rounded-2xl border border-black/5">
                 <span className="text-[9px] font-black text-[#8C6A58]/40 uppercase block mb-1">当前时速</span>
                 <span className="text-sm font-black text-[#38100E]">4.2 km/h</span>
              </div>
           </div>
        </section>

        {/* 4. 任务进度区 */}
        <section className="space-y-4">
           <div className="flex items-center justify-between">
              <h3 className="text-sm font-black text-[#38100E]">任务进度</h3>
              <span className="text-[10px] font-black text-[#9C1B1F]">2 / 6 已完成</span>
           </div>
           <div className="bg-white rounded-[40px] p-6 border border-black/5 shadow-sm">
             <div className="grid grid-cols-3 gap-y-8 gap-x-4">
                {stages.map((stage, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                     <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xs font-black shadow-lg transition-all ${
                       stage.status === 'completed' ? 'bg-[#FFB800] text-black' :
                       stage.status === 'active' ? 'bg-[#9C1B1F] text-[#FFD36B] scale-110 ring-4 ring-[#9C1B1F]/10 animate-pulse' :
                       'bg-[#FBF9F8] text-gray-300 border border-black/5'
                     }`}>
                       {stage.status === 'completed' ? <Check size={20} strokeWidth={4} /> : <span className="opacity-60">{i + 1}</span>}
                     </div>
                     <span className={`text-[9px] font-black text-center leading-tight ${stage.status === 'active' ? 'text-[#38100E]' : 'text-[#8C6A58]/40'}`}>
                        {stage.name.split(' ')[1]}
                     </span>
                  </div>
                ))}
             </div>
           </div>
        </section>

        {/* 5. 奖励与成长区 */}
        <section className="space-y-4">
           <h3 className="text-sm font-black text-[#38100E]">本次体验成长</h3>
           <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-[#38100E] to-[#250A09] rounded-[32px] p-5 text-[#FFD36B] shadow-xl relative overflow-hidden">
                 <Flame size={40} className="absolute -bottom-4 -right-4 opacity-10 rotate-12" />
                 <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center"><Flame size={16} fill="currentColor" /></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#FFD36B]/60">当前火种</span>
                 </div>
                 <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black italic">62</span>
                    <span className="text-[10px] font-black text-green-400">+10</span>
                 </div>
              </div>
              <div className="bg-white rounded-[32px] p-5 border border-black/5 shadow-sm relative overflow-hidden">
                 <Coins size={40} className="absolute -bottom-4 -right-4 opacity-5" />
                 <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-xl bg-[#9C1B1F]/5 flex items-center justify-center text-[#9C1B1F]"><Coins size={16} /></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#8C6A58]/40">当前银票</span>
                 </div>
                 <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black italic text-[#38100E]">35</span>
                    <span className="text-[10px] font-black text-[#9C1B1F]">+5</span>
                 </div>
              </div>
              
              <div className="col-span-2 bg-white rounded-[32px] p-6 border border-black/5 shadow-sm flex items-center justify-between">
                 <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#F5DDA2]/20 border border-[#F5DDA2] flex items-center justify-center text-[#9C1B1F] shadow-inner">
                       <Award size={28} />
                    </div>
                    <div>
                       <h4 className="text-sm font-black text-[#38100E]">少年先锋</h4>
                       <p className="text-[10px] font-bold text-[#8C6A58]/60 mt-0.5">Hero Level · 250 Exp left</p>
                    </div>
                 </div>
                 <div className="text-right">
                    <span className="text-xl font-black italic text-[#38100E]">LV.3</span>
                    <div className="w-20 h-1.5 bg-gray-100 rounded-full mt-2 overflow-hidden">
                       <div className="w-2/3 h-full bg-[#9C1B1F]" />
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 6. 队伍状态区 */}
        <section className="space-y-4">
           <h3 className="text-sm font-black text-[#38100E]">我的队伍</h3>
           <div className="bg-white rounded-[40px] p-6 border border-black/5 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                 <div>
                    <h4 className="text-sm font-black text-[#38100E]">冠军侯小队</h4>
                    <p className="text-[10px] font-bold text-[#8C6A58]/60">Team ID: CH-2026-0428</p>
                 </div>
                 <div className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-[10px] font-black flex items-center gap-1.5 shadow-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    4人已到达
                 </div>
              </div>
              
              <div className="flex justify-between items-center mb-8">
                 <div className="flex -space-x-3">
                    {[1, 2, 3, 4, 5].map(i => (
                      <div key={i} className="w-12 h-12 rounded-2xl border-4 border-white bg-gray-100 overflow-hidden shadow-xl">
                        <img src={`https://i.pravatar.cc/150?img=${i + 10}`} className="w-full h-full object-cover" alt="avatar" />
                      </div>
                    ))}
                    <div className="w-12 h-12 rounded-2xl border-4 border-white bg-[#FBF9F8] text-[#8C6A58]/20 flex items-center justify-center font-black text-sm shadow-xl">+3</div>
                 </div>
                 <div className="text-right">
                    <span className="text-[10px] font-black text-[#8C6A58]/40 uppercase block">成员进度</span>
                    <span className="text-base font-black text-[#38100E]">5 / 8</span>
                 </div>
              </div>

              <div className="flex gap-3">
                 <button className="flex-1 h-12 rounded-2xl border-2 border-black/5 text-[#38100E] font-black text-[11px] active:bg-gray-50 transition-all flex items-center justify-center gap-2">
                    <Users size={16} />
                    查看队伍
                 </button>
                 <button className="flex-1 h-12 rounded-2xl bg-[#38100E] text-[#FFD36B] font-black text-[11px] shadow-lg flex items-center justify-center gap-2">
                    <Bell size={16} />
                    集合提醒
                 </button>
              </div>
           </div>
        </section>

        {/* 7. 心流状态区 */}
        <section className="space-y-4">
           <h3 className="text-sm font-black text-[#38100E]">当前心流状态</h3>
           <div className="bg-gradient-to-br from-white to-[#FBF9F8] rounded-[40px] p-8 border border-black/5 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8">
                 <span className="px-3 py-1 rounded-full bg-[#9C1B1F] text-[#FFD36B] text-[10px] font-black uppercase tracking-widest shadow-lg">沉浸中</span>
              </div>
              
              <div className="flex flex-col items-center">
                 <div className="relative w-48 h-48 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                       <circle cx="96" cy="96" r="88" stroke="#F5DDA2" strokeWidth="8" fill="none" opacity="0.1" />
                       <motion.circle 
                          cx="96" cy="96" r="88" stroke="#9C1B1F" strokeWidth="12" fill="none" 
                          strokeDasharray="552.92" strokeDashoffset={552.92 * (1 - flowValue / 100)} 
                          strokeLinecap="round"
                       />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                       <span className="text-[10px] font-black text-[#8C6A58]/40 uppercase tracking-widest">Flow Value</span>
                       <span className="text-5xl font-black text-[#38100E] italic">{flowValue}</span>
                    </div>
                 </div>

                 <div className="grid grid-cols-2 w-full gap-4 mt-8">
                    <div className="text-center p-4 rounded-3xl bg-[#9C1B1F]/5 border border-[#9C1B1F]/10">
                       <div className="flex items-center justify-center gap-2 mb-1 text-[#9C1B1F]">
                          <Heart size={14} fill="currentColor" className="animate-pulse" />
                          <span className="text-[10px] font-black uppercase">Heart Rate</span>
                       </div>
                       <span className="text-xl font-black text-[#38100E]">{heartRate} <span className="text-[10px] font-bold text-[#8C6A58]/40">bpm</span></span>
                    </div>
                    <div className="text-center p-4 rounded-3xl bg-blue-50 border border-blue-100">
                       <div className="flex items-center justify-center gap-2 mb-1 text-blue-600">
                          <Activity size={14} />
                          <span className="text-[10px] font-black uppercase">SpO2</span>
                       </div>
                       <span className="text-xl font-black text-[#38100E]">98 <span className="text-[10px] font-bold text-[#8C6A58]/40">%</span></span>
                    </div>
                 </div>

                 <div className="mt-6 flex items-center gap-2 px-6 py-2 rounded-full bg-green-50 text-green-600 border border-green-100">
                    <Bluetooth size={14} />
                    <span className="text-[10px] font-black uppercase tracking-tight">手环已连接 · 实时同步中</span>
                 </div>

                 <p className="mt-6 text-xs font-bold text-[#8C6A58]/60 text-center max-w-[200px]">
                    “你当前正处于较好的沉浸体验状态，火种共鸣极佳。”
                 </p>
              </div>
           </div>
        </section>

        {/* 8. 体验快捷入口区 */}
        <section className="grid grid-cols-4 gap-4 py-8">
           {[
             { icon: <Menu size={20} />, label: '任务详情', onClick: onShowTaskDetails },
             { icon: <Navigation size={20} />, label: '地图导航', onClick: onShowCheckIn },
             { icon: <Award size={20} />, label: '奖励记录', onClick: onShowMedals },
             { icon: <MessageCircle size={20} />, label: '联系官', onClick: onShowOrders }
           ].map((item, i) => (
             <button 
               key={i} 
               onClick={item.onClick}
               className="flex flex-col items-center gap-2 group"
             >
                <div className="w-14 h-14 rounded-[20px] bg-white border border-black/5 flex items-center justify-center text-[#38100E] shadow-sm group-active:scale-90 transition-all">
                   {item.icon}
                </div>
                <span className="text-[10px] font-black text-[#8C6A58] opacity-60">{item.label}</span>
             </button>
           ))}
        </section>
      </div>

      {/* 9. 底部固定主操作栏 */}
      <footer className="fixed bottom-0 left-0 right-0 h-24 bg-white/95 backdrop-blur-xl border-t border-black/5 px-6 py-4 flex items-center justify-between z-50">
         <div className="flex flex-col">
            <span className="text-[10px] font-black text-[#9C1B1F] uppercase tracking-widest">Active Task</span>
            <h4 className="text-sm font-black text-[#38100E]">第2关 · 漠北追击</h4>
         </div>
         <button 
            onClick={() => {
              if (phase === 'arrived') {
                 setPhase('success');
              } else if (phase === 'finished') {
                 // handle finished
              } else {
                 onShowCheckIn();
              }
            }}
            className="h-14 px-10 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm shadow-xl shadow-[#9C171D]/20 active:scale-95 transition-all flex items-center gap-2"
         >
            {phase === 'arrived' ? <CheckCircle2 size={18} /> : <Zap size={18} />}
            {phase === 'arrived' ? '立即打卡' : '去打卡'}
         </button>
      </footer>

      {/* 打卡成功弹窗 */}
      <AnimatePresence>
        {phase === 'success' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[6000] bg-black/80 backdrop-blur-md flex items-center justify-center p-8"
          >
            <motion.div 
               initial={{ scale: 0.5, y: 50 }}
               animate={{ scale: 1, y: 0 }}
               className="w-full max-w-sm bg-white rounded-[48px] p-8 text-center relative overflow-hidden"
            >
               <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#9C1B1F] via-[#FFD36B] to-[#9C1B1F]" />
               
               <div className="w-24 h-24 bg-[#FFB800] text-black rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-[#FFB800]/40">
                  <Check size={48} strokeWidth={4} />
               </div>
               
               <h3 className="text-3xl font-black text-[#38100E]">打卡成功</h3>
               <p className="mt-2 text-[#8C6A58] text-sm font-bold">你已成功完成“漠北追击”</p>
               
               <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-[#9C1B1F]/5 p-4 rounded-3xl border border-[#9C1B1F]/10">
                     <div className="flex items-center justify-center gap-2 text-[#9C1B1F] mb-1">
                        <Flame size={14} fill="currentColor" />
                        <span className="text-[10px] font-black italic">火种</span>
                     </div>
                     <span className="text-xl font-black">+10</span>
                  </div>
                  <div className="bg-[#FFB800]/5 p-4 rounded-3xl border border-[#FFB800]/10">
                     <div className="flex items-center justify-center gap-2 text-[#FFB800] mb-1">
                        <Coins size={14} fill="currentColor" />
                        <span className="text-[10px] font-black italic">银票</span>
                     </div>
                     <span className="text-xl font-black">+5</span>
                  </div>
               </div>

               <button 
                 onClick={() => {
                   setPhase('finished');
                 }}
                 className="mt-10 w-full h-16 rounded-[24px] bg-[#38100E] text-[#FFD36B] font-black text-sm shadow-xl"
               >
                 查看后续剧情
               </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MallHomeView = ({ 
  onClose, 
  onSelectProduct, 
  onViewOrders 
}: { 
  onClose: () => void, 
  onSelectProduct: (product: any) => void,
  onViewOrders: () => void
}) => {
  const [activeCategory, setActiveCategory] = useState('全部');
  
  const categories = [
    { id: 'all', name: '全部', icon: <Menu size={14} /> },
    { id: 'medal', name: '英雄勋章', icon: <Award size={14} /> },
    { id: 'memento', name: '完赛纪念', icon: <Trophy size={14} /> },
    { id: 'city', name: '城市限定', icon: <MapPin size={14} /> },
    { id: 'gear', name: '英雄装备', icon: <Zap size={14} /> },
    { id: 'hidden', name: '隐藏路线', icon: <Compass size={14} /> },
  ];

  const products = [
    {
      id: 'p1',
      name: '霍去病实体纪念勋章',
      price: 39,
      unlocked: true,
      tag: '已解锁',
      desc: '完成霍去病体验后可购买',
      category: '英雄勋章',
      image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2670&auto=format&fit=crop',
    },
    {
      id: 'p2',
      name: '冠军侯火种挂件',
      price: 29,
      unlocked: true,
      tag: '已解锁',
      desc: '完赛纪念周边',
      category: '完赛纪念',
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2680&auto=format&fit=crop',
    },
    {
      id: 'p3',
      name: '岳飞精忠勋章',
      price: 39,
      unlocked: false,
      tag: '未解锁',
      desc: '完成岳飞英雄体验',
      category: '英雄勋章',
      image: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=2732&auto=format&fit=crop',
    },
    {
      id: 'p4',
      name: '花木兰巾帼徽章',
      price: 39,
      unlocked: false,
      tag: '未解锁',
      desc: '完成花木兰英雄体验',
      category: '英雄勋章',
      image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2670&auto=format&fit=crop',
    }
  ];

  const filteredProducts = activeCategory === '全部' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      className="fixed inset-0 z-[700] bg-[#FBF9F8] overflow-y-auto flex flex-col"
    >
      <header className="h-16 px-6 bg-white border-b border-black/5 flex items-center justify-between shrink-0 sticky top-0 z-20">
        <button onClick={onClose} className="p-2 -ml-2 text-[#38100E]"><ArrowLeft size={24} strokeWidth={3} /></button>
        <h2 className="text-lg font-black text-[#38100E]">火种商城</h2>
        <button onClick={onViewOrders} className="p-2 -mr-2 text-[#38100E]"><ShoppingBag size={22} /></button>
      </header>

      <div className="flex-1 pb-12">
        {/* 用户资产区 */}
        <section className="px-6 pt-6">
          <div className="bg-[#38100E] rounded-[32px] p-6 text-[#FFD36B] relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#9C1B1F]/30 rounded-full -mr-12 -mt-12 blur-3xl" />
            <div className="relative z-10 flex justify-between items-end">
              <div className="space-y-4">
                <div className="flex gap-6">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1">
                      <Flame size={14} fill="currentColor" />
                      <span className="text-xl font-black">120</span>
                    </div>
                    <span className="text-[10px] font-bold text-[#FFD36B]/40 uppercase tracking-widest">火种</span>
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1">
                      <Coins size={14} />
                      <span className="text-xl font-black">30</span>
                    </div>
                    <span className="text-[10px] font-bold text-[#FFD36B]/40 uppercase tracking-widest">银票</span>
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1">
                      <Award size={14} />
                      <span className="text-xl font-black">3</span>
                    </div>
                    <span className="text-[10px] font-bold text-[#FFD36B]/40 uppercase tracking-widest">勋章</span>
                  </div>
                </div>
                <p className="text-[11px] font-medium text-[#FFD36B]/60 leading-relaxed">
                  “完成英雄体验，可解锁更多限定纪念。”
                </p>
              </div>
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/5">
                <Sparkles size={24} className="text-[#FFD36B]" />
              </div>
            </div>
          </div>
        </section>

        {/* Mall Banner */}
        <section className="px-6 mt-6">
          <div className="bg-gradient-to-br from-[#9C1B1F] to-[#711619] rounded-[32px] p-6 text-white relative overflow-hidden shadow-lg">
            <div className="absolute right-0 bottom-0 w-40 h-40 bg-[#FFD36B]/10 rounded-full -mr-16 -mb-16 blur-2xl" />
            <h3 className="text-xl font-black mb-1">把你的英雄时刻带回家</h3>
            <p className="text-xs text-white/60 font-medium leading-relaxed max-w-[200px]">
              完成体验后解锁专属勋章、城市限定与英雄纪念。
            </p>
            <button className="mt-6 h-10 px-6 rounded-xl bg-[#FFD36B] text-[#38100E] font-black text-xs shadow-lg active:scale-95 transition-all">
              查看已解锁
            </button>
          </div>
        </section>

        {/* 分类筛选 */}
        <div className="mt-8 px-6 overflow-x-auto no-scrollbar flex gap-4 pb-2">
          {categories.map(cat => (
            <button 
              key={cat.id}
              onClick={() => setActiveCategory(cat.name)}
              className={`shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-black transition-all ${activeCategory === cat.name ? 'bg-[#38100E] text-[#FFD36B] shadow-xl' : 'bg-white border border-black/5 text-[#8C6A58]'}`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        {/* 已解锁专区 */}
        <section className="mt-8 px-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-4 rounded-full bg-[#9C1B1F]" />
              <h3 className="text-lg font-black text-[#38100E]">你已解锁</h3>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {products.filter(p => p.unlocked).map(product => (
              <motion.div 
                key={product.id}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSelectProduct(product)}
                className="bg-white rounded-[32px] overflow-hidden border border-black/5 shadow-sm"
              >
                <div className="aspect-square bg-gray-50 relative">
                  <img src={product.image} className="w-full h-full object-cover" alt={product.name} />
                  <div className="absolute top-3 left-3 px-2 py-1 bg-green-500 text-white text-[9px] font-black rounded-lg shadow-lg">
                    {product.tag}
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  <h4 className="text-xs font-black text-[#38100E] line-clamp-1">{product.name}</h4>
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-black text-[#9C1B1F]">¥{product.price}</span>
                    <span className="text-[9px] font-bold text-[#8C6A58]/40">限定</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 未解锁专区 */}
        <section className="mt-10 px-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-4 rounded-full bg-[#8C6A58]/20" />
              <h3 className="text-lg font-black text-[#38100E]">继续体验可解锁</h3>
            </div>
          </div>
          <div className="space-y-4">
            {products.filter(p => !p.unlocked).map(product => (
              <motion.div 
                key={product.id}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSelectProduct(product)}
                className="bg-white rounded-[32px] p-4 border border-black/5 flex gap-4 grayscale opacity-60"
              >
                <div className="w-24 h-24 rounded-2xl bg-gray-50 overflow-hidden relative shrink-0">
                  <img src={product.image} className="w-full h-full object-cover" alt={product.name} />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Lock size={20} className="text-white" />
                  </div>
                </div>
                <div className="flex-1 py-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-black text-[#38100E]">{product.name}</h4>
                    <p className="text-[10px] text-[#8C6A58] mt-1 font-bold">解锁条件：{product.desc}</p>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-black text-[#9C1B1F]">¥{product.price}</span>
                    <span className="px-2 py-0.5 rounded-lg bg-gray-100 text-[9px] font-black text-gray-400">未解锁</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 推荐体验转化区 */}
        <section className="mt-12 px-6">
          <div className="bg-[#F5DDA2]/20 rounded-[40px] p-8 text-center border-2 border-dashed border-[#F5DDA2]">
            <div className="mx-auto w-12 h-12 rounded-full bg-[#9C1B1F] text-[#FFD36B] flex items-center justify-center mb-4 shadow-lg shadow-[#9C171D]/20">
              <Swords size={24} />
            </div>
            <h3 className="text-lg font-black text-[#38100E]">想解锁更多？</h3>
            <p className="mt-2 text-xs text-[#8C6A58] font-bold leading-relaxed mb-6">
              还有更多英雄史诗等你开启，<br/>每个挑战完成后都有专属惊喜。
            </p>
            <div className="flex gap-3">
              <button className="flex-1 h-12 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-[11px] shadow-xl shadow-[#9C171D]/10">去体验其他英雄</button>
              <button className="flex-1 h-12 rounded-2xl bg-white border border-black/5 text-[#38100E] font-black text-[11px]">查看今日可玩</button>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

const MallProductDetailView = ({ 
  product, 
  onClose, 
  onBuy 
}: { 
  product: any, 
  onClose: () => void,
  onBuy: () => void
}) => {
  const [spec, setSpec] = useState('普通版');
  const [count, setCount] = useState(1);

  if (!product) return null;

  return (
    <motion.div 
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      className="fixed inset-0 z-[800] bg-[#FBF9F8] overflow-y-auto flex flex-col"
    >
      <header className="h-16 px-6 bg-white/80 backdrop-blur-md border-b border-black/5 flex items-center justify-between shrink-0 sticky top-0 z-20">
        <button onClick={onClose} className="p-2 -ml-2 text-[#38100E]"><ArrowLeft size={24} strokeWidth={3} /></button>
        <h2 className="text-lg font-black text-[#38100E]">商品详情</h2>
        <button className="p-2 -mr-2 text-[#38100E]"><Share2 size={22} /></button>
      </header>

      <div className="flex-1 pb-32">
        {/* 商品主图区 */}
        <div className="aspect-square w-full bg-gray-100 relative overflow-hidden">
          <img src={product.image} className="w-full h-full object-cover" alt={product.name} />
          {!product.unlocked && (
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-white/20 border border-white/40 flex items-center justify-center">
                  <Lock size={32} className="text-white" />
                </div>
                <span className="text-white font-black tracking-widest text-sm">暂时无法购买</span>
              </div>
            </div>
          )}
        </div>

        {/* 商品信息区 */}
        <section className="px-6 py-8 bg-white rounded-t-[48px] -mt-12 relative z-10 shadow-[0_-20px_40px_rgba(0,0,0,0.05)]">
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1">
              <h1 className="text-2xl font-black text-[#38100E] leading-tight">{product.name}</h1>
              <p className="mt-2 text-sm font-bold text-[#8C6A58]/60 underline decoration-[#9C1B1F]/20 underline-offset-4">
                {product.desc}
              </p>
            </div>
            <div className="text-right">
              <div className="flex items-baseline gap-1 justify-end">
                <span className="text-lg font-black text-[#9C1B1F]">¥</span>
                <span className="text-3xl font-black text-[#9C1B1F]">{product.price}</span>
              </div>
              <div className="mt-2 flex gap-1 justify-end">
                 <span className="px-2 py-0.5 rounded-md bg-[#FFB800] text-black text-[9px] font-black uppercase shadow-sm">完赛限定</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            <span className={`px-4 py-1.5 rounded-xl border-2 text-[10px] font-black ${product.unlocked ? 'border-green-500/20 bg-green-50 text-green-600' : 'border-gray-100 bg-gray-50 text-gray-400'}`}>
              {product.tag}
            </span>
            <span className="px-4 py-1.5 rounded-xl border-2 border-[#9C1B1F]/10 bg-[#9C1B1F]/5 text-[10px] font-black text-[#9C1B1F]">实体纪念</span>
            <span className="px-4 py-1.5 rounded-xl border-2 border-black/5 bg-gray-50 text-[10px] font-black text-[#38100E]">英雄勋章</span>
          </div>

          <div className="h-[1px] bg-black/5 my-8" />

          {/* 解锁条件区 */}
          <div className={`p-6 rounded-[32px] ${product.unlocked ? 'bg-green-50 border border-green-100' : 'bg-[#9C1B1F]/5 border border-[#9C1B1F]/10'}`}>
            <div className="flex items-center gap-2 mb-3">
              {product.unlocked ? <CheckCircle2 size={18} className="text-green-600" /> : <Lock size={18} className="text-[#9C1B1F]" />}
              <h3 className={`text-sm font-black ${product.unlocked ? 'text-green-800' : 'text-[#9C1B1F]'}`}>解锁条件</h3>
            </div>
            {product.unlocked ? (
              <p className="text-xs font-bold text-green-700/60 leading-relaxed">
                你已完成{product.name.includes('霍去病') ? '霍去病' : '英雄'}英雄体验，可购买该纪念品。
              </p>
            ) : (
              <div className="space-y-4">
                <p className="text-xs font-bold text-[#9C1B1F]/60 leading-relaxed">
                  完成{product.desc.replace('完成', '')}后即可解锁购买。
                </p>
                <button className="w-full h-11 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-xs shadow-lg shadow-[#9C171D]/10">去完成体验</button>
              </div>
            )}
          </div>

          {/* 商品说明区 */}
          <div className="mt-10 space-y-4">
            <h3 className="text-sm font-black text-[#38100E]">商品说明</h3>
            <div className="space-y-3">
              {[
                '红金金属质感纪念勋章；',
                '适合收藏、佩戴或作为完赛纪念；',
                '与用户获得的数字勋章对应；',
                '限量纪念版本。'
              ].map((text, i) => (
                <div key={i} className="flex gap-3 items-start text-xs text-[#8C6A58] leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#9C1B1F]/20 mt-1.5" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div className="h-[1px] bg-black/5 my-10" />

          {/* 规格选择区 */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-sm font-black text-[#38100E]">规格</h3>
              <div className="grid grid-cols-2 gap-3">
                {['普通版', '收藏版'].map(s => (
                  <button 
                    key={s}
                    onClick={() => setSpec(s)}
                    className={`h-14 rounded-2xl border-2 transition-all flex items-center justify-center gap-2 ${spec === s ? 'border-[#9C1B1F] bg-[#9C1B1F]/5 text-[#9C1B1F] font-black' : 'border-black/5 bg-white text-[#8C6A58] font-bold'}`}
                  >
                    {spec === s && <Check size={16} />}
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black text-[#38100E]">数量选择</h3>
              <div className="flex items-center gap-4 bg-[#FBF9F8] border border-black/5 rounded-2xl p-2 px-3">
                <button 
                  onClick={() => setCount(Math.max(1, count - 1))}
                  className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-[#9C1B1F] border border-black/5 active:scale-90"
                >
                  <Minus size={18} strokeWidth={3} />
                </button>
                <span className="text-lg font-black w-8 text-center">{count}</span>
                <button 
                  onClick={() => setCount(count + 1)}
                  className="w-8 h-8 rounded-xl bg-[#9C1B1F] flex items-center justify-center text-white active:scale-90 shadow-md"
                >
                  <Plus size={18} strokeWidth={3} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 底部固定购买栏 */}
      <footer className="fixed bottom-0 left-0 right-0 h-24 bg-white/95 backdrop-blur-xl border-t border-black/5 px-6 py-4 flex items-center justify-between z-30">
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-black text-[#9C1B1F]">¥ {product.price * count}</span>
          </div>
          <span className="text-[10px] font-bold text-[#8C6A58]/40 mt-1 uppercase tracking-tight">Postage Included</span>
        </div>
        
        {product.unlocked ? (
          <button 
            onClick={onBuy}
            className="h-14 px-12 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm shadow-xl shadow-[#9C171D]/20 active:scale-95 transition-all flex items-center gap-2"
          >
            <ShoppingBag size={18} />
            立即购买
          </button>
        ) : (
          <button 
            className="h-14 px-12 rounded-2xl bg-gray-100 text-gray-400 font-black text-sm cursor-not-allowed flex items-center gap-2"
          >
            <Lock size={18} />
            去解锁
          </button>
        )}
      </footer>
    </motion.div>
  );
};

const MallConfirmOrderView = ({ 
  product, 
  onClose, 
  onPay 
}: { 
  product: any, 
  onClose: () => void,
  onPay: () => void
}) => {
  if (!product) return null;

  return (
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      className="fixed inset-0 z-[900] bg-[#FBF9F8] overflow-y-auto flex flex-col"
    >
      <header className="h-16 px-6 bg-white border-b border-black/5 flex items-center justify-between shrink-0 sticky top-0 z-20">
        <button onClick={onClose} className="p-2 -ml-2 text-[#38100E]"><ArrowLeft size={24} strokeWidth={3} /></button>
        <h2 className="text-lg font-black text-[#38100E]">确认订单</h2>
        <div className="w-10" />
      </header>

      <div className="flex-1 px-6 pt-6 pb-32 space-y-6">
        {/* 地址区 */}
        <section className="bg-white rounded-[32px] p-6 border border-black/5 flex items-center gap-4 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#9C1B1F] to-[#FFD36B]" />
          <div className="w-12 h-12 rounded-2xl bg-[#9C1B1F]/5 flex items-center justify-center text-[#9C1B1F]">
            <MapPin size={24} />
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-black text-[#38100E]">添加收货地址</h4>
            <p className="text-[10px] font-bold text-[#8C6A58]/40 mt-1 uppercase tracking-widest">No address found</p>
          </div>
          <ChevronRight size={20} className="text-[#8C6A58]/20" />
        </section>

        {/* 商品卡片 */}
        <section className="bg-white rounded-[32px] p-6 border border-black/5 flex gap-4">
          <div className="w-20 h-20 rounded-2xl bg-gray-50 overflow-hidden shrink-0 shadow-inner">
            <img src={product.image} className="w-full h-full object-cover" alt={product.name} />
          </div>
          <div className="flex-1 flex flex-col justify-between py-1">
            <div className="flex justify-between items-start">
              <h4 className="text-sm font-black text-[#38100E] line-clamp-2 leading-tight">{product.name}</h4>
              <span className="text-sm font-black text-[#38100E] ml-4">¥{product.price}</span>
            </div>
            <div className="flex justify-between items-center text-[10px] font-bold text-[#8C6A58]/60 uppercase">
              <span>规格: 默认</span>
              <span>x 1</span>
            </div>
          </div>
        </section>

        {/* 支付方式 */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-1 h-3 bg-[#9C1B1F] rounded-full" />
            <h3 className="text-[10px] font-black text-[#8C6A58]/40 uppercase tracking-widest">支付方式</h3>
          </div>
          <div className="bg-white rounded-[32px] p-6 border border-[#9C1B1F]/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#07C160] flex items-center justify-center text-white">
                <Check size={20} />
              </div>
              <span className="text-sm font-black text-[#38100E]">微信支付</span>
            </div>
            <div className="w-5 h-5 rounded-full border-2 border-[#9C1B1F] flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#9C1B1F]" />
            </div>
          </div>
        </section>

        {/* 费用明细 */}
        <section className="bg-white rounded-[32px] p-8 border border-black/5 space-y-4 shadow-sm">
          <div className="flex justify-between text-xs font-bold text-[#8C6A58]">
            <span>商品合计</span>
            <span className="text-[#38100E]">¥{product.price}</span>
          </div>
          <div className="flex justify-between text-xs font-bold text-[#8C6A58]">
            <span>运费</span>
            <span className="text-green-500">免运费</span>
          </div>
          <div className="flex justify-between text-xs font-bold text-[#8C6A58]">
            <span>优惠</span>
            <span className="text-[#8C6A58]/30">暂无优惠码</span>
          </div>
          <div className="pt-4 border-t border-black/5 flex justify-between items-center">
            <span className="text-sm font-black text-[#38100E]">实付款</span>
            <span className="text-xl font-black text-[#9C1B1F]">¥{product.price}</span>
          </div>
        </section>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 h-24 bg-white/95 backdrop-blur-xl border-t border-[#9C1B1F]/10 px-6 py-4 flex items-center justify-between z-30">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-[#8C6A58]/40 uppercase tracking-tight">Total Amount</span>
          <span className="text-2xl font-black text-[#9C1B1F]">¥ {product.price}</span>
        </div>
        <button 
          onClick={onPay}
          className="h-14 px-12 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm shadow-xl shadow-[#9C171D]/20 active:scale-95 transition-all text-sm uppercase tracking-wider"
        >
          提交订单
        </button>
      </footer>
    </motion.div>
  );
};

const MallPaymentSuccessView = ({ onClose, onViewOrders }: { onClose: () => void, onViewOrders: () => void }) => (
  <motion.div 
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    exit={{ scale: 0.9, opacity: 0 }}
    className="fixed inset-0 z-[1000] bg-[#9C1B1F] overflow-y-auto flex flex-col"
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
        className="w-28 h-28 rounded-[40px] bg-white text-[#9C1B1F] flex items-center justify-center shadow-2xl mb-8 relative"
      >
        <Check size={56} strokeWidth={4} />
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-[#FFD36B] text-[#9C1B1F] flex items-center justify-center shadow-lg"
        >
          <Flame size={20} fill="currentColor" />
        </motion.div>
      </motion.div>

      <h2 className="text-3xl font-black text-[#FFD36B]">支付成功</h2>
      <p className="mt-4 text-[#FFD36B]/60 text-center text-sm font-medium leading-relaxed max-w-[240px]">
        你的英雄纪念品已成功下单，<br/>我们将尽快为你打包发出。
      </p>

      <div className="w-full mt-12 bg-black/10 rounded-[40px] p-8 border border-white/5 space-y-6">
        <div className="flex items-center gap-3 pb-6 border-b border-white/5">
          <div className="w-14 h-14 rounded-2xl bg-white/5 overflow-hidden border border-white/10 shrink-0">
            <img src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover" alt="product" />
          </div>
          <div>
            <h4 className="text-sm font-black text-white line-clamp-1">霍去病实体纪念勋章</h4>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-[10px] font-black text-white/40 uppercase">Amount</span>
              <span className="text-sm font-black text-[#FFD36B]">¥39.00</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center text-xs">
            <span className="text-white/40 font-bold">订单编号</span>
            <span className="text-white font-mono">HHH-MALL-2026-0881</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-white/40 font-bold">配送方式</span>
            <span className="text-white">三界速运 (包邮)</span>
          </div>
          <div className="flex justify-between items-center text-xs font-bold">
            <span className="text-white/40">状态</span>
            <span className="text-[#FFD36B]">待发货</span>
          </div>
        </div>
      </div>
    </div>

    <footer className="p-8 pb-12 flex flex-col gap-4">
      <button 
        onClick={onViewOrders}
        className="h-16 rounded-[24px] bg-[#FFD36B] text-[#38100E] font-black text-sm shadow-2xl active:scale-95 transition-all flex items-center justify-center gap-2"
      >
        <Package size={20} />
        查看商城订单
      </button>
      <button 
        onClick={onClose}
        className="h-16 rounded-[24px] border-2 border-white/10 text-white font-black text-sm active:bg-white/5 transition-all"
      >
        返回火种商城
      </button>
    </footer>
  </motion.div>
);

const MallOrdersView = ({ onClose }: { onClose: () => void }) => {
  const [activeTab, setActiveTab] = useState('全部');
  const tabs = ['全部', '待付款', '待发货', '待收货', '已完成', '售后'];

  const orders = [
    {
      id: 'o1',
      product: '霍去病实体纪念勋章',
      price: 39,
      status: '待发货',
      date: '2026-04-28 14:30',
      image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2670&auto=format&fit=crop',
    },
    {
      id: 'o2',
      product: '冠军侯火种挂件',
      price: 29,
      status: '已完成',
      date: '2026-04-25 10:15',
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2680&auto=format&fit=crop',
    }
  ];

  return (
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      className="fixed inset-0 z-[1100] bg-[#FBF9F8] overflow-y-auto flex flex-col"
    >
      <header className="h-16 px-6 bg-white border-b border-black/5 flex items-center justify-between shrink-0 sticky top-0 z-20">
        <button onClick={onClose} className="p-2 -ml-2 text-[#38100E]"><ArrowLeft size={24} strokeWidth={3} /></button>
        <h2 className="text-lg font-black text-[#38100E]">商城订单</h2>
        <div className="w-10" />
      </header>

      <div className="bg-white px-6 shrink-0 sticky top-16 z-20 overflow-x-auto no-scrollbar flex gap-8 pb-3 pt-4 border-b border-black/5">
        {tabs.map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`shrink-0 text-sm font-black transition-all relative ${activeTab === tab ? 'text-[#9C1B1F]' : 'text-[#8C6A58]/40'}`}
          >
            {tab}
            {activeTab === tab && (
              <motion.div layoutId="orderTab" className="absolute -bottom-3 left-0 right-0 h-1 bg-[#9C1B1F] rounded-full" />
            )}
          </button>
        ))}
      </div>

      <div className="flex-1 p-6 space-y-6 pb-20">
        {orders.map(order => (
          <div key={order.id} className="bg-white rounded-[32px] p-6 border border-black/5 shadow-sm space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-black text-[#8C6A58]/20 uppercase tracking-widest">{order.date}</span>
              <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase ${order.status === '待发货' ? 'bg-[#9C1B1F]/5 text-[#9C1B1F]' : 'bg-green-50 text-green-600'}`}>
                {order.status}
              </span>
            </div>

            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-2xl bg-gray-50 overflow-hidden shrink-0 shadow-inner">
                <img src={order.image} className="w-full h-full object-cover" alt="product" />
              </div>
              <div className="flex-1 flex flex-col justify-between py-1">
                <h4 className="text-sm font-black text-[#38100E] leading-tight line-clamp-2">{order.product}</h4>
                <div className="flex justify-between items-baseline mt-2">
                   <div className="flex items-center gap-1">
                     <span className="text-xs font-black text-[#38100E]">¥</span>
                     <span className="text-lg font-black text-[#38100E]">{order.price}</span>
                   </div>
                   <span className="text-[10px] font-bold text-[#8C6A58]/40 italic">Qty: 1</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button className="flex-1 h-11 rounded-2xl border border-black/5 text-[#8C6A58] font-black text-[11px] active:bg-gray-50">查看详情</button>
              {order.status === '已完成' ? (
                <button className="flex-1 h-11 rounded-2xl border border-[#9C1B1F]/20 text-[#9C1B1F] bg-[#9C1B1F]/5 font-black text-[11px]">再次购买</button>
              ) : (
                <button className="flex-1 h-11 rounded-2xl bg-[#38100E] text-[#FFD36B] font-black text-[11px] shadow-lg">修改地址</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// --- Hero Tab Home (Gallery) Components ---

const TeamTabHomeView = ({ 
  hasTeam = false, 
  onShowDetails,
  onJoinTeam,
  onCreateTeam
}: { 
  hasTeam?: boolean, 
  onShowDetails: () => void,
  onJoinTeam: (code: string) => void,
  onCreateTeam: () => void
}) => {
  const [teamCode, setTeamCode] = useState('');
  const [toast, setToast] = useState<{ show: boolean, msg: string }>({ show: false, msg: '' });

  const showToast = (msg: string) => {
    setToast({ show: true, msg });
    setTimeout(() => setToast({ show: false, msg: '' }), 2000);
  };

  const handleJoin = () => {
    if (teamCode === '999999') {
      showToast('该队伍人数已满，无法加入。');
    } else if (teamCode === '000000') {
      showToast('未找到该队伍，请检查队伍码。');
    } else if (teamCode.length === 6) {
      onJoinTeam(teamCode);
    }
  };

  const nearbyTeams = [
    { name: '冠军侯小队', hero: '霍去病', members: '5/8', time: '14:00', status: '招募中' },
    { name: '巾帼英雄队', hero: '花木兰', members: '3/6', time: '15:30', status: '招募中' },
  ];

  const playstyles = [
    { title: '朋友挑战', members: '2-6人', desc: '适合好友结伴', icon: <Users size={20} /> },
    { title: '亲子协作', members: '1大1小', desc: '适合家庭体验', icon: <Heart size={20} /> },
    { title: '团建闯关', members: '5-10人', desc: '适合组织活动', icon: <Target size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-[#FBF9F8] flex flex-col pb-32">
      {/* 1. 顶部标题区 */}
      <header className="px-6 pt-14 pb-6 flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-black text-[#38100E]">队伍</h2>
          <p className="text-xs font-bold text-[#8C6A58]/60 mt-1">和朋友一起完成英雄挑战</p>
        </div>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-xl bg-white border border-black/5 flex items-center justify-center text-[#38100E] shadow-sm">
            <Plus size={20} />
          </button>
          <button className="w-10 h-10 rounded-xl bg-white border border-black/5 flex items-center justify-center text-[#38100E] shadow-sm">
            <QrCode size={20} />
          </button>
        </div>
      </header>

      {/* 2. 当前队伍状态区 */}
      <div className="px-6">
        {!hasTeam ? (
          /* 状态A：未加入队伍 */
          <div className="bg-white rounded-[40px] p-8 border border-black/5 shadow-xl relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#9C1B1F]/5 rounded-full -mr-16 -mt-16" />
            <div className="w-20 h-20 bg-[#FBF9F8] rounded-full flex items-center justify-center mx-auto mb-6">
              <Users size={40} className="text-[#8C6A58]/20" />
            </div>
            <h3 className="text-lg font-black text-[#38100E]">你还没有加入队伍</h3>
            <p className="text-[11px] font-bold text-[#8C6A58]/60 mt-2 max-w-[200px] mx-auto leading-relaxed">
              创建队伍或输入队伍码，和朋友一起开启英雄挑战。
            </p>
            <div className="mt-8 space-y-3">
              <button 
                onClick={onCreateTeam}
                className="w-full h-14 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm shadow-xl active:scale-95 transition-all"
              >
                创建队伍
              </button>
              <button className="w-full h-14 rounded-2xl bg-white border border-black/5 text-[#38100E] font-black text-xs active:bg-gray-50 transition-all">
                输入队伍码加入
              </button>
            </div>
          </div>
        ) : (
          /* 状态B：已加入队伍 */
          <div className="bg-[#38100E] rounded-[40px] p-8 text-[#FFD36B] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#9C1B1F]/20 rounded-full -mr-20 -mt-20 blur-3xl" />
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                 <div>
                    <h3 className="text-2xl font-black italic">冠军侯小队</h3>
                    <div className="flex items-center gap-2 mt-1 px-3 py-1 rounded-full bg-white/10 text-[9px] font-black uppercase tracking-widest border border-white/5">
                       <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                       进行中
                    </div>
                 </div>
                 <div className="text-right">
                    <span className="text-[10px] font-black opacity-40 uppercase">Members</span>
                    <span className="text-xl font-black block">5 / 8</span>
                 </div>
              </div>

              <div className="space-y-4 mb-8">
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#FFD36B]"><Flame size={16} fill="currentColor" /></div>
                    <div className="flex flex-col">
                       <span className="text-[9px] font-black opacity-40 uppercase">Hero & Route</span>
                       <span className="text-xs font-bold leading-tight">霍去病 · 封狼居胥挑战线</span>
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#FFD36B]"><Clock size={16} /></div>
                    <div className="flex flex-col">
                       <span className="text-[9px] font-black opacity-40 uppercase">Assembly Time</span>
                       <span className="text-xs font-bold">今天 14:00</span>
                    </div>
                 </div>
                 <div className="flex items-center gap-3 pt-2">
                    <div className="w-8 h-8 rounded-lg bg-[#9C1B1F] flex items-center justify-center text-white"><MapPin size={16} /></div>
                    <div className="flex flex-col">
                       <span className="text-[9px] font-black opacity-40 uppercase">Current Quest</span>
                       <span className="text-xs font-bold">第2关 · 漠北追击</span>
                    </div>
                 </div>
              </div>

              <div className="flex gap-3">
                 <button 
                   onClick={onShowDetails}
                   className="flex-1 h-14 rounded-2xl bg-[#FFD36B] text-[#38100E] font-black text-xs shadow-xl active:scale-95 transition-all"
                 >
                    查看详情
                 </button>
                 <button 
                   onClick={() => showToast('已发送集合提醒。')}
                   className="h-14 px-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-black text-xs active:bg-white/20 transition-all flex items-center gap-2"
                 >
                    <Bell size={18} />
                    提醒
                 </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex-1 px-6 mt-8 space-y-8">
        {/* 3. 快速加入区 */}
        <section className="space-y-4">
           <div className="flex items-center gap-2 mb-2 px-1">
              <div className="w-1 h-3 bg-[#9C1B1F] rounded-full" />
              <h3 className="text-sm font-black text-[#38100E]">快速加入</h3>
           </div>
           <div className="bg-white rounded-[32px] p-6 border border-black/5 shadow-sm flex items-center gap-3">
              <div className="flex-1 relative">
                 <Hash className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8C6A58]/20" size={16} />
                 <input 
                   type="text" 
                   value={teamCode}
                   onChange={e => setTeamCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                   placeholder="请输入6位队伍码"
                   className="w-full h-14 bg-[#FBF9F8] rounded-2xl pl-12 pr-4 text-sm font-black border border-black/5 focus:border-[#9C1B1F]/20 focus:ring-4 focus:ring-[#9C1B1F]/5 outline-none transition-all"
                 />
              </div>
              <button 
                onClick={handleJoin}
                className="h-14 px-8 rounded-2xl bg-[#38100E] text-[#FFD36B] font-black text-xs shadow-lg active:scale-95 transition-all"
              >
                 加入
              </button>
           </div>
           <button className="w-full h-14 rounded-2xl border-2 border-dashed border-black/10 flex items-center justify-center gap-3 text-[#8C6A58] opacity-60 font-black text-xs active:bg-black/5 transition-all">
              <QrCode size={18} />
              扫码加入
           </button>
        </section>

        {/* 4. 推荐组队玩法区 */}
        <section className="space-y-4">
           <div className="flex items-center gap-2 mb-2 px-1">
              <div className="w-1 h-3 bg-[#9C1B1F] rounded-full" />
              <h3 className="text-sm font-black text-[#38100E]">适合组队体验</h3>
           </div>
           <div className="grid grid-cols-3 gap-4">
              {playstyles.map((style, i) => (
                <div key={i} className="bg-white rounded-3xl p-5 border border-black/5 shadow-sm flex flex-col items-center text-center gap-3">
                   <div className="w-12 h-12 rounded-2xl bg-[#9C1B1F]/5 text-[#9C1B1F] flex items-center justify-center shadow-inner">
                      {style.icon}
                   </div>
                   <div className="space-y-1">
                      <h4 className="text-[11px] font-black text-[#38100E] leading-tight">{style.title}</h4>
                      <p className="text-[9px] font-bold text-[#8C6A58]/40">{style.members}</p>
                   </div>
                   <p className="text-[8px] font-bold text-[#8C6A58] opacity-60 leading-tight">{style.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* 5. 附近可加入队伍区 */}
        <section className="space-y-4">
           <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                 <div className="w-1 h-3 bg-[#9C1B1F] rounded-full" />
                 <h3 className="text-sm font-black text-[#38100E]">附近队伍</h3>
              </div>
              <button className="text-[10px] font-black text-[#9C1B1F]">查看更多</button>
           </div>
           <div className="space-y-4">
              {nearbyTeams.map((team, i) => (
                <div key={i} className="bg-white rounded-[32px] p-6 border border-black/5 shadow-sm flex items-center justify-between group active:scale-[0.99] transition-all">
                   <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#FBF9F8] border border-black/5 flex items-center justify-center text-[#9C1B1F] shadow-inner font-black text-xl">
                         {team.name[0]}
                      </div>
                      <div className="space-y-1">
                         <div className="flex items-center gap-2">
                            <h4 className="text-sm font-black text-[#38100E]">{team.name}</h4>
                            <span className="text-[8px] font-black bg-green-50 text-green-600 px-2 py-0.5 rounded-lg">{team.status}</span>
                         </div>
                         <div className="flex items-center gap-3 text-[10px] font-bold text-[#8C6A58]/60">
                            <span>{team.hero}体验</span>
                            <span>{team.members}人</span>
                            <span>{team.time}开始</span>
                         </div>
                      </div>
                   </div>
                   <button 
                     onClick={() => showToast('申请已发送。')}
                     className="px-5 h-10 rounded-xl bg-[#38100E] text-[#FFD36B] font-black text-[10px] shadow-lg"
                   >
                      申请加入
                   </button>
                </div>
              ))}
           </div>
        </section>

        {/* 6. 队伍规则说明区 */}
        <section className="bg-white rounded-[40px] p-8 border border-black/5 shadow-sm space-y-6">
           <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-[#38100E]"><Info size={20} /></div>
              <h3 className="text-sm font-black text-[#38100E]">组队说明</h3>
           </div>
           <div className="grid grid-cols-1 gap-4">
              {[
                { title: '创建规则', content: '创建队伍后可生成队伍码' },
                { title: '加入方式', content: '队友可通过队伍码或二维码加入' },
                { title: '进度同步', content: '队伍成员可一起查看任务进度' },
                { title: '集合提醒', content: '集合提醒可帮助队友到达指定地点' },
              ].map((rule, i) => (
                <div key={i} className="flex items-start gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#9C1B1F] mt-1.5 shrink-0" />
                   <div>
                      <h4 className="text-[11px] font-black text-[#38100E]">{rule.title}</h4>
                      <p className="text-[10px] font-bold text-[#8C6A58]/60 mt-0.5">{rule.content}</p>
                   </div>
                </div>
              ))}
           </div>
        </section>
      </div>

      {/* Toast Alert */}
      <AnimatePresence>
        {toast.show && (
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: -100, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="fixed bottom-0 left-1/2 -translate-x-1/2 z-[2000] px-8 py-4 bg-[#38100E] text-[#FFD36B] rounded-2xl font-black text-xs shadow-2xl flex items-center gap-3 border border-white/5"
          >
            <Sparkles size={16} fill="currentColor" />
            {toast.msg}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const HeroTabView = ({ 
  onSelectHero, 
  onBookTicket 
}: { 
  onSelectHero: (hero: any) => void,
  onBookTicket: (hero: any) => void
}) => {
  const [activeCategory, setActiveCategory] = useState('全部');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);

  const categories = ['全部', '少年英雄', '巾帼英雄', '家国英雄', '智谋英雄', '神话英雄', '已解锁'];

  const allHeroes = [
    {
      id: 'h1',
      name: '霍去病',
      subtitle: '少年将军 · 封狼居胥',
      tag: '少年英雄',
      line: '封狼居胥挑战线',
      duration: '90分钟',
      tasks: 6,
      difficulty: '中等',
      status: '可体验',
      unlocked: true,
      image: 'https://images.unsplash.com/photo-1621619856624-42fd193a0661?q=80&w=2658&auto=format&fit=crop',
    },
    {
      id: 'h2',
      name: '花木兰',
      subtitle: '代父从军 · 巾帼英雄',
      tag: '巾帼英雄',
      line: '忠义千秋体验路',
      duration: '75分钟',
      tasks: 5,
      difficulty: '简单',
      status: '可体验',
      unlocked: true,
      image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2670&auto=format&fit=crop',
    },
    {
      id: 'h3',
      name: '岳飞',
      subtitle: '精忠报国 · 民族脊梁',
      tag: '家国英雄',
      line: '满江红怒发冲冠线',
      duration: '100分钟',
      tasks: 6,
      difficulty: '中等',
      status: '可体验',
      unlocked: true,
      image: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=2732&auto=format&fit=crop',
    },
    {
      id: 'h4',
      name: '诸葛亮',
      subtitle: '卧龙出山 · 智谋千古',
      tag: '智谋英雄',
      line: '赤壁借箭烧营策',
      duration: '80分钟',
      tasks: 5,
      difficulty: '困难',
      status: '即将开放',
      unlocked: false,
      image: 'https://images.unsplash.com/photo-1621619856624-42fd193a0661?q=80&w=2658&auto=format&fit=crop',
    },
    {
      id: 'h5',
      name: '秦始皇',
      subtitle: '一统六国 · 千古一帝',
      tag: '智谋英雄',
      line: '万里长城筑魂记',
      duration: '120分钟',
      tasks: 8,
      difficulty: '困难',
      status: '未解锁',
      unlocked: false,
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2680&auto=format&fit=crop',
    }
  ];

  const filteredHeroes = allHeroes.filter(hero => {
    const matchesCategory = activeCategory === '全部' || 
                           (activeCategory === '已解锁' ? hero.unlocked : hero.tag === activeCategory);
    const matchesSearch = hero.name.includes(searchQuery) || 
                          hero.subtitle.includes(searchQuery) || 
                          hero.tag.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FBF9F8] flex flex-col pb-24">
      {/* 1. 顶部标题区 */}
      <header className="px-6 pt-14 pb-4">
        <div className="flex justify-between items-start">
           <div>
              <h2 className="text-3xl font-black text-[#38100E]">英雄</h2>
              <p className="text-xs font-bold text-[#8C6A58]/60 mt-1">选择你的英雄身份，开启沉浸式文化挑战</p>
           </div>
           <div className="flex gap-2">
              <button className="w-10 h-10 rounded-xl bg-white border border-black/5 flex items-center justify-center text-[#38100E] shadow-sm">
                 <Search size={18} />
              </button>
              <button className="w-10 h-10 rounded-xl bg-white border border-black/5 flex items-center justify-center text-[#38100E] shadow-sm">
                 <Filter size={18} />
              </button>
           </div>
        </div>
      </header>

      {/* 2. 搜索区 */}
      <div className="px-6 mt-2">
         <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8C6A58]/30 group-focus-within:text-[#9C1B1F] transition-colors" size={16} />
            <input 
              type="text" 
              placeholder="搜索英雄、路线、场景"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 bg-white rounded-2xl pl-12 pr-4 text-xs font-black border border-black/5 focus:border-[#9C1B1F]/20 focus:ring-4 focus:ring-[#9C1B1F]/5 outline-none transition-all" 
            />
         </div>
      </div>

      {/* 3. 英雄分类区 */}
      <div className="mt-6 px-6 overflow-x-auto no-scrollbar flex gap-3 pb-2">
         {categories.map(cat => (
           <button 
             key={cat}
             onClick={() => setActiveCategory(cat)}
             className={`shrink-0 px-5 py-2.5 rounded-2xl text-[11px] font-black transition-all border-2 ${activeCategory === cat ? 'bg-[#9C1B1F] border-[#9C1B1F] text-[#FFD36B] shadow-xl shadow-[#9C171D]/10 translate-y-[-2px]' : 'bg-white border-black/5 text-[#8C6A58]'}`}
           >
             {cat}
           </button>
         ))}
      </div>

      <div className="flex-1 px-6 mt-6 space-y-8">
        {activeCategory === '全部' && searchQuery === '' && (
          /* 4. 今日推荐英雄区 */
          <section className="space-y-4">
             <div className="flex justify-between items-center px-1">
                <div className="flex items-center gap-2">
                   <div className="w-1 h-3 bg-[#9C1B1F] rounded-full" />
                   <h3 className="text-sm font-black text-[#38100E]">今日推荐</h3>
                </div>
                <div className="w-20 h-[1px] bg-black/5" />
             </div>
             
             <motion.div 
               whileTap={{ scale: 0.98 }}
               className="bg-[#38100E] rounded-[40px] overflow-hidden relative shadow-2xl"
             >
                <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1621619856624-42fd193a0661?q=80&w=2658&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#38100E] via-[#38100E]/60 to-transparent" />
                
                <div className="relative z-10 p-8 text-white space-y-4">
                   <div className="flex justify-between items-start">
                      <div className="space-y-1">
                         <span className="text-[10px] font-black bg-[#9C1B1F] text-white px-3 py-1 rounded-full uppercase tracking-widest shadow-lg shadow-[#9C171D]/40">Featured Hero</span>
                         <h4 className="text-4xl font-black text-[#FFD36B] mt-2">霍去病</h4>
                         <p className="text-xs font-bold text-white/60">少年将军 · 封狼居胥</p>
                      </div>
                      <div className="w-16 h-16 rounded-full bg-[#FFD36B] flex items-center justify-center text-[#38100E] shadow-2xl ring-4 ring-[#FFD36B]/20">
                         <Flame size={32} fill="currentColor" />
                      </div>
                   </div>

                   <div className="grid grid-cols-2 gap-4 py-4">
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-[#FFD36B]"><Navigation size={14} /></div>
                         <div className="flex flex-col">
                            <span className="text-[9px] font-black opacity-40 uppercase">Route</span>
                            <span className="text-[10px] font-bold">封狼居胥线</span>
                         </div>
                      </div>
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-[#FFD36B]"><Timer size={14} /></div>
                         <div className="flex flex-col">
                            <span className="text-[9px] font-black opacity-40 uppercase">Duration</span>
                            <span className="text-[10px] font-bold">90分钟</span>
                         </div>
                      </div>
                   </div>

                   <div className="flex gap-3 pt-2">
                      <button 
                        onClick={() => onSelectHero(allHeroes[0])}
                        className="flex-1 h-14 rounded-2xl bg-[#FFD36B] text-[#38100E] font-black text-xs shadow-xl active:scale-95 transition-all"
                      >
                         查看详情
                      </button>
                      <button 
                        onClick={() => onBookTicket(allHeroes[0])}
                        className="flex-1 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-black text-xs shadow-lg active:scale-95 transition-all"
                      >
                         立即购票
                      </button>
                   </div>
                </div>
             </motion.div>
          </section>
        )}

        {/* 5. 英雄列表区 */}
        <section className="space-y-4">
           <div className="flex justify-between items-center px-1">
              <div className="flex items-center gap-2">
                 <div className="w-1 h-3 bg-[#9C1B1F] rounded-full" />
                 <h3 className="text-sm font-black text-[#38100E]">{activeCategory === '全部' ? '全部英雄' : activeCategory}</h3>
              </div>
              <span className="text-[10px] font-black text-[#8C6A58]/20">{filteredHeroes.length} 英雄</span>
           </div>

           {filteredHeroes.length === 0 ? (
             /* 状态1：无搜索结果 */
             <div className="py-20 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-gray-300 mb-4">
                   <Ghost size={40} />
                </div>
                <h4 className="text-base font-black text-[#38100E]">暂无相关英雄</h4>
                <p className="text-[10px] text-[#8C6A58]/40 mt-1 font-bold">试试搜索其他关键词或浏览全部分类</p>
                <button 
                  onClick={() => { setActiveCategory('全部'); setSearchQuery(''); }}
                  className="mt-8 px-8 h-12 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-xs shadow-lg"
                >
                   查看全部英雄
                </button>
             </div>
           ) : (
             <div className="grid grid-cols-2 gap-4">
               {filteredHeroes.map((hero, i) => (
                 <motion.div 
                   key={hero.id}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: i * 0.05 }}
                   whileTap={{ scale: 0.98 }}
                   onClick={() => onSelectHero(hero)}
                   className={`bg-white rounded-[32px] overflow-hidden border border-black/5 shadow-sm relative group flex flex-col ${!hero.unlocked && hero.status !== '即将开放' ? 'grayscale opacity-70' : ''}`}
                 >
                    <div className="aspect-[3/4] overflow-hidden relative shrink-0">
                       <img src={hero.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={hero.name} />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                       
                       <div className="absolute top-3 right-3">
                          <span className={`px-2 py-0.5 rounded-lg text-[8px] font-black uppercase shadow-lg ${
                            hero.difficulty === '简单' ? 'bg-green-500 text-white' :
                            hero.difficulty === '困难' ? 'bg-[#9C1B1F] text-white' :
                            'bg-[#FFD36B] text-black'
                          }`}>
                            {hero.difficulty}
                          </span>
                       </div>

                       <div className="absolute bottom-4 left-4 right-4">
                          <span className="text-[8px] font-black text-white/60 tracking-widest uppercase">{hero.tag}</span>
                          <h4 className="text-xl font-black text-white mt-1">{hero.name}</h4>
                       </div>

                       {!hero.unlocked && (
                         <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-white/20 border border-white/20 flex items-center justify-center text-white">
                               <Lock size={18} />
                            </div>
                         </div>
                       )}
                    </div>

                    <div className="p-4 pt-1 flex-1 flex flex-col justify-between">
                       <div className="space-y-3">
                          <div className="flex justify-between items-center text-[10px] font-bold text-[#8C6A58]/60">
                             <div className="flex items-center gap-1">
                                <Timer size={10} />
                                {hero.duration}
                             </div>
                             <div className="flex items-center gap-1">
                                <Map size={10} />
                                {hero.tasks}关
                             </div>
                          </div>
                          
                          {/* 奖励/解锁提示 */}
                          {!hero.unlocked ? (
                            <div className="p-2.5 rounded-xl bg-gray-50 border border-black/5">
                               <p className="text-[9px] font-bold text-[#8C6A58]/40 leading-tight">完成指定体验后解锁相关剧情</p>
                            </div>
                          ) : (
                            <div className="flex items-center gap-1.5 p-2.5 rounded-xl bg-[#9C1B1F]/5 border border-[#9C1B1F]/10">
                               <div className="w-1.5 h-1.5 rounded-full bg-[#9C1B1F]" />
                               <span className="text-[9px] font-black text-[#9C1B1F] uppercase tracking-tighter">已解锁体验资格</span>
                            </div>
                          )}
                       </div>

                       <div className="mt-4 flex gap-2">
                          <button 
                            className={`flex-1 h-10 rounded-xl text-[10px] font-black shadow-sm transition-all active:scale-95 ${
                              hero.status === '即将开放' ? 'bg-gray-100 text-gray-400' :
                              hero.unlocked ? 'bg-[#38100E] text-[#FFD36B]' :
                              'bg-white border border-black/5 text-[#8C6A58]'
                            }`}
                          >
                             {hero.status === '即将开放' ? '即将开放' : '查看详情'}
                          </button>
                       </div>
                    </div>
                 </motion.div>
               ))}
             </div>
           )}
        </section>

        {/* 7. 解锁提示区 (If no unlocked heroes) */}
        {activeCategory === '已解锁' && filteredHeroes.length === 0 && (
          <div className="mt-4 p-8 rounded-[40px] bg-[#F5DDA2]/10 border-2 border-dashed border-[#F5DDA2]/40 text-center">
             <div className="w-14 h-14 rounded-full bg-white mx-auto flex items-center justify-center shadow-lg mb-4 text-[#9C1B1F]">
                <Unlock size={24} />
             </div>
             <h4 className="text-base font-black text-[#38100E]">解锁更多英雄</h4>
             <p className="text-[10px] text-[#8C6A58]/60 mt-2 font-bold leading-relaxed">
               通过完成“少年先锋”系列体验，<br/>即可解锁更多伟大的英雄剧情。
             </p>
             <button 
               onClick={() => setActiveCategory('全部')}
               className="mt-6 text-[10px] font-black text-[#9C1B1F] underline underline-offset-4"
             >
               查看解锁条件
             </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default function App() {

  const [activeTab, setActiveTab] = useState('文旅');
  const [currentPage, setCurrentPage] = useState('首页');
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [showHeroDetail, setShowHeroDetail] = useState(false);
  const [showMallHome, setShowMallHome] = useState(false);
  const [showMallProductDetail, setShowMallProductDetail] = useState(false);
  const [showMallConfirmOrder, setShowMallConfirmOrder] = useState(false);
  const [showMallPaymentSuccess, setShowMallPaymentSuccess] = useState(false);
  const [showMallOrders, setShowMallOrders] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [showTicketBooking, setShowTicketBooking] = useState(false);
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [showCurrentExperience, setShowCurrentExperience] = useState(false);
  const [expPhase, setExpPhase] = useState<'not_started' | 'pending' | 'active' | 'arrived' | 'success' | 'finished'>('active');
  const [showMapCheckIn, setShowMapCheckIn] = useState(false);
  const [showTaskDetails, setShowTaskDetails] = useState(false);
  const [showPhotoSubmission, setShowPhotoSubmission] = useState(false);
  const [showTaskComplete, setShowTaskComplete] = useState(false);
  const [showRaceResult, setShowRaceResult] = useState(false);
  const [hasTeam, setHasTeam] = useState(false);
  
  // --- My Profile Views ---
  const [showMyOrders, setShowMyOrders] = useState(false);
  const [showMyExperiences, setShowMyExperiences] = useState(false);
  const [showMyMedals, setShowMyMedals] = useState(false);
  
  // --- Settings & Compliance Views ---
  const [showSettings, setShowSettings] = useState(false);
  const [showHelpCenter, setShowHelpCenter] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showAgreement, setShowAgreement] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showPermissionList, setShowPermissionList] = useState(false);
  const [showSystemGallery, setShowSystemGallery] = useState(false);
  
  // --- Scene & Message Views ---
  const [showSceneSelection, setShowSceneSelection] = useState(false);
  const [showMessageCenter, setShowMessageCenter] = useState(false);
  const [currentScene, setCurrentScene] = useState('蓝色港湾 · 黄火火体验点');
  
  const [showTeamHome, setShowTeamHome] = useState(false);
  const [showCreateTeam, setShowCreateTeam] = useState(false);
  const [showJoinTeam, setShowJoinTeam] = useState(false);
  const [showTeamDetails, setShowTeamDetails] = useState(false);
  
  const [showFlowStatus, setShowFlowStatus] = useState(false);
  const [showWristbandBinding, setShowWristbandBinding] = useState(false);
  const [showSearchDevice, setShowSearchDevice] = useState(false);
  const [showBindingSuccess, setShowBindingSuccess] = useState(false);
  const [isBandBound, setIsBandBound] = useState(false);
  
  // --- Auth & Onboarding State ---
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [appPhase, setAppPhase] = useState<'splash' | 'welcome' | 'auth' | 'main'>('splash');
  const [authStep, setAuthStep] = useState<'selector' | 'phone' | 'profile' | 'permissions' | 'entering'>('selector');
  const [userProfile, setUserProfile] = useState({ nickname: '火种游客001', avatar: '' });
  const [agreed, setAgreed] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2000);
  };

  // --- 1. 启动页 (Splash) ---
  const SplashView = () => {
    useEffect(() => {
      const timer = setTimeout(() => {
        setAppPhase('welcome');
      }, 3000);
      return () => clearTimeout(timer);
    }, []);

    return (
      <div className="fixed inset-0 z-[5000] bg-[#38100E] flex flex-col items-center justify-center overflow-hidden">
        {/* Background Visuals */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,#9C1B1F,transparent_70%)]" />
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #FFD36B 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 flex flex-col items-center"
        >
          <div className="w-32 h-32 bg-[#9C1B1F] rounded-[48px] flex items-center justify-center shadow-2xl border-4 border-[#FFD36B]/20 relative overflow-hidden group">
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
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
              {[0, 1, 2].map(i => (
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
  };

  // --- 2. 欢迎页 (Welcome) ---
  const WelcomeView = () => (
    <div className="fixed inset-0 z-[4900] bg-[#FBF9F8] flex flex-col">
      <button 
        onClick={() => setAppPhase('auth')}
        className="absolute top-12 right-6 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-black/5 text-[10px] font-black text-[#38100E] z-10"
      >
        跳过
      </button>

      <div className="flex-1 flex flex-col px-8 pt-24 pb-12 overflow-y-auto">
        <div className="w-full aspect-square bg-[#F5DDA2]/10 rounded-[64px] border-2 border-dashed border-[#9C1B1F]/10 flex items-center justify-center relative mb-12">
           <motion.div 
             animate={{ rotate: [0, 5, -5, 0] }}
             transition={{ duration: 6, repeat: Infinity }}
             className="w-48 h-48 bg-[#9C1B1F] rounded-[48px] shadow-2xl flex items-center justify-center text-[#FFD36B]"
           >
              <Trophy size={80} strokeWidth={1} />
           </motion.div>
           <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center text-[#9C1B1F]">
              <Sparkles size={32} />
           </div>
        </div>

        <h2 className="text-3xl font-black text-[#38100E] leading-tight text-center">开启属于你的<br />英雄旅程</h2>
        <p className="mt-4 text-sm font-bold text-[#8C6A58]/60 text-center leading-relaxed">
          购票、组队、打卡、挑战、获得勋章，体验沉浸式英雄文化冒险。
        </p>

        <div className="mt-12 space-y-4">
           {[
             { title: '英雄剧情挑战', desc: '穿越古迹，扮演传奇英雄' },
             { title: '真实场景任务', desc: '基于LBS的线下实地打卡' },
             { title: '心流沉浸体验', desc: '生理数据监测与智慧讲解' }
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
        <button 
          onClick={() => setAppPhase('auth')}
          className="w-full h-16 rounded-3xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm shadow-xl shadow-[#9C171D]/20 active:scale-95 transition-all"
        >
          立即进入
        </button>
      </div>
    </div>
  );

  // --- 3. 登录方式页 (AuthSelector) ---
  const AuthSelectorView = () => (
    <div className="min-h-screen bg-[#FBF9F8] px-8 flex flex-col">
       <div className="flex-1 flex flex-col items-center justify-center py-20">
          <div className="w-24 h-24 bg-[#9C1B1F] rounded-[40px] flex items-center justify-center shadow-2xl mb-8">
             <Flame size={48} className="text-[#FFD36B]" />
          </div>
          <h2 className="text-3xl font-black text-[#38100E]">登录黄火火</h2>
          <p className="mt-2 text-sm font-bold text-[#8C6A58]/60">开启你的英雄体验</p>

          <div className="w-full mt-16 space-y-4">
             <button 
               onClick={() => {
                 if(!agreed) return showToast('请先同意用户协议');
                 setUserProfile({ nickname: '火种游客001', avatar: '' });
                 setAuthStep('profile');
               }}
               className={`w-full h-16 rounded-3xl bg-[#07C160] text-white font-black text-sm flex items-center justify-center gap-3 active:scale-95 transition-all ${!agreed ? 'opacity-50' : ''}`}
             >
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                   <MessageCircle size={16} fill="white" />
                </div>
                微信一键登录
             </button>
             <button 
               onClick={() => {
                 if(!agreed) return showToast('请先同意用户协议');
                 setAuthStep('phone');
               }}
               className={`w-full h-16 rounded-3xl bg-white border border-black/5 text-[#38100E] font-black text-sm flex items-center justify-center gap-3 active:scale-95 transition-all ${!agreed ? 'opacity-50' : ''}`}
             >
                <Smartphone size={20} />
                手机号登录
             </button>
             <button 
               onClick={() => {
                 setAppPhase('main');
                 setIsLoggedIn(true);
               }}
               className="w-full h-12 text-[#8C6A58]/40 font-black text-xs uppercase tracking-widest"
             >
               先看看
             </button>
          </div>
       </div>

       <div className="py-12 flex items-start gap-3">
          <button 
            onClick={() => setAgreed(!agreed)}
            className={`w-5 h-5 rounded-md border-2 shrink-0 transition-colors flex items-center justify-center ${agreed ? 'bg-[#9C1B1F] border-[#9C1B1F] text-[#FFD36B]' : 'border-black/5'}`}
          >
             {agreed && <Check size={14} strokeWidth={4} />}
          </button>
          <div className="text-[10px] font-bold text-[#8C6A58]/60 leading-relaxed">
             我已阅读并同意：<br />
             <span className="text-[#38100E] underline">《用户协议》</span> 与 <span className="text-[#38100E] underline">《隐私政策》</span>
          </div>
       </div>
    </div>
  );

  // --- 4. 手机号登录页 (AuthPhone) ---
  const PhoneLoginView = () => {
    const [phone, setPhone] = useState('');
    const [code, setCode] = useState('');
    const [count, setCount] = useState(0);

    const startTimer = () => {
      setCount(59);
      const timer = setInterval(() => {
        setCount(c => {
          if (c <= 1) {
            clearInterval(timer);
            return 0;
          }
          return c - 1;
        });
      }, 1000);
    };

    return (
      <div className="min-h-screen bg-white px-8 pt-20">
        <button onClick={() => setAuthStep('selector')} className="mb-12 p-2 -ml-2">
           <ArrowLeft size={24} strokeWidth={3} className="text-[#38100E]" />
        </button>
        <h2 className="text-3xl font-black text-[#38100E]">手机号登录</h2>
        <p className="mt-2 text-sm font-bold text-[#8C6A58]/40 mb-12">未注册手机号将自动创建账号</p>

        <div className="space-y-6">
           <div className="bg-[#FBF9F8] rounded-2xl p-5 border border-black/5 focus-within:border-[#9C1B1F] transition-all">
              <label className="text-[10px] font-black text-[#8C6A58]/20 uppercase tracking-widest">Phone Number</label>
              <input 
                type="tel" placeholder="请输入手机号" 
                value={phone} onChange={e => setPhone(e.target.value)}
                className="w-full text-base font-black text-[#38100E] outline-none bg-transparent mt-1"
              />
           </div>
           <div className="flex gap-4">
              <div className="flex-1 bg-[#FBF9F8] rounded-2xl p-5 border border-black/5 focus-within:border-[#9C1B1F] transition-all">
                 <label className="text-[10px] font-black text-[#8C6A58]/20 uppercase tracking-widest">Code</label>
                 <input 
                   type="text" placeholder="输入验证码" 
                   value={code} onChange={e => setCode(e.target.value)}
                   className="w-full text-base font-black text-[#38100E] outline-none bg-transparent mt-1"
                 />
              </div>
              <button 
                onClick={startTimer}
                disabled={count > 0 || phone.length < 11}
                className="px-6 bg-[#38100E] text-[#FFD36B] rounded-2xl text-[10px] font-black uppercase tracking-widest disabled:opacity-50"
              >
                {count > 0 ? `${count}s` : '获取验证码'}
              </button>
           </div>
        </div>

        <button 
          onClick={() => setAuthStep('profile')}
          disabled={!phone || !code}
          className="w-full h-16 rounded-3xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm mt-12 shadow-xl shadow-[#9C171D]/20 active:scale-95 transition-all disabled:opacity-50"
        >
          登录
        </button>
      </div>
    );
  };

  // --- 5. 资料完善页 (ProfileSetup) ---
  const ProfileSetupView = () => (
    <div className="min-h-screen bg-[#FBF9F8] px-8 pt-20">
       <h2 className="text-3xl font-black text-[#38100E]">完善你的英雄身份</h2>
       <p className="mt-2 text-sm font-bold text-[#8C6A58]/40 mb-16">你的信息仅用于体验展示和账号识别</p>

       <div className="flex flex-col items-center mb-16">
          <div className="relative">
             <div className="w-32 h-32 rounded-[48px] bg-white border border-black/5 shadow-inner flex items-center justify-center overflow-hidden">
                {userProfile.avatar ? (
                   <img src={userProfile.avatar} className="w-full h-full object-cover" />
                ) : (
                   <UserIcon size={48} className="text-[#8C6A58]/10" />
                )}
             </div>
             <button 
               onClick={() => setUserProfile({...userProfile, avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${Math.random()}`})}
               className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#9C1B1F] rounded-2xl flex items-center justify-center text-[#FFD36B] shadow-xl border-4 border-[#FBF9F8]"
             >
                <Camera size={20} />
             </button>
          </div>
       </div>

       <div className="space-y-6">
          <div className="bg-white rounded-2xl p-5 border border-black/5">
             <label className="text-[10px] font-black text-[#8C6A58]/20 uppercase mb-1">英雄昵称</label>
             <input 
               type="text" value={userProfile.nickname} onChange={e => setUserProfile({...userProfile, nickname: e.target.value})}
               className="w-full text-base font-black text-[#38100E] outline-none"
             />
          </div>
          <div className="grid grid-cols-3 gap-3">
             {['男', '女', '不填写'].map(gender => (
               <button key={gender} className="h-14 rounded-2xl bg-white border border-black/5 text-xs font-black text-[#38100E] active:bg-[#9C1B1F] active:text-[#FFD36B] transition-colors">{gender}</button>
             ))}
          </div>
          <div className="bg-white rounded-2xl p-5 border border-black/5 flex items-center justify-between">
             <span className="text-xs font-black text-[#38100E]">出生日期</span>
             <span className="text-xs font-bold text-[#8C6A58]/40">2000-01-01</span>
          </div>
       </div>

       <button 
         onClick={() => setAuthStep('permissions')}
         className="w-full h-16 rounded-3xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm mt-16 shadow-xl shadow-[#9C171D]/20 active:scale-95 transition-all"
       >
         进入黄火火
       </button>
    </div>
  );

  // --- 6. 权限引导页 (PermissionGuide) ---
  const PermissionGuideView = () => (
    <div className="min-h-screen bg-white px-8 pt-20 flex flex-col pb-12">
       <h2 className="text-3xl font-black text-[#38100E]">开启完整体验</h2>
       <p className="mt-2 text-sm font-bold text-[#8C6A58]/40 mb-12">你可以随时在系统设置中关闭权限</p>

       <div className="flex-1 space-y-6">
          {[
            { icon: <MapPin size={24} />, title: '定位权限', desc: '用于任务打卡和地图导航' },
            { icon: <Bluetooth size={24} />, title: '蓝牙权限', desc: '用于连接体验手环展示实时数据' },
            { icon: <Bell size={24} />, title: '通知权限', desc: '用于接收任务和队伍提醒' },
            { icon: <Camera size={24} />, title: '相机权限', desc: '用于拍照提交任务完成凭证' }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-5 p-4 rounded-[32px] bg-[#FBF9F8] border border-black/5">
               <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#9C1B1F]">
                  {item.icon}
               </div>
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
          <button 
            onClick={() => setAuthStep('entering')}
            className="w-full h-16 rounded-3xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm shadow-xl shadow-[#9C171D]/20"
          >
            开启权限并进入
          </button>
          <button onClick={() => setAuthStep('entering')} className="w-full py-2 text-xs font-black text-[#8C6A58]/40 uppercase tracking-widest">稍后再说</button>
       </div>
    </div>
  );

  // --- 7. 进入首页过渡页 (EnteringTransition) ---
  const EnteringTransitionView = () => {
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoggedIn(true);
        setAppPhase('main');
      }, 3000);
      return () => clearTimeout(timer);
    }, []);

    return (
      <div className="fixed inset-0 z-[5000] bg-[#38100E] flex flex-col items-center justify-center">
         <motion.div 
           initial={{ scale: 0.5, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           className="relative"
         >
            <div className="absolute inset-0 bg-[#FFD36B] blur-[80px] opacity-20 animate-pulse" />
            <div className="w-32 h-32 bg-[#9C1B1F] rounded-[48px] flex items-center justify-center relative z-10 border-4 border-[#FFD36B]/20">
               <Flame size={64} className="text-[#FFD36B]" />
            </div>
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
               className="absolute -inset-8 border-4 border-dashed border-[#FFD36B]/20 rounded-full"
            />
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
  };


  // --- Early Return for Auth ---
  if (!isLoggedIn) {
     return (
       <AnimatePresence mode="wait">
         {appPhase === 'splash' && (
           <motion.div key="splash" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
             <SplashView />
           </motion.div>
         )}
         {appPhase === 'welcome' && (
           <motion.div key="welcome" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, x: -20 }}>
             <WelcomeView />
           </motion.div>
         )}
         {appPhase === 'auth' && (
           <motion.div key="auth" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }}>
             {authStep === 'selector' && <AuthSelectorView />}
             {authStep === 'phone' && <PhoneLoginView />}
             {authStep === 'profile' && <ProfileSetupView />}
             {authStep === 'permissions' && <PermissionGuideView />}
             {authStep === 'entering' && <EnteringTransitionView />}
           </motion.div>
         )}
       </AnimatePresence>
     );
  }

  return (
    <div className="min-h-screen pb-24">
      <AnimatePresence>
        {showHeroDetail && (
          <HeroDetailView 
            onClose={() => setShowHeroDetail(false)} 
            onBook={() => {
              setShowHeroDetail(false);
              setShowTicketBooking(true);
            }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showTicketBooking && (
          <TicketBookingView 
            onClose={() => setShowTicketBooking(false)} 
            onSuccess={() => {
              setShowTicketBooking(false);
              setShowPaymentSuccess(true);
            }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showPaymentSuccess && (
          <PaymentSuccessView 
            onClose={() => setShowPaymentSuccess(false)} 
            onViewCode={() => {
              setShowPaymentSuccess(false);
              setShowVerification(true);
            }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showVerification && (
          <VerificationCodeView 
            onClose={() => setShowVerification(false)} 
            onStart={() => {
              setShowVerification(false);
              setShowCurrentExperience(true);
            }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showCurrentExperience && (
          <CurrentExperienceView 
            onClose={() => setShowCurrentExperience(false)} 
            onCheckIn={() => setShowMapCheckIn(true)}
            onShowDetails={() => setShowTaskDetails(true)}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showMapCheckIn && (
          <MapCheckInView
            onClose={() => setShowMapCheckIn(false)}
            onCheckedIn={() => setExpPhase('success')}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showTaskDetails && (
          <TaskDetailsView 
            onClose={() => setShowTaskDetails(false)} 
            onCheckIn={() => {
              setShowTaskDetails(false);
              setShowMapCheckIn(true);
            }}
            onSubmitPhoto={() => {
              setShowTaskDetails(false);
              setShowPhotoSubmission(true);
            }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showPhotoSubmission && (
          <PhotoSubmissionView 
            onClose={() => setShowPhotoSubmission(false)} 
            onCompleteTask={() => {
              setShowPhotoSubmission(false);
              setShowTaskComplete(true);
            }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showTaskComplete && (
          <TaskCompleteView 
            onClose={() => setShowTaskComplete(false)}
            onNext={() => {
              setShowTaskComplete(false);
              // Mocking that this was the last task to show result
              setShowRaceResult(true);
            }}
            onViewProgress={() => {
              setShowTaskComplete(false);
              setShowCurrentExperience(true);
            }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showRaceResult && (
          <RaceResultView 
            onClose={() => setShowRaceResult(false)}
            onGoHome={() => {
              setShowRaceResult(false);
              setCurrentPage('首页');
            }}
            onShowMallHome={() => setShowMallHome(true)}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showTeamHome && (
          <TeamHomeView 
            hasTeam={hasTeam}
            onClose={() => setShowTeamHome(false)}
            onCreate={() => {
              setShowTeamHome(false);
              setShowCreateTeam(true);
            }}
            onJoin={() => {
              setShowTeamHome(false);
              setShowJoinTeam(true);
            }}
            onViewDetails={() => {
              setShowTeamHome(false);
              setShowTeamDetails(true);
            }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showCreateTeam && (
          <CreateTeamView 
            onClose={() => setShowCreateTeam(false)}
            onCreate={() => {
              setHasTeam(true);
              setShowCreateTeam(false);
              setShowTeamDetails(true);
            }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showJoinTeam && (
          <JoinTeamView 
            onClose={() => setShowJoinTeam(false)}
            onJoin={() => {
              setHasTeam(true);
              setShowJoinTeam(false);
              setShowTeamDetails(true);
            }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showTeamDetails && (
          <TeamDetailsView 
            onClose={() => setShowTeamDetails(false)}
            onExit={() => {
              setHasTeam(false);
              setShowTeamDetails(false);
              setShowTeamHome(true);
            }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showWristbandBinding && (
          <WristbandBindingView 
            onClose={() => setShowWristbandBinding(false)}
            onStartSearch={() => {
              setShowWristbandBinding(false);
              setShowSearchDevice(true);
            }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showSearchDevice && (
          <SearchDeviceView 
            onClose={() => setShowSearchDevice(false)}
            onBind={() => {
              setShowSearchDevice(false);
              setShowBindingSuccess(true);
              setIsBandBound(true);
            }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showBindingSuccess && (
          <BindingSuccessView 
            onClose={() => setShowBindingSuccess(false)}
            onViewStatus={() => {
              setShowBindingSuccess(false);
              setShowFlowStatus(true);
            }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showFlowStatus && (
          <FlowStatusView 
            onClose={() => setShowFlowStatus(false)}
            onDisconnect={() => {
              setIsBandBound(false);
              setShowFlowStatus(false);
            }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showSettings && (
          <SettingsView 
            onClose={() => setShowSettings(false)}
            onShowAgreement={() => setShowAgreement(true)}
            onShowPrivacy={() => setShowPrivacyPolicy(true)}
            onShowPermissions={() => setShowPermissionList(true)}
            onLogout={() => {
              setShowSettings(false);
              setAuthStep('selector');
              setAppPhase('auth');
              setIsLoggedIn(false);
            }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showHelpCenter && <HelpCenterView onClose={() => setShowHelpCenter(false)} />}
      </AnimatePresence>
      <AnimatePresence>
        {showFeedback && <FeedbackView onClose={() => setShowFeedback(false)} />}
      </AnimatePresence>
      <AnimatePresence>
        {showAgreement && <AgreementView onClose={() => setShowAgreement(false)} />}
      </AnimatePresence>
      <AnimatePresence>
        {showPrivacyPolicy && <PrivacyPolicyView onClose={() => setShowPrivacyPolicy(false)} />}
      </AnimatePresence>
      <AnimatePresence>
        {showPermissionList && <PermissionsListView onClose={() => setShowPermissionList(false)} />}
        {showSystemGallery && <DesignSystemView onClose={() => setShowSystemGallery(false)} />}
      </AnimatePresence>

      {/* --- Fire Seed Mall Flows --- */}
      <AnimatePresence>
        {showMallHome && (
          <MallHomeView 
            onClose={() => setShowMallHome(false)}
            onSelectProduct={(p) => {
              setSelectedProduct(p);
              setShowMallProductDetail(true);
            }}
            onViewOrders={() => {
              setShowMallHome(false);
              setShowMallOrders(true);
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showMallProductDetail && (
          <MallProductDetailView 
            product={selectedProduct}
            onClose={() => setShowMallProductDetail(false)}
            onBuy={() => {
              setShowMallProductDetail(false);
              setShowMallConfirmOrder(true);
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showMallConfirmOrder && (
          <MallConfirmOrderView 
            product={selectedProduct}
            onClose={() => setShowMallConfirmOrder(false)}
            onPay={() => {
              setShowMallConfirmOrder(false);
              setShowMallPaymentSuccess(true);
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showMallPaymentSuccess && (
          <MallPaymentSuccessView 
            onClose={() => setShowMallPaymentSuccess(false)}
            onViewOrders={() => {
              setShowMallPaymentSuccess(false);
              setShowMallOrders(true);
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showMallOrders && (
          <MallOrdersView 
            onClose={() => setShowMallOrders(false)}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showSceneSelection && (
          <SceneSelectionView 
            onClose={() => setShowSceneSelection(false)} 
            onSceneChanged={(name) => {
              setCurrentScene(name);
              setShowSceneSelection(false);
            }} 
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showMessageCenter && <MessageCenterView onClose={() => setShowMessageCenter(false)} />}
      </AnimatePresence>
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="z-[100] fixed inset-0"
          >
            <EventDetailView 
              event={selectedEvent} 
              onBack={() => setSelectedEvent(null)} 
            />
          </motion.div>
        )}
      </AnimatePresence>

      {currentPage === '内容' && !selectedEvent && <Header activeTab={activeTab} setActiveTab={setActiveTab} />}
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {currentPage === '首页' && (
              <HomeView 
                onShowDetail={() => setShowHeroDetail(true)} 
                onShowTeamHome={() => setShowTeamHome(true)}
                onShowTicketBooking={() => setShowTicketBooking(true)}
                onShowWristbandBinding={() => setShowWristbandBinding(true)}
                onShowFlowStatus={() => setShowFlowStatus(true)}
                onShowSceneSelection={() => setShowSceneSelection(true)}
                onShowMessageCenter={() => setShowMessageCenter(true)}
                currentScene={currentScene}
                isBandBound={isBandBound}
              />
            )}
            {currentPage === '体验' && (
              <ExperienceTabHomeView 
                phase={expPhase}
                setPhase={setExpPhase}
                onShowTaskDetails={() => setShowTaskDetails(true)}
                onShowCheckIn={() => setShowMapCheckIn(true)}
                onShowOrders={() => setShowMallOrders(true)}
                onShowMedals={() => setShowMyMedals(true)}
              />
            )}
            {currentPage === '英雄' && (
              <HeroTabView 
                onSelectHero={() => {
                  setShowHeroDetail(true);
                }}
                onBookTicket={() => {
                  setShowTicketBooking(true);
                }}
              />
            )}
            {currentPage === '内容' && <ContentView activeTab={activeTab} onSelectEvent={setSelectedEvent} />}

            {currentPage === '队伍' && (
              <TeamTabHomeView 
                hasTeam={hasTeam}
                onJoinTeam={(code) => {
                  setHasTeam(true);
                }}
                onCreateTeam={() => setHasTeam(true)}
                onShowDetails={() => setShowTeamDetails(true)}
              />
            )}
            {currentPage === '消息' && <MessageView />}
            {currentPage === '我' && (
              <MyProfileView 
                onShowOrders={() => setShowMyOrders(true)} 
                onShowExperiences={() => setShowMyExperiences(true)} 
                onShowMedals={() => setShowMyMedals(true)} 
                onShowWristband={() => setShowWristbandBinding(true)}
                onShowHelpCenter={() => setShowHelpCenter(true)}
                onShowFeedback={() => setShowFeedback(true)}
                onShowSettings={() => setShowSettings(true)}
                onShowSystemGallery={() => setShowSystemGallery(true)}
                onShowMallHome={() => setShowMallHome(true)}
                isLoggedIn={isLoggedIn}
                onLogin={() => {
                  setAppPhase('auth');
                  setAuthStep('selector');
                }}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {!selectedEvent && <BottomNav activePage={currentPage} onPageChange={setCurrentPage} />}
      
      <AnimatePresence>
        {toast && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[6000] px-6 py-3 bg-[#38100E] text-[#FFD36B] rounded-2xl text-[11px] font-black shadow-2xl border border-[#FFD36B]/20 whitespace-nowrap"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
