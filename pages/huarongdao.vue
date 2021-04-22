<template>
  <div class="container">
    <div class="content">
      <h1>华 容 道</h1>
      <div>
        <img id="code" src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https%3A//jianchengwang.github.io/vue-game/dist/huarongdao" />
        <p style="color: #666;">手机端扫码体验</p>
      </div>
      <h2>
        <span style="color: #f22;">解不出来了？</span>
        点击<span style="color: #0a0;">绿色方块</span>可以自动求解
      </h2>
      <div class="custom">
        <h2>你也可以
          <span style="color: #00a;">自定义布局</span>
          <a href="https://github.com/conwnet/huarongdao#自定义布局" target="_blank">(怎么做？)</a>
        </h2>
        <div>
          <input type="text" id="state" placeholder="自定义序列" maxlength="20" />
          <input type="button" value="自定义" onclick="changeState()" />
        </div>
      </div>
      <p class="tip">大多数布局来自
        <a href="https://zh.wikipedia.org/wiki/%E8%8F%AF%E5%AE%B9%E9%81%93_(%E9%81%8A%E6%88%B2)" target="_blank">维基百科</a>
      </p>
      <p class="tip">原项目地址：<a href="https://github.com/conwnet/huarongdao">https://github.com/conwnet/huarongdao</a></p>
    </div>
    <div id="game">
      <div id="demo">
        <div id="main">
          <Ground :unitSize="unitSize" style="position: absolute; top: 0; left: 0;" />
          <Board :unitSize="unitSize" :layout="layout" :style="{ position: 'absolute', top: unitSize * 0.8, left: unitSize * 0.5 }" />
          <div :style="{ top: `${(unitSize * 0.8 - 34) / 2}px`, left: `${(unitSize * 5 - 124) / 2}px`}" class="select-btn" @click="showLevel = true;">{{ title }}</div>
          <Level :unitSize="unitSize" :show="showLevel" :handleSelect="handleSelect" />
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Ground from "~/components/huarongdao/Ground.vue";
import Board from "~/components/huarongdao/Board.vue";
import Level from "~/components/huarongdao/Level.vue";

export default {
  head() {
    return {
      title: "Huarongdao",
    };
  },
  components: { Ground, Board, Level },
  data() {
    return {
      unitSize: 75,
      layout: "22222222222222222222",
      title: "选择关卡",
      showLevel: false,
    };
  },
  methods: {
    handleSelect(level) {
      this.layout = level.layout;
      this.title = level.title;
      this.showLevel = false;
    },
  },
  created() {
    if (process.browser) {
      location.hash &&
        (this.layout = location.hash.slice(1)) &&
        (this.title = "自定义");
      window.onresize = () => 50;
      window.onhashchange = () =>
        location.hash &&
        (this.layout = location.hash.slice(1)) &&
        (this.title = "自定义");
    }
  },
};
</script>

<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
  user-select: none;
}
.container {
  display: flex;
  background-color: #fffbe8;
}
.content {
  flex: 3;
  text-align: center;
}
.content h1 {
  color: #d64c28;
  font-size: 40px;
}
#code {
  height: 150px;
  width: 150px;
  margin: 0 auto;
  display: block;
}
.custom a {
  font-size: 16px;
  color: #f44;
  text-decoration: none;
}
.custom a:hover {
  color: #0a0;
}
.custom a:active {
  color: #f00;
}
.custom input {
  height: 25px;
}
.game {
  flex: 2;
}
.tip {
  color: #666;
}
.tip a {
  color: #00f;
  text-decoration: none;
}
#demo {
  margin: 20px auto;
  margin-right: 200px;
  width: 375px;
  height: 547px;
  border-width: 0;
  display: block;
}
#main {
  position: relative;
  // top: 0;
  // right: 0;
  // bottom: 0;
  // left: 0;

  .select-btn {
    position: absolute;
    background-color: #ccc;
    border: 2px solid #aaa;
    border-radius: 5px;
    min-width: 120px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;

    &:hover {
      background-color: #eee;
    }

    &:active {
      color: #09c;
    }
  }
}
</style>
