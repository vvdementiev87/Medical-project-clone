@extends('layouts.admin')
@section('content')
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 class="h2">Добавить аккаунт</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group mr-2">
                <a href="{{ url(App\Classes\Helpers::getHost(true) . "/admin/accounts") }}" class="btn btn-sm btn-outline-secondary">Назад</a>
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
        <form method="post" action="{{ url(App\Classes\Helpers::getHost(true) . '/admin/accounts') }}">
            @csrf
            <div class="form-group">
                <label for="user_id">ID пользователя</label> {{--todo добавить сюда связку с таблицей users--}}
                <input type="text" id="user_id" name="user_id" value="{{ old('user_id') }}" class="form-control @error('user_id') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="email">Почта</label>
                <input type="text" id="email" name="email" value="{{ old('email') }}" class="form-control @error('email') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="password">Пароль</label>
                <input type="text" id="password" name="password" value="{{ old('password') }}" class="form-control @error('password') is-invalid @enderror">
            </div>
            <button type="submit" class="btn btn-sm btn-outline-secondary">Добавить+</button>
        </form>
    </div>
@endsection

