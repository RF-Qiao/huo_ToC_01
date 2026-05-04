import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Award,
  ArrowLeft,
  Check,
  CheckCircle2,
  Coins,
  Compass,
  Flame,
  Lock,
  MapPin,
  Menu,
  Package,
  Plus,
  QrCode,
  ShoppingBag,
  Sparkles,
  Swords,
  Trophy,
  X,
  Zap,
  ChevronRight,
  Minus,
} from 'lucide-react';

export type MallProduct = {
  id: string;
  name: string;
  price: number;
  unlocked: boolean;
  tag: string;
  desc: string;
  category: string;
  image: string;
};

type MallHomePageProps = {
  onClose: () => void;
  onSelectProduct: (product: MallProduct) => void;
  onViewOrders: () => void;
};

export function MallHomePage({ onClose, onSelectProduct, onViewOrders }: MallHomePageProps) {
  const [activeCategory, setActiveCategory] = useState('全部');

  const categories = [
    { id: 'all', name: '全部', icon: <Menu size={14} /> },
    { id: 'medal', name: '英雄勋章', icon: <Award size={14} /> },
    { id: 'memento', name: '完赛纪念', icon: <Trophy size={14} /> },
    { id: 'city', name: '城市限定', icon: <MapPin size={14} /> },
    { id: 'gear', name: '英雄装备', icon: <Zap size={14} /> },
    { id: 'hidden', name: '隐藏路线', icon: <Compass size={14} /> },
  ];

  const products: MallProduct[] = [
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
    },
  ];

  const filteredProducts = activeCategory === '全部' ? products : products.filter((p) => p.category === activeCategory);

  return (
    <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="fixed inset-0 z-[700] bg-[#FBF9F8] overflow-y-auto flex flex-col">
      <header className="h-16 px-6 bg-white border-b border-black/5 flex items-center justify-between shrink-0 sticky top-0 z-20">
        <button onClick={onClose} className="p-2 -ml-2 text-[#38100E]"><ArrowLeft size={24} strokeWidth={3} /></button>
        <h2 className="text-lg font-black text-[#38100E]">火种商城</h2>
        <button onClick={onViewOrders} className="p-2 -mr-2 text-[#38100E]"><ShoppingBag size={22} /></button>
      </header>

      <div className="flex-1 pb-12">
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
                <p className="text-[11px] font-medium text-[#FFD36B]/60 leading-relaxed">“完成英雄体验，可解锁更多限定纪念。”</p>
              </div>
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/5">
                <Sparkles size={24} className="text-[#FFD36B]" />
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 mt-6">
          <div className="bg-gradient-to-br from-[#9C1B1F] to-[#711619] rounded-[32px] p-6 text-white relative overflow-hidden shadow-lg">
            <div className="absolute right-0 bottom-0 w-40 h-40 bg-[#FFD36B]/10 rounded-full -mr-16 -mb-16 blur-2xl" />
            <h3 className="text-xl font-black mb-1">把你的英雄时刻带回家</h3>
            <p className="text-xs text-white/60 font-medium leading-relaxed max-w-[200px]">完成体验后解锁专属勋章、城市限定与英雄纪念。</p>
            <button className="mt-6 h-10 px-6 rounded-xl bg-[#FFD36B] text-[#38100E] font-black text-xs shadow-lg active:scale-95 transition-all">查看已解锁</button>
          </div>
        </section>

        <div className="mt-8 px-6 overflow-x-auto no-scrollbar flex gap-4 pb-2">
          {categories.map((cat) => (
            <button key={cat.id} onClick={() => setActiveCategory(cat.name)} className={`shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-black transition-all ${activeCategory === cat.name ? 'bg-[#38100E] text-[#FFD36B] shadow-xl' : 'bg-white border border-black/5 text-[#8C6A58]'}`}>
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        <section className="mt-8 px-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-4 rounded-full bg-[#9C1B1F]" />
              <h3 className="text-lg font-black text-[#38100E]">你已解锁</h3>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {products.filter((p) => p.unlocked).map((product) => (
              <motion.div key={product.id} whileTap={{ scale: 0.98 }} onClick={() => onSelectProduct(product)} className="bg-white rounded-[32px] overflow-hidden border border-black/5 shadow-sm">
                <div className="aspect-square bg-gray-50 relative">
                  <img src={product.image} className="w-full h-full object-cover" alt={product.name} />
                  <div className="absolute top-3 left-3 px-2 py-1 bg-green-500 text-white text-[9px] font-black rounded-lg shadow-lg">{product.tag}</div>
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

        <section className="mt-10 px-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-4 rounded-full bg-[#8C6A58]/20" />
              <h3 className="text-lg font-black text-[#38100E]">继续体验可解锁</h3>
            </div>
          </div>
          <div className="space-y-4">
            {products.filter((p) => !p.unlocked).map((product) => (
              <motion.div key={product.id} whileTap={{ scale: 0.98 }} onClick={() => onSelectProduct(product)} className="bg-white rounded-[32px] p-4 border border-black/5 flex gap-4 grayscale opacity-60">
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

        <section className="mt-12 px-6">
          <div className="bg-[#F5DDA2]/20 rounded-[40px] p-8 text-center border-2 border-dashed border-[#F5DDA2]">
            <div className="mx-auto w-12 h-12 rounded-full bg-[#9C1B1F] text-[#FFD36B] flex items-center justify-center mb-4 shadow-lg shadow-[#9C171D]/20">
              <Swords size={24} />
            </div>
            <h3 className="text-lg font-black text-[#38100E]">想解锁更多？</h3>
            <p className="mt-2 text-xs text-[#8C6A58] font-bold leading-relaxed mb-6">还有更多英雄史诗等你开启，<br />每个挑战完成后都有专属惊喜。</p>
            <div className="flex gap-3">
              <button className="flex-1 h-12 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-[11px] shadow-xl shadow-[#9C171D]/10">去体验其他英雄</button>
              <button className="flex-1 h-12 rounded-2xl bg-white border border-black/5 text-[#38100E] font-black text-[11px]">查看今日可玩</button>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}

type MallProductDetailPageProps = {
  product: MallProduct | null;
  onClose: () => void;
  onBuy: () => void;
};

export function MallProductDetailPage({ product, onClose, onBuy }: MallProductDetailPageProps) {
  const [spec, setSpec] = useState('普通版');
  const [count, setCount] = useState(1);

  if (!product) return null;

  return (
    <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} className="fixed inset-0 z-[800] bg-[#FBF9F8] overflow-y-auto flex flex-col">
      <header className="h-16 px-6 bg-white/80 backdrop-blur-md border-b border-black/5 flex items-center justify-between shrink-0 sticky top-0 z-20">
        <button onClick={onClose} className="p-2 -ml-2 text-[#38100E]"><ArrowLeft size={24} strokeWidth={3} /></button>
        <h2 className="text-lg font-black text-[#38100E]">商品详情</h2>
        <button className="p-2 -mr-2 text-[#38100E]"><Share2 size={22} /></button>
      </header>

      <div className="flex-1 pb-32">
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

        <section className="px-6 py-8 bg-white rounded-t-[48px] -mt-12 relative z-10 shadow-[0_-20px_40px_rgba(0,0,0,0.05)]">
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1">
              <h1 className="text-2xl font-black text-[#38100E] leading-tight">{product.name}</h1>
              <p className="mt-2 text-sm font-bold text-[#8C6A58]/60 underline decoration-[#9C1B1F]/20 underline-offset-4">{product.desc}</p>
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
            <span className={`px-4 py-1.5 rounded-xl border-2 text-[10px] font-black ${product.unlocked ? 'border-green-500/20 bg-green-50 text-green-600' : 'border-gray-100 bg-gray-50 text-gray-400'}`}>{product.tag}</span>
            <span className="px-4 py-1.5 rounded-xl border-2 border-[#9C1B1F]/10 bg-[#9C1B1F]/5 text-[10px] font-black text-[#9C1B1F]">实体纪念</span>
            <span className="px-4 py-1.5 rounded-xl border-2 border-black/5 bg-gray-50 text-[10px] font-black text-[#38100E]">英雄勋章</span>
          </div>

          <div className="h-[1px] bg-black/5 my-8" />

          <div className={`p-6 rounded-[32px] ${product.unlocked ? 'bg-green-50 border border-green-100' : 'bg-[#9C1B1F]/5 border border-[#9C1B1F]/10'}`}>
            <div className="flex items-center gap-2 mb-3">
              {product.unlocked ? <CheckCircle2 size={18} className="text-green-600" /> : <Lock size={18} className="text-[#9C1B1F]" />}
              <h3 className={`text-sm font-black ${product.unlocked ? 'text-green-800' : 'text-[#9C1B1F]'}`}>解锁条件</h3>
            </div>
            {product.unlocked ? (
              <p className="text-xs font-bold text-green-700/60 leading-relaxed">你已完成{product.name.includes('霍去病') ? '霍去病' : '英雄'}英雄体验，可购买该纪念品。</p>
            ) : (
              <div className="space-y-4">
                <p className="text-xs font-bold text-[#9C1B1F]/60 leading-relaxed">完成{product.desc.replace('完成', '')}后即可解锁购买。</p>
                <button className="w-full h-11 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-xs shadow-lg shadow-[#9C171D]/10">去完成体验</button>
              </div>
            )}
          </div>

          <div className="mt-10 space-y-4">
            <h3 className="text-sm font-black text-[#38100E]">商品说明</h3>
            <div className="space-y-3">
              {['红金金属质感纪念勋章；', '适合收藏、佩戴或作为完赛纪念；', '与用户获得的数字勋章对应；', '限量纪念版本。'].map((text, i) => (
                <div key={i} className="flex gap-3 items-start text-xs text-[#8C6A58] leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#9C1B1F]/20 mt-1.5" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div className="h-[1px] bg-black/5 my-10" />

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-sm font-black text-[#38100E]">规格</h3>
              <div className="grid grid-cols-2 gap-3">
                {['普通版', '收藏版'].map((s) => (
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
                <button onClick={() => setCount(Math.max(1, count - 1))} className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-[#9C1B1F] border border-black/5 active:scale-90">
                  <Minus size={18} strokeWidth={3} />
                </button>
                <span className="text-lg font-black w-8 text-center">{count}</span>
                <button onClick={() => setCount(count + 1)} className="w-8 h-8 rounded-xl bg-[#9C1B1F] flex items-center justify-center text-white active:scale-90 shadow-md">
                  <Plus size={18} strokeWidth={3} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 h-24 bg-white/95 backdrop-blur-xl border-t border-black/5 px-6 py-4 flex items-center justify-between z-30">
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-black text-[#9C1B1F]">¥ {product.price * count}</span>
          </div>
          <span className="text-[10px] font-bold text-[#8C6A58]/40 mt-1 uppercase tracking-tight">Postage Included</span>
        </div>
        {product.unlocked ? (
          <button onClick={onBuy} className="h-14 px-12 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm shadow-xl shadow-[#9C171D]/20 active:scale-95 transition-all flex items-center gap-2">
            <ShoppingBag size={18} />
            立即购买
          </button>
        ) : (
          <button className="h-14 px-12 rounded-2xl bg-gray-100 text-gray-400 font-black text-sm cursor-not-allowed flex items-center gap-2">
            <Lock size={18} />
            去解锁
          </button>
        )}
      </footer>
    </motion.div>
  );
}

type MallConfirmOrderPageProps = {
  product: MallProduct | null;
  onClose: () => void;
  onPay: () => void;
};

export function MallConfirmOrderPage({ product, onClose, onPay }: MallConfirmOrderPageProps) {
  if (!product) return null;

  return (
    <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="fixed inset-0 z-[900] bg-[#FBF9F8] overflow-y-auto flex flex-col">
      <header className="h-16 px-6 bg-white border-b border-black/5 flex items-center justify-between shrink-0 sticky top-0 z-20">
        <button onClick={onClose} className="p-2 -ml-2 text-[#38100E]"><ArrowLeft size={24} strokeWidth={3} /></button>
        <h2 className="text-lg font-black text-[#38100E]">确认订单</h2>
        <div className="w-10" />
      </header>

      <div className="flex-1 px-6 pt-6 pb-32 space-y-6">
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

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-1 h-3 bg-[#9C1B1F] rounded-full" />
            <h3 className="text-[10px] font-black text-[#8C6A58]/40 uppercase tracking-widest">支付方式</h3>
          </div>
          <div className="bg-white rounded-[32px] p-6 border border-[#9C1B1F]/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#07C160] flex items-center justify-center text-white"><Check size={20} /></div>
              <span className="text-sm font-black text-[#38100E]">微信支付</span>
            </div>
            <div className="w-5 h-5 rounded-full border-2 border-[#9C1B1F] flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#9C1B1F]" />
            </div>
          </div>
        </section>

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
        <button onClick={onPay} className="h-14 px-12 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm shadow-xl shadow-[#9C171D]/20 active:scale-95 transition-all text-sm uppercase tracking-wider">
          提交订单
        </button>
      </footer>
    </motion.div>
  );
}

type MallPaymentSuccessPageProps = {
  onClose: () => void;
  onViewOrders: () => void;
};

export function MallPaymentSuccessPage({ onClose, onViewOrders }: MallPaymentSuccessPageProps) {
  return (
    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="fixed inset-0 z-[1000] bg-[#9C1B1F] overflow-y-auto flex flex-col">
      <header className="h-16 px-6 flex items-center justify-between text-[#FFD36B] shrink-0">
        <button onClick={onClose}><X size={24} /></button>
        <span className="font-black">支付成功</span>
        <div className="w-6" />
      </header>

      <div className="flex-1 flex flex-col items-center px-8 pt-12">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="w-28 h-28 rounded-[40px] bg-white text-[#9C1B1F] flex items-center justify-center shadow-2xl mb-8 relative">
          <Check size={56} strokeWidth={4} />
          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-[#FFD36B] text-[#9C1B1F] flex items-center justify-center shadow-lg">
            <Flame size={20} fill="currentColor" />
          </motion.div>
        </motion.div>

        <h2 className="text-3xl font-black text-[#FFD36B]">支付成功</h2>
        <p className="mt-4 text-[#FFD36B]/60 text-center text-sm font-medium leading-relaxed max-w-[240px]">你的英雄纪念品已成功下单，<br />我们将尽快为你打包发出。</p>

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
        <button onClick={onViewOrders} className="h-16 rounded-[24px] bg-[#FFD36B] text-[#38100E] font-black text-sm shadow-2xl active:scale-95 transition-all flex items-center justify-center gap-2">
          <Package size={20} />
          查看商城订单
        </button>
        <button onClick={onClose} className="h-16 rounded-[24px] border-2 border-white/10 text-white font-black text-sm active:bg-white/5 transition-all">
          返回火种商城
        </button>
      </footer>
    </motion.div>
  );
}

type MallOrdersPageProps = {
  onClose: () => void;
};

export function MallOrdersPage({ onClose }: MallOrdersPageProps) {
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
    },
  ];

  return (
    <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="fixed inset-0 z-[1100] bg-[#FBF9F8] overflow-y-auto flex flex-col">
      <header className="h-16 px-6 bg-white border-b border-black/5 flex items-center justify-between shrink-0 sticky top-0 z-20">
        <button onClick={onClose} className="p-2 -ml-2 text-[#38100E]"><ArrowLeft size={24} strokeWidth={3} /></button>
        <h2 className="text-lg font-black text-[#38100E]">商城订单</h2>
        <div className="w-10" />
      </header>

      <div className="bg-white px-6 shrink-0 sticky top-16 z-20 overflow-x-auto no-scrollbar flex gap-8 pb-3 pt-4 border-b border-black/5">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`shrink-0 text-sm font-black transition-all relative ${activeTab === tab ? 'text-[#9C1B1F]' : 'text-[#8C6A58]/40'}`}
          >
            {tab}
            {activeTab === tab && <motion.div layoutId="orderTab" className="absolute -bottom-3 left-0 right-0 h-1 bg-[#9C1B1F] rounded-full" />}
          </button>
        ))}
      </div>

      <div className="flex-1 p-6 space-y-6 pb-20">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-[32px] p-6 border border-black/5 shadow-sm space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-black text-[#8C6A58]/20 uppercase tracking-widest">{order.date}</span>
              <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase ${order.status === '待发货' ? 'bg-[#9C1B1F]/5 text-[#9C1B1F]' : 'bg-green-50 text-green-600'}`}>{order.status}</span>
            </div>

            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-2xl bg-gray-50 overflow-hidden shrink-0 shadow-inner">
                <img src={order.image} className="w-full h-full object-cover" alt="product" />
              </div>
              <div className="flex-1 flex flex-col justify-between py-1">
                <h4 className="text-sm font-black text-[#38100E] leading-tight line-clamp-2">{order.product}</h4>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black text-[#9C1B1F]">¥{order.price}</span>
                  <span className="text-[10px] font-bold text-[#8C6A58]/40">x1</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
