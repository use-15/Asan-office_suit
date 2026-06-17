# Asan Office Suite - Local Installation Guide

This guide will help you set up the development environment and build the Asan Office Suite on your local machine.

## 1. Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.0 or higher. [Download here](https://nodejs.org/).
- **pnpm**: Fast, disk space efficient package manager. Install via: `npm install -g pnpm`.
- **Rust**: The Rust programming language. Install via [rustup](https://rustup.rs/).

## 2. OS-Specific System Dependencies

Asan Office is built with **Tauri**, which requires specific system libraries to interface with the OS webview.

### Windows
- **WebView2**: Most modern Windows versions have this. If not, [download the evergreen bootstrapper](https://developer.microsoft.com/en-us/microsoft-edge/webview2/).
- **Visual Studio Build Tools**: Install the "Desktop development with C++" workload.

### macOS
- **Xcode Command Line Tools**: Run `xcode-select --install` in your terminal.

### Linux (Ubuntu/Debian)
Run the following command to install the required dependencies:
```bash
sudo apt-get update
sudo apt-get install -y \
    libwebkit2gtk-4.1-dev \
    build-essential \
    curl \
    wget \
    file \
    libssl-dev \
    libgtk-3-dev \
    libayatana-appindicator3-dev \
    librsvg2-dev
```

## 3. Installation Steps

1. **Extract the ZIP file**: Unzip the project to your preferred location.
2. **Navigate to the project**:
   ```bash
   cd asan-office
   ```
3. **Install dependencies**:
   ```bash
   pnpm install
   ```

## 4. Running the Application

### Development Mode
To run the app with hot-reloading for development:
```bash
pnpm tauri dev
```

### Production Build
To generate the production-ready installers for your current platform:
```bash
pnpm tauri build
```
The output installers (NSIS for Windows, DMG for macOS, Deb/AppImage for Linux) will be located in:
`asan-office/src-tauri/target/release/bundle/`

## 5. Troubleshooting

- **Rust compilation fails**: Ensure your Rust version is up to date (`rustup update`).
- **WebView errors**: On Linux, ensure `libwebkit2gtk` is correctly installed. On Windows, ensure WebView2 is available.
- **Node dependencies**: If `pnpm install` fails, try deleting `node_modules` and the `pnpm-lock.yaml` file, then run `pnpm install` again.

---
© 2026 Asan Office Suite. All rights reserved.
