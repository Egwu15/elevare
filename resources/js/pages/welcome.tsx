import hex from '@/assets/icons/hex.svg';
import alice from '@/assets/images/alice.jpg';
import charles from '@/assets/images/charles.jpg';
import data from '@/assets/images/data.jpg';
import design from '@/assets/images/design.jpg';
import emily from '@/assets/images/emily.jpg';
import homeHeaderImage from '@/assets/images/homeHeaderImage.png';
import lead from '@/assets/images/lead.jpg';
import product from '@/assets/images/product.jpg';
import CourseCard from '@/components/home/course-card';
import { Button } from '@/components/ui/button';
import LayoutDark from '@/layouts/layout-dark';
import { Head, Link } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <LayoutDark>
                <div>
                    <main className="w-full opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                        <section className="w-full bg-black px-5 md:px-0">
                            <section className="mx-auto w-full max-w-7xl items-center justify-between py-14 text-white md:flex">
                                <div className="max-w-2xl">
                                    <h2 className="mb-6 text-4xl md:text-6xl">
                                        Elevating Careers,
                                        <br /> Transforming Lives
                                    </h2>

                                    <p className="mb-14">
                                        Hands-on, industry-aligned education that bridges the gap between theory and real-world success. Designed for
                                        professionals who aspire to scale new heights
                                    </p>
                                    <Link href={route('start-learning')}>
                                        <Button className="bg-green-500 px-8 hover:bg-[#008A38]">Start Learning</Button>
                                    </Link>
                                </div>
                                <div className="hidden md:block">
                                    <img src={homeHeaderImage} alt="Professionals" />
                                </div>
                            </section>
                        </section>
                        <section>
                            <div className="my-20 w-full grid-cols-3 bg-white p-5 md:grid md:p-20">
                                <h3 className="text-4xl md:text-5xl">
                                    Online Learning <br /> <span className="text-[#006A2C]">Designed for</span>
                                    <br /> <span className="text-[#006A2C]">Professionals</span>
                                </h3>
                                <div className="mb:mt-8 mx-0 mt-14 md:mt-0">
                                    <div className="mb-10 md:mt-0">
                                        <h3 className="mb-4 text-3xl md:text-[32px]">Hands-On Learning</h3>
                                        <p className="mb-3 text-xl md:mb-0">
                                            Engage in real-world projects, case studies, and simulations that mirror actual business challenges.
                                        </p>
                                    </div>
                                    <div className="mb-10 md:mt-0">
                                        <h3 className="mt-4 mb-4 text-3xl md:mt-14 md:text-[32px]">Personalized Career Paths</h3>
                                        <p className="mb-3 text-xl md:mb-0">
                                            Customized programs that align with your aspirations—whether you're climbing the corporate ladder or
                                            leading your own venture.
                                        </p>
                                    </div>
                                </div>
                                <div className="md:pl-2">
                                    <div className="mb-10 md:mt-0">
                                        <h3 className="mb-4 text-3xl md:mt-0 md:text-[32px]">Learn with Others</h3>
                                        <p className="mb-3 text-xl md:mb-0">
                                            We provide you with a community that you can interact and grow with so you don’t learn alone .
                                        </p>
                                    </div>
                                    <div className="mb-10 md:mt-0">
                                        <h3 className="mt-4 mb-4 text-3xl md:mt-14 md:text-[32px]">Global Perspective</h3>
                                        <p className="mb-3 text-xl md:mb-0">
                                            Learn alongside a diverse community of professionals from around the world.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="mx-auto w-full max-w-7xl px-5 md:px-0">
                            <div className="px-4 text-center">
                                <h2 id="explore" className="text-4xl font-medium">
                                    Our Programs
                                </h2>
                                <p className="mx-auto mt-5 max-w-lg text-xl">
                                    Each program run for 12 weeks and is designed by top industry experts to ensure you gain the skills that matter
                                    most in today's competitive landscape.
                                </p>
                            </div>

                            <div className="mt-20 grid-cols-2 gap-20 md:grid">
                                <CourseCard
                                    courseTitle="Product Management"
                                    courseDescription="Master strategic thinking, competitive analysis, and agile execution."
                                    courseImage={product}
                                    route={route('product')}
                                />{' '}
                                <CourseCard
                                    courseTitle="Leadership & Strategy"
                                    courseDescription="Develop the skills to manage teams, drive change, and influence stakeholders."
                                    courseImage={lead}
                                    route={route('course.leadership')}
                                />{' '}
                                <CourseCard
                                    courseTitle="Data & Technology"
                                    courseDescription="Harness analytics, AI/ML, and cloud technologies to make data-driven decisions."
                                    courseImage={data}
                                    route={route('course.data')}
                                />{' '}
                                <CourseCard
                                    courseTitle="Design Thinking & Innovation"
                                    courseDescription="Transform ideas into reality with user-centric design and creative problem-solving."
                                    courseImage={design}
                                    route={route('course.design')}
                                />
                            </div>
                        </section>
                        <section className="my-36 bg-[#EAF0ED]">
                            <div className="mx-auto w-full max-w-7xl px-5 py-32 md:px-0">
                                <div className="mb-14">
                                    <h3 className="text-4xl">
                                        Flexible & <br /> Accessible Learning
                                    </h3>
                                    <p className="mt-5 max-w-sm text-xl">
                                        Elevare Academy offers a dynamic learning experience that fits your schedule.
                                    </p>
                                </div>
                                <div className="grid-cols-3 gap-20 md:grid">
                                    <div className="my-10 md:my-0">
                                        <img src={hex} alt="Hex Icon" className="mb-4" />
                                        <p className="pb-[16px] text-3xl">Engage in Workshops</p>
                                        <p className="text-xl">Participate in immersive, hands-on sessions from anywhere you are in the world.</p>
                                    </div>

                                    <div className="my-10 md:my-0">
                                        <img src={hex} alt="Hex Icon" className="mb-4" />
                                        <p className="pb-[16px] text-3xl">Cohort Based Learning</p>
                                        <p className="text-xl">
                                            You’ll learn together with peers in live classes with access to recordings so you can replay at any time.
                                        </p>
                                    </div>

                                    <div className="my-10 md:my-0">
                                        <img src={hex} alt="Hex Icon" className="mb-4" />
                                        <p className="pb-[16px] text-3xl">Access to Mentorship</p>
                                        <p className="text-xl">Schedule calls with mentors for a one-on-one session when necessary.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="w-full">
                            <h2 className="text-center text-4xl font-medium">Meet Your Instructors</h2>
                            <div className="mt-20 mb-32 max-w-7xl grid-cols-3 gap-3 px-5 md:mx-auto md:grid">
                                <div className="mt-3 mb-9 md:mt-0 md:mb-0">
                                    <img src={charles} alt="charles" />
                                    <h3 className="mt-1 text-3xl"> Charles Oloyede</h3>
                                    <p className="text-xl">Product Lead at GIGMobility</p>
                                </div>
                                <div className="mt-3 mb-9 md:mt-0 md:mb-0">
                                    <img src={alice} alt="alice" />
                                    <h3 className="mt-1 text-3xl"> Alicia Jeffrey</h3>
                                    <p className="text-xl">Product Lead at GIGMobility</p>
                                </div>
                                <div className="mt-3 md:mt-0">
                                    <img src={emily} alt="emily" />
                                    <h3 className="mt-1 text-3xl"> Emily McDorough</h3>
                                    <p className="text-xl">Product Manager at Figma</p>
                                </div>
                            </div>
                        </section>
                        <section className="bg-[#EAF0ED]">
                            <div className="mx-auto w-full max-w-7xl px-5 py-32 md:flex md:px-0">
                                <div className="w-full">
                                    <h2 className="mb-4 text-3xl font-medium">Partner with Us</h2>
                                    <p className="max-w-sm text-xl">
                                        Join our growing network of global industry leaders, investors, and corporate partners. Elevare Academy is not
                                        just an education provider—we’re a catalyst for change
                                    </p>
                                    <Button className="mt-9 rounded-sm bg-[#00AE48] px-16 hover:bg-green-400">Join Us</Button>
                                </div>

                                <div className="my-20 w-full md:my-0">
                                    <div className="mb-14 w-full">
                                        <div className="max-w-lg">
                                            <h3 className="pb-[16px] text-3xl">Talent Pipeline</h3>
                                            <p className="text-xl">Gain early access to our pool of highly skilled professionals.</p>
                                        </div>
                                    </div>
                                    <div className="mb-14 w-full">
                                        <div className="max-w-lg">
                                            <h3 className="pb-[16px] text-3xl">Co-Creation</h3>
                                            <p className="text-xl">
                                                Collaborate with us to design custom training solutions that meet your organization’s needs.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mb-14 w-full">
                                        <div className="max-w-lg">
                                            <h3 className="pb-[16px] text-3xl">Strategic Alliances</h3>
                                            <p className="text-xl">Leverage partnerships that drive innovation and elevate industry standards.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </LayoutDark>
        </>
    );
}
