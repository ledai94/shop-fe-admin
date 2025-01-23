import httpCommon from '@/services/httpCommon'
import type { UserLogin } from '@/models/auth'
const authService = {
  login: async (body: UserLogin) => {
    const response = await httpCommon({
      method: 'POST',
      url: '/auth/login',
      data: {
        email: body.email,
        password: body.password,
      },
    })
    return response
  },

  refreshTokenFake: async () => {},
}

export default authService
