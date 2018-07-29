export default class TickProject {
  constructor (name, options) {
    if (!name) throw Error('Project name is required')
    this.name = name
    this.id = null
    this.isOwner = true
    this.color = null
    this.inAll = true
    this.sortOrder = null
    this.sortType = 'sortOrder'
    this.userCount = 1
    this.etag = null
    this.modifiedTime = (new Date()).toISOString()
    this.closed = null
    this.muted = false
    this.groupId = null
    if (options.id) this.id = options.id
    if (options.isOwner) this.isOwner = options.isOwner
    if (options.color) this.color = options.color
    if (options.inAll) this.inAll = options.inAll
    if (options.sortOrde) this.sortOrde = options.sortOrde
    if (options.sortType) this.sortType = options.sortType
    if (options.userCount) this.userCount = options.userCount
    if (options.etag) this.etag = options.etag
    if (options.modifiedTime) this.modifiedTime = options.modifiedTime
    if (options.closed) this.closed = options.closed
    if (options.muted) this.muted = options.muted
    if (options.groupId) this.groupId = options.groupId
  }
}