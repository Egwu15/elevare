import arrowIcon from '@/assets/icons/arrow_icon.svg';
import { Link } from '@inertiajs/react';

interface CourseCardInterface {
    courseTitle: string;
    courseDescription: string;
    courseImage: string;
    route: string;
}

export default function CourseCard({ courseTitle, courseDescription, courseImage, route }: CourseCardInterface) {
    return (
        <Link href={route}>
            <div className="mb-10 overflow-hidden rounded-sm bg-[#F7F7F7] md:mb-0">
                <div className="flex items-start justify-between p-5 md:p-10">
                    <div className="">
                        <h3 className="text-3xl">{courseTitle}</h3>
                        <p className="text-xl">{courseDescription}</p>
                    </div>
                    <img src={arrowIcon} width={50} className="md:ml-4" alt="Arrow" />
                </div>
                <img src={courseImage} alt="Product Management" />
            </div>
        </Link>
    );
}
