import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import DefaultLayout from './conponents/Layouts/DefaultLayout';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.page;
          const Layout = route.layout === null ? Fragment : DefaultLayout;
          return (
            <Route 
              key={index} 
              path={route.path} 
              element={<Layout><Page /></Layout>}
            >
            </Route>
          )
        })}
      </Routes>
    </div>
    </BrowserRouter>
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
