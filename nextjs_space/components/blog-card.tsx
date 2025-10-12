
// components/blog-card.tsx
import React from "react";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  summary: string;
  link: string;
}

export function BlogCard({ title, summary, link }: BlogCardProps) {
  return (
    <Link
      href={link}
      className="block border border-amber-100 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:border-amber-300"
    >
      <h3 className="font-semibold text-xl mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{summary}</p>
      <div className="mt-4 text-amber-600 font-medium inline-flex items-center">
        Read more →
      </div>
    </Link>
  );
}

export default BlogCard;
