import { BatteryCharging, ClipboardList, Truck } from "lucide-react";

const SERVICES = [
  {
    title: "Battery Reconditioning",
    description:
      "Load testing, equalizing, acid adjustment, and cosmetic restoration to bring used batteries back to life.",
    icon: BatteryCharging,
  },
  {
    title: "Fleet Maintenance",
    description:
      "Scheduled watering, cleaning, and inspections so your team can focus on uptime — not battery upkeep.",
    icon: ClipboardList,
  },
  {
    title: "Delivery & Installation",
    description:
      "We handle delivery, swap-outs, and haul-away of cores within 200 miles of Kansas City.",
    icon: Truck,
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto space-y-10 px-4 py-16">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Services</h1>
        <p className="text-muted-foreground">
          Comprehensive forklift battery services designed for busy warehouses and material handling fleets.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-3">
        {SERVICES.map(({ title, description, icon: Icon }) => (
          <div key={title} className="rounded-xl border bg-card p-6 shadow-sm">
            <Icon className="mb-4 h-10 w-10 text-primary" />
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
