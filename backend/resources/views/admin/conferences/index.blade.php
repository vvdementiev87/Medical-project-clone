@extends('layouts.admin')
@section('content')
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 class="h2">Список конференций</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group mr-2">
                <a href="{{ url(App\Classes\Helpers::getHost(true) . "/admin/conferences/create") }}" class="btn btn-sm btn-outline-secondary">Добавить конференцию</a>
                <button class="btn btn-sm btn-outline-secondary">#</button>
            </div>
        </div>
    </div>
    <div class="table-responsive">
        <table class="table table-striped table-sm">
            <thead>
            <tr>
                <th scope="col">#ID</th>
                <th scope="col">Название</th>
                <th scope="col">Описание</th>
                <th scope="col">Короткое описание</th>
                <th scope="col">фото URL</th>
                <th scope="col">Место</th>
                <th scope="col">Дата начала</th>
                <th scope="col">Дата окончания</th>
                <th scope="col">Активность</th>
                <th scope="col">Программа</th>
                <th scope="col">Кол-во мест</th>
                <th scope="col">Действия</th>
            </tr>
            </thead>
            <tbody>
            @forelse ($conferences as $conference)
                <tr>
                    <td>{{ $conference->id }}</td>
                    <td>{{ $conference->name }}</td>
                    <td>{{ $conference->description }}</td>
                    <td>{{ $conference->short_text }}</td>
                    <td>{{ $conference->image }}</td>
                    <td>{{ $conference->place }}</td>
                    <td>{{ $conference->date_start }}</td>
                    <td>{{ $conference->date_end }}</td>
                    <td>{{ ($conference->is_active == 1) ? "true" : "false" }}</td>
                    <td>{{ $conference->program }}</td>
                    <td>{{ $conference->all_places }}</td>
                    <td>
                        <a class="btn btn-sm btn-outline-secondary" href="{{ url(App\Classes\Helpers::getHost(true) . "/admin/conferences/" . $conference->id . "/edit") }}">изменить</a>
                        <a href="javascript:;" class="delete btn btn-sm btn-outline-secondary" rel="{{ $conference->id }}">удалить</a>
                    </td>
                </tr>
            @empty
                <tr>
                    <td colspan="7">Нет записей</td>
                </tr>
            @endforelse
            </tbody>
        </table>
        {{ $conferences->links() }}
    </div>
@endsection

@push("js")
    <script type="text/javascript">
        document.addEventListener('DOMContentLoaded', function() {
            let elements = document.querySelectorAll(".delete");
            elements.forEach(function(elem, key) {
                elem.addEventListener("click", function() {
                    const id = this.getAttribute('rel');
                    if(confirm(`Confirm delete group with #id = ${id}`)) {
                        send(`/admin/conferences/${id}`).then(() => {
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

