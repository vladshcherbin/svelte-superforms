<script lang="ts" context="module">
  type T = Record<string, unknown>;
</script>

<script lang="ts" generics="T extends Record<string, unknown>">
  import { getContext } from 'svelte'
  import { formFieldProxy, type FormPathLeaves, type SuperForm } from 'sveltekit-superforms'

  export let label: string
  export let name: FormPathLeaves<T>
  export let type: string

  const form = getContext('form') as SuperForm<T>
  const { errors, value } = formFieldProxy(form, name)
</script>

<div>
  <label for={name}>{label}</label>
  {#if type === 'email'}
    <input type="email" id={name} {name} bind:value={$value} />
  {:else if type === 'password'}
    <input type="password" id={name} {name} bind:value={$value} />
  {:else}
    <input type="text" id={name} {name} bind:value={$value} />
  {/if}
  {#if $errors?.length}
    <p>{$errors.at(0)}</p>
  {/if}
</div>

<style>
  div {
    display: grid;
    max-width: 400px;
  }
</style>