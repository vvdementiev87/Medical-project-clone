<?php

namespace App\Http\Controllers\Content;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Comments as CommentsModel;
use Illuminate\Support\Facades\Validator;

class CommentsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     * @param  Request $request
     * @return string
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'author_id' => ['required', 'integer'],
            'description' => ['required', 'string'],
            'post_id' => ['exists:posts,id']
        ]);

    if ($validator->fails()) {
        return response()->json([
            'errors' => $validator->errors(),
        ]);
    }
    $comment = CommentsModel::create($validator->validated());
    if ($comment) {
        $comment->post()->attach($validator->validated()['post_id']);
        return response()->json([
            'success' => true,
        ]);
    } 
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     * @param  int  $id
     * @return string
     */
    public function destroy(int $id): string
    {
        $posts = new CommentsModel();
        if ($posts->where('id', '=', $id)->delete()) {
            return 'deleted';
        } 
        return 'false';
    }
}
