"use client";
import React from "react";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Gemma Nolen",
    company: "Google",
    review:
      "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    stars: 5,
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Alex Smith",
    company: "Facebook",
    review:
      "Really loved the UI design and how responsive everything is. Great job!",
    stars: 4,
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Maria Garcia",
    company: "Amazon",
    review:
      "Smooth animations and clean code. Would definitely recommend using it.",
    stars: 5,
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "John Doe",
    company: "Netflix",
    review:
      "Nice layout and well-structured code. Easy to integrate.",
    stars: 4,
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

export default function ClientReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const currentReview = reviews[currentIndex];

  return (
    <div className="bg-white py-10 px-4 md:px-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-blue-600">Client Reviews</h2>
        <div>
          <button
            className="text-gray-500 p-2 rounded-full hover:bg-gray-200"
            onClick={handleNext}
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Common View for All Screens */}
      <div className="flex justify-center">
        <div className="w-full md:max-w-lg">
          <div className="p-4 border border-blue-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
            <p className="text-gray-700 mb-4">{currentReview.review}</p>
            <div className="flex items-center gap-4">
              <img
                src={currentReview.avatar}
                alt={currentReview.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h4 className="font-semibold text-blue-600">{currentReview.name}</h4>
                <p className="text-sm text-gray-500">{currentReview.company}</p>
                <div className="text-yellow-500 text-sm">
                  {"★".repeat(currentReview.stars)}
                  {"☆".repeat(5 - currentReview.stars)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* See More Button Centered */}
      <div className="mt-8 flex justify-center">
        <button className="bg-[#008EAA] rounded-md p-[10px] text-white">See More</button>
      </div>
    </div>
  );
}
