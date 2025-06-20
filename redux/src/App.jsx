
import { Provider } from 'react-redux'
import { store } from './app/store'
import './App.css'
import TodoList from './features/todos/TodoList'
import ProductList from './product/ProductList'
function App() {


  return (
    <Provider store={store}>
      
      <TodoList />
      <ProductList />
    </Provider>
  )
}

export default App
