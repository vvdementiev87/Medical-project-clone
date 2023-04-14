@extends('layouts.admin')
@section('content')
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 class="h2">Полная информация по заявке пользователя</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group mr-2">
                <a href="{{ route('admin.all_applications') }}" class="btn btn-sm btn-outline-secondary">Назад</a>
                <button class="btn btn-sm btn-outline-secondary">#</button>
            </div>
        </div>
    </div>
    <div class="card" style="width: 18rem;">
        <div class="card-header">

            <h3 class="text-center">{{ $application->last_name }}</h3class>
            <h3 class="text-center">{{ $application->first_name }}</h3>
            <h3 class="text-center">{{ $application->surname }}</h3>

        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item text-center"><strong>Дата рождения</strong> {{ $application->birth_date }}</li>
            <li class="list-group-item text-center"><strong>Телефон</strong> {{ $application->phone }}</li>
            <li class="list-group-item text-center"><strong>Email</strong> {{ $application->email }}</li>
            <li class="list-group-item text-center"><strong>Адрес</strong> {{ $application->address }}</li>
            <li class="list-group-item text-center"><strong>Учебное учреждение</strong> {{ $application->education }}</li>
            <li class="list-group-item text-center"><strong>Год окончания</strong> {{ $application->education_end }}</li>
            <li class="list-group-item text-center"><strong>Специальность</strong> {{ $application->specialization }}</li>
            <li class="list-group-item text-center"><strong>Стаж работы</strong> {{ $application->experience }}</li>
            <li class="list-group-item text-center"><strong>Место работы</strong> {{ $application->company }}</li>
            <li class="list-group-item text-center"><strong>Должность</strong> {{ $application->position }}</li>
            <li class="list-group-item text-center"><strong>Ученая степень</strong> {{ $application->degree }}</li>
            <li class="list-group-item text-center"><strong>Учебное звание</strong> {{ $application->academic_rank }}</li>
            <li class="list-group-item text-center"><strong>Профессиональные интересы</strong> {{ $application->interests }}</li>
            <li class="list-group-item text-center"><strong>В каких огранизациях состоит</strong> {{ $application->other_organization }}</li>
        </ul>
    </div>

@endsection
