export const CONSUMER_TOPICS = [
  {
    slug: "car-ownership-cost-calculator",
    title: "Car Ownership Cost Calculator",
    description: "Estimate the annual cost of owning a car including fuel, insurance and maintenance.",
    toolType: "calculator",
    fields: [
      { key: "monthly_km", label: "Monthly KM", type: "number", placeholder: "800" },
      { key: "mileage", label: "Mileage (km/l)", type: "number", placeholder: "15" },
      { key: "fuel_price", label: "Fuel Price (₹/l)", type: "number", placeholder: "105" },
      { key: "insurance_year", label: "Insurance (₹/year)", type: "number", placeholder: "12000" },
      { key: "service_year", label: "Maintenance (₹/year)", type: "number", placeholder: "15000" }
    ],
    compute: "car_cost"
  },
  {
    slug: "hatchback-vs-suv",
    title: "Hatchback vs SUV: Which One Should You Buy?",
    description: "A practical comparison of hatchbacks vs SUVs for city use, highway comfort and costs.",
    toolType: "articleOnly"
  }
];
