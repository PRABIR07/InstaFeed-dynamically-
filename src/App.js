
import './App.css';
import Card from './Components/Card';

function App() {
  return (
    <div className='flex'>
    <Card title={"Pradeep"} place={'Bangalore'} img={`https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60`}/>
     <Card title={"Prithvi"} place={`Mumbai`} img={`https://images.unsplash.com/photo-1588546506381-74592e9b8a2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60`}/>
     </div>
  );
}

export default App;
