
import React from 'react';
import PageLayout from '@/components/Layout/PageLayout';
import { Star } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Moez Salih",
      rating: 5,
      comment: "Very clean place, people are very welcoming in there.",
      date: "قبل 5 أشهر"
    },
    {
      id: 2,
      name: "علي عشا",
      rating: 5,
      comment: "مبدعين ومحل مرتب ونظيف واهتمام بالعملا نتمني لكم التوفيق",
      date: "قبل 5 أشهر"
    },
    {
      id: 3,
      name: "MUNTASIR ABDALLA",
      rating: 5,
      comment: "والله من افضل الصوالين السودانية في الرياض ❤️ تعامل اكثر من رائع وصالون مجهز بكل المعدات الحديثة والانتظار مجهز باحتراف ✌️ حبيبنا مصطفى بالتوفيق يا غالي",
      date: "قبل 4 أشهر"
    },
    {
      id: 4,
      name: "hesham kambal",
      rating: 5,
      comment: "ماشاء الله يامصطفى شي مرتب ونظافه الله يوفقكم يارب مبروك المكان الجديد 💚👍",
      date: "قبل 3 أشهر"
    },
    {
      id: 5,
      name: "obai algafari",
      rating: 5,
      comment: "ممتاذ شباب حلوين محل نظيف جديد تحية للأخ مصطفى قمة في الأخلاق بتوفيق دوام التقدم",
      date: "قبل 3 أشهر"
    },
    {
      id: 6,
      name: "سوما عمر",
      rating: 5,
      comment: "افضل صالون في الرياض استطاف ممتاز وتعامل راقي والمكان مريح جدا ومجهز تجهيز حلو جدا ربنا يوفقكم",
      date: "قبل 5 أشهر"
    },
    {
      id: 7,
      name: "MOHAMED SIDEEG ADAM ABDALLAH",
      rating: 5,
      comment: "صالون جميل و نظيف جداً و مرتب و طاقم حلاقين ممتاز عندهم حلاق اطفال رهيب و ممتازين و تعاملهم راقي جداً شكراً 🌹 علي التعامل الراقي",
      date: "قبل 5 أشهر"
    },
    {
      id: 8,
      name: "Khlaid Abdulgader",
      rating: 5,
      comment: "ماشاء الله صالون مميز جدا، حلاقة ونظافة على اعلى مستوى، ياريت نشوف الحلاقين السودانيين بنفس المستوى ده. موفقين جدا",
      date: "قبل 5 أشهر"
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star 
          key={i} 
          size={16} 
          className={i < rating ? "fill-barber-orange text-barber-orange" : "text-gray-400"} 
        />
      );
    }
    return stars;
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="section-title">مراجعات وشهادات العملاء</h1>
        
        <div className="text-center mb-12">
          <p className="text-white text-xl max-w-3xl mx-auto">
            نفخر بتقييم عملائنا المميز البالغ 4.9 من 5، وهذا يعكس التزامنا بتقديم خدمات عالية الجودة وتجربة استثنائية لكل عميل.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map(review => (
            <div key={review.id} className="section-border">
              <div className="flex gap-1 mb-2">
                {renderStars(review.rating)}
              </div>
              <p className="text-white mb-6">"{review.comment}"</p>
              <div className="mt-auto pt-4 border-t border-barber-gray/20">
                <p className="text-barber-orange font-bold">{review.name}</p>
                <p className="text-barber-gray text-sm">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 section-border text-center py-10">
          <h2 className="text-3xl font-heading font-bold text-barber-orange mb-6">أضف رأيك</h2>
          <p className="text-white mb-6">نحن نقدر آراء عملائنا ونسعى دائمًا للتحسين. شاركنا تجربتك مع صالون السوداني الأنيق</p>
          <div className="flex justify-center">
            <a 
              href="https://g.page/r/CeCME3o-QMblEAI/review" 
              target="_blank" 
              rel="noopener noreferrer"
              className="orange-button"
            >
              اكتب تقييم على Google
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Reviews;
