import request from '@/utils/request'

export function login(data) {
  return request({
    url: 'api/cmsuser/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  console.log(token, 'token')

  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
