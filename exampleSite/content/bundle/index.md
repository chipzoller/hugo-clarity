---
title: 'An example of a Hugo page bundle'
description: 'Page bundles are an optional way to organize content within Hugo.'
date: '2022-03-24'
aliases:
  - hugo-page-bundles
author: 'Hugo Authors'
resources:
- alt: A building
  src: building.png
---

[Page bundles](https://gohugo.io/content-management/page-bundles/) are an optional way to [organize page resources](https://gohugo.io/content-management/page-resources/) within Hugo.

With page bundles, resources for a page or section, like images or attached files, live in the same directory as the content itself rather than in your `static` directory. Page resources in a bundle are only available to the page with which they are bundled, but can be [managed directly from the page's front matter](https://gohugo.io/content-management/page-resources/#page-resources-metadata).

Hugo Clarity supports the use of [leaf bundles](https://gohugo.io/content-management/page-bundles/#leaf-bundles), which are any directories within the `content` directory that contain an `index.md` file. Hugo's documentation gives this example:

```text
content
├── about
│   ├── index.md
├── posts
│   ├── my-post
│   │   ├── content1.md
│   │   ├── content2.md
│   │   ├── image1.jpg
│   │   ├── image2.png
│   │   └── index.md
│   └── my-other-post
│       └── index.md
│
└── another-section
    ├── ..
    └── not-a-leaf-bundle
        ├── ..
        └── another-leaf-bundle
            └── index.md
```

<blockquote>

In the above example `content` directory, there are four leaf
bundles:

**about**: This leaf bundle is at the root level (directly under
    `content` directory) and has only the `index.md`.

***my-post***: This leaf bundle has the `index.md`, two other content
    Markdown files and two image files. **image1** is a page resource of `my-post`
    and only available in `my-post/index.md` resources. **image2** is a page resource of `my-post`
    and only available in `my-post/index.md` resources.

**my-other-post**: This leaf bundle has only the `index.md`.

**another-leaf-bundle**: This leaf bundle is nested under couple of
    directories. This bundle also has only the `index.md`.

_The hierarchy depth at which a leaf bundle is created does not matter,
as long as it is not inside another **leaf** bundle._
</blockquote>

The image below is part of the bundle of this page, and is located at `content/bundle/building.png`. Because it's within this page's bundle, the markup for the image only has to specify the image's filename.

![A building](building.png)
