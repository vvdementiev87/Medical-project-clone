@extends('layouts.admin')
@section('content')
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 class="h2">Добавить новость</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group mr-2">
                <a href="{{ url(App\Classes\Helpers::getHost(true) . "/admin/news")  }}" class="btn btn-sm btn-outline-secondary">Назад</a>
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
        <form method="post" action="{{ url(App\Classes\Helpers::getHost(true) . "/admin/news") }}">
            @csrf
            <div class="form-group">
                <label for="title">Заголовок</label>
                <input type="text" id="title" name="title" value="{{ old('title') }}" class="form-control @error('title') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="short_description">Краткое описание</label>
                <input type="text" id="short_description" name="short_description" value="{{ old('short_description') }}" class="form-control @error('short_description') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="description">Текст новости</label>
                <textarea id="description" name="description" value="{{ old('description') }}" class="form-control @error('description') is-invalid @enderror"></textarea>
            </div>
            <div class="form-group">
                <label for="image_url">Url картинки</label>
                <input type="url" id="image_url" name="image_url" value="{{ old('image_url') }}" class="form-control @error('image_url') is-invalid @enderror">
            </div>
            <br>
            <button type="submit" class="btn btn-sm btn-outline-secondary">Добавить+</button>
        </form>
    </div>
@endsection
