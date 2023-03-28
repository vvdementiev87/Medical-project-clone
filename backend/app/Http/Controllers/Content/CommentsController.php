<?php

namespace App\Http\Controllers\Content;

use App\Http\Controllers\Controller;
use App\Models\User as UserModel;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\Comments as CommentsModel;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\Comments\CreateRequest;
use App\Http\Requests\Comments\EditRequest;

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
     * @param CreateRequest
     * @return bool
     */
    public function store(CreateRequest $request): JsonResponse
    {
        $comment = CommentsModel::create($request->validated());
        if ($comment) {
            $comment->post()->attach($request->validated()['post_id']);
            $post_id=$request->validated()['post_id'];
            $users = new UserModel();
            $user = $users->find($request->input('author_id'));
            return  response()->json(['id' => $comment->id,
                'author' => $user->first_name . ' ' . $user->last_name,
                'author_id' => $user->id,
                'avatar' => $user->avatar,
                'post_id'=>$post_id,
                'description' => $comment->description,
                'created_at' => $comment->created_at->toDateTimeString(),
                'updated_at' => $comment->updated_at->toDateTimeString()
        ]);}
        return response()->json([
        'error' => 'Comment not added',
    ], 401);
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
     *  @param EditRequest
     *  @return bool
     */
    public function update(EditRequest $request): JsonResponse
    {
        $update_data = $request->validated();
        $comment = CommentsModel::find($update_data['comment_id']);
        $comment->fill(['description' => $update_data['description']]);
        $post_id=$request->input('post_id');
        if ($comment->save()) {
            return response()->json([
                'id' => $comment->id,
                'post_id'=>$post_id,
                'description' => $comment->description]);

        }
        return response()->json([
            'error' => 'Comment not updated',
        ], 401);
    }

    /**
    *
    */
    public function destroy(int $id): JsonResponse
    {
        $comment = new CommentsModel();
        if ($comment->where('id', '=', $id)->delete()) {
            return response()->json([
                'comment_id'=>$id,
            ]);
        }
        return response()->json([
            'error' => 'Post not deleted',
            'comment_id'=>$id,
        ], 401);
    }
}
