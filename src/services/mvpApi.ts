import {
  mockBookingDates,
  mockHeroes,
  mockMedals,
  mockOrder,
  mockRoutes,
  mockScenes,
  mockSession,
  mockTasks,
  mockTicketTypes,
  mockUser,
} from '../data/mockMvp';
import type {
  BookingDateOption,
  CreateTicketOrderInput,
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

const delay = (ms = 120) => new Promise((resolve) => setTimeout(resolve, ms));

export const mvpApi = {
  async getCurrentUser(): Promise<User> {
    await delay();
    return mockUser;
  },

  async listScenes(): Promise<Scene[]> {
    await delay();
    return mockScenes;
  },

  async listHeroes(): Promise<Hero[]> {
    await delay();
    return mockHeroes;
  },

  async getHero(heroId: string): Promise<Hero | undefined> {
    await delay();
    return mockHeroes.find((hero) => hero.id === heroId);
  },

  async listRoutes(): Promise<Route[]> {
    await delay();
    return mockRoutes;
  },

  async getRoute(routeId: string): Promise<Route | undefined> {
    await delay();
    return mockRoutes.find((route) => route.id === routeId);
  },

  async listRoutesByHero(heroId: string): Promise<Route[]> {
    await delay();
    return mockRoutes.filter((route) => route.heroId === heroId);
  },

  async listTasks(routeId: string): Promise<Task[]> {
    await delay();
    return mockTasks.filter((task) => task.routeId === routeId);
  },

  async listBookingDates(routeId: string): Promise<BookingDateOption[]> {
    await delay();
    return mockBookingDates.filter((date) => date.routeId === routeId);
  },

  async listTicketTypes(routeId: string): Promise<TicketType[]> {
    await delay();
    return mockTicketTypes.filter((ticket) => ticket.routeId === routeId);
  },

  async createTicketOrder(input: CreateTicketOrderInput): Promise<TicketOrder> {
    await delay();
    const ticket = mockTicketTypes.find((item) => item.id === input.ticketTypeId);
    return {
      id: `order_${Date.now()}`,
      userId: input.userId,
      routeId: input.routeId,
      ticketTypeId: input.ticketTypeId,
      bookingDateId: input.bookingDateId,
      status: 'pending_payment',
      quantity: input.quantity,
      amountCents: (ticket?.priceCents ?? 0) * input.quantity,
    };
  },

  async getActiveOrder(): Promise<TicketOrder> {
    await delay();
    return mockOrder;
  },

  async getActiveSession(): Promise<ExperienceSession> {
    await delay();
    return mockSession;
  },

  async listMedals(): Promise<Medal[]> {
    await delay();
    return mockMedals;
  },
};
