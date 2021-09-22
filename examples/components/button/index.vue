<template>
  <div id="button">
    <zy-button size="large"> 默认 </zy-button>
    <zy-button type="primary" size="small">主按钮</zy-button>
    <zy-button type="dashed" :disabled="true" size="mini">虚线按钮</zy-button>
    <zy-button type="danger" :disabled="true" :round="true"> 危险 </zy-button>
    <zy-button type="text">链接按钮</zy-button>
  </div>
</template>
