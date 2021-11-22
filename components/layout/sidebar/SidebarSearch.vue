<template>
  <div class="card sidebar">
    <div class="sidebar-search">
      <!-- <h2 class="sidebar-search-title">探す</h2> -->
      <div
        v-for="(category, index) in categories"
        :key="index"
        class="sidebar-search-list"
      >
        <!-- 親カテゴリー -->
        <div
          :class="{ 'toggle-on': category.toggleOn }"
          class="
            cate-ttl
            w-full
            relative
            inline-flex
            justify-between
            items-center
          "
          @click="category.toggleOn = !category.toggleOn"
        >
          <a href="#" class="title">
            {{ category.name }}
          </a>
          <div
            v-if="category.subcategories.length != 0"
            class="w-full relative flex justify-end"
          >
            <chevron-right-icon
              size="1x"
              class="arrow flex-shrink-0"
            ></chevron-right-icon>
          </div>
        </div>

        <!-- 子カテゴリー -->
        <ul
          v-for="subcategory in category.subcategories"
          :key="subcategory"
          :class="{ show: category.toggleOn }"
          class="cate-items"
        >
          <li>
            <re-checkbox>
              <template #input>
                <input v-model="checkbox" type="checkbox" />
              </template>
              <template #label>
                {{ subcategory }}
              </template>
            </re-checkbox>
          </li>
        </ul>
      </div>
    </div>

    <div class="sidebar-search-btn">
      <re-button
        class="re-button re-button-small no-shadow"
        :class="isDisabled ? 'no-shadow' : ''"
      >
        <button
          type="submit"
          :class="
            isDisabled
              ? 're-button-disabled no-shadow'
              : 're-button-primary-border'
          "
          :disabled="isDisabled"
          @click="isDisabled = !isDisabled"
        >
          <!-- Search -->
          検索する
        </button>
      </re-button>
    </div>
  </div>
</template>

<script>
//Icons
// atoms
import ReCheckbox from '@/components/atoms/ReCheckbox'
import ReButton from '@/components/atoms/ReButton'

export default {
  components: {
    ReCheckbox,
    ReButton,
  },
  data() {
    return {
      checkbox: '',
      isDisabled: false,
      categories: [
        {
          name: '教材タイプ',
          subcategories: ['チュートリアル型', '講義型', 'その他'],
          toggleOn: true,
        },
        {
          name: '評価',
          subcategories: ['4.5以上', '4.0以上', '3.5以上'],
          toggleOn: true,
        },
        {
          name: '値段',
          subcategories: ['無料', '2,500円', '5,000円', '7,500円', '10,000円'],
          toggleOn: true,
        },
        {
          name: 'Topics',
          subcategories: [
            'Javascript',
            'React',
            'Vue.js',
            'Laravel',
            'Ruby',
            'AWS',
            'Python',
            'HTML',
            'CSS',
          ],
          toggleOn: true,
        },
        {
          name: '難易度',
          subcategories: ['初級', '中級', '上級', '特級'],
          toggleOn: true,
        },
        {
          name: '言語',
          subcategories: ['英語', '日本語'],
          toggleOn: true,
        },
        {
          name: '特徴',
          subcategories: [
            'デモページ有り',
            'サブスク対象教材',
            'Mac',
            'Windows',
          ],
          toggleOn: true,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.sidebar {
  @apply flex flex-col;
}
.sidebar-search {
  @apply relative overflow-y-auto;
  @screen lg {
    // max-height: calc(100vh - 168px);
  }
  // &-title {
  //   @apply text-xl font-bold;
  //   color: #aaa;
  // }
  &-btn {
    @apply sticky bottom-0 mt-6;
  }
}
.cate-ttl {
  padding: 8px;
  margin-bottom: 3.5px;
  transition: all 0.2s ease;
  > a {
    transition: inherit;
    max-width: calc(100% - 14px);
  }
  .arrow {
    transition: all 0.2s ease-out;
    transform: translateX(0) rotate(90deg);
  }

  &:hover {
    @apply cursor-pointer;
    background: #f0f2f6;
    border-radius: 6px;
  }
  &.toggle-on {
    border-radius: 6px;
    .arrow {
      transform: rotate(270deg);
    }
  }
}
.cate-items {
  @apply duration-200 opacity-0 max-h-0;
  &.show {
    opacity: 1;
    max-height: 100vh;
  }
  > li {
    @apply duration-200;
    &:hover {
      @apply cursor-pointer;
      transform: translateX(5px);
      background: #f0f2f6;
      border-radius: 6px;
    }
    .feather.feather-circle {
      margin-top: 8px;
    }
  }
}
.title {
  @apply font-bold text-base flex-shrink-0;
  // color: var(--aaa);
}
</style>
