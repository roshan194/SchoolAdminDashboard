import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, AlertTriangle } from "lucide-react";

const activities = [
  {
    title: "New student enrolled: Sarah Johnson",
    time: "2 hours ago",
    icon: Users,
    color: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400",
  },
  {
    title: "Science Fair scheduled for next Friday",
    time: "4 hours ago",
    icon: Calendar,
    color: "bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Low attendance alert for Grade 8B",
    time: "6 hours ago",
    icon: AlertTriangle,
    color: "bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-400",
  },
];

export function RecentActivities() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start space-x-3"
          >
            <div className={`rounded-full p-2 flex-shrink-0 ${activity.color}`}>
              <activity.icon className="h-4 w-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {activity.title}
              </p>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  );
}
