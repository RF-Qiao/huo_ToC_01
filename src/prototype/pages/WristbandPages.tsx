import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  Activity,
  ArrowLeft,
  Battery,
  Bluetooth,
  Check,
  Edit2,
  EyeOff,
  FileText,
  Flame,
  Info,
  LogOut,
  RefreshCw,
  Watch,
  X,
} from 'lucide-react';

type WristbandBindingPageProps = {
  onClose: () => void;
  onStartSearch: () => void;
};

export function WristbandBindingPage({ onClose, onStartSearch }: WristbandBindingPageProps) {
  return (
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
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-[#FFD36B]/20 blur-3xl rounded-full" />
            <div className="relative w-48 h-48 bg-gradient-to-br from-[#FFD36B] to-[#F39C28] rounded-[48px] flex items-center justify-center shadow-2xl shadow-black/10">
              <Watch size={86} className="text-[#8E1217]" strokeWidth={1.5} />
              <div className="absolute -right-2 -bottom-2 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                <Bluetooth size={24} className="text-[#9C1B1F]" />
              </div>
            </div>
          </div>
          <h1 className="text-2xl font-black text-[#38100E]">绑定体验手环</h1>
          <p className="mt-3 text-sm text-[#8C6A58] leading-relaxed font-bold px-4">
            查看心率、血氧和心流状态，让你的英雄体验更沉浸。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {[
            { icon: <Activity size={20} />, title: '心率', desc: '体验过程中的心跳状态', color: 'text-red-500 bg-red-50' },
            { icon: <Bluetooth size={20} />, title: '血氧', desc: '身体状态参考', color: 'text-[#9C1B1F] bg-[#FFF1D0]' },
            { icon: <Flame size={20} />, title: '心流值', desc: '沉浸体验辅助指标', color: 'text-orange-500 bg-orange-50' },
          ].map((item) => (
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

        <div className="p-5 bg-[#F5DDA2]/10 rounded-3xl border border-[#F5DDA2]/30 flex gap-4">
          <Info size={18} className="text-[#9C1B1F] shrink-0 mt-0.5" />
          <p className="text-[10px] font-bold text-[#8C6A58]/70 leading-relaxed">
            绑定手环需要开启蓝牙权限。数据仅用于本次体验展示和个人体验回顾，不作为医疗或心理诊断依据。
          </p>
        </div>
      </div>

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
}

type SearchDevicePageProps = {
  onClose: () => void;
  onBind: () => void;
};

export function SearchDevicePage({ onClose, onBind }: SearchDevicePageProps) {
  const [isSearching] = useState(true);
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

          <div className="space-y-4">
            <div className="flex items-center gap-2 px-2">
              <span className="w-1 h-3 bg-[#9C1B1F] rounded-full" />
              <h3 className="text-sm font-black text-[#38100E]">可用设备</h3>
            </div>
            {[
              { name: 'HHF-Band-001', battery: '86%', status: '可绑定', active: true },
              { name: 'HHF-Band-002', battery: '72%', status: '可绑定', active: true },
              { name: 'HHF-Band-003', battery: '8%', status: '建议更换', active: false },
            ].map((device, index) => (
              <div key={index} className={`bg-white rounded-[28px] p-5 border border-black/5 shadow-sm flex items-center justify-between transition-all ${!device.active ? 'opacity-50' : 'active:bg-gray-50'}`}>
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

          <div className="text-center py-6 px-4">
            <p className="text-[11px] font-bold text-[#8C6A58]/40 leading-relaxed">
              搜索不到设备？请打开手机蓝牙，或联系现场体验官。<br />
              也可点击 <button onClick={() => setBluetoothEnabled(false)} className="text-[#9C1B1F] underline underline-offset-2">刷新重试</button>
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
}

type BindingSuccessPageProps = {
  onClose: () => void;
  onViewStatus: () => void;
};

export function BindingSuccessPage({ onClose, onViewStatus }: BindingSuccessPageProps) {
  return (
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
              { label: '数据更新', val: '实时同步中', icon: <RefreshCw size={14} /> },
            ].map((item) => (
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

        <div className="w-full mt-8 space-y-4">
          <h3 className="text-white font-black text-sm text-center">你现在可以</h3>
          <div className="grid grid-cols-1 gap-3">
            {[
              { icon: <Activity size={18} />, text: '查看心流状态' },
              { icon: <Edit2 size={18} />, text: '记录体验过程' },
              { icon: <FileText size={18} />, text: '完成后生成体验摘要' },
            ].map((cap, index) => (
              <div key={index} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                <div className="text-[#FFD36B]">{cap.icon}</div>
                <span className="text-xs font-black text-white/80">{cap.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

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
}

type FlowStatusPageProps = {
  onClose: () => void;
  onDisconnect: () => void;
};

export function FlowStatusPage({ onClose, onDisconnect }: FlowStatusPageProps) {
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
}
