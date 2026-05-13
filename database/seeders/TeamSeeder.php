<?php

namespace Database\Seeders;

use App\Models\Team;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TeamSeeder extends Seeder
{
    public function run(): void
    {
        $rows = [
  0 => 
  [
    'id' => 1,
    'name' => 'Eng. MUNETSI OLIVER JANGWA',
    'position' => 'DIRECTOR',
    'qualification' => 'ENGINEER',
    'description' => NULL,
    'path' => 'teams/1561913909Jangwa.jpg',
    'created_at' => '2019-06-30 23:58:29',
    'updated_at' => '2019-06-30 23:58:29',
  ],
  1 => 
  [
    'id' => 2,
    'name' => 'FARAI J. T. MUKWEMBI',
    'position' => 'CIVIL ENGINEER',
    'qualification' => 'CIVIL ENGINEER (BSC ENG. HONS)',
    'description' => '<p>..</p>',
    'path' => 'teams/1562926351our team-10.jpg',
    'created_at' => '2019-07-01 18:50:16',
    'updated_at' => '2019-07-12 17:12:31',
  ],
  2 => 
  [
    'id' => 3,
    'name' => 'KUDAKWASHE NYEMBA',
    'position' => 'PROJECT MANAGER',
    'qualification' => 'BTECH (QUANTITY SURVEY)',
    'description' => NULL,
    'path' => 'teams/1562234189kuda.jpg',
    'created_at' => '2019-07-03 20:45:11',
    'updated_at' => '2019-07-04 16:56:29',
  ],
  3 => 
  [
    'id' => 4,
    'name' => 'NYASHA TANDI',
    'position' => 'IT SPECIALIST',
    'qualification' => 'INFORMATION TECHNOLOGY',
    'description' => NULL,
    'path' => 'teams/1562234075nyasha.jpg',
    'created_at' => '2019-07-03 20:45:53',
    'updated_at' => '2019-07-04 16:54:35',
  ],
  4 => 
  [
    'id' => 5,
    'name' => 'CHARMAINE RUNYOWA',
    'position' => 'ACCOUNTANT',
    'qualification' => 'BBA (BUSINESS MANAGEMENT) HONS',
    'description' => NULL,
    'path' => 'teams/1562234033runyowa.jpg',
    'created_at' => '2019-07-03 20:50:10',
    'updated_at' => '2019-07-04 16:53:53',
  ],
  5 => 
  [
    'id' => 6,
    'name' => 'BLESSING NDORO',
    'position' => 'BUSINESS DEVELOPMENT',
    'qualification' => 'ZAAT, ACCA',
    'description' => NULL,
    'path' => 'teams/1562161846ndoro.jpg',
    'created_at' => '2019-07-03 20:50:46',
    'updated_at' => '2019-07-03 20:50:46',
  ],
  6 => 
  [
    'id' => 7,
    'name' => 'TINASHE NYAKUDYA',
    'position' => 'LOGISTICS PROCUREMENT',
    'qualification' => 'BSC PYSH',
    'description' => NULL,
    'path' => 'teams/1562234054tinashe.jpg',
    'created_at' => '2019-07-03 20:51:18',
    'updated_at' => '2019-07-04 16:54:14',
  ],
  7 => 
  [
    'id' => 8,
    'name' => 'RUDO NDLOVU',
    'position' => 'PROJECT MANAGER',
    'qualification' => 'BSC QUANTITY SURVEY',
    'description' => NULL,
    'path' => 'teams/1562161917rudo.jpg',
    'created_at' => '2019-07-03 20:51:57',
    'updated_at' => '2019-07-03 20:51:57',
  ],
  8 => 
  [
    'id' => 9,
    'name' => 'DOUBT MACHIPISA',
    'position' => 'SITE SUPERVISOR',
    'qualification' => 'SITE SUPERVISOR',
    'description' => NULL,
    'path' => 'teams/1562161971doubt.jpg',
    'created_at' => '2019-07-03 20:52:51',
    'updated_at' => '2019-07-03 20:52:51',
  ],
];

        DB::table('teams')->delete();

        foreach ($rows as $row) {
            DB::table('teams')->insert($row);
        }
    }
}