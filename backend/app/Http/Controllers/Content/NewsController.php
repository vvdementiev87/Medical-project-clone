<?php

namespace App\Http\Controllers\Content;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\News as NewsModel;
use Carbon\Carbon;


class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return string
     */
    public function index(): string
    {
        $news = new NewsModel();
        $result = [];
        
        $news_collection = $news
            ->whereDate('ending_at', '>', Carbon::now()->toDateTimeString())
            ->get();
        foreach ($news_collection as $item) {
            $result[$item->id] = [
                'id'=>$item->id,
                'title' => $item->title,
                'short_description'=>$item->short_description,
                'description' => $item->description,
                'image_url' => $item->image_url,
                'started_at' => $item->started_at,
                'ending_at' => $item->ending_at,
                'created_at' => $item->created_at->toDateTimeString(),
                'updated_at' => $item->updated_at->toDateTimeString()
            ];
        }
        if ($result) {
            return json_encode($result);
        }
        return false;
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
     * @param  int  $id
     * @return string
     */
    public function show(int $id): string
    {
        $news_model = new NewsModel();
        $news = $news_model->find($id);

        if ($news) {
            $result = [
                'id' => $news->id,
                'title' => $news->title,
                'short_description' => $news->short_description,
                'description' => $news->description,
                'image_url' => $news->image_url,
                'started_at' => $news->started_at,
                'ending_at' => $news->ending_at,
                'created_at' => $news->created_at->toDateTimeString(),
                'updated_at' => $news->updated_at->toDateTimeString(),
            ];
            return json_encode($result);
        }
        return false;
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
