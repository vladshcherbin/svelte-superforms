<script lang="ts">
  import { superForm } from 'sveltekit-superforms'
  import Form from '$lib/components/Form.svelte'
  import Input from '$lib/components/Input.svelte'

  export let data

  const form = superForm(data.form)
</script>

<p>hey 👋</p>
<Form {form}>
  <Input type="email" name="email" label="Email" />
  <Input type="password" name="password" label="Password" />
  <button type="submit">sign up</button>
</Form>
