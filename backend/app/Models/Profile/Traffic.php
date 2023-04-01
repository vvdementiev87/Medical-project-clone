<?php

namespace App\Models\Profile;

use App\Models\Articles;
use App\Models\Videos;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Traffic extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'url', 'count'];

    /**
     * @return array
     */
    public static function getAll(): array
    {
        $id = auth()->id();
        $viewed = \DB::table('traffic')->where('user_id', '=', $id)
            ->orderBy('updated_at', 'desc')->take(5)->get();
        $result = [];
        if ($viewed) {
            foreach ($viewed as $item) {
                $arr = explode("/", $item->url);
                $type = $arr[count($arr) - 2];
                $item_id = (int)$arr[count($arr) - 1];

                if ($type === 'videos') {
                    $video = Videos::find($item_id);
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
                        'type' => 1,
                        'type_id' => $video->id,
                        'object' => $object
                    ];
                }
                if ($type === 'articles') {
                    $article = Articles::find($item_id);
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
                        'type' => 2,
                        'type_id' => $article->id,
                        'object' => $object
                    ];
                }

            }
        }

        return $result;
    }
    public static function getPopular(): array
    {
        $viewed = \DB::table('traffic')->orderBy('count', 'desc')->take(5)->get();
        $result = [];
        if ($viewed) {
            foreach ($viewed as $item) {
                $arr = explode("/", $item->url);
                $type = $arr[count($arr) - 2];
                $item_id = (int)$arr[count($arr) - 1];

                if ($type === 'videos') {
                    $video = Videos::find($item_id);
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
                        'type' => 1,
                        'type_id' => $video->id,
                        'object' => $object
                    ];
                }
                if ($type === 'articles') {
                    $article = Articles::find($item_id);
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
                        'type' => 2,
                        'type_id' => $article->id,
                        'object' => $object
                    ];
                }

            }
        }

        return $result;
    }
}
