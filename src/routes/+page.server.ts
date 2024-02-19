import { superValidate } from 'sveltekit-superforms'
import { valibot } from 'sveltekit-superforms/adapters'
import SignUpSchema from '$lib/schema/SignUpSchema.js'

export const load = async () => {
  const form = await superValidate(valibot(SignUpSchema))

  return { form }
}

export const actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, valibot(SignUpSchema))

    return { form }
  }
}
