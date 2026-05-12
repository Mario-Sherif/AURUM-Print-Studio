import { createFileRoute } from "@tanstack/react-router";
import { MobileFrame } from "@/components/MobileFrame";
import { AppHeader } from "@/components/AppHeader";
import {
  Palette, Printer, Package, FileText, BookOpen,
  CreditCard, Building2, Gift, ChevronLeft,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [{ title: "خدماتنا — AURUM" }, { name: "description", content: "خدمات التصميم والطباعة." }],
  }),
  component: Services,
});

const items = [
  { icon: Palette, t: "تصميم الهوية البصرية", d: "شعار، ألوان، خطوط، ودليل كامل للعلامة." },
  { icon: Printer, t: "طباعة أوفست رقمية", d: "جودة فاخرة لمطبوعاتك بكميات صغيرة وكبيرة." },
  { icon: CreditCard, t: "كروت أعمال فاخرة", d: "ذهبي مطفي، تذهيب حراري، نقش بارز." },
  { icon: BookOpen, t: "كتيبات ومنيوهات", d: "تصميم وطباعة منيوهات الفنادق والمطاعم." },
  { icon: Package, t: "تصميم التغليف", d: "علب فاخرة وتغليفات مخصصة لمنتجاتك." },
  { icon: Building2, t: "حلول للفنادق", d: "حقيبة برندينج متكاملة لتجربة نزلاء راقية." },
  { icon: FileText, t: "مطبوعات إدارية", d: "أوراق رسمية، أظرف، فواتير، وملفات." },
  { icon: Gift, t: "هدايا ترويجية", d: "هدايا مطبوعة فاخرة لعملائك وشركائك." },
];

function Services() {
  return (
    <MobileFrame>
      <AppHeader title="خدماتنا" back />
      <p className="px-5 text-sm text-muted-foreground -mt-2 mb-6">
        مجموعة متكاملة من حلول التصميم والطباعة بمعايير عالمية.
      </p>
      <section className="px-5 space-y-3">
        {items.map((it) => (
          <div
            key={it.t}
            className="glass rounded-2xl p-4 flex items-center gap-4 hover:shadow-gold transition-all"
          >
            <div className="size-12 rounded-xl bg-gradient-gold flex items-center justify-center shrink-0 shadow-gold">
              <it.icon className="size-6 text-primary-foreground" strokeWidth={2} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-display text-base">{it.t}</h3>
              <p className="text-xs text-muted-foreground mt-0.5">{it.d}</p>
            </div>
            <ChevronLeft className="size-5 text-gold shrink-0" />
          </div>
        ))}
      </section>
    </MobileFrame>
  );
}
