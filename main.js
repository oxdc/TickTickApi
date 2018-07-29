import TickApi from './src/api'
import account from './account.conf'

async function example() {
  var api = await new TickApi(account.username, account.password, {
      site: 'dida365'
  })
  await api.update()
  await api.getUserProfile()
  console.log(api.user.projectGroups[1].projects[1])
}

example()
