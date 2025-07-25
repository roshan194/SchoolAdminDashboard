import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Presentation, Calendar, TrendingUp } from "lucide-react";

const stats = [
  {
    title: "Total Students",
    value: "1,234",
    change: "+5.2% from last month",
    changeType: "positive" as const,
    icon: Users,
    color: "blue",
  },
  {
    title: "Total Teachers",
    value: "89",
    change: "+2 new this month",
    changeType: "positive" as const,
    icon: Presentation,
    color: "emerald",
  },
  {
    title: "Active Events",
    value: "12",
    change: "3 upcoming this week",
    changeType: "neutral" as const,
    icon: Calendar,
    color: "amber",
  },
  {
    title: "Attendance Rate",
    value: "94.2%",
    change: "Above target",
    changeType: "positive" as const,
    icon: TrendingUp,
    color: "purple",
  },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400",
  emerald: "bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400",
  amber: "bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-400",
  purple: "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400",
};

export function DashboardCards() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -4 }}
        >
          <Card className="transition-shadow hover:shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p
                    className={`mt-1 text-sm ${
                      stat.changeType === "positive"
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-amber-600 dark:text-amber-400"
                    }`}
                  >
                    {stat.changeType === "positive" && "↗ "}
                    {stat.change}
                  </p>
                </div>
                <div className={`rounded-full p-3 ${colorMap[stat.color]}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
