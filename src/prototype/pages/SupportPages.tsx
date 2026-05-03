import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowLeft,
  BellRing,
  Camera,
  Check,
  CreditCard,
  HelpCircle,
  Image as ImageIcon,
  Info,
  MapPin,
  ShieldCheck,
  Smartphone,
  Ticket,
  Watch,
} from 'lucide-react';

type SimplePageProps = {
  onClose: () => void;
};

export function HelpCenterPage({ onClose }: SimplePageProps) {
  return (
    <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="fixed inset-0 z-[1100] bg-[#FBF9F8] overflow-y-auto flex flex-col">
      <header className="h-16 px-6 bg-white border-b border-black/5 flex items-center justify-between shrink-0 sticky top-0 z-10">
        <button onClick={onClose} className="p-2 -ml-2 text-[#38100E]"><ArrowLeft size={24} strokeWidth={3} /></button>
        <h2 className="text-lg font-black text-[#38100E]">帮助中心</h2>
        <div className="w-10" />
      </header>

      <div className="p-6 space-y-8">
        <div className="relative">
          <HelpCircle className="absolute left-5 top-1/2 -translate-y-1/2 text-[#8C6A58]/40" size={18} />
          <input type="text" placeholder="搜索购票、核销、手环、任务问题" className="w-full h-14 bg-white rounded-2xl pl-12 pr-6 text-sm font-bold text-[#38100E] border border-black/5 shadow-sm outline-none focus:border-[#9C1B1F]/30 transition-all" />
        </div>

        <div className="grid grid-cols-4 gap-4">
          {[
            { label: '购票问题', icon: <CreditCard size={20} /> },
            { label: '核销问题', icon: <Ticket size={20} /> },
            { label: '任务打卡', icon: <MapPin size={20} /> },
            { label: '手环绑定', icon: <Watch size={20} /> },
          ].map((item, i) => (
            <button key={i} className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-black/5 flex items-center justify-center text-[#9C1B1F]">{item.icon}</div>
              <span className="text-[10px] font-black text-[#38100E]">{item.label}</span>
            </button>
          ))}
        </div>

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
              { q: '订单可以退款吗？', a: '未核销订单可按购票规则申请退款。' },
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
}

export function FeedbackPage({ onClose }: SimplePageProps) {
  const [selectedType, setSelectedType] = useState('体验问题');
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="fixed inset-0 z-[1100] bg-[#FBF9F8] overflow-y-auto flex flex-col">
      <header className="h-16 px-6 bg-white border-b border-black/5 flex items-center justify-between shrink-0 sticky top-0 z-10">
        <button onClick={onClose} className="p-2 -ml-2 text-[#38100E]"><ArrowLeft size={24} strokeWidth={3} /></button>
        <h2 className="text-lg font-black text-[#38100E]">意见反馈</h2>
        <div className="w-10" />
      </header>

      <div className="flex-1 p-6 space-y-8">
        <section className="space-y-4">
          <h3 className="text-sm font-black text-[#38100E]">反馈类型</h3>
          <div className="flex flex-wrap gap-2">
            {['体验问题', '购票问题', '定位问题', '手环问题', '内容建议', '投诉反馈'].map((tag) => (
              <button key={tag} onClick={() => setSelectedType(tag)} className={`px-4 h-9 rounded-full text-xs font-black transition-all ${selectedType === tag ? 'bg-[#9C1B1F] text-[#FFD36B]' : 'bg-white text-[#8C6A58]/40 border border-black/5'}`}>
                {tag}
              </button>
            ))}
          </div>
        </section>

        <div className="bg-white rounded-3xl p-5 border border-black/5 shadow-sm">
          <textarea placeholder="请描述你遇到的问题或建议，我们会认真查看。" className="w-full h-32 text-sm font-bold text-[#38100E] outline-none resize-none placeholder:text-[#8C6A58]/40" />
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

        <section className="space-y-3">
          <h3 className="text-sm font-black text-[#38100E]">联系方式</h3>
          <input type="text" defaultValue="138****8888" className="w-full h-14 bg-white rounded-2xl px-6 text-sm font-bold text-[#38100E] border border-black/5 shadow-sm" />
        </section>
      </div>

      <footer className="p-6 pb-12 bg-white/80 backdrop-blur-md">
        <button onClick={() => setShowSuccess(true)} className="w-full h-14 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm shadow-xl active:scale-95 transition-all">
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
              <button onClick={() => { setShowSuccess(false); onClose(); }} className="mt-8 w-full h-14 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm active:scale-95 transition-all shadow-xl">
                我知道了
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function AgreementPage({ onClose }: SimplePageProps) {
  return (
    <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="fixed inset-0 z-[1100] bg-[#FBF9F8] overflow-y-auto flex flex-col">
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
            { title: '协议更新', content: '我方有权根据运营需要更新协议，更新后重新启动小程序将弹窗提示。' },
          ].map((item, i) => (
            <div key={i} className="space-y-2">
              <h3 className="text-sm font-black text-[#38100E] border-l-4 border-[#9C1B1F] pl-3 leading-none py-0.5">{item.title}</h3>
              <p className="text-xs text-[#8C6A58] leading-relaxed font-bold opacity-80">{item.content}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="p-6 pb-12">
        <button onClick={onClose} className="w-full h-14 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm active:scale-95 transition-all shadow-xl">
          我已阅读并同意
        </button>
      </footer>
    </motion.div>
  );
}

export function PrivacyPolicyPage({ onClose }: SimplePageProps) {
  return (
    <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="fixed inset-0 z-[1100] bg-[#FBF9F8] overflow-y-auto flex flex-col">
      <header className="h-16 px-6 bg-white border-b border-black/5 flex items-center justify-between shrink-0 sticky top-0 z-10">
        <button onClick={onClose} className="p-2 -ml-2 text-[#38100E]"><ArrowLeft size={24} strokeWidth={3} /></button>
        <h2 className="text-lg font-black text-[#38100E]">隐私政策</h2>
        <div className="w-10" />
      </header>

      <div className="flex-1 p-8 pb-12 space-y-8 bg-white m-4 rounded-3xl border border-black/5 shadow-sm">
        <div className="p-5 bg-red-50 rounded-2xl border border-red-100 flex gap-3">
          <ShieldCheck size={20} className="text-red-500 shrink-0" />
          <p className="text-[11px] font-bold text-red-800 leading-relaxed">特别提醒：心率、血氧和心流值仅用于体验展示和个人回顾，不作为医疗、健康或心理诊断依据。</p>
        </div>

        <div className="space-y-6">
          {[
            { title: '我们收集的信息', content: '包含手机号、地理位置（用于打卡）、蓝牙连接状态、运动步数及体验过程中授权采集的心率血氧数据。' },
            { title: '定位权限说明', content: '仅在体验运行及任务打卡时获取经纬度坐标，用于验证任务点达成状态。' },
            { title: '蓝牙与手环数据', content: '连接手环需开启蓝牙，手环采集的生理波动仅用于计算“心流值”这一娱乐数值，不会用于商业广告。' },
            { title: '信息存储与安全', content: '所有数据加密存储于云端，体验结束后30天可申请彻底注销个人历史数据。' },
            { title: '未成年人保护', content: '未满14周岁用户需由监护人授权购票并开启体验模式。' },
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
}

export function PermissionsListPage({ onClose }: SimplePageProps) {
  return (
    <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="fixed inset-0 z-[1100] bg-[#FBF9F8] overflow-y-auto flex flex-col">
      <header className="h-16 px-6 bg-white border-b border-black/5 flex items-center justify-between shrink-0 sticky top-0 z-10">
        <button onClick={onClose} className="p-2 -ml-2 text-[#38100E]"><ArrowLeft size={24} strokeWidth={3} /></button>
        <h2 className="text-lg font-black text-[#38100E]">权限说明</h2>
        <div className="w-10" />
      </header>

      <div className="p-6 space-y-4">
        {[
          { title: '定位权限', desc: '用于判断是否到达任务点，完成LBS打卡。', icon: <MapPin size={20} /> },
          { title: '蓝牙权限', desc: '用于连接现场体验手环。', icon: <Watch size={20} /> },
          { title: '相机权限', desc: '用于拍照提交任务凭证。', icon: <Camera size={20} /> },
          { title: '相册权限', desc: '用于上传任务图片或反馈截图。', icon: <ImageIcon size={20} /> },
          { title: '通知权限', desc: '用于接收订单、任务、队伍集合提醒。', icon: <BellRing size={20} /> },
          { title: '手机号', desc: '用于登录、订单通知和客服联系。', icon: <Smartphone size={20} /> },
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-[28px] p-5 shadow-sm border border-black/5 flex gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FBF9F8] flex items-center justify-center text-[#9C1B1F] shrink-0 border border-black/5">{item.icon}</div>
            <div className="flex-1">
              <h4 className="text-sm font-black text-[#38100E]">{item.title}</h4>
              <p className="mt-1 text-[11px] font-bold text-[#8C6A58]/60 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}

        <div className="p-6 mt-6 bg-[#F5DDA2]/10 rounded-3xl border border-[#F5DDA2]/30 flex gap-3">
          <Info size={18} className="text-[#9B1D1D] shrink-0 mt-0.5" />
          <p className="text-[10px] font-bold text-[#8C6A58] leading-relaxed">你可以随时在手机系统设置中关闭相关权限。关闭部分权限可能影响任务打卡、手环连接或消息提醒。</p>
        </div>
      </div>
    </motion.div>
  );
}
