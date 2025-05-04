
import React from 'react';
import PageLayout from '@/components/Layout/PageLayout';
import { Scissors } from 'lucide-react';

const Services = () => {
  const hairServices = [
    { 
      id: 1, 
      title: "قصات الشعر العصرية", 
      description: "نواكب أحدث صيحات الموضة العالمية في مجال قصات الشعر، ونقدم مجموعة متنوعة من القصات العصرية التي تتناسب مع مختلف أشكال الوجه وأنواع الشعر.",
      price: "30-50 ريال"
    },
    { 
      id: 2, 
      title: "قصات الشعر الكلاسيكية", 
      description: "للباحثين عن الأناقة التقليدية، نقدم أفضل القصات الكلاسيكية بلمسات عصرية تمنحكم مظهراً أنيقاً ومرتباً يناسب جميع المناسبات.",
      price: "30-40 ريال"
    },
    { 
      id: 3, 
      title: "قصات شعر الأطفال", 
      description: "نقدم خدمات حلاقة خاصة للأطفال في أجواء مريحة وودية، مع فريق متخصص في التعامل مع الأطفال لضمان تجربة ممتعة وخالية من الإزعاج.",
      price: "25 ريال"
    }
  ];

  const beardServices = [
    { 
      id: 1, 
      title: "تشذيب وتصميم اللحية", 
      description: "نقدم خدمات احترافية لتشذيب وتصميم اللحية بدقة عالية، مع مراعاة شكل الوجه وكثافة شعر اللحية لإبراز جمال ملامحكم.",
      price: "20 ريال"
    },
    { 
      id: 2, 
      title: "حلاقة اللحية الكاملة", 
      description: "لمن يفضلون الوجه الأملس، نقدم خدمة حلاقة متقنة تضمن نعومة البشرة وحمايتها من التهيج.",
      price: "15 ريال"
    },
    { 
      id: 3, 
      title: "العناية باللحية", 
      description: "خدمات متكاملة للعناية باللحية تشمل التنظيف العميق والترطيب واستخدام أفضل المنتجات والزيوت الطبيعية.",
      price: "30 ريال"
    }
  ];

  const skinServices = [
    { 
      id: 1, 
      title: "تنظيف البشرة", 
      description: "خدمة متكاملة لتنظيف البشرة وإزالة الرؤوس السوداء وترطيب البشرة للحصول على بشرة نظيفة وصحية.",
      price: "45 ريال"
    },
    { 
      id: 2, 
      title: "الحمام المغربي", 
      description: "تجربة فريدة للاسترخاء والعناية بالبشرة، متوفرة في صالوننا لتمنحكم نظافة عميقة وبشرة متجددة.",
      price: "80 ريال"
    }
  ];

  const ServiceSection = ({ title, services }: { title: string, services: any[] }) => (
    <div className="mb-16">
      <h2 className="text-3xl font-heading font-bold text-barber-orange mb-8">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(service => (
          <div key={service.id} className="section-border hover:border-barber-orange transition-colors">
            <h3 className="text-2xl font-heading font-bold text-white mb-2">{service.title}</h3>
            <p className="text-barber-gray mb-4">{service.description}</p>
            <div className="mt-auto pt-4 border-t border-barber-gray/30">
              <span className="text-barber-orange font-bold text-xl">{service.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="section-title">خدماتنا المتميزة</h1>
        
        <div className="text-center mb-12">
          <p className="text-white text-xl max-w-3xl mx-auto">
            نقدم في صالون السوداني الأنيق مجموعة متكاملة من خدمات الحلاقة والعناية الشخصية التي تلبي احتياجات جميع عملائنا بمختلف أعمارهم وأذواقهم.
          </p>
        </div>
        
        <ServiceSection title="خدمات قصات الشعر" services={hairServices} />
        
        <div className="flex justify-center my-12">
          <div className="bg-barber-orange rounded-full p-4">
            <Scissors size={32} className="text-barber-black" />
          </div>
        </div>
        
        <ServiceSection title="خدمات اللحية" services={beardServices} />
        
        <div className="flex justify-center my-12">
          <div className="bg-barber-orange rounded-full p-4">
            <Scissors size={32} className="text-barber-black" />
          </div>
        </div>
        
        <ServiceSection title="خدمات العناية بالبشرة" services={skinServices} />
        
        <div className="section-border mt-16">
          <h2 className="text-3xl font-heading font-bold text-barber-orange mb-6">المنتجات المتوفرة</h2>
          <p className="text-white mb-6">
            نوفر في صالون حلاق السوداني الأنيق مجموعة متميزة من المنتجات المختارة بعناية:
          </p>
          <ul className="text-white space-y-3 mr-6">
            <li>كريمات ما بعد الحلاقة والكولونيا</li>
            <li>منتجات العناية بالشعر واللحية</li>
            <li>ماكينات التنعيم وماكينات المحترفين للزيرو</li>
            <li>براندات مختارة بعناية لضمان أفضل النتائج</li>
          </ul>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="border border-barber-orange rounded-lg overflow-hidden">
              <img 
                src="/images/products-1.jpg" 
                alt="منتجات الصالون" 
                className="w-full h-48 object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/placeholder.svg'; 
                }}
              />
            </div>
            <div className="border border-barber-orange rounded-lg overflow-hidden">
              <img 
                src="/images/products-2.jpg" 
                alt="منتجات الصالون" 
                className="w-full h-48 object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/placeholder.svg'; 
                }}
              />
            </div>
            <div className="border border-barber-orange rounded-lg overflow-hidden">
              <img 
                src="/images/products-3.jpg" 
                alt="منتجات الصالون" 
                className="w-full h-48 object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/placeholder.svg'; 
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Services;
