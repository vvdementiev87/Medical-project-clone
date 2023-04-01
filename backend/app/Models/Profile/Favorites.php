<?php

namespace App\Models\Profile;

use App\Models\Articles;
use App\Models\Videos;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Favorites extends Model
{
    use HasFactory;

    protected $table = 'favorites';

    protected $fillable = [
        'user_id',
        'type',
        'type_id',
    ];

    /**
     * @return array
     */
    public static function getAll(): array
    {
        $id = auth()->id();
        $favorite = \DB::table('favorites')->where('user_id', $id
        )->orderBy('created_at', 'desc')->take(5)->get();
        $result = [];
        if ($favorite) {
            foreach ($favorite as $item) {
                if ($item->type === 1) {
                    $video = Videos::find($item->type_id);
                    $object = [
                        'id' => $video->id,
                        'videoYoutubeId' => $video->video_youtube_id,
                        'author' => $video->author,
                        'title' => $video->title,
                        'description' => $video->description,
                        'imageUrl' => $video->image_url,
                        'textHTML' => $video->text_html];

                    $result[] = [
                        'id' => $item->id,
                        'user_id' => $item->user_id,
                        'type' => $item->type,
                        'type_id' => $item->type_id,
                        'object' => $object
                    ];
                }
                if ($item->type === 2) {
                    $article = Articles::find($item->type_id);
                    $object = [
                        'id' => $article->id,
                        'author' => $article->author,
                        'title' => $article->title,
                        'description' => $article->description,
                        'imageUrl' => $article->image_url,
                        'shortText' => $article->short_text,
                        'textHTML' => $article->text_html
                    ];

                    $result[] = [
                        'id' => $item->id,
                        'user_id' => $item->user_id,
                        'type' => $item->type,
                        'type_id' => $item->type_id,
                        'object' => $object
                    ];
                }

            }
        }
        return $result;
    }
}
