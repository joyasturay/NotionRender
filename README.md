# Notion Renderer (Open Source)

A high-performance Next.js engine that turns any Notion page into a static, SEO-friendly website. Built in a weekend to create an open-source alternative to tools like Super.so.

## 🚀 Features

-   **Dynamic Rendering:** Paste any public Notion URL, and it renders instantly.
-   **Static Performance:** Uses Next.js (App Router) for blazing fast load times.
-   **"Course Mode" Sidebar:** Automatically detects sub-pages in your Notion content and builds a "Jump To" navigation sidebar (perfect for documentation or courses).
-   **Pixel-Perfect Design:** Faithfully recreates Notion's styling (Callouts, Code Blocks, Math, etc.) using `react-notion-x`.
-   **Dark Mode:** Enabled by default.

## 🛠 Tech Stack

-   **Framework:** Next.js 15 (App Router)
-   **Language:** TypeScript
-   **Styling:** Tailwind CSS
-   **Notion API:** `notion-client` (Unofficial API for speed) + `react-notion-x`

## ⚡️ Getting Started

First, clone the repository:

```bash
git clone [https://github.com/YOUR_USERNAME/notion-renderer.git](https://github.com/YOUR_USERNAME/notion-renderer.git)
cd notion-renderer