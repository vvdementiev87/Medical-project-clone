<nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
    <div class="position-sticky pt-3 sidebar-sticky">
        <ul class="nav flex-column">
            <li class="nav-item">
                <a class="nav-link @if (request()->routeIs('admin.index')) active @endif" aria-current="page"  href="{{ url(App\Classes\Helpers::getHost(true) . '/admin') }}">
                    <span data-feather="home" class="align-text-bottom"></span>
                    Administration
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link @if (request()->routeIs('admin.posts.*')) active @endif" href="{{ url(App\Classes\Helpers::getHost(true) . '/admin/posts') }}">
                    <span data-feather="file-text" class="align-text-bottom"></span>
                    Posts
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link @if (request()->routeIs('admin.comments.*')) active @endif" href="{{ url(App\Classes\Helpers::getHost(true) . '/admin/comments') }}">
                    <span data-feather="file-text" class="align-text-bottom"></span>
                    Comments
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link @if (request()->routeIs('admin.news.*')) active @endif" href="{{ url(App\Classes\Helpers::getHost(true) . '/admin/news') }}">
                    <span data-feather="file-text" class="align-text-bottom"></span>
                    News
                </a>
            </li>
            <li class="nav-item  ">
                <a class="nav-link @if (request()->routeIs('admin.users.*')) active @endif" href="{{ url(App\Classes\Helpers::getHost(true) . '/admin/users') }}">
                    <span data-feather="users" class="align-text-bottom"></span>
                    Users
                </a>
            </li>
            <li class="nav-item  ">

                <a class="nav-link @if (request()->routeIs('admin.all_applications')) active @endif" href="{{ route('admin.all_applications') }}">
                    <span data-feather="users" class="align-text-bottom"></span>
                    Application for registration
                </a>
            </li>
            <li class="nav-item  ">
                <a class="nav-link @if (request()->routeIs('admin.accessGroup.*')) active @endif" href="{{ url(App\Classes\Helpers::getHost(true) . '/admin/accessGroup') }}">
                    <span data-feather="users" class="align-text-bottom"></span>
                    Access group
                </a>
            </li>

        </ul>

    </div>
</nav>
