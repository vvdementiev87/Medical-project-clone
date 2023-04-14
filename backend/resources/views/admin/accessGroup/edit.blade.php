@extends('layouts.admin')
@section('content')
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 class="h2">Редактирование группы</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group mr-2">
                <a href="{{ url(App\Classes\Helpers::getHost(true) . "/admin/accessGroup") }}" class="btn btn-sm btn-outline-secondary">Назад</a>
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
        <form method="post" action="{{ url(App\Classes\Helpers::getHost(true) . "/admin/accessGroup/" . $group->id) }}">
            @csrf
            @method('put')
            <div class="form-group">
                <label for="name">Имя группы</label>
                <input type="text" id="name" name="name" value="{{ $group->name }}" class="form-control @error('name') is-invalid @enderror">
            </div>
            <br>
            <button type="submit" class="btn btn-sm btn-outline-secondary">Изменить</button>
        </form>
    </div>

@endsection
