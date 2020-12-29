---
layout: layout.njk
title: The newsletter
---

# {{ title }}

The newsletter began in 1973 and is published quarterly.

You can [download some recent newsletters as PDF](/newsletter/pdf/).
Or you can [view the contents of all newsletters since 1999](/newsletter/articles/),
with links with many to many of their articles in full.

Articles or letters or comments from members are always welcome.

<section class="boxout" id="latest-newsletter">

{% assign nl = newsletters | last %}

## Latest newsletter: issue {{ nl.number }} ({% if nl.displayDate %}{{ nl.displayDate }}{% else %}{{ nl.roughDate | date: "%Y %B" }}{% endif %})

<img alt="" src="/img/newslet-thumb{{ nl.number | pad: 3 }}.png" style="width: 10em" class="float-right">

{{ newsletter.notes }}

### Contents:

<nav class="newsletter-contents">
{% include contents with nl %}
</nav>

</section>

<article>

{% include article-header with
	level: 2,
	title: "Hundreds of past newsletter articles online in full",
	author: "Jim Nagel"
%}

<img class="float-right" src="/img/collage80.jpg" alt="">

Newsletter 150 came out in autumn 2018.
To celebrate the milestone, around 400 articles (so far) from the past 25 years of newsletters are now online in full here on the Glastonbury Conservation Society website.

Or [see the Table of Contents](/newsletter/articles/), which gives a complete list of everything published in all newsletters since 1999.
Articles that are online in full are linked — click to go straight to that article.

You’ll find that in many cases the photo that was originally published black-and-white back then is online now in full colour.
The text, however, is pretty well unchanged from what was printed at the time, and a line at the top of the page clearly indicates the date of original publication.

Some **cross-references** have been added so that you can jump to related articles in other newsletter issues.

Overall, the website has had a behind-the-scenes technical makeover to make it visually clean and consistent and fast to load.

<!-- TODO: implement search feature or remove/change this copy -->

**Search** is a further important new feature.
Click the button at the top of any page.
Enter any word or phrase and press Go.
Faster than Google you get a list of all the articles in which your phrase appears.
You can click on the relevant result to go exactly to that page.
For this feature we must thank an excellent service called Freefind.

A link to the **Table of Contents** for all newsletters since 1999 appears alongside the Search box.
If you have the original printed newsletters, the Table of Contents shows you the relevant page number for each article.

And what about the newsletters from before 1999?
Well, either they exist only on paper or as computer files archived on cartridges from a device no longer in use.
They too will appear online after a lot of re-typing or cyber-archaeology.

More articles will be republished online as time permits.

</article>

<aside>

## From the past, a few random newsletter articles in full

{% assign sample = newsletters | getAllArticles | where: "url" | sampleSize: 8 %}

<!-- TODO: images -->
{% for article in sample %}
- [{{ article.title }}](/newsletter/articles/{{ article.newsletterNumber | pad: 3 }}/{{ article.url }}/)
{%- endfor %}

</aside>
