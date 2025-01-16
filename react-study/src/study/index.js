import ReactDOM from 'react-dom/client';

import Hello2, { printConslo, printConslo2 } from './study/Hello2/hello2';
// default가 없다면 export는 {} 넣어서 가져와야함.
// default는 하나만 존재하기 때문에 변수명 수정이 가능하다.




// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<Hello2/>);

printConslo();
printConslo2();


