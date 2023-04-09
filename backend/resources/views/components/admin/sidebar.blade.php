<nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
    <div class="position-sticky pt-3 sidebar-sticky">
        <ul class="nav flex-column">
            <li class="nav-item">
                <a class="nav-link @if (request()->routeIs('admin.index')) active @endif" aria-current="page"  href="{{ route('admin.index') }}">
                    <span data-feather="home" class="align-text-bottom"></span>
                    Administration
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link @if (request()->routeIs('admin.posts.*')) active @endif" href="{{ route('admin.posts.index') }}">
                    <span data-feather="file-text" class="align-text-bottom"></span>
                    Posts
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link @if (request()->routeIs('admin.comments.*')) active @endif" href="{{ route('admin.comments.index') }}">
                    <span data-feather="file-text" class="align-text-bottom"></span>
                    Comments
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link @if (request()->routeIs('admin.news.*')) active @endif" href="{{ route('admin.news.index') }}">
                    <span data-feather="file-text" class="align-text-bottom"></span>
                    News
                </a>
            </li>
            <li class="nav-item  ">
                <a class="nav-link @if (request()->routeIs('admin.users.*')) active @endif" href="{{ route('admin.users.index') }}">
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
                <a class="nav-link @if (request()->routeIs('admin.accessGroup.*')) active @endif" href="{{ route('admin.accessGroup.index') }}">
                    <span data-feather="users" class="align-text-bottom"></span>
                    Access group
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <span data-feather="bar-chart-2" class="align-text-bottom"></span>
                    Reports
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <span data-feather="layers" class="align-text-bottom"></span>
                    Integrations
                </a>
            </li>
        </ul>
        <nav class="small" id="toc">
            <ul class="list-unstyled">
                <li class="my-2">
                    <button class="btn d-inline-flex align-items-center collapsed border-0" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#contents-collapse" aria-controls="contents-collapse">
                        Contents
                    </button>
                    <ul class="list-unstyled ps-3 collapse" id="contents-collapse">
                        <li><a class="d-inline-flex align-items-center rounded text-decoration-none" href="#typography">Typography</a>
                        </li>
                        <li><a class="d-inline-flex align-items-center rounded text-decoration-none" href="#images">Images</a>
                        </li>
                        <li><a class="d-inline-flex align-items-center rounded text-decoration-none" href="#tables">Tables</a>
                        </li>
                        <li><a class="d-inline-flex align-items-center rounded text-decoration-none" href="#figures">Figures</a>
                        </li>
                    </ul>
                </li>
                <li class="my-2">
                    <button class="btn d-inline-flex align-items-center collapsed border-0" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#forms-collapse" aria-controls="forms-collapse">
                        Forms
                    </button>
                    <ul class="list-unstyled ps-3 collapse" id="forms-collapse">
                        <li><a class="bd-aside d-inline-flex align-items-center rounded text-decoration-none"
                               href="#overview">Overview</a></li>
                        <li><a class="bd-aside d-inline-flex align-items-center rounded text-decoration-none"
                               href="#disabled-forms">Disabled forms</a></li>
                        <li><a class="bd-aside d-inline-flex align-items-center rounded text-decoration-none"
                               href="#sizing">Sizing</a></li>
                        <li><a class="bd-aside d-inline-flex align-items-center rounded text-decoration-none"
                               href="#input-group">Input group</a></li>
                        <li><a class="bd-aside d-inline-flex align-items-center rounded text-decoration-none"
                               href="#floating-labels">Floating labels</a></li>
                        <li><a class="bd-aside d-inline-flex align-items-center rounded text-decoration-none"
                               href="#validation">Validation</a></li>
                    </ul>
                </li>
                <li class="my-2">
                    <button class="btn d-inline-flex align-items-center collapsed border-0" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#components-collapse" aria-controls="components-collapse">
                        Components
                    </button>
                    <ul class="list-unstyled ps-3 collapse" id="components-collapse">
                        <li>
                            <a class="d-inline-flex align-items-center rounded text-decoration-none" href="#accordion">Accordion</a>
                        </li>
                        <li>
                            <a class="d-inline-flex align-items-center rounded text-decoration-none" href="#alerts">Alerts</a>
                        </li>
                        <li>
                            <a class="d-inline-flex align-items-center rounded text-decoration-none" href="#badge">Badge</a>
                        </li>
                        <li>
                            <a class="d-inline-flex align-items-center rounded text-decoration-none" href="#breadcrumb">Breadcrumb</a>
                        </li>
                        <li>
                            <a class="d-inline-flex align-items-center rounded text-decoration-none" href="#buttons">Buttons</a>
                        </li>
                        <li>
                            <a class="d-inline-flex align-items-center rounded text-decoration-none" href="#button-group">Button group</a>
                        </li>
                        <li>
                            <a class="d-inline-flex align-items-center rounded text-decoration-none" href="#card">Card</a>
                        </li>
                        <li>
                            <a class="d-inline-flex align-items-center rounded text-decoration-none" href="#carousel">Carousel</a>
                        </li>
                        <li>
                            <a class="d-inline-flex align-items-center rounded text-decoration-none" href="#dropdowns">Dropdowns</a>
                        </li>
                        <li>
                            <a class="d-inline-flex align-items-center rounded text-decoration-none" href="#list-group">List group</a>
                        </li>
                        <li>
                            <a class="d-inline-flex align-items-center rounded text-decoration-none" href="#modal">Modal</a>
                        </li>
                        <li>
                            <a class="d-inline-flex align-items-center rounded text-decoration-none" href="#navs">Navs</a>
                        </li>
                        <li>
                            <a class="d-inline-flex align-items-center rounded text-decoration-none" href="#navbar">Navbar</a>
                        </li>
                        <li><a class="d-inline-flex align-items-center rounded text-decoration-none" href="#pagination">Pagination</a>
                        </li>
                        <li>
                            <a class="d-inline-flex align-items-center rounded text-decoration-none" href="#popovers">Popovers</a>
                        </li>
                        <li>
                            <a class="d-inline-flex align-items-center rounded text-decoration-none" href="#progress">Progress</a>
                        </li>
                        <li>
                            <a class="d-inline-flex align-items-center rounded text-decoration-none" href="#scrollspy">Scrollspy</a>
                        </li>
                        <li>
                            <a class="d-inline-flex align-items-center rounded text-decoration-none" href="#spinners">Spinners</a>
                        </li>
                        <li>
                            <a class="d-inline-flex align-items-center rounded text-decoration-none" href="#toasts">Toasts</a>
                        </li>
                        <li>
                            <a class="d-inline-flex align-items-center rounded text-decoration-none" href="#tooltips">Tooltips</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
            <span>Saved reports</span>
            <a class="link-secondary" href="#" aria-label="Add a new report">
                <span data-feather="plus-circle" class="align-text-bottom"></span>
            </a>
        </h6>
        <ul class="nav flex-column mb-2">
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <span data-feather="file-text" class="align-text-bottom"></span>
                    Current month
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <span data-feather="file-text" class="align-text-bottom"></span>
                    Last quarter
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <span data-feather="file-text" class="align-text-bottom"></span>
                    Social engagement
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <span data-feather="file-text" class="align-text-bottom"></span>
                    Year-end sale
                </a>
            </li>
        </ul>
    </div>
</nav>
