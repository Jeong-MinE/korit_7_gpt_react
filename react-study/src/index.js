import ReactDOM from 'react-dom/client';
import App from './study/App';
import Hello from './study/Hello/Hello';
import Hello2 from './study/Hello2/Hello2';
import Hello3 from './study/Hello3/Hello3';
import App2 from './study/App2';
// default가 없다면 export는 {} 넣어서 가져와야함.
// default는 하나만 존재하기 때문에 변수명 수정이 가능하다.




const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<App/>);
root.render(<App2 />);




