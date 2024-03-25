<template>
  <footer class="text-center text-lg-start bg-light text-dark">
      <section class="d-flex justify-content-center p-4 border-bottom align-items-center">
        <div class="me-5 d-none d-lg-block">
          <span>Media Logo:</span>
        </div>
        <div class="d-inline-flex align-items-center">
          <a href="#" class="me-4 text-reset">
            <font-awesome-icon icon="fab fa-github" class="fa-xl text-primary px-1" />
          </a>
          <a href="#" class="me-4 text-reset">
            <font-awesome-icon icon="fab fa-youtube" class="fa-xl text-primary px-1" />
          </a>
          <a href="#" class="me-4 text-reset">
            <font-awesome-icon icon="fab fa-twitter" class="fa-xl text-primary px-1" />
          </a>
          <a href="#" class="me-4 text-reset">
            <font-awesome-icon icon="fab fa-facebook-f" class="fa-xl text-primary px-1" />
          </a>
          <a href="#" class="me-4 text-reset">
            <font-awesome-icon icon="fab fa-linkedin" class="fa-xl text-primary px-1" />
          </a>
          <a href="#" class="me-4 text-reset">
            <font-awesome-icon icon="fab fa-dev" class="fa-xl text-primary px-1" />
          </a>
        </div>
      </section>
      <section class="">
        <div class="container text-center text-md-start mt-5">
          <div class="row mt-3">
            <div class="col-sm-6 col-md-4 col-lg-3 col-xl-3 mx-auto mb-4"
              v-for="(link, key) in links"
              :key="key"
            >
              <p class="h6 text-uppercase fw-bold mb-4">
                {{ link.text }}
              </p>
              <p v-for="(item, index) in link.children"
                :key="index"
              >
                <a href="#" class="text-reset">{{ item.text }}</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
        © 2023 Copyright:
        <a class="text-reset fw-bold" href="#">E-Commerce.com</a>
      </div>
    </footer>
</template>
<script setup>
const links = [
  {
    text: "LINK GROUP 1",
    children: [
      {
        text: "Link 1",
        link: ""
      },
      {
        text: "Link 2",
        link: ""
      },
      {
        text: "Link 3",
        link: ""
      },
      {
        text: "Link 4",
        link: ""
      },{
        text: "Link 5",
        link: ""
      }
    ]
  },
  {
    text: "LINK GROUP 1",
    children: [
      {
        text: "Link 1",
        link: ""
      },
      {
        text: "Link 2",
        link: ""
      },
      {
        text: "Link 3",
        link: ""
      },
      {
        text: "Link 4",
        link: ""
      },{
        text: "Link 5",
        link: ""
      }
    ]
  },
  {
    text: "LINK GROUP 1",
    children: [
      {
        text: "Link 1",
        link: ""
      },
      {
        text: "Link 2",
        link: ""
      },
      {
        text: "Link 3",
        link: ""
      },
      {
        text: "Link 4",
        link: ""
      },{
        text: "Link 5",
        link: ""
      }
    ]
  },
  {
    text: "LINK GROUP 1",
    children: [
      {
        text: "Link 1",
        link: ""
      },
      {
        text: "Link 2",
        link: ""
      },
      {
        text: "Link 3",
        link: ""
      },
      {
        text: "Link 4",
        link: ""
      },{
        text: "Link 5",
        link: ""
      }
    ]
  }
]
</script>

<style lang="scss" scoped>
a {
  --link-decoration: none;
  -webkit-text-decoration: var(--link-decoration);
  text-decoration: var(--link-decoration);
}</style>