# UTILS

## Batch Bold

- `Description`: This regular expression will **bold** all the linked items.
- `Source`:

  ```
  -\s\[([^\]\[\*]*)\]
  - [**$1**]
  ```

- `Example`:

  - `Input`:

  ```markdown
  - [a](...)
  - [b](...)
  ```

  - `Output`:

  ```markdown
  - [**a**](...)
  - [**b**](...)
  ```


## Batch Transform

- `Description`: This regular expression will transform all the linked items to the awesome style.
- `Source`:

  ```
  -\s\[(\*\*)?([^\]\[]*)(\*\*)?\]
  - **$2** | [Github]
  ```

- `Example`:

  - `Input`:

  ```markdown
  - [a](...)
  ```

  - `Output`:

  ```markdown
  - **a** | [Github](https://github.com/Tencent/tmt-workflow)
  ```


## Batch Italic

- `Description`: This regular expression will **italic** all the non-H1 header texts.
- `Source`:

  ```
  (#{2,}\s)(.*)
  $1_$2_
  ```

- `Example`:

  - `Input`:

  ```markdown
  # a
  ## b
  ### c
  ```

  - `Output`:

  ```markdown
  # a
  ## _b_
  ### _c_
  ```

