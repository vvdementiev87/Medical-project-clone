@extends('layouts.admin')
@section('content')
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 class="h2">Список видео</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group mr-2">
                <a href="{{ url(App\Classes\Helpers::getHost(true) . "/admin/videos/create") }}" class="btn btn-sm btn-outline-secondary">Добавить видео</a>
                <button class="btn btn-sm btn-outline-secondary">#</button>
            </div>
        </div>
    </div>
    <div class="table-responsive">
        <table class="table table-striped table-sm">
            <thead>
            <tr>
                <th scope="col">#ID</th>
                <th scope="col">Youtube id</th>
                <th scope="col">Автор</th>
                <th scope="col">Заголовок</th>
                <th scope="col">Содержание</th>
                <th scope="col">фото URL</th>
                <th scope="col">Html-текст</th>
                <th scope="col">Дата создания</th>
                <th scope="col">Действия</th>
            </tr>
            </thead>
            <tbody>
            @forelse ($videos as $video)
                <tr>
                    <td>{{ $video->id }}</td>
                    <td>{{ $video->video_youtube_id }}</td>
                    <td>{{ $video->author }}</td>
                    <td>{{ $video->title }}</td>
                    <td>{{ $video->description }}</td>
                    <td>{{ $video->image_url }}</td>
                    <td>{{ $video->text_html }}</td>
                    <td>{{ $video->created_at }}</td>
                    <td>
                        <a class="btn btn-sm btn-outline-secondary" href="{{ url(App\Classes\Helpers::getHost(true) . "/admin/videos/" . $video->id . "/edit") }}">изменить</a>
                        <a href="javascript:;" class="delete btn btn-sm btn-outline-secondary" rel="{{ $video->id }}">удалить</a>
                    </td>
                </tr>
            @empty
                <tr>
                    <td colspan="7">Нет записей</td>
                </tr>
            @endforelse
            </tbody>
        </table>
        {{ $videos->links() }}
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
                        send(`/admin/videos/${id}`).then(() => {
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

