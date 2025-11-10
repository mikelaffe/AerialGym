import { useEffect, useState, useRef } from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: 'Gymnastics and Flexibility',
      image: '/WhatsApp Image 2025-10-16 at 09.30.52_ecb7e67e.jpg',
    },
    {
      title: 'Aerial Silks',
      image: '/WhatsApp Image 2025-10-16 at 09.30.50_dbe469c6.jpg',
    },
    {
      title: 'Aerial Hammock',
      image: '/WhatsApp Image 2025-10-16 at 09.30.53_adbb552c.jpg',
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="w-12 h-px bg-stone-900 mb-8 mx-auto"></div>
          <h2 className="text-4xl lg:text-5xl font-light text-stone-900 mb-6">
            Follow us on social
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="aspect-square bg-stone-200 overflow-hidden mb-4 group cursor-pointer">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-light text-stone-900">{service.title}</h3>
            </div>
          ))}
        </div>

        <div
          className={`text-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="http://wa.me/96170789456"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 border border-stone-900 text-sm text-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300 rounded-full"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 border border-stone-900 text-sm text-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300 rounded-full"
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-32">
          <div
            className={`transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="w-12 h-px bg-stone-900 mb-8"></div>
            <h3 className="text-3xl lg:text-4xl font-light text-stone-900 mb-12">
              Our Services
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            <div
              className={`transition-all duration-1000 delay-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h4 className="text-2xl font-light text-stone-900 mb-4">Aerial Hammock</h4>
              <p className="text-stone-600 mb-4 leading-relaxed">
                Experience the flowing beauty of aerial silk hammock. Learn graceful movements,
                inversions, and stunning poses in a supportive fabric cocoon.
              </p>
              <ul className="space-y-2 text-sm text-stone-600">
                <li>• Beginner to Advanced levels</li>
                <li>• Kids & Adults programs</li>
                <li>• Small class sizes for personalized attention</li>
                <li>• Flexible scheduling options</li>
              </ul>
            </div>

            <div
              className={`transition-all duration-1000 delay-1100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h4 className="text-2xl font-light text-stone-900 mb-4">Aerial Hoop</h4>
              <p className="text-stone-600 mb-4 leading-relaxed">
                Master the elegant art of aerial hoop (lyra). Build strength and artistry while
                learning dynamic spins, poses, and transitions in the air.
              </p>
              <ul className="space-y-2 text-sm text-stone-600">
                <li>• Progressive training methodology</li>
                <li>• All levels welcome</li>
                <li>• Performance preparation</li>
                <li>• Private sessions available</li>
              </ul>
            </div>

            <div
              className={`transition-all duration-1000 delay-1200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h4 className="text-2xl font-light text-stone-900 mb-4">Gymnastics</h4>
              <p className="text-stone-600 mb-4 leading-relaxed">
                Develop foundational skills in gymnastics with professional coaching. Perfect for
                building strength, coordination, and body awareness.
              </p>
              <ul className="space-y-2 text-sm text-stone-600">
                <li>• Youth development programs</li>
                <li>• Adult gymnastics classes</li>
                <li>• Skill-based progression</li>
                <li>• Safe learning environment</li>
              </ul>
            </div>

            <div
              className={`transition-all duration-1000 delay-1300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h4 className="text-2xl font-light text-stone-900 mb-4">Flexibility Training</h4>
              <p className="text-stone-600 mb-4 leading-relaxed">
                Enhance your range of motion with targeted flexibility training. Essential for
                aerial work and beneficial for overall wellness.
              </p>
              <ul className="space-y-2 text-sm text-stone-600">
                <li>• Stretch therapy sessions</li>
                <li>• Active flexibility development</li>
                <li>• Mobility enhancement</li>
                <li>• Personalized programs</li>
              </ul>
            </div>

            <div
              className={`transition-all duration-1000 delay-1400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h4 className="text-2xl font-light text-stone-900 mb-4">Kids Classes</h4>
              <p className="text-stone-600 mb-4 leading-relaxed">
                Specially designed programs for young aerialists. Fun, safe, and engaging classes
                that build confidence and coordination.
              </p>
              <ul className="space-y-2 text-sm text-stone-600">
                <li>• Age-appropriate curriculum</li>
                <li>• Qualified instructors</li>
                <li>• Fun and educational approach</li>
                <li>• Character building activities</li>
              </ul>
            </div>

            <div
              className={`transition-all duration-1000 delay-1500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h4 className="text-2xl font-light text-stone-900 mb-4">Performances</h4>
              <p className="text-stone-600 mb-4 leading-relaxed">
                Book professional aerial performances for your events. Stunning shows that
                captivate audiences and create unforgettable experiences.
              </p>
              <ul className="space-y-2 text-sm text-stone-600">
                <li>• Corporate events</li>
                <li>• Private parties and celebrations</li>
                <li>• Festivals and public events</li>
                <li>• Custom choreography available</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
