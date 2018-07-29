export default class TickTag {
  constructor(name, options) {
    if (!name) throw Error('Tag name is required')
    this.name = name
    this.property = {}
    this.property.sortOrder = null
    this.property.sortTypes = null
    this.property.color = null
    this.property.etag = null
    if (options.sortOrder) this.property.sortOrder = options.sortOrder
    if (options.sortTypes) this.property.sortTypes = options.ortType
    if (options.color) this.property.color = options.color
    if (options.etag) this.property.etag = options.etag
  }
}