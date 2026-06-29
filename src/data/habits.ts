import {
  BookOpen,
  Dumbbell,
  Gamepad2,
  Moon,
  Newspaper,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type HabitStatus = "done" | "pending" | "partial";

export type Habit = {
  name: string;
  status: HabitStatus;
  action: string;
  Icon: LucideIcon;
};

export const habits: Habit[] = [
  { name: "Exercício", status: "done", action: "Bom trabalho!", Icon: Dumbbell },
  { name: "Jogos", status: "pending", action: "Registrar", Icon: Gamepad2 },
  { name: "Leitura", status: "done", action: "Bom trabalho!", Icon: BookOpen },
  { name: "Edição", status: "partial", action: "Ler agora", Icon: Newspaper },
  { name: "Sono", status: "pending", action: "Registrar", Icon: Moon },
];

export type DailyChallenge = {
  title: string;
  subtitle: string;
  badge: string;
  cta: string;
  thumbnail: "image" | "emoji";
  imageSrc?: string;
  emoji?: string;
};

export const dailyChallenges: DailyChallenge[] = [
  {
    title: "Palavritas",
    subtitle: "Descubra a palavra do dia",
    badge: "Novo",
    cta: "Jogar agora",
    thumbnail: "image",
    imageSrc: "/assets/palavritas.png",
  },
  {
    title: "Teia",
    subtitle: "Agrupe palavras por tema",
    badge: "Novo",
    cta: "Jogar agora",
    thumbnail: "emoji",
    emoji: "🧩",
  },
];
