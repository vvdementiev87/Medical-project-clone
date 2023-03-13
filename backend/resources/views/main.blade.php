<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@meilisearch/instant-meilisearch/templates/basic_search.css" />
  </head>
  <body>
    <div class="wrapper">
      <div id="searchbox" focus></div>
      <div id="hits"></div>
    </div>
    <div class="but">Кнопка</div>
    <form method="post" action="/api/forum/comments/add">
      @csrf
      <input type="text" id="author_id" name="author_id" placeholder="author_id">
      <input type="text" id="description" name="description" placeholder="description">
      <input type="text" id="post_id" name="post_id" placeholder="post_id">
      <button type="submit">Сохранить</button>
    </form>

  </body>
  <script src="https://cdn.jsdelivr.net/npm/@meilisearch/instant-meilisearch/dist/instant-meilisearch.umd.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/instantsearch.js@4"></script>
  <script src="{{ asset('assets/js/script.js') }}"></script>
</html>
