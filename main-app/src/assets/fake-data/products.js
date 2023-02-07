// all images imported from images directory
//category
//description
import product_01_image_01 from "../images/product_01.jpg";
import product_03_image_01 from "../images/product_3.1.jpg";
import product_04_image_01 from "../images/product_4.1.jpg";
import product_05_image_01 from "../images/product_04.jpg";
import product_05_image_02 from "../images/product_08.jpg";
import product_06_image_01 from "../images/product_head1.jpg";
import product_06_image_02 from "../images/product_head2.jpg";
import product_06_image_03 from "../images/product_head3.jpg";

const products = [
  {
    id: "01", //id
    title: "Apple Macbook Air Gümüş",
    price: 35000,
    description:"Apple Macbook Air MGN63TU-A 13.3 inç ekran genişliği ve IPS özelliği sunuyor. 2560x1600 Piksel ekran çözünürlüğü, renk ve detayları ön plana çıkarıyor. 256 GB SDD depolama sağlayan Apple Macbook Air MGN63TU-A sahip olduğu 8 GB RAM sayesinde birden fazla işlemi aynı",
    image01: product_01_image_01,
    category: "Laptop", //category

  },

  {
    id: "02",
    title: "Apple Macbook Air Uzay Grisi",
    price: 40000,
    description:"Apple Macbook Air MGN93TU-A 13.3 inç ekran genişliği ve IPS özelliği sunuyor. 2560x1600 piksel ekran çözünürlüğü, renk ve detayları ön plana çıkarıyor. 256 GB SDD depolama sağlayan Apple Macbook Air MGN93TU-A sahip olduğu 8 GB RAM sayesinde birden fazla işlemi aynı",
    image01: product_01_image_01,
    category: "Laptop",

  },

  {
    id: "03",
    title: "Lenovo ThinkBook 20SM0038TX ",
    price: 25000,
    description:"Lenovo ThinkBook 15 20SM0038TX, 15.6 inç ekran genişliği ve IPS özelliği sunuyor. 1920x1080 piksel ekran çözünürlüğü, renk ve detayları ön plana çıkarıyor. 256 GB SDD depolama sağlayan Lenovo ThinkBook 15 20SM0038TX sahip olduğu 8 GB RAM",
    image01: product_03_image_01,
    category: "Laptop",

  },

  {
    id: "04",
    title: "Asus X515Ea-Bq2293W/I3-11155G4  ",
    price: 32000,
    description:"Asus D567509DA-EJ315  notebook 4 GB RAM’e ile oyunların ve programların akıcı çalışmasını sağlar. Dahili ekran kartı ile günlük kullanıma uygun grafik işlemlerini rahatlıkla çözümler. AMD Ryzen 5 3500U işlemcisi karmaşık ve çoklu  256 GB SSD",
    image01: product_04_image_01,
    category: "Laptop",

  },

  {
    id: "05",
    title: "Xiaomi Redmi Note 11 Pro",
    price: 15000,
    description:"Redmi Note 11 Pro, 6.67 inç ekran büyüklüğünün yanı sıra 1080x2400 piksel ekran çözünürlüğüyle birlikte muhteşem görüntü kalitesine sahiptir. 128 GB genişletilebilir depolama alanının yanı sıra 8 GB RAM de bünyesinde barındırmaktadır. 5000 mAh bataryası sayesinde",
    image01: product_05_image_01,
    category: "Phone",

  },
  {
    id: "06",
    title: "Apple iPhone 11 128 GB Beyaz",
    price: 26000,
    description:"Apple iPhone 11, mükemmel tasarımının yanı sıra 828 x 1792 piksel çözünürlük ile 6.1 inç dokunmatik ekrana sahiptir. Arka tarafta iki adet 12 MP ana kamera ve ön tarafta portreler için 12 MP kamera ile mükemmel fotoğraflar çekebilirsiniz. 128 GB dahili depolama alanı ile daha",
    image01: product_05_image_02 ,
    category: "phone",

  },

  {
    id: "07",
    title: "Apple iPhone 11 128 GB Uzay Grisi",
    price: 28000,
    description:"Apple iPhone 11, mükemmel tasarımının yanı sıra 828 x 1792 piksel çözünürlük ile 6.1 inç dokunmatik ekrana sahiptir. Arka tarafta iki adet 12 MP ana kamera ve ön tarafta portreler için 12 MP kamera ile mükemmel fotoğraflar çekebilirsiniz. 128 GB dahili depolama alanı ile daha",
    image01: product_05_image_02,
    category: "Pizza",

  },

  {
    id: "08",
    title: "Xiaomi Redmi Note 11",
    price: 14000,
    description:"Redmi Note 11 Pro, 6.67 inç ekran büyüklüğünün yanı sıra 1080x2400 piksel ekran çözünürlüğüyle birlikte muhteşem görüntü kalitesine sahiptir. 128 GB genişletilebilir depolama alanının yanı sıra 8 GB RAM de bünyesinde barındırmaktadır. 5000 mAh bataryası sayesinde",
    image01: product_05_image_01,
    category: "Phone",

  },

  {
    id: "09",
    title: "JBL T500BT Kablosuz Kulaklık",
    price: 900,
    description:"JBL Tune 500BT Kulak Üstü Bluetooth Kulaklığın yumuşak süngerleri ile saatlerce dinleme keyfi yaşayın. Katlanabilir kulaklık yapısı ile daha az yer kaplar. Uzun ömürlü bataryası sayesinde 16 saate kadar kesintisiz çalışma imkânı sunar. 5 dakikalık şarj ile 1 saate yakın kullanım",
    image01: product_06_image_01,

    category: "Headphone",

  },

  {
    id: "10",
    title: "JBL T500BT Kablosuz Kulaklık Siyah",
    price: 800,
    description:"JBL Tune 500BT Kulak Üstü Bluetooth Kulaklığın yumuşak süngerleri ile saatlerce dinleme keyfi yaşayın. Katlanabilir kulaklık yapısı ile daha az yer kaplar. Uzun ömürlü bataryası sayesinde 16 saate kadar kesintisiz çalışma imkânı sunar. 5 dakikalık şarj ile 1 saate yakın kullanım",
    image01: product_06_image_01,

    category: "Headphone",

  },

  {
    id: "11",
    title: "Apple AirPods 2. Nesil ",
    price: 2500,
    description:"Apple AirPods 2. Nesil MV7N2TU-A Bluetooth kulaklık hüzmeleme özellikli çift mikrofon ve çift optik sensöre sahiptir. Hareketi ve konuşmayı algılayan ivmeölçer özelliği ile kullanım kolaylığı sağlar. Müzik çalmak, bir sonraki parçaya atlamak veya aramaları yanıtlamak daha kolay.Kablosuz...",
    image01: product_06_image_03,

    category: "Headphone",

  },

  {
    id: "12",
    title: "JBL Wave 300 Bluetooth Kulaklık  ",
    price: 850,
    description:"JBL MV7N2TU-A Bluetooth kulaklık hüzmeleme özellikli ayrıca çift mikrofon ve çift optik sensöre sahiptir. Hareketi ve konuşmayı algılayan ivmeölçer özelliği ile kullanım kolaylığı sağlar. Müzik çalmak, bir sonraki parçaya atlamak veya aramaları yanıtlamak için",
    image01: product_06_image_02,

    category: "Headphone",

  },

  {
    id: "13",
    title: "Apple AirPods 1. Nesil ",
    price: 3000,
    description:"Apple AirPods 2. Nesil MV7N2TU-A Bluetooth kulaklık hüzmeleme özellikli çift mikrofon ve çift optik sensöre sahiptir. Hareketi ve konuşmayı algılayan ivmeölçer özelliği ile kullanım kolaylığı sağlar. Müzik çalmak, bir sonraki parçaya atlamak veya aramaları yanıtlamak için",
    image01: product_06_image_03,

    category: "Headphone",

  
  },
];

export default products;
