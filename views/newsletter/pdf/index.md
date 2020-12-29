---
layout: layout.njk
title: Download newsletters
---

# {{ title }}

A selection of newsletters are available as PDF downloads.

<ul>
{% assign nlPdf = newsletters | where: "pdfAvailable" %}
{% for nl in nlPdf %}
<li>
<a href="/newsletter/pdf/{{ nl.number | pad: 3 }}.pdf">
Newsletter {{ nl.number }}
</a>
({% if nl.displayDate %}{{ nl.displayDate }}{% else %}{{ nl.roughDate | date: "%Y %B" }}{% endif %})
</li>
{% endfor %}
</ul>
