---
layout: page

---
{% include JB/setup %}


<ul class="posts">
  {% for page in site.posts %}
<div class="container2">
<h3><a href="{{ BASE_PATH }}{{page.url}}">{{page.title}}</a></h3>
<p><small><strong>{{ page.date | date: "%B %e, %Y" }}</strong></p>
{{ page.content | split:"======" | first }}</br>
<b><a href="{{ BASE_PATH }}{{ page.url }}">continue reading >></a></b>
</div>
  {% endfor %}
</ul>

