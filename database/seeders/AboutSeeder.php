<?php

namespace Database\Seeders;

use App\Models\About;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AboutSeeder extends Seeder
{
    public function run(): void
    {
        $rows = [
  0 => 
  [
    'id' => 1,
    'description' => '<p><strong>ABOUT FELYMAS CONSULTANTS INTERNATIONAL </strong></p>

<p>&nbsp;Felymas Consultants International specializes in high quality value added services to clients in the areas of construction engineering services, programme management, project management, research and business planning, project evaluation and technical delivery.&nbsp;</p>

<p>Felymas Consultants are experienced in assisting Clients to create, develop and implement construction projects, and have a full knowledge of dealing with a diverse range of clients.&nbsp;</p>

<p>We seek to help <strong>Zimbabweans living in the Diaspora </strong>get their business in Zimbabwe handled professionally and with much needed transparency. The company is made highly qualified Engineers, Architects and Professionals based in Zimbabwe and South Africa working around the clock to make sure our clients&rsquo; needs are met.&nbsp;</p>

<p>After having witnessed a lot of people being disappointed by friends and relatives, we decided it was about time we stop anyone from experiencing fall outs with family and friends and forge a way for those abroad to invest back at home whilst having all the control.&nbsp;</p>

<p>Hence <strong>Felymas Diaspora Services </strong>was born.&nbsp;</p>

<p>Our staff has been involved in some highly significant commercial, private, leisure and cultural projects across the region and abroad, as well as some of the most complicated and sensitive projects. This involvement has included developing the concepts, shaping the project, researching and proving the business case, securing statutory approvals, delivering construction projects and supporting clients through the operational planning and set-up phases.</p>',
    'path' => 'uploads/1561912579about us.jpg',
    'created_at' => '2019-06-30 23:36:19',
    'updated_at' => '2019-07-03 20:27:47',
  ],
];

        DB::table('abouts')->delete();

        foreach ($rows as $row) {
            DB::table('abouts')->insert($row);
        }
    }
}