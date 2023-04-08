<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CommunityCenterPhotosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [];
        for ($i = 0; $i < 10; $i++) {
            $data[] = [
                'community_center_id' => $i + 1,
                'image_url' => \fake()->imageUrl(360, 360, 'animals'),
                'created_at' => \now(),
                'updated_at' => \now(),
            ];
        }
        \DB::table('community_center_photos')->insert($data);
    }
}
