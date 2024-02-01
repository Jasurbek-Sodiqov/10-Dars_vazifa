import { useState } from "react";


function App() {
  return (
    <>
      <button onClick={() => document.getElementById("my_modal_5").showModal()}>
        Modalni ochish
      </button>
      <dialog id="my_modal_5">
        <div>
          <h3>Modal ochildi</h3>
          <p>Uni yopish uchun Close tugmasini bosishingiz mumkin</p>
          <div>
            <form>
              <button>Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default App;
