<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\AccessGroup\CreateRequest;
use App\Http\Requests\AccessGroup\EditRequest;
use App\Models\AccessGroup;
use App\QueryBuilders\AccessGroupQueryBuilder;
use Exception;
use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Log;

class AccessGroupController extends Controller
{
    /**
     * @param  AccessGroupQueryBuilder  $queryBuilder
     * @return View
     */
    public function index(AccessGroupQueryBuilder $queryBuilder): View
    {
        return view('admin.accessGroup.index', [
            'accessGroup' => $queryBuilder->getGroupWithPagination(),
        ]);
    }

    /**
     * @return View
     */
    public function create(): View
    {
        return view('admin.accessGroup.create');
    }

    /**
     * @param CreateRequest $request
     * @return RedirectResponse
     */
    public function store(CreateRequest $request): RedirectResponse
    {
        $newGroup = AccessGroup::create($request->validated());

        if ($newGroup->save()) {
            return redirect()->route('admin.accessGroup.index')->with('success', 'Access group created');
        }

        return back()->with('error', 'Access group can not be create');
    }

    /**
     * @param AccessGroup $accessGroup
     * @return View
     */
    public function edit(AccessGroup $accessGroup): View
    {
        return view('admin.accessGroup.edit', [
            'group' => $accessGroup,
        ]);
    }

    /**
     * @param EditRequest $request
     * @param AccessGroup $accessGroup
     * @return RedirectResponse
     */
    public function update(EditRequest $request, AccessGroup $accessGroup): RedirectResponse
    {
        $result = $accessGroup->fill($request->validated());

        if ($result->save()) {
            return redirect()->route('admin.accessGroup.index')->with('success', 'Access group updated');
        }

        return back()->with('error', 'Access group can not be update');
    }

    /**
     * @param AccessGroup $accessGroup
     * @return JsonResponse|RedirectResponse
     */
    public function destroy(AccessGroup $accessGroup): JsonResponse|RedirectResponse
    {
        try{
            $accessGroup->delete();

            return redirect()->with('success', 'Access group updated');
        } catch (Exception $exception) {
            Log::error($exception->getMessage(), [$exception]);

            return response()->json('error', 400);
        }
    }
}
