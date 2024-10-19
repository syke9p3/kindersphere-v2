<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class StudentController extends Controller
{
    public function index()
    {
        $students = Student::all();
        return Inertia::render('Students/Index', ['students' => $students]);
    }

    public function create()
    {
        return Inertia::render('Students/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'age' => 'required|integer',
            'email' => 'required|string|email|max:255|unique:students',
            'sex' => 'nullable|string',
            'avatar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // Validate image
        ]);

        
        // We want to store avatar file path to database
        $avatarPath = null;
        if ($request->hasFile('avatar')) {
           // If the user form input contains an avatar file, we store the file in public/avatar
            $avatarPath = $request->file('avatar')->store('avatars', 'public');
       }

        Student::create([
            'name' => $request->name,
            'age' => $request->age,
            'email' => $request->email,
            'sex' => $request->sex,
            'avatar' => $avatarPath, 
        ]);

        return redirect()->route('students.index')->with('success', 'Student created successfully.');
    }

    public function edit(Student $student)
    {
        return Inertia::render('Students/Edit', ['student' => $student]);
    }

    public function update(Request $request, Student $student)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'age' => 'required|integer',
            'email' => 'required|string|email|max:255|unique:students,email,' . $student->id,
            'sex' => 'nullable|string',
            'avatar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // Validate image
        ]);

        // Get the currently stored avatar file path of the edited student
        $avatarPath = $student->avatar;
        
        // If the user uploads an image
        if ($request->hasFile('avatar')) {

            // Delete old avatar if it exists
            if ($avatarPath) {
                Storage::disk('public')->delete($avatarPath);
            }
            $avatarPath = $request->file('avatar')->store('avatars', 'public');

        }

        $student->update([
            'name' => $request->name,
            'age' => $request->age,
            'email' => $request->email,
            'sex' => $request->sex,
            'avatar' => $avatarPath, 
        ]);

        return redirect()->route('students.index')->with('success', 'Student updated successfully.');
    }

    public function destroy(Student $student)
    {
        $student->delete();
        return redirect()->route('students.index');
    }
}
