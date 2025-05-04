
import React from 'react';
import PageLayout from '@/components/Layout/PageLayout';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  // FAQ items grouped by category
  const faqItems = [
    {
      category: "حول المواعيد والزيارة",
      questions: [
        {
          id: 1,
          question: "ما هي ساعات عمل الصالون؟",
          answer: "صالون حلاق السوداني الأنيق يفتح أبوابه يومياً من الساعة 12 ظهراً حتى الساعة 2 صباحاً."
        },
        {
          id: 2,
          question: "هل يلزم الحجز المسبق؟",
          answer: "لا يلزم الحجز المسبق، يمكنكم زيارتنا مباشرة في أي وقت خلال ساعات العمل. ومع ذلك، يفضل الاتصال بنا في أوقات الذروة للتأكد من توفر الخدمة دون انتظار طويل."
        },
        {
          id: 3,
          question: "هل يمكنني إحضار طفلي للحلاقة؟",
          answer: "بالتأكيد، نحن نقدم خدمات حلاقة خاصة للأطفال في بيئة مريحة، ولدينا فريق متخصص في التعامل معهم بلطف واحترافية."
        }
      ]
    },
    {
      category: "حول الخدمات",
      questions: [
        {
          id: 4,
          question: "ما هي الخدمات الرئيسية التي تقدمونها؟",
          answer: "نقدم مجموعة متكاملة من خدمات الحلاقة تشمل قص الشعر، تشذيب وتصميم اللحية، خدمات العناية بالبشرة، الحمام المغربي، بالإضافة إلى خدمات خاصة للأطفال."
        },
        {
          id: 5,
          question: "هل توفرون منتجات العناية بالشعر واللحية؟",
          answer: "نعم، نوفر مجموعة مختارة من أفضل منتجات العناية بالشعر واللحية، بالإضافة إلى ماكينات الحلاقة وكريمات ما بعد الحلاقة والكولونيا."
        },
        {
          id: 6,
          question: "كم تستغرق خدمة قص الشعر واللحية؟",
          answer: "تستغرق خدمة قص الشعر عادة حوالي 30-45 دقيقة، وتشذيب اللحية حوالي 15-20 دقيقة، وتعتمد المدة على نوع القصة والخدمة المطلوبة."
        }
      ]
    },
    {
      category: "حول الصالون",
      questions: [
        {
          id: 7,
          question: "ما هي إجراءات النظافة والتعقيم المتبعة في الصالون؟",
          answer: "نلتزم بأعلى معايير النظافة والتعقيم، حيث نقوم بتعقيم جميع الأدوات بعد كل استخدام، واستخدام فوط نظيفة لكل عميل، بالإضافة إلى التنظيف المستمر للصالون والكراسي."
        },
        {
          id: 8,
          question: "هل تقدمون خدمات للمناسبات الخاصة؟",
          answer: "نعم، يمكننا تقديم خدمات خاصة للمناسبات مثل الأعراس والمناسبات المهمة، يرجى التواصل معنا مسبقاً للترتيب."
        },
        {
          id: 9,
          question: "هل لديكم مواقف سيارات؟",
          answer: "نعم، يتوفر مواقف للسيارات بالقرب من الصالون."
        }
      ]
    }
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="section-title">الأسئلة الشائعة</h1>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((category, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-barber-orange mb-6">
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map(item => (
                  <details 
                    key={item.id} 
                    className="section-border cursor-pointer group"
                  >
                    <summary className="flex justify-between items-center text-xl font-bold text-white outline-none">
                      {item.question}
                      <ChevronDown className="transform group-open:rotate-180 transition-transform text-barber-orange" size={20} />
                    </summary>
                    <div className="mt-4 text-barber-gray border-t border-barber-gray/20 pt-4">
                      {item.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
          
          <div className="text-center mt-16 p-8 section-border">
            <h2 className="text-2xl font-heading font-bold text-barber-orange mb-4">لديك سؤال آخر؟</h2>
            <p className="text-white mb-6">نسعد بتواصلكم معنا واستفساراتكم، ونرحب بزيارتكم في صالوننا</p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <a 
                href="tel:0545162003" 
                className="orange-button text-center"
              >
                اتصل بنا
              </a>
              <a 
                href="https://wa.me/966530640121" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-6 rounded transition-colors text-center"
              >
                تواصل عبر واتساب
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default FAQ;
