import { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  Award,
  CheckCircle2,
  MessageCircle,
  Minus,
  MoreHorizontal,
  Plus,
  Watch,
  Zap,
} from 'lucide-react';
import { ProtoIcon } from '../../components/prototype';
import { mvpApi } from '../../services';
import type { BookingDateOption, TicketOrder, TicketType } from '../../types';

type TicketBookingViewProps = {
  onClose: () => void;
  onSuccess: (order?: TicketOrder) => void;
  routeId?: string;
  userId?: string;
};

const defaultRouteId = 'route_fenglangjuxu';
const defaultUserId = 'user_001';

const formatPrice = (priceCents: number) => Math.round(priceCents / 100);

export function TicketBookingView({
  onClose,
  onSuccess,
  routeId = defaultRouteId,
  userId = defaultUserId,
}: TicketBookingViewProps) {
  const [bookingDates, setBookingDates] = useState<BookingDateOption[]>([]);
  const [ticketTypes, setTicketTypes] = useState<TicketType[]>([]);
  const [selectedDateId, setSelectedDateId] = useState('');
  const [selectedTicketId, setSelectedTicketId] = useState('');
  const [count, setCount] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    let mounted = true;

    Promise.all([mvpApi.listBookingDates(routeId), mvpApi.listTicketTypes(routeId)]).then(([dates, tickets]) => {
      if (!mounted) return;
      setBookingDates(dates);
      setTicketTypes(tickets);
      setSelectedDateId(dates[0]?.id ?? '');
      setSelectedTicketId(tickets[0]?.id ?? '');
    });

    return () => {
      mounted = false;
    };
  }, [routeId]);

  const selectedTicket = useMemo(
    () => ticketTypes.find((ticket) => ticket.id === selectedTicketId) ?? ticketTypes[0],
    [selectedTicketId, ticketTypes],
  );

  const totalPrice = selectedTicket ? formatPrice(selectedTicket.priceCents) * count : 0;

  const handleTicketSelect = (ticket: TicketType) => {
    setSelectedTicketId(ticket.id);
    setCount((current) => Math.max(ticket.minQuantity ?? 1, current));
  };

  const handleSubmit = async () => {
    if (!selectedDateId || !selectedTicket) return;
    setIsSubmitting(true);
    const order = await mvpApi.createTicketOrder({
      userId,
      routeId,
      bookingDateId: selectedDateId,
      ticketTypeId: selectedTicket.id,
      quantity: count,
    });
    setIsSubmitting(false);
    onSuccess(order);
  };

  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-[300] bg-[#FBF9F8] overflow-y-auto"
    >
      <header className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-black/5 px-6 flex items-center justify-between z-10">
        <button onClick={onClose} className="p-2 -ml-2 text-[#38100E]">
          <ArrowLeft size={24} strokeWidth={3} />
        </button>
        <h2 className="text-lg font-black text-[#38100E]">选择体验票</h2>
        <button className="p-2 -mr-2 text-[#8C6A58]/60">
          <MessageCircle size={22} />
        </button>
      </header>

      <div className="pt-20 px-6 pb-32 space-y-8">
        <div className="bg-white rounded-[32px] p-5 border border-black/5 shadow-sm flex gap-4 items-center">
          <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gray-100 shrink-0 shadow-inner">
            <img
              src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=2670&auto=format&fit=crop"
              className="w-full h-full object-cover"
              alt="Huo Qubing"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-black text-[#38100E]">霍去病英雄体验</h3>
              <span className="px-1.5 py-0.5 rounded-md bg-[#FFB800] text-black text-[9px] font-black">今日可玩</span>
            </div>
            <p className="text-[10px] text-[#8C6A58] mt-1 font-bold">封狼居胥挑战线 · 90分钟 · 6个任务</p>
            <div className="flex gap-1.5 mt-2">
              <span className="px-2 py-0.5 rounded-full bg-[#F5DDA2]/30 text-[#8C6A58] text-[9px] font-bold">蓝色港湾</span>
              <span className="px-2 py-0.5 rounded-full bg-[#9C1B1F]/10 text-[#9C1B1F] text-[9px] font-bold">史诗难度</span>
            </div>
          </div>
        </div>

        <section>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-4 rounded-full bg-[#9C1B1F]" />
            <h2 className="text-lg font-black text-[#38100E]">选择游玩日期</h2>
          </div>
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
            {bookingDates.map((date) => (
              <button
                key={date.id}
                disabled={date.status !== 'available'}
                onClick={() => setSelectedDateId(date.id)}
                className={`shrink-0 w-24 h-16 rounded-2xl flex flex-col items-center justify-center border-2 transition-all ${
                  selectedDateId === date.id ? 'border-[#9C1B1F] bg-[#9C1B1F]/5' : 'border-black/5 bg-white'
                } ${date.status !== 'available' ? 'opacity-40' : ''}`}
              >
                <span className={`text-xs font-bold ${selectedDateId === date.id ? 'text-[#9C1B1F]' : 'text-[#8C6A58]'}`}>
                  {date.label}
                </span>
                <span className={`text-[10px] font-black mt-1 ${selectedDateId === date.id ? 'text-[#9C1B1F]/60' : 'text-[#8C6A58]/30'}`}>
                  {date.status === 'available' ? '可预约' : '不可约'}
                </span>
              </button>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-4 rounded-full bg-[#9C1B1F]" />
            <h2 className="text-lg font-black text-[#38100E]">选择票种</h2>
          </div>
          <div className="space-y-4">
            {ticketTypes.map((ticket) => (
              <button
                key={ticket.id}
                onClick={() => handleTicketSelect(ticket)}
                className={`w-full p-5 rounded-[28px] border-2 text-left relative transition-all ${
                  selectedTicketId === ticket.id ? 'border-[#9C1B1F] bg-white shadow-lg shadow-[#9C171D]/5' : 'border-black/5 bg-[#F5DDA2]/5'
                }`}
              >
                {ticket.tag && (
                  <span className="absolute -top-3 right-6 px-3 py-1 bg-[#9C1B1F] text-[#FFD36B] text-[10px] font-black rounded-full border-2 border-[#FBF9F8]">
                    {ticket.tag}
                  </span>
                )}
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className={`font-black ${selectedTicketId === ticket.id ? 'text-[#9C1B1F]' : 'text-[#38100E]'}`}>{ticket.name}</h4>
                    <p className={`text-[11px] mt-1 pr-12 leading-relaxed font-bold ${selectedTicketId === ticket.id ? 'text-[#8C6A58]' : 'text-[#8C6A58]/40'}`}>
                      {ticket.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-baseline gap-0.5 justify-end">
                      <span className="text-xs font-black text-[#9C1B1F]">¥</span>
                      <span className="text-xl font-black text-[#9C1B1F]">{formatPrice(ticket.priceCents)}</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-4 rounded-full bg-[#9C1B1F]" />
            <h2 className="text-lg font-black text-[#38100E]">购买数量</h2>
          </div>
          <div className="flex items-center gap-4 bg-white border border-black/5 rounded-2xl p-2 px-3">
            <button
              onClick={() => setCount(Math.max(selectedTicket?.minQuantity ?? 1, count - 1))}
              className="w-8 h-8 rounded-xl bg-[#FBF9F8] flex items-center justify-center text-[#9C1B1F] active:scale-90"
            >
              <Minus size={18} strokeWidth={3} />
            </button>
            <span className="text-lg font-black w-6 text-center">{count}</span>
            <button
              onClick={() => setCount(count + 1)}
              className="w-8 h-8 rounded-xl bg-[#9C1B1F] flex items-center justify-center text-white active:scale-90"
            >
              <Plus size={18} strokeWidth={3} />
            </button>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-4 rounded-full bg-[#9C1B1F]" />
            <h2 className="text-lg font-black text-[#38100E]">购票包含</h2>
          </div>
          <div className="grid grid-cols-4 gap-y-6 gap-x-4">
            {[
              { icon: <ProtoIcon name="crown" size={20} />, label: '剧情体验' },
              { icon: <ProtoIcon name="mapPin" size={20} />, label: '任务打卡' },
              { icon: <ProtoIcon name="shield" size={20} />, label: '安全协助' },
              { icon: <ProtoIcon name="flame" size={20} />, label: '火种奖励' },
              { icon: <Award size={20} />, label: '实物勋章' },
              { icon: <Zap size={20} />, label: '现场指导' },
              { icon: <Watch size={20} />, label: '设备支持' },
              { icon: <MoreHorizontal size={20} />, label: '更多惊喜' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-2xl bg-[#F5DDA2]/20 flex items-center justify-center text-[#9C1B1F]">
                  {item.icon}
                </div>
                <span className="text-[9px] font-bold text-[#8C6A58]">{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-4 rounded-full bg-[#9C1B1F]" />
            <h2 className="text-lg font-black text-[#38100E]">使用须知</h2>
          </div>
          <div className="bg-white rounded-3xl p-6 border border-black/5 space-y-4">
            {['请在购买日期当天到现场核销；', '核销后即可开始英雄体验；', '体验过程中需要开启定位；', '未核销订单支持按规则退款。'].map((text, i) => (
              <div key={i} className="flex gap-3 items-start text-[11px] text-[#8C6A58] leading-relaxed">
                <CheckCircle2 size={14} className="text-[#9C1B1F] shrink-0 mt-0.5" />
                {text}
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 h-24 bg-white/95 backdrop-blur-xl border-t border-[#F5DDA2] px-6 py-4 flex items-center justify-between z-20">
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-black text-[#9C1B1F]">¥ {totalPrice}</span>
            <span className="text-[10px] font-bold text-[#8C6A58]/40 border-l border-black/10 pl-2 ml-1">共 {count} 件商品</span>
          </div>
          <span className="text-[9px] font-bold text-[#8C6A58]/50 mt-1 uppercase tracking-tight">Payment Agreement Included</span>
        </div>
        <button
          onClick={handleSubmit}
          disabled={isSubmitting || !selectedTicket || !selectedDateId}
          className="h-12 px-12 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black shadow-xl shadow-[#9C171D]/20 active:scale-95 transition-all text-sm uppercase tracking-wider disabled:opacity-50"
        >
          {isSubmitting ? '提交中' : '立即支付'}
        </button>
      </footer>
    </motion.div>
  );
}
