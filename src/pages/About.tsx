
import React from 'react';
import PageLayout from '@/components/Layout/PageLayout';
import { Scissors } from 'lucide-react';

const About = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="section-title">نبذة عن الصالون</h1>
        
        <div className="section-border mb-16">
          <h2 className="text-3xl font-heading font-bold text-barber-orange mb-6">قصة صالون السوداني الأنيق</h2>
          
          <p className="text-white text-lg mb-6">
            تأسس صالون السوداني الأنيق للحلاقة لتقديم تجربة حلاقة متميزة تجمع بين الاحترافية والراحة. يضم صالوننا نخبة من الحلاقين السودانيين المحترفين الذين يتمتعون بخبرة واسعة في مجال الحلاقة والعناية الشخصية.
          </p>
          
          <p className="text-white text-lg mb-6">
            نهدف إلى الارتقاء بمستوى خدمات الحلاقة في الرياض من خلال توفير بيئة نظيفة ومريحة، واستخدام أفضل المنتجات وأدوات الحلاقة المعقمة، لنضمن لكم تجربة متميزة في كل زيارة.
          </p>
          
          <div className="flex justify-center my-8">
            <div className="bg-barber-orange rounded-full p-4">
              <Scissors size={32} className="text-barber-black" />
            </div>
          </div>
          
          <h2 className="text-3xl font-heading font-bold text-barber-orange mb-6">رؤيتنا</h2>
          
          <p className="text-white text-lg mb-8">
            نسعى لأن نكون الوجهة الأولى والمفضلة لخدمات الحلاقة الرجالية في الرياض، من خلال تقديم خدمات متميزة تلبي احتياجات وتطلعات عملائنا بأعلى مستويات الجودة والاحترافية.
          </p>
          
          <h2 className="text-3xl font-heading font-bold text-barber-orange mb-6">قيمنا</h2>
          
          <ul className="text-white text-lg space-y-4 mr-6 mb-8">
            <li><span className="text-barber-orange font-bold">الاحترافية:</span> الالتزام بأعلى معايير الأداء في تقديم خدماتنا</li>
            <li><span className="text-barber-orange font-bold">النظافة:</span> الاهتمام بنظافة وتعقيم المكان والأدوات</li>
            <li><span className="text-barber-orange font-bold">الاهتمام بالعميل:</span> جعل رضا العميل أولوية قصوى ومحور اهتمامنا</li>
            <li><span className="text-barber-orange font-bold">التطوير المستمر:</span> مواكبة أحدث صيحات وتقنيات الحلاقة والعناية الشخصية</li>
            <li><span className="text-barber-orange font-bold">الأمانة:</span> الالتزام بالمصداقية والشفافية في تعاملاتنا</li>
          </ul>
          
          <h2 className="text-3xl font-heading font-bold text-barber-orange mb-6">بيئة الصالون</h2>
          
          <p className="text-white text-lg mb-6">
            يتميز صالون السوداني الأنيق بتصميمه الأنيق والمريح الذي يوفر أجواء هادئة ومريحة لجميع العملاء. حرصنا على تجهيز الصالون بأحدث الادوات والمعدات لضمان تجربة مريحة، كما يتوفر منطقة انتظار مجهزة بوسائل الراحة والترفيه.
          </p>
          
          <p className="text-white text-lg">
            نولي اهتماماً خاصاً بالأطفال، حيث خصصنا لهم منطقة ملائمة تجعل تجربة الحلاقة لديهم ممتعة وخالية من الإزعاج.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="gallery-item h-72">
            <img 
              src="/images/salon-1.jpg" 
              alt="صورة للصالون" 
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/placeholder.svg'; 
              }}
            />
          </div>
          <div className="gallery-item h-72">
            <img 
              src="/images/salon-2.jpg" 
              alt="صورة للصالون" 
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/placeholder.svg'; 
              }}
            />
          </div>
          <div className="gallery-item h-72">
            <img 
              src="/images/salon-3.jpg" 
              alt="صورة للصالون" 
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/placeholder.svg'; 
              }}
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
