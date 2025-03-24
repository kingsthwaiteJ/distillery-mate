import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./../app/globals.css";
import { useRouter } from "next/router";
import Navigation, { NavigationItem } from "./navigation";
import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadata: Metadata = {
  title: "Distillery Mate",
  description: "Distilling journaling and inventory management tool.",
};

export default function RootLayout({
  children,
  name
}: Readonly<{
  children: React.ReactNode;
  name?: string;
}>) {  
  const navItems: NavigationItem[] = [
    { path: "/", label: "Home" },
    { path: "/inventory", label: "Inventory" },
    { path: "/inventory/consumables", label: "Consumables", parent: "Inventory" },
    { path: "/inventory/equipment", label: "Equipment", parent: "Inventory" },
    { path: "/journal-entries", label: "Journal Entries" },
    { path: "/journal-entries/[slug]", label: "Journal Entry", parent: "Journal Entry" },
    { path: "/recipes", label: "Recipes" },
    { path: "/recipes/[slug]", label: "Recipe", parent: "Recipes" },
  ];

  // Determine whether navigate back is available for this route.
  const router = useRouter();
  const currentRoute = navItems.find((item) => {
    return item.path == router.pathname;
  });
  let navigateBackRoute = undefined;
  if (currentRoute && currentRoute.parent) {
    navigateBackRoute = navItems.find((item) => {
      return item.label == currentRoute.parent;
    });
  }

  return (
    <div>
      <div className="header font-[family-name:var(--font-geist-sans)]">
        <h2>
          Distillery Mate
        </h2>
        {name && 
            <div>
              <h1>
                {name}
              </h1>
              {navigateBackRoute &&
                <Link href={navigateBackRoute.path} className='rounded-full border border-solid transition-colors flex items-center justify-center border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent md:w-[200px]'>
                  <FontAwesomeIcon icon={["fas", "arrow-left"]} />Back to {navigateBackRoute.label}</Link>}
            </div>}
      </div>
      <div className="content font-[family-name:var(--font-geist-sans)]">
        {children}
      </div>
      {Navigation({ items: navItems })}
    </div>
  );
}
