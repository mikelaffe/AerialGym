import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-neutral-50 pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="mb-8">
              <div className="w-12 h-px bg-stone-900 mb-6"></div>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-light text-stone-900 mb-6 leading-tight">
                Discover Adrenaline at its Pinnacle
              </h1>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="aspect-[4/3] bg-stone-300 overflow-hidden">
              <img
                src="/WhatsApp Image 2025-10-16 at 09.25.56_1ed56114.jpg"
                alt="Aerial acrobatics"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>

        <div
          className={`mt-20 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="w-12 h-px bg-stone-900 mb-8"></div>
          <p className="text-lg text-stone-600 max-w-2xl mb-8 leading-relaxed">
            Master the art of aerial acrobatics with expert instruction in Aerial Hammock, Aerial
            Hoop, Gymnastics, and Flexibility. We offer comprehensive training for all ages and
            skill levels, from complete beginners to advanced performers.
          </p>
          <button
            onClick={() => navigate('/services')}
            className="px-8 py-3 border border-stone-900 text-sm text-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300 rounded-full"
          >
            Explore Classes
          </button>
        </div>
      </div>
    </section>
  );
}
