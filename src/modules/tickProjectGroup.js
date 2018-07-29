export class TickProjectGroup {
  constructor (name, options) {
    if (!name) throw Error('Project group\'s name is required')
    this.name = name
    this.id = null
    this.projects = []
    this.property = {}
    this.property.etag = null
    this.property.showAll = true
    this.property.sortOrder = null
    this.property.deleted = 0
    this.property.userId = null
    this.property.sortType = 'sortOrder'
    if (options.id) this.id = options.id
    if (options.etag) this.property.etag = options.etag
    if (options.showAll) this.property.showAll = options.showAll
    if (options.sortOrder) this.property.sortOrder = options.sortOrder
    if (options.deleted) this.property.deleted = options.deleted
    if (options.userId) this.property.userId = options.userId
    if (options.sortType) this.property.sortType = options.sortType
  }
}

export class TickNoGroup {
  constructor () {
    this.name = '__TickTickNoGroup__'
    this.id = null
    this.projects = []
  }
}

export default {
  TickProjectGroup,
  TickNoGroup
}