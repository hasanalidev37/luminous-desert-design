
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const galleryItems = [
  { id: 1, image: '/images/transformation-1.jpg', alt: 'صورة تحول قبل وبعد' },
  { id: 2, image: '/images/transformation-2.jpg', alt: 'صورة تحول قبل وبعد' },
  { id: 3, image: '/images/transformation-3.jpg', alt: 'صورة تحول قبل وبعد' },
  { id: 4, image: '/images/transformation-4.jpg', alt: 'صورة تحول قبل وبعد' }
];

const TransformationGallery = () => {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-barber-orange">
        <h2 className="section-title text-barber-black">معرض التحولات</h2>
      </div>
      
      <div className="pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="relative">
            <div className="flex overflow-x-auto gap-6 py-4 no-scrollbar">
              {galleryItems.map(item => (
                <div key={item.id} className="gallery-item flex-shrink-0 w-64 md:w-80 aspect-[3/4]">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/placeholder.svg'; 
                    }}
                  />
                </div>
              ))}
            </div>
            
            <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-barber-black/80 text-white p-2 rounded-full">
              <ChevronLeft size={24} />
            </button>
            
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-barber-black/80 text-white p-2 rounded-full">
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="text-center mt-8">
            <Link to="/gallery" className="orange-button">
              عرض المزيد من الأعمال
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationGallery;
