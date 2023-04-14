@extends('layouts.admin')
@section('content')
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 class="h2">Список групп доступа</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group mr-2">
                <a href="{{ url(App\Classes\Helpers::getHost(true) . "/admin/accessGroup/create") }}" class="btn btn-sm btn-outline-secondary">Добавить группу доступа</a>
                <button class="btn btn-sm btn-outline-secondary">#</button>
            </div>
        </div>
    </div>
    <table class="table table-striped table-sm">
        <thead>
        <tr>
            <th scope="col">#ID</th>
            <th scope="col">Название</th>
            <th scope="col">Создан</th>
            <th scope="col">Обновлён</th>
            <th scope="col">Действия</th>
        </tr>
        </thead>
        <tbody>
        @forelse ($accessGroup as $group)
            <tr>
                <td>{{ $group->id }}</td>
                <td>{{ $group->name }}</td>
                <td>{{ $group->created_at }}</td>
                <td>{{ $group->updated_at }}</td>
                <td>
                    <a class="btn btn-sm btn-outline-secondary" href="{{ url(App\Classes\Helpers::getHost(true) . "/admin/accessGroup/" . $group->id . "/edit") }}">измениить</a>
                    <a href="javascript:;" class="delete btn btn-sm btn-outline-secondary" rel="{{ $group->id }}">удалить</a>
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
                        send(`/admin/accessGroup/${id}`).then(() => {
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

