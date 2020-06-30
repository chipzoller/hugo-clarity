# Hugo Clarity

A theme for Hugo based on VMware Clarity

![Clarity Hugo Theme](https://github.com/chipzoller/hugo-clarity/blob/master/images/screenshot.png)

## Prerequisites

Firstly, ensure you have installed the [extended version of hugo](https://github.com/gohugoio/hugo/releases). See installation steps from [Hugo's official docs](https://gohugo.io/getting-started/installing/). 

## Getting up and running

There are at least 2 ways of going about it

1. ### Option 1
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

2. ### Option 2

    If you think you want to go with the traditional, you can run your site directly from the `exampleSite`. To do so, use the following commands:
    
    ```
    $ git clone https://github.com/chipzoller/hugo-clarity
    $ cd hugo-clarity/exampleSite/
    $ hugo server --themesDir ../..
    ```

Once set, jump over to the `config.toml` file, and start customizing your site.

## Modify Menu

To add, remove or reorganize top menu links, [edit this yaml file](https://github.com/chipzoller/hugo-clarity/blob/master/exampleSite/data/menu.yaml)

## Edit social profile links

[Edit this yaml file](https://github.com/chipzoller/hugo-clarity/blob/master/exampleSite/data/social.yaml)

## Specify blog directory

Check the `config.toml` file

```
[params]
...
blogDir = "blog_directory"
...
```

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
thumbnail: "/images/2020-04/capv-overview/featured.jpg"
...
```

This will take precedence on opengraph share tags if the [shareImage](#share-image) below is not specified

### Article featured image

If a thumnail is not specified, the featured Image will be used as a fallback on opengraph share tags.

```yaml
...
featureImage: "/images/2020-04/capv-overview/featured.jpg"
...
```

### Share Image

Sometimes, you want to explicitly set the image that will be used in the preview when you share an article on social media. You can do so in your fron matter.

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
