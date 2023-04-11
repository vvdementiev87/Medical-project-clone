<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use App\QueryBuilders\ApplicationsForRegistrationQueryBuilder;
use Illuminate\Http\RedirectResponse;

class ApplicationForRegistrationController
{
    /**
     * @param int $id
     * @return RedirectResponse
     */
    public function acceptTheApplication(int $id): RedirectResponse
    {

        $application = new ApplicationsForRegistrationQueryBuilder();

        $user = new User();
        $user->add_data_account_and_user($application->getApplicationId($id));

       if($application->getApplicationId($id)) {
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

