@extends('layouts.admin')
@section('content')
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 class="h2">Заявки на регистрацию</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
        </div>
    </div>
    <table class="table table-striped table-sm">
        <thead>
        <tr>
            <th scope="col">#ID</th>
            <th scope="col">Фамилия</th>
            <th scope="col">Имя</th>
            <th scope="col">Отчество</th>
            <th scope="col">Место работы</th>
            <th scope="col">Должность</th>
            <th scope="col">Создан</th>
            <th scope="col">Действия</th>
        </tr>
        </thead>
        <tbody>
        @forelse ($applicationList as $application)
            <tr>
                <td>{{ $application->id }}</td>
                <td>{{ $application->last_name }}</td>
                <td>{{ $application->first_name }}</td>
                <td>{{ $application->surname }}</td>
                <td>{{ $application->company }}</td>
                <td>{{ $application->position }}</td>
                <td>{{ $application->created_at }}</td>
                <td>
                    <a class="btn btn-sm btn-outline-secondary" href="{{ route('admin.application', [$application->id]) }}">Посмотреть полную информацию</a>
                    <a class="btn btn-sm btn-outline-secondary" href="{{ route('admin.accept_the_application', $application->id) }}">Принять заявку на регистрацию</a>
                    <a class="btn btn-sm btn-outline-secondary" href="{{ route('admin.reject_the_application', $application->id) }}">Отклонить заявку на регистрацию</a>
                </td>
            </tr>
        @empty
            <tr>
                <td colspan="7">Нет записей</td>
            </tr>
        @endforelse
        </tbody>
    </table>
    {{ $applicationList->links() }}
@endsection

