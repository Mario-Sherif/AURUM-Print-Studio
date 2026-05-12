import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MobileFrame } from "@/components/MobileFrame";
import { AppHeader } from "@/components/AppHeader";
import workHotel from "@/assets/work-hotel.jpg";
import workCorporate from "@/assets/work-corporate.jpg";
import workPackaging from "@/assets/work-packaging.jpg";
import hero from "@/assets/hero-luxury.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [{ title: "أعمالنا — AURUM" }, { name: "description", content: "معرض أعمالنا." }],
  }),
  component: Portfolio,
});

const filters = ["الكل", "فنادق", "شركات", "تغليف", "هوية"];

const works = [
  { img: workHotel, title: "فندق ريتز كولكشن", cat: "فنادق" },
  { img: workCorporate, title: "شركة المنارة", cat: "شركات" },
  { img: workPackaging, title: "تغليف عطور رويال", cat: "تغليف" },
  { img: hero, title: "هوية لاون كافيه", cat: "هوية" },
  { img: workHotel, title: "منيو فندق المروج", cat: "فنادق" },
  { img: workCorporate, title: "ستيشنري قانون و شركاه", cat: "شركات" },
];

function Portfolio() {
  const [active, setActive] = useState("الكل");
  const filtered = active === "الكل" ? works : works.filter((w) => w.cat === active);
  return (
    <MobileFrame>
      <AppHeader title="معرض أعمالنا" back />
      <div className="px-5 mb-5 flex gap-2 overflow-x-auto no-scrollbar">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
              active === f
                ? "bg-gradient-gold text-primary-foreground shadow-gold"
                : "glass text-muted-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <section className="px-5 grid grid-cols-2 gap-3">
        {filtered.map((w, i) => (
          <div
            key={i}
            className={`relative rounded-2xl overflow-hidden gold-border ${
              i % 3 === 0 ? "row-span-2" : ""
            }`}
          >
            <img
              src={w.img}
              alt={w.title}
              loading="lazy"
              className={`w-full object-cover ${i % 3 === 0 ? "h-72" : "h-36"}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-3">
              <p className="text-[10px] text-gold">{w.cat}</p>
              <p className="font-display text-sm leading-tight mt-0.5">{w.title}</p>
            </div>
          </div>
        ))}
      </section>
    </MobileFrame>
  );
}
