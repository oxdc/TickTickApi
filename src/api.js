import request from 'request'

export default class TickApi {
  constructor (username, password, options) {
    this.request = request.defaults({
      'jar': true
    })
    this.username = username
    this.options = options
    this.isLogin = false
    this.token = null
    this.init()
    this.baseUrl =
      (this.options.site === 'dida365')
      ? 'https://api.dida365.com'
      : 'https://ticktick.com'
    return new Promise((resolve, reject) => {
      this.login(username, password)
        .then(async () => {
          this.isLogin = true
          resolve(this)
        })
    })
  }

  init () {
    this.user = {
      id: null,
      inbox: null,
      projects: null,
      projectGroups: null,
      tags: null,
      pro: {
        status: false,
        endDate: null
      }
    }
  }
  
  login (username, password) {
    const url = this.baseUrl + '/api/v2/user/signon?wc=true&remember=true'
    const reqOptions = {
      method: 'POST',
      url: url,
      headers: {
        'Content-Type': 'application/json',
        'Origin': this.baseUrl
      },
      json: {
        username: username,
        password: password
      }
    }
    const _this = this
    return new Promise((resolve, reject) => {
      this.request(reqOptions, function (error, request, body) {
        if (body.username !== undefined) {
          resolve(body)
          if (body.token) _this.token = body.token
          if (body.userId) _this.user.id = body.userId
          if (body.inboxId) _this.user.inbox = body.inboxId
          if (body.pro) _this.user.pro.status = body.pro
          if (body.proEndDate) _this.user.pro.endDate = new Date(body.proEndDate)
        } else {
          throw new Error('Could not login')
        }
      })
    })
  }

  getUserProfile () {
    const url = this.baseUrl + '/api/v2/user/status'
    const reqOptions = {
      method: 'GET',
      url: url,
      headers: {
        'Content-Type': 'application/json',
        'Origin': this.baseUrl
      }
    }
    const _this = this
    return new Promise((resolve, reject) => {
      this.request(reqOptions, function (error, request, body) {
        if (error) reject(error)
        var data = JSON.parse(body)
        resolve(data)
        if (data.userId) _this.user.id = data.userId
        if (data.inboxId) _this.user.inbox = data.inboxId
        if (data.pro) _this.user.pro.status = data.pro
        if (data.proEndDate) _this.user.pro.endDate = new Date(data.proEndDate)
      })
    })
  }

  update () {
    const url = this.baseUrl + '/api/v2/batch/check/0'
    const reqOptions = {
      method: 'GET',
      url: url,
      headers: {
        'Content-Type': 'application/json',
        'Origin': this.baseUrl
      }
    }
    const _this = this
    return new Promise((resolve, reject) => {
      this.request(reqOptions, function (error, request, body) {
        var data = JSON.parse(body)
      })
    })
  }
}