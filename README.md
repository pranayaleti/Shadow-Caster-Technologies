# Shadow Caster Technologies

A complete full-stack SaaS platform for a freelancing digital agency specializing in website development, SEO, branding, and digital marketing services.

## 🚀 Features

### Public Website
- **Home**: Futuristic hero section with agency tagline and CTAs
- **Services**: Expandable service cards for all offerings
- **Plans & Packages**: Pricing tables with feature comparison
- **About**: Mission, design philosophy, and company information
- **Contact**: Booking form connected to CRM (mock GoHighLevel API)

### Client Portal
- Client login/signup using NextAuth (email + OAuth)
- Dashboard to manage subscriptions, view analytics, manage campaigns
- Access to stored digital assets
- Ability to upgrade/downgrade plans and view invoices
- Mock GoHighLevel API integration layer

### Admin Dashboard
- Full admin access to manage clients, subscriptions, and services
- Dynamic pricing management for plans and add-ons
- Campaign tracking and analytics
- Client management with role-based access control
- Visual analytics using Recharts

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Database**: Prisma ORM with SQLite
- **Authentication**: NextAuth.js
- **Animations**: Framer Motion
- **Charts**: Recharts
- **State Management**: Zustand
- **UI Components**: Radix UI

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Shadow-Caster-Technologies
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your configuration:
   ```env
   DATABASE_URL="file:./dev.db"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key-here"
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Create an admin user** (optional)
   You can create an admin user through the signup page and then manually update the role in the database:
   ```bash
   npx prisma studio
   ```
   Navigate to the User table and change a user's role to `ADMIN`.

6. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Design System

### Color Palette
- **Background**: `#0F1115` / `#121212`
- **Primary**: `#00CED1` (Teal)
- **Accent**: `#00FFFF` (Cyan)
- **Text**: White with secondary/muted variants

### Typography
- **Body**: Poppins
- **Headings**: Orbitron (futuristic display font)

### Design Principles
- Matte-faded, cyber-futuristic aesthetic
- Gestalt psychology principles (clear hierarchy, grouped elements)
- Soft shadows and layered depth
- Smooth transitions with Framer Motion

## 📁 Project Structure

```
/app
  /(public)
    home/
    services/
    plans/
    about/
    contact/
  /portal (client dashboard)
  /admin (admin dashboard)
  /auth (authentication)
/components
  /ui (reusable UI components)
  /sections (page sections)
  /portal (client portal components)
  /admin (admin dashboard components)
/lib
  prisma.ts (database client)
  auth.ts (NextAuth configuration)
  utils.ts (utility functions)
/prisma
  schema.prisma (database schema)
```

## 🔌 API Integration

### Mock Integrations

The platform includes mock integration layers for:

1. **GoHighLevel API**
   - Contact form submissions
   - Lead tracking
   - Communication logs

2. **Stripe** (mocked)
   - Subscription management
   - Payment processing
   - Invoice generation

3. **Google Business API** (mocked)
   - Business profile management
   - Maps Pack optimization

### Connecting Real APIs

To connect real APIs:

1. **GoHighLevel API**
   - Update `/app/api/contact/route.ts` with your GoHighLevel API key
   - Replace mock functions with actual API calls

2. **Stripe**
   - Add Stripe API keys to `.env`
   - Implement Stripe webhooks for subscription events
   - Update subscription management logic

3. **Google Business API**
   - Add Google OAuth credentials
   - Implement Google My Business API calls
   - Update business profile management features

## 🔐 Authentication

The platform uses NextAuth.js with:
- Email/password authentication
- Google OAuth (optional)
- Role-based access control (Admin/Client)

## 📊 Database Schema

Key models:
- **User**: Clients and admins
- **Plan**: Subscription plans
- **Subscription**: User subscriptions
- **Service**: Service offerings
- **Campaign**: Client campaigns
- **Asset**: Digital asset storage
- **Invoice**: Billing invoices
- **Lead**: Contact form leads

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

The app can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📝 License

This project is proprietary software for Shadow Caster Technologies.

## 🤝 Contributing

This is a private project. For questions or support, contact the development team.

## 📧 Support

For support, email support@shadowcastertech.com or open an issue in the repository.

---

**Built with ❤️ by Shadow Caster Technologies**

