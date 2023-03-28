<?php

namespace App\Http\Controllers\Content;

use App\Http\Controllers\Controller;
use App\QueryBuilders\CommentQueryBuilder;
use Illuminate\Http\JsonResponse;
use App\Models\Comments;
use App\Http\Requests\Comments\CreateRequest;
use App\Http\Requests\Comments\EditRequest;

class CommentsController extends Controller
{
    public function index($post_id = 20)
    {
        $result = CommentQueryBuilder::getCommentsByPostId($post_id);
        return response()->json($result);
    }

    /**
     * Store a newly created resource in storage.
     * @param CreateRequest
     * @return bool
     */
    public function store(CreateRequest $request): JsonResponse
    {
        $comment = Comments::create($request->validated());
        if ($comment) {
            $comment->post()->attach($request->validated()['post_id']);
            return true;
        }
        return false;
    }

    /**
     * Update the specified resource in storage.
     *  @param EditRequest
     *  @return bool
     */
    public function update(EditRequest $request): JsonResponse
    {
        $update_data = $request->validated();
        $comment = Comments::find($update_data['comment_id']);
        $comment->fill(['description' => $update_data['description']]);
        if ($comment->save()) {
            return true;
        }
        return false;
    }

    /**
     * Remove the specified resource from storage.
     * @param  int  $id
     * @return string
     */
    public function destroy(int $id): JsonResponse
    {
        $posts = new CommentsModel();
        if ($posts->where('id', '=', $id)->delete()) {
            return 'deleted';
        }
        return 'false';
    }
}
