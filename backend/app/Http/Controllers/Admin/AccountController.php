<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Account\CreateRequest;
use App\Http\Requests\Account\EditRequest;
use App\Models\Account;
use App\QueryBuilders\AccountQueryBuilder;
use Exception;
use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
class AccountController extends Controller
{
    /**
     * @param AccountQueryBuilder $queryBuilder
     * @return View
     */
    public function index(AccountQueryBuilder $queryBuilder): View
    {
        return \view('admin.account.index', [
            'accounts' => $queryBuilder->getAccountsWithPagination()
        ]);
    }

    /**
     * @return View
     */
    public function create(): View
    {
        return \view('admin.account.create');
    }

    /**
     * @param CreateRequest $request
     * @return RedirectResponse
     */
    public function store(CreateRequest $request): RedirectResponse
    {
        $request->validated();
        $request->merge(['password' => Hash::make($request['password'])]);
        $result = Account::create($request->all());

        if ($result) {
            return redirect()->route('admin.accounts.index')->with('success', 'Account added');
        }

        return \back()->with('error', 'Account can not be added');
    }

    /**
     * @param Account $account
     * @return View
     */
    public function edit(Account $account): View
    {
        return \view('admin.account.edit', [
            'account' => $account,
        ]);
    }

    /**
     * @param EditRequest $request
     * @param Account     $account
     * @return RedirectResponse
     */
    public function update(EditRequest $request, Account $account): RedirectResponse
    {
        //todo подумать о добавлении изменения пароля через админку
        $result = $account->fill($request->validated());

        if($result->save()) {
            return redirect()->route('admin.accounts.index')->with('success', 'Account update');
        }

        return \back()->with('error', 'Account can not be updated');
    }


    /**
     * @param Account $account
     * @return JsonResponse|RedirectResponse
     */
    public function destroy(Account $account): JsonResponse|RedirectResponse
    {
        try{
            $account->delete();

            return redirect()->with('success', 'Account was delete');
        } catch (Exception $exception) {
            Log::error($exception->getMessage(), [$exception]);

            return response()->json('error', 400);
        }
    }
}
