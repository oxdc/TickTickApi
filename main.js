import TickApi from './src/api'
import account from './account.conf'

async function example() {
    var api = await new TickApi(account.username, account.password, {
        site: 'dida365'
    })
    console.log(api.user)
    await api.update()
}

example()
