<div class="icon-scroll" />

<style lang="postcss">
  .icon-scroll,
  .icon-scroll:before {
    position: absolute;
    left: 50%;
  }

  .icon-scroll {
    width: 40px;
    height: 70px;
    margin-left: -20px;
    top: 50%;
    margin-top: -35px;
    box-shadow: inset 0 0 0 1px #fff;
    border-radius: 25px;
  }

  .icon-scroll:before {
    content: "";
    width: 8px;
    height: 8px;
    background: #fff;
    margin-left: -4px;
    top: 8px;
    border-radius: 4px;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-name: scroll;
  }

  @keyframes scroll {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(46px);
    }
  }
</style>
