<?php

namespace App\Http\Controllers\Content;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Posts as PostsModel;
use App\Models\User as UserModel;
use Illuminate\Support\Facades\Validator;

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
     * Store a newly created resource in storage.
     * @param  Request $request
     * @return string
     */
    public function store(Request $request): string
    {
        $validator = Validator::make($request->all(), [
                'author_id' => ['required', 'integer'],
                'title' => ['required', 'string', 'min: 3', 'max: 50'],
                'description' => ['nullable', 'string']
            ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
            ]);
        }
        
        $post = PostsModel::create($validator->validated());
        if ($post) {
            return response()->json([
                'success' => true,
            ]);
        } 
    }

    /**
     * Display the specified resource.
     * @param  int  $id
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
                'author' => $comment_user->first_name. ' ' .$comment_user->last_name,
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
                'user_name' => $user->first_name. ' ' .$user->last_name,
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
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

}
