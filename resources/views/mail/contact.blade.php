@component('mail::message')
# {{ $contact['subject']}}

{{ $contact['message']}}


Regards,<br>
{{ $contact['name']}},<br>
{{ $contact['number']}},<br>

{{--{{ config('app.name') }}--}}
@endcomponent
