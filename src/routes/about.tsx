import { createFileRoute } from "@tanstack/react-router";
import { MobileFrame } from "@/components/MobileFrame";
import { AppHeader } from "@/components/AppHeader";
import { Award, Target, Heart, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [{ title: "عنّا — AURUM" }, { name: "description", content: "قصة استوديو AURUM." }],
  }),
  component: About,
});

function About() {
  return (
    <MobileFrame>
      <AppHeader title="من نحن" back />

      <section className="px-5">
        <div className="glass rounded-3xl p-6 text-center gold-border shadow-elegant">
          <div className="mx-auto size-16 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-gold mb-4">
            <span className="font-display text-2xl text-primary-foreground">A</span>
          </div>
          <h2 className="font-display text-2xl text-gradient-gold">AURUM Studio</h2>
          <p className="text-xs text-muted-foreground mt-1">حيث يلتقي التصميم بالحرفية</p>
          <p className="text-sm text-muted-foreground/90 mt-4 leading-relaxed">
            استوديو متخصص في تقديم حلول تصميم وطباعة فاخرة للشركات والفنادق منذ عام 2012،
            نؤمن أن كل تفصيلة مطبوعة هي امتداد لهوية علامتك التجارية.
          </p>
        </div>
      </section>

      <section className="px-5 mt-6 grid grid-cols-2 gap-3">
        {[
          { icon: Target, t: "رؤيتنا", d: "أن نكون المرجع الأول للطباعة الفاخرة." },
          { icon: Heart, t: "قيمنا", d: "الجودة، الإتقان، والابتكار." },
          { icon: Award, t: "إنجازاتنا", d: "+15 جائزة محلية ودولية." },
          { icon: Users, t: "فريقنا", d: "30 مصمماً وفنياً متخصصاً." },
        ].map((c) => (
          <div key={c.t} className="glass rounded-2xl p-4">
            <c.icon className="size-6 text-gold mb-2" strokeWidth={1.8} />
            <p className="font-display">{c.t}</p>
            <p className="text-xs text-muted-foreground mt-1">{c.d}</p>
          </div>
        ))}
      </section>

      <section className="px-5 mt-6">
        <h3 className="font-display text-lg mb-3">يثقون بنا</h3>
        <div className="glass rounded-2xl p-5 grid grid-cols-3 gap-3">
          {["ريتز", "هيلتون", "موڤنبيك", "المنارة", "رويال", "ڤيردي"].map((b) => (
            <div
              key={b}
              className="aspect-square rounded-xl bg-gradient-luxury gold-border flex items-center justify-center"
            >
              <span className="font-display text-sm text-gradient-gold">{b}</span>
            </div>
          ))}
        </div>
      </section>
    </MobileFrame>
  );
}
