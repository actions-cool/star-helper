# 🌟 star-helper

![](https://img.shields.io/github/workflow/status/actions-cool/star-helper/CI?style=flat-square)
[![](https://img.shields.io/badge/marketplace-star--helper-blueviolet?style=flat-square)](https://github.com/marketplace/actions/star-helper)
[![](https://img.shields.io/github/v/release/actions-cool/star-helper?style=flat-square&color=orange)](https://github.com/actions-cool/star-helper/releases)

A GitHub Action help you star or unstar a repository.

## 🌈 Preview

https://github.com/actions-cool/star-helper/blob/main/.github/workflows/star.yml

## 🚀 How to use?

```yml
name: Star Helper

on:
  schedule:
    - cron: '0 0 * * *'

jobs:
  star-helper:
    runs-on: ubuntu-latest
    steps:
      - uses: actions-cool/star-helper@v1.0.0
        with:
          token: ${{ secrets.STAR_TOKEN }}
          actions: 'unstar, star'
          repo: 'actions-cool/star-helper'
```

| Name | Desc | Type | Required |
| -- | -- | -- | -- |
| token | GitHub token. Cannot use default token. | string | ✔ |
| actions | The actions. Option `star` `unstar`. | string | ✔ |
| repo | The repository owner and name. | string | ✖ |

- `token`: Need to use personal authentication token
  1. https://github.com/settings/tokens/new
  2. Select `repo: Full control of private repositories`
  3. Add token to your Actions
  4. [Help you understand](https://github.com/actions-cool/This-repo-has-11-stars-7-forks#how-to-use-it-in-your-own-project)
- `repo`: If it is not filled in, it will read the current repository
- You can add this Action to any project. [How trigger](https://docs.github.com/en/actions/reference/events-that-trigger-workflows). Enjoy it

## ⚡ Feedback

You are very welcome to try it out and put forward your comments. You can use the following methods:

- Report bugs or consult with [Issue](https://github.com/actions-cool/star-helper/issues)
- Submit [Pull Request](https://github.com/actions-cool/star-helper/pulls) to improve the code of `star-helper`

也欢迎加入 钉钉交流群

![](https://github.com/actions-cool/resources/blob/main/dingding.jpeg?raw=true)

## Changelog

[CHANGELOG](./CHANGELOG.md)

## LICENSE

[MIT](./LICENSE)
