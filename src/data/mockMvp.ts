import type {
  BookingDateOption,
  ExperienceSession,
  Hero,
  Medal,
  Route,
  Scene,
  Task,
  TicketOrder,
  TicketType,
  User,
} from '../types/domain';

export const mockUser: User = {
  id: 'user_001',
  nickname: '火种游客001',
  phoneMasked: '138****8888',
  avatarUrl: 'https://i.pravatar.cc/200?u=myprofile',
};

export const mockScenes: Scene[] = [
  {
    id: 'scene_blue_harbor',
    name: '蓝色港湾 · 黄火火体验点',
    city: '北京',
    address: '北京市朝阳区蓝色港湾商圈 A 区',
    status: 'open',
  },
];

export const mockHeroes: Hero[] = [
  {
    id: 'hero_huo_qubing',
    name: '霍去病',
    subtitle: '少年将军 · 封狼居胥',
    category: '少年英雄',
    status: 'available',
    imageUrl: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=2670&auto=format&fit=crop',
    story: '你将扮演少年将军霍去病，从誓师出征到漠北追击，在真实场景中完成剧情挑战，穿越千年风沙，书写属于你的英雄史诗，最终解锁专属火种勋章。',
  },
];

export const mockRoutes: Route[] = [
  {
    id: 'route_fenglangjuxu',
    heroId: 'hero_huo_qubing',
    sceneId: 'scene_blue_harbor',
    name: '封狼居胥挑战线',
    durationMinutes: 90,
    distanceMeters: 1800,
    difficulty: 'medium',
    audienceTags: ['朋友组队', '亲子家庭', '团建活动', '历史文化爱好者', '首次体验推荐'],
  },
];

export const mockTasks: Task[] = [
  {
    id: 'task_001',
    routeId: 'route_fenglangjuxu',
    title: '誓师出征',
    stage: 1,
    description: '到达集合点，完成出征任务。',
    checkInRadiusMeters: 30,
    status: 'completed',
  },
  {
    id: 'task_002',
    routeId: 'route_fenglangjuxu',
    title: '漠北追击',
    stage: 2,
    description: '前往战鼓点，完成现场打卡与照片提交。',
    checkInRadiusMeters: 30,
    status: 'active',
  },
  {
    id: 'task_003',
    routeId: 'route_fenglangjuxu',
    title: '战鼓挑战',
    stage: 3,
    description: '完成现场战鼓挑战。',
    checkInRadiusMeters: 30,
    status: 'locked',
  },
  {
    id: 'task_004',
    routeId: 'route_fenglangjuxu',
    title: '智取敌营',
    stage: 4,
    description: '完成策略互动任务。',
    checkInRadiusMeters: 30,
    status: 'locked',
  },
  {
    id: 'task_005',
    routeId: 'route_fenglangjuxu',
    title: '封狼居胥',
    stage: 5,
    description: '抵达终点并完成核心挑战。',
    checkInRadiusMeters: 30,
    status: 'locked',
  },
  {
    id: 'task_006',
    routeId: 'route_fenglangjuxu',
    title: '火种传承',
    stage: 6,
    description: '完成火种传承仪式。',
    checkInRadiusMeters: 30,
    status: 'locked',
  },
];

export const mockBookingDates: BookingDateOption[] = [
  { id: 'date_today', routeId: 'route_fenglangjuxu', label: '今天', date: '2026-04-28', status: 'available' },
  { id: 'date_tomorrow', routeId: 'route_fenglangjuxu', label: '明天', date: '2026-04-29', status: 'available' },
  { id: 'date_saturday', routeId: 'route_fenglangjuxu', label: '本周六', date: '2026-05-02', status: 'available' },
  { id: 'date_sunday', routeId: 'route_fenglangjuxu', label: '本周日', date: '2026-05-03', status: 'available' },
  { id: 'date_next_monday', routeId: 'route_fenglangjuxu', label: '下周一', date: '2026-05-04', status: 'available' },
];

export const mockTicketTypes: TicketType[] = [
  {
    id: 'ticket_single',
    routeId: 'route_fenglangjuxu',
    name: '单人体验票',
    priceCents: 9900,
    description: '适合首次体验，含剧情任务、LBS打卡、完赛勋章',
    tag: '推荐',
  },
  {
    id: 'ticket_group',
    routeId: 'route_fenglangjuxu',
    name: '组队体验票',
    priceCents: 8900,
    description: '2人起购，适合朋友组队挑战',
    tag: '多人优惠',
    minQuantity: 2,
  },
  {
    id: 'ticket_family',
    routeId: 'route_fenglangjuxu',
    name: '亲子体验票',
    priceCents: 16900,
    description: '1大1小，适合家庭文化体验',
    tag: '亲子推荐',
  },
];

export const mockOrder: TicketOrder = {
  id: 'order_001',
  userId: 'user_001',
  routeId: 'route_fenglangjuxu',
  ticketTypeId: 'ticket_single',
  bookingDateId: 'date_today',
  status: 'pending_verification',
  quantity: 1,
  amountCents: 9900,
  verificationCode: 'HHF-2026-001234',
};

export const mockSession: ExperienceSession = {
  id: 'session_001',
  userId: 'user_001',
  routeId: 'route_fenglangjuxu',
  orderId: 'order_001',
  status: 'active',
  currentTaskId: 'task_002',
  completedTaskIds: ['task_001'],
};

export const mockMedals: Medal[] = [
  {
    id: 'medal_champion_hou',
    name: '冠军侯火种勋章',
    description: '完成霍去病英雄体验全部任务后获得。',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/10156/10156828.png',
  },
];
