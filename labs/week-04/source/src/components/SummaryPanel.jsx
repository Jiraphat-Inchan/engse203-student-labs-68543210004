import { initialTasks } from '../data/initialTasks.js';

function SummaryPanel() {
  return (
    <section className="panel">
      <h2>Starter พร้อมแล้ว</h2>
      <p>มีข้อมูลเริ่มต้น {initialTasks.length} รายการ</p>
      <p>เปิด README หลักแล้วทำ CP01-CP07 ตามลำดับ</p>
      <p>เย้</p>
    </section>
  );
}

export default SummaryPanel;