import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function InventoryPage() {
  return (
    <div className="container mx-auto space-y-8 px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight">Inventory</h1>
      <p className="text-muted-foreground">
        Browse our current lineup of reconditioned forklift batteries. Availability changes daily — reach out for the latest stock list.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {[
          {
            item: "36V Reconditioned",
            desc: "Ideal for medium-duty forklifts. Load-tested, cleaned, and backed by written condition notes.",
          },
          {
            item: "48V High Capacity",
            desc: "For high-usage operations that need longer run time and dependable performance over full shifts.",
          },
          {
            item: "24V Pallet Jack",
            desc: "Reliable replacement options for pallet jacks and lighter warehouse equipment.",
          },
        ].map((row) => (
          <div key={row.item} className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="relative mb-4 aspect-video overflow-hidden rounded-lg border border-border">
              <Image
                src="/images/generated/forklift-inventory-48v.png"
                alt="Forklift battery inventory"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <h2 className="text-xl font-semibold">{row.item}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{row.desc}</p>
            <Button className="mt-4" variant="outline" asChild>
              <Link href="/contact">Request Details</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
