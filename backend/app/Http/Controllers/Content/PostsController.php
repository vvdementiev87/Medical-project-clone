<?php

namespace App\Http\Controllers\Content;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\Posts as PostsModel;
use App\Models\User as UserModel;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\Posts\CreateRequest;
use App\Http\Requests\Posts\EditRequest;

class PostsController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return string
     */
    public function index(): string
    {
        $posts = new PostsModel();

        $result = [];
        foreach ($posts->get() as $item) {
            $result[$item->id] = [
                'id' => $item->id,
                'author_id' => $item->author_id,
                'title' => $item->title,
                'created_at' => $item->created_at->toDateTimeString(),
                'last_comment' => $item->comments->map(fn($com) => $com->updated_at->toDateTimeString())->first(),
                'comments_count' => $item->comments->count()
            ];
        }
        return json_encode($result);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     *
     */
    public function store(CreateRequest $request): JsonResponse
    {
        $post = PostsModel::create($request->validated());
        if ($post) {
            return
                response()->json([
                    'id' => $post->id,
                    'author_id' => $post->author_id,
                    'title' => $post->title,
                    'created_at' => $post->created_at->toDateTimeString(),
                    'last_comment' => $post->comments->map(fn($com) => $com->updated_at->toDateTimeString())->first(),
                    'comments_count' => $post->comments->count()
                ]);
        }
        return response()->json([
            'error' => 'Post not added',
        ], 401);
    }

    /**
     * Display the specified resource.
     * @param int $id
     * @return string
     */
    public function show(int $id): string
    {
        $posts = new PostsModel();
        $post = $posts->find($id);

        $users = new UserModel;
        $user = $users->find($post->author_id);

        $comments = $post->comments;
        $commentsCollection = [];

        foreach ($comments as $comment) {
            $comment_user = $users->find($comment->author_id);
            $commentsCollection[$comment->id] = [
                'id' => $comment->id,
                'author' => $comment_user->first_name . ' ' . $comment_user->last_name,
                'author_id' => $comment_user->id,
                'avatar' => $comment_user->avatar,
                'description' => $comment->description,
                'created_at' => $comment->created_at->toDateTimeString(),
                'updated_at' => $comment->updated_at->toDateTimeString()
            ];
        }

        $result = [
            'id' => $id,
            'title' => $post->title,
            'description' => $post->description,
            'created_at' => $post->created_at->toDateTimeString(),
            'author' => [
                'id' => $post->author_id,
                'user_name' => $user->first_name . ' ' . $user->last_name,
                'avatar' => $user->avatar
            ],
            'comments' => $commentsCollection
        ];

        return json_encode($result);
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
     * @param EditRequest
     * @return bool
     */
    public function update(EditRequest $request): JsonResponse
    {
        $update_data = $request->validated();
        $post = PostsModel::find($update_data['post_id']);
        $post->fill(['title' => $update_data['title'], 'description' => $update_data['description']]);
        if ($post->save()) {
            return response()->json([
                'id' => $post->id,
                'title' => $post->title,
                'description' => $post->description,
            ] );
        }
        return response()->json([
            'error' => 'Post not deleted',
            'post_id'=>$post->id,
        ], 401);
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return string
     */
    public function destroy(int $id): JsonResponse
    {
        $posts = new PostsModel();
        if ($posts->where('id', '=', $id)->delete()) {
            return response()->json([
                'post_id'=>$id
            ]);
        }
        return response()->json([
            'error' => 'Post not deleted',
            'post_id'=>$id,
        ], 401);
    }

}
