import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import type { ReactNode } from 'react';
import {
  AlertTriangle,
  ArrowLeft,
  Bell,
  BluetoothOff,
  Camera,
  CameraOff,
  CheckCircle2,
  Coins,
  Flame,
  Headset,
  LocateFixed,
  MapPin,
  Minus,
  Play,
  Plus,
  Settings,
  Share2,
  Target,
  Ticket,
  Trophy,
  Users,
  Watch,
  WifiOff,
  XCircle,
} from 'lucide-react';
import { EmptyState, LoadingIndicator, Toast } from '../../components/prototype';

type SimplePageProps = {
  onClose: () => void;
};

type DialogType = 'success' | 'fail' | 'confirm' | 'reward';
type ErrorPageType = 'network' | 'location' | 'bluetooth' | 'camera';

type RewardItem = {
  label: string;
  value: string;
  icon?: ReactNode;
};

type StatusDialogProps = {
  type?: DialogType;
  title: string;
  content?: string;
  primaryText?: string;
  secondaryText?: string;
  onPrimary: () => void;
  onSecondary?: () => void;
  rewards?: RewardItem[];
};

type StatusDialogState = Omit<StatusDialogProps, 'onPrimary' | 'onSecondary'>;

function StatusDialog({
  type = 'success',
  title,
  content,
  primaryText = '我知道了',
  secondaryText,
  onPrimary,
  onSecondary,
  rewards,
}: StatusDialogProps) {
  return (
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
}

function ErrorStatePage({
  type = 'network',
  onRetry,
  onBack,
}: {
  type?: ErrorPageType;
  onRetry: () => void;
  onBack: () => void;
}) {
  const configs: Record<ErrorPageType, { title: string; desc: string; btn: string; icon: ReactNode }> = {
    network: {
      title: '网络开小差了',
      desc: '当前网络不稳定，请检查网络后重试。',
      btn: '重新加载',
      icon: <WifiOff size={48} strokeWidth={1.5} />,
    },
    location: {
      title: '需要开启定位权限',
      desc: '定位权限用于判断你是否到达任务点，完成LBS打卡。你可以随时在系统设置中关闭。',
      btn: '去开启定位',
      icon: <LocateFixed size={48} strokeWidth={1.5} />,
    },
    bluetooth: {
      title: '需要开启蓝牙权限',
      desc: '蓝牙权限用于连接现场体验手环，展示心率、血氧和心流状态。',
      btn: '去开启蓝牙',
      icon: <BluetoothOff size={48} strokeWidth={1.5} />,
    },
    camera: {
      title: '需要开启相机权限',
      desc: '相机权限用于拍摄任务照片，作为任务完成凭证。',
      btn: '去开启相机',
      icon: <CameraOff size={48} strokeWidth={1.5} />,
    },
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
}

function ProductBlueprintView() {
  const tabs = [
    { title: '首页', pos: '产品入口与推荐转化', color: '#9C1B1F', items: ['场景选择', '消息中心', '主推英雄', '购票入口', '开始体验', '加入队伍', '绑定手环', '火种商城入口'] },
    { title: '体验', pos: '线下实时英雄任务主控页', color: '#9C1B1F', items: ['当前任务', '任务详情', '地图打卡', '拍照提交', '任务奖励', '完赛结果', '心流状态', '联系体验官'] },
    { title: '英雄', pos: '英雄内容中心与购票转化', color: '#FFD36B', items: ['英雄列表', '英雄分类', '英雄详情', '路线详情', '任务预览', '立即购票'] },
    { title: '队伍', pos: '组队协作与真实社交中心', color: '#10B981', items: ['创建队伍', '输入队伍码', '扫码加入', '队伍详情', '成员列表', '集合提醒'] },
    { title: '我的', pos: '用户资产与英雄成长档案', color: '#3B82F6', items: ['我的订单', '体验记录', '我的勋章', '火种商城', '手环管理', '客服帮助', '设置', '隐私协议'] },
  ];

  const mainPath = [
    '首页', '英雄详情', '购票页', '支付成功', '核销码', '体验页', '地图打卡', '任务完成', '完赛结果', '我的勋章/商城',
  ];

  return (
    <div className="space-y-12">
      <header className="py-2">
        <h2 className="text-xl font-black text-[#38100E]">黄火火 C端产品结构总览</h2>
        <p className="text-[10px] font-bold text-[#8C6A58]/60 mt-1 uppercase tracking-widest leading-relaxed">首页 · 体验 · 英雄 · 队伍 · 我的 五大一级页面结构与跳转关系</p>
      </header>

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

      <section className="space-y-6">
        <div className="flex items-center gap-2 px-1">
          <div className="w-1 h-3 bg-red-500 rounded-full" />
          <h3 className="text-sm font-black text-[#38100E]">核心用户主链路 (The Hero&apos;s Path)</h3>
        </div>
        <div className="bg-white rounded-[40px] p-8 border border-black/5 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-3xl rounded-full" />
          <div className="relative space-y-8">
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
              { flow: '商城转化', route: '我的 → 火种商城 → 商品详情', color: 'bg-purple-500' },
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
                { label: '灰色: 设置/合规链路', desc: '协议、客服与系统设置', color: 'bg-gray-400' },
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
}

export function DesignSystemPage({ onClose }: SimplePageProps) {
  const [activeTab, setActiveTab] = useState('蓝图');
  const [dialog, setDialog] = useState<StatusDialogState | null>(null);
  const [errorPage, setErrorPage] = useState<ErrorPageType | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (text: string) => {
    setToast(text);
    setTimeout(() => setToast(null), 2000);
  };

  const tabs = ['蓝图', '基础', '组件', '业务', '状态'];

  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
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
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-1 h-3 bg-[#9C1B1F] rounded-full" />
                <h3 className="text-sm font-black text-[#38100E]">品牌色彩规范</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <div className="h-16 rounded-2xl bg-[#9C1B1F] border border-black/5 flex items-end p-3"><span className="text-[10px] font-black text-[#FFD36B]">主色: 中国红</span></div>
                  <div className="h-16 rounded-2xl bg-[#FFD36B] border border-black/5 flex items-end p-3"><span className="text-[10px] font-black text-[#9C1B1F]">辅色: 金色</span></div>
                  <div className="h-16 rounded-2xl bg-[#38100E] border border-black/5 flex items-end p-3"><span className="text-[10px] font-black text-[#FFD36B]">强调色: 深红/橙金</span></div>
                </div>
                <div className="space-y-2">
                  <div className="h-16 rounded-2xl bg-[#FBF9F8] border border-black/5 flex items-end p-3"><span className="text-[10px] font-black text-[#38100E]">背景色: 米白</span></div>
                  <div className="h-16 rounded-2xl bg-green-500 border border-black/5 flex items-end p-3"><span className="text-[10px] font-black text-white">成功色: 绿色</span></div>
                  <div className="h-16 rounded-2xl bg-orange-500 border border-black/5 flex items-end p-3"><span className="text-[10px] font-black text-white">警告色: 橙色</span></div>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-1 h-3 bg-[#9C1B1F] rounded-full" />
                <h3 className="text-sm font-black text-[#38100E]">字体层级规范</h3>
              </div>
              <div className="bg-white rounded-[32px] p-6 space-y-6 border border-black/5">
                <div className="space-y-1"><div className="text-xs text-[#8C6A58]/30 font-black uppercase tracking-widest">Page Large Title</div><div className="text-3xl font-black text-[#38100E]">页面大标题 30px</div></div>
                <div className="space-y-1"><div className="text-xs text-[#8C6A58]/30 font-black uppercase tracking-widest">Module Title</div><div className="text-xl font-black text-[#38100E]">模块标题 20px</div></div>
                <div className="space-y-1"><div className="text-xs text-[#8C6A58]/30 font-black uppercase tracking-widest">Card Title</div><div className="text-lg font-black text-[#38100E]">卡片标题 18px</div></div>
                <div className="space-y-1"><div className="text-xs text-[#8C6A58]/30 font-black uppercase tracking-widest">Body Text</div><div className="text-sm font-bold text-[#8C6A58] leading-relaxed">正文内容建议使用 14px，行高 1.6 倍，保持阅读舒适度。</div></div>
                <div className="space-y-1"><div className="text-xs text-[#8C6A58]/30 font-black uppercase tracking-widest">Secondary Desc</div><div className="text-[11px] font-bold text-[#8C6A58]/60 uppercase tracking-tight">辅助说明描述建议使用 11px，颜色较淡。</div></div>
                <div className="space-y-1"><div className="text-xs text-[#8C6A58]/30 font-black uppercase tracking-widest">Price / Numbers</div><div className="text-2xl font-black italic text-[#9C1B1F]">¥ 199.00 / 88</div></div>
              </div>
            </section>

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
                    <div className="w-12 h-12 rounded-2xl bg-[#FBF9F8] text-[#9C1B1F] flex items-center justify-center border border-black/5">{item.icon}</div>
                    <span className="text-[10px] font-black text-[#8C6A58]/60">{item.label}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === '组件' && (
          <div className="space-y-12">
            <section className="space-y-4">
              <div className="flex items-center gap-2"><div className="w-1 h-3 bg-[#9C1B1F] rounded-full" /><h3 className="text-sm font-black text-[#38100E]">按钮组件</h3></div>
              <div className="space-y-4">
                <button className="w-full h-14 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm shadow-xl shadow-[#9C1B1F]/20 active:scale-95 transition-all">主按钮: 立即购票</button>
                <button className="w-full h-14 rounded-2xl bg-[#38100E] text-[#FFD36B] font-black text-sm active:scale-95 transition-all">次按钮: 查看详情</button>
                <button className="w-full h-14 rounded-2xl bg-white border border-black/5 text-[#8C6A58] font-black text-sm active:scale-95 transition-all">描边按钮: 联系客服</button>
                <button className="w-full h-14 rounded-2xl bg-gray-100 text-[#8C6A58]/20 font-black text-sm cursor-not-allowed">禁用按钮: 未到达打卡范围</button>
                <button className="w-full h-12 rounded-2xl text-red-500 bg-red-50 font-black text-xs">危险按钮: 退出队伍</button>
              </div>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-2"><div className="w-1 h-3 bg-[#9C1B1F] rounded-full" /><h3 className="text-sm font-black text-[#38100E]">标签组件</h3></div>
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

            <section className="space-y-4">
              <div className="flex items-center gap-2"><div className="w-1 h-3 bg-[#9C1B1F] rounded-full" /><h3 className="text-sm font-black text-[#38100E]">表单组件</h3></div>
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
            <section className="space-y-4">
              <div className="flex items-center gap-2"><div className="w-1 h-3 bg-[#9C1B1F] rounded-full" /><h3 className="text-sm font-black text-[#38100E]">卡片组件</h3></div>
              <div className="space-y-6">
                <div className="bg-white rounded-[40px] p-6 border border-black/5 shadow-sm flex items-center gap-6">
                  <div className="w-20 h-20 rounded-3xl bg-[#FBF9F8] overflow-hidden shrink-0"><img src="https://images.unsplash.com/photo-1547984602-40d667cf313f?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" /></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1"><h4 className="text-lg font-black text-[#38100E]">霍去病</h4><span className="px-2 py-0.5 bg-green-50 text-green-500 rounded-full text-[8px] font-black">可体验</span></div>
                    <p className="text-[11px] font-bold text-[#8C6A58]/60 line-clamp-1">封狼居胥，一代战神英雄</p>
                    <button className="mt-3 px-4 py-1.5 bg-[#9C1B1F] text-[#FFD36B] rounded-full text-[10px] font-black">立即体验</button>
                  </div>
                </div>

                <div className="bg-[#38100E] rounded-[40px] p-6 text-[#FFD36B] border border-black/5 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#9C1B1F]/20 rounded-full -mr-16 -mt-16 blur-3xl opacity-50" />
                  <div className="relative">
                    <div className="text-[9px] font-black opacity-40 uppercase tracking-widest mb-1">Current Task</div>
                    <h4 className="text-xl font-black italic mb-4">第2关 · 漠北追击</h4>
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2"><div className="w-6 h-6 rounded-full border border-[#38100E] bg-white/10" /><div className="w-6 h-6 rounded-full border border-[#38100E] bg-white/20" /></div>
                      <span className="text-[10px] font-bold opacity-60">冠军侯小队 · 2人</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-2"><div className="w-1 h-3 bg-[#9C1B1F] rounded-full" /><h3 className="text-sm font-black text-[#38100E]">底部 TabBar组件</h3></div>
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

            <section className="space-y-4">
              <div className="flex items-center gap-2"><div className="w-1 h-3 bg-[#9C1B1F] rounded-full" /><h3 className="text-sm font-black text-[#38100E]">顶部导航栏组件</h3></div>
              <div className="space-y-3">
                <div className="h-14 bg-white rounded-2xl border border-black/5 flex items-center justify-center px-4 relative"><h4 className="text-sm font-black">普通标题</h4></div>
                <div className="h-14 bg-white rounded-2xl border border-black/5 flex items-center justify-between px-6"><ArrowLeft size={18} /><h4 className="text-sm font-black">带返回标题</h4><div className="w-4.5" /></div>
                <div className="h-14 bg-white rounded-2xl border border-black/5 flex items-center justify-between px-6"><ArrowLeft size={18} /><h4 className="text-sm font-black">复合功能栏</h4><div className="flex gap-4"><Headset size={18} /><Share2 size={18} /></div></div>
              </div>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-2"><div className="w-1 h-3 bg-[#9C1B1F] rounded-full" /><h3 className="text-sm font-black text-[#38100E]">背景与装饰元素</h3></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-24 rounded-3xl bg-[#FBF9F8] border border-black/5 flex items-center justify-center text-[10px] font-black text-[#8C6A58]/20 uppercase">米色背景</div>
                <div className="h-24 rounded-3xl bg-gradient-to-br from-[#9C1B1F] to-[#38100E] border border-black/5 flex items-center justify-center text-[10px] font-black text-[#FFD36B]/40 uppercase text-center">红金渐变背景</div>
                <div className="h-24 rounded-3xl bg-[#38100E] relative overflow-hidden flex items-center justify-center"><div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #FFD36B 1px, transparent 1px)', backgroundSize: '12px 12px' }} /><span className="text-[10px] font-black text-[#FFD36B]/40 uppercase">国潮暗纹</span></div>
                <div className="h-24 rounded-3xl bg-white relative overflow-hidden flex items-center justify-center shadow-lg"><div className="absolute top-0 right-0 w-20 h-20 bg-[#FFD36B]/20 rounded-full -mr-10 -mt-10 blur-2xl" /><span className="text-[10px] font-black text-[#9C1B1F] uppercase">勋章光效</span></div>
              </div>
            </section>
          </div>
        )}

        {activeTab === '状态' && (
          <div className="space-y-12">
            <section className="space-y-4">
              <div className="flex items-center gap-2"><div className="w-1 h-3 bg-[#9C1B1F] rounded-full" /><h3 className="text-sm font-black text-[#38100E]">弹窗组件 快捷预览</h3></div>
              <div className="grid grid-cols-2 gap-3">
                <button onClick={() => setDialog({ type: 'success', title: '操作成功' })} className="h-12 rounded-xl bg-white border border-black/5 text-[10px] font-black shadow-sm">成功弹窗</button>
                <button onClick={() => setDialog({ type: 'fail', title: '失败提示' })} className="h-12 rounded-xl bg-white border border-black/5 text-[10px] font-black shadow-sm">失败弹窗</button>
                <button onClick={() => setDialog({ type: 'confirm', title: '确认操作？', primaryText: '确认', secondaryText: '取消' })} className="h-12 rounded-xl bg-white border border-black/5 text-[10px] font-black shadow-sm">确认弹窗</button>
                <button onClick={() => setDialog({ type: 'reward', title: '获得奖励', rewards: [{ label: '火种', value: '+10', icon: <Flame size={14} /> }] })} className="h-12 rounded-xl bg-white border border-black/5 text-[10px] font-black shadow-sm">奖励弹窗</button>
              </div>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-2"><div className="w-1 h-3 bg-[#9C1B1F] rounded-full" /><h3 className="text-sm font-black text-[#38100E]">页面状态组件</h3></div>
              <div className="bg-white rounded-[40px] border border-black/5 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-black/5 bg-[#FBF9F8] text-[9px] font-black text-[#8C6A58]/40 text-center uppercase tracking-tighter">Empty State</div>
                <EmptyState title="暂无内容" desc="你的英雄旅程还没开始" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-[32px] border border-black/5 p-4 flex flex-col items-center"><div className="h-10 border-b border-black/5 flex items-center justify-center w-full mb-4"><span className="text-[8px] font-black opacity-20 uppercase">Network</span></div><WifiOff size={24} className="text-[#8C6A58]/20" /></div>
                <div className="bg-white rounded-[32px] border border-black/5 p-4 flex flex-col items-center"><div className="h-10 border-b border-black/5 flex items-center justify-center w-full mb-4"><span className="text-[8px] font-black opacity-20 uppercase">Loading</span></div><LoadingIndicator /></div>
              </div>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-2"><div className="w-1 h-3 bg-[#9C1B1F] rounded-full" /><h3 className="text-sm font-black text-[#38100E]">Toast 轻提示</h3></div>
              <div className="flex flex-wrap gap-3">
                {['已复制', '已刷新', '请先上传'].map(t => (
                  <button key={t} onClick={() => showToast(t)} className="h-10 px-4 rounded-xl bg-white border border-black/5 text-[10px] font-black shadow-sm">{t}</button>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-2"><div className="w-1 h-3 bg-[#9C1B1F] rounded-full" /><h3 className="text-sm font-black text-[#38100E]">Auth 流程状态演示</h3></div>
              <div className="bg-white rounded-[32px] p-6 space-y-6 border border-black/5">
                <div className="space-y-2">
                  <span className="text-[9px] font-black opacity-40 uppercase">未勾选协议按钮</span>
                  <button className="w-full h-12 rounded-xl bg-gray-100 text-gray-400 font-black text-xs cursor-not-allowed">微信一键登录 (禁用)</button>
                </div>
                <div className="space-y-2">
                  <span className="text-[9px] font-black opacity-40 uppercase">验证码倒计时</span>
                  <div className="flex gap-2"><div className="flex-1 h-12 bg-[#FBF9F8] rounded-xl border border-black/5" /><button className="px-6 h-12 rounded-xl bg-[#38100E] text-[#FFD36B]/60 font-black text-[10px] uppercase">59s后获取</button></div>
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
            type={errorPage}
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
}
