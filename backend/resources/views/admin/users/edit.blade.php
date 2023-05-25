@extends('layouts.admin')
@section('content')
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 class="h2">Редактирование пользователя</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group mr-2">
                <a href="{{ url(App\Classes\Helpers::getHost(true) . "/admin/users") }}"
                   class="btn btn-sm btn-outline-secondary">Назад</a>
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
        <form method="post"
              action="{{  url(App\Classes\Helpers::getHost(true) . "/admin/users/". $user->id ) }}">
            @csrf
            @method('put')
            <div class="form-group">
                <label for="access_group">Группа доступа</label>
                <select id="access_group" name="access_group[]"
                        class="form-control @error('access_group') is-invalid @enderror" multiple>
                    <option value="0">->Select<-</option>
                    @foreach($accessGroup as $group)
                        <option @if($user->accessGroup->contains('id', $group->id)) selected
                                @endif value="{{ $group->id }}">{{ $group->name }}</option>
                    @endforeach
                </select>
            </div>
            <div class="form-group">
                <label for="last_name">Фамилия</label>
                <input type="text" id="last_name" name="last_name" value="{{ $user->last_name }}"
                       class="form-control @error('last_name') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="first_name">Имя</label>
                <input type="text" id="first_name" name="first_name" value="{{ $user->first_name }}"
                       class="form-control @error('first_name') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="surname">Отчество</label>
                <input type="text" id="surname" name="surname" value="{{ $user->surname }}"
                       class="form-control @error('surname') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="birth_date">Дата рождения</label>
                <input type="text" id="birth_date" name="birth_date" value="{{ $user->birth_date }}"
                       class="form-control @error('birth_date') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="avatar">Аватар</label>
                <input type="text" id="avatar" name="avatar" value="{{ $user->avatar }}"
                       class="form-control @error('avatar') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="phone">Телефон</label>
                <input type="text" id="phone" name="phone" value="{{ $user->phone }}"
                       class="form-control @error('phone') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="address">Адресс</label>
                <input type="text" id="address" name="address" value="{{ $user->address }}"
                       class="form-control @error('address') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="education">Образование</label>
                <input type="text" id="education" name="education" value="{{ $user->education }}"
                       class="form-control @error('education') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="place_work">Место работы</label>
                <input type="text" id="place_work" name="place_work" value="{{ $user->place_work }}"
                       class="form-control @error('place_work') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="position">Должность</label>
                <input type="text" id="position" name="position" value="{{ $user->position }}"
                       class="form-control @error('position') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="experience">Опыт работы</label>
                <input type="text" id="experience" name="experience" value="{{ $user->experience }}"
                       class="form-control @error('experience') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="sign_for_news">Подписка на новости</label>
                <input type="radio" id="sign_for_news" name="sign_for_news" value="true"
                       @if ($user->sign_for_news === true) checked @endif>
            </div>
            <button type="submit" class="btn btn-sm btn-outline-secondary">Добавить+</button>
        </form>
    </div>
@endsection
