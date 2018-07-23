<template>
  <main class="container">

    <div class="blog-header" style="margin-top: 80px">
      <div class="container">
        <h1 class="blog-title">Project Documentation</h1>
        <p class="lead blog-description">An introduction of this website.</p>
      </div>
    </div>
    <div class="row">

      <div class="col-sm-8 blog-main">

        <div class="blog-post">
          <h2 class="blog-post-title">Front End</h2>
          <p class="blog-post-meta">June 26th, 2018 by
            <a href="#">Shuyang</a>
          </p>

          <p>项目前端使用Vue.js作为开发框架，使用Vue Cli作为脚手架开发单页web应用，UI根据功能划分为不同部分放在各个组件内实现</p>
          <hr>
          <p>UI被分成了不同模块，可视化部分的代码都在dataV中实现，在该组件中调用其他js文件中的函数完成数据的请求和展示。Api_test.js主要负责向服务端请求数据，其他js则主要实现可视化功能。</p>
          <blockquote>
          </blockquote>
          <p>后来又加入了description.vue组件作为说明文档部分的UI展示，也就是当前页面的内容实现。</p>
          <h2>代码实现过程</h2>
          <p>现在本机上安装Node，然后通过npm指令安装vue cli，完成后使用命令行创建vue cli项目，设置完参数后将自动创建文件夹，接下来就可以开始进行编程
          </p>
          <h3>目录结构</h3>
          <p>build目录下为项目build相关的文件和webpack依赖，用于完成项目的运行，同时也可以在这里添加一些全局引用。static中可以放入一些需要调用的静态资源，在这里放入了jquery
          的源码和一些图片。node_modules则是项目所需要的包，这个文件很大，因此在提交的代码中此文件夹为空，使用<code>npm install</code>命令可以安装这些包的依赖，因此没有提交这部分文件。</p>
          <p>src文件夹内是项目主要的代码，components内是Vue组件的代码，核心功能和html显示都在这里实现，每个Vue组件由三部分构成：</p>
          <ul>
            <li>template部分，该组件作用的范围，html格式</li>
            <li>script部分，组件核心的js代码，逻辑实现</li>
            <li>style部分，组件作用范围内的css样式</li>
          </ul>
          <p>assets文件夹内是动态引用的内容，包括js文件，图片和css样式等。其中数据的接口和可视化的图渲染的核心代码都在这里的js文件中实现，然后被Vue组件调用。</p>
          <h3>接口信息</h3>
          <p>接口均为POST类型，向服务端传送的数据类型均为x-www-form-urlencoded，主要使用了以下三个接口</p>
          <ul>
            <li>getData，<code>name_1,name_2,edge</code>：请求两个节点和要搜索的最大跳数，最基本的接口，同步请求</li>
            <li>getDataPart，<code>name_1,name_2,edge_1,edge_2</code>：最大跳数为5跳以上时，因为时间较长，会逐跳进行分布请求，异步请求</li>
            <li>getOneNodeData，<code>name_1,edge</code>：请求所有与该节点相邻的点和他们的关系，跳数为1</li>
          </ul>
          <h3>D3数据可视化</h3>
          <p>借助d3.js中的Force Directed Graph和Three.js的3D支持，使用从接口获得的数据，一共完成了3种类型的数据可视化：</p>
          <ol>
            <li>Traditional：最基本的D3 force directed graph，只具备展示功能。</li>
            <li>Neo4j Style：在基本图的基础上添加了点击节点显示该节点周围其它节点的功能。</li>
            <li>3D Style：借助Three.js构建3D引擎展示出3D效果的力导向图，增加了更多的交互体验。</li>
          </ol>
          <p>三种展示效果如下图所示，实际演示还有更多的交互式体验。</p>
          <img src="../assets/img/result_show.png" style="width: 100%"/>
        </div>
        <!-- /.blog-post -->

        <div class="blog-post">
          <h2 class="blog-post-title">Back End</h2>
          <p class="blog-post-meta">June 26th, 2018 by
            <a href="#">Shuyang</a>
          </p>

          <h4>Spring MVC</h4>
          <blockquote>
            <p>整个Query Server为前端提供了需要的对知识图谱的查询。Query Server 使用Spring MVC框架，数据查询使用Neo4j提供的Neo4j driver，
              原本想使用Spring data neo4j，但是Spring data neo4j不支持对path的查询，即不可以使用Cypher返回p，所以使用了Neo4j driver，可
              以直接使用cypher进行query，其中name的参数传递，使用run函数的参数传递，跳数使用字符串的拼接。
            </p>
          </blockquote>
          <h4>Guava Cache</h4>
          <p>除了查询之外，Query Server还使用了Cache，对于相同的查询，进行过一次后就会不再执行查询，直接返回查询的结果，使用的是Spring cache，
            具体实现使用的是guava cache。 Guava是一种基于开源的Java库，其中包含谷歌正在由他们很多项目使用的很多核心库，提供用于集合，缓存，支
            持原语，并发性，常见注解，字符串处理，I/O和验证的实用方法。
          </p>
          <h4>Cache的选择</h4>
          <p>虽然在cache实现上没有进行自己的实现，但是在cache上做了选择，因为跳数过高会导致查询过慢，所以前端会发出多次请求，比如1-4跳，4-4跳，
            因为cache的容量是有限的，所有起始跳数>1的都会被缓存，1-x的查询优先选择了跳数大于等于4的。

          </p>
        </div>
        <!-- /.blog-post -->

        <div class="blog-post">
          <h2 class="blog-post-title">Read Me</h2>
          <p class="blog-post-meta">June 26th, 2018 by
            <a href="#">Shuyang</a>
          </p>
          <h4>前端运行方式</h4>
          <p>使用控制台cd指令转到项目目录下，接着输入指令<code>npm install</code>等安装完包依赖后，输入指令<code>npm run dev</code>
          运行项目，进度完成后，打开浏览器localhost:8000即可看到页面</p>
          <h4>后端运行方式</h4>
          <p>目前项目的后端放在服务器115.159.34.252上，这里将本地的代码附上</p>
          <p>使用IDEA打开项目目录，使用pom.xml引用相关的包，然后打开Maven Project点击Plugins/Jetty/Jetty_run运行项目，
            项目会运行在localhost:8088/bbs上。因为大部分接口是POST类型，所以不能直接显示结果，需要使用Postman或其他应用发请求</p>
        </div>
        <!-- /.blog-post -->

        <nav class="blog-pagination">
          <a class="btn btn-outline-primary" href="#">Go to top</a>
        </nav>

      </div>
      <!-- /.blog-main -->

      <aside class="col-sm-3 ml-sm-auto blog-sidebar">
        <div class="sidebar-module sidebar-module-inset">
          <h4>Vue Structure</h4>
          <img src="../assets/img/structure.png" style="width: 100%"/>
        </div>
        <div class="sidebar-module">
          <h4>Source Code</h4>
          <ol class="list-unstyled">
            <li>
              <a href="https://github.com/Shine21497/BusinessIntelligenceProject">View GitHub</a>
            </li>
          </ol>
        </div>
      </aside>
      <!-- /.blog-sidebar -->

    </div>
    <!-- /.row -->
  </main>
  <!-- /.container -->
</template>

<script>
export default {
  name: 'description'
}
</script>

<style scoped>
  @media (min-width: 48em) {
    html {
      font-size: 18px;
    }
  }

  body {
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: #555;
  }

  h1,
  .h1,
  h2,
  .h2,
  h3,
  .h3,
  h4,
  .h4,
  h5,
  .h5,
  h6,
  .h6 {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 400;
    color: #333;
  }
  main{
    text-align: left;
  }

  /*
   * Override Bootstrap's default container.
   */

  .container {
    max-width: 60rem;
  }

  /*
   * Masthead for nav
   */

  .blog-masthead {
    margin-bottom: 3rem;
    background-color: #428bca;
    box-shadow: inset 0 -0.1rem 0.25rem rgba(0, 0, 0, 0.1);
  }

  /* Nav links */
  .nav-link {
    position: relative;
    padding: 1rem;
    font-weight: 500;
    color: #cdddeb;
  }
  .nav-link:hover,
  .nav-link:focus {
    color: #fff;
    background-color: transparent;
  }

  /* Active state gets a caret at the bottom */
  .nav-link.active {
    color: #fff;
  }
  .nav-link.active::after {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    margin-left: -0.3rem;
    vertical-align: middle;
    content: '';
    border-right: 0.3rem solid transparent;
    border-bottom: 0.3rem solid;
    border-left: 0.3rem solid transparent;
  }

  /*
   * Blog name and description
   */

  .blog-header {
    padding-bottom: 1.25rem;
    margin-bottom: 2rem;
    border-bottom: 0.05rem solid #eee;
  }
  .blog-title {
    margin-bottom: 0;
    font-size: 2rem;
    font-weight: 400;
  }
  .blog-description {
    font-size: 1.1rem;
    color: #999;
  }

  @media (min-width: 40em) {
    .blog-title {
      font-size: 3.5rem;
    }
  }

  /*
   * Main column and sidebar layout
   */

  /* Sidebar modules for boxing content */
  .sidebar-module {
    padding: 1rem;
  }
  .sidebar-module-inset {
    padding: 1rem;
    background-color: #f5f5f5;
    border-radius: 0.25rem;
  }
  .sidebar-module-inset p:last-child,
  .sidebar-module-inset ul:last-child,
  .sidebar-module-inset ol:last-child {
    margin-bottom: 0;
  }

  /* Pagination */
  .blog-pagination {
    margin-bottom: 4rem;
  }
  .blog-pagination > .btn {
    border-radius: 2rem;
  }

  /*
   * Blog posts
   */

  .blog-post {
    margin-bottom: 4rem;
  }
  .blog-post-title {
    margin-bottom: 0.25rem;
    font-size: 2.5rem;
  }
  .blog-post-meta {
    margin-bottom: 1.25rem;
    color: #999;
  }

  /*
   * Footer
   */

  .blog-footer {
    padding: 2.5rem 0;
    color: #999;
    text-align: center;
    background-color: #f9f9f9;
    border-top: 0.05rem solid #e5e5e5;
  }
  .blog-footer p:last-child {
    margin-bottom: 0;
  }
</style>
