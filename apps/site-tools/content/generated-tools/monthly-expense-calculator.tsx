import React, { useMemo, useState } from "react";
import { Button, Card, CardContent, CardHeader } from "ui";

type Field = { key: string; label: string; type: "number" | "text"; placeholder?: string };

const FIELDS: Field[] = [
  {
    "key": "rent",
    "label": "Rent",
    "type": "number",
    "placeholder": "20000"
  },
  {
    "key": "groceries",
    "label": "Groceries",
    "type": "number",
    "placeholder": "8000"
  },
  {
    "key": "transport",
    "label": "Transport",
    "type": "number",
    "placeholder": "3000"
  },
  {
    "key": "utilities",
    "label": "Utilities",
    "type": "number",
    "placeholder": "2000"
  }
];

function toNum(v: string) {
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
}

export default function Tool() {
  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(FIELDS.map(f => [f.key, ""]))
  );

  const result = useMemo(() => {
    const nums = Object.fromEntries(Object.entries(values).map(([k,v]) => [k, toNum(v)]));
    const compute = "sum";

    if (compute === "sum") {
      return Object.values(nums).reduce((a,b)=>a+b, 0);
    }
    if (compute === "goal_per_month") {
      const goal = nums.goal || 0;
      const months = Math.max(nums.months || 1, 1);
      return Math.ceil(goal / months);
    }
    if (compute === "car_cost") {
      const monthlyKm = nums.monthly_km || 0;
      const mileage = Math.max(nums.mileage || 1, 1);
      const fuelPrice = nums.fuel_price || 0;

      const fuelLitersMonthly = monthlyKm / mileage;
      const fuelCostYear = fuelLitersMonthly * fuelPrice * 12;

      const insurance = nums.insurance_year || 0;
      const service = nums.service_year || 0;

      return Math.round(fuelCostYear + insurance + service);
    }
    return 0;
  }, [values]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Card>
        <CardHeader>
          <h1 className="text-2xl font-semibold">"Monthly Expense Calculator"</h1>
          <p className="text-sm text-gray-600 mt-2">"Estimate your monthly expenses and see where your money goes."</p>
        </CardHeader>

        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            {FIELDS.map((f) => (
              <label key={f.key} className="block">
                <div className="text-sm font-medium text-gray-800">{f.label}</div>
                <input
                  className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10"
                  inputMode={f.type === "number" ? "numeric" : "text"}
                  placeholder={f.placeholder || ""}
                  value={values[f.key] ?? ""}
                  onChange={(e) => setValues((p) => ({ ...p, [f.key]: e.target.value }))}
                />
              </label>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-gray-50 p-5 border border-gray-100">
            <div className="text-sm text-gray-600">Result</div>
            <div className="text-3xl font-semibold mt-1">₹{result.toLocaleString("en-IN")}</div>
            <p className="text-xs text-gray-500 mt-2">
              This is an estimate. For decisions, verify with real bills/quotes.
            </p>
          </div>

          <div className="mt-6 flex gap-3">
            <Button onClick={() => setValues(Object.fromEntries(FIELDS.map(f => [f.key, ""])))}>
              Reset
            </Button>
            <Button variant="secondary" onClick={() => navigator.clipboard?.writeText(String(result))}>
              Copy result
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
