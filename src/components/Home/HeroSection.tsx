
import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      className="min-h-[80vh] flex flex-col justify-center items-center text-center bg-barber-black/70 backdrop-blur-sm py-16 md:py-24"
      style={{
        backgroundImage: "url('/images/hero-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlend: "overlay"
      }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-heading font-bold text-white mb-4">
          <span className="text-barber-orange">صالون</span> السوداني الأنيق
        </h1>
        <p className="text-2xl md:text-3xl text-white mb-8 max-w-3xl mx-auto">
          نرحب بكم في صالون السوداني الأنيق للحلاقة الرجالية والأطفال، وجهتكم المثالية للحصول على أفضل خدمات الحلاقة والعناية الشخصية في الرياض.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Link to="/book" className="orange-button text-xl">
            احجز موعدك الآن
          </Link>
          <Link to="/services" className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-6 rounded transition-colors text-xl">
            استكشف خدماتنا
          </Link>
        </div>

        <div className="flex items-center justify-center mt-12">
          <div className="bg-barber-orange rounded-full p-4">
            <Scissors size={32} className="text-barber-black" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
