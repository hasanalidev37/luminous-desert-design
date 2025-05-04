
import React from 'react';
import PageLayout from '@/components/Layout/PageLayout';
import HeroSection from '@/components/Home/HeroSection';
import WhyChooseUs from '@/components/Home/WhyChooseUs';
import ServicesPreview from '@/components/Home/ServicesPreview';
import TransformationGallery from '@/components/Home/TransformationGallery';
import ReviewsSection from '@/components/Home/ReviewsSection';
import AppointmentForm from '@/components/Home/AppointmentForm';

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <WhyChooseUs />
      <ServicesPreview />
      <TransformationGallery />
      <ReviewsSection />
      <AppointmentForm />
    </PageLayout>
  );
};

export default Index;
