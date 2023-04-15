<html>
  <head>
    <title>Hacker News</title>
  </head>

  <body>
    <ul class="news-view view">
      {% for item in list %}
      <li class="item">
        <a href="{{ item.url }}">{{ item.title }}</a>
        {{ helper.relativeTime(item.time) }}
      </li>
      {% endfor %}
    </ul>
  </body>
</html>
