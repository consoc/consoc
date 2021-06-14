Glastonbury Conservation Society website
========================================

This website was originally built by Jim Nagel.

This is a rewrite, attempting to keep the look and feel very similar
while modernizing the tech.

Development
-----------

This website is built with the [Eleventy](https://www.11ty.dev/)
static site generator.

### Dependencies

Install dependencies with `npm install`.

### Active development

Run `npm start` to start Eleventy in serve-and-watch mode.
It will announce the URLs it serves.

### Build static site

Run `npm run build` to build to static files ready for deployment.

Content entry
-------------

### Newsletters

All metadata about newsletters and their articles are in
[`views/_data/newsletters.yaml`](views/_data/newsletters.yaml).

Each newsletter is an entry of this array.
The available fields are as follows:

- `roughDate` (required):
  the newsletter's date, to whatever degree of accuracy is known.
  Note that this is interpreted as a date object, which means that for example simply `1990` means the first of January of that year.
  This field used for sorting, and also for display if `displayDate` is not given.

- `displayDate`:
  the newsletter's date to be used for display purposes.
  This is interpreted as a string and is printed as-is, so it can be any text.
  The convention is for the year to go first, for example `1999 July–August`.
  If not given, the `roughDate` field will be used at month resolution.

- `number` (required):
  the newsletter number.

- `hidden`:
  if set to `true`, this newsletter won't be shown in the list of newsletters.
  This is used currently only for newsletter 50, where we do not have the full
  contents list but have republished one article from it.

- `editor`:
  the newsletter's editor.

- `pdfAvailable`:
  if set to `true`, a PDF for this newsletter is expected to be found in
  `/newsletter/pdf` named by number (padded to 3 digits) plus the `.pdf` extension.

- `notes`:
  If given, this text (interpreted as Markdown) will be visible alongside the
  contents list.

- `contents`:
  the contents of the newsletter.
  It is an array of articles. Each article has these fields available:

  - `title` (required): the article title. As with all strings in YAML, it
     must be enclosed in quotes if it contains a colon character.

  - `author`: the article author

  - `talkBy`: the person who gave the talk, if this article is a summary of a talk

  - `photographer`: if an article is mainly or solely photos,
    this credits the photographer

  - `page`: the page number on which the article appears in this newsletter.
    This can be a range or comma-separated list, such as `1–2` or `1, 3` if need
    be.

  - `url`: a URL "slug" which reflects the path to the article on the website.
    This must be the same as the article's Markdown file name, minus the `.md`
    extension. The file is expected to be found in this newsletter's directory.
    For example, for newsletter 99, an article with `url: news` expects to have
    a Markdown file at `views/newsletter/articles/099/news.md`.

  - `webOnly`: if set to `true`, a note will be added mentioning that this
    article did not exist in the printed newsletter, and is only available on
    this website.

  - `tags`: an array of strings used to cross-reference articles.
    If an article has one or more tags, it and every other article with tags in
    common will link to the others at the bottom of its page.

  - `sub`: an array of articles which belong logically with the parent article.
    They can either be without URLs (i.e. without their own web pages) to call
    out specific subsections of the main article, or they can have URLs (and
    separate pages) of their own.

### Articles

Articles are written in Markdown, following the
[Commonmark](https://spec.commonmark.org/) spec.

Each article with `url` set must have a corresponding Markdown file.

The title and author are automatically added, so the Markdown file contains just
the article text and illustrations.

Markdown supports embedded HTML, but it should be used only when required.
Take care with indentation, since Markdown treats anything indented at least one
tab or four spaces as a code block.
For that reason most HTML blocks are kept unindented.

Note that if there is a blank line and then some loose text, this will render as
a Markdown paragraph, which we can use to our advantage.

#### Links

To link to another article, use a file-relative (for same newsletter) or
domain-relative URL.

Because article URLs have a trailing slash, an article in the same newsletter
must be specified like this:

```markdown
...as mentioned in [the foo article](../foo/), the bar bazzes magnificently.
```

A domain-relative example would be like this:

```markdown
...but see [the story in newsletter 110](/newsletter/articles/110/some-article/) for more.
```

Or link to specific newsletter within the contents list:

```markdown
...was the big news in [newsletter 98](/newsletter/articles/#newsletter-98).
```

External websites can be linked too:

```markdown
...see [their website](https://example.com/).
```

Or email addresses or phone numbers:

```markdown
You can [contact me by email](mailto:me@example.com)
or [phone me at 830000](tel:+441458830000).

This example is shorthand for an autolinked email address which will display the
address (no brackets) and link to it: <test@example.com>.
```

#### Images

##### Markup

Images should be wrapped in `<figure>` tags:

```markdown
<figure>
<img src="../some-image.jpg" alt="Description of the image">
</figure>
```

If the image needs a caption, it is added as a `<figcaption>` tag:

```markdown
<figure>
<img src="../some-image.jpg" alt="Description of the image">
<figcaption>

This is the caption of the image. Note the blank lines above and below – these
allow Markdown to parse this text, and so it will be rendered as a paragraph
tag.

It can have multiple paragraphs, any anything else Markdown supports such as
**bold text** or <span class="ednote">inline HTML</span>.

</figcaption>
</figure>
```

To display multiple images side by side, wrap multiple `<figure>` elements in a
`<div class="multipic">`:

```markdown
<div class="multipic">
<figure>
<img src="../image-1.jpg" alt="Description of image 1">
</figure>
<figure>
<img src="../image-2.jpg" alt="Description of image 2">
<figcaption>

These can have captions too.

</figcaption>
</figure>
</div>
```

Figures can be aligned left or right with text flowing around them by adding the
`float-left` or `float-right` classes, but these should be used sparingly.
Remember that mobile devices are now the most common method of web access, and
so many viewers have a very narrow viewport.
It should only be done for very small images, perhaps logos, if at all.

##### Alt text

In the image examples above, you see `alt="Description of the image"`.
Alt text is important for accessibility, and is *not* the same as a caption.
It must always be present unless the image is strictly decorative.
There are
[dozens of articles about how to write good alt text](https://www.google.com/search?q=writing+good+alt+text),
but the simple version is to imagine you need to describe the image to somebody
over the phone, with whatever level of detail is necessary to understand the
notable features in the context of the article, and write that.
It's no use, for example, on a photograph of John Brunsdon which is captioned
"John Brunsdon", to have alt text of "John Brunsdon" -- that is redundant.
His appearance should instead be described, or his surroundings, or what he is
holding or doing, depending on the article's context.

##### URLs

Images should usually be in the same directory as the corresponding article.

    views/newsletter/articles/113
    ├── swaninn.md
    ├── Swantoken_a.jpg
    └── Swantoken_b.jpg

In this example, the `swaninn.md` file will publish to the URL
`/newsletter/articles/113/swanninn/`.
Due to that trailing slash, in order to point to `Swantoken_a.jpg` via a
relative URL from the article page, use the URL `../Swantoken_a.jpg`.

If referencing in image from an earlier newsletter, it's best to use a path
relative to the site domain, such as `/newsletter/articles/099/image.jpg`.

#### Boxes

Sometimes it's nice to put something in a box. We have a `boxout` class for
this.

Choose a tag (`div` is the lowest common denominator, but use `aside` or
`footer` or `header` if appropriate) and add that class, such as:

```markdown
<aside class="boxout">

This paragraph will be in a box.
Note the blank lines padding the content from the surrounding tag; this allows
Markdown to parse the text to turn it into paragraph tags etc.

</aside>
```

#### Editor notes

Use the class `ednote` to render things in italic green.

This can be applied inline (where usually the text should be in square
brackets), including in captions:

```markdown
Here is some paragraph text <span class="ednote">[with a note from the
editor]</span>.
```

Or to one or more paragraphs:

```markdown
<div class="ednote">

A paragraph note from the editor. As with boxes, use a more semantic tag than
`div` if possible.

</aside>
```

Or combined with other classes, like for a boxed ednote:

```markdown
<aside class="boxout ednote">

A boxed note from the editor.

</aside>
```

#### Multiple articles per page

A couple of partials are provided for dealing with this case.

To close off one article and start another, include the `new-aricle` partial:

```liquid
{% include new-article %}
```

All this really does (at time of writing) is close the `<article>` tag and open
a new one, but it's good to use the partial so there is just one place to update
it throughout the website should the structure change.

To then render a new stylized article title, use a different partial:

```liquid
{% include article-header with
  title: "New article title",
%}
```

If the author of the article is known, include it:

```liquid
{% include article-header with
  title: "New article title",
  author: "Author Jones",
%}
```

And if the heading should have a level other than 1 (i.e. for `<h2>`, `<h3>`,
etc, you can specify that:

```liquid
{% include article-header with
  title: "New article title",
  level: 2,
%}
```

If the article is pulled in from a different newsletter,
include the `reprint` partial after the `new-article` partial
but before the `article-header` partial:

```liquid
{% include reprint with newsletter: newsletterByNumber[123] %}
```

where `123` is the newsletter number.

Dark mode
---------

Note that the stylesheet of this website supports
[`prefers-color-scheme: dark`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme).
When editing styles, make sure your changes look good in both modes.
