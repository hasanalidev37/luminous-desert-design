
import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors } from 'lucide-react';

const serviceItems = [
  {
    id: 1,
    title: "قصة شعر",
    price: "30 ريال",
    icon: "✂️",
    duration: "30-40 دقيقة"
  },
  {
    id: 2,
    title: "حلاقة لحية",
    price: "20 ريال",
    icon: "🪒",
    duration: "15-20 دقيقة"
  },
  {
    id: 3,
    title: "قص شعر أطفال",
    price: "25 ريال",
    icon: "👦",
    duration: "20-30 دقيقة"
  },
  {
    id: 4,
    title: "حمام مغربي",
    price: "80 ريال",
    icon: "🧖‍♂️",
    duration: "60 دقيقة"
  },
  {
    id: 5,
    title: "تنظيف بشرة",
    price: "45 ريال",
    icon: "👨",
    duration: "30-45 دقيقة"
  },
  {
    id: 6,
    title: "حلاقة كاملة",
    price: "50 ريال",
    icon: "💈",
    duration: "45-60 دقيقة"
  }
];

const ServicesPreview = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-title">خدماتنا المميزة</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map(service => (
            <div key={service.id} className="service-card hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-3">{service.icon}</div>
              <h3 className="text-2xl font-heading font-bold text-barber-orange mb-2">{service.title}</h3>
              <p className="text-white text-xl mb-1">{service.price}</p>
              <p className="text-barber-gray mb-4">{service.duration}</p>
              <Link to="/services" className="text-barber-orange hover:underline text-sm">
                المزيد من التفاصيل
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link to="/services" className="orange-button">
            عرض جميع الخدمات
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
