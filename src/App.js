import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Image</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        <TableRow />
      </tbody>
    </table>
  </div>
  );
}

export default App;
