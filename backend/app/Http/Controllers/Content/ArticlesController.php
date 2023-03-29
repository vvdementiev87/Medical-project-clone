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
                'id' => $item->id,
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

    public function show(string $id)
    {
        $item = ArticlesModel::find($id);
        if ($item) {
            return response()->json([
                'id' => $item->id,
                'author' => $item->author,
                'title' => $item->title,
                'description' => $item->description,
                'imageUrl' => $item->image_url,
                'shortText' => $item->short_text,
                'textHTML' => $item->text_html
            ]);
        }
        return response()->json([
            'error' => 'Article not found',
        ], 401);
    }

}
