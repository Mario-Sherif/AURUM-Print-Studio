import { createFileRoute } from "@tanstack/react-router";
import { MobileFrame } from "@/components/MobileFrame";
import { AppHeader } from "@/components/AppHeader";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [{ title: "تواصل معنا — AURUM" }, { name: "description", content: "تواصل مع فريقنا." }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <MobileFrame>
      <AppHeader title="تواصل معنا" back />
      <p className="px-5 text-sm text-muted-foreground -mt-2 mb-6">
        فريقنا جاهز لتحويل فكرتك إلى واقع فاخر.
      </p>

      <section className="px-5 grid grid-cols-2 gap-3 mb-6">
        {[
          { icon: Phone, label: "اتصال", v: "+20 100 000 0000" },
          { icon: MessageCircle, label: "واتساب", v: "تواصل سريع" },
          { icon: Mail, label: "بريد", v: "hello@aurum.co" },
          { icon: MapPin, label: "العنوان", v: "القاهرة، مصر" },
        ].map((c) => (
          <div key={c.label} className="glass rounded-2xl p-4">
            <div className="size-10 rounded-full bg-gradient-gold flex items-center justify-center mb-3 shadow-gold">
              <c.icon className="size-5 text-primary-foreground" />
            </div>
            <p className="text-xs text-muted-foreground">{c.label}</p>
            <p className="text-sm font-medium mt-1">{c.v}</p>
          </div>
        ))}
      </section>

      <section className="px-5">
        <div className="glass rounded-3xl p-5 space-y-4">
          <h3 className="font-display text-lg">اطلب عرض سعر</h3>
          <input
            placeholder="الاسم الكامل"
            className="w-full bg-input/60 border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold"
          />
          <input
            placeholder="اسم الشركة"
            className="w-full bg-input/60 border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold"
          />
          <input
            placeholder="رقم التواصل"
            className="w-full bg-input/60 border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold"
          />
          <textarea
            rows={4}
            placeholder="تفاصيل المشروع..."
            className="w-full bg-input/60 border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold resize-none"
          />
          <button className="w-full bg-gradient-gold text-primary-foreground font-bold py-3.5 rounded-xl shadow-gold flex items-center justify-center gap-2">
            <Send className="size-4" />
            إرسال الطلب
          </button>
        </div>
      </section>
    </MobileFrame>
  );
}
