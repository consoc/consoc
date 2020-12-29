---
layout: layout.njk
title: Newsletter contents
---

# Newsletter contents since 1999: issues 90 to present

Contents before 1999 are still to be compiled,
and not all articles are yet ready online.
Those which are available are linked.

<nav class="newsletter-contents">

{% for nl in newsletters %}

<section id="newsletter-{{ nl.number }}">

## <span class="newsletter-number">Newsletter {{ nl.number }}:</span> {% if nl.displayDate %}{{ nl.displayDate }}{% else %}{{ nl.roughDate | date: "%Y %B" }}{% endif %}

{{ nl.notes }}

{% if nl.pdfAvailable %}
This newsletter is available as [PDF](/newsletters/pdf/{{ nl.number | pad: 3 }}.pdf).
{% endif %}

{% include contents with nl %}

</section>

{% endfor %}

</nav>
