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

        $sellPoints = [
            [
                "title" => "Build Products",
                "content" => "Gain hands-on experience in discovery, design, development, and launch, so you can take products from idea to market successfully."
            ],
            [
                "title" => "Shape Strategy",
                "content" => "Learn how to set product vision, define success metrics, and communicate effectively with cross-functional teams and executives.",
            ],
            [
                "title" => "Lead Growth",
                "content" => "Develop advanced leadership, influence, and technical fluency to position yourself for global opportunities as a product leader.",
            ],
        ];
        return Inertia::render('product', compact('courses', 'sellPoints'));
    }
}
