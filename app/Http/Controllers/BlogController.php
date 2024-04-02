<?php

namespace App\Http\Controllers;

use App\Http\Requests\BlogRequest;
use App\Http\Resources\BlogResource;
use App\Models\Blog;

class BlogController extends Controller
{
    public function index()
    {
        return BlogResource::collection(Blog::all());
    }

    public function store(BlogRequest $request)
    {
        return new BlogResource(Blog::create($request->validated()));
    }

    public function show(string $slug)
    {
        return new BlogResource(Blog::where('slug', $slug)->firstOrFail());
    }

    public function update(BlogRequest $request, Blog $blog)
    {
        $blog->update($request->validated());

        return new BlogResource($blog);
    }

    public function destroy(Blog $blog)
    {
        $blog->delete();

        return response()->json();
    }
}
