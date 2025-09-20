import hex from '@/assets/icons/hex.svg';
import { Button } from '@/components/ui/button';
import Layout from '@/layouts/layout-light';
import { Head, Link } from '@inertiajs/react';

interface SellPoint {
    title: string;
    content: string;
}

interface Course {
    title: string;
    duration: string;
    items: string[];
}

export default function product({ courses, sellPoints }: { courses: Course[]; sellPoints: SellPoint[] }) {
    console.log(courses);
    return (
        <Layout>
            <Head title="product" />

            <section className="my-20">
                <h2 className="mb-6 text-center text-3xl font-bold md:text-6xl">Product Management</h2>
                <div className="mx-auto max-w-xl px-5 text-center">
                    <p className="mb-14 text-lg">
                        Hands-on product management training to prepare and equip you to excel anywhere you find yourself in the world.
                    </p>
                    <Link href={route('start-learning')}>
                        <Button className="bg-[#00AE48] px-8 hover:bg-[#008A38]">Start Learning</Button>
                    </Link>
                </div>
            </section>

            <section>
                <div className="mx-auto max-w-7xl grid-cols-3 gap-20 px-5 md:grid">
                    {sellPoints.map((sellPoint) => (
                        <div className="my-10 md:my-0">
                            <img src={hex} alt="Hex Icon" className="mb-4" />
                            <p className="font-display py-[16px] text-3xl">{sellPoint.title}</p>
                            <p className="text-xl">{sellPoint.content}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="mx-auto max-w-7xl gap-20 px-5 py-32 md:grid md:grid-cols-2">
                {courses.map((course: Course) => (
                    <div className="border-bg-[#CCCCCC} my-10 w-full rounded-sm border px-6 py-6 md:my-0 md:px-6 lg:px-8">
                        <h3 className="text-3xl">{course.title}</h3>
                        <p className="mb-10 text-lg">
                            Duration: <span className="text-black/60"> {course.duration}</span>
                        </p>
                        {course.items.map((item) => (
                            <div className="my-3 flex items-center">
                                <img src={hex} alt="Hex Icon" width={'45px'} className="px-3" />
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </section>
        </Layout>
    );
}
