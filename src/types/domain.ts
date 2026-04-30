export type ID = string;

export type ExperienceStatus =
  | 'not_started'
  | 'pending_verification'
  | 'active'
  | 'completed'
  | 'cancelled';

export type TaskStatus = 'locked' | 'available' | 'active' | 'submitted' | 'completed';

export interface User {
  id: ID;
  nickname: string;
  phoneMasked?: string;
  avatarUrl?: string;
}

export interface Scene {
  id: ID;
  name: string;
  city: string;
  address: string;
  status: 'open' | 'coming_soon' | 'closed';
}

export interface Hero {
  id: ID;
  name: string;
  subtitle: string;
  category: string;
  status: 'available' | 'coming_soon' | 'locked';
  imageUrl: string;
  story?: string;
}

export interface Route {
  id: ID;
  heroId: ID;
  sceneId: ID;
  name: string;
  durationMinutes: number;
  distanceMeters: number;
  difficulty: 'easy' | 'medium' | 'hard';
  audienceTags?: string[];
}

export interface Task {
  id: ID;
  routeId: ID;
  title: string;
  stage: number;
  description: string;
  checkInRadiusMeters: number;
  status: TaskStatus;
}

export interface BookingDateOption {
  id: ID;
  routeId: ID;
  label: string;
  date: string;
  status: 'available' | 'sold_out' | 'closed';
}

export interface TicketType {
  id: ID;
  routeId: ID;
  name: string;
  priceCents: number;
  description: string;
  tag?: string;
  minQuantity?: number;
}

export interface TicketBookingDraft {
  routeId: ID;
  bookingDateId: ID;
  ticketTypeId: ID;
  quantity: number;
}

export type CreateTicketOrderInput = TicketBookingDraft & {
  userId: ID;
};

export interface TicketOrder {
  id: ID;
  userId: ID;
  routeId: ID;
  ticketTypeId?: ID;
  bookingDateId?: ID;
  status: 'pending_payment' | 'paid' | 'pending_verification' | 'verified' | 'refunded';
  quantity: number;
  amountCents: number;
  verificationCode?: string;
}

export interface ExperienceSession {
  id: ID;
  userId: ID;
  routeId: ID;
  orderId: ID;
  status: ExperienceStatus;
  currentTaskId?: ID;
  completedTaskIds: ID[];
}

export interface Medal {
  id: ID;
  name: string;
  description: string;
  imageUrl: string;
  unlockedAt?: string;
}
