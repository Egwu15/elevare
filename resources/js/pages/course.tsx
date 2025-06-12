import hex from '@/assets/icons/hex.svg';
import { Button } from '@/components/ui/button';
import Layout from '@/layouts/layout-light';
import { Head, Link } from '@inertiajs/react';

interface SellPoint {
    title: string;
    content: string;
}

interface Course {
    PageTitle: string;
    subtitle: string;
    sellPoints: SellPoint[];
    asideTitle: string;
    asideContent: string;
    duration: string;
    courseCurriculum: string[];
}

export default function course({ course }: { course: Course }) {
    return (
        <Layout>
            <Head title="product" />

            <section className="my-40">
                <p className="font-display mb-6 text-center text-3xl font-bold md:text-6xl">{course.PageTitle}</p>

                <p className="mb-14 text-center text-[20px]">{course.subtitle}</p>
                <div className="mx-auto max-w-xl px-5 text-center">
                    <Link href={route('start-learning')}>
                        <Button className="bg-[#00AE48] px-8 hover:bg-[#008A38]">Start Learning</Button>
                    </Link>
                </div>
            </section>

            <section className="bg-[#F7F7F7] pb-[120px]">
                <div className="mx-auto max-w-7xl grid-cols-3 gap-20 px-5 py-40 md:grid">
                    {course.sellPoints.map((sellPoint) => (
                        <div className="my-10 md:my-0">
                            <img src={hex} alt="Hex Icon" className="mb-4" />
                            <p className="font-display py-[16px] text-3xl">{sellPoint.title}</p>
                            <p className="text-xl">{sellPoint.content}</p>
                        </div>
                    ))}
                </div>

                <div className="mx-auto max-w-7xl grid-cols-2 gap-20 px-5 py-4 md:grid">
                    <div className="max-w-2xl">
                        <h2 className="text-[40px] font-medium">{course.asideTitle}</h2>
                        <p className="text-xl">{course.asideContent}</p>
                    </div>
                    <div className="border-bg-[#CCCCCC} my-10 w-full rounded-sm border px-6 py-6 md:my-0 md:px-6 lg:px-8">
                        <p className="font-display text-3xl">Course Curriculum</p>
                        <p className="mb-10 pt-[12px] text-lg">
                            Duration: <span className="text-black/60"> {course.duration}</span>
                        </p>
                        {course.courseCurriculum.map((item) => (
                            <div className="my-3 flex items-center">
                                <img src={hex} alt="Hex Icon" width={'45px'} className="px-3" />
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}
