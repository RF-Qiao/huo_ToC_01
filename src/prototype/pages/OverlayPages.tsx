import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowLeft,
  Award,
  CheckCheck,
  ChevronRight,
  LocateFixed,
  LogOut,
  Mail,
  MapPin,
  Receipt,
  Search,
  Target,
  Users,
  Watch,
} from 'lucide-react';

type SimplePageProps = {
  onClose: () => void;
};

type SettingsPageProps = SimplePageProps & {
  onShowAgreement: () => void;
  onShowPrivacy: () => void;
  onShowPermissions: () => void;
  onLogout: () => void;
};

type SceneSelectionPageProps = SimplePageProps & {
  onSceneChanged: (name: string) => void;
};

type MessageItem = {
  id: number;
  type: '任务' | '订单' | '队伍' | '系统';
  title: string;
  content: string;
  time: string;
  unread: boolean;
  icon: React.ReactNode;
};

export function SettingsPage({
  onClose,
  onShowAgreement,
  onShowPrivacy,
  onShowPermissions,
  onLogout,
}: SettingsPageProps) {
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      className="fixed inset-0 z-[1100] bg-[#FBF9F8] overflow-y-auto flex flex-col"
    >
      <header className="h-16 px-6 bg-white border-b border-black/5 flex items-center justify-between shrink-0 sticky top-0 z-10">
        <button onClick={onClose} className="p-2 -ml-2 text-[#38100E]"><ArrowLeft size={24} strokeWidth={3} /></button>
        <h2 className="text-lg font-black text-[#38100E]">设置</h2>
        <div className="w-10" />
      </header>

      <div className="flex-1 p-6 space-y-6">
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

        <section className="space-y-3">
          <h3 className="px-2 text-[10px] font-black text-[#8C6A58]/40 uppercase tracking-widest">权限设置</h3>
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-black/5">
            {[
              { label: '定位权限', desc: '用于任务打卡', status: '已开启' },
              { label: '蓝牙权限', desc: '用于连接体验手环', status: '已开启' },
              { label: '通知权限', desc: '用于任务、订单、队伍提醒', status: '去设置' },
              { label: '相机权限', desc: '用于拍照提交任务', status: '已开启' },
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

        <section className="space-y-3">
          <h3 className="px-2 text-[10px] font-black text-[#8C6A58]/40 uppercase tracking-widest">合规与关于</h3>
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-black/5">
            {[
              { label: '用户协议', onClick: onShowAgreement },
              { label: '隐私政策', onClick: onShowPrivacy },
              { label: '权限说明', onClick: onShowPermissions },
              { label: '未成年人保护说明', onClick: () => {} },
              { label: '关于黄火火', onClick: () => {} },
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
}

export function SceneSelectionPage({ onClose, onSceneChanged }: SceneSelectionPageProps) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedSceneName, setSelectedSceneName] = useState('');

  const scenes = [
    {
      name: '蓝色港湾 · 黄火火体验点',
      addr: '北京市朝阳区',
      dist: '1.2km',
      status: '开放中',
      heroes: ['霍去病', '花木兰', '岳飞'],
      img: 'https://images.unsplash.com/photo-1547984602-40d667cf313f?q=80&w=400&auto=format&fit=crop',
    },
    {
      name: '奥森公园 · 英雄挑战点',
      addr: '北京市朝阳区',
      dist: '4.8km',
      status: '即将开放',
      heroes: ['岳飞', '霍去病'],
      img: 'https://images.unsplash.com/photo-1518151820534-10651790471b?q=80&w=400&auto=format&fit=crop',
    },
    {
      name: '古城文化街区 · 火种体验点',
      addr: '北京市东城区',
      dist: '8.5km',
      status: '筹备中',
      heroes: ['朱元璋', '秦始皇'],
      img: 'https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=400&auto=format&fit=crop',
    },
  ];

  const handleSelect = (name: string) => {
    setSelectedSceneName(name);
    setShowSuccess(true);
  };

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      className="fixed inset-0 z-[1300] bg-[#FBF9F8] overflow-y-auto flex flex-col"
    >
      <header className="h-16 px-6 bg-white border-b border-black/5 flex items-center justify-between shrink-0 sticky top-0 z-10">
        <button onClick={onClose} className="p-2 -ml-2 text-[#38100E]"><ArrowLeft size={24} strokeWidth={3} /></button>
        <h2 className="text-lg font-black text-[#38100E]">选择场景</h2>
        <div className="w-10" />
      </header>

      <div className="p-6 space-y-6">
        <div className="relative">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-[#8C6A58]/40" size={18} />
          <input
            type="text"
            placeholder="搜索城市、景区、商圈、公园"
            className="w-full h-14 bg-white rounded-2xl pl-12 pr-6 text-sm font-bold text-[#38100E] border border-black/5 shadow-sm outline-none"
          />
        </div>

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
                      <button className="flex-1 h-12 rounded-2xl bg-gray-100 text-[#8C6A58]/40 font-black text-xs cursor-not-allowed">
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
}

export function MessageCenterPage({ onClose }: SimplePageProps) {
  const [activeTab, setActiveTab] = useState('全部');
  const [selectedMsg, setSelectedMsg] = useState<MessageItem | null>(null);

  const tabs = ['全部', '任务', '订单', '队伍', '系统'];

  const messages: MessageItem[] = [
    { id: 1, type: '任务', title: '第3关已解锁', content: '战鼓挑战已开启，继续完成你的封狼居胥之路。', time: '刚刚', unread: true, icon: <Target size={16} /> },
    { id: 2, type: '订单', title: '支付成功', content: '你的霍去病英雄体验票已生成，请到现场核销。', time: '10分钟前', unread: false, icon: <Receipt size={16} /> },
    { id: 3, type: '队伍', title: '集合提醒', content: '冠军侯小队队长提醒你前往集合点。', time: '20分钟前', unread: true, icon: <Users size={16} /> },
    { id: 4, type: '系统', title: '手环连接已断开', content: '请靠近手环并重新连接。', time: '30分钟前', unread: false, icon: <Watch size={16} /> },
    { id: 5, type: '系统', title: '新人福利已到账', content: '新人首单立减10元优惠已发放。', time: '今天', unread: false, icon: <Award size={16} /> },
  ];

  const filteredMessages = activeTab === '全部' ? messages : messages.filter(m => m.type === activeTab);

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      className="fixed inset-0 z-[1300] bg-[#FBF9F8] overflow-y-auto flex flex-col"
    >
      <header className="h-16 px-6 bg-white border-b border-black/5 flex items-center justify-between shrink-0 sticky top-0 z-10">
        <button onClick={onClose} className="p-2 -ml-2 text-[#38100E]"><ArrowLeft size={24} strokeWidth={3} /></button>
        <h2 className="text-lg font-black text-[#38100E]">消息中心</h2>
        <button className="text-[10px] font-black text-[#8C6A58]/40 flex items-center gap-1 active:text-[#9C1B1F]">
          全部已读 <CheckCheck size={12} />
        </button>
      </header>

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
}
