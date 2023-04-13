<?php

namespace App\QueryBuilders;

use App\Models\Comments;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;
use App\Notifications\CommentsNotification;

class CommentQueryBuilder extends QueryBuilder
{
    public Builder $model;

    public function __construct()
    {
        $this->model = Comments::query();
    }

    /**
     * @return Collection
     */
    function getCollection(): Collection
    {
        return Comments::query()->get();
    }

    /**
     * @param int $id
     * @return array
     */
    public static function getCommentsByPostId(int $id): array
    {
        $result = [];

        $users = new User();
        $comments = Comments::where('post_id', $id)->get();

        foreach ($comments as $comment) {
            $comment_user = $users->find($comment->author_id);
            $result[] = [
                'id' => $comment->id,
                'post_id' => $id,
                'author' => $comment_user->last_name. ' ' .$comment_user->first_name . ' ' . $comment_user->surname,
                'author_id' => $comment_user->id,
                'avatar' => $comment_user->avatar,
                'description' => $comment->description,
                'created_at' => $comment->created_at->toDateTimeString(),
                'updated_at' => $comment->updated_at->toDateTimeString()
            ];
        }

        return $result;
    }

    /**
     * @param int $quantity
     * @return LengthAwarePaginator
     */
    public function getCommentWithPagination(int $quantity = 11): LengthAwarePaginator
    {
        return $this->model->paginate($quantity);
    }

    /**
     * @param int $post_id
     * @return void
     */
    public static function notify(int $post_id): void
    {
        $post = PostQueryBuilder::getPost($post_id);
        $user = UserQueryBuilder::getById($post->author_id);

        $user->notify(new CommentsNotification($user->id, $post->title));

    }
}

