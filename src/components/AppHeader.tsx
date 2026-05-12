import { Link } from "@tanstack/react-router";
import { Bell, ArrowRight } from "lucide-react";

export function AppHeader({ title, back }: { title?: string; back?: boolean }) {
  return (
    <header className="px-5 pt-12 pb-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        {back && (
          <Link
            to="/"
            className="size-10 rounded-full glass flex items-center justify-center text-gold"
          >
            <ArrowRight className="size-5" />
          </Link>
        )}
        <div>
          {!title ? (
            <>
              <p className="text-xs text-muted-foreground">أهلاً بك في</p>
              <h2 className="font-display text-2xl text-gradient-gold leading-tight">
                AURUM Print Studio
              </h2>
            </>
          ) : (
            <h1 className="font-display text-2xl text-gradient-gold">{title}</h1>
          )}
        </div>
      </div>
      <button className="size-11 rounded-full glass flex items-center justify-center text-gold relative">
        <Bell className="size-5" />
        <span className="absolute top-2 left-2 size-2 rounded-full bg-gold" />
      </button>
    </header>
  );
}
