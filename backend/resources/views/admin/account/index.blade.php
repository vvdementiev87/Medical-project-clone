@extends('layouts.admin')
@section('content')
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 class="h2">Список аккаунтов</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group mr-2">
                <a href="{{ url(App\Classes\Helpers::getHost(true) . "/admin/accounts/create") }}" class="btn btn-sm btn-outline-secondary">Добавить аккаунт</a>
                <button class="btn btn-sm btn-outline-secondary">#</button>
            </div>
        </div>
    </div>
    <table class="table table-striped table-sm">
        <thead>
        <tr>
            <th scope="col">#ID</th>
            <th scope="col">ID пользователя</th>
            <th scope="col">Почта</th>
            <th scope="col">Пароль</th>
            <th scope="col">Создан</th>
            <th scope="col">Обновление почты</th>
            <th scope="col">Обновление пароля</th>
            <th scope="col">Действия</th>
        </tr>
        </thead>
        <tbody>
        @forelse ($accounts as $account)
            <tr>
                <td>{{ $account->id }}</td>
                <td>{{ (!$account->user_id) ? '-' : $account->user_id }}</td>
                <td>{{ $account->email }}</td>
                <td>{{ $account->password }}</td>
                <td>{{ $account->created_at }}</td>
                <td>{{ empty($account->date_email_update) ? '-' : $account->date_email_update}}</td>
                <td>{{ empty($account->date_password_update) ? '-' : $account->date_password_update }}</td>
                <td>
                    <a class="btn btn-sm btn-outline-secondary" href="{{ url(App\Classes\Helpers::getHost(true) . "/admin/accounts/" . $account->id . "/edit") }}">изменить</a>
                    <a href="javascript:;" class="delete btn btn-sm btn-outline-secondary" rel="{{ $account->id }}">удалить</a>
                </td>
            </tr>
        @empty
            <tr>
                <td colspan="7">Нет записей</td>
            </tr>
        @endforelse

        </tbody>
    </table>
@endsection

@push("js")
    <script type="text/javascript">
        document.addEventListener('DOMContentLoaded', function() {
            let elements = document.querySelectorAll(".delete");
            elements.forEach(function(elem, key) {
                elem.addEventListener("click", function() {
                    const id = this.getAttribute('rel');
                    if(confirm(`Confirm delete group with #id = ${id}`)) {
                        send(`/admin/accounts/${id}`).then(() => {
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
