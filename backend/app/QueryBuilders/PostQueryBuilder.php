<?php

namespace App\QueryBuilders;

use App\Models\Posts;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;

class PostQueryBuilder extends QueryBuilder
{
    public Builder $model;

    public function __construct()
    {
        $this->model = Posts::query();
    }

    /**
     * @return Collection
     */
    function getCollection(): Collection
    {
        return Posts::query()->get();
    }

    /**
     * @return array
     */
    public static function getAllPosts(): array
    {
        $posts = new Posts();
        $users = new User();

        $resultData = [];

        foreach ($posts->get() as $post) {
            $resultData[$post->id] = [
                'id' => $post->id,
                'title' => $post->title,
                'description' => $post->description,
                'created_at' => $post->created_at->toDateTimeString(),
                'last_comment' => $post->comments->map(fn($com) => $com->updated_at->toDateTimeString())->first(),
                'comments_count' => $post->comments->count()
            ];

            // Находим определённого пользователя для каждого комментария, и добавляем в результирующий массив
            //todo костыльный вариант, нужно будет потом переработать
            foreach ($users->get() as $user) {
                if (in_array($post->author_id, $users->pluck('id')->toArray())) {
                    $resultData[$post->id]['author'] = [
                        'id' => $user->id,
                        'user_name' => $user->last_name . ' ' . $user->first_name . ' ' . $user->surname,
                        'avatar' => $user->avatar
                    ];
                    break;
                } else {
                    $resultData[$post->id]['author'] = [
                        'id' => null, //todo продумать на этот счёт
                        'user_name' => 'Пользователь удалён',
                    ];
                }
            }
        }
        return $resultData;
    }

    /**
     * @param int $id
     * @return array
     */
    public static function getPostById(int $id): array
    {
        $posts = new Posts();
        $users = new User();

        $post = $posts->find($id);
        $user = $users->find($post->author_id);

        // Выбираем все комментарии по id поста
        $comments = CommentQueryBuilder::getCommentsByPostId($id);

        return [
            'id' => $id,
            'title' => $post->title,
            'description' => $post->description,
            'created_at' => $post->created_at->toDateTimeString(),
            'author' => [
                'id' => $post->author_id,
                'user_name' => $user->last_name. ' ' .$user->first_name . ' ' . $user->surname,
                'avatar' => $user->avatar
            ],
            'comments' => $comments
        ];
    }

    /**
     * @param int $quantity
     * @return LengthAwarePaginator
     */
    public function getPostsWithPagination(int $quantity = 11): LengthAwarePaginator
    {
        return $this->model->paginate($quantity);
    }

    /**
     * @param int $post_id
     * @return Posts
     */
    public static function getPost(int $post_id): Posts
    {
        $posts = new Posts();
        return $posts->find($post_id);

    }
}
