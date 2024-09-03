import { title, subtitle } from "@/components/primitives";
import Cards from "../components/ui-kits/cards/page";
import Table from "../components/ui-kits/table/page";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Cards />
      <Table />
    </section>
  );
}
