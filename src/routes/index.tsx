import { createFileRoute, Link } from "@tanstack/react-router";
import { MobileFrame } from "@/components/MobileFrame";
import { AppHeader } from "@/components/AppHeader";
import {
  Printer,
  Palette,
  Package,
  FileText,
  Sparkles,
  ChevronLeft,
  Star,
} from "lucide-react";
import hero from "@/assets/hero-luxury.jpg";
import workHotel from "@/assets/work-hotel.jpg";
import workCorporate from "@/assets/work-corporate.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AURUM — استوديو ديزاين وطباعة فاخر" },
      { name: "description", content: "حلول طباعة وتصميم فاخرة للشركات والفنادق." },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Palette, label: "هوية بصرية", color: "from-amber-300/20 to-amber-500/10" },
  { icon: Printer, label: "طباعة فاخرة", color: "from-yellow-300/20 to-orange-400/10" },
  { icon: Package, label: "تغليف", color: "from-amber-200/20 to-yellow-500/10" },
  { icon: FileText, label: "مطبوعات", color: "from-yellow-400/20 to-amber-600/10" },
];

function Index() {
  return (
    <MobileFrame>
      <AppHeader />

      {/* Hero */}
      <section className="px-5 mt-2">
        <div className="relative rounded-3xl overflow-hidden shadow-elegant gold-border">
          <img
            src={hero}
            alt="مطبوعات فاخرة"
            width={1024}
            height={1280}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 p-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass text-xs text-gold mb-3">
              <Sparkles className="size-3" /> فخامة في كل تفصيلة
            </div>
            <h1 className="font-display text-2xl leading-snug">
              نُحوّل علامتك التجارية إلى
              <span className="text-gradient-gold"> تحفة مطبوعة </span>
            </h1>
            <Link
              to="/services"
              className="mt-4 inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-5 py-2.5 rounded-full text-sm font-bold shadow-gold"
            >
              اكتشف خدماتنا
              <ChevronLeft className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="px-5 mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-lg">خدماتنا المميزة</h2>
          <Link to="/services" className="text-xs text-gold">عرض الكل</Link>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {services.map((s) => (
            <Link
              key={s.label}
              to="/services"
              className={`relative overflow-hidden rounded-2xl glass p-4 h-28 flex flex-col justify-between bg-gradient-to-br ${s.color}`}
            >
              <s.icon className="size-7 text-gold" strokeWidth={1.5} />
              <span className="font-semibold text-sm">{s.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="px-5 mt-8">
        <div className="glass rounded-2xl p-5 grid grid-cols-3 divide-x divide-x-reverse divide-border">
          {[
            { n: "+250", l: "عميل" },
            { n: "+40", l: "فندق" },
            { n: "12", l: "سنة خبرة" },
          ].map((s) => (
            <div key={s.l} className="text-center px-2">
              <p className="font-display text-xl text-gradient-gold">{s.n}</p>
              <p className="text-[11px] text-muted-foreground mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured work */}
      <section className="px-5 mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-lg">أحدث الأعمال</h2>
          <Link to="/portfolio" className="text-xs text-gold">عرض الكل</Link>
        </div>
        <div className="space-y-4">
          {[
            { img: workHotel, title: "مجموعة فندق ريتز", tag: "ضيافة فاخرة" },
            { img: workCorporate, title: "هوية شركة المنارة", tag: "هوية تجارية" },
          ].map((w) => (
            <div
              key={w.title}
              className="relative rounded-2xl overflow-hidden gold-border shadow-soft"
            >
              <img
                src={w.img}
                alt={w.title}
                width={1024}
                height={1024}
                loading="lazy"
                className="w-full h-44 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-4 flex items-end justify-between">
                <div>
                  <p className="text-xs text-gold mb-1">{w.tag}</p>
                  <p className="font-display text-base">{w.title}</p>
                </div>
                <div className="flex items-center gap-1 text-gold text-xs">
                  <Star className="size-3 fill-current" /> 5.0
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </MobileFrame>
  );
}
