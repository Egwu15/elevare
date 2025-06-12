import hex from '@/assets/icons/hex.svg';
import alice from '@/assets/images/alice.jpg';
import charles from '@/assets/images/charles.jpg';
import emily from '@/assets/images/emily.jpg';
import product from '@/assets/images/product.jpg';
import { Button } from '@/components/ui/button';
import LayoutDark from '@/layouts/layout-dark';
import { Head, Link } from '@inertiajs/react';

export default function about() {
    return (
        <LayoutDark>
            <Head title="about" />
            <main>
                <section className="w-full bg-black px-5 py-14 text-white md:px-0">
                    <div className="mx-auto max-w-lg text-center">
                        <h2 className="mb-6 text-4xl">About Us</h2>

                        <p className="mb-14 text-lg">
                            We are not just an institution; we are a community of visionaries dedicated to shaping the future of professional
                            education. Our diverse faculty, composed of industry experts and seasoned professionals, brings a wealth of knowledge to
                            our vibrant learning environment.
                        </p>
                        <Link href={route('start-learning')}>
                            <Button className="bg-[#00AE48] px-8 hover:bg-[#008A38]">Start Learning</Button>
                        </Link>
                    </div>
                </section>
                <section className="mx-auto max-w-7xl items-center justify-between px-5 py-32 md:flex">
                    <div className="mb-4 max-w-lg md:mb-0">
                        <h3 className="mb-4 text-3xl">Our Mission</h3>
                        <p className="text-lg">
                            Empowering Professionals, Drive Growth, Achieve Excellence. To empower Sub‑Saharan African professionals with accessible,
                            hands‑on, industry‑aligned education that equips them to excel in global markets and drive regional innovation.
                        </p>
                    </div>

                    <img src={product} alt="product" />
                </section>
                <section className="mx-auto max-w-7xl items-center justify-between pb-32">
                    <h2 className="text-center text-4xl">What Sets Us Apart</h2>
                    <div className="my-20 grid-cols-3 gap-20 px-5 md:grid">
                        <div className="my-10 md:my-0">
                            <img src={hex} alt="Hex Icon" className="mb-4" />
                            <h3 className="text-3xl">Practical Insight</h3>
                            <p className="text-xl">
                                Gain hands-on experience and practical insights through our immersive learning environments. Our classrooms prepare
                                you for the challenges of the real world.
                            </p>
                        </div>

                        <div className="my-10 md:my-0">
                            <img src={hex} alt="Hex Icon" className="mb-4" />
                            <h3 className="text-3xl">Expert Guidance</h3>
                            <p className="text-xl">
                                Learn from the best in the industry. Our faculty comprises professionals with extensive experience, ensuring you
                                receive mentorship that is both insightful and relevant.
                            </p>
                        </div>

                        <div className="my-10 md:my-0">
                            <img src={hex} alt="Hex Icon" className="mb-4" />
                            <h3 className="text-3xl">Collaborative Community</h3>
                            <p className="text-xl">
                                Your journey with us is not confined to the duration of your program. Join a community of alumni who continue to
                                learn, grow, and support each other throughout their careers.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="w-full">
                    <h2 className="text-center text-4xl font-medium">Meet Our Advisors</h2>
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
                                Join our growing network of global industry leaders, investors, and corporate partners. Elevare Academy is not just an
                                education provider—we’re a catalyst for change
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
        </LayoutDark>
    );
}
