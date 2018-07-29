export default class TickProjectGroup {
  constructor (name, options) {
    if (!name) throw Error('Project group\'s name is required')
    this.name = name
    this.id = null
    this.etag = null
    this.showAll = true
    this.sortOrder = null
    this.deleted = 0
    this.userId = null
    this.sortType = 'sortOrder'
    if (options.id) this.id = options.id
    if (options.etag) this.etag = options.etag
    if (options.showAll) this.showAll = options.showAll
    if (options.sortOrder) this.sortOrder = options.sortOrder
    if (options.deleted) this.deleted = options.deleted
    if (options.userId) this.userId = options.userId
    if (options.sortType) this.sortType = options.sortType
  }
}