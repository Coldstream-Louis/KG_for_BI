<template>
  <main>
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1" ></li>
      <li data-target="#myCarousel" data-slide-to="2" ></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="first-slide" src="../assets/img/aurora.jpeg" alt="First slide">
        <div class="container">
          <div class="carousel-caption text-left">
            <h1>数据可视化</h1>
            <p>通过力导向图展现出知识图谱中各个关键词的关系，将三元关系动态的展现出来，提供更好的交互体验</p>
            <p>
              <a class="btn btn-lg btn-primary" href="https://zh.wikipedia.org/wiki/Google%E7%9F%A5%E8%AF%86%E5%9B%BE%E8%B0%B1" role="button">查看维基百科</a>
            </p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img class="second-slide" src="../assets/img/universe.jpg" alt="Second slide">
        <div class="container">
          <div class="carousel-caption">
            <h1>更出色的展示效果</h1>
            <p>利用Three.js提供的引擎对2D平面的力导向图进行3D建模，更加惊艳的展示效果</p>
            <p>
              <a class="btn btn-lg btn-primary" href="https://threejs.org/" role="button">了解Three.js</a>
            </p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img class="third-slide" src="../assets/img/digital.jpg" alt="Third slide">
        <div class="container">
          <div class="carousel-caption text-right">
            <h1>对大数据的支持</h1>
            <p>利用缓存减少重复搜索时间，对千万量级的数据搜索缩短至秒级</p>
            <p>
              <a class="btn btn-lg btn-primary" href="https://github.com/google/guava/wiki/CachesExplained" role="button">了解Guava Cache</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

  <!-- Marketing messaging and featurettes
  ================================================== -->
  <!-- Wrap the rest of the page in another container to center all the content. -->

  <div class="container marketing">

    <!-- Three columns of text below the carousel -->
    <div class="row">
      <div class="col-lg-4">
        <img class="rounded-circle" src="../assets/img/Bootstrap.jpg" alt="Generic placeholder image"
             width="140" height="140">
        <h2>Bootstrap</h2>
        <p>UI使用Twitter风格的Bootstrap 4进行优化。利用Bootstrap Magic建立个性化的CSS文件，整合Bootstrap的原生代码，提供了丰富的动态效果和响应式布局来适配不同设备</p>
        <p>
          <button class="btn btn-secondary" href="#" v-on:click="goToDoc">View details &raquo;</button>
        </p>
      </div>
      <!-- /.col-lg-4 -->
      <div class="col-lg-4">
        <img class="rounded-circle" src="../assets/img/neo4j_logo.png" alt="Generic placeholder image"
             width="140" height="140">
        <h2>Neo4j</h2>
        <p>图数据库Neo4j，NoSQL的一种，与传统关系性数据库不同，使用图的形式存储数据，对于类似于知识图谱或人物关系图之类的数据更加直观方便，同时也为可视化展示提供了便利</p>
        <p>
          <button class="btn btn-secondary" href="#" v-on:click="goToDoc">View details &raquo;</button>
        </p>
      </div>
      <!-- /.col-lg-4 -->
      <div class="col-lg-4">
        <img class="rounded-circle" src="../assets/img/spring.png" alt="Generic placeholder image"
             width="140" height="140">
        <h2>Spring MVC</h2>
        <p>后端使用Spring MVC进行开发，由Neo4j Driver负责实现对服务器端数据库的操作，支持Cypher语句的查询操作（添加操作暂不支持），使开发更加轻量化</p>
        <p>
          <button class="btn btn-secondary" href="#" v-on:click="goToDoc">View details &raquo;</button>
        </p>
      </div>
      <!-- /.col-lg-4 -->
    </div>
    <!-- /.row -->

    <!-- START THE FEATURETTES -->

    <hr class="featurette-divider">

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">
          Extract, transform, load.
          <span class="text-muted">Get what we need</span>
        </h2>
        <p class="lead">利用ETL对数据进行清洗，Python和Kettle均可进行处理，之后清洗掉冗余的关系，大幅减少冗余数据，为性能优化打好基础，完成后导出CSV</p>
        <p>
          <button class="btn btn-secondary" href="#" v-on:click="goToDoc">View details &raquo;</button>
        </p>
      </div>
      <div class="col-md-5">
        <img class="featurette-image img-fluid mx-auto" src="../assets/img/what-is-etl.jpg" data-src="holder.js/500x500/auto" alt="Generic placeholder image">
      </div>
    </div>

    <hr class="featurette-divider">

    <div class="row featurette">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading">Neo4j Graph Database Platform.
          <span class="text-muted">Store data in graph</span>
        </h2>
        <p class="lead">图数据库Neo4j，NoSQL的一种，与传统关系性数据库不同，使用图的形式存储数据，对于类似于知识图谱或人物关系图之类的数据更加直观方便，同时也为可视化展示提供了便利</p>
        <p>
          <button class="btn btn-secondary" href="#" v-on:click="goToDoc">View details &raquo;</button>
        </p>
      </div>
      <div class="col-md-5 order-md-1">
        <img class="featurette-image img-fluid mx-auto" src="../assets/img/neo4j.jpg" data-src="holder.js/500x500/auto" alt="Generic placeholder image">
      </div>
    </div>

    <hr class="featurette-divider">

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">Spring MVC.
          <span class="text-muted">Use Maven to build the project</span>
        </h2>
        <p class="lead">后端使用Spring MVC进行开发，由Neo4j Driver负责实现对服务器端数据库的操作，支持Cypher语句的查询操作（添加操作暂不支持），使开发更加轻量化</p>
        <p>
          <button class="btn btn-secondary" href="#" v-on:click="goToDoc">View details &raquo;</button>
        </p>
      </div>
      <div class="col-md-5">
        <img class="featurette-image img-fluid mx-auto" src="../assets/img/Spring-MVC.jpg" alt="Generic placeholder image">
      </div>
    </div>

    <hr class="featurette-divider">

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">Vue Cli.
          <span class="text-muted">Front end framework with webpack</span>
        </h2>
        <p class="lead">项目前端使用Vue.js作为开发框架，使用Vue Cli作为脚手架开发单页web应用，UI根据功能划分为不同部分放在各个组件内实现</p>
        <p>
          <button class="btn btn-secondary" href="#" v-on:click="goToDoc">View details &raquo;</button>
        </p>
      </div>
      <div class="col-md-5">
        <img class="featurette-image img-fluid mx-auto" src="../assets/img/vuecli.jpg" alt="Generic placeholder image">
      </div>
    </div>

    <hr class="featurette-divider">
    <!-- /END THE FEATURETTES -->
  </div>
  </main>
</template>
<script>
import '../assets/css/custom-css-bootstrap-magic-2018-06-16.css'

export default {
  ame: 'Home',
  methods: {
    goToDoc () {
      document.getElementById('home').style.display = 'none'
      document.getElementById('doc').style.display = 'block'
    }
  }
}
</script>

<style scoped>
  body {
    padding-top: 3rem;
    padding-bottom: 3rem;
    color: #5a5a5a;
  }

  .carousel {
    margin-bottom: 4rem;
  }
  /* Since positioning the image, we need to help out the caption */
  .carousel-caption {
    bottom: 3rem;
    z-index: 10;
  }

  /* Declare heights because of positioning of img element */
  .carousel-item {
    height: 32rem;
    background-color: #777;
  }
  .carousel-item > img {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    height: 32rem;
  }

  /* MARKETING CONTENT
  -------------------------------------------------- */

  /* Center align the text within the three columns below the carousel */
  .marketing .col-lg-4 {
    margin-bottom: 1.5rem;
    text-align: center;
  }
  .marketing h2 {
    font-weight: 400;
  }
  .marketing .col-lg-4 p {
    margin-right: 0.75rem;
    margin-left: 0.75rem;
  }

  /* Featurettes
  ------------------------- */

  .featurette-divider {
    margin: 5rem 0; /* Space out the Bootstrap <hr> more */
  }

  /* Thin out the marketing headings */
  .featurette-heading {
    font-weight: 300;
    line-height: 1;
    letter-spacing: -0.05rem;
  }

  @media (min-width: 40em) {
    /* Bump up size of carousel content */
    .carousel-caption p {
      margin-bottom: 1.25rem;
      font-size: 1.25rem;
      line-height: 1.4;
    }

    .featurette-heading {
      font-size: 50px;
    }
  }
</style>
