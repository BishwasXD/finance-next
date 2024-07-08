interface PreferencesOption {
  category: string;
  id: string;
  checked: boolean;
}

export const expensePreferencesOptions: PreferencesOption[] = [
  { category: "Groceries", id: "1", checked: false },
  { category: "Bills", id: "2", checked: false },
  { category: "Rent", id: "3", checked: false },
  { category: "Transport", id: "4", checked: false },
  { category: "Health", id: "5", checked: false },
  { category: "Entertainment", id: "6", checked: false },
  { category: "Dining Out", id: "7", checked: false },
  { category: "Education", id: "8", checked: false },
  { category: "Shopping", id: "9", checked: false },
  { category: "Travel", id: "10", checked: false },
];

export const incomePreferencesOptions: PreferencesOption[] = [
  { category: "Salary", id: "1", checked: false },
  { category: "Freelancing", id: "2", checked: false },
  { category: "Investments", id: "3", checked: false },
  { category: "Rental Income", id: "4", checked: false },
  { category: "Business", id: "5", checked: false },
  { category: "Dividends", id: "6", checked: false },
  { category: "Royalties", id: "7", checked: false },
  { category: "Grants", id: "8", checked: false },
  { category: "Gifts", id: "9", checked: false },
  { category: "Other", id: "10", checked: false },
];

export const budgetPreferncesOptions = [
    'Weekly',
    'Monthly',
    'Semi-Anually',
    'Anually'
]