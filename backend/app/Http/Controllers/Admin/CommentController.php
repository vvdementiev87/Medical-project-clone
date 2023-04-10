<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Comments\EditRequest;
use App\Models\Comments;
use Exception;
use Illuminate\Contracts\View\View;
use App\QueryBuilders\CommentQueryBuilder;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Log;

class CommentController extends Controller
{
    /**
     * @param CommentQueryBuilder $queryBuilder
     * @return View
     */
    public function index(CommentQueryBuilder $queryBuilder): View
    {
        return \view('admin.comments.index', [
            'commentList' => $queryBuilder->getCommentWithPagination()
        ]);
    }

    /**
     * @param Comments $comment
     * @return View
     */
    public function edit(Comments $comment): View
    {
        return \view('admin.comments.edit', [
            'comment' => $comment
        ]);
    }

    /**
     * @param EditRequest $request
     * @param Comments    $comment
     * @return RedirectResponse
     */
    public function update(EditRequest $request, Comments $comment): RedirectResponse
    {
        $comment = $comment->fill($request->validated());

        if($comment->save()){
            return redirect()->route('admin.comments.index')->with('success', 'Commment update');
        }

        return \back()->with('error', 'Comment can not be updated');
    }

    /**
     * @param Comments $comment
     * @return JsonResponse
     */
    public function destroy(Comments $comment): JsonResponse
    {
        try{
            $comment->delete();

            return response()->json('ok');
        } catch (Exception $exception) {
            Log::error($exception->getMessage(), [$exception]);

            return response()->json('error', 400);
        }
    }
}
