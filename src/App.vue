<template>
  <section class="login">
    <div class="sing-up">
      <h1>Sing up</h1>
      <form>
        <div>
          <label for="name">Name</label>
          <input type="text" name="name">
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" name="email">
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" name="password">
        </div>
        <button type="button">Sing up</button>
      </form>
    </div>
    <div class="sing-in">
      <h1>Sing in</h1>
      <form>
        <div>
          <label for="name">Name</label>
          <input type="text" name="name">
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" name="email">
        </div>
        <button type="button">Sing in</button>
      </form>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        formSinginShow: true
      }
    }
  }

</script>
<style lang="sass" scoped>
.sing-up, .sing-in {
  @include transition( all .2 ease);
}
</style>