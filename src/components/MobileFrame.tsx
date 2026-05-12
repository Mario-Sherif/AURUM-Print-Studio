import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Sparkles, LayoutGrid, Phone, User } from "lucide-react";
import type { ReactNode } from "react";

const tabs = [
  { to: "/", label: "الرئيسية", icon: Home },
  { to: "/services", label: "الخدمات", icon: Sparkles },
  { to: "/portfolio", label: "أعمالنا", icon: LayoutGrid },
  { to: "/contact", label: "تواصل", icon: Phone },
  { to: "/about", label: "عنّا", icon: User },
] as const;

export function MobileFrame({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div dir="rtl" className="min-h-screen flex flex-col bg-gradient-luxury">
      <div className="flex-1 pb-24">{children}</div>
      <nav className="fixed bottom-0 inset-x-0 z-50">
        <div className="mx-auto max-w-md px-4 pb-4 pt-2">
          <div className="glass rounded-3xl shadow-elegant flex items-center justify-around px-2 py-2">
            {tabs.map((t) => {
              const active = path === t.to;
              const Icon = t.icon;
              return (
                <Link
                  key={t.to}
                  to={t.to}
                  className={`flex flex-col items-center gap-1 px-2 py-2 rounded-2xl transition-all ${
                    active
                      ? "bg-gradient-gold text-primary-foreground shadow-gold scale-105"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="size-5" strokeWidth={active ? 2.5 : 1.8} />
                  <span className="text-[10px] font-medium">{t.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}
