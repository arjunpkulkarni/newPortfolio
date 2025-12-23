<div align="center">
<img alt="Portfolio Template" src="https://github.com/dillionverma/portfolio/assets/16860528/57ffca81-3f0a-4425-b31d-094f61725455" width="90%">
</div>

# Modern Portfolio Template [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fportfolio-template)

A beautiful, modern portfolio template built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Perfect for developers, designers, and creators who want to showcase their work professionally.

Built with [shadcn/ui](https://ui.shadcn.com/) and [magic ui](https://magicui.design/), optimized for deployment on Vercel.

## ✨ Features

- **Easy Setup** - Customize everything in one single config file ([`src/data/resume.tsx`](./src/data/resume.tsx))
- **Modern Tech Stack** - Next.js 14, React 18, TypeScript, Tailwind CSS
- **Beautiful UI** - Powered by shadcn/ui and Magic UI components
- **Smooth Animations** - Framer Motion for delightful interactions
- **Blog Ready** - Built-in blog with MDX support
- **Fully Responsive** - Looks great on all devices
- **Dark Mode** - Automatic dark mode support
- **SEO Optimized** - Built-in SEO best practices
- **Fast & Performant** - Optimized for Next.js and Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. **Clone this repository**

   ```bash
   git clone https://github.com/yourusername/portfolio-template
   cd portfolio-template
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 🎨 Customization

### 1. Update Your Information

Edit the main configuration file at [`src/data/resume.tsx`](./src/data/resume.tsx):

```typescript
export const DATA = {
  name: "Your Name",
  initials: "YN",
  url: "https://yourwebsite.com",
  location: "Your City",
  description: "Your tagline or title",
  summary: "Your professional summary...",
  avatarUrl: "/your-photo.jpg",
  // ... update all sections with your info
}
```

### 2. Add Your Photo

Replace `/public/pfp.jpeg` with your own profile picture.

### 3. Update Projects

In [`src/data/resume.tsx`](./src/data/resume.tsx), update the `projects` array with your own projects:

```typescript
projects: [
  {
    title: "Your Project Name",
    href: "https://github.com/yourusername/project",
    dates: "2024",
    active: true,
    description: "Project description...",
    technologies: ["React", "Node.js", "MongoDB"],
    links: [
      {
        type: "GitHub",
        href: "https://github.com/yourusername/project",
        icon: <Icons.github className="size-3" />,
      },
    ],
  },
]
```

### 4. Add Blog Posts

Create MDX files in the [`content/`](./content/) directory:

```mdx
---
title: "Your Blog Post Title"
publishedAt: "2024-01-01"
summary: "Brief summary of your post"
---

Your blog content here...
```

### 5. Update Social Links

In [`src/data/resume.tsx`](./src/data/resume.tsx), update your social media links:

```typescript
contact: {
  email: "your.email@example.com",
  social: {
    GitHub: {
      url: "https://github.com/yourusername",
      // ...
    },
    LinkedIn: {
      url: "https://www.linkedin.com/in/yourusername",
      // ...
    },
  },
}
```

## 📁 Project Structure

```
portfolio-template/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── blog/         # Blog pages
│   │   ├── projects/     # Project pages
│   │   ├── work/         # Work experience page
│   │   └── education/    # Education page
│   ├── components/       # React components
│   ├── data/            # Configuration files
│   │   └── resume.tsx   # Main config file ⭐
│   └── lib/             # Utility functions
├── content/             # MDX blog posts
├── public/              # Static assets
└── ...
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Other Platforms

This template can also be deployed to:
- Netlify
- Railway
- Render
- Any platform supporting Next.js

## 🛠️ Built With

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Magic UI](https://magicui.design/) - Additional components
- [MDX](https://mdxjs.com/) - Blog content

## 📝 License

Licensed under the [MIT license](./LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 💖 Acknowledgments

- Original template inspired by various portfolio designs
- UI components from shadcn/ui and Magic UI
- Icons from Lucide React

---

**Happy Building! 🚀**

If you like this template, please give it a ⭐️ on GitHub!
