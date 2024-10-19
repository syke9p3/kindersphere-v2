<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index() {
        $students = Student::all();
        $studentsCount = Student::count();

        return Inertia::render('Dashboard', [
            'students' => $students,
            'studentsCount' => $studentsCount,
        ]);
    }

}
