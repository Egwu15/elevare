<?php

namespace App\Http\Controllers;

class CourseController extends Controller
{
    public function leaderShip()
    {
        $course = [
            'PageTitle' => 'Leadership & Strategy',
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
    }
}
