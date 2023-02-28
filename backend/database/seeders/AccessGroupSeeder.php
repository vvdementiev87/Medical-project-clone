<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AccessGroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $groupNames = ['admin', 'user', 'member'];

        foreach ($groupNames as $groupName) {
            \DB::table('access_group')->insert([
                'name' => $groupName,
                'created_at' => now(),
        ]);
        }
    }
}
