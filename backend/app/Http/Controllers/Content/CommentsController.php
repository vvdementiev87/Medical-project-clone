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
    /**
     * @param $post_id
     * @return JsonResponse
     */
    public function index($post_id): JsonResponse
    {
        $result = CommentQueryBuilder::getCommentsByPostId($post_id);

        if (!$result) {
            return response()->json([
                'message' => 'Error loading comments',
            ], 400);
        }

        return response()->json($result);
    }

    /**
     *
     * @param CreateRequest $request
     * @return JsonResponse
     */
    public function store(CreateRequest $request): JsonResponse
    {
        $comment = Comments::create($request->validated());

        if ($comment) {
            CommentQueryBuilder::notify($request->validated()['post_id']);

            return response()->json($comment, 201);
        }

        return response()->json([
            'message' => 'Error added comment',
        ], 400);
    }

    /**
     *
     * @param EditRequest $request
     * @return JsonResponse
     */
    public function update(EditRequest $request): JsonResponse
    {
        $update_data = $request->validated();

        $comment = Comments::find($update_data['id']);
        $comment->fill(['description' => $update_data['description']]);

        if ($comment->save()) {
            return response()->json([
                'id' => $comment->id,
                'description' => $comment->description,
            ], 202);
        }
        return response()->json([
            'message' => 'Error loading, comment is not updated',
        ], 400);
    }

    /**
     *
     * @param int $id
     * @return JsonResponse
     */
    public function destroy(int $id): JsonResponse
    {
        $comments = (new Comments())->where('id', '=', $id)->delete();

        if ($comments) {
            return response()->json([
                'id' => $id,
            ], 202);
        }

        return response()->json([
            'message' => 'Error, comment was not deleted',
        ], 404);
    }
}
