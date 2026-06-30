import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { CatalogGrid } from "@/components/CatalogGrid";
import { getAllProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Каталог",
  description:
    "Кастомные джинсы ручной работы DIFFERENCE. Каждая модель — в одном экземпляре.",
};

export default function CatalogPage({
  searchParams,
}: {
  searchParams: { in?: string };
}) {
  const products = getAllProducts();
  const initialInStockOnly = searchParams?.in === "1";

  return (
    <>
      <PageHeader
        eyebrow="Коллекция"
        title="Каталог"
        lead="Кастомные джинсы ручной работы. Каждая пара существует в одном экземпляре."
      />
      <section className="py-12 md:py-16">
        <Container>
          <CatalogGrid
            products={products}
            initialInStockOnly={initialInStockOnly}
          />
        </Container>
      </section>
    </>
  );
}
