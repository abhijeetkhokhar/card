import './App.css';
import Card from './components/Card';

function App() {
  return (
    <>
      <Card pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyFeXKUdFZMNJjAls-NEUF9rMtgAaGpsTA-Q&usqp=CAU" name="Joe Biden" age={81} phone={"+1123*****"} profession="President of USA"/>
      <Card pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbjDWrU2uoqBKyrXgTzb_sfEpE3PbDDe0Hyw&usqp=CAU"name="Narendar Modi" age={81} phone={"+1123*****"} profession="Minister of India"/>
      <Card pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREF98pXarQDKzFiVVMZ6dalPvGlYoID1WDow&usqp=CAU"name="Putin" age={81} phone={"+1123*****"} profession="President of Russia"/>
      <Card pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAZa8rC2IEBI97hliy-CFl21hS67YqDvXbbQ&usqp=CAU"name="Adnan" age={81} phone={"+1123*****"} profession="President of Teliya"/>
      <Card pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFhNrX_munbDIaG43dncf-D6ODJB4qC3QmOQ&usqp=CAU"name="Salman Khan" age={81} phone={"+1123*****"} profession="President of Bollywood"/>
    </>
  );
}

export default App;
