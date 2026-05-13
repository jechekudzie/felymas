<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        $rows = [
  0 => 
  [
    'id' => 1,
    'name' => 'Jeche',
    'email' => 'jechekudzie@gmail.com',
    'email_verified_at' => NULL,
    'password' => '$2y$12$enqRlhoobqx6lFo6/dUi5eNUk3zw7THmpTqylQOEE5DUg9eyuVOQG',
    'remember_token' => NULL,
    'created_at' => '2026-05-13 09:01:35',
    'updated_at' => '2026-05-13 09:01:35',
  ],
];

        // Idempotent: only insert each user if their email isn't already present.
        foreach ($rows as $row) {
            if (! DB::table('users')->where('email', $row['email'])->exists()) {
                DB::table('users')->insert($row);
            }
        }
    }
}