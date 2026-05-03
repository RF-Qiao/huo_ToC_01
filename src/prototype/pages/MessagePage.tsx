import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  Award,
  ChevronRight,
  MapPin,
  Menu,
  MessageCircle,
  Palette,
  Search,
  Sparkles,
  Star,
  User as UserIcon,
} from 'lucide-react';

export function MessagePage() {
  const [activeSubTab, setActiveSubTab] = useState('聊天');
  const [activeSidebar, setActiveSidebar] = useState('景区的人');

  const renderDiscoveryContent = () => (
    <div className="flex bg-white rounded-[2rem] overflow-hidden border border-black/5 shadow-sm h-[65vh]">
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

      <div className="flex-1 overflow-y-auto bg-white p-4 no-scrollbar">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-black text-on-surface">{activeSidebar}</h3>
          <button className="text-[10px] bg-[#FFF9E6] text-[#7C5800] px-3 py-1 rounded-full font-black border border-[#FFEA80]/30 active:scale-95">我的名片</button>
        </div>

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

        <div className="space-y-4">
          {[
            { name: '阿梅', age: 22, lv: 66, dist: '500米内', gender: '♀', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amy' },
            { name: '晚风吹过', age: 24, lv: 60, dist: '500米内', gender: '♀', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Wind' },
            { name: '周琳琳', age: 25, lv: 15, dist: '500米内', gender: '♀', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lin' },
            { name: '小小', age: 21, lv: 66, dist: '500米内', gender: '♀', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tiny' },
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
                    {[1, 2, 3, 4].map(s => <Star key={s} size={8} fill="currentColor" stroke="none" />)}
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
              { name: '林舒涵', msg: '你看这件扎染工艺品是不是很有特色？', time: '周三', count: 0, avatar: 'user2' },
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
}
