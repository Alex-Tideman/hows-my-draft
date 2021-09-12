<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<nav>
    <div class="header header-fixed u-unselectable header-animated">
      <div class="header-brand">
          <div class="nav-item no-hover">
              <a href="/"><h6 class="title">How's My Draft</h6></a>
          </div>
      </div>
      <div class="header-nav" id="header-menu">
          <div class="nav-left">
          </div>
  
          <div class="nav-right">
              <div class="nav-item active">
                  <a href="#">Gongshow</a>
              </div>
              <div class="nav-item has-sub" id="dropdown">
                  <a class="nav-dropdown-link">Actions</a>
                  <ul class="dropdown-menu" role="menu">
                      <li role="menu-item"><a href="#">Login</a></li>
                      <li role="menu-item"><a href="#">Proile</a></li>
                      <li role="menu-item"><a href="#">Settings</a></li>
                      <li class="dropdown-menu-divider"></li>
                      <li role="menu-item"><a href="#">Log Out</a></li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
    </nav>
</header>

<style>
	header {
		width: 100%;
		z-index: 10;
	}

  a {
    text-align: left;
    text-decoration: none;
  }

</style>
