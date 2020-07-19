# Hugo Clarity

A theme for Hugo based on VMware Clarity, see [a robust demo on the __Neon Mirrors site__](https://festive-agnesi-58e7e4.netlify.app/).

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
* Syntax Highlighting.

    Besides basic syntax highlighting, this theme adds the following capabilities to your code snippets:

    1. Ability to copy code snippet to clipboard
    2. Toggle line wraps on and off
    3. Show and hide line numbers
    4. Show which programing language is used to write the code snippet
    5. Set a max number of lines to show. There's at least one UI controls to expand the codeblock to show all code line numbers

    To put it all in context, here is a preview

    ![](./images/syntax-block.gif)

## Prerequisites

Firstly, ensure you have installed the [extended version of hugo](https://github.com/gohugoio/hugo/releases). See installation steps from [Hugo's official docs](https://gohugo.io/getting-started/installing/). 

## Getting up and running

There are at least 2 ways of going about it

### Option 1 (recommended)

Generate a new hugo site and add this theme as a Git submodule inside your themes folder:
  
```
$ hugo new site yourSiteName
$ cd yourSiteName
$ git init
$ git submodule add https://github.com/chipzoller/hugo-clarity themes/hugo-clarity
$ cp -a themes/hugo-clarity/exampleSite/ .
```

Uncomment this line from the `config.toml` file

```
themesDir = "../." # uncomment if you site files are at the root level
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

Once set, jump over to the `config.toml` file, and start [configuring](#configuration) your site.

## Configuration

This section will only cover settings that are unique to this theme. If something is not covered here (or elsewhere in this file), there's a good chance it is covered in [this hugo docs page](https://gohugo.io/getting-started/configuration/#configuration-file)

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

To add, remove or reorganize top menu links, [edit this yaml file](https://github.com/chipzoller/hugo-clarity/blob/master/exampleSite/data/menu.yaml)

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

For more info, checkout [hugo docs recommendation](details  https://gohugo.io/functions/where/#mainsections)

## Manipulate Images
### Inline Images

To make an image inline, append `:inline` to its alt text.

#### Example:

```markdown
<!-- some image without alt text -->
![:inline](someImageUrl)

<!-- some image with alt text -->

![some alt text:inline](someOtherImageUrl)
```
### Float Images to the left

To make an image inline, append `:left` to its alt text.

#### Example:

```markdown
<!-- some image without alt text -->
![:left](someImageUrl)

<!-- some image with alt text -->

![some alt text:left](someOtherImageUrl)
```

### Article thumbnails

They ought to of a height: width ratio of `1:1`. They will be specified using a frontmatter variable as follows

```yaml
...
thumbnail: "images/2020-04/capv-overview/featured.jpg"
...
```

This will take precedence on opengraph share tags if the [shareImage](#share-image) below is not specified

### Article featured image

If a thumnail is not specified, the featured Image will be used as a fallback on opengraph share tags.

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

You can align your logo either to the left of the navbar or right at the center.

To center, 

```yaml
...
centerLogo = true # change to false to align left
...
```

### Limit how tall a codeblock can be

Under params in `config.toml` file, add a value as follows

```yaml
[params]
...
codeMaxLines = 7 #7 is a placeholder feel free to change it to your liking
...
```

> if the value already exists, change it edit it

If you need more granular control i.e pagewise-control, add a value on your article frontmatter as follows

```yaml
# 
...
codeMaxLines = 8 # 8 is a placeholder that overrides your default settings set from the previous snippet .feel free to change it to your liking
...
```
