<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function submitContactForm(Request $request)
    {

        $validated = $request->validate([
            'first_name' => 'required',
            'email' => 'required|email',
            'last_name' => 'required',
            'course' => 'required',
            'note' => 'max:400'
        ]);


        Contact::create($validated);


    }
}
