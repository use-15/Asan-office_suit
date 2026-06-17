# Asan Office Suite

Asan Office is a professional-grade, fully offline productivity suite designed for high-performance document processing, data analysis, presentations, and PDF editing.

Built with **Tauri**, **Rust**, and **React**, Asan Office offers feature parity with industry-standard office tools while maintaining complete data privacy by working 100% offline.

## Core Applications

- **Asan Word**: Advanced word processor with support for 3D models, Charts, Equations, and automated Macros.
- **Asan Sheets**: High-fidelity spreadsheet application with over 450 functions and Excel-compatible formula engine.
- **Asan Slides**: Professional presentation software with smooth transitions and slide management.
- **Asan PDF Pro**: Comprehensive PDF editor with annotation, secure signing, and OCR capabilities.

## Getting Started

To get Asan Office up and running on your local machine, please follow our detailed **[Installation Guide](INSTALLATION.md)**.

### Quick Start
1. Install [Node.js](https://nodejs.org/), [pnpm](https://pnpm.io/), and [Rust](https://rustup.rs/).
2. Install system dependencies (see [INSTALLATION.md](INSTALLATION.md)).
3. Run `cd asan-office && pnpm install`.
4. Run `pnpm tauri dev` to start the dashboard.

## Technology Stack
- **Backend**: Rust (Tauri 2.0)
- **Frontend**: React 19, TypeScript, Tailwind CSS 3
- **Editor Engines**: Lexical (Word), Handsontable (Sheets), Framer Motion (Slides)
- **3D & Graphics**: Three.js, Recharts

---
© 2026 Asan Office Suite. Serious Software for Serious Work.
