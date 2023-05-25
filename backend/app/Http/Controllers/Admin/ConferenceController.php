<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Conference\CreateRequest;
use App\Http\Requests\Conference\EditRequest;
use App\Models\Conferences;
use App\QueryBuilders\ConferencesQueryBuilder;
use Exception;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Log;
class ConferenceController extends Controller
{
    /**
     * @param ConferencesQueryBuilder $queryBuilder
     * @return View
     */
    public function index(ConferencesQueryBuilder $queryBuilder): View
    {
        $conferences = $queryBuilder->get();

        return \view('admin.conferences.index', [
            'conferences' => $queryBuilder->getConferencesWithPagination(),
        ]);
    }

    /**
     * @return View
     */
    public function create(): View
    {
        return \view('admin.conferences.create');
    }

    /**
     * @param CreateRequest $request
     * @return RedirectResponse
     */
    public function store(CreateRequest $request): RedirectResponse
    {
        $result = Conferences::create($request->validated());

        if ($result->save()) {
            return redirect()->route('admin.conferences.index')->with('success', 'Conference added');
        }

        return \back()->with('error', 'Conference can not be added');
    }


    /**
     * @param Conferences $conference
     * @return View
     */
    public function edit(Conferences $conference): View
    {
        return \view('admin.conferences.edit', [
            'conference' => $conference,
        ]);
    }

    /**
     * @param EditRequest $request
     * @param Conferences $conference
     * @return RedirectResponse
     */
    public function update(EditRequest $request, Conferences $conference): RedirectResponse
    {
        $result = $conference->fill($request->validated());

        if ($result->save()) {
            return redirect()->route('admin.conferences.index')->with('success', 'Conferences update');
        }

        return \back()->with('error', 'Conferences can not be updated');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Conferences $conference)
    {
        try{
            $conference->delete();

            return redirect()->with('success', 'Conference was delete');
        } catch (Exception $exception) {
            Log::error($exception->getMessage(), [$exception]);

            return response()->json('error', 400);
        }
    }
}
