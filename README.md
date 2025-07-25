# School Management System Admin Dashboard

A modern, responsive School Management System built with React, Vite, and Tailwind CSS featuring PWA capabilities, push notifications, and dark mode.

## Features

- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 🌙 **Dark/Light Mode** - Toggle between themes with persistent storage
- 📊 **Dashboard Analytics** - Statistics cards, performance metrics, and system status
- 🔔 **Push Notifications** - Demo notification system for real-time alerts
- 📱 **PWA Ready** - Installable as a native app with offline capabilities
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎨 **Modern UI** - Clean interface using shadcn/ui components and Tailwind CSS
- 🔄 **Smooth Animations** - Framer Motion powered transitions and interactions

## Prerequisites

Before running this project, make sure you have:

- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager (comes with Node.js)

## Quick Start

1. **Extract the project files** to your desired folder

2. **Navigate to the project directory**:
   ```bash
   cd school-management-system
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser** and go to `http://localhost:5000`

The application should now be running! You'll see the dashboard with sample data and can test all the features.

## Project Structure

```
school-management-system/
├── client/              # Frontend React application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page components
│   │   ├── utils/       # Utility functions
│   │   └── hooks/       # Custom React hooks
│   └── public/          # Static assets and PWA files
├── server/              # Backend Express server
├── shared/              # Shared types and schemas
└── README.md           # This file
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Testing PWA Features

### Install as App
1. Open the app in Chrome/Edge
2. Look for the install icon in the address bar
3. Click to install as a desktop/mobile app

### Test Push Notifications
1. Click the "Send Notification (Demo)" button on the dashboard
2. Allow notifications when prompted
3. You should see a desktop notification

### Test Offline Mode
1. Open Chrome DevTools (F12)
2. Go to Network tab
3. Check "Offline" checkbox
4. Refresh the page - it should still work!

## Customization

### Changing Colors
Edit `client/src/index.css` to customize the color scheme:
```css
:root {
  --primary: hsl(207, 90%, 54%); /* Main brand color */
  --background: hsl(0, 0%, 100%); /* Background color */
  /* ... other color variables */
}
```

### Adding New Pages
1. Create a new component in `client/src/pages/`
2. Add the route in `client/src/App.tsx`
3. Update the sidebar navigation in `client/src/components/Sidebar.tsx`

### Modifying Dashboard Data
Edit the sample data in:
- `client/src/components/DashboardCards.tsx` - Statistics cards
- `client/src/pages/Dashboard.tsx` - Events and metrics

## Troubleshooting

### Port Already in Use
If port 5000 is busy, the app will automatically use the next available port. Check the terminal for the actual URL.

### Dependencies Not Installing
Try clearing npm cache and reinstalling:
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### PWA Not Working
Make sure you're accessing the app via `http://localhost:5000` (not `127.0.0.1`) and that you've allowed notifications in your browser.

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Contributing

This is a demo project showcasing modern web development practices. Feel free to use it as a starting point for your own school management system!

## License

This project is provided as-is for educational and demonstration purposes.