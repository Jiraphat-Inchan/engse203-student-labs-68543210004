import AppHeader from './components/AppHeader.jsx';
import SummaryPanel from './components/SummaryPanel.jsx';
import TaskList from './components/TaskList.jsx';
import { initialTasks } from './data/initialTasks.js';

function App() {
  return (
    <>
      <AppHeader />
      <main className="container page-content">
        <SummaryPanel />
        <TaskList tasks={initialTasks} />
      </main>
    </>
  );
}

export default App;