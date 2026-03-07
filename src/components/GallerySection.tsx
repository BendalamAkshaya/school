import kidsPlaying from "@/assets/kids-playing.png";
import kidsLearning from "@/assets/kids-learning.png";
import kidsArt from "@/assets/kids-art.png";
import kidsCelebration from "@/assets/kids-celebration.png";
import kidsOutdoor from "@/assets/kids-outdoor.png";
import kidsStorytime from "@/assets/kids-storytime.png";

const images = [
  { src: kidsPlaying, alt: "Kids playing together", span: "md:col-span-2 md:row-span-2" },
  { src: kidsLearning, alt: "Kids learning in class", span: "" },
  { src: kidsArt, alt: "Art and craft activities", span: "" },
  { src: kidsCelebration, alt: "School celebration", span: "md:col-span-2" },
  { src: kidsOutdoor, alt: "Outdoor games", span: "" },
  { src: kidsStorytime, alt: "Story time with teacher", span: "" },
];

const GallerySection = () => (
  <section id="gallery" className="py-20 gradient-warm">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl text-foreground mb-3">Photo <span className="text-secondary">Gallery</span></h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Glimpses of the joyful moments at Genesis International Montessori School.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className={`group relative overflow-hidden rounded-2xl shadow-soft ${img.span}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-end">
              <p className="text-primary-foreground text-sm font-semibold p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg">
                {img.alt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
