import arrowIcon from '@/assets/icons/arrow_icon.svg';

interface CourseCardInterface {
    courseTitle: string;
    courseDescription: string;
    courseImage: string;
}

export default function CourseCard({ courseTitle, courseDescription, courseImage }: CourseCardInterface) {
    return (
        <div className="mb-6 overflow-hidden rounded-sm bg-[#F7F7F7] md:mb-0">
            <div className="flex items-start justify-between p-10">
                <div className="">
                    <p className="text-xl">{courseTitle}</p>
                    <p className="text-xl">{courseDescription}</p>
                </div>
                <img src={arrowIcon} alt="Arrow" />
            </div>
            <img src={courseImage} alt="Product Management" />
        </div>
    );
}
