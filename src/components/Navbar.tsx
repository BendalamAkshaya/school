import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, GraduationCap, Home, Info, BookOpen, Warehouse, Image, Sparkles, Phone, Pencil, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home", Icon: Home, color: "bg-sky-light text-sky" },
  { label: "About", href: "#about", Icon: Info, color: "bg-mint-light text-mint" },
  { label: "Programs", href: "#programs", Icon: BookOpen, color: "bg-rose-light text-rose" },
  { label: "Facilities", href: "#facilities", Icon: Warehouse, color: "bg-sunshine/10 text-secondary" },
  { label: "Gallery", href: "#gallery", Icon: Image, color: "bg-lavender-light text-lavender" },
  { label: "Activities", href: "#activities", Icon: Palette, color: "bg-peach-light text-peach" },
  { label: "Contact", href: "#contact", Icon: Phone, color: "bg-sky-light text-sky" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto flex items-center justify-between h-28 px-4">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-24 h-24 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 animate-in zoom-in spin-in-12 duration-700 ease-out">
            <img
              src="/pictures/Genesis Stem Final Logo.png"
              alt="Genesis International Montessori and STEM School Logo"
              className="h-full w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.classList.add('bg-primary', 'rounded-xl');
                const icon = document.createElement('div');
                icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>';
                e.currentTarget.parentElement?.appendChild(icon.firstChild as Node);
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl tracking-tighter leading-none">
              <span className="font-genesis font-black">GENESIS</span>{" "}
              <span className="font-international font-bold">INTERNATIONAL</span>
            </span>
            <span className="text-[12px] uppercase tracking-[0.1em] font-normal font-montessori text-primary">MONTESSORI and STEM SCHOOL</span>
          </div>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
            >
              <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${l.color.split(' ')[0]}`} />
              <div className="relative flex items-center gap-2">
                <l.Icon size={18} className={`transition-transform duration-300 group-hover:rotate-12 ${l.color.split(' ')[1]}`} />
                <span className="text-sm font-bold text-muted-foreground group-hover:text-foreground transition-colors">
                  {l.label}
                </span>
              </div>
            </a>
          ))}
          <Button variant="hero" size="sm" className="ml-4 rounded-full px-6 shadow-soft" asChild>
            <a href="#admissions">Admissions Open</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground w-12 h-12 flex items-center justify-center rounded-xl bg-muted" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-card/95 backdrop-blur-md border-t border-border/50 p-4 space-y-2 animate-in slide-in-from-top duration-300">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center gap-4 p-4 rounded-2xl text-base font-bold transition-all active:scale-95",
                l.color
              )}
            >
              <div className="w-10 h-10 rounded-xl bg-white/80 flex items-center justify-center shadow-sm">
                <l.Icon size={24} />
              </div>
              {l.label}
            </a>
          ))}
          <Button variant="hero" className="w-full h-14 text-lg rounded-2xl mt-4 shadow-premium" size="lg" asChild>
            <a href="#admissions">Admissions Open</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
