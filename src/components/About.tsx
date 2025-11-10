import { useEffect, useState, useRef } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          <div className="lg:col-span-5">
            <div
              className={`aspect-[3/4] bg-stone-200 overflow-hidden transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <iframe
                src="https://drive.google.com/file/d/1JLTpQmcgMOLKQm1WCj4bbBLR3S7he5Dk/preview"
                className="w-full h-full"
                allow="autoplay"
                title="Acrogym video"
              ></iframe>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pt-12">
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="w-12 h-px bg-stone-900 mb-8"></div>
              <h2 className="text-4xl lg:text-5xl font-light text-stone-900 mb-8 leading-tight">
                Our company ethos
              </h2>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                Tell people about who you are, your origin, your process, or your inspirations. Tap
                into your creativity. You've got this. The way you tell your story online can make
                all the difference.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                Acrogym was born from a deep passion for aerial arts and a vision to make this
                beautiful discipline accessible to everyone. With over a decade of experience in
                performance and instruction, we've created a space where students of all ages and
                abilities can discover the joy of defying gravity.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="aspect-square bg-stone-200 overflow-hidden mb-8">
              <img
                src="/image.png"
                alt="Training"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="aspect-square bg-stone-200 overflow-hidden mb-8 lg:mt-16">
              <img
                src="/WhatsApp Image 2025-10-16 at 12.19.02_b7b96478.jpg"
                alt="Performance"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div
          className={`mt-20 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="w-12 h-px bg-stone-900 mb-8"></div>
          <h3 className="text-3xl font-light text-stone-900 mb-6">Our Mission</h3>
          <p className="text-lg text-stone-600 max-w-3xl leading-relaxed">
            We believe that aerial arts should be accessible, empowering, and transformative. Our
            mission is to provide exceptional training that builds strength, confidence, and
            creativity while fostering a community united by a shared love of movement.
          </p>
        </div>
      </div>
    </section>
  );
}
