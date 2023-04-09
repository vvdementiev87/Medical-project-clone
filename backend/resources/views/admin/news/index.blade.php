@extends('layouts.admin')
@section('content')
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 class="h2">Список новостей</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group mr-2">
                <a href="{{ url("https://bosomed.ru/middleware/admin/news/create") }}" class="btn btn-sm btn-outline-secondary">Добавить новость</a>
                <button class="btn btn-sm btn-outline-secondary">#</button>
            </div>
        </div>
    </div>

@if (session('success'))
    <div id="top-alert" class="alert alert-primary" role="alert">
        {{ session('success') }}
    </div>
@endif

    <div>
        <table class="table table-striped table-sm">
            <thead>
            <tr>
                <th scope="col">#ID</th>
                <th scope="col">Заголовок</th>
                <th scope="col">Краткое описание</th>
                <th scope="col">Текст новости</th>
                <th scope="col">Url картинки</th>
                <th scope="col">Дата публикации</th>
                <th scope="col">Дата снятия с публикации</th>
                <th scope="col">Дата создания</th>
                <th scope="col">Дата обновления</th>
                <th scope="col">Действия</th>
            </tr>
            </thead>
            <tbody>
            @forelse ($newsList as $news)
                <tr>
                    <td>{{ $news->id }}</td>
                    <td>{{ $news->title }}</td>
                    <td>{{ $news->short_description }}</td>
                    <td>{{ $news->description }}</td>
                    <td>{{ $news->image_url }}</td>
                    <td>{{ $news->created_at }}</td>
                    <td>{{ $news->updated_at }}</td>
                    <td>
                        <a href="{{ url("https://bosomed.ru/middleware/admin/news/".$news->id ."/edit") }}">измениить</a>
                        <a href="javascript:;" class="delete" rel="{{ $news->id }}">удалить</a>
                    </td>
                </tr>
            @empty
                <tr>
                    <td colspan="7">Нет записей</td>
                </tr>
            @endforelse

            </tbody>
        </table>
    </div>
@endsection

@push("js")
    <script type="text/javascript">
        document.addEventListener('DOMContentLoaded', function() {
            let elements = document.querySelectorAll(".delete");
            elements.forEach(function(elem, key) {
                elem.addEventListener("click", function() {
                    const id = this.getAttribute('rel');
                    if(confirm(`Confirm delete news with #id = ${id}`)) {
                        send(`/admin/news/${id}`).then(() => {
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

<script>
    document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const alert = bootstrap.Alert.getOrCreateInstance('#top-alert');
        alert.close();
    }, 5000);
    });
</script>
