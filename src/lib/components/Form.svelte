<script lang="ts" context="module">
  type T = Record<string, unknown>;
</script>

<script lang="ts" generics="T extends Record<string, unknown>">
  import { setContext } from 'svelte'
  import { type SuperForm } from 'sveltekit-superforms'

  export let form: SuperForm<T>

  const { enhance } = form

  setContext('form', form)
</script>

<form method="post" use:enhance>
  <slot />
</form>
