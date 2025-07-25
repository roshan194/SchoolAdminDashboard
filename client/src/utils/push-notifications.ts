// Push notification utility functions
export async function requestNotificationPermission(): Promise<boolean> {
  if (!("Notification" in window)) {
    console.log("This browser does not support notifications");
    return false;
  }

  if (Notification.permission === "granted") {
    return true;
  }

  if (Notification.permission !== "denied") {
    const permission = await Notification.requestPermission();
    return permission === "granted";
  }

  return false;
}

export async function showNotification(
  title: string = "School Management System",
  options: NotificationOptions = {}
): Promise<boolean> {
  const hasPermission = await requestNotificationPermission();
  
  if (!hasPermission) {
    return false;
  }

  const defaultOptions: NotificationOptions = {
    body: "This is a demo push notification! PWA is working correctly.",
    icon: "/icon-192x192.png",
    badge: "/badge-72x72.png",
    tag: "demo-notification",
    ...options,
  };

  try {
    new Notification(title, defaultOptions);
    return true;
  } catch (error) {
    console.error("Error showing notification:", error);
    return false;
  }
}

export function showInAppNotification(message: string): void {
  // Create and show an in-app notification as fallback
  const notification = document.createElement("div");
  notification.className = `
    fixed top-4 right-4 z-50 max-w-sm rounded-lg bg-primary p-4 text-primary-foreground shadow-lg
    transform translate-x-full transition-transform duration-300
  `;
  
  notification.innerHTML = `
    <div class="flex items-center">
      <svg class="mr-3 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
      </svg>
      <span class="flex-1">${message}</span>
      <button class="ml-4 text-primary-foreground/80 hover:text-primary-foreground" onclick="this.parentElement.parentElement.remove()">
        <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
        </svg>
      </button>
    </div>
  `;

  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.classList.remove("translate-x-full");
  }, 100);

  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.classList.add("translate-x-full");
    setTimeout(() => notification.remove(), 300);
  }, 5000);
}
