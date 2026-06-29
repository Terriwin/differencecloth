import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { ReviewCard } from "@/components/ReviewCard";
import { OrderButton } from "@/components/OrderButton";
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
        lead="Несколько слов от тех, кто уже забрал свою пару."
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

          <div className="mt-16 flex flex-col items-start gap-4 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-base text-secondary">
              Хотите такую же? Напишите нам — обсудим крой и роспись под вас.
            </p>
            <OrderButton size="lg" />
          </div>
        </Container>
      </section>
    </>
  );
}
