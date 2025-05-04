
import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const reviews = [
  {
    id: 1,
    name: "محمد صديق آدم عبدالله",
    rating: 5,
    comment: "صالون جميل و نظيف جداً و مرتب و طاقم حلاقين ممتاز عندهم حلاق اطفال رهيب و ممتازين و تعاملهم راقي جداً شكراً على التعامل الراقي",
    date: "قبل 4 أشهر"
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
    name: "منتصر عبدالله",
    rating: 5,
    comment: "والله من افضل الصوالين السودانية في الرياض ❤️ تعامل اكثر من رائع وصالون مجهز بكل المعدات الحديثة",
    date: "قبل 4 أشهر"
  }
];

const ReviewsSection = () => {
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
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-title">آراء العملاء</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map(review => (
            <div key={review.id} className="section-border">
              <div className="flex gap-1 mb-2">
                {renderStars(review.rating)}
              </div>
              <p className="text-white mb-4">"{review.comment}"</p>
              <div className="mt-auto">
                <p className="text-barber-orange font-bold">{review.name}</p>
                <p className="text-barber-gray text-sm">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link to="/reviews" className="orange-button">
            المزيد من آراء العملاء
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
