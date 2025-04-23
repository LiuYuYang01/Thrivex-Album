<script setup lang="ts">
import { ref } from 'vue'
import { Motion } from 'motion-v'

// 定义照片数据数组，包含图片信息
const photos: Photo[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=3840&q=100',
    title: '日本富士山',
    description: '日本标志性的富士山风景,白雪皑皑的山顶与蓝天相映成趣'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=3840&q=100',
    title: '日落时分',
    description: '夕阳西下的美丽景色,金色的阳光洒在大地上'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=3840&q=100',
    title: '山川湖泊',
    description: '壮丽的山川与平静的湖泊交相辉映,展现大自然的鬼斧神工'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=3840&q=100',
    title: '星空璀璨',
    description: '繁星点点的夜空,银河横跨天际,令人沉醉的夜景'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&auto=format&fit=crop&w=3840&q=100',
    title: '绿色山谷',
    description: '郁郁葱葱的山谷,清新的空气与翠绿的植被构成和谐画面'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-1.2.1&auto=format&fit=crop&w=3840&q=100',
    title: '京都古寺',
    description: '日本京都的传统寺庙,展现着东方古典建筑的独特魅力'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=3840&q=100',
    title: '城市夜景',
    description: '灯火通明的现代都市,霓虹闪烁的夜晚风景'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1504198322253-cfa87a0ff25f?ixlib=rb-1.2.1&auto=format&fit=crop&w=3840&q=100',
    title: '海边日落',
    description: '金色的夕阳映照在海面上,浪花轻轻拍打着沙滩'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=3840&q=100',
    title: '樱花季节',
    description: '粉色的樱花绽放,营造出浪漫唯美的春日氛围'
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=3840&q=100',
    title: '繁华都市',
    description: '现代化的城市景观,高楼大厦鳞次栉比'
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-1.2.1&auto=format&fit=crop&w=3840&q=100',
    title: '雪山之巅',
    description: '巍峨的雪山山峰,白雪皑皑,云雾缭绕'
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=3840&q=100',
    title: '森林小径',
    description: '幽静的森林小路,阳光透过树叶洒下斑驳的光影'
  },
  {
    id: 13,
    src: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=3840&q=100',
    title: '街头巷尾',
    description: '充满生活气息的街道,记录着城市的日常点滴'
  },
  {
    id: 14,
    src: 'https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&auto=format&fit=crop&w=3840&q=100',
    title: '晨光熹微',
    description: '清晨的第一缕阳光,唤醒沉睡的大地'
  },
  {
    id: 15,
    src: 'https://images.unsplash.com/photo-1504714146340-959ca07e1f38?ixlib=rb-1.2.1&auto=format&fit=crop&w=3840&q=100',
    title: '极光之夜',
    description: '绚丽的北极光在夜空中舞动,创造出梦幻般的景象'
  },
  {
    id: 16,
    src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=3840&q=100',
    title: '山水如画',
    description: '如诗如画的山水风景,展现大自然的壮美与和谐'
  }
];

// 当前查看的照片索引
const currentPhotoIndex = ref<number | null>(null)
// 控制模态框显示状态
const showModal = ref(false)
// 记录图片切换方向
const direction = ref<'left' | 'right'>('right')
// 添加图片加载状态
const isImageLoading = ref(false)

// 打开照片查看器
const openPhoto = async (index: number) => {
  currentPhotoIndex.value = index
  isImageLoading.value = true

  // 预加载图片
  const img = new Image()
  img.src = photos[index].src

  // 等待图片加载完成
  await new Promise((resolve) => {
    img.onload = () => {
      resolve(true)
    }
  })

  isImageLoading.value = false
  showModal.value = true
}

// 关闭照片查看器
const closeModal = () => {
  showModal.value = false
  currentPhotoIndex.value = null
}

// 查看下一张照片
const nextPhoto = () => {
  if (currentPhotoIndex.value !== null) {
    direction.value = 'right'
    currentPhotoIndex.value = (currentPhotoIndex.value + 1) % photos.length
  }
}

// 查看上一张照片
const prevPhoto = () => {
  if (currentPhotoIndex.value !== null) {
    direction.value = 'left'
    currentPhotoIndex.value = (currentPhotoIndex.value - 1 + photos.length) % photos.length
  }
}
</script>

<template>
  <!-- 主容器 -->
  <div class="container mx-auto px-4 py-8">
    <!-- 瀑布流布局 -->
    <div class="masonry-grid">
      <!-- 使用Motion组件为每张照片添加动画效果 -->
      <Motion v-for="(photo, index) in photos" :key="photo.id" :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }" :transition="{ duration: 0.5, delay: index * 0.1 }"
        class="masonry-item">
        <!-- 单个照片卡片容器 -->
        <div class="relative group overflow-hidden rounded-lg shadow-lg mb-6" @click="openPhoto(index)">
          <!-- 图片容器 -->
          <div class="w-full cursor-pointer">
            <img :src="photo.src" :alt="photo.title"
              class="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-110" />
          </div>

          <!-- 照片标题遮罩层 -->
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h3 class="text-white font-medium text-lg">{{ photo.title }}</h3>
          </div>
        </div>
      </Motion>
    </div>

    <!-- 照片查看模态框 -->
    <div v-if="showModal && currentPhotoIndex !== null"
      class="fixed inset-0 backdrop-blur-md bg-black/30 flex items-center justify-center z-50" @click="closeModal">
      <!-- 模态框内容动画 -->
      <Motion :initial="{ opacity: 0, scale: 0.8 }" :animate="{ opacity: 1, scale: 1 }"
        :exit="{ opacity: 0, scale: 0.8 }" :transition="{ duration: 0.3, ease: 'easeInOut' }"
        class="relative max-w-4xl w-full mx-4" @click.stop>
        <div class="relative rounded-2xl overflow-hidden">
          <!-- 加载状态 -->
          <div v-if="isImageLoading" class="absolute inset-0 flex items-center justify-center bg-black/50">
            <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          </div>

          <!-- 当前照片动画 -->
          <Motion :key="currentPhotoIndex" :initial="{
            opacity: 0,
            scale: 0.9
          }" :animate="{
            opacity: 1,
            scale: 1
          }" :exit="{
            opacity: 0,
            scale: 0.9
          }" :transition="{
            duration: 0.3,
            ease: 'easeInOut'
          }" class="relative">
            <img :src="photos[currentPhotoIndex].src" :alt="photos[currentPhotoIndex].title"
              class="w-full h-auto max-h-[80vh] rounded-2xl object-cover" />

            <!-- 左右导航按钮 -->
            <div
              class="flex justify-center items-center absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#fff3] hover:bg-black/50 backdrop-blur-md transition-colors duration-200 cursor-pointer"
              @click.stop="prevPhoto">
              <box-icon name='chevron-left' color='#ffffff' size="32px" />
            </div>

            <div
              class="flex justify-center items-center absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#fff3] hover:bg-black/10 backdrop-blur-md transition-colors duration-200 cursor-pointer"
              @click.stop="nextPhoto">
              <box-icon name='chevron-right' color='#ffffff' size="32px" />
            </div>

            <!-- 照片信息底部遮罩 -->
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <Motion :key="currentPhotoIndex" :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }"
                :transition="{ duration: 0.3, delay: 0.2 }">
                <h3 class="text-white text-2xl font-medium mb-2">{{ photos[currentPhotoIndex].title }}</h3>
                <p class="text-white/50 leading-relaxed mb-3">{{ photos[currentPhotoIndex].description }}</p>
                <div class="flex items-center space-x-2 text-gray-400">
                  <box-icon name='calendar' color='#99a1af' size="18px"></box-icon>
                  <p class="text-sm">{{ new Date().toLocaleDateString('zh-CN') }}</p>
                </div>
              </Motion>
            </div>
          </Motion>
        </div>
      </Motion>
    </div>
  </div>
</template>

<style scoped>
/* 瀑布流布局样式 */
.masonry-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1.5rem;
  grid-auto-rows: 10px;
}

.masonry-item {
  grid-row-end: span 30;
}

.masonry-item img {
  width: 100%;
  height: auto;
  display: block;
}

/* 响应式布局调整 */
@media (max-width: 640px) {
  .masonry-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}

@media (min-width: 1024px) {
  .masonry-grid {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }
}
</style>