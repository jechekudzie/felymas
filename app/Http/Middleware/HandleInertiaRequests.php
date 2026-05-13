<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    protected $rootView = 'app';

    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'company' => [
                'email' => 'info@felymas.com',
                'phone' => ['+263 242 776 543', '+263 772 123 456'],
                'address' => ['12 Felymas House', 'Borrowdale, Harare', 'Zimbabwe'],
                'social' => [
                    'linkedin' => 'https://www.linkedin.com/company/felymas-consultants',
                    'facebook' => 'https://www.facebook.com/felymasconsultants',
                ],
            ],
            'flash' => [
                'message' => fn () => $request->session()->get('message'),
            ],
        ];
    }
}
