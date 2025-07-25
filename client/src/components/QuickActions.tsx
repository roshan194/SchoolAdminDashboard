import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, Bell, CalendarPlus, ChevronRight } from "lucide-react";
import { showNotification } from "@/utils/push-notifications";
import { useToast } from "@/hooks/use-toast";

const actions = [
  {
    title: "Add New Student",
    icon: UserPlus,
    color: "bg-primary/10 hover:bg-primary/20 text-primary",
    action: () => console.log("Add student"),
  },
  {
    title: "Send Notification (Demo)",
    icon: Bell,
    color: "bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-900 dark:hover:bg-emerald-800 text-emerald-600 dark:text-emerald-400",
    action: "notification",
  },
  {
    title: "Schedule Event",
    icon: CalendarPlus,
    color: "bg-amber-50 hover:bg-amber-100 dark:bg-amber-900 dark:hover:bg-amber-800 text-amber-600 dark:text-amber-400",
    action: () => console.log("Schedule event"),
  },
];

export function QuickActions() {
  const { toast } = useToast();

  const handleAction = async (action: string | (() => void)) => {
    if (action === "notification") {
      const success = await showNotification();
      if (success) {
        toast({
          title: "Notification Sent",
          description: "Demo push notification has been sent successfully!",
        });
      } else {
        toast({
          title: "Notification Demo",
          description: "Push notifications are not available in this browser.",
          variant: "destructive",
        });
      }
    } else if (typeof action === "function") {
      action();
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {actions.map((action, index) => (
          <motion.div
            key={action.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Button
              variant="ghost"
              className={`w-full justify-between p-4 h-auto ${action.color} transition-colors`}
              onClick={() => handleAction(action.action)}
            >
              <div className="flex items-center">
                <action.icon className="mr-3 h-5 w-5" />
                <span>{action.title}</span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  );
}
