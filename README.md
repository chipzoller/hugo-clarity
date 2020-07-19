# Hugo Clarity

A theme for Hugo based on VMware's open-source [Clarity Design System](https://clarity.design/) featuring rich code support, dark/light mode, mobile support, and much more. See [a live demo at __neonmirrors.net__](https://festive-agnesi-58e7e4.netlify.app/).

![Clarity Hugo Theme](https://github.com/chipzoller/hugo-clarity/blob/master/images/screenshot.png)

## Preview

| Light Mode | Dark Mode |
|---| --- |
| ![Clarity Hugo Theme](https://github.com/chipzoller/hugo-clarity/blob/master/images/screenshot.png) | ![Clarity Hugo Theme](https://github.com/chipzoller/hugo-clarity/blob/master/images/screenshot-darkmode.png) |

## Features

* Blog
* Deeplinks
* Native Image Lazy Loading
* Customizable (see config)
* Dark Mode (with UI controls for user preference setting)
* Flexible image configuration
* Logo alignment
* Mobile support with configurable menu alignment
* Syntax Highlighting
* Rich code block functions including:
    1. Copy to clipboard
    2. Toggle line wrap (dynamic)
    3. Toggle line numbers
    4. Language label
    5. Toggle block expansion/contraction (dynamic)

    To put it all in context, here is a preview showing all functionality.

    ![](./images/syntax-block.gif)

## Prerequisites

Firstly, ensure you have installed the [extended version of Hugo](https://github.com/gohugoio/hugo/releases). See installation steps from [Hugo's official docs](https://gohugo.io/getting-started/installing/). 

## Getting up and running

There are at least two ways of quickly getting started with Hugo and the VMware Clarity theme:

### Option 1 (recommended)

Generate a new Hugo site and add this theme as a Git submodule inside your themes folder:
  
```
$ hugo new site yourSiteName
$ cd yourSiteName
$ git init
$ git submodule add https://github.com/chipzoller/hugo-clarity themes/hugo-clarity
$ cp -a themes/hugo-clarity/exampleSite/ .
```

Uncomment this line from the `config.toml` file

```
themesDir = "../." # Uncomment if your site files are at the root level
```

Then run

```
hugo server
```

Hurray!

### Option 2 (Great for testing quickly)

You can run your site directly from the `exampleSite`. To do so, use the following commands:

```
$ git clone https://github.com/chipzoller/hugo-clarity
$ cd hugo-clarity/exampleSite/
$ hugo server
```

> Although, option 2 is great for quick testing, it is somewhat problematic when you want to update your theme. You would need to be careful not to overwrite your changes.

Once set, jump over to the `config.toml` file and start [configuring](#configuration) your site.

## Configuration

This section will only cover settings that are unique to this theme. If something is not covered here (or elsewhere in this file), there's a good chance it is covered in [this Hugo docs page](https://gohugo.io/getting-started/configuration/#configuration-file).

### Global Settings

These options set global values that some pages or all pages in the site use by default.

| variable | setable on page | overidable |
|:---- | ---- | ---- |
| twitter | N/A | N/A |
| author | N/A | N/A |
| introDescription | N/A | N/A |
| numberOfTagsShownPerArticle | N/A | N/A |
| fallBackOgImage | yes | N/A |

### Page level Settings

These options can be set from a page [frontmatter](https://gohugo.io/content-management/front-matter#readout) or via [archetypes](https://gohugo.io/content-management/archetypes/#readout)

## Modify Menu

To add, remove, or reorganize top menu links, [edit this yaml file](https://github.com/chipzoller/hugo-clarity/blob/master/exampleSite/data/menu.yaml)

## Edit social profile links

[Edit this yaml file](https://github.com/chipzoller/hugo-clarity/blob/master/exampleSite/data/social.yaml)

## Specify blog directory

Check the `config.toml` file

```
[params]
...
mainSections = ["posts", "docs", "blogs"]
...
```

For more info, checkout [Hugo docs recommendation](details  https://gohugo.io/functions/where/#mainsections)

## Images
### Inline Images

To make a blog image inline, append `:inline` to its alt text.

#### Example:

```markdown
<!-- some image without alt text -->
![:inline](someImageUrl)

<!-- some image with alt text -->

![some alt text:inline](someOtherImageUrl)
```
### Float Images to the left

To make a blog image inline, append `:left` to its alt text.

#### Example:

```markdown
<!-- some image without alt text -->
![:left](someImageUrl)

<!-- some image with alt text -->

![some alt text:left](someOtherImageUrl)
```

### Article thumbnail image

Blog articles can specify a thumbnail image which will be displayed to the left of the card on the home page. Thumbnails should be square (height:width ratio of `1:1`). They will be specified using a frontmatter variable as follows:

```yaml
...
thumbnail: "images/2020-04/capv-overview/featured.jpg"
...
```

The thumbnail image will take precedence on opengraph share tags if the [shareImage](#share-image) parameter is not specified.

### Article featured image

Each article can specify an image that appears at the top of the content. When sharing the blog article on social media, if a thumnail is not specified, the featured image will be used as a fallback on opengraph share tags.

```yaml
...
featureImage: "images/2020-04/capv-overview/featured.jpg"
...
```

### Share Image

Sometimes, you want to explicitly set the image that will be used in the preview when you share an article on social media. You can do so in your front matter.

```yaml
...
shareImage = "images/theImageToBeUsedOnShare.png"
...
```

### Align Logo

You can align your site's logo either to the left or in the center.

```yaml
...
centerLogo = true # Change to false to align left
...
```

## Code
### Limit code block height

You can globally control the number of lines which are displayed by default for your code blocks. Code which has the number of lines exceed this value will dynamically cause two code block expansion buttons to appear, allowing the user to expand to full length and contract. This is useful when sharing code or scripts with tens or hundreds of lines where you wish to control how many are displayed. Under params in `config.toml` file, add a value as follows:

```yaml
[params]
...
codeMaxLines = 10 # Maximum number of lines to be shown by default across all articles.
...
```

> If the value already exists, change it to the desired number. This will apply globally.

If you need more granular control, this parameter can be overridden at the blog article level. Add the same value to your article frontmatter as follows:

```yaml
# 
...
codeMaxLines = 15 # Maximum number of lines to be shown in code blocks in this blog post.
...
```

If `codeMaxLines` is specified both in `config.toml` and in the article frontmatter, the value specified in the article frontmatter will apply to the given article. In the above example, the global default is `10` and yet the article value is `15` so code blocks in this article will auto-collapse after 15 lines.