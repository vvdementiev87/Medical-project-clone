<?php

namespace App\Http\Controllers\Auth;

use App\Http\Requests\Auth\RegisteredUserRequest;
use App\Models\ApplicationsForRegistration;
use App\Models\User;
use App\QueryBuilders\ApplicationsForRegistrationQueryBuilder;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

use App\Http\Requests\Users\CreateRequest;
use Illuminate\Support\Facades\DB;

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

    public function rejectTheApplication()
    {

    }

    public function destroyTheApplication($id)
    {
        $application = new ApplicationsForRegistrationQueryBuilder();
        $application->destroyApplicationId($id);

        return redirect()->route('admin.all_applications')->with('success', 'User delete');


    }
}

