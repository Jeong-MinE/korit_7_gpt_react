function DataListLayout({children }) {
// 배열을 대입하면 ,를 무시하고 결과 도출
    console.log(children);
    const liList = [
        <li>5번리스츠</li>,
        <li>6번리스츠</li>,
        <li>7번리스츠</li>,
        <li>8번리스츠</li>,
    ];
        


return <ul>
    {children}
    {liList}
    {
    children.map((li, index) => 
      <li key={index}>{"1" + li.props.children}</li>)
    }
    {
        liList.map((li, index) =>
        <li key={index}>{"2" + li.props.children}</li>)
    }
      </ul>
    
}


export default DataListLayout;