<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\News\CreateRequest;
use App\Http\Requests\News\EditRequest;
use App\Models\News;
use App\QueryBuilders\NewsQueryBuilder;
use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Log;

class NewsController extends Controller
{
    /**
     * @param NewsQueryBuilder $queryBuilder
     * @return View
     */
    public function index(NewsQueryBuilder $queryBuilder): View
    {
        return \view('admin.news.index', [
            'newsList' => $queryBuilder->getNewsWithPagination()
        ]);
    }

    /**
     * @return View
     */
    public function create(): View
    {
        return \view('admin.news.create');
    }

    /**
     * @param CreateRequest $request
     * @return RedirectResponse
     */
    public function store(CreateRequest $request): RedirectResponse
    {
        $news = News::create($request->validated());

        if($news){
            return redirect()->route('admin.news.index')->with('success', 'News added');
        }
        return \back()->with('error', 'News can be added');
    }

    /**
     * @param News $news
     * @return View
     */
    public function edit(News $news): View
    {
        return \view('admin.news.edit', [
            'news' => $news,
        ]);
    }

    /**
     * @param EditRequest $request
     * @param News        $news
     * @return RedirectResponse
     */
    public function update(EditRequest $request, News $news): RedirectResponse
    {
        $result = $news->fill($request->validated());

        if($result->save()){
            return redirect()->route('admin.news.index')->with('success', 'News update');
        }
        return \back()->with('error', 'News can not be updated');
    }

    /**
     * @param News $news
     * @return JsonResponse
     */
    public function destroy(News $news): JsonResponse
    {
        try{
            $news->delete();

            return \response()->json('ok');
        } catch (\Exception $exception) {
            Log::error($exception->getMessage(), [$exception]);

            return \response()->json('error', 400);
        }
    }
}
