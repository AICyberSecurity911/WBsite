
"use client";

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  quote: string;
  before: string;
  after: string;
  author: string;
  title: string;
  company: string;
  isAnonymized: boolean;
  rating: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (!testimonials?.length) {
    return null;
  }

  const testimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Real Results From Real Leaders
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-white shadow-2xl">
            <CardContent className="p-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl text-gray-700 mb-6 leading-relaxed italic text-center">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-semibold text-red-800 mb-2">Before:</h4>
                  <p className="text-red-700">{testimonial.before}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-800 mb-2">After:</h4>
                  <p className="text-green-700">{testimonial.after}</p>
                </div>
              </div>
              
              <div className="text-center">
                <p className="font-semibold text-gray-900">
                  {testimonial.author}
                  {testimonial.title && `, ${testimonial.title}`}
                </p>
                <p className="text-gray-600">
                  {testimonial.isAnonymized ? `${testimonial.company} (Confidential)` : testimonial.company}
                </p>
              </div>
            </CardContent>
          </Card>

          {testimonials.length > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:bg-gray-50"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:bg-gray-50"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </>
          )}
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials?.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentIndex ? 'bg-yellow-500' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
