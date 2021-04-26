import { Route, Switch } from 'react-router-dom'
import { Books } from '../../components/books'
import { BorrowRequest } from '../../components/borrow-request'
import { Categories } from '../../components/categories'
import { CategoriesEdit } from '../../components/categories-edit'
import { Home } from '../../components/home'
import { Login } from '../../components/login'
import { Logout } from '../../components/logout'

export function RouterSwitches() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Route path="/books" component={Books} />
      
      <Route path="/categories/edit/:id" component={CategoriesEdit} />
      <Route path="/categories" component={Categories} />
      
      <Route path="/borrow-request" component={BorrowRequest} />
      <Route exact path="/" component={Home} />
    </Switch>
  )
}
