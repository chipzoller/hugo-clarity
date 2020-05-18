# hugo-clarity

A theme for Hugo based on VMware Clarity

![Clarity Hugo Theme](https://github.com/chipzoller/hugo-clarity/blob/master/images/screenshot.png)

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

They ought to of a height: width ratio of `2:1`. They will be specified using a frontmatter variable as follows

```yaml
...
thumbnail: "/images/2020-04/capv-overview/featured.jpg"
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
