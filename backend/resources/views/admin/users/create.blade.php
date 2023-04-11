@extends('layouts.admin')
@section('content')
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 class="h2">Добавить пользователя</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group mr-2">
                <a href="{{ url(App\Classes\Helpers::getHost(true) . "/admin/users") }}" class="btn btn-sm btn-outline-secondary">Назад</a>
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
        <form method="post" action="{{ url(App\Classes\Helpers::getHost(true) . '/admin/users') }}">
            @csrf
            <div class="form-group">
                <label for="access_group">Группа доступа</label>
                <select id="access_group" name="access_group[]" class="form-control @error('access_group') is-invalid @enderror" multiple>
                    <option value="0">->Select<-</option>
                    @foreach($access_groups as $group)
                        <option @if(old('access_group') === $group) selected @endif value="{{ $group->id }}">{{ $group->name }}</option>
                    @endforeach
                </select>
            </div>
            <div class="form-group">
                <label for="last_name">Фамилия</label>
                <input type="text" id="last_name" name="last_name" value="{{ old('last_name') }}" class="form-control @error('last_name') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="first_name">Имя</label>
                <input type="text" id="first_name" name="first_name" value="{{ old('first_name') }}" class="form-control @error('first_name') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="surname">Отчество</label>
                <input type="text" id="surname" name="surname" value="{{ old('surname') }}" class="form-control @error('surname') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="birth_date">Дата рождения</label>
                <input type="text" id="birth_date" name="birth_date" value="{{ old('birth_date') }}" class="form-control @error('birth_date') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="avatar">Аватар</label>
                <input type="url" id="avatar" name="avatar" value="{{ old('avatar') }}" class="form-control @error('avatar') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="phone">Телефон</label>
                <input type="text" id="phone" name="phone" value="{{ old('phone') }}" class="form-control @error('phone') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="address">Адресс</label>
                <input type="text" id="address" name="address" value="{{ old('address') }}" class="form-control @error('address') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="education">Образование</label>
                <input type="text" id="education" name="education" value="{{ old('education') }}" class="form-control @error('education') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="place_work">Место работы</label>
                <input type="text" id="place_work" name="place_work" value="{{ old('place_work') }}" class="form-control @error('place_work') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="position">Должность</label>
                <input type="text" id="position" name="position" value="{{ old('position') }}" class="form-control @error('position') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="experience">Опыт работы</label>
                <input type="text" id="experience" name="experience" value="{{ old('experience') }}" class="form-control @error('experience') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="sign_for_news">Подписка на новости</label>
                <input type="radio" id="sign_for_news" name="sign_for_news" value="true">
            </div>
            <button type="submit" class="btn btn-sm btn-outline-secondary">Добавить+</button>
        </form>
    </div>
@endsection
