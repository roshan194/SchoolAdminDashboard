import { motion } from "framer-motion";
import { DashboardCards } from "@/components/DashboardCards";
import { QuickActions } from "@/components/QuickActions";
import { RecentActivities } from "@/components/RecentActivities";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const upcomingEvents = [
  {
    title: "Parent-Teacher Conference",
    date: "March 15, 2024",
    color: "border-primary",
  },
  {
    title: "Spring Sports Championship",
    date: "March 22, 2024",
    color: "border-emerald-500",
  },
  {
    title: "Science Fair",
    date: "March 29, 2024",
    color: "border-amber-500",
  },
];

const performanceMetrics = [
  { label: "Overall GPA", value: 92.5, color: "bg-emerald-500" },
  { label: "Assignment Completion", value: 87, color: "bg-primary" },
  { label: "Parent Engagement", value: 94, color: "bg-amber-500" },
];

const systemStatus = [
  { label: "Server Status", status: "Online", color: "text-emerald-600" },
  { label: "Database", status: "Connected", color: "text-emerald-600" },
  { label: "Backup Status", status: "In Progress", color: "text-amber-600" },
  { label: "PWA Status", status: "Ready", color: "text-emerald-600" },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-xl bg-gradient-to-r from-primary to-primary/80 p-6 text-primary-foreground"
      >
        <h3 className="text-xl font-semibold mb-2">Welcome back, John!</h3>
        <p className="text-primary-foreground/90">
          Here's what's happening at your school today.
        </p>
      </motion.div>

      {/* Stats Cards */}
      <DashboardCards />

      {/* Quick Actions & Recent Activities */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <QuickActions />
        <RecentActivities />
      </div>

      {/* Additional Dashboard Sections */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`border-l-4 pl-4 ${event.color}`}
              >
                <p className="text-sm font-medium">{event.title}</p>
                <p className="text-xs text-muted-foreground">{event.date}</p>
              </motion.div>
            ))}
          </CardContent>
        </Card>

        {/* Performance Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Performance Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">{metric.label}</span>
                  <span>{metric.value}%</span>
                </div>
                <Progress value={metric.value} className="h-2" />
              </motion.div>
            ))}
          </CardContent>
        </Card>

        {/* System Status */}
        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {systemStatus.map((status, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between"
              >
                <span className="text-sm text-muted-foreground">
                  {status.label}
                </span>
                <span className={`flex items-center text-sm ${status.color}`}>
                  <span className="mr-2 h-2 w-2 rounded-full bg-current"></span>
                  {status.status}
                </span>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
