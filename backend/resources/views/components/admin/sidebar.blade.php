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
                <a class="nav-link @if (request()->routeIs('admin.articles.*')) active @endif" href="{{ url(App\Classes\Helpers::getHost(true) . '/admin/articles') }}">
                    <span data-feather="file-text" class="align-text-bottom"></span>
                    Articles
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link @if (request()->routeIs('admin.videos.*')) active @endif" href="{{ url(App\Classes\Helpers::getHost(true) . '/admin/videos') }}">
                    <span data-feather="file-text" class="align-text-bottom"></span>
                    Videos
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link @if (request()->routeIs('admin.conferences.*')) active @endif" href="{{ url(App\Classes\Helpers::getHost(true) . '/admin/conferences') }}">
                    <span data-feather="file-text" class="align-text-bottom"></span>
                    Conferences
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link @if (request()->routeIs('admin.conferenceRegistration.*')) active @endif" href="{{ url(App\Classes\Helpers::getHost(true) . '/admin/conferenceRegistration') }}">
                    <span data-feather="file-text" class="align-text-bottom"></span>
                    Conference registrations
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
                <a class="nav-link @if (request()->routeIs('admin.accounts.*')) active @endif" href="{{ url(App\Classes\Helpers::getHost(true) . '/admin/accounts') }}">
                    <span data-feather="users" class="align-text-bottom"></span>
                    Account
                </a>
            </li>
            <li class="nav-item  ">
                <a class="nav-link @if (request()->routeIs('admin.users.*')) active @endif" href="{{ url(App\Classes\Helpers::getHost(true) . '/admin/users') }}">
                    <span data-feather="users" class="align-text-bottom"></span>
                    Users
                </a>
            </li>
            <li class="nav-item  ">
                <a class="nav-link @if (request()->routeIs('admin.all_applications.*')) active @endif" href="{{ url(App\Classes\Helpers::getHost(true) . '/admin/all_applications ') }}">
                    <span data-feather="file-text" class="align-text-bottom"></span>
                    Application for registration
                </a>
            </li>
            <li class="nav-item  ">
                <a class="nav-link @if (request()->routeIs('admin.accessGroup.*')) active @endif" href="{{ url(App\Classes\Helpers::getHost(true) . '/admin/accessGroup') }}">
                    <span data-feather="layers" class="align-text-bottom"></span>
                    Access group
                </a>
            </li>

        </ul>

    </div>
</nav>
