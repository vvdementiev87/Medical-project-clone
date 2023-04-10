@extends('layouts.admin')
@section('content')
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 class="h2">Список комментариев</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
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
                <th scope="col">ID автора</th>
                <th scope="col">Пост ID</th>
                <th scope="col">Текст комментария</th>
                <th scope="col">Дата создания</th>
                <th scope="col">Дата обновления</th>
                <th scope="col">Действия</th>
            </tr>
            </thead>
            <tbody>
            @forelse ($commentList as $comment)
                <tr>
                    <td>{{ $comment->id }}</td>
                    <td>{{ $comment->author_id }}</td>
                    <td>{{ $comment->post_id }}</td>
                    <td>{{ $comment->description }}</td>
                    <td>{{ $comment->created_at }}</td>
                    <td>{{ $comment->updated_at }}</td>
                    <td>
                        <a class="btn btn-sm btn-outline-secondary" href="{{ url(App\Classes\Helpers::getHost(true) . "/admin/comments/" . $comment->id . "/edit") }}">изменить</a>
                        <a href="javascript:;" class="delete btn btn-sm btn-outline-secondary" rel="{{ $comment->id }}">удалить</a>
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
                    if(confirm(`Confirm delete comment with #id = ${id}`)) {
                        send(`/admin/comments/${id}`).then(() => {
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
