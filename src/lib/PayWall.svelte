<script>
    import Icon from 'svelte-awesome';
    import { times, usd, comment, codeFork, camera, ban } from 'svelte-awesome/icons';

  export let onClick;
  let password = '';

  function handleConfirm() {
    onClick(password);
  }
</script>
<div class="paywall-container">
  <div class="hero">
    <div class="hero-body">
        <div class="content">
            <h2 class="title white">You want the goods?</h2>
            <a class="btn btn-info btn-large" href="#login-modal">League Login</a>
        </div>
    </div>
  </div>
  <div class="modal modal-animated--zoom-in" id="login-modal">
    <a href="#loginModalDialog" class="modal-overlay close-btn" aria-label="Close"></a>
    <div class="modal-content" role="document">
        <div class="modal-header"><a href="#" class="" aria-label="Close"><span class="icon far-right"><Icon data={times}/></span></a>
            <div class="modal-title">Login</div>
        </div>
        <div class="modal-body">
            <div class="input-control">
              <input type="text" class="input-contains-icon" bind:value={password} placeholder="Enter password"><span class="icon" />
            </div>
            <small class="tagline">Want the password?</small>
            <div class="tag tag--success">$20</div>
            <small class="venmo">@ATide</small>
        </div>
        <div class="modal-footer">
            <div class="form-section u-text-right">
                <a href="#">
                    <button class="btn btn-small u-inline-block">Cancel</button>
                </a>
                <a href="#">
                    <button class="btn-info btn-small u-inline-block" on:click={handleConfirm}>Enter</button>
                </a>
            </div>
        </div>
    </div>
</div>
</div>

<style>
  .paywall-container {
    width: auto;
    text-align: center;
  }

  .hero {
    background-color: #f03d4d;
    height: 400px;
  }

  .far-right {
    position: absolute;
    right: 10px;
    top: 10px;
  }

  .content.title {
    font-size: 1.25em;
  }

  .tagline {
    font-size: .65em;
  }

  .venmo {
    font-size: .85em;
    font-weight: 900;
  }

</style>
