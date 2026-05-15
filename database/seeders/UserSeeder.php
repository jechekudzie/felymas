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
    // email_verified_at set at insert time below so the seeder is
    // self-contained and the admin can sign in immediately on a fresh DB.
    'password' => '$2y$12$enqRlhoobqx6lFo6/dUi5eNUk3zw7THmpTqylQOEE5DUg9eyuVOQG',
    'remember_token' => NULL,
    'created_at' => '2026-05-13 09:01:35',
    'updated_at' => '2026-05-13 09:01:35',
  ],
];

        // Idempotent: only insert each user if their email isn't already present.
        // Pre-verify the email so admin can sign in without going through the
        // /verify-email flow on a fresh deploy.
        foreach ($rows as $row) {
            if (! DB::table('users')->where('email', $row['email'])->exists()) {
                $row['email_verified_at'] = now();
                DB::table('users')->insert($row);
            }
        }
    }
}