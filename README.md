![Bootstrap + SASS Theme Template](https://raw.githubusercontent.com/andrewdyer/public-assets/refs/heads/main/images/covers/bootstrap-sass-theme-template.png)

# Bootstrap + SASS Theme Template

A template for building consistent, token-driven themes using the Bootstrap framework and the Sass preprocessor, with a modular and scalable architecture for design systems.

## ⚖️ License

Licensed under the [MIT license](https://opensource.org/licenses/MIT) and is free for private or commercial projects.

## ✨ Introduction

This template provides a solid foundation for building theme-driven CSS using Bootstrap and Sass, designed to help you start quickly with a structured folder organization, token-based variables, and an automated build pipeline that outputs prefixed and minified CSS ready for production, allowing you to focus on creating and customizing themes without worrying about boilerplate setup.

## 🛠️ Features

This template includes a comprehensive toolset for building and maintaining consistent CSS themes:

- [Bootstrap](https://getbootstrap.com/) (vendored SCSS) providing a solid, consistent base and utility classes.
- [Sass](https://sass-lang.com/) for modular, maintainable, and token-driven stylesheets.
- [PostCSS](https://postcss.org/) with [Autoprefixer](https://github.com/postcss/autoprefixer) to automatically add vendor prefixes according to the configured [Browserslist](https://browsersl.ist/) targets.
- [Prettier](https://prettier.io/) for consistent code formatting across the codebase.
- [Stylelint](https://stylelint.io/) with [`stylelint-config-standard-scss`](https://github.com/stylelint-scss/stylelint-config-standard-scss) and [`stylelint-config-clean-order`](https://github.com/anton-rudeshko/stylelint-config-clean-order) for enforcing consistent SCSS conventions and property order.
- [Husky](https://typicode.github.io/husky/#/) and [lint-staged](https://github.com/okonet/lint-staged) for running linters and formatters on staged files before commits.
