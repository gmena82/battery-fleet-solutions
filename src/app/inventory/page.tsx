import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function InventoryPage() {
  return (
    <div className="container mx-auto space-y-8 px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight">Inventory</h1>
      <p className="text-muted-foreground">
        Browse our current lineup of reconditioned forklift batteries. Availability changes daily — reach out for the latest stock list.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {["36V Reconditioned", "48V High Capacity", "24V Pallet Jack"].map((item) => (
          <div key={item} className="rounded-xl border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold">{item}</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Placeholder description and specs. Add actual inventory data once connected to your database or CMS.
            </p>
            <Button className="mt-4" variant="outline" asChild>
              <Link href="/contact">Request Details</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
