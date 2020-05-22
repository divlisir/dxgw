<template>
  <div class="page-home">
    <div class="header">
      <div class="logo">
        <img src="../../assets/icon/logo.png" alt="logo" />
      </div>
      <div class="search_a">
        <a href="#"><img src="../../assets/icon/fangda.png"></a>
        搜索商品，输入关键字搜索
      </div>
    </div>
    <div class="lunbo">
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>
<style lang="scss" acoped>
.page-home {
  display: flex;
  height: 100%;
  flex-direction:column ;
}

.header {
  background-color: #fff;
  display:flex;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  box-sizing: border-box;
}
.search_a{
  flex: 1;
  border-radius: 40px;
  border:1px solid #fff;
  background:rgb(243,239,236);
  font-size: 30px;
  text-align:center;
  line-height:70px;
  margin: 12px 14px 0 0;
  color:rgb(179,176,175);
  height: 80px;
  a{
    img{
       width:40px;
      height: 40px;
      vertical-align: middle;
    }
  }
}
.logo{
  img{
     width:260px;
    height: 100px;
  }
  margin: 14px 14px 0 14px;
}
.lunbo{
  width: 100px;
  height: 100px;
  background: brown;
}
</style>
