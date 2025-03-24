import "./../app/globals.css";
import { useRouter } from "next/router";
import Link from "next/link";

export type NavigationItem = {
  path: string;
  label: string;
  parent?: string;
}

export type NavigationProps = {
  items: NavigationItem[]
}

export default function Navigation({
  items
}: Readonly<NavigationProps>) {
  const router = useRouter();

  const navItems = items.filter((item) => {
    return !item.parent;
  })

  const baseLinkClasses = 'rounded-full border border-solid transition-colors flex items-center justify-center font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto md:w-[158px]';
  const activeLinkClasses = 'bg-foreground text-background border-transparent gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc]';
  const inactiveLinkClass = 'border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent w-full';

  return (
    <div className="navigation items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
        {navItems.map((item) => (
          <Link href={item.path} className={`${baseLinkClasses} ${router.pathname == item.path ? activeLinkClasses : inactiveLinkClass}`} key={item.label}
              rel="noopener noreferrer">
              {item.label}
          </Link>
        ))}
        </div>
      </main>
    </div>
  );
}
