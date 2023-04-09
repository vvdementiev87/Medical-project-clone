@extends('layouts.admin')
@section('content')
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 class="h2">Список пользователей</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group mr-2">
                <a href="{{ url('https://bosomed.ru/middleware/admin/users/create') }}"
                   class="btn btn-sm btn-outline-secondary">Добавить пользователя</a>
                <button class="btn btn-sm btn-outline-secondary">#</button>
            </div>
        </div>
    </div>
    <table class="table table-striped table-sm">
        <thead>
        <tr>
            <th scope="col">#ID</th>
            <th scope="col">Группа доступа</th>
            <th scope="col">Фамилия</th>
            <th scope="col">Имя</th>
            <th scope="col">Отчество</th>
            <th scope="col">Дата рождения</th>
            <th scope="col">Аватар</th>
            <th scope="col">Телефон</th>
            <th scope="col">Адресс</th>
            <th scope="col">Образование</th>
            <th scope="col">Место работы</th>
            <th scope="col">Должность</th>
            <th scope="col">Опыт работы</th>
            <th scope="col">Подписка на новости</th>
            <th scope="col">Создан</th>
            <th scope="col">Обновлён</th>
            <th scope="col">Действия</th>
        </tr>
        </thead>
        <tbody>
        @forelse ($usersList as $user)
            <tr>
                <td>{{ $user->id }}</td>
                <td>{{ $user->accessGroups }}</td>
                <td>{{ $user->last_name }}</td>
                <td>{{ $user->first_name }}</td>
                <td>{{ $user->surname }}</td>
                <td>{{ $user->birth_date }}</td>
                <td>{{ $user->avatar }}</td>
                <td>{{ $user->phone }}</td>
                <td>{{ $user->address }}</td>
                <td>{{ $user->education }}</td>
                <td>{{ $user->place_work }}</td>
                <td>{{ $user->position }}</td>
                <td>{{ $user->experience }}</td>
                <td>{{ $user->sign_for_news }}</td>
                <td>{{ $user->created_at }}</td>
                <td>{{ $user->updated_at }}</td>
                <td>
                    <a href="{{ url("https://bosomed.ru/middleware/admin/users/".$user->id."/edit")
   }}">измениить</a>
                    <a href="javascript:;" class="delete" rel="{{ $user->id }}">удалить</a>
                </td>
            </tr>
        @empty
            <tr>
                <td colspan="7">Нет записей</td>
            </tr>
        @endforelse
        </tbody>
    </table>
    {{ $usersList->links() }}
@endsection

@push("js")
    <script type="text/javascript">
        document.addEventListener('DOMContentLoaded', function() {
            let elements = document.querySelectorAll(".delete");
            elements.forEach(function(elem, key) {
                elem.addEventListener("click", function() {
                    const id = this.getAttribute('rel');
                    if(confirm(`Confirm delete user with #id = ${id}`)) {
                        send(`/admin/users/${id}`).then(() => {
                            location.reload();
                        });
                    }
                });
            });
        });
        async function send(url) {
            let response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                }
            });
            let result = await response.json();
            return result.ok;
        }
    </script>
@endpush
