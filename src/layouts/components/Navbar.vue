<template>
  <div class="navbar-container d-flex content align-items-center">
    <!-- Nav Menu Toggler -->
    <ul class="nav navbar-nav d-xl-none">
      <li class="nav-item">
        <b-link class="nav-link" @click="toggleVerticalMenuActive">
          <feather-icon icon="MenuIcon" size="21" />
        </b-link>
      </li>
    </ul>

    <!-- Left Col -->
    <div
      class="bookmark-wrapper align-items-center flex-grow-1 d-none d-lg-flex text-center"
    >
      <h1 class="m-0 pl-1 display-4 font-weight-bolder">
        沙崙電能管理系統資訊平臺
      </h1>
    </div>
    <b-img
      src="@/assets/images/logo/logo.svg"
      width="90px"
      fluid
      class="float-right"
    ></b-img>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';
import jscookie from 'js-cookie';

export default {
  components: {
    // Navbar Components
  },
  props: {
    toggleVerticalMenuActive: {
      type: Function,
      default: () => {},
    },
  },
  computed: {
    ...mapState('user', ['userInfo']),
    role() {
      if (this.userInfo.isAdmin) return '系統管理員';

      return '使用者';
    },
  },
  methods: {
    logout() {
      axios.get('/logout').then(() => {
        jscookie.remove('authentication');
        this.$router.push('/login');
      });
    },
  },
};
</script>
