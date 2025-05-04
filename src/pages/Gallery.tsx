
import React from 'react';
import PageLayout from '@/components/Layout/PageLayout';

const Gallery = () => {
  // Gallery categories
  const categories = [
    { id: "haircuts", label: "قصات الشعر" },
    { id: "beards", label: "تصميمات اللحية" },
    { id: "transformations", label: "التحولات" },
    { id: "salon", label: "الصالون" }
  ];

  // Sample gallery items
  const galleryItems = [
    { id: 1, category: "haircuts", image: "/images/haircut-1.jpg", alt: "قصة شعر عصرية" },
    { id: 2, category: "haircuts", image: "/images/haircut-2.jpg", alt: "قصة شعر كلاسيكية" },
    { id: 3, category: "haircuts", image: "/images/haircut-3.jpg", alt: "قصة شعر للأطفال" },
    { id: 4, category: "beards", image: "/images/beard-1.jpg", alt: "تشذيب لحية" },
    { id: 5, category: "beards", image: "/images/beard-2.jpg", alt: "تصميم لحية" },
    { id: 6, category: "transformations", image: "/images/transformation-1.jpg", alt: "تحول قبل وبعد" },
    { id: 7, category: "transformations", image: "/images/transformation-2.jpg", alt: "تحول قبل وبعد" },
    { id: 8, category: "transformations", image: "/images/transformation-3.jpg", alt: "تحول قبل وبعد" },
    { id: 9, category: "transformations", image: "/images/transformation-4.jpg", alt: "تحول قبل وبعد" },
    { id: 10, category: "salon", image: "/images/salon-1.jpg", alt: "صورة للصالون" },
    { id: 11, category: "salon", image: "/images/salon-2.jpg", alt: "صورة للصالون" },
    { id: 12, category: "salon", image: "/images/salon-3.jpg", alt: "صورة للصالون" }
  ];

  const [activeCategory, setActiveCategory] = React.useState<string>("all");

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="section-title">معرض الأعمال</h1>
        
        <div className="text-center mb-8">
          <p className="text-white text-xl max-w-3xl mx-auto">
            نقدم لكم مجموعة من أعمالنا المميزة التي تعكس جودة وإبداع خدماتنا في صالون السوداني الأنيق. تصفحوا صور قصات الشعر المختلفة وتصميمات اللحية التي ننفذها بأيدي حلاقينا المحترفين.
          </p>
        </div>
        
        {/* Gallery filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            className={`py-2 px-6 rounded-full text-lg ${activeCategory === "all" ? "bg-barber-orange text-barber-black" : "bg-barber-black text-white hover:bg-barber-orange hover:text-barber-black"} transition-colors`}
            onClick={() => setActiveCategory("all")}
          >
            الكل
          </button>
          
          {categories.map(cat => (
            <button 
              key={cat.id}
              className={`py-2 px-6 rounded-full text-lg ${activeCategory === cat.id ? "bg-barber-orange text-barber-black" : "bg-barber-black text-white hover:bg-barber-orange hover:text-barber-black"} transition-colors`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
        
        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div key={item.id} className="gallery-item h-80 transform hover:scale-105 transition-transform">
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
      </div>
    </PageLayout>
  );
};

export default Gallery;
