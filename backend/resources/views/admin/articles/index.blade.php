@extends('layouts.admin')
@section('content')
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 class="h2">Список статей</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group mr-2">
                <a href="{{ url(App\Classes\Helpers::getHost(true) . "/admin/articles/create") }}" class="btn btn-sm btn-outline-secondary">Добавить статью</a>
                <button class="btn btn-sm btn-outline-secondary">#</button>
            </div>
        </div>
    </div>
    <div class="table-responsive">
    <table class="table table-striped table-sm">
        <thead>
        <tr>
            <th scope="col">#ID</th>
            <th scope="col">Автор</th>
            <th scope="col">Заголовок</th>
            <th scope="col">Содержание</th>
            <th scope="col">фото URL</th>
            <th scope="col">Короткое описание</th>
            <th scope="col">Html-текст</th>
            <th scope="col">Дата создания</th>
            <th scope="col">Действия</th>
        </tr>
        </thead>
        <tbody>
        @forelse ($articles as $article)
            <tr>
                <td>{{ $article->id }}</td>
                <td>{{ !$article->author ? '-' : $article->author }}</td>
                <td>{{ $article->title }}</td>
                <td>{{ $article->description }}</td>
                <td>{{ $article->image_url }}</td>
                <td>{{ $article->short_text }}</td>
                <td>{{ $article->text_html }}</td>
                <td>{{ $article->created_at }}</td>
                <td>
                    <a class="btn btn-sm btn-outline-secondary" href="{{ url(App\Classes\Helpers::getHost(true) . "/admin/articles/" . $article->id . "/edit") }}">изменить</a>
                    <a href="javascript:;" class="delete btn btn-sm btn-outline-secondary" rel="{{ $article->id }}">удалить</a>
                </td>
            </tr>
        @empty
            <tr>
                <td colspan="7">Нет записей</td>
            </tr>
        @endforelse
        </tbody>
    </table>
        {{ $articles->links() }}
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
                        send(`/admin/articles/${id}`).then(() => {
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
