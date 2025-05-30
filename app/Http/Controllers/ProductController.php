<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class ProductController extends Controller
{

    public function index()
    {
        $courses = [
            [
                "title" => "Entry-level PM",
                "duration" => "12 weeks",
                "items" => [
                    "Introduction to Product Management",
                    'Problem Discovery',
                    "Introduction to Documentation",
                    "Introduction to Product Discovery",
                    "Product Design",
                    "Strategy & Metrics",
                    "Product Documentation and Communication",
                    "Product Development",
                    "Product Launch",
                    "Technical Knowledge for PMs"
                ]
            ],
            [
                "title" => "Mid-level PM",
                "duration" => "12 weeks",
                "items" => [
                    "Strategic Product Thinking",
                    "Advanced Product Leadership",
                    "Advanced Product Development and Execution",
                    "Advanced Product Discovery",
                    "Technical Fluency for Senior PMs",
                    "Advance Negotiation, Influence, Innovation and Crisis Management",
                    "Go-to-Market Leadership",
                    "Leadership and Career Growth",
                    "Capstone Project and Certification",
                ]
            ]
        ];
        return Inertia::render('product', compact('courses'));
    }
}
