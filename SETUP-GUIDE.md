# Setup Guide - School Management System

## Step-by-Step Setup Instructions

### 1. Check Prerequisites

First, verify you have Node.js installed:

```bash
# Check Node.js version (should be 18 or higher)
node --version

# Check npm version
npm --version
```

If you don't have Node.js installed:
- Download from: https://nodejs.org/
- Choose the LTS (Long Term Support) version
- Install with default settings

### 2. Extract and Navigate

1. Extract the ZIP file to your desired location
2. Open terminal/command prompt
3. Navigate to the project folder:

```bash
# Windows
cd C:\path\to\school-management-system

# Mac/Linux
cd /path/to/school-management-system
```

### 3. Install Dependencies

Run this command in the project root directory:

```bash
npm install
```

This might take 2-3 minutes. You should see output like:
```
added 1234 packages, and audited 1235 packages in 2m
```

### 4. Start the Development Server

```bash
npm run dev
```

You should see output similar to:
```
> rest-express@1.0.0 dev
> NODE_ENV=development tsx server/index.ts
3:30:19 PM [express] serving on port 5000
```

### 5. Open in Browser

Open your web browser and go to:
```
http://localhost:5000
```

## Common Issues and Solutions

### ❌ "command not found: node" or "command not found: npm"

**Problem**: Node.js is not installed or not in your PATH

**Solution**:
1. Download and install Node.js from https://nodejs.org/
2. Restart your terminal/command prompt
3. Try again

### ❌ "Cannot find module" errors during npm install

**Problem**: Previous installation was corrupted or incomplete

**Solution**:
```bash
# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json  # Mac/Linux
# OR
rmdir /s node_modules & del package-lock.json  # Windows

# Clear npm cache
npm cache clean --force

# Reinstall
npm install
```

### ❌ "Port 5000 is already in use"

**Problem**: Another application is using port 5000

**Solution**: The app will automatically use the next available port. Check the terminal output for the actual URL, or:

```bash
# Kill processes on port 5000 (Windows)
netstat -ano | findstr :5000
taskkill /PID <process_id> /F

# Kill processes on port 5000 (Mac/Linux)
lsof -ti:5000 | xargs kill -9
```

### ❌ "Permission denied" on npm install

**Problem**: Permission issues (common on Mac/Linux)

**Solution**:
```bash
# Option 1: Use sudo (not recommended for security)
sudo npm install

# Option 2: Fix npm permissions (recommended)
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
```

### ❌ Browser shows "This site can't be reached"

**Problem**: Server isn't running or wrong URL

**Solution**:
1. Make sure `npm run dev` is running without errors
2. Check the exact URL in the terminal output
3. Try http://127.0.0.1:5000 instead
4. Disable any VPN or proxy

### ❌ TypeScript errors on startup

**Problem**: TypeScript compilation issues

**Solution**:
```bash
# Check for TypeScript errors
npm run check

# If there are errors, the project should still run in development mode
```

## Windows-Specific Instructions

### Using Command Prompt
```cmd
cd C:\path\to\school-management-system
npm install
npm run dev
```

### Using PowerShell
```powershell
Set-Location "C:\path\to\school-management-system"
npm install
npm run dev
```

### Using Git Bash (if installed)
```bash
cd /c/path/to/school-management-system
npm install
npm run dev
```

## Testing the Setup

Once the server is running:

1. **Dashboard**: Should show statistics cards and quick actions
2. **Theme Toggle**: Click the sun/moon icon in the header
3. **Sidebar**: Should slide out on mobile, be visible on desktop
4. **Navigation**: Click "Students" or "Notifications" in sidebar
5. **PWA**: Look for install icon in browser address bar
6. **Notifications**: Click "Send Notification" button and allow permissions

## Production Build (Optional)

To create a production build:

```bash
npm run build
npm run start
```

This creates optimized files in the `dist/` folder.

## Need Help?

If you're still having issues:

1. Make sure you're in the correct directory (should contain `package.json`)
2. Check that your internet connection is working (for downloading packages)
3. Try using a different terminal/command prompt
4. Restart your computer if all else fails

The most common issue is not having Node.js installed or being in the wrong directory!