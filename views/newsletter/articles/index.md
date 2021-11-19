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

{% if nl.hidden %}
{% continue %}
{% endif %}

<section id="newsletter-{{ nl.number }}">
	<a name="{{ nl.number }}"></a> <!-- anchor tag so that can link directly to an edition from elsewhere on site -->

## <span class="newsletter-number">Newsletter {{ nl.number }}:</span> {% if nl.displayDate %}{{ nl.displayDate }}{% else %}{{ nl.roughDate | date: "%Y %B" }}{% endif %}

{{ nl.notes }}

{% if nl.pdfAvailable %}
This newsletter is available as a [PDF](/newsletter/pdf/{{ nl.number | pad: 3 }}.pdf) download.
{% endif %}

{% include contents with nl %}

</section>

{% endfor %}

</nav>
