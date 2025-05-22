import homeHeaderImage from '@/assets/images/homeHeaderImage.png';
import AppLogoIcon from '@/components/app-logo-icon';
import { Button } from '@/components/ui/button';
import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <header className="mx-auto my-6 w-full bg-black text-sm">
                <nav className="mx-auto mt-4 flex items-center justify-between gap-4 px-5 md:px-0 lg:max-w-6xl">
                    <AppLogoIcon />
                    <Button variant="outline" className="border-white text-white">
                        Explore Courses
                    </Button>
                </nav>
            </header>
            <div className="flex w-full opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                <main className="mx-auto w-full max-w-6xl px-5 md:px-0">
                    <section className="mt-14 w-full items-center justify-between md:flex">
                        <div className="max-w-lg">
                            <p className="mb-6 text-4xl">
                                Elevating Careers,
                                <br /> Transforming Lives
                            </p>
                            <p className="mb-14">
                                Hands-on, industry-aligned education that bridges the gap between theory and real-world success. Designed for
                                professionals who aspire to scale new heights
                            </p>
                            <Button className="bg-green-500 text-white hover:bg-green-400">Start Learning</Button>
                        </div>

                        <div className="invisible md:visible">
                            <img src={homeHeaderImage} alt="Professionals" />
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}
