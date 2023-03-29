<?php

namespace App\Http\Controllers\Content;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Articles as ArticlesModel;


class ArticlesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): string
    {
        $articles = new ArticlesModel();
        $result = [];
        foreach ($articles->get() as $item) {
            $result[$item->id] = [
                'id'=>$item->id,
                'author' => $item->author,
                'title' => $item->title,
                'description' => $item->description,
                'imageUrl' => $item->image_url,
                'shortText' => $item->short_text,
                'textHTML' => $item->text_html
            ];
        }
        return json_encode($result);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}