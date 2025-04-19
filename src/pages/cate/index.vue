<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const cates: Photo[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: '日本富士山',
    name: '旅行日记'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: '日落时分',
    name: '生活点滴'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: '山川湖泊',
    name: '自然风光'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: '星空璀璨',
    name: '夜景'
  },
];

const handleClick = (name: string) => {
  router.push(`/photo?cate=${name}`)
}
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="cate in cates" :key="cate.id" class="relative group overflow-hidden rounded-lg shadow-lg"
        @click="handleClick(cate.name)">
        <!-- 图片容器 -->
        <div class="aspect-w-1 aspect-h-1 w-full cursor-pointer">
          <img :src="cate.src" :alt="cate.title"
            class="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110" />
        </div>

        <!-- 分类标签 -->
        <div class="absolute top-4 left-4 bg-black/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm">
          {{ cate.name }}
        </div>

        <!-- 标题遮罩 -->
        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 class="text-white font-medium text-lg">{{ cate.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.aspect-w-1 {
  position: relative;
  padding-bottom: 100%;
}

.aspect-w-1>img {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  object-fit: cover;
}
</style>