
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-barber-black/90 border-t border-barber-orange py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-heading font-bold text-barber-orange mb-4">معلومات الاتصال</h3>
            <div className="flex items-center justify-center md:justify-end mb-3">
              <MapPin size={20} className="text-barber-orange ml-2" />
              <p className="text-white">شارع غبيرة العام، بجانب إشارة الفرزدق، عمارة الراجحي، الرياض</p>
            </div>
            <div className="flex items-center justify-center md:justify-end mb-3">
              <Phone size={20} className="text-barber-orange ml-2" />
              <p className="text-white" dir="ltr">0545162003</p>
            </div>
            <p className="text-white mb-3">
              الواتساب: <span className="flip-rtl" dir="ltr">00966530640121</span>
            </p>
            <a 
              href="https://maps.app.goo.gl/43rafdhCiehkz16QA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-barber-orange hover:underline"
            >
              شاهد موقعنا على خرائط Google
            </a>
          </div>

          {/* Working Hours */}
          <div className="text-center">
            <h3 className="text-xl font-heading font-bold text-barber-orange mb-4">ساعات العمل</h3>
            <p className="text-white mb-2">نفتح أبوابنا لخدمتكم يومياً:</p>
            <p className="text-white mb-4">من الأحد إلى السبت: 12 ظهراً - 2 صباحاً</p>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-heading font-bold text-barber-orange mb-4">تابعونا على وسائل التواصل الاجتماعي</h3>
            <div className="flex justify-center md:justify-start gap-4 mb-6">
              <a href="https://www.instagram.com/elegantsudanesbarber/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-barber-orange transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://www.tiktok.com/@barberelgant" target="_blank" rel="noopener noreferrer" className="text-white hover:text-barber-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-tiktok">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                </svg>
              </a>
              <a href="https://www.facebook.com/61559650486448" target="_blank" rel="noopener noreferrer" className="text-white hover:text-barber-orange transition-colors">
                <Facebook size={24} />
              </a>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <a href="https://www.snapchat.com/add/elegantsudanese" target="_blank" rel="noopener noreferrer" className="text-white hover:text-barber-orange transition-colors">
                سناب شات: elegantsudanese
              </a>
              <a href="https://www.threads.net/@elegantsudanesbarber" target="_blank" rel="noopener noreferrer" className="text-white hover:text-barber-orange transition-colors">
                ثريدز: @elegantsudanesbarber
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-barber-gray">
            &copy; {new Date().getFullYear()} صالون السوداني الأنيق للحلاقة. جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
