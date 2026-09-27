export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  rating: number;
}

// Empty array to ensure no false or fake client reviews are displayed.
// Real client testimonials can be added here as client reviews are collected.
export const testimonialsData: TestimonialItem[] = [];
