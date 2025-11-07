function PrintButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button class="print-button" onClick={handlePrint}>
      <svg 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2"
      >
        <polyline points="6,9 6,2 18,2 18,9"></polyline>
        <path d="M6,18H4a2,2,0,0,1-2-2V11a2,2,0,0,1,2-2H20a2,2,0,0,1,2,2v5a2,2,0,0,1-2,2H18"></path>
        <polyline points="6,14 18,14 18,22 6,22 6,14"></polyline>
      </svg>
      打印页面
    </button>
  );
}

export default PrintButton;
