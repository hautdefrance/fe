# Utils

This file provides some useful regular expressions for more enjoyable project maintenance 🛠.

## Batch Bold

- **Description**: This regular expression will **bold** all the link text.
- **Source**:

  ```
  -\s\[([^\]\[\*]*)\]
  - [**$1**]
  ```

- **Example**:

  - Input:

  ```markdown
  - [a](...)
  - [b](...)
  ```

  - Output:

  ```markdown
  - [**a**](...)
  - [**b**](...)
  ```


## Batch Transform

- **Description**: This regular expression will transform all the link item to the awesome style.
- **Source**:

  ```
  -\s\[(\*\*)?([^\]\[]*)(\*\*)?\]
  - **$2** | [Github]
  ```

- **Example**:

  - Input:

  ```markdown
  - [a](...)
  - [**b**](...) | ...
  ```

  - Output:

  ```markdown
  - **a** | [Github](...)
  - **b** | [Github](...) | ...
  ```


## Batch Italic

- **Description**: This regular expression will **italic** all the non-H1 header texts.
- **Source**:

  ```
  (#{2,}\s)(.*)
  $1_$2_
  ```

- **Example**:

  - Input:

  ```markdown
  # a
  ## b
  ### c
  ```

  - Output:

  ```markdown
  # a
  ## _b_
  ### _c_
  ```

