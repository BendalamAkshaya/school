import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  { name: "Priya Sharma", child: "Mother of Aarav, Nursery", text: "Genesis International has been a blessing for our family. My son wakes up excited to go to school every day! The teachers are so caring and patient." },
  { name: "Rahul Verma", child: "Father of Ananya, LKG", text: "The way they blend learning with play is wonderful. Ananya has become so confident and creative since joining. Highly recommended!" },
  { name: "Sneha Patel", child: "Mother of Kabir, UKG", text: "We love the safe environment and the personal attention each child receives. The school feels like a second home for our kids." },
];

const TestimonialsSection = () => {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  const t = testimonials[idx];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-foreground mb-3">What <span className="text-secondary">Parents Say</span></h2>
        </div>
        <div className="max-w-2xl mx-auto glass-card p-8 md:p-12 text-center relative">
          <Quote size={40} className="text-sunshine mx-auto mb-4 opacity-60" />
          <p className="text-muted-foreground leading-relaxed text-lg mb-6">"{t.text}"</p>
          <p className="font-fredoka text-foreground">{t.name}</p>
          <p className="text-sm text-primary">{t.child}</p>
          <div className="flex justify-center gap-4 mt-6">
            <button onClick={prev} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
              <ChevronLeft size={18} />
            </button>
            <button onClick={next} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
              <ChevronRight size={18} />
            </button>
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === idx ? "bg-primary" : "bg-border"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
