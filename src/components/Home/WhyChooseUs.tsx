
import React from 'react';
import { Star, Users, Scissors, Clock } from 'lucide-react';

const features = [
  {
    id: 1,
    title: "خدمة احترافية",
    description: "فريق متخصص من الحلاقين ذوي الخبرة العالية والمهارات المتميزة",
    icon: <Scissors size={40} className="text-barber-orange" />
  },
  {
    id: 2,
    title: "بيئة نظيفة",
    description: "نهتم بالنظافة والتعقيم لكافة الأدوات والمعدات",
    icon: <Star size={40} className="text-barber-orange" />
  },
  {
    id: 3,
    title: "تعامل راقي",
    description: "نقدم تجربة متكاملة تشمل الاستقبال الحار والخدمة المتميزة",
    icon: <Users size={40} className="text-barber-orange" />
  },
  {
    id: 4,
    title: "ساعات عمل مريحة",
    description: "نفتح أبوابنا يومياً من 12 ظهراً حتى 2 صباحاً",
    icon: <Clock size={40} className="text-barber-orange" />
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-barber-black py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title">لماذا تختارنا؟</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(feature => (
            <div 
              key={feature.id} 
              className="section-border text-center hover:border-white transition-colors duration-300"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-heading font-bold text-barber-orange mb-3">
                {feature.title}
              </h3>
              <p className="text-white">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-block bg-barber-orange text-barber-black px-6 py-3 rounded-full text-2xl font-bold">
            تقييمنا المميز 4.9 من 5 ⭐️
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
