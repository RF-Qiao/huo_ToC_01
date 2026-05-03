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
import { AppHeader } from './components/AppHeader';
import { HeroDetailView } from '../features/heroes';
import { TicketBookingView } from '../features/ticketing';
import { CommunityView } from '../features/community';
import { DEFAULT_AUTH_STEP, DEFAULT_EXPERIENCE_PHASE, DEFAULT_SCENE_NAME, DEFAULT_USER_PROFILE, HERO_CATEGORIES } from './constants';
import { allHeroes, homeHeroes, quickItems } from './mockData';
import type { AppPhase, AuthStep, ExperiencePhase, Soul } from './types';
import {
  AuthSelectorPage,
  EnteringTransitionPage,
  PermissionGuidePage,
  PhoneLoginPage,
  ProfileSetupPage,
  SplashPage,
  WelcomePage,
} from './pages/AuthPages';
import { DesignSystemPage } from './pages/DesignSystemPage';
import { CurrentExperiencePage, MapCheckInPage, PaymentSuccessPage, PhotoSubmissionPage, TaskCompletePage, TaskDetailsPage, VerificationCodePage } from './pages/ExperienceFlowPages';
import { ContentPage, EventDetailPage, type ContentEvent } from './pages/EventPages';
import { MessagePage } from './pages/MessagePage';
import { MessageCenterPage, SceneSelectionPage, SettingsPage } from './pages/OverlayPages';
import { MyExperiencesPage, MyMedalsPage, MyOrdersPage } from './pages/ProfilePages';
import { AgreementPage, FeedbackPage, HelpCenterPage, PermissionsListPage, PrivacyPolicyPage } from './pages/SupportPages';
import { CreateTeamPage, JoinTeamPage, TeamDetailsPage, TeamHomePage } from './pages/TeamPages';

const isDevMode = import.meta.env.DEV;

function CurrentExperience({ onShowDetail }: { onShowDetail: () => void }) {
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
          <button
            onClick={onShowDetail}
            className="relative mt-4 w-full h-11 rounded-2xl bg-[#FFD36B] text-[#701015] font-extrabold shadow-lg shadow-black/20"
          >
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
        <button
          onClick={onShowDetail}
          className="mt-4 h-10 px-6 rounded-full bg-[#98161B] text-[#FFE6A3] font-bold"
        >
          去看看英雄
        </button>
      </div>
    </div>
  );
}

// --- Prototypes ---

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

/** --- Settings & Compliance Module Views --- */

// 页面一：设置页
// 页面二：帮助中心页

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

/** --- Global Status & Action Components --- */

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
        <CurrentExperience onShowDetail={onShowDetail} />
      </section>

      <section className="mt-7">
        <div className="px-5">
          <ProtoSectionTitle title="今日可玩英雄" right="更多" />
        </div>
        <div className="flex gap-3 overflow-x-auto px-5 pb-2 no-scrollbar">
          {homeHeroes.map((hero) => (
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
         {HERO_CATEGORIES.map(cat => (
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
  const [selectedEvent, setSelectedEvent] = useState<ContentEvent | null>(null);
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
  const [expPhase, setExpPhase] = useState<ExperiencePhase>(DEFAULT_EXPERIENCE_PHASE);
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
  const [currentScene, setCurrentScene] = useState(DEFAULT_SCENE_NAME);
  
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
  const [appPhase, setAppPhase] = useState<AppPhase>('splash');
  const [authStep, setAuthStep] = useState<AuthStep>(DEFAULT_AUTH_STEP);
  const [userProfile, setUserProfile] = useState(DEFAULT_USER_PROFILE);
  const [agreed, setAgreed] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2000);
  };

  // --- Early Return for Auth ---
  if (!isLoggedIn) {
     return (
       <AnimatePresence mode="wait">
         {appPhase === 'splash' && (
           <motion.div key="splash" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
             <SplashPage onComplete={() => setAppPhase('welcome')} />
           </motion.div>
         )}
         {appPhase === 'welcome' && (
           <motion.div key="welcome" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, x: -20 }}>
             <WelcomePage onSkip={() => setAppPhase('auth')} onEnter={() => setAppPhase('auth')} />
           </motion.div>
         )}
         {appPhase === 'auth' && (
           <motion.div key="auth" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }}>
             {authStep === 'selector' && (
               <AuthSelectorPage
                 agreed={agreed}
                 onToggleAgreed={() => setAgreed(!agreed)}
                 onWechatLogin={() => {
                   if (!agreed) return showToast('请先同意用户协议');
                   setUserProfile(DEFAULT_USER_PROFILE);
                   setAuthStep('profile');
                 }}
                 onPhoneLogin={() => {
                   if (!agreed) return showToast('请先同意用户协议');
                   setAuthStep('phone');
                 }}
                 onPreview={() => {
                   setAppPhase('main');
                   setIsLoggedIn(true);
                 }}
               />
             )}
             {authStep === 'phone' && <PhoneLoginPage onBack={() => setAuthStep('selector')} onSubmit={() => setAuthStep('profile')} />}
             {authStep === 'profile' && <ProfileSetupPage userProfile={userProfile} onProfileChange={setUserProfile} onSubmit={() => setAuthStep('permissions')} />}
             {authStep === 'permissions' && <PermissionGuidePage onSubmit={() => setAuthStep('entering')} />}
             {authStep === 'entering' && <EnteringTransitionPage onComplete={() => { setIsLoggedIn(true); setAppPhase('main'); }} />}
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
          <PaymentSuccessPage 
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
          <VerificationCodePage 
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
          <CurrentExperiencePage 
            onClose={() => setShowCurrentExperience(false)} 
            onCheckIn={() => setShowMapCheckIn(true)}
            onShowDetails={() => setShowTaskDetails(true)}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showMapCheckIn && (
          <MapCheckInPage
            onClose={() => setShowMapCheckIn(false)}
            onCheckedIn={() => setExpPhase('success')}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showTaskDetails && (
          <TaskDetailsPage 
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
          <PhotoSubmissionPage
            isDevMode={isDevMode}
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
          <TaskCompletePage 
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
        {showMyOrders && (
          <MyOrdersPage onClose={() => setShowMyOrders(false)} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showMyExperiences && (
          <MyExperiencesPage onClose={() => setShowMyExperiences(false)} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showMyMedals && (
          <MyMedalsPage onClose={() => setShowMyMedals(false)} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showTeamHome && (
          <TeamHomePage
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
          <CreateTeamPage
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
          <JoinTeamPage
            isDevMode={isDevMode}
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
          <TeamDetailsPage
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
          <SettingsPage
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
        {showHelpCenter && <HelpCenterPage onClose={() => setShowHelpCenter(false)} />}
      </AnimatePresence>
      <AnimatePresence>
        {showFeedback && <FeedbackPage onClose={() => setShowFeedback(false)} />}
      </AnimatePresence>
      <AnimatePresence>
        {showAgreement && <AgreementPage onClose={() => setShowAgreement(false)} />}
      </AnimatePresence>
      <AnimatePresence>
        {showPrivacyPolicy && <PrivacyPolicyPage onClose={() => setShowPrivacyPolicy(false)} />}
      </AnimatePresence>
      <AnimatePresence>
        {showPermissionList && <PermissionsListPage onClose={() => setShowPermissionList(false)} />}
        {showSystemGallery && <DesignSystemPage onClose={() => setShowSystemGallery(false)} />}
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
          <SceneSelectionPage
            onClose={() => setShowSceneSelection(false)} 
            onSceneChanged={(name) => {
              setCurrentScene(name);
              setShowSceneSelection(false);
            }} 
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showMessageCenter && <MessageCenterPage onClose={() => setShowMessageCenter(false)} />}
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
            <EventDetailPage
              event={selectedEvent} 
              onBack={() => setSelectedEvent(null)} 
            />
          </motion.div>
        )}
      </AnimatePresence>

      {currentPage === '内容' && !selectedEvent && <AppHeader activeTab={activeTab} setActiveTab={setActiveTab} />}
      
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
            {currentPage === '社区' && (
              <CommunityView
                onMessage={() => setShowMessageCenter(true)}
              />
            )}
            {currentPage === '内容' && <ContentPage activeTab={activeTab} onSelectEvent={setSelectedEvent} />}

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
            {currentPage === '消息' && <MessagePage />}
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
