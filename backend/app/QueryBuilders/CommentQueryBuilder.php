<?php

namespace App\QueryBuilders;

use App\Models\Comments;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;

class CommentQueryBuilder extends QueryBuilder
{

    function getCollection(): Collection
    {
        return Comments::query()->get();
    }

    public static function getCommentsByPostId(int $id): array
    {
        $result = [];

        $users = new User();
        $comments = Comments::where('post_id', $id)->get();

        foreach ($comments as $comment) {
            $comment_user = $users->find($comment->author_id);
            $result[] = [
                'id' => $comment->id,
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
}
