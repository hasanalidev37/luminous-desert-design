
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import PageLayout from "@/components/Layout/PageLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageLayout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center section-border max-w-xl">
          <h1 className="text-6xl font-bold mb-4 text-barber-orange">404</h1>
          <p className="text-2xl text-white mb-8">عذراً، الصفحة التي تبحث عنها غير موجودة</p>
          <Link to="/" className="orange-button">
            العودة للصفحة الرئيسية
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;
