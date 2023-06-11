import axios from 'axios';
import { useState, useEffect, useLayoutEffect } from 'react';
import './App.css';
import './pages/HomePage';
import HomePage from './pages/HomePage';


const courses = [];

const TodoList = () => {
  const [toDo, setToDo] = useState('');
  const [lists, setLists] = useState(courses);

  const handleOnChange = (toDo) => {
    setToDo(toDo);
  }

  const handlaeSubmit = () => {
    setLists(prev => [toDo, ...prev])
    setToDo('');
  }

  return (
    <div>
      <input value={toDo} type="text" onChange={(e) => handleOnChange(e.target.value)} />
      <button onClick={handlaeSubmit} >ADD</button>
      <ul>
        {lists.map((item, index) => (
          <li key={index} >{item}</li>
        ))}
      </ul>
    </div>
  )
}

// https://jsonplaceholder.typicode.com/posts
const UseEffectConponent = () => {
  const [title, setTitle] = useState('');

  const handleOnChange = (title) => {
    setTitle(title);
  }

  useEffect(async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/user/users');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }, [])

  return (
    <div>
      <input type="text" onChange={e => handleOnChange(e.target.value)} />
    </div>
  )
}

const App = () => {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
/* chưa học bài 44 45 48
- useLayoutEffect: sử dụng gần giống như useEffect, chỉ khác là useLayoutEffect chạy đồng bộ từ trên xuống dưới
  render ra giao diện sau khi chạy qua useLayoutEffect

- useRef: sử dụng để lưu giá trị một biến nào đó mà bạn không muốn nó bị thay đổi trong quá trình conponent bị reRender,
  hoặc dùng để lấy giá trị nào đó mà conponent render lần trước đó, hoặc dùng để get element dom
  
- react memo: dùng bọc ngoài component, giúp cho component đó không bị reRender khi không cần thiết

- useCallback: sử dụng cùng react memo, để xử lí những trường ho[ự ngoài lệ của react memo, giúp tối ưu component không bị reRender

- useMemo: sử dụng để tránh thực hiện lại 1 logic nào đó không cần thiết,

- useReducer: công dụng như useState, nhưng dùng xử lí những trường hợp phức tạp -> triển khai phức tạp hơn useState

- react contex, useContext: giúp đơn giản hóa việc truyền và nhận dữ liệu conponent cha xuống conponent con mà không cần prop
*/
