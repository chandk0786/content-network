export const TOOLS_TOPICS = [
  {
    slug: "monthly-expense-calculator",
    title: "Monthly Expense Calculator",
    description: "Estimate your monthly expenses and see where your money goes.",
    toolType: "calculator",
    fields: [
      { key: "rent", label: "Rent", type: "number", placeholder: "20000" },
      { key: "groceries", label: "Groceries", type: "number", placeholder: "8000" },
      { key: "transport", label: "Transport", type: "number", placeholder: "3000" },
      { key: "utilities", label: "Utilities", type: "number", placeholder: "2000" }
    ],
    compute: "sum"
  },
  {
    slug: "savings-goal-planner",
    title: "Savings Goal Planner",
    description: "Plan monthly savings needed to hit your target amount.",
    toolType: "calculator",
    fields: [
      { key: "goal", label: "Target Amount", type: "number", placeholder: "300000" },
      { key: "months", label: "Months", type: "number", placeholder: "12" }
    ],
    compute: "goal_per_month"
  }
];
