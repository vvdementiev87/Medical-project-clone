@extends('layouts.admin')
@section('content')
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 class="h2">Добавить пост</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group mr-2">
                <a href="{{ url(App\Classes\Helpers::getHost(true) . "/admin/posts") }}" class="btn btn-sm btn-outline-secondary">Назад</a>
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
        <form method="post" action="{{ url(App\Classes\Helpers::getHost(true) . "/admin/posts") }}">
            @csrf
            <div class="form-group">
                <label for="author_id">Автор</label>
                <select id="author_id" name="author_id" class="form-control @error('author_id') is-invalid @enderror" multiple>
                    <option value="0">->Выбрать<-</option>
                    @foreach($usersList as $user)
                        <option @if((int)old('author_id') === $user->id) selected @endif value="{{ $user->id }}">{{ $user->last_name}} {{$user->first_name}}</option>
                    @endforeach
                </select>
            </div>
            <div class="form-group">
                <label for="title">Заголовок</label>
                <input type="text" id="title" name="title" value="{{ old('title') }}" class="form-control @error('title') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="description">Описание</label>
                <textarea id="description" name="description" value="{{ old('description') }}" class="form-control @error('description') is-invalid @enderror"></textarea>
            </div>
            <br>
            <button type="submit" class="btn btn-sm btn-outline-secondary">Добавить+</button>
        </form>
    </div>
@endsection

