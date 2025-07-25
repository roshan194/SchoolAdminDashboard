// PWA utility functions
let deferredPrompt: any;

export function initializePWA(): void {
  // Listen for the beforeinstallprompt event
  window.addEventListener("beforeinstallprompt", (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Store the event so it can be triggered later
    deferredPrompt = e;
    
    // Update UI to notify the user they can install the PWA
    showInstallPromotion();
  });

  // Listen for the appinstalled event
  window.addEventListener("appinstalled", () => {
    console.log("PWA was installed");
    hideInstallPromotion();
  });

  // Register service worker
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("SW registered: ", registration);
        })
        .catch((registrationError) => {
          console.log("SW registration failed: ", registrationError);
        });
    });
  }
}

export async function installPWA(): Promise<boolean> {
  if (!deferredPrompt) {
    return false;
  }

  // Show the install prompt
  deferredPrompt.prompt();

  // Wait for the user to respond to the prompt
  const { outcome } = await deferredPrompt.userChoice;

  if (outcome === "accepted") {
    console.log("User accepted the install prompt");
  } else {
    console.log("User dismissed the install prompt");
  }

  // Clear the deferredPrompt variable
  deferredPrompt = null;

  return outcome === "accepted";
}

function showInstallPromotion(): void {
  // You can implement a custom install promotion UI here
  console.log("PWA can be installed");
}

function hideInstallPromotion(): void {
  // Hide the install promotion UI
  console.log("PWA install promotion hidden");
}

export function isPWAInstalled(): boolean {
  return window.matchMedia("(display-mode: standalone)").matches ||
         (window.navigator as any).standalone === true;
}
