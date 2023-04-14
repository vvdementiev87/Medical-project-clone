<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisteredUserRequest;
use App\Models\ApplicationsForRegistration;
use App\QueryBuilders\ApplicationsForRegistrationQueryBuilder;
use Illuminate\Http\JsonResponse;
use Illuminate\View\View;

class RegistrationAdminController extends Controller
{
    /**
     * @param RegisteredUserRequest $request
     * @return JsonResponse
     */
    public function store(RegisteredUserRequest $request): JsonResponse
    {
        $request->validated();
        $application = ApplicationsForRegistration::create($request->except('has_agreed'));

        if($application) {
            return response()->json([
               'application' => $application,
               'success' => 'application accepted',
            ]);
        }
        return response()->json([
            'error' => 'application was not accepted'
        ]);
    }

    /**
     * @param ApplicationsForRegistrationQueryBuilder $queryBuilder
     * @return View
     */
    public function show_all_applications_in_admin_panel(
        ApplicationsForRegistrationQueryBuilder $queryBuilder
    ): View {
        return \view('admin.registration.all_applications', [
            'applicationList' => $queryBuilder->getApplicationWithPagination()
        ]);
    }
}
