import Cookies from 'js-cookie'

const cookieHandle = {}

cookieHandle.get = function (key) {
  return Cookies.get(key)
}

cookieHandle.set = function (key, val) {
  return Cookies.set(key, val)
}

cookieHandle.remove = function (key) {
  return Cookies.remove(key)
}

export default cookieHandle
