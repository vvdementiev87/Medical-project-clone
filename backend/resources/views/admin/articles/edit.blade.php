         @extends('layouts.admin')
@section('content')
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 class="h2">Изменить статью</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group mr-2">
                <a href="{{ url(App\Classes\Helpers::getHost(true) . "/admin/articles") }}" class="btn btn-sm btn-outline-secondary">Назад</a>
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
        <form method="post" action="{{ url(App\Classes\Helpers::getHost(true) . '/admin/articles/' . $article->id) }}">
            @csrf
            @method('put')
            <div class="form-group">
                <label for="author">Автор</label>
                <input type="text" id="author" name="author" value="{{ $article->author }}" class="form-control @error('author') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="title">Заголовок</label>
                <input type="text" id="title" name="title" value="{{ $article->title }}" class="form-control @error('title') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="description">Содержание</label>
                <input type="text" id="description" name="description" value="{{ $article->description }}" class="form-control @error('description') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="image_url">фото URL</label>
                <input type="text" id="image_url" name="image_url" value="{{ $article->image_url }}" class="form-control @error('image_url') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="short_text">Короткое описание</label>
                <input type="text" id="short_text" name="short_text" value="{{ $article->short_text }}" class="form-control @error('short_text') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="text_html">Html-текст</label>
                <input type="text" id="text_html" name="text_html" value="{{ $article->text_html }}" class="form-control @error('text_html') is-invalid @enderror">
            </div>
            <button type="submit" class="btn btn-sm btn-outline-secondary">Добавить+</button>
        </form>
    </div>
@endsection

