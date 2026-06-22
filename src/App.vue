<script setup>
import { ref } from 'vue'
const submitResume = async (e) => {
  const form = e.target

  const fileInput = document.getElementById('resumeFile')
  const file = fileInput.files[0]

  if (!file) {
    alert('请选择PDF简历')
    return
  }

  if (file.type !== 'application/pdf') {
    alert('只能上传PDF文件')
    return
  }

  if (file.size > 10 * 1024 * 1024) {
    alert('PDF不能超过10MB')
    return
  }

  const formData = new FormData()

  formData.append(
    'username',
    form.username.value
  )

  formData.append(
    'useremail',
    form.useremail.value
  )

  formData.append(
    'resume',
    file
  )

  try {

    const response = await fetch('https://quman-websitc-production.up.railway.app/api/resume', {
  method: 'POST',
  body: formData
})

    if (!response.ok) {
      throw new Error('服务器错误')
    }

    const result = await response.json()

    if (result.success) {

      alert('简历投递成功')

      form.reset()

    } else {

      alert(
        result.message || '投递失败'
      )

    }

  } catch (err) {

    console.error(err)

    alert(
      '无法连接简历服务器'
    )

  }
}

const navOpen = ref(false)

const navItems = [
  { id: 'home', label: '首页' },
  { id: 'about', label: '关于我们' },
  { id: 'services', label: '业务服务' },
  { id: 'cases', label: '作品案例' },
  { id: 'team', label: '团建风采' },
  { id: 'jobs', label: '招贤纳士' },
  { id: 'contact', label: '联系我们' }
]

const aboutCards = [
  {
    icon: '🎨',
    title: '创意先行',
    desc: '以艺术审美驱动内容创新，打造具有辨识度的二次元内容体验'
  },
  {
    icon: '🤖',
    title: 'AI赋能',
    desc: '融合前沿AI技术，提升漫画、插画、IP内容的创作效率与表现质量'
  },
  {
    icon: '🌟',
    title: '年轻态度',
    desc: '深耕Z世代文化，用年轻化语言讲述更有传播力的内容故事'
  },
  {
    icon: '💎',
    title: '品质至上',
    desc: '坚持高标准内容生产，追求每一帧画面与每一次表达的完整呈现'
  }
]

const services = [
  {
    color: 'blue',
    title: 'AI短剧制作',
    desc: '结合AI技术与传统动画工艺，创作高质量原创漫剧内容',
    tags: ['剧本策划', 'AI辅助绘制', '动态分镜', '后期制作']
  },
  {
    color: 'purple',
    title: 'AI原创IP开发',
    desc: '从角色设定到世界观构建，打造具有商业价值的原创IP',
    tags: ['角色设计', 'IP孵化', '衍生品开发', '商业授权']
  },
  {
    color: 'pink',
    title: '视觉插画设计',
    desc: '提供角色立绘、场景概念、商业海报等二次元视觉设计服务',
    tags: ['角色立绘', '场景设计', 'KV海报', '品牌视觉']
  },
  {
    color: 'cyan',
    title: '内容运营服务',
    desc: '围绕短视频、社媒平台和社区传播，提供内容策划与运营支持',
    tags: ['账号运营', '短视频内容', '社群传播', '活动策划']
  }
]

const caseCards = [
  {
    category: '原创IP',
    title: '《星辰物语》AI漫剧',
    desc: '科幻题材AI漫剧，全网播放量突破5000万',
    image: '/images/case-1.jpg'
  },
  {
    category: '商业合作',
    title: '品牌虚拟代言人',
    desc: '为知名品牌打造二次元虚拟形象',
    image: '/images/case-2.jpg'
  }
]

const teamCards = [
  {
    title: '创意工作坊',
    date: '2026.04',
    image: '/images/team-1.jpg'
  },
  {
    title: '年度团建',
    date: '2026.03',
    image: '/images/team-2.jpg'
  },
  {
    title: '技术分享会',
    date: '2026.02',
    image: '/images/team-3.jpg'
  }
]

const jobs = [
  {
    title: 'AI短剧导演',
    department: '内容制作部',
    type: '全职',
    location: '湖北鄂州 / 重庆',
    requirements: ['3年以上动画或漫画创作经验', '熟悉AI辅助创作工具', '优秀的美术审美与叙事能力']
  },
  {
    title: 'AI插画师',
    department: '视觉设计部',
    type: '全职',
    location: '湖北鄂州 / 重庆',
    requirements: ['扎实的手绘基础与数字绘画技能', '熟练使用PS / SAI等绘图软件', '热爱AI创作']
  },
  {
    title: 'AI算法工程师',
    department: '技术研发部',
    type: '全职',
    location: '湖北鄂州 / 重庆',
    requirements: ['熟悉深度学习与生成式AI模型', '具备图像生成或视频生成项目经验', '有较强的工程落地能力']
  },
  {
    title: '内容运营',
    department: '市场运营部',
    type: '全职 / 实习',
    location: '湖北鄂州 / 重庆',
    requirements: ['熟悉B站、小红书、抖音等内容平台', '具备内容策划与数据分析能力', '对年轻文化有敏锐洞察']
  }
]

const contactItems = [
  {
    icon: '📍',
    title: '公司地址',
    desc: '湖北省鄂州市临空经济区鄂东大道118号空港科创产业园2楼208号'
  },
  {
    icon: '✉️',
    title: '电子邮箱',
    desc: '3419055459@qq.com'
  },
  {
    icon: '📞',
    title: '联系电话',
    desc: '18871771067'
  }
]

const heroImageStyle = {
  backgroundImage:
    'linear-gradient(135deg, rgba(124, 131, 246, 0.18), rgba(192, 132, 252, 0.12)), url("/images/hero.jpg")'
}

function scrollToSection(id) {
  navOpen.value = false
  const target = document.getElementById(id)
  if (!target) return

  target.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })

  history.replaceState(null, '', `#${id}`)
}


</script>

<template>
  <div class="site-page">
    <header class="site-header">
      <div class="container nav-wrap">
        <a class="brand" href="#home" @click.prevent="scrollToSection('home')">
          <span class=""><img src="./assets/Logo.png" style="width: 107px; height: 73px"></span>
          <span class="brand-name">趣漫科技</span>
        </a>

        <button class="nav-toggle" :class="{ active: navOpen }" type="button" aria-label="打开导航菜单"
          @click="navOpen = !navOpen">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav class="nav-menu" :class="{ open: navOpen }">
          <a v-for="item in navItems" :key="item.id" :href="`#${item.id}`" @click.prevent="scrollToSection(item.id)">
            {{ item.label }}
          </a>
        </nav>
      </div>
    </header>

    <main>
      <!-- 首页 -->
      <section id="home" class="page-section hero-section">
        <div class="container hero-grid">
          <div class="hero-content">
            <div class="section-badge"> 文创科技</div>
            <h1>
              创造无限可能<br />
              漫趣世界的科技先锋
            </h1>
            <p>
              专注于AI创作，用前沿技术赋能创意表达，
              打造年轻化、高品质的数字内容生态。
            </p>

            <div class="hero-actions">
              <a href="#contact" class="btn btn-primary" @click.prevent="scrollToSection('contact')">
                立即咨询
              </a>
              <a href="#cases" class="btn btn-ghost" @click.prevent="scrollToSection('cases')">
                查看案例
              </a>
            </div>
          </div>

          <div class="hero-visual" :style="heroImageStyle">
            <div class="image-note">素材预留：public/images/hero.jpg</div>
          </div>
        </div>
      </section>

      <!-- 关于我们 -->
      <section id="about" class="page-section">
        <div class="container">
          <div class="section-head">
            <div class="section-badge">About Us</div>
            <h2>关于我们</h2>
            <p>我们是一支充满活力的创意科技团队，致力于将文化创意与前沿技术深度融合。</p>
          </div>

          <div class="about-grid">
            <div v-for="item in aboutCards" :key="item.title" class="about-card">
              <div class="about-icon">{{ item.icon }}</div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 业务服务 -->
      <section id="services" class="page-section section-soft">
        <div class="container">
          <div class="section-head">
            <div class="section-badge">Our Services</div>
            <h2>业务服务</h2>
            <p>专注于AI创作领域，提供从创意到落地的全链路服务。</p>
          </div>

          <div class="service-grid">
            <div v-for="item in services" :key="item.title" class="service-card" :class="`service-${item.color}`">
              <div class="service-icon"></div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.desc }}</p>
              <div class="tag-list">
                <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 作品案例 -->
      <section id="cases" class="page-section">
        <div class="container">
          <div class="section-head">
            <h2>作品案例</h2>
            <p>精选部分代表作品，见证我们的创意与专业。</p>
          </div>

          <div class="case-grid">
            <article v-for="item in caseCards" :key="item.title" class="case-card">
              <div class="case-image"
                :style="{ backgroundImage: `linear-gradient(135deg, rgba(124,131,246,.08), rgba(192,132,252,.08)), url(${item.image})` }">
                <span>{{ item.category }}</span>
                <em>素材预留：{{ item.image }}</em>
              </div>
              <div class="case-content">
                <h3>{{ item.title }}</h3>
                <p>{{ item.desc }}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- 团建风采 -->
      <section id="team" class="page-section section-soft">
        <div class="container">
          <div class="section-head">
            <h2>团建风采</h2>
            <p>活力团队，快乐工作，用心生活。</p>
          </div>

          <div class="team-grid">
            <article v-for="item in teamCards" :key="item.title" class="team-card">
              <div class="team-image"
                :style="{ backgroundImage: `linear-gradient(135deg, rgba(124,131,246,.06), rgba(192,132,252,.06)), url(${item.image})` }">
                <em>素材预留：{{ item.image }}</em>
              </div>
              <div class="team-content">
                <h3>{{ item.title }}</h3>
                <span>{{ item.date }}</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- 招贤纳士 -->
      <section id="jobs" class="page-section">
        <div class="container">
          <div class="section-head">
            <div class="section-badge">Join Us</div>
            <h2>招贤纳士</h2>
            <p>寻找热爱创作、拥抱变化的你，一起创造漫趣世界的无限可能。</p>
          </div>

          <div class="job-grid">
            <article v-for="item in jobs" :key="item.title" class="job-card">
              <h3>{{ item.title }}</h3>
              <div class="job-tags">
                <span>{{ item.department }}</span>
                <span>{{ item.type }}</span>
              </div>
              <p class="job-location">📍 {{ item.location }}</p>
              <ul>
                <li v-for="req in item.requirements" :key="req">{{ req }}</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <!-- 联系我们 -->
      <section id="contact" class="page-section section-soft contact-section">
        <div class="container">
          <div class="section-head">
            <div class="section-badge">Contact Us</div>
            <h2>联系我们</h2>
            <p>欢迎咨询合作事宜，我们期待与您共创精彩。</p>
          </div>

          <div class="contact-grid">
            <div class="contact-info">
              <div v-for="item in contactItems" :key="item.title" class="contact-item">
                <div class="contact-icon">{{ item.icon }}</div>
                <div>
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.desc }}</p>
                </div>
              </div>

              <!-- <div class="social-box">
                <h3>关注我们</h3>
                <div class="social-list">
                  <span>📱</span>
                  <span>💬</span>
                  <span>📺</span>
                </div>
              </div> -->
            </div>

       <form class="contact-form" @submit.prevent="submitResume">
  <h3>简历投递</h3>

<input
type="text"
placeholder="您的姓名"
name="username"
required

>

<input
type="email"
placeholder="您的联系邮箱"
name="useremail"
required

>

  <div class="upload-box">
<input
  type="file"
  accept="application/pdf"
  name="resume"
  id="resumeFile"
  required
>

```
<label for="resumeFile">
  点击上传PDF简历（仅支持PDF，10MB以内）
</label>
```

  </div>

<button
class="btn btn-primary"
type="submit"

>

```
投递简历
```

  </button>
</form>

          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container footer-inner">
        <p>© 2026 湖北省趣漫科技有限公司 Manqu Technology. All Rights Reserved.</p>
      </div>
    </footer>
  </div>
</template>
