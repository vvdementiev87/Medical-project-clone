<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Posts\CreateRequest;
use App\Http\Requests\Posts\EditRequest;
use App\Models\Posts;
use App\QueryBuilders\PostQueryBuilder;
use App\QueryBuilders\UserQueryBuilder;
use Illuminate\Support\Facades\Log;
use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;

class PostController extends Controller
{
    /**
     * @param  PostQueryBuilder  $queryBuilder
     * @return View
     */
    public function index(PostQueryBuilder $queryBuilder): View
    {
        return \view('admin.posts.index', [
            'postsList' => $queryBuilder->getPostsWithPagination()
        ]);
    }

    /**
     * @param UserQueryBuilder $queryBuilder
     * @return View
     */
    public function create(UserQueryBuilder $queryBuilder): View
    {
        return \view('admin.posts.create', [
            'usersList' => $queryBuilder->getCollection()
        ]);
    }

    /**
     * @param  CreateRequest  $request
     * @return RedirectResponse
     */
    public function store(CreateRequest $request): RedirectResponse
    {
        $post = Posts::create($request->validated());

        if($post){
            return redirect()->route('admin.posts.index')->with('success', 'Post added');
        }
        return \back()->with('error', 'Post can be added');
    }

    /**
     * @param Posts            $post
     * @param UserQueryBuilder $queryBuilder
     * @return View
     */
    public function edit(Posts $post, UserQueryBuilder $queryBuilder): View
    {
        return \view('admin.posts.edit', [
            'post' => $post,
            'usersList' => $queryBuilder->getCollection()
        ]);
    }

    /**
     * @param  EditRequest  $request
     * @param  Posts        $post
     * @return RedirectResponse
     */
    public function update(EditRequest $request, Posts $post): RedirectResponse
    {
        $post = $post->fill($request->validated());

        if($post->save()){
            return redirect()->route('admin.posts.index')->with('success', 'Post update');
        }

        return \back()->with('error', 'Post can not be updated');
    }

    /**
     * @param  Posts $post
     * @return JsonResponse
     */
    public function destroy(Posts $post): JsonResponse
    {
        try{
            $post->comments()->delete();
            $post->delete();

            return \response()->json('ok');
        } catch (\Exception $exception) {
            Log::error($exception->getMessage(), [$exception]);

            return \response()->json('error', 400);
        }
    }
}
