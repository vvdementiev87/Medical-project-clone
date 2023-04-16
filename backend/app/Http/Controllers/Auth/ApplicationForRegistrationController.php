<?php

namespace App\Http\Controllers\Auth;

use App\Mail\RejectApplicationMail;
use App\Models\User;
use App\QueryBuilders\ApplicationsForRegistrationQueryBuilder;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Mail;

class ApplicationForRegistrationController
{
    /**
     * @param int $id
     * @return RedirectResponse
     */
    public function acceptTheApplication(int $id): RedirectResponse
    {
        $applicationQueryBuilder = new ApplicationsForRegistrationQueryBuilder();
        $application = $applicationQueryBuilder->getApplicationId($id);

        $user = new User();
        $user->add_data_account_and_user($application);

       if($application) {

           $this->destroyTheApplication($id);
           return redirect()->route('admin.users.index')->with('success', 'User added');
       }
        return \back()->with('error', 'User can be added');
    }

    /**
     * @param $id
     * @return RedirectResponse
     */
    public function rejectTheApplication($id): RedirectResponse
    {
        $applicationQueryBuilder = new ApplicationsForRegistrationQueryBuilder();
        $application = $applicationQueryBuilder->getApplicationId($id);

        Mail::to($application['email'])->send(new RejectApplicationMail());

        $this->destroyTheApplication($id);

        return redirect()->route('admin.all_applications')->with('success', 'User is not approved');
    }

    /**
     * @param $id
     * @return void
     */
    public function destroyTheApplication($id): void
    {
        $application = new ApplicationsForRegistrationQueryBuilder();
        $application->destroyApplicationId($id);
    }
}

