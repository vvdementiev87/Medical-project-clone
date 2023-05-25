<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\EventsOrders\CreateRequest;
use App\Http\Requests\EventsOrders\EditRequest;
use App\Models\RegistrationOrders;
use App\QueryBuilders\RegistrationOrdersQueryBuilder;
use Exception;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Log;

class ConferenceRegistrationController extends Controller
{

    /**
     * @param RegistrationOrdersQueryBuilder $queryBuilder
     * @return View
     */
    public function index(RegistrationOrdersQueryBuilder $queryBuilder): View
    {
        return \View('admin.conferenceRegistrations.index', [
            'registrations' => $queryBuilder->getRegistrationWithPagination(),
        ]);
    }


    /**
     * @return View
     */
    public function create(): View
    {
        return \View('admin.conferenceRegistrations.create');
    }


    /**
     * @param CreateRequest $request
     * @return RedirectResponse
     */
    public function store(CreateRequest $request): RedirectResponse
    {
        $result = RegistrationOrders::create($request->validated());

        if ($result->save()) {
            return redirect()->route('admin.conferenceRegistration.index')->with('success', 'Registration added');
        }

        return \back()->with('error', 'Registration can not be added');
    }


    /**
     * @param RegistrationOrders $registration
     * @return View
     */
    public function edit(RegistrationOrders $registration): View
    {
        return \view('admin.conferenceRegistrations.edit', [
            'registration' => $registration,
        ]);
    }


    /**
     * @param EditRequest        $request
     * @param RegistrationOrders $registration
     * @return RedirectResponse
     */
    public function update(EditRequest $request, RegistrationOrders $registration): RedirectResponse
    {
        $result = $registration->fill($request->validated());

        if ($result->save()) {
            return redirect()->route('admin.conferenceRegistration.index')->with('success', 'Registration update');
        }

        return \back()->with('error', 'Registration can not be updated');
    }


    /**
     * @param RegistrationOrders $registration
     * @return Application|JsonResponse|RedirectResponse
     */
    public function destroy(RegistrationOrders $registration): Application|JsonResponse|RedirectResponse
    {
        try{
            $registration->delete();

            return redirect()->with('success', 'Registration was delete');
        } catch (Exception $exception) {
            Log::error($exception->getMessage(), [$exception]);

            return response()->json('error', 400);
        }
    }
}
