import { useState, useEffect, useRef } from 'react';
import { CheckCircle, MessageCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    preferredDate: '',
    message: '',
  });
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('contact_submissions').insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          subject: formData.subject,
          preferred_date: formData.preferredDate || null,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        preferredDate: '',
        message: '',
      });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section ref={sectionRef} className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="w-12 h-px bg-stone-900 mb-8"></div>
            <h2 className="text-4xl lg:text-5xl font-light text-stone-900 mb-8 leading-tight">
              Get in Touch
            </h2>
            <p className="text-lg text-stone-600 mb-12 leading-relaxed">
              Send us a message and we'll get back to you as soon as possible. We'd love to
              hear from you about classes, performances, and special events.
            </p>

            <div className="space-y-8 mb-12">
              <div>
                <h3 className="text-sm font-medium text-stone-900 mb-2 uppercase tracking-wide">
                  Contact
                </h3>
                <p className="text-stone-600">aerial@email.com</p>
                <p className="text-stone-600">+961 70 789 456</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-stone-900 mb-2 uppercase tracking-wide">
                  Location
                </h3>
                <p className="text-stone-600">Horsh Tabet, Lebanon</p>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {submitSuccess ? (
              <div className="py-20 text-center">
                <CheckCircle className="w-16 h-16 text-stone-900 mx-auto mb-4" />
                <h3 className="text-2xl font-light text-stone-900 mb-2">Message Sent!</h3>
                <p className="text-stone-600">
                  Thank you for reaching out. We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-stone-900 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-stone-300 text-stone-900 placeholder-stone-400 focus:border-stone-900 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-stone-900 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-stone-300 text-stone-900 placeholder-stone-400 focus:border-stone-900 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm text-stone-900 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-stone-300 text-stone-900 placeholder-stone-400 focus:border-stone-900 focus:outline-none transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm text-stone-900 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-stone-300 text-stone-900 focus:border-stone-900 focus:outline-none transition-colors"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Class Registration">Class Registration</option>
                    <option value="Performance Booking">Performance Booking</option>
                    <option value="Private Lessons">Private Lessons</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {(formData.subject === 'Performance Booking' ||
                  formData.subject === 'Private Lessons') && (
                  <div
                    className="transition-all duration-300 ease-in-out"
                    style={{
                      animation: 'fadeIn 0.3s ease-in-out',
                    }}
                  >
                    <label htmlFor="preferredDate" className="block text-sm text-stone-900 mb-2">
                      Preferred Booking Date
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 bg-white border border-stone-300 text-stone-900 focus:border-stone-900 focus:outline-none transition-colors"
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="message" className="block text-sm text-stone-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white border border-stone-300 text-stone-900 placeholder-stone-400 focus:border-stone-900 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your interest..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-3 border border-stone-900 text-sm text-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>

                <div className="pt-4 border-t border-stone-200">
                  <a
                    href="http://wa.me/96170789456"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 border border-stone-900 text-sm text-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300 rounded-full"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Contact us on WhatsApp
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
