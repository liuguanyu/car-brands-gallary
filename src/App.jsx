import { createSignal, createMemo } from 'solid-js';
import CarBrandGrid from './components/CarBrandGrid';
import PrintButton from './components/PrintButton';

function App() {
  // 检测URL查询参数中是否包含biglogo
  const isBigLogoMode = createMemo(() => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.has('biglogo');
  });

  return (
    <div class={`app ${isBigLogoMode() ? 'big-logo-mode' : ''}`}>
      <div class="container">
        <header class="header">
          <h1>主流汽车品牌标志</h1>
          <div class="header-actions">
            <PrintButton />
          </div>
        </header>
        
        <CarBrandGrid bigLogoMode={isBigLogoMode()} />
      </div>
    </div>
  );
}

export default App;
