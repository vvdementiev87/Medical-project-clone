<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $account = [
            'email' => 'test@test.ru',
            'password' => '$2y$10$BBB.HAMNG0U0mWlI1hmhj.IDI8Q/297KXgWbuoAaKu4tnLoartEey'
        ];
        \DB::table('accounts')->insert($account);
        $userCollection[] = [
            'account_id' => 1,
            'last_name' => \fake()->lastName(),
            'first_name' => \fake()->firstName(),
            'surname' => \fake()->firstNameFemale(),
            'phone' => \fake()->phoneNumber(),
            'birth_date' => \now(),
            'sign_for_news' => false,
            'position' => \fake()->jobTitle(),
        ];

        \DB::table('users')->insert($userCollection);

    }
}
