<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class CourseController extends Controller
{
    public function leaderShip()
    {
        $course = [
            'PageTitle' => 'Leadership & Strategy',
            'subtitle' => 'This program builds your ability to lead and manage effectively. ',
            'sellPoints' => [
                [
                    "title" => "Manage Teams",
                    "content" => "Understand team dynamics, delegate tasks, and foster a collaborative work environment."
                ],
                [
                    "title" => "Drive Change",
                    "content" => "Learn practical change management frameworks and techniques to implement new ideas successfully.",
                ],
                [
                    "title" => "Influence Stakeholders",
                    "content" => "Develop clear communication methods and negotiation skills to gain support from various groups.",
                ],
            ],

            "asideTitle" => "Leadership & Strategy",
            "asideContent" => "Designed to build your ability to lead teams, drive change, and influence key stakeholders. This program combines modern leadership theories with practical frameworks that address everyday challenges in Nigeria's dynamic business environment.",
            "duration" => "12 weeks",
            "courseCurriculum" => [
                "Foundations of Leadership",
                "Effective Communication",
                "Strategic Planning & Execution",
                "Change Management",
                "Stakeholder Engagement",
                "Decision-Making Models",
                "Local Business Dynamics",
            ]
        ];

        return Inertia::render('course', compact('course'));
    }

    public function data()
    {
        $course = [
            'PageTitle' => 'Data & Technology',
            'subtitle' => 'This course equips you with essential digital skills. ',
            'sellPoints' => [
                [
                    "title" => "Analytics",
                    "content" => "Discover how to interpret data to support business decisions using basic statistics and visualization tools."
                ],
                [
                    "title" => "AI/ML Fundamentals",
                    "content" => "Learn the basics of artificial intelligence and machine learning to understand their potential in solving common business challenges.",
                ],
                [
                    "title" => "Cloud Technologies",
                    "content" => "Gain an overview of cloud computing and how it can streamline operations and improve efficiency.",
                ],
            ],

            "asideTitle" => "Data & Technology",
            "asideContent" => "Equipped to help you with essential digital skills to harness data and emerging technologies. This course emphasizes easy-to-understand practices and hands-on exercises, ensuring you can translate technical insights into practical business decisions.",
            "duration" => "12 weeks",
            "courseCurriculum" => [
                "Introduction to Data Analytics",
                "Fundamentals of Data Interpretation",
                "Artificial Intelligence & Machine Learning Fundamentals",
                "Cloud Computing Essentials",
                "Data Security & Compliance",
                "Industry-Specific Data Practices",
            ]
        ];

        return Inertia::render('course', compact('course'));
    }

    public function design()
    {
        $course = [
            'PageTitle' => 'Design Thinking & Innovation',
            'subtitle' => 'This program helps you turn ideas into actionable solutions.',
            'sellPoints' => [
                [
                    "title" => "User-Centric Approach",
                    "content" => "Master techniques to identify customer needs and pain points through direct engagement and observation."
                ],
                [
                    "title" => "Creative Problem Solving",
                    "content" => "Practice the design thinking process—from brainstorming and prototyping to testing solutions—using straightforward, effective methods.",
                ],
                [
                    "title" => "Iterative Innovation",
                    "content" => "Learn how to refine your ideas through continuous feedback and incremental improvements.",
                ],
            ],

            "asideTitle" => "Design Thinking & Innovation",
            "asideContent" => "Designed to help you transform ideas into actionable solutions using a user-centric approach. This program encourages creative problem solving and iterative innovation, with a strong emphasis on real-world applications.",
            "duration" => "12 weeks",
            "courseCurriculum" => [
                "Introduction to Design Thinking",
                "User Research and Empathy",
                "Ideation and Brainstorming Techniques",
                "Prototyping and Rapid Iteration",
                "User Testing and Feedback Analysis",
                "Agile Experimentation",
                "Local Challenges and Opportunities:",
            ]
        ];

        return Inertia::render('course', compact('course'));
    }


}
