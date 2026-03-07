import { Play } from "lucide-react";

const videos = [
  { title: "Morning Assembly", desc: "Kids start the day with songs and prayers" },
  { title: "Classroom Fun", desc: "Interactive learning sessions with teachers" },
  { title: "Annual Day 2025", desc: "Highlights from our grand celebration" },
];

const SchoolLifeVideo = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl text-foreground mb-3">School <span className="text-primary">Life</span></h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Watch our students in action — real moments from our vibrant school culture.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {videos.map((v) => (
          <div key={v.title} className="glass-card overflow-hidden group">
            {/* Video placeholder */}
            <div className="aspect-video bg-muted flex items-center justify-center relative cursor-pointer">
              <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform shadow-playful">
                <Play size={28} className="text-primary-foreground ml-1" />
              </div>
              <p className="absolute bottom-2 left-3 text-xs text-muted-foreground">Video placeholder</p>
            </div>
            <div className="p-5">
              <h3 className="font-fredoka text-foreground mb-1">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SchoolLifeVideo;
