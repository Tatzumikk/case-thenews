import { ChevronRight } from "lucide-react";
import {
  ChartNoAxesColumnIncreasing,
  Flame,
  Moon,
  Newspaper,
  Trophy,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type MenuCardData = {
  title: string;
  subtitle: string;
  emoji?: string;
  Icon?: LucideIcon;
  tone?: "yellow" | "emoji";
};

export const todayActions: MenuCardData[] = [
  { title: "Ler edição", subtitle: "the news night", Icon: Newspaper, tone: "yellow" },
  { title: "Hábito", subtitle: "Exercícios, livro etc.", Icon: Flame, tone: "yellow" },
  { title: "Ver enquete", subtitle: "Participe agora", Icon: ChartNoAxesColumnIncreasing, tone: "yellow" },
  { title: "Copa", subtitle: "Hoje • 3 jogos", Icon: Trophy, tone: "yellow" },
];

export const exploreItems: MenuCardData[] = [
  { title: "Notícias", subtitle: "Feed personalizado", emoji: "🗞️" },
  { title: "Podcasts", subtitle: "Biblioteca de episódios", emoji: "🎧" },
  { title: "Edições anteriores", subtitle: "Histórico de newsletters", emoji: "📰" },
  { title: "Agenda", subtitle: "Calendário de newsletters", emoji: "🗓️" },
];

export const communityItems: MenuCardData[] = [
  { title: "Cupons", subtitle: "Descontos exclusivos", emoji: "🏷️" },
  { title: "Presentes", subtitle: "Ganhe recompensas", emoji: "🎁" },
  { title: "Buscar", subtitle: "Encontre leitores", emoji: "🔍" },
  { title: "Comunidade", subtitle: "Fórum e debates", emoji: "👥" },
];

export const accountItems = [
  { title: "Meu perfil", subtitle: "Suas informações e preferências", emoji: "👤", Arrow: ChevronRight },
  { title: "Notificações", subtitle: "Central de notificações", emoji: "🔔", Arrow: ChevronRight },
];

export const summaryItems = [
  { title: "14 dias", subtitle: "Sequência atual", emoji: "🔥", tone: "emoji" },
  { title: "2/5", subtitle: "Edição lida", Icon: Newspaper, tone: "yellow" },
  { title: "40%", subtitle: "Hábitos do dia", Icon: Moon, tone: "yellow" },
];
