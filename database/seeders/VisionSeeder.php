<?php

namespace Database\Seeders;

use App\Models\Vision;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class VisionSeeder extends Seeder
{
    public function run(): void
    {
        $rows = [
  0 => 
  [
    'id' => 1,
    'description' => '<p>Felymas Consultants International aspires to be a reliable and cost effective project management/ construction service provider locally and beyond.&nbsp;</p>',
    'path' => 'uploads/1561917622vision_banner.jpg',
    'created_at' => '2019-07-01 00:32:13',
    'updated_at' => '2019-07-01 01:00:22',
  ],
];

        DB::table('visions')->delete();

        foreach ($rows as $row) {
            DB::table('visions')->insert($row);
        }
    }
}