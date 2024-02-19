<script lang="ts">
  import { superForm } from 'sveltekit-superforms'

  export let data

  const { form, errors, enhance } = superForm(data.form)
</script>

<p>hey 👋</p>
<form method="post" use:enhance>
  <div>
    <input type="email" name="email" placeholder="Email" bind:value={$form.email} />
    {#if $errors.email?.length}
      <p>${$errors.email.at(0)}</p>
    {/if}
  </div>
  <div>
    <input type="password" name="password" placeholder="Password" bind:value={$form.password} />
    {#if $errors.password?.length}
      <p>${$errors.password.at(0)}</p>
    {/if}
  </div>
  <button type="submit">sign up</button>
</form>