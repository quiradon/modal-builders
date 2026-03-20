import React from 'react'
import { FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { UseFormReturn } from 'react-hook-form'
import { modalSchema } from '@/lib/schemas'
import z from 'zod'
import { Switch } from '../ui/switch'

export default function CheckboxEditor({
  form,
  index
}: {
  form: UseFormReturn<z.infer<typeof modalSchema>>
  index: number
}) {
  return (
    <>
      <FormField
        control={form.control}
        name={`components.${index}.component.default` as const}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Checked by default</FormLabel>
            <FormControl>
              <Switch
                checked={field.value === true}
                onCheckedChange={(checked) => {
                  form.setValue(
                    `components.${index}.component.default`,
                    checked ? true : undefined as unknown as boolean,
                    { shouldValidate: true, shouldDirty: true, shouldTouch: true }
                  )
                }}
              />
            </FormControl>
          </FormItem>
        )}
      />
    </>
  )
}
