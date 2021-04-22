<template>
  <ul>
    <li v-for="game in games" :key="game.path"><a :href="game.path">{{ game.name }}</a></li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      games: [
        {
          name: "华容道",
          path: "huarongdao",
        },
      ],
    };
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
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
  width: 375px;
  height: 547px;
  border-width: 0;
  display: block;
}
</style>