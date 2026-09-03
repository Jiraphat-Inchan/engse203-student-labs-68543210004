# ENGSE203 Week 05 — Source Code v2 (แยก 5A / 5B)

**สิ่งที่แก้จากชุด canonical เดิม:** โครงสร้าง TODO และ checker
**สิ่งที่ไม่แก้:** Technical Contract, Assessment Contract, rubric, route matrix, storage schema, requirement IDs

---

## 1. ในแพ็กเกจนี้มีอะไร

| โฟลเดอร์ | สถานะ | เอาไปวางที่ |
|---|---|---|
| `lab05-starter/` | **แก้ใหม่** | `labs/week-05-react-mini-app/lab05/` (public) |
| `REC-5A-END/` | **สร้างใหม่** | `week05-instructor-private/checkpoints/REC-5A-END/source/` |
| `reference-solution/` | **แก้ใหม่** | `week05-instructor-private/reference-solution/source/` |
| `pre-lab05-unchanged/` | **ไม่แก้ — คัดลอกมาเพื่อความครบถ้วน** | ของเดิมใช้ได้เลย |

### Pre-LAB ไม่ต้องแก้อะไร

ผมตรวจ `pre-lab05/starter/` ของเดิมแล้ว ใช้ได้กับทั้ง Pre-LAB 05A และ 05B โดยไม่ต้องแก้แม้แต่บรรทัดเดียว เพราะมีครบทั้ง

- route ครบ 5 เส้น รวม `tasks/:taskId` และ wildcard → รองรับ Pre-LAB 05A
- `PREFERENCE_KEY` และปุ่ม Reset Demo Preference → รองรับ Pre-LAB 05B
- `PageTitle` ที่ใช้ Effect เปลี่ยน `document.title` → ใช้สอนเรื่อง Effect ได้

เปลี่ยนเฉพาะ **คู่มือ** เป็น 2 ฉบับ (`ENGSE203_PreLAB05A_Student_TH.md` และ `05B`) ส่วน starter เดิมใช้ร่วมกันทั้งสองคาบ

---

## 2. โครงสร้าง TODO ใหม่

TODO ทุกอันขึ้นต้นด้วย `5A-` หรือ `5B-` เพื่อให้ผู้เรียนรู้ทันทีว่าอันไหนเป็นงานของคาบไหน

### คาบ 5A — 6 จุด

| TODO | ไฟล์ | งาน |
|---|---|---|
| `5A-CP01` | `App.jsx`, `DashboardPage.jsx` | ย้ายงานของ Dashboard ออกจาก App |
| `5A-CP02` | `App.jsx`, `AppLayout.jsx`, `AppHeader.jsx` | Routes · Outlet · NavLink |
| `5A-1` | `requestService.js` | `fetchSeedRequests()` + `response.ok` |
| `5A-2` | `requestService.js` | `getRequests()` คืนผลจาก seed |
| `5A-3` | `requestService.js` | `getRequestById()` |
| `5A-CP05a` | `RequestDetailPage.jsx` | `useParams()` + แยกพบ/ไม่พบ |

### คาบ 5B — 9 จุด

| TODO | ไฟล์ | งาน |
|---|---|---|
| `5B-A` | `requestStorage.js` | `readStoredRequests()` — 3 สถานะ |
| `5B-B` | `requestStorage.js` | `writeStoredRequests()` |
| `5B-1` | `requestService.js` | เปิด import ของ storage |
| `5B-2` | `requestService.js` | `loadNormalRequests()` |
| **`5B-3`** | `requestService.js` | **เปลี่ยน 1 บรรทัด — จุดสำคัญที่สุดของทั้งสองคาบ** |
| `5B-4/5/6` | `requestService.js` | add · delete · reset |
| `5B-CP04a` | `NewRequestPage.jsx` | เรียก addRequest แล้ว navigate |

---

## 3. กลไก "เปลี่ยนบรรทัดเดียว"

นี่คือหัวใจของการแยก 2 คาบ ใน starter เขียนไว้แบบนี้

```js
export async function getRequests(options = {}) {
  await waitForLabDelay();
  if (options.scenario === 'error') { ... }
  if (options.scenario === 'empty') { return []; }

  // TODO 5A-2: return fetchSeedRequests();
  // TODO 5B-3: เปลี่ยนบรรทัดข้างบนเป็น return loadNormalRequests(options.onRecovery);
  throw new Error('TODO 5A-2: getRequests normal flow');
}
```

คาบ 5A ผู้เรียนเขียน `return fetchSeedRequests();`
คาบ 5B เปลี่ยนเป็น `return loadNormalRequests(options.onRecovery);`

**แล้ว `DashboardPage.jsx` ทั้ง 100 บรรทัดไม่ต้องแก้เลย** — ผู้เรียนจะได้พิสูจน์คุณค่าของ Service Layer ด้วยประสบการณ์ตรง ไม่ใช่ท่องตามที่ครูบอก และเป็นการซ้อมท่าเดียวกับที่ Week 08 จะทำอีกครั้งกับ HTTP API จริง

---

## 4. ของใหม่ที่เพิ่มเข้ามา

### `src/hooks/useManualReload.js` — ให้มาแล้ว ไม่ต้องเขียนเอง

แก้ปัญหาจากเอกสารวิเคราะห์ข้อ GAP-10 ซึ่งชี้ว่ารูปแบบ `reloadKey` เดิมซับซ้อนเกินระดับผู้เรียน

```js
const [reloadKey, reload] = useManualReload();

useEffect(() => { /* โหลดข้อมูล */ }, [reloadKey]);
<button onClick={reload}>ลองอีกครั้ง</button>
```

ชื่อ `useManualReload` อธิบายตัวเองได้ ต่างจากตัวแปร `reloadKey` ลอย ๆ ที่ผู้เรียนต้องเดาว่าทำอะไร ไฟล์นี้มีคอมเมนต์อธิบายเหตุผลไว้ครบ ให้ผู้เรียนอ่านและอธิบายได้ แต่ไม่ต้องคิดกลไกเอง

### แก้ข้อบกพร่องใน Reference Solution (GAP-09)

`validateRequestInput()` เดิมใช้ optional chaining ในแบบที่ทำให้ field ที่หายไปผ่านการตรวจ แล้วไปพังเป็น `TypeError` ทีหลัง แก้แล้วในแพ็กเกจนี้

```js
function readText(value) {
  return typeof value === 'string' ? value.trim() : '';
}
if (readText(input.requesterName).length < 2) throw new Error('ชื่อผู้แจ้งไม่ถูกต้อง');
```

### เรื่องปุ่มลบในคาบ 5A

ในคาบ 5A ยังไม่มี `deleteRequest()` ใน Service แต่การลบเป็นความสามารถของ Week 04 ที่ห้ามหาย

`REC-5A-END` จึงให้ปุ่มลบทำงานกับ state ในหน่วยความจำก่อน พร้อมข้อความบอกผู้ใช้ว่า *"ลบในหน่วยความจำแล้ว — refresh จะกลับมา"* แล้วในคาบ 5B เปลี่ยนเป็นเรียก Service

วิธีนี้ทำให้ regression ของ Week 04 ไม่ขาดตอน และทำให้ผู้เรียนรู้สึกถึงความต่างระหว่าง "ลบชั่วคราว" กับ "ลบจริง" ด้วยตัวเอง

---

## 5. ผลการตรวจรับ

รันจริงทั้ง 3 tree

| tree | `--session=1` | ตรวจทั้งหมด | `npm run build` |
|---|---|---|---|
| `lab05-starter/source` | 92/104 | 104/133 | ผ่าน |
| `REC-5A-END` | **104/104** | 117/133 | ผ่าน |
| `reference-solution` | 104/104 | **133/133** | ผ่าน |

**ตัวเลขที่ต้องใช้อ้างอิงในเอกสารทั้งหมด**

| จุด | ตัวเลข |
|---|---|
| เริ่มคาบ 5A | 92/104 |
| จบคาบ 5A | 104/104 (`--session=1`) |
| จบคาบ 5B | 133/133 |

> ตัวเลขต่างจาก v1 (85/92 และ 92/92) เพราะ checker v2 เพิ่มการตรวจเชิงพฤติกรรม 18 รายการ การตรวจ TODO ที่หลงเหลือ และแก้ผล PASS เท็จ 4 รายการ

---

## 6. คำสั่งตรวจซ้ำ

```bash
# ผู้เรียน — ระหว่างคาบ 5A
npm run check -- --session=1

# ผู้เรียน — ตอนส่งงาน
npm run check

# ผู้สอน — ตรวจก่อนสอน
cd reference-solution && npm ci && node scripts/check-project.mjs | tail -3
cd REC-5A-END       && npm ci && node scripts/check-project.mjs --session=1 | tail -3
cd lab05-starter/source && npm ci && node scripts/check-project.mjs --session=1 | tail -3
```

---

## 7. สิ่งที่ยังต้องทำต่อ

- [ ] LAB05 Student Guide แยกเป็น 5A / 5B (ของเดิม 458 บรรทัดรวมกัน)
- [ ] สไลด์สอน 5A
- [ ] เอกสารประกอบการสอน 5B + สไลด์ 5B
- [ ] เทมเพลต `TEST_REPORT.md` ที่กรอก preconditions มาให้แล้ว
- [ ] อัปเดตตัวเลข checker ในเอกสารเดิมทุกฉบับ (ดูรายการในหัวข้อ 5)
- [ ] สร้าง snapshot ที่เหลือ: `REC-CP05a`, `REC-CP04a`, `REC-CP04b`, `REC-CP05b`
