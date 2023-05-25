<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Article\CreateRequest;
use App\Http\Requests\Article\EditRequest;
use App\Models\Articles;
use App\QueryBuilders\ArticleQueryBuilder;
use Exception;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Log;

class ArticleController extends Controller
{
    /**
     * @param ArticleQueryBuilder $queryBuilder
     * @return View
     */
    public function index(ArticleQueryBuilder $queryBuilder): View
    {
        return \view('admin.articles.index', [
            'articles' => $queryBuilder->getArticlesWithPagination(),
        ]);
    }

    /**
     * @return View
     */
    public function create(): View
    {
        return \view('admin.articles.create');
    }

    /**
     * @param CreateRequest $request
     * @return RedirectResponse
     */
    public function store(CreateRequest $request): RedirectResponse
    {
        $result = Articles::create($request->validated());

        if ($result->save()) {
            return redirect()->route('admin.articles.index')->with('success', 'Article added');
        }

        return \back()->with('error', 'Article can not be added');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //todo сделать вывод по конкретной статье из таблицы для полного описания
    }

    /**
     * @param Articles $article
     * @return View
     */
    public function edit(Articles $article): View
    {
        return \view('admin.articles.edit', [
            'article' => $article,
        ]);
    }

    /**
     * @param EditRequest $request
     * @param Articles $article
     * @return RedirectResponse
     */
    public function update(EditRequest $request, Articles $article): RedirectResponse
    {
        $result = $article->fill($request->validated());

        if ($result->save()) {
            return redirect()->route('admin.articles.index')->with('success', 'Article update');
        }

        return \back()->with('error', 'Article can not be updated');
    }

    /**
     * @param Articles $article
     * @return Application|JsonResponse|RedirectResponse
     */
    public function destroy(Articles $article): Application|JsonResponse|RedirectResponse
    {
        try {
            $article->delete();

            return redirect()->with('success', 'Account was delete');
        } catch (Exception $exception) {
            Log::error($exception->getMessage(), [$exception]);

            return response()->json('error', 400);
        }
    }
}
