import { For } from 'solid-js';
import BrandCard from './BrandCard';

const carBrands = [
  { id: 'bmw', name: '宝马', nameEn: 'BMW', logo: '/images/bmw.png' },
  { id: 'benz', name: '奔驰', nameEn: 'Mercedes-Benz', logo: '/images/benz.png' },
  { id: 'audi', name: '奥迪', nameEn: 'Audi', logo: '/images/audi.png' },
  { id: 'volkswagen', name: '大众', nameEn: 'Volkswagen', logo: '/images/volkswagen.png' },
  { id: 'ford', name: '福特', nameEn: 'Ford', logo: '/images/ford.png' },
  { id: 'chevrolet', name: '雪佛兰', nameEn: 'Chevrolet', logo: '/images/chevrolet.png' },
  { id: 'buick', name: '别克', nameEn: 'Buick', logo: '/images/buick.png' },
  { id: 'cadillac', name: '凯迪拉克', nameEn: 'Cadillac', logo: '/images/cadillac.png' },
  { id: 'lincoln', name: '林肯', nameEn: 'Lincoln', logo: '/images/lincoln.png' },
  { id: 'toyota', name: '丰田', nameEn: 'Toyota', logo: '/images/toyota.png' },
  { id: 'honda', name: '本田', nameEn: 'Honda', logo: '/images/honda.png' },
  { id: 'mazda', name: '马自达', nameEn: 'Mazda', logo: '/images/mazda.png' },
  { id: 'subaru', name: '斯巴鲁', nameEn: 'Subaru', logo: '/images/subaru.png' },
  { id: 'hyundai', name: '现代', nameEn: 'Hyundai', logo: '/images/hyundai.png' },
  { id: 'nissan', name: '日产', nameEn: 'Nissan', logo: '/images/nissan.png' },
  { id: 'byd', name: '比亚迪', nameEn: 'BYD', logo: '/images/byd.png' },
  { id: 'changan', name: '长安汽车', nameEn: 'Changan', logo: '/images/changan.png' },
  { id: 'geely', name: '吉利', nameEn: 'Geely', logo: '/images/geely.png' },
  { id: 'gac', name: '传祺', nameEn: 'GAC', logo: '/images/gac.png' },
  { id: 'haval', name: '哈弗', nameEn: 'Haval', logo: '/images/haval.png' },
  { id: 'lynkco', name: '领克', nameEn: 'Lynk & Co', logo: '/images/lynkco.png' },
  { id: 'wuling', name: '五菱', nameEn: 'Wuling', logo: '/images/wuling.png' },
  { id: 'kia', name: '起亚', nameEn: 'Kia', logo: '/images/kia.png' },
  { id: 'lexus', name: '雷克萨斯', nameEn: 'Lexus', logo: '/images/lexus.png' },
  { id: 'jaguar', name: '捷豹', nameEn: 'Jaguar', logo: '/images/jaguar.png' },
  { id: 'landrover', name: '路虎', nameEn: 'Land Rover', logo: '/images/landrover.png' },
  { id: 'peugeot', name: '标致', nameEn: 'Peugeot', logo: '/images/peugeot.png' },
  { id: 'citroen', name: '雪铁龙', nameEn: 'Citroën', logo: '/images/citroen.png' },
  { id: 'volvo', name: '沃尔沃', nameEn: 'Volvo', logo: '/images/volvo.png' },
  { id: 'porsche', name: '保时捷', nameEn: 'Porsche', logo: '/images/porsche.png' },
  { id: 'tesla', name: '特斯拉', nameEn: 'Tesla', logo: '/images/tesla.png' },
  { id: 'nio', name: '蔚来', nameEn: 'NIO', logo: '/images/nio.png' },
  { id: 'lixiang', name: '理想', nameEn: 'Li Xiang', logo: '/images/lixiang.png' },
  { id: 'xpeng', name: '小鹏', nameEn: 'XPeng', logo: '/images/xpeng.png' },
  { id: 'xiaomi', name: '小米汽车', nameEn: 'Xiaomi', logo: '/images/xiaomi.png' },
  { id: 'mitsubishi', name: '三菱', nameEn: 'Mitsubishi', logo: '/images/mitsubishi.png' },
  { id: 'mini', name: 'MINI', nameEn: 'MINI', logo: '/images/mini.png' },
  { id: 'ferrari', name: '法拉利', nameEn: 'Ferrari', logo: '/images/ferrari.png' },
  { id: 'jeep', name: '吉普', nameEn: 'Jeep', logo: '/images/jeep.png' },
  { id: 'rollsroyce', name: '劳斯莱斯', nameEn: 'Rolls-Royce', logo: '/images/rollsroyce.png' },
  { id: 'bentley', name: '宾利', nameEn: 'Bentley', logo: '/images/bentley.png' },
  { id: 'infiniti', name: '英菲尼迪', nameEn: 'Infiniti', logo: '/images/infiniti.png' },
  { id: 'renault', name: '雷诺', nameEn: 'Renault', logo: '/images/renault.png' },
  { id: 'skoda', name: '斯柯达', nameEn: 'Skoda', logo: '/images/skoda.png' }
];

function CarBrandGrid(props) {
  const { bigLogoMode = false } = props;

  return (
    <div class={`brands-grid ${bigLogoMode ? 'big-logo-grid' : ''}`}>
      <For each={carBrands}>
        {(brand) => <BrandCard brand={brand} bigLogoMode={bigLogoMode} />}
      </For>
    </div>
  );
}

export default CarBrandGrid;
