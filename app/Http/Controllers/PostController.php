<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    //

    public function index() {
        
        // Get posts from db
        $posts = Post::with('user')->get();

        // send the fetched posts to frontend
        return Inertia::render('Posts/Index', [
            'posts' => $posts,
        ]);
        
    }

   public function create() {
     return Inertia::render('Posts/Create'); 
   }

   public function store(Request $request) {
        Post::create($request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string',
        ]));

        return redirect()->route('announcements.index')->with('status', 200);
   }

}
