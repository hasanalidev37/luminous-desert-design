
import React, { useState } from 'react';
import { Scissors } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AppointmentForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.phone || !formData.service || !formData.date || !formData.time) {
      toast({
        title: "خطأ",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive"
      });
      return;
    }

    // In a real app, this would send the data to a backend
    console.log("Appointment form submitted:", formData);
    
    toast({
      title: "تم الإرسال",
      description: "تم حجز موعدك بنجاح! سنتواصل معك قريباً لتأكيد الموعد.",
    });

    // Reset form
    setFormData({
      name: '',
      phone: '',
      service: '',
      date: '',
      time: ''
    });
  };

  return (
    <section className="section-padding bg-barber-orange">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="bg-barber-black rounded-full p-4">
              <Scissors size={32} className="text-barber-orange" />
            </div>
          </div>
          
          <h2 className="section-title text-barber-black">احجز موعدك الآن</h2>
          
          <form onSubmit={handleSubmit} className="bg-barber-black/90 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">الاسم</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-barber-wood/30 text-white border border-barber-orange p-3 rounded"
                  placeholder="الاسم الكامل"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-white mb-2">رقم الهاتف</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-barber-wood/30 text-white border border-barber-orange p-3 rounded"
                  placeholder="05xxxxxxxx"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-white mb-2">الخدمة</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-barber-wood/30 text-white border border-barber-orange p-3 rounded"
                >
                  <option value="">اختر الخدمة</option>
                  <option value="haircut">قصة شعر</option>
                  <option value="beard">حلاقة لحية</option>
                  <option value="kids">قصة شعر للأطفال</option>
                  <option value="moroccan-bath">حمام مغربي</option>
                  <option value="facial">تنظيف بشرة</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="date" className="block text-white mb-2">التاريخ</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-barber-wood/30 text-white border border-barber-orange p-3 rounded"
                />
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="time" className="block text-white mb-2">الوقت</label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full bg-barber-wood/30 text-white border border-barber-orange p-3 rounded"
                >
                  <option value="">اختر الوقت</option>
                  <option value="12:00">12:00 مساءً</option>
                  <option value="13:00">1:00 مساءً</option>
                  <option value="14:00">2:00 مساءً</option>
                  <option value="15:00">3:00 مساءً</option>
                  <option value="16:00">4:00 مساءً</option>
                  <option value="17:00">5:00 مساءً</option>
                  <option value="18:00">6:00 مساءً</option>
                  <option value="19:00">7:00 مساءً</option>
                  <option value="20:00">8:00 مساءً</option>
                  <option value="21:00">9:00 مساءً</option>
                  <option value="22:00">10:00 مساءً</option>
                  <option value="23:00">11:00 مساءً</option>
                  <option value="00:00">12:00 صباحاً</option>
                  <option value="01:00">1:00 صباحاً</option>
                </select>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button type="submit" className="bg-barber-orange hover:bg-barber-darkOrange text-barber-black font-bold py-3 px-8 rounded-lg text-xl transition-colors">
                تأكيد الحجز
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
