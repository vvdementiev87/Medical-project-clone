@extends('layouts.admin')
@section('content')
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 class="h2">Изменить Регистрацию</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group mr-2">
                <a href="{{ url(App\Classes\Helpers::getHost(true) . "/admin/conferenceRegistration") }}" class="btn btn-sm btn-outline-secondary">Назад</a>
                <button class="btn btn-sm btn-outline-secondary">#</button>
            </div>
        </div>
    </div>
    <div>
        @if ($errors->any())
            @foreach($errors->all() as $error)
                <x-alert type="danger" :message="$error"></x-alert>
            @endforeach
        @endif
        <form method="post" action="{{ url(App\Classes\Helpers::getHost(true) . '/admin/conferenceRegistration/' . $registration->id) }}">
            @csrf
            @method('put')
            <div class="form-group">
                <label for="event_id">ID конференции</label>
                <input type="text" id="event_id" name="event_id" value="{{ $registration->event_id }}" class="form-control @error('event_id') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="account_id">ID пользователя</label>
                <input type="text" id="account_id" name="account_id" value="{{ $registration->account_id }}" class="form-control @error('account_id') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="created_at">Дата регистрации</label>
                <input type="datetime-local" id="created_at" name="created_at" value="{{ $registration->created_at }}" class="form-control @error('created_at') is-invalid @enderror">
            </div>
            <button type="submit" class="btn btn-sm btn-outline-secondary">Добавить+</button>
        </form>
    </div>
@endsection
