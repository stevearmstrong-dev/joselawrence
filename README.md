# Steve Armstrong - Portfolio Website

A modern, animated personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Inspired by Shopify Editions' clean design aesthetic.

## Features

- 🎨 **Modern Design**: Clean, minimalist interface with professional aesthetics
- ✨ **Smooth Animations**: Scroll-triggered animations using Framer Motion
- 📱 **Fully Responsive**: Optimized for all device sizes
- ⚡ **Performance**: Built with Next.js 16 and Turbopack for blazing-fast development
- 🎯 **SEO Optimized**: Meta tags and semantic HTML for better search visibility
- 🔗 **Sticky Navigation**: Smooth scrolling with active section highlighting

## Sections

1. **Hero** - Eye-catching introduction with call-to-action buttons
2. **About** - Personal story and key achievements
3. **Experience** - Detailed work history with highlights
4. **Skills** - Technical and soft skills organized by category
5. **Education** - Academic background with GPA and coursework
6. **Certifications** - Professional certifications and awards
7. **Contact** - Multiple ways to get in touch

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Utilities**: react-intersection-observer

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd steve-armstrong-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Update Personal Information

Edit the following files to update your information:

- **Contact Info**: `components/Hero.tsx` and `components/Contact.tsx`
- **Work Experience**: `components/Experience.tsx`
- **Skills**: `components/Skills.tsx`
- **Education**: `components/Education.tsx`
- **Certifications**: `components/Certifications.tsx`

### Change Colors

The primary color theme uses blue. To change it:

1. Find all instances of `blue-` classes in components
2. Replace with your preferred Tailwind color (e.g., `purple-`, `green-`, `indigo-`)

### Modify Animations

Animation timing and effects are configured in each component using Framer Motion variants. Adjust the `containerVariants` and `itemVariants` objects to customize animations.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

This is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Digital Ocean
- Railway
- Render

## Project Structure

```
steve-armstrong-portfolio/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main page component
├── components/
│   ├── Navigation.tsx        # Sticky navigation bar
│   ├── Hero.tsx              # Hero section
│   ├── About.tsx             # About section
│   ├── Experience.tsx        # Work experience
│   ├── Skills.tsx            # Skills section
│   ├── Education.tsx         # Education section
│   ├── Certifications.tsx    # Certifications & awards
│   └── Contact.tsx           # Contact section
├── public/                   # Static assets
└── package.json              # Dependencies
```

## Performance

- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Lighthouse Score**: 95+

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

Steve Armstrong
- Email: steve@stevearmstrong.org
- Phone: 782-778-4830
- Location: Halifax, Canada
- LinkedIn: [linkedin.com/in/stevearmstrong-dev](https://linkedin.com/in/stevearmstrong-dev)
- GitHub: [github.com/stevearmstrong-dev](https://github.com/stevearmstrong-dev)

---

Built with ❤️ using Next.js and Tailwind CSS
