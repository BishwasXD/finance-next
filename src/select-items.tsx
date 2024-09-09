import {
  Briefcase,
  CreditCard,
  DollarSign,
  Banknote,
  Coins,
  BarChart2,
  ShoppingCart,
  Home,
  GraduationCap,
  Globe,
  PiggyBank,
  Heart,
  Car,
  Plane,
  Trophy,
  ShoppingBag,
  Utensils,
  Phone,
  Wifi,
  Truck,
  Music,
  BarChart,
  PieChart,
  Building,
  TrendingUp,
  Shield,
  FileText,
  Siren,
} from "lucide-react";
type Category = {
  name: string;
  icon: JSX.Element;
};

type CategoriesOptionsType = {
  Expense : Category[];
  Income: Category[];
  Investment: Category[];
  Saving: Category[];
};

export const CategoriesOptions: CategoriesOptionsType = {
  Expense: [
    { name: "Groceries", icon: <ShoppingBag className="text-green-500" /> },
    { name: "Rent/Mortgage", icon: <Home className="text-orange-600" /> },
    { name: "Utilities", icon: <Wifi className="text-blue-500" /> },
    { name: "Transportation", icon: <Car className="text-teal-500" /> },
    { name: "Travel", icon: <Plane className="text-purple-500" /> },
    { name: "Insurance", icon: <Heart className="text-red-500" /> },
    { name: "Education", icon: <GraduationCap className="text-gray-600" /> },
    { name: "Dining Out", icon: <Utensils className="text-yellow-500" /> },
    { name: "Shopping", icon: <ShoppingCart className="text-pink-500" /> },
    { name: "Phone Bill", icon: <Phone className="text-indigo-500" /> },
    { name: "Subscriptions", icon: <Music className="text-purple-600" /> },
    { name: "Loan Payments", icon: <CreditCard className="text-red-600" /> },
    { name: "Medical Expenses", icon: <Heart className="text-rose-500" /> },
    { name: "Delivery/Shipping", icon: <Truck className="text-blue-600" /> },
    { name: "Taxes", icon: <FileText className="text-gray-500" /> },
  ],
  "Income": [
    { name: "Salary", icon: <Briefcase className="text-blue-500" /> },
    { name: "Freelance", icon: <DollarSign className="text-green-500" /> },
    { name: "Investments", icon: <BarChart2 className="text-indigo-600" /> },
    { name: "Business", icon: <CreditCard className="text-yellow-500" /> },
    { name: "Rental Income", icon: <Home className="text-orange-500" /> },
    { name: "Gifts", icon: <Heart className="text-red-600" /> },
    { name: "Dividends", icon: <Coins className="text-purple-500" /> },
    { name: "Interest", icon: <PiggyBank className="text-pink-500" /> },
    { name: "Royalties", icon: <Banknote className="text-teal-500" /> },
    { name: "Scholarship", icon: <GraduationCap className="text-gray-700" /> },
    { name: "Pension", icon: <Trophy className="text-yellow-500" /> },
    { name: "Sales", icon: <ShoppingCart className="text-lime-600" /> },
    {
      name: "Travel Reimbursements",
      icon: <Plane className="text-cyan-500" />,
    },
    { name: "Global Income", icon: <Globe className="text-blue-600" /> },
    { name: "Car Allowance", icon: <Car className="text-amber-600" /> },
  ],
  "Investment": [
    { name: "Stocks", icon: <BarChart className="text-indigo-600" /> },
    { name: "Mutual Funds", icon: <PieChart className="text-green-500" /> },
    { name: "Real Estate", icon: <Building className="text-orange-600" /> },
    { name: "Bonds", icon: <Banknote className="text-teal-500" /> },
    { name: "Crypto", icon: <TrendingUp className="text-purple-500" /> },
    { name: "Precious Metals", icon: <Coins className="text-yellow-600" /> },
    { name: "Private Equity", icon: <DollarSign className="text-gray-700" /> },
    { name: "Venture Capital", icon: <BarChart2 className="text-blue-500" /> },
    { name: "REITs", icon: <Building className="text-pink-500" /> },
    { name: "Index Funds", icon: <PieChart className="text-lime-500" /> },
  ],
  "Saving": [
    { name: "Emergency Fund", icon: <Siren className="text-red-500" /> },
    {
      name: "Retirement Savings",
      icon: <PiggyBank className="text-yellow-500" />,
    },
    { name: "College Fund", icon: <FileText className="text-blue-500" /> },
    { name: "Vacation Fund", icon: <Briefcase className="text-orange-500" /> },
    { name: "Debt Repayment", icon: <CreditCard className="text-teal-500" /> },
    { name: "Short-term Savings", icon: <Coins className="text-lime-600" /> },
    {
      name: "Long-term Savings",
      icon: <Banknote className="text-indigo-500" />,
    },
    { name: "Health Savings", icon: <Shield className="text-purple-500" /> },
  ],
};
