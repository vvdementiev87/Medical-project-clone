<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Users\CreateRequest;
use App\Http\Requests\Users\EditRequest;
use App\Models\User;
use App\QueryBuilders\AccessGroupQueryBuilder;
use App\QueryBuilders\UserQueryBuilder;
use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;

class UserController extends Controller
{
    /**
     * @param  UserQueryBuilder  $queryBuilder
     * @return View
     */
    public function index(UserQueryBuilder $queryBuilder): View
    {
        return \view('admin.users.index', [
            'usersList' => $queryBuilder->getUsersWithPagination(),
        ]);
    }

    /**
     * @param  AccessGroupQueryBuilder  $queryBuilder
     * @return View
     */
    public function create(AccessGroupQueryBuilder $queryBuilder): View
    {
        return \view('admin.users.create', [
            'access_groups' => $queryBuilder->getCollection(),
        ]);
    }

    /**
     * @param  CreateRequest  $request
     * @return RedirectResponse
     */
    public function store(CreateRequest $request): RedirectResponse
    {
        $user = User::create($request->validated());

        if ($user) {
            $user = User::create($request->validated());
            $user->accessGroup()->attach($request->getAccessGroupId());
            return redirect()->route('admin.users.index')->with('success', 'User added');
        }

        return \back()->with('error', 'Something wrong... Try again later');
    }

    /**
     * @param  User                     $user
     * @param  AccessGroupQueryBuilder  $accessGroupBuilder
     * @return View
     */
    public function edit(User $user, AccessGroupQueryBuilder $accessGroupBuilder): View
    {
        return \view('admin.users.edit', [
            'user' => $user,
            'accessGroup' => $accessGroupBuilder->getCollection(),
        ]);
    }

    /**
     * @param  EditRequest  $request
     * @param  User         $user
     * @return RedirectResponse
     */
    public function update(EditRequest $request, User $user): RedirectResponse
    {
        $user = $user->fill($request->validated());

        if ($user) {
            $user->accessGroup()->sync($request->getAccessGroupId());
            return redirect()->route('admin.users.index')->with('success', 'User added');
        }

        return \back()->with('error', 'Something wrong... Try again later');
    }

    /**
     * @param  User  $user
     * @return JsonResponse
     */
    public function destroy(User $user): JsonResponse
    {
        try{
            $user->delete();

            return \response()->json('ok');
        } catch (\Exception $exception) {
            \Log::error($exception->getMessage(), [$exception]);

            return \response()->json('error', 400);
        }
    }
}
