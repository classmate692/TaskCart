import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Compoments/Home';
import { About } from './Compoments/About';
import { Shoping_cart } from './Compoments/Shoping-cart/Shoping_cart';
import { Todo } from './Compoments/To-do-List/Todo';
import { Header } from './Compoments/Header';
import { NoPage } from './Compoments/Nopage';
import { Todo_Context } from './Compoments/To-do-List/Todo_Context';
import { Context } from './Compoments/Shoping-cart/Context/Context';
import { Cart } from './Compoments/Shoping-cart/Cart';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/about" element={<About />} />
            <Route path="/shoping_cart" element={<Context><Shoping_cart /> </Context>} />
            <Route path="/cart" element={<Context><Cart /> </Context>} />
            <Route path="/todo" element={<Todo_Context><Todo /> </Todo_Context>} />
            <Route path="*" element={<NoPage />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
