@extends('layouts.admin')
@section('content')
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 class="h2">Добавить Конференцию</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group mr-2">
                <a href="{{ url(App\Classes\Helpers::getHost(true) . "/admin/conferences") }}" class="btn btn-sm btn-outline-secondary">Назад</a>
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
        <form method="post" action="{{ url(App\Classes\Helpers::getHost(true) . '/admin/conferences') }}">
            @csrf
            <div class="form-group">
                <label for="name">Название</label>
                <input type="text" id="name" name="name" value="{{ old('name') }}" class="form-control @error('name') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="description">Описание</label>
                <input type="text" id="description" name="description" value="{{ old('description') }}" class="form-control @error('description') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="short_text">Короткое описание</label>
                <input type="text" id="short_text" name="short_text" value="{{ old('short_text') }}" class="form-control @error('short_text') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="image">фото URL</label>
                <input type="text" id="image_url" name="image" value="{{ old('image') }}" class="form-control @error('image') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="place">Место</label>
                <input type="text" id="place" name="place" value="{{ old('place') }}" class="form-control @error('place') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="date_start">Дата начала</label>
                <input type="datetime-local" id="date_start" name="date_start" value="{{ old('date_start') }}" class="form-control @error('date_start') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="date_end">Дата окончания</label>
                <input type="datetime-local" id="date_end" name="date_end" value="{{ old('date_end') }}" class="form-control @error('date_end') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="is_active">Активность</label>
                <input type="radio" id="is_active" name="is_active" value = "1" class="@error('is_active') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="program">Программа</label>
                <input type="text" id="program" name="program" value="{{ old('program') }}" class="form-control @error('program') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="all_places">Кол-во мест</label>
                <input type="text" id="all_places" name="all_places" value="{{ old('all_places') }}" class="form-control @error('all_places') is-invalid @enderror">
            </div>
            <button type="submit" class="btn btn-sm btn-outline-secondary">Добавить+</button>
        </form>
    </div>
@endsection

