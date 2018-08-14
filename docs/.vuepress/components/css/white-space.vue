<template>
  <div class="css-white-space">
    <div>
      <h4>2.2.1 white-space: normal</h4>
      <ul>
        <li>
          <b>示例：</b>
          <div class="block block-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </div>
        </li>
        <li>
          <p><b>特点</b>：DOM 解析时忽略所有空白，超过部分会换行。</p>
        </li>
      </ul>
    </div>
    <div>
      <h4><b>2.2.2 white-space: nowrap;</b></h4>
      <ul>
        <li>
          <b>示例：</b>
          <div class="block block-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </div>
        </li>
        <li>
          <p><b>特点</b>：DOM 解析时忽略所有空白，超过部分不会换行。</p>
        </li>
      </ul>
    </div>
    <div>
      <h4><b>2.2.3 white-space: pre;</b></h4>
      <ul>
        <li>
          <b>示例：</b>
          <div class="block block-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </div>
        <li>
          <p><b>特点</b>：DOM 解析时保留所有缩进、换行和空格。和 <code>pre</code> 的工作机制相似。</p></li>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  .css-white-space {

  }

  .block {
    margin: 10px auto;
    width: 50%;
    height: 100px;
    overflow: hidden;
    background-color: #f9f9f9;
  }

  .block-1 {
    white-space: normal;
  }

  .block-2 {
    white-space: nowrap;
  }

  .block-3 {
    white-space: pre;
  }
</style>
