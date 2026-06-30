import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { ReviewCard } from "@/components/ReviewCard";
import { getAllReviews } from "@/lib/reviews";

export const metadata: Metadata = {
  title: "Отзывы",
  description: "Отзывы покупателей DIFFERENCE о кастомных джинсах ручной работы.",
};

export default function ReviewsPage() {
  const reviews = getAllReviews();

  return (
    <>
      <PageHeader
        eyebrow="Кто уже носит"
        title="Отзывы"
        lead="Несколько слов от тех, кто уже совершал у нас заказ."
      />
      <section className="py-12 md:py-16">
        <Container>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {reviews.map((review) => (
              <li key={review.id}>
                <ReviewCard review={review} />
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
