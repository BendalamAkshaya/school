import { Sun, BookOpen, Cookie, Gamepad2, BookHeart } from "lucide-react";

const activities = [
  { icon: Sun, time: "9:00 AM", label: "Morning Prayer", desc: "Starting the day with positive energy", color: "bg-sunshine/30 text-sunshine" },
  { icon: BookOpen, time: "9:30 AM", label: "Learning Time", desc: "Fun lessons with interactive activities", color: "bg-sky-light text-sky" },
  { icon: Cookie, time: "11:00 AM", label: "Snack Time", desc: "Healthy and yummy snacks for energy", color: "bg-peach-light text-peach" },
  { icon: Gamepad2, time: "11:30 AM", label: "Play Time", desc: "Outdoor games and creative play", color: "bg-mint-light text-mint" },
  { icon: BookHeart, time: "12:30 PM", label: "Story Time", desc: "Imagination through wonderful stories", color: "bg-rose-light text-rose" },
];

const ActivitiesSection = () => (
  <section id="activities" className="py-20 gradient-sky">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl text-foreground mb-3">A Day at <span className="text-primary text-2xl">Genesis International</span></h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Here's what a typical fun-filled day looks like for our little learners.</p>
      </div>
      <div className="max-w-2xl mx-auto space-y-0">
        {activities.map((a, i) => (
          <div key={a.label} className="flex gap-4 items-start relative">
            {/* Timeline line */}
            <div className="flex flex-col items-center">
              <div className={`w-12 h-12 rounded-2xl ${a.color} flex items-center justify-center shrink-0 z-10`}>
                <a.icon size={22} />
              </div>
              {i < activities.length - 1 && (
                <div className="w-0.5 h-16 bg-border" />
              )}
            </div>
            <div className="glass-card p-4 flex-1 mb-4 hover:shadow-soft-lg transition-shadow">
              <p className="text-xs font-semibold text-primary">{a.time}</p>
              <h3 className="font-fredoka text-foreground">{a.label}</h3>
              <p className="text-sm text-muted-foreground">{a.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ActivitiesSection;
