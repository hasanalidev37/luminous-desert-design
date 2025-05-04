
import React from 'react';
import PageLayout from '@/components/Layout/PageLayout';
import AppointmentForm from '@/components/Home/AppointmentForm';
import { MapPin, Phone, Calendar } from 'lucide-react';

const Book = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="section-title">احجز موعدك</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="section-border text-center">
            <div className="flex justify-center mb-4">
              <Phone size={40} className="text-barber-orange" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-barber-orange mb-3">اتصل بنا</h3>
            <p className="text-white mb-3">يمكنك حجز موعد عبر الاتصال المباشر</p>
            <a 
              href="tel:0545162003" 
              className="text-barber-orange hover:underline text-xl font-bold block mb-2"
              dir="ltr"
            >
              0545162003
            </a>
            <div className="text-white mt-2">أو عبر الواتساب</div>
            <a 
              href="https://wa.me/966530640121" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-barber-orange hover:underline"
              dir="ltr"
            >
              +966 530 640 121
            </a>
          </div>
          
          <div className="section-border text-center">
            <div className="flex justify-center mb-4">
              <MapPin size={40} className="text-barber-orange" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-barber-orange mb-3">زيارة الصالون</h3>
            <p className="text-white mb-3">يمكنك زيارتنا مباشرة دون موعد مسبق</p>
            <p className="text-white mb-3">شارع غبيرة العام، بجانب إشارة الفرزدق، عمارة الراجحي، الرياض</p>
            <a 
              href="https://maps.app.goo.gl/43rafdhCiehkz16QA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-barber-orange hover:underline"
            >
              عرض الموقع على الخريطة
            </a>
          </div>
          
          <div className="section-border text-center">
            <div className="flex justify-center mb-4">
              <Calendar size={40} className="text-barber-orange" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-barber-orange mb-3">ساعات العمل</h3>
            <p className="text-white mb-3">نفتح أبوابنا يومياً</p>
            <p className="text-white text-xl">من الأحد إلى السبت</p>
            <p className="text-barber-orange font-bold text-xl">12 ظهراً - 2 صباحاً</p>
          </div>
        </div>
        
        <div>
          <AppointmentForm />
        </div>
        
        <div className="mt-16">
          <h2 className="text-3xl font-heading font-bold text-barber-orange mb-6 text-center">موقعنا على الخريطة</h2>
          <div className="aspect-video w-full border-4 border-barber-orange rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.030071892514!2d46.7191538!3d24.6179569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDM4JzM0LjciTiA0NsKwNDQnMjAuNSJF!5e0!3m2!1sen!2sus!4v1620775148929!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy"
              title="موقع صالون السوداني الأنيق"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Book;
