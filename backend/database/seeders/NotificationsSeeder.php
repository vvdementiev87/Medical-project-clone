<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class NotificationsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [];
        for($i = 0; $i < 10; $i++) {
            $data[] = [
                'user_id' => 1,
                'message' => \fake()->sentence(10),
                'status' => 'sent',
                'created_at' => \now(),
                'updated_at' => \now(),
            ];
        }
        \DB::table('notifications')->insert($data);
    }
}
