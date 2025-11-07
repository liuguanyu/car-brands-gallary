function BrandCard(props) {
  const { brand, bigLogoMode = false } = props;

  return (
    <div class={`brand-card ${bigLogoMode ? 'big-logo-card' : ''}`}>
      <img 
        src={brand.logo} 
        alt={`${brand.name}标志`} 
        class={`brand-logo ${bigLogoMode ? 'big-logo' : ''}`}
        onError={(e) => {
          e.target.style.display = 'none';
          console.warn(`Failed to load logo for ${brand.name}`);
        }}
      />
      {!bigLogoMode && (
        <>
          <div class="brand-name">{brand.name}</div>
          <div class="brand-name-en">{brand.nameEn}</div>
        </>
      )}
    </div>
  );
}

export default BrandCard;
