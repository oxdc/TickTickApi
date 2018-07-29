export class TickProject {
  constructor (name, options) {
    if (!name) throw Error('Project name is required')
    this.name = name
    this.id = null
    this.tasks = []
    this.property = {}
    this.property.isOwner = true
    this.property.color = null
    this.property.inAll = true
    this.property.sortOrder = null
    this.property.sortType = 'sortOrder'
    this.property.userCount = 1
    this.property.etag = null
    this.property.modifiedTime = (new Date()).toISOString()
    this.property.closed = null
    this.property.muted = false
    this.property.groupId = null
    if (options.id) this.id = options.id
    if (options.isOwner) this.property.isOwner = options.isOwner
    if (options.color) this.property.color = options.color
    if (options.inAll) this.property.inAll = options.inAll
    if (options.sortOrde) this.property.sortOrde = options.sortOrde
    if (options.sortType) this.property.sortType = options.sortType
    if (options.userCount) this.property.userCount = options.userCount
    if (options.etag) this.property.etag = options.etag
    if (options.modifiedTime) this.property.modifiedTime = options.modifiedTime
    if (options.closed) this.property.closed = options.closed
    if (options.muted) this.property.muted = options.muted
    if (options.groupId) this.property.groupId = options.groupId
  }
}
export class Inbox {
  constructor(id) {
    if (!id) throw Error('Inbox id is required')
    this.name = '__TickTickInbox__'
    this.id = id
    this.tasks = []
    this.property = {
      groupId: null
    }
  }
}

export default {
  TickProject,
  Inbox
}