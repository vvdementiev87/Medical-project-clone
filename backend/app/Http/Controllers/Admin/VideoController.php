<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Video\CreateRequest;
use App\Http\Requests\Video\EditRequest;
use App\Models\Videos;
use App\QueryBuilders\VideoQueryBuilder;
use Exception;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\RedirectResponse;

class VideoController extends Controller
{

    /**
     * @param VideoQueryBuilder $queryBuilder
     * @return View
     */
    public function index(VideoQueryBuilder $queryBuilder): View
    {
        return \view('admin.videos.index', [
            'videos' => $queryBuilder->getVideosWithPagination(),
        ]);
    }


    /**
     * @return View
     */
    public function create(): View
    {
        return \view('admin.videos.create');
    }


    /**
     * @param CreateRequest $request
     * @return RedirectResponse
     */
    public function store(CreateRequest $request): RedirectResponse
    {
        $result = Videos::create($request->validated());

        if ($result->save()) {
            return redirect()->route('admin.videos.index')->with('success', 'Video added');
        }

        return \back()->with('error', 'Video can not be added');
    }


    /**
     * @param Videos $video
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|View
     */
    public function edit(Videos $video)
    {
        return \view('admin.videos.edit', [
            'video' => $video
        ]);
    }


    /**
     * @param EditRequest $request
     * @param Videos      $videos
     * @return RedirectResponse
     */
    public function update(EditRequest $request, Videos $video): RedirectResponse
    {
        $result = $video->fill($request->validated());

        if ($result->save()) {
            return redirect()->route('admin.videos.index')->with('success', 'Video update');
        }

        return \back()->with('error', 'Video can not be updated');
    }


    /**
     * @param Videos $video
     * @return Application|JsonResponse|RedirectResponse|Redirector
     */
    public function destroy(Videos $video)
    {
        try{
            $video->delete();

            return redirect()->with('success', 'Account was delete');
        } catch (Exception $exception) {
            Log::error($exception->getMessage(), [$exception]);

            return response()->json('error', 400);
        }
    }
}
