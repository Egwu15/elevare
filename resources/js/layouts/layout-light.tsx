import AppLogoIconDark from '@/components/app-logo-dark-icon';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Link } from '@inertiajs/react';
import { Menu } from 'lucide-react';
import React from 'react';

function LayoutLight({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <header className="w-full bg-white px-5">
                {/* Logo */}
                <nav className="mx-auto flex h-16 items-center justify-between md:max-w-7xl">
                    <Link href="/" className="flex items-center space-x-2">
                        <AppLogoIconDark />
                    </Link>

                    {/* Desktop CTA Button */}
                    <div className="hidden items-center md:flex">
                        <Link href={route('about')}>
                            <h2 className="mx-0 text-lg font-bold text-green-500 md:mx-6">About Us</h2>
                        </Link>

                        <Link href={`${route('home')}/#explore`}>
                            <Button variant="outline" className="border-2 border-green-500 bg-white font-bold text-green-500">
                                Explore Courses
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Drawer */}
                    <div className="flex md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-5 w-5 text-black" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-64 bg-white">
                                <SheetHeader>
                                    <SheetTitle>Menu</SheetTitle>
                                </SheetHeader>
                                <div className="mt-4 flex flex-col space-y-4">
                                    <Link href={route('about')}>
                                        <h2 className="mx-0 text-lg text-white md:mx-6">About us</h2>
                                    </Link>
                                    <Link href={route('about')}>
                                        <h2 className="mx-0 text-lg text-white md:mx-6">Courses</h2>
                                    </Link>
                                    <Link href="/contact" className="text-sm text-black dark:text-white">
                                        Contact
                                    </Link>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </nav>
            </header>
            {children}

            <footer className="mx-auto bg-black px-5 py-32 text-center text-white">
                <div>
                    <h2 className="mb-4 text-4xl font-medium">Get Started Today</h2>
                    <p className="mx-auto max-w-lg text-center text-xl">
                        Take the first step towards a transformative career. Explore our courses, connect with our expert faculty, and join a
                        community dedicated to professional excellence.
                    </p>

                    <Link href={`${route('home')}/#explore`}>
                        <Button className="mt-9 rounded-sm bg-[#00AE48] px-16 hover:bg-green-400">Explore Courses</Button>
                    </Link>
                </div>
                <div className="mx-auto max-w-7xl">
                    <hr className="my-28 border-white/40" />
                </div>
                <div>
                    <h2 className="mb-4 text-3xl font-medium md:text-4xl">Have questions?</h2>
                    <h2 className="mx-auto text-center text-2xl md:text-3xl">Reach out to us at info@elevareng.com</h2>
                    <p className="mx-auto mt-6 px-3 text-center text-xl text-white/40">
                        Elevare Academy – Empowering Professionals to Scale New Heights
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default LayoutLight;
