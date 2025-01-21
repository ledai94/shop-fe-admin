import httpCommon from '@/services/httpCommon'
const authService = {
  login: async (body: { email: string; password: string }) => {
    const response = await httpCommon({
      method: 'POST',
      url: '/auth/login',
      data: {
        email: body.email,
        password: body.password,
      },
      // // test param
      // params: {
      //   id: 1,
      //   search: 'asd',
      // },
    })
    return response
  },
}

export default authService
