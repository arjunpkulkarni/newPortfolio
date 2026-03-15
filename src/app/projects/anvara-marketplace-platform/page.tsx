import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, 
  Code2, 
  ExternalLink, 
  Github, 
  ArrowRight,
  Database,
  Server,
  Globe,
  BarChart3,
  Shield,
  Zap
} from "lucide-react";
import type { Metadata } from "next";

// Import Anvara images
import MarketplaceImg from "@/app/projects/pictures/anvara/marketplace.png";
import CampaignsImg from "@/app/projects/pictures/anvara/campaigns.png";
import CreateCampaignImg from "@/app/projects/pictures/anvara/create_campaign.png";
import ListingsImg from "@/app/projects/pictures/anvara/listings.png";
import AdSlotImg from "@/app/projects/pictures/anvara/ad_slot.png";

export const metadata: Metadata = {
  title: "Anvara Marketplace Platform | Arjun Kulkarni",
  description: "Full-stack sponsorship marketplace connecting brands with publishers for advertising placements. Built with Next.js, React, Express.js, and PostgreSQL.",
};

export default function AnvaraProjectPage() {
  const techStack = [
    "Next.js",
    "React", 
    "TailwindCSS",
    "Express.js",
    "Prisma",
    "PostgreSQL",
    "TypeScript",
    "Docker",
    "PNPM Workspaces"
  ];

  const keyFeatures = [
    "Marketplace listing and discovery",
    "Sponsor campaign management dashboard", 
    "End-to-end booking flow",
    "Secure API endpoints",
    "Analytics instrumentation with Google Analytics",
    "CRUD operations for campaigns and placements"
  ];

  const engineeringHighlights = [
    "Fixed TypeScript stability issues across the monorepo",
    "Implemented server-side data fetching for optimal performance",
    "Designed secure API endpoints with proper validation",
    "Added analytics tracking for marketplace interactions"
  ];

  return (
    <section className="relative container mx-auto px-4 max-w-7xl">
      {/* Hero Section */}
      <div className="relative mt-28 mb-12">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="title font-medium text-4xl md:text-5xl tracking-tight mb-6">
            Anvara Marketplace Platform
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            A full-stack sponsorship marketplace where brands can browse and book advertising placements from publishers. 
            Features campaign management, secure booking flow, and comprehensive analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gap-2">
              <Link href="https://github.com/arjunpkulkarni/anvaraTakeHome" target="_blank">
                <Github className="h-4 w-4" />
                View GitHub Repo
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href="#architecture">
                <Code2 className="h-4 w-4" />
                View Architecture
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-96 mb-16 overflow-hidden rounded-xl bg-muted border">
        <Image
          src={MarketplaceImg}
          alt="Anvara Marketplace Platform"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Project Overview */}
      <div className="mb-16">
        <h2 className="text-3xl font-medium tracking-tight mb-8">Project Overview</h2>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            Anvara is a comprehensive marketplace platform that bridges the gap between sponsors seeking advertising opportunities 
            and publishers offering placement inventory. The platform streamlines the entire sponsorship lifecycle from discovery to campaign execution.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Sponsors can browse through curated advertising placements, evaluate opportunities based on audience metrics and pricing, 
            and seamlessly book campaigns through an intuitive interface. Once booked, campaigns are automatically created and linked 
            to the respective publishers, enabling efficient campaign management.
          </p>
          <p className="text-lg leading-relaxed">
            The platform features a comprehensive dashboard where sponsors can monitor campaign performance, manage multiple campaigns 
            simultaneously, and access detailed analytics to optimize their advertising strategies.
          </p>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-16">
        <h2 className="text-3xl font-medium tracking-tight mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {keyFeatures.map((feature, index) => (
            <div key={index} className="flex items-start gap-3 p-4 rounded-lg border bg-card">
              <div className="mt-1">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
              </div>
              <span className="text-base">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mb-16">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Code2 className="h-5 w-5 text-muted-foreground" />
              <CardTitle>Tech Stack</CardTitle>
            </div>
            <CardDescription>
              Modern full-stack technologies for scalable marketplace development
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <Badge 
                  key={tech}
                  variant="secondary"
                  className="text-sm px-4 py-2"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Architecture */}
      <div id="architecture" className="mb-16">
        <h2 className="text-3xl font-medium tracking-tight mb-8">Architecture</h2>
        <Card>
          <CardHeader>
            <CardTitle>System Architecture</CardTitle>
            <CardDescription>
              Clean separation of concerns with modern full-stack architecture
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold mb-2">Client</h3>
                <p className="text-sm text-muted-foreground">Next.js + React</p>
              </div>
              <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                  <Server className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-semibold mb-2">API Layer</h3>
                <p className="text-sm text-muted-foreground">Express.js</p>
              </div>
              <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-semibold mb-2">ORM</h3>
                <p className="text-sm text-muted-foreground">Prisma</p>
              </div>
              <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center mb-4">
                  <Database className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="font-semibold mb-2">Database</h3>
                <p className="text-sm text-muted-foreground">PostgreSQL</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Screenshots Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-medium tracking-tight mb-8">Screenshots</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="relative h-64 rounded-lg overflow-hidden border bg-muted">
              <Image
                src={ListingsImg}
                alt="Marketplace Listings Page"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold">Marketplace Listings</h3>
            <p className="text-sm text-muted-foreground">
              Browse and discover advertising placements with detailed metrics and pricing information.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="relative h-64 rounded-lg overflow-hidden border bg-muted">
              <Image
                src={CampaignsImg}
                alt="Campaign Management Dashboard"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold">Campaign Dashboard</h3>
            <p className="text-sm text-muted-foreground">
              Comprehensive dashboard for managing multiple campaigns with performance tracking.
            </p>
          </div>

          <div className="space-y-4">
            <div className="relative h-64 rounded-lg overflow-hidden border bg-muted">
              <Image
                src={CreateCampaignImg}
                alt="Campaign Creation Flow"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold">Campaign Creation</h3>
            <p className="text-sm text-muted-foreground">
              Streamlined campaign creation process with form validation and real-time feedback.
            </p>
          </div>

          <div className="space-y-4">
            <div className="relative h-64 rounded-lg overflow-hidden border bg-muted">
              <Image
                src={AdSlotImg}
                alt="Ad Slot Details"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold">Ad Slot Details</h3>
            <p className="text-sm text-muted-foreground">
              Detailed view of advertising slots with audience insights and booking options.
            </p>
          </div>
        </div>
      </div>

      {/* Engineering Highlights */}
      <div className="mb-16">
        <h2 className="text-3xl font-medium tracking-tight mb-8">Engineering Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {engineeringHighlights.map((highlight, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-base leading-relaxed">{highlight}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* GitHub Section */}
      <div className="mb-20">
        <Card className="border-2 border-dashed">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Github className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>View Source Code</CardTitle>
            <CardDescription>
              Explore the complete implementation on GitHub
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button asChild size="lg" className="gap-2">
              <Link href="https://github.com/arjunpkulkarni/anvaraTakeHome" target="_blank">
                <Github className="h-4 w-4" />
                View on GitHub
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}