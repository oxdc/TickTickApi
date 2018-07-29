export default class TickTag {
  constructor(name, options) {
    if (!name) throw Error('Tag name is required')
    this.name = name
    if (options.sortOrder) this.sortOrder = options.sortOrder
    if (options.sortTypes) this.sortTypes = options.ortType
    if (options.color) this.color = options.color
    if (options.etag) this.etag = options.etag
  }
}