"use client";

import {
  Briefcase,
  Building2,
  ChevronDown,
  GraduationCap,
  Menu,
  Phone,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useRef, useState } from "react";
import { Button } from "./ui/button";

const navItems = [
  {
    title: "About",
    path: "/about",
    icon: <Users className="h-4 w-4" />,
    submenu: [
      { title: "Mission", path: "/about#mission" },
      { title: "Core Values", path: "/about#core-values" },
    ],
  },
  {
    title: "Services",
    path: "/services",
    icon: <Briefcase className="h-4 w-4" />,
    submenu: [
      { title: "Permanent Staffing", path: "/services/permanent-staffing" },
      { title: "Contract Staffing", path: "/services/contract-staffing" },
      { title: "Executive Search", path: "/services/executive-search" },
      { title: "Recruitment Process", path: "/services/recruitment-process" },
    ],
  },
  {
    title: "Industry Practice",
    path: "/industry-practice",
    icon: <Building2 className="h-4 w-4" />,
    submenu: [
      {
        title: "Industry Verticals",
        path: "/industry-practice?tab=industries",
      },
      { title: "Technologies", path: "/industry-practice?tab=technologies" },
    ],
  },
  {
    title: "Careers",
    path: "/careers",
    icon: <GraduationCap className="h-4 w-4" />,
    submenu: [
      // { title: "Job Search", path: "/careers#positions" },
      { title: "Apply Online", path: "/careers/apply" },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  const [currentSubMenu, setCurrentSubMenu] = useState<string>("");
  const [persist, setPersist] = useState<boolean>(false);
  const toggleSubmenu = (title: string) => {
    setActiveSubmenu(activeSubmenu === title ? null : title);
  };

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  const [submenuTimeout, setSubmenuTimeout] = useState<NodeJS.Timeout | null>(
    null,
  );
  const submenuRef = useRef<HTMLDivElement | null>(null);

  const showSubMenu = useCallback(
    (title: string) => {
      if (submenuTimeout) {
        clearTimeout(submenuTimeout);
      }
      setCurrentSubMenu(title);
    },
    [submenuTimeout],
  );

  const hideSubMenu = useCallback(() => {
    const timeout = setTimeout(() => {
      if (submenuRef.current && submenuRef.current.matches(":hover")) {
        return; // If still hovered, do nothing
      }
      setCurrentSubMenu("");
    }, 300); // Delay hiding

    setSubmenuTimeout(timeout);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="relative flex items-center gap-2 w-[200px] h-full py-2"
        >
          <Image src="/logo.png" alt="LOGO" fill className="static" />
        </Link>

        <button className="block md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <nav className="hidden md:flex md:gap-6 items-center">
          {navItems.map(({ title, path, submenu, icon }) => (
            <div
              key={`nav-item-${title}-${path}`}
              className="relative"
              onMouseEnter={() => showSubMenu(title)}
              onMouseLeave={hideSubMenu}
            >
              <div className="flex items-center cursor-pointer">
                <Button
                  asChild
                  variant="ghost"
                  className={`px-1 hover:underline ${currentSubMenu === title && "underline"} underline-offset-2`}
                >
                  <Link href={path}>{title}</Link>
                </Button>
                {submenu.length > 0 && (
                  <ChevronDown
                    className={`h-4 w-4 ${currentSubMenu === title ? "rotate-180" : ""}`}
                  />
                )}
              </div>

              {/* Submenu */}
              {currentSubMenu === title && (
                <div
                  ref={submenuRef}
                  className="absolute left-0 top-full z-10 mt-2 w-48 rounded-md border bg-card p-2 shadow-lg"
                  onMouseEnter={() => {
                    if (submenuTimeout) clearTimeout(submenuTimeout); // Prevent hiding if re-hovered
                  }}
                  onMouseLeave={hideSubMenu}
                >
                  {submenu.map((subItem) => (
                    <Link
                      key={subItem.path}
                      href={subItem.path}
                      className={`block rounded-sm px-3 py-2 text-sm transition-colors hover:bg-muted ${
                        pathname === subItem.path ? "bg-muted font-medium" : ""
                      }`}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Button variant="interactive">
            <Link href="/contact" className="relative flex items-center z-10">
              <Phone className="mx-2" />
              Book a Call
            </Link>
          </Button>
        </nav>

        {isOpen && (
          <div className="absolute inset-x-0 top-16 z-50 border-b bg-background p-4 md:hidden">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.title} className="space-y-2">
                  <button
                    className={`flex w-full items-center justify-between font-medium ${
                      isActive(item.path) ? "text-primary" : "text-foreground"
                    }`}
                    onClick={() => toggleSubmenu(item.title)}
                  >
                    <div className="flex items-center gap-2 text-md">
                      {item.icon}
                      {item.title}
                    </div>
                    {item.submenu.length > 0 && (
                      <ChevronDown
                        className={`h-6 w-4 transition-transform ${activeSubmenu === item.title ? "rotate-180" : ""}`}
                      />
                    )}
                  </button>

                  {item.submenu.length > 0 && activeSubmenu === item.title && (
                    <div className="ml-6 mt-2 flex flex-col gap-2 border-l pl-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.path}
                          href={subItem.path}
                          className={`text-sm transition-colors hover:text-primary ${
                            pathname === subItem.path
                              ? "font-medium text-primary"
                              : "text-muted-foreground"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Button variant="interactive">
                <Link
                  href="/contact-us"
                  className="relative flex items-center z-10"
                >
                  <Phone className="mx-2" />
                  Book a Call
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
