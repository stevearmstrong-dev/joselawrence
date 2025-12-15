# Deployment Guide

This guide will help you deploy your portfolio website to various platforms.

## Quick Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy your Next.js application and is made by the creators of Next.js.

### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Personal portfolio website"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up or log in with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and configure everything
   - Click "Deploy"

3. **Done!**
   - Your site will be live in minutes
   - You'll get a free `.vercel.app` domain
   - Automatic HTTPS
   - Automatic deployments on every push to main

### Custom Domain (Optional)

1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Update your DNS settings as instructed

## Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Visit [netlify.com](https://netlify.com)
   - Drag and drop your `.next` folder
   - Or connect your GitHub repository for automatic deployments

3. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

## Deploy to AWS Amplify

1. **Install Amplify CLI**
   ```bash
   npm install -g @aws-amplify/cli
   ```

2. **Initialize Amplify**
   ```bash
   amplify init
   ```

3. **Add hosting**
   ```bash
   amplify add hosting
   ```

4. **Publish**
   ```bash
   amplify publish
   ```

## Deploy to Railway

1. **Install Railway CLI**
   ```bash
   npm i -g @railway/cli
   ```

2. **Login and Deploy**
   ```bash
   railway login
   railway init
   railway up
   ```

## Environment Variables

If you need environment variables for analytics or other services:

1. Create a `.env.local` file in the project root
2. Add your variables:
   ```
   NEXT_PUBLIC_ANALYTICS_ID=your-id
   ```
3. Add these variables in your deployment platform's settings

## Pre-Deployment Checklist

- [ ] Update all personal information in components
- [ ] Replace placeholder links with actual URLs
- [ ] Test on mobile devices
- [ ] Check all sections scroll correctly
- [ ] Verify contact form works (if added)
- [ ] Test in different browsers
- [ ] Check performance with Lighthouse
- [ ] Optimize images (if any added)
- [ ] Update meta tags for SEO
- [ ] Add Google Analytics (optional)

## Post-Deployment

After deployment:

1. **Test Your Live Site**
   - Check all links work
   - Test navigation
   - Verify animations work smoothly
   - Test on mobile

2. **SEO Setup**
   - Submit sitemap to Google Search Console
   - Add site to LinkedIn profile
   - Share on social media

3. **Analytics (Optional)**
   - Add Google Analytics
   - Set up Vercel Analytics
   - Monitor performance

## Updating Your Site

After initial deployment, updating is simple:

1. Make changes locally
2. Test with `npm run dev`
3. Commit and push to GitHub
4. Your site will automatically redeploy (if using Vercel/Netlify)

## Custom Features to Add

Consider adding these features later:

- [ ] Blog section
- [ ] Project portfolio with detailed case studies
- [ ] Contact form with email integration
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Resume download button
- [ ] Visitor counter
- [ ] Newsletter signup

## Support

If you encounter issues:

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Check the deployment platform's documentation
3. Search for the error message
4. Ask in Next.js Discord or GitHub Discussions

---

Good luck with your deployment! 🚀
