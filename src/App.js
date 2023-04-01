import React, { useRef } from "react";
import exportAsImage from "./exportAsImage";

export default function App() {
  const exportRef = useRef();
  
  return (
  <>
    <div className="parent">
      <div ref={exportRef}>
          <table class="fixed_headers">
            <thead>
              <tr>
                <th>Name</th>
                <th>Color</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Apple</td>
                <td>Red</td>
                <td>These are red.</td>
              </tr>
              <tr>
                <td>Pear</td>
                <td>Green</td>
                <td>These are green.</td>
              </tr>
              <tr>
                <td>Grape</td>
                <td>Purple / Green</td>
                <td>These are purple and green.</td>
              </tr>
              <tr>
                <td>Orange</td>
                <td>Orange</td>
                <td>These are orange.</td>
              </tr>
              <tr>
                <td>Banana</td>
                <td>Yellow</td>
                <td>These are yellow.</td>
              </tr>
              <tr>
                <td>Kiwi</td>
                <td>Green</td>
                <td>These are green.</td>
              </tr>
              <tr>
                <td>Plum</td>
                <td>Purple</td>
                <td>These are Purple</td>
              </tr>
              <tr>
                <td>Watermelon</td>
                <td>Red</td>
                <td>These are red.</td>
              </tr>
              <tr>
                <td>Tomato</td>
                <td>Red</td>
                <td>These are red.</td>
              </tr>
              <tr>
                <td>Cherry</td>
                <td>Red</td>
                <td>These are red.</td>
              </tr>
              <tr>
                <td>Cantelope</td>
                <td>Orange</td>
                <td>These are orange inside.</td>
              </tr>
              <tr>
                <td>Honeydew</td>
                <td>Green</td>
                <td>These are green inside.</td>
              </tr>
              <tr>
                <td>Papaya</td>
                <td>Green</td>
                <td>These are green.</td>
              </tr>
              <tr>
                <td>Raspberry</td>
                <td>Red</td>
                <td>These are red.</td>
              </tr>
              <tr>
                <td>Blueberry</td>
                <td>Blue</td>
                <td>These are blue.</td>
              </tr>
              <tr>
                <td>Mango</td>
                <td>Orange</td>
                <td>These are orange.</td>
              </tr>
              <tr>
                <td>Passion Fruit</td>
                <td>Green</td>
                <td>These are green.</td>
              </tr>
            </tbody>
          </table>
      </div>

    <button onClick={() => exportAsImage(exportRef.current, "test")}>
    Capture Image
    </button>
    </div>
  </>
  )
  }