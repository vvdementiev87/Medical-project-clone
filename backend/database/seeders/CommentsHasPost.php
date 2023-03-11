<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CommentsHasPost extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [];
        for($i = 0; $i < 10; $i++) {
            $data[] = [
                'post_id' => \fake()->randomDigitNotNull(),
                'comment_id' => \fake()->randomDigitNotNull(),
                'created_at' => \now(),
                'updated_at' => \now(),
            ];
        }
        \DB::table('comments_has_post')->insert($data);
    }
}
