# Kenburns

Sass mixin for Ken Burns effect background images

http://jxnblk.com/kenburns

## Getting Started

```bash
npm install kenburns-css
```

```bash
bower install kenburns-css
```

```scss
@import 'kenburns-css/scss/mixin';

$options: (
  name: hubble,
  duration: 48s,
  distance: 12.5%,
  images: (
    url(images/01.jpg),
    url(images/02.jpg),
    url(images/03.jpg),
    url(images/04.jpg),
    url(images/05.jpg)
  )
)

.bg-hubble {
  @include kenburns($options);
}

@include kenburns-keyframes($options);
```

## Disclaimer

Be sure to consider performance when using this mixin.

- This mixin creates a lot of CSS
- You should *not* include styles created with this mixin on pages that do not need it. 
- Optimize all images before using in production.

MIT License

