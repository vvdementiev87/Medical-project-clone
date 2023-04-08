<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\QueryBuilders\AccessGroupQueryBuilder;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;

class AccessGroupController extends Controller
{

    /**
     * @param  AccessGroupQueryBuilder  $queryBuilder
     * @return View
     */
    public function index(AccessGroupQueryBuilder $queryBuilder): View
    {
        return \view('admin.accessGroup.index', [
            'accessGroup' => $queryBuilder->getCollection(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request) //TODO будет дополняться
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id) //TODO будет дополняться
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id) //TODO будет дополняться
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id) //TODO будет дополняться
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id) //TODO будет дополняться
    {
        //
    }
}
