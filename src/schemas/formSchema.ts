import { z } from 'zod'

export const formSchema = z.object({
      name: z.string()
            .min(1, { message: 'El campo nombre es obligatorio ' }),
      email: z.email({
            message: 'Por favor, ingrese un correo valido'
      }),
      phone:z.string({
            message: 'Por favor, ingrese un telefono valido'
      }),
      textarea: z.string()
            .min(100, {
                  message: 'Debe contener al menos 100 caracteres 👇'
            })
            .max(255, {
                  message: 'Puede contener como maximo 255 caracteres'
            })
})