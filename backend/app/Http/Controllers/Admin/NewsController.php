<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\News\CreateRequest;
use App\Http\Requests\News\EditRequest;
use App\Models\News;
use App\QueryBuilders\NewsQueryBuilder;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Log;

class NewsController extends Controller
{
    /**
     * @param NewsQueryBuilder $queryBilder
     * @return View
     */
    public function index(NewsQueryBuilder $queryBilder): View
    {
        return \view('admin.news.index', [
            'newsList' => $queryBilder->getNewsWithPagination()
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
     * @return ResirectResponse
     */
    public function store(CreateRequest $request): RedirectResponse
    {
        $news = News::create($request->validated());

        if($news){
            return redirect()->route('admin.news.index')->with('success', 'News added');
        }
    }

    /**
     * @param News $news
     */
    public function edit(News $news): View
    {
        return \view('admin.news.edit', [
            'news' => $news,
        ]);
    }

    /**
     * @param EditRequest $request
     * @param News $news
     * @return ResirectResponse
     */
    public function update(EditRequest $request, News $news): RedirectResponse
    {
        $news = $news->fill($request->validated());

        if($news->save()){
            return redirect()->route('admin.news.index')->with('success', 'News update');
        }

        return \back()->with('error', 'Something wrong... Try again later');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(News $news)
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
