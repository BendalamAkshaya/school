import { ShieldCheck, TreePine, Lightbulb, BookOpen, Palette, Volleyball } from "lucide-react";

const facilities = [
  { icon: ShieldCheck, label: "Safe Classrooms", desc: "Child-proof, colorful, air-conditioned rooms", bg: "bg-sky-light", iconColor: "text-sky" },
  { icon: TreePine, label: "Play Area", desc: "Spacious outdoor playground with soft flooring", bg: "bg-mint-light", iconColor: "text-mint" },
  { icon: Lightbulb, label: "Learning Activities", desc: "STEM & sensory exploration zones", bg: "bg-sunshine/30", iconColor: "text-sunshine" },
  { icon: BookOpen, label: "Story Time", desc: "Cozy reading corner with 500+ children's books", bg: "bg-rose-light", iconColor: "text-rose" },
  { icon: Palette, label: "Art & Craft", desc: "Dedicated art studio for creative expression", bg: "bg-lavender-light", iconColor: "text-lavender" },
  { icon: Volleyball, label: "Outdoor Games", desc: "Organized sports and group activities", bg: "bg-peach-light", iconColor: "text-peach" },
];

const FacilitiesSection = () => (
  <section id="facilities" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl text-foreground mb-3">School <span className="text-primary">Facilities</span></h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Everything your child needs to learn, play, and grow in a safe environment.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {facilities.map((f) => (
          <div key={f.label} className="glass-card p-6 text-center group hover:shadow-soft-xl transition-all duration-300 hover:-translate-y-1">
            <div className={`w-14 h-14 rounded-2xl ${f.bg} flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce-gentle`}>
              <f.icon size={26} className={f.iconColor} />
            </div>
            <h3 className="font-fredoka text-foreground text-sm md:text-base mb-1">{f.label}</h3>
            <p className="text-xs text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FacilitiesSection;
